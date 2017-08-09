// allow access to the filesystem
var fs = require('fs');

// building off of previous "sync" OFFICIAL solution... adding error check
    //
    fs.readFile(process.argv[2], 'utf-8', function(err,data){
      if (err) {console.log('err?', err)}
      console.log(data.toString().split('\n').length - 1);
    })


// OFFICIAL solution
    // var fs = require('fs')
    // var file = process.argv[2]
    //
    // fs.readFile(file, function (err, contents) {
    //   if (err) {
    //     return console.log(err)
    //   }
    //   // fs.readFile(file, 'utf8', callback) can also be used
    //   var lines = contents.toString().split('\n').length - 1
    //   console.log(lines)
    // })
