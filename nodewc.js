var fs = require('fs')

var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();

var array = str.split('\n');

//console.log(array[0]);
var lc = array.length -1;

console.log(lc);
