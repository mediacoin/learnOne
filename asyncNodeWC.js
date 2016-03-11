var fs = require('fs')
var lc = undefined

function addOne(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    
    var str = fileContents.toString();
    var array = str.split('\n');
    lc = array.length -1;

    callback()
  })
}

function logMyNumber() {
  console.log(lc)
}

addOne(logMyNumber)

/*
//The official solution

    var fs = require('fs')
    var file = process.argv[2]
    
    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })

*/
