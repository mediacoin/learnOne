var req = require ('http');

var url = process.argv[2];

var myReq = req.get(url, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log(chunk);
  });
  res.on('error', console.error);
});

myReq.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
