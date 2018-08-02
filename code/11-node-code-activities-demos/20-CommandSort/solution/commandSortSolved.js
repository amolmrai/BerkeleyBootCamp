var fs = require("fs");
var unOrderNum = process.argv[2];
console.log(unOrderNum);
//Convert unOrderNum into String and then slipt
unOrderNum = unOrderNum.toString(); 
var digits = unOrderNum.split("")
//Sorting logic
sortNumArray = digits.sort();
// write file with numbers sorted in ascending order
fs.writeFile("sortNumber.txt",sortNumArray,function(err){
	if(err){
		return console.log(" Error: "+err);
	}
});