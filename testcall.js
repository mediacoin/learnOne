var fs = require('fs');
var path = require('path');


function dirFilter(targetDir, filter, callback){
   
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
    var result = callback(null, filteredList);
    })
}

function callback(err, data){
    if(err) {
	console.log(err);
        return(err);
    }
    //return (data);
    for (var i = 0; i < data.length; i++){
        console.log(data[i]);
    }
} 


dirFilter(process.argv[2],process.argv[3], callback);
