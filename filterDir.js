var fs = require('fs');
var path = require('path');

var targetDir = process.argv[2];
var filter = process.argv[3];

fs.readdir(targetDir, function (err, list){
    for (var i=0; i < list.length; i++){
	if (path.extname(list[i]).substr(1) === filter){
	    console.log(list[i]);
	}
    }
})

/*
 * Official Solution
 *
var fs = require('fs')
var path = require('path')
        
fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
       console.log(file)
    })
})

*/
