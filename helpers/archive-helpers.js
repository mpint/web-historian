var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var httpHelpers = require('../web/http-helpers');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'index' : path.join(__dirname, '../web/public/index.html'),
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback){

  fs.readFile(exports.paths['list'], 'utf8', function (err, list) {
    if (err) { throw new Error();}
    var data = list.split('\n');

    callback(data);
   });
};

exports.isUrlInList = function(site){
  return exports.readListOfUrls(function(siteList){
    return siteList.indexOf(site) >= 0 && exports.isValidUrl(site) ? true : false;
  });
};

exports.addUrlToList = function(site){
  if(!exports.isUrlInList(site)){
    fs.writeFile(exports.paths['list'], site, function(err){
      if(err) throw err;
      console.log(site + ' got saved');
    });
  } else {
    console.log(site + " is already in the list");
  }
};

exports.isValidUrl = function(site){
  return site.match(/.com/);
};

exports.isURLArchived = function(){
};

exports.downloadUrls = function(){
};
exports.processUrl = function(res, req, siteExists){
  if(req.url === '/'){
    if(req.method === 'GET'){
      httpHelpers.serveResponse(res, '/index.html', 200);
    }
  }
  else if ( siteExists ){
    console.log("website exists");
  } else {
    console.log('site doesnt exist');
  }

      //else it doesn't exist and it's a valid website {
  //}
  // determine whether url is in list
  // if( exports.isUrlInList(site) ){
  //   //redirect to that site
  //   console.log("url is in list");
  //   res.writeHead(301, {Location: site} );
  //   res.end();

  // } else {
  //   //redirect to loading.html
  //   //add url to
  //   if(site !== undefined){
  //     exports.addUrlToList(site);
  //   }
  //   res.writeHead(301, {Location: exports.paths['siteAssests']+'loading.html'})
  //   res.end();
  // }
  // with readListofURLs
  // use isURLinList
  // if not addURLtoList and send work request
  // to webworker with downloadURLs
  // if (readListOfUrls()) {}
};
