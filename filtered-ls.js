// allow access to the filesystem
// var fs = require('fs');

// 2 args..
// 1st arg = /path/to/dir/
// 2nd arg = .*

// must use async io...  one file per line...  loop over directory...

// path to files, the files seem to always be *.md
// console.log(process.argv[2],process.argv[3]);

// set var to path
// var path = process.argv[2];  // the path provided by the tutorial
// var ext = process.argv[3]; // the extension desired found by the tutorial
// var foundFiles = []; // empty array to push matched extensions into
//
// fs.readdir(path, function(err, items) {
//   if (err) {
//     return console.log(err);
//   }
//   for (var i=0; i<items.length; i++) {
//     // console.log(items[i]);
//     var fileExt = items[i].split('.');
//     // console.log(fileExt[fileExt.length - 1]);
//     if (fileExt[fileExt.length - 1].includes(ext) && fileExt.length > 1) {
//       console.log(items[i]);
//   }
// });

// OFFICIAL solution
    var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
