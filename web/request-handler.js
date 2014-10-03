var path = require('path');
var archive = require('../helpers/archive-helpers');
var utils = require('./http-helpers');
var fs = require('fs');

// require more modules/folders here!

exports.handleRequest = function (req, res, url) {

  console.log("req.url = " + req.url);
  if ( archive.isUrlInList(req.url) ){
    console.log("about to process url");
    archive.processUrl(res, req, true);
  } else {
    console.log("is not url in list");
    archive.processUrl(res, req, false);
  }
  //if yes, then fetch it
  //if no ?
  // if(hasUrl), get
  //   else, post?



  // if (req.method === 'GET') {
  //   //console.log(archive.paths);
  //   fs.readFile(archive.paths.index, 'utf8', function (err, html) {
  //     //console.log('html = ', html, 'err =',err);
  //     //console.log('it might be working');

  //     utils.serveResponse(res, html, 200);
  //   });
  // }

  // else if (req.method === 'POST') {

  //   console.log('we\'re POSTING from', req.url);
  //   utils.serveResponse(res, null, 201);


  // }
  // res.end(archive.paths.list);
};
