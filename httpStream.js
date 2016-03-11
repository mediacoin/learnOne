var http = require ('http');
var bl = require('bl');
var url = process.argv[2];

var req = http.get(url, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        }).pipe(bl(function (err, data) {
                data = data.toString();
                console.log(data.length)
                console.log(data);
                //console.log(raw.replace(/\n|\r/g, ''));
    }));
    res.on('error', console.error);
});
