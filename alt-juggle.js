/*
var
  http = require('http'),
  urls = process.argv.slice(2),
  count = urls.length,
  responses = [],

  printResponses = function() {
    if(--count > 0) return;
    console.log(responses.join('\n'));
  };

for(var i=0; i < urls.length; i++) {
  setImmediate(function(position) {
    http.get(urls[position], function(response){
      var data = [];
      response.setEncoding('utf8');
      response.on('data', function(string){
        data.push(string);
      });
      response.on('end', function(){
        responses[position] = data.join('');
        printResponses();
      });
    });
  }, i);
}
*/

  var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
    
          results[index] = data.toString()
          count++
    
          if (count == 3)
            printResults()
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i)

