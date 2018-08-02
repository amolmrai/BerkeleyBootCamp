
var condition = process.argv[2];
var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);

console.log(condition);
console.log(num1);
console.log(num2);

switch(condition){
	case "add":
		console.log("Addition is "+(num1+num2));
		break;
	case "subtract":
		console.log("subtract is "+(num1-num2));
		break;
	case "multiply":
		console.log("multiply is "+(num1*num2));
		break;
	case "divide":
		console.log("divide is "+(num1/num2));
		break;	
	case "remainder":
		console.log("remainder is "+(num1%num2));
		break;			

}

