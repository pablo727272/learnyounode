// console.log(process.argv)
// convert process.argv[2] into numbers
function sum(arr) {
  var total = 0;
  for (var i = 2; i < arr.length; i++) {
    var num = Number(arr[i]);
    //console.log(typeof num)
    total = total + num;
  }
  return total;
}
console.log(sum(process.argv));


//OFFICIAL answer
// var result = 0
//
//     for (var i = 2; i < process.argv.length; i++) {
//       result += Number(process.argv[i])
//     }
//
//     console.log(result)
