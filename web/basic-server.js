
var http = require("http");
var urlParser = require('url');
var handler = require("./request-handler");
var utils = require('./http-helpers');
var archive = require("./archive-helpers");


var port = 8080;
var ip = "127.0.0.1";
console.log("Listening on http://" + ip + ":" + port);

// var routes = {
//   '/': handler.handleRequest,
//   //index.html': handler.handleRequest,
//   //loading.html': handler.handleRequest
// };


var server = http.createServer(function(req, res) {

  var url = urlParser.parse(req.url); // http://www.google.com/lol#hi
  var path = url.pathname;

  handler.handleRequest(req, res, path);

});

server.listen(port, ip);

