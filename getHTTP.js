var http = require('http')

var options = {
  hostname: 'localhost',
  port: 8000,
  path: '/api/parsetime?iso=2013-08-10T12:10:15.474Z',
  //path: process.argv[2],
  method: 'GET'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('this is data\n');
req.write('more data\n');
req.end();
