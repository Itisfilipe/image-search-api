# Image Search API
## Created for [Free Code Camp](http://freecodecamp.com)

### User stories:

  1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
  2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
  3. I can get a list of the most recently submitted search strings.

### Usage:
```
https://immense-earth-4759.herokuapp.com/api/imagesearch/cats%20funny?offset=2
```
###Output:
```javascript
[
{
url: "http://i.imgur.com/T9hRUXL.png",
snippet: "What happened to just funny shit and cats?",
context: "http://imgur.com/T9hRUXL"
},
{
url: "http://imgur.com/a/LWssZ",
snippet: "Cats are funny",
context: "http://imgur.com/LWssZ"
}
]
```
### Usage:
```
https://immense-earth-4759.herokuapp.com/api/latest/imagesearch/
```
###Output:
```javascript
[
{
term: "cats funny",
when: "2016-01-06T03:17:35.252Z"
},
{
term: "cats funny",
when: "2016-01-06T03:11:08.419Z"
},
{
term: "cats funny",
when: "2016-01-06T03:10:12.366Z"
},
{
term: "lolcats funny",
when: "2016-01-06T03:09:57.284Z"
},
{
term: "lolcats funny",
when: "2016-01-06T03:09:34.128Z"
},
{
term: "cat lol",
when: "2016-01-06T02:37:26.780Z"
},
{
term: "cat",
when: "2016-01-06T02:37:22.079Z"
}
]
  ```
