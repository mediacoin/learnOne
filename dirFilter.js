var fs = require('fs');
var path = require('path');

module.exports = function dirFilter(targetDir, filter, callback){

    var filteredList = [];
    //check arguments for errors
    fs.readdir(targetDir, function (err, list){
        if (err){
            callback(err);
            return;
        }

        for (var i=0; i < list.length; i++){
            if (path.extname(list[i]).substr(1) === filter){
                filteredList.push(list[i]);
            }
        }
    callback(null, filteredList);
    })
}

/*
 * Official solution
     var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
    
      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }
*/
