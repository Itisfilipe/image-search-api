'use strict';

var LogModel = require('../models/logs.js');
var requestify = require('requestify');

function ImageHandler() {
  this.index = function(req, res) {
    res.sendFile(process.cwd() + '/index.html');
  };

  this.getImages = function(req, res) {
    if (!req.params.term) {
      req.send({
        message: 'No params provided'
      });
    }
    var query = req.params.term;
    var offset = 10; // default offset
    if (req.query.offset) {
      offset = req.query.offset;
    }
    var url = 'https://api.imgur.com/3/gallery/search/0.json';
    requestify.request(url, {
        method: 'GET',
        params: {
          'q': query
        },
        headers: {
          'Authorization': 'Client-ID c9cf43252d5914f'
        },
        dataType: 'json'
      })
      .then(function(response) {
        // Get the response raw body
        var body = response.getBody();
        var data = body.data.slice(0, offset);
        if (body.success) {
          // console.log(data.length);
          var log = new LogModel({
            term: query,
          });
          log.save();
          res.send(data);
        }
      });

  };

  this.getLogs = function(req, res) {
    LogModel.find().sort('-when').limit(10).exec(function(err, docs) {
      if (err) {
        throw err;
      } else {
        res.send(docs);
      }
    });
  };

}

module.exports = ImageHandler;
