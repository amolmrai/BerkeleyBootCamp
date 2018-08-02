var fs = require("fs");
fs.readFile("./best_things_ever.txt","utf8",function(err,data){

	if (err){
		return console.log(err);
	}
	//console.log(data);
	var arr = data.split(",");
	console.log(arr);
});

	

