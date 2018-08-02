 // * `total` - this should tally up all of the money in the bank balance and display it for the user.

 //  * `deposit <number>` - this should add a positive amount to the bank balance. (No need to display the total here)

 //  * `withdraw <number>` - this should add a negative amount to the bank balance. (No need to display the total here)

 //  * `lotto` - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.

var fs = require('fs');

fs.readFile('bank.txt', 'utf8', function(err, bal){

	var cmd = process.argv[2];
	var num = parseFloat(process.argv[3]);

	// console.log(num); //it's 5 here

	// var balance = 0;
	// console.log(balance,'line 15'); //0

	var balance = parseFloat(bal);

	// console.log(balance,'line 19'); //100,000

	if (cmd == "total"){
		console.log(balance);
	}else if (cmd == "deposit"){
		console.log(balance, num); //num is undefined
		balance += num;
		fs.writeFile('bank.txt', balance, function(err){
			if (!err) return console.log('successful');
		});
	}else if (cmd == "withdraw"){
		balance -= num;
		fs.writeFile('bank.txt', balance, function(err){
			if (!err) return console.log('successful');
		});
	}else if (cmd == "lotto"){
		//ran num 1 - 10
		var num = Math.ceil(Math.random()*10);

		if (num == 5) balance += 100;
		else balance -= 25;

		fs.writeFile('bank.txt', balance, function(err){
			if (!err) return console.log('successful');
		});
	}

})

// console.log(balance,'line 37'); //still 0


