'use strict';

var ImageHandler = require(process.cwd() +
                          '/app/controllers/imageHandler.server.js');

module.exports = function(app) {
  var imageHandler = new ImageHandler();

  app.route('/').get(imageHandler.index);
  app.route('/api/imagesearch/:term').get(imageHandler.getImages);
  app.route('/api/latest/imagesearch').get(imageHandler.getLogs);

};
