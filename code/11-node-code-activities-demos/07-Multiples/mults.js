//30

//30, 24, 18, 12, 6

//one way
	var num = parseFloat(process.argv[2]);
	var sum = 0;
	for (var i=num; i >= 1; i--){
		if (i % 6 == 0) sum += i;
	}

	console.log(sum);

//second way
	var num = parseFloat(process.argv[2]);
	var sum = 0;
	var quotient;
	for (var i=num; i >= 1; i--){
		quotient = i/6;
		// quotient = quotient.toString();
		quotient = quotient + "";

		if (quotient.indexOf('.') == -1) sum += i;
	}

	console.log(sum);

/*
	30 yes 30/6 = 5
	29 no 29/6 = 4 5/6
	28 no 28/6 = 4 4/6
	27 no 
	26 no 
	25 no 
	24 yes
	23 no
	22 no 
	21 no
	20 no
*/