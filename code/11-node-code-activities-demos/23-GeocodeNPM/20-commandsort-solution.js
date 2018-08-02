var numbers = process.argv.slice(2);

numbers.sort(function(a,b){
	return a-b;
})

console.log(numbers);