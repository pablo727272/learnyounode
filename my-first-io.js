// allow access to the filesystem
var fs = require('fs');

// read from this file...  how many lines does it contain?
var fileToRead = fs.readFileSync(process.argv[2], 'utf-8');

// show contents of the incoming file at process.argv[2]
// console.log(typeof fileToRead);

// //
// var str = buf.toString();
// console.log(str);

// split this file into an array of lines
var splitFileToRead = fileToRead.split('\n');

// // show contents of the file split into lines...  5 lines (?)
// console.log(splitFileToRead[0]);

// log the number of total lines, minus the last "blank" line
console.log(splitFileToRead.length - 1);


// OFFICIAL solution
    //
    // var contents = fs.readFileSync(process.argv[2])
    // var lines = contents.toString().split('\n').length - 1
    // console.log(lines)
