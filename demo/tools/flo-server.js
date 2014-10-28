'use strict';

var flo = require('fb-flo'),
    fs = require('fs'),
    path = require('path');

var dir = path.resolve(__dirname, '../public');
var server = flo(dir, { glob: ['**/*.js', '**/*.css'] }, resolver);

server.once('ready', function() {
  console.log('fb-flo server ready to rock!');
});

function resolver(filepath, callback) {
  var fullPath = path.resolve(dir, filepath);
  callback({
    resourceURL: filepath,
    contents: fs.readFileSync(fullPath).toString(),

    update: function(window, resourceURL) {
      console.log(resourceURL + " has just been updated with new content!");
    }
  });
}
