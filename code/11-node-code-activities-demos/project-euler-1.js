// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

var sum = 0;
var ismultfive, ismultthree;
for (var i=1; i<1000; i++){
	ismultfive = i % 5 == 0;
	ismultthree = i % 3 == 0;

	if (ismultfive || ismultthree){
		sum += i;
	}
}
console.log(sum);


// 50 % 5 = 0 
// 50 % 6 = 2

// is 5 a multiple of 50? 
// 	yes

// is 6 a multiple of 50?
// 	no

// is 7 a multiple of 50?
// 	no

