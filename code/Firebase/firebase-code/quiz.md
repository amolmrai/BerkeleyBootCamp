// ONE:

// make a variable named word and set it to an empty string

// on the next line add the word hello to it

// on the next line add a space to it

// on the next line add world to it

// on the next line console.log the word variable

var word = "";
word += "hello"; //word = word + "hello";
word += " "; //word = word + " ";
word += "world"; //word = word + "world";
console.log(word);




---------------------------------------------------------------------------
TWO:

// create a for loop to loop over the word variable and console.log each character inside of it

//one way
	for (var i=0; i<word.length; i++){
		console.log(word[i]);
	}

//another way
	for (var i=0; i<word.length; i++){
		console.log(word.charAt(i));
	}

//another way
	for (var i in word){
		console.log(word.charAt(i));
	}









---------------------------------------------------------------------------

THREE:

var animal = "the fox says";

// using indexOf console.log the index of the letter f in the animal variable. 
// console.log(4); // you can't just do this. Instead of 4 you have to use the animal variable 

console.log(animal.indexOf('f'));


10:54







---------------------------------------------------------------------------
FOUR:

var animal = "the giraffe says sup";

// using indexOf console.log true if the word giraffe is in the animal variable and false otherwise

// using indexOf console.log true if the word cat is in the animal variable and false otherwise.

//one way
	console.log(animal.indexOf('giraffe') >= 0);

//another way
	console.log(animal.indexOf('giraffe') > -1);

//another way
	console.log(animal.indexOf('giraffe') != -1);

//another way
	if (animal.indexOf('giraffe') > -1){
		console.log(true);
	}else {
		console.log(false);
	}






11:00
---------------------------------------------------------------------------
FIVE:

the first position of any string is ___.


0

---------------------------------------------------------------------------
// SIX:

// console.log the e in this word without using the letter e

var word = "fiesta";

//one way
	console.log(word[2]);

//another way
	console.log(word.charAt(2));

11:06

---------------------------------------------------------------------------
// SEVEN:

var greeting = "hello world";
greeting = greeting.replace(/o/g, 'c') 

// what is the value of the variable greeting?

"hellc wcrld"


--------------------------------------------------------
EIGHT:

var f = "apple";

// write code to console.log ppl in the variable f without using the letters ppl 

// I want you to use the variable f

//one way
	f[1]+f[2]+f[3];

//another way
	f.substr(1,3);

//another way
	f.substring(1,4);

//another way
	f.slice(1,4);






11:12


---------------------------------------------------------------------------
NINE:

// Capitalize the first letter in gg

var gg = "the giraffe said hi";

// HINT: the variable cat below will console log out MEESES
// var cat = "meeses";
// console.log(cat.toUpperCase());

console.log(gg[0].toUpperCase() + gg.slice(1));



11:18




---------------------------------------------------------------------------
TEN:

var animal = "moose";
//write code here to change the middle o to z

// 11:22

//one way
	var animal_arr = animal.split('');
	animal_arr[2] = 'z';
	var answer = animal_arr.join('');

//another way
	console.log(animal.substr(0,1) + 'z' + animal.substr(3,4))









----------------------------------------------------------------
ELEVEN:

// make a variable named dogs and initialize it to an empty array

// on the next line append a string named rover into the dogs array

// on the next line append a string named hunter into the dogs array

// on the next line append a string named oak into the dogs array

// on the next line console.log out the length of the dogs array

var dogs = [];
dogs.push('rover');
dogs.push('hunter');
dogs.push('oak');
console.log(dogs.length);




-------------------------11:28-------------------------------

// TWELVE: 11:41
//part one
	var letters = ['h', 'c', 'i', 'r'];

	// on the next line reverse the letters array

	// on the next line convert the letters array into a string and console log it out

	//one way
		letters.reverse();

		console.log(letters.join(''));

	//another way don't do this
		// var word = "";
		// for(var i=letters.length-1; i>=0; i--){
		// 	word += letters[i];
		// }



//part two 
	//write code below famousToms to replace "Tom Hanks" with "Tom Petty"
	var famousToms = ["Tom Cruise", "Tom Hanks", "Tom Keel"];

	famousToms[1] = "Tom Petty";

//part three
	// make a variable named nums and set it to an empty array
	// on the next line write code to add numbers 1 to 1000 into the nums array

	//one way
		var nums = [];

		for (var i=1; i<1001; i++){
			nums.push(i);
		}


	//another way
		var nums = [];

		for (var i=1; i<=1000; i++){
			nums.push(i);
		}

	//another way
		var nums = [];

		for (var i=0; i<1000; i++){
			nums.push(i+1);
		}

	//another way
		var nums = [];

		for (var i=0; i<1000; i++){
			nums[i] = i+1;
		}



// --------------------------------------------------------
// THIRTEEN:

// write a function named doubleLength that takes in an argument of str and returns the length of str * 2

function doubleLength(str){
	return str.length*2;
}

// call the doubleLength function with a value of "allen" and console log the value

console.log(doubleLength("allen"));

11:47







---------------------------------------------------------------------------
// FOURTEEN:

// make a variable named nums and set it to an array with the numbers 1002 and 1001 in it.

// on the next line write code to push numbers 1000 to 1 into the nums array

//one way
	var nums = [1002, 1001];

	for(var i=1000; i>=1; i--){
		nums.push(i);
	}

//another way
	var nums = [1002, 1001];

	for(var i=1000; i>0; i--){
		nums.push(i);
	}

11:57



------------------------------------------------
FIFTEEN:

// write a function named arrayMerge that takes in an argument named arr, and returns a string of all the elements combined

//one way
function arrayMerge(arr){
	var everything = "";

	for (var i=0; i<arr.length; i++){
		everything += arr[i];
	}

	return everything;
}

//another way
function arrayMerge(arr){
	return arr.join('');
}

-------------------------------------------------
SIXTEEN:

// write a function named arrSum that takes in an array and returns the sum of the elements in the array

//one way
function arrSum(arr){
	var sum = 0;

	for (var i=0; i<arr.length; i++){
		sum += arr[i];
	}

	return sum;
}

//another way 
function arrSum(arr){
	return arr.reduce(function(a,b){
		return a+b;
	});
}

//1,2,3
//3,3
//6
-------------------------------------------------
12:04

//SEVENTEEN:
	//part one
		//what does the following code console log out

			var a = 5;
			var b = 6;

			function returnSum(a,b){
				return a + b;
			}

			console.log(returnSum());

			//NaN 



			//12:07




	//17 part two
		//what does the following code console log out
			var a = 5; 
			var b = 6;

			function returnSum(){
				var a = 9;
				return a + b;
			}

			console.log(returnSum());
			//15



		12:11

		//17 part 3
			//what does the following code console log out
				var a = 5;
				var b = 6;

				function returnSum(){

					return a + b;
					var a = 9;
				}

				console.log(returnSum());
				NaN



12:14



//what does the following code console log out

var a = 5;
var b = 6;

function returnSum(){
var a = "hi"
return a + b;
}

console.log(returnSum());

//what does the following code console log out

var num = 0;
for (var i=9; i>=0; i--){
num += i;
}
console.log(num)

---------------------------------------------------------------------------
EIGHTEEN:

make an html page 

make a button with hello in it

include jQuery
include a script tag 

write code using jQuery so that when you click on the button it alerts hello

bonus: 

1. write down what the doctype means

2. explain the CSS box model - draw the box model


---------------------------------------------------------------------------
NINETEEN:

make a button saying arnold and have a div with an id of movieInfo

in the code using jQuery make it so that when you click on the button it makes an AJAX request to the omdb api using this url: http://www.omdbapi.com/?t the+terminator and add the Year, Awards, Actors to div with an id of movieInfo

//this is what the response form the ajax request would look like
{
Title: "The Terminator",
Year: "1984",
Rated: "R",
Released: "26 Oct 1984",
Runtime: "107 min",
Genre: "Action, Sci-Fi",
Director: "James Cameron",
Writer: "James Cameron, Gale Anne Hurd, William Wisher Jr. (additional dialogue)",
Actors: "Arnold Schwarzenegger, Michael Biehn, Linda Hamilton, Paul Winfield",
Plot: "A seemingly indestructible humanoid cyborg is sent from 2029 to 1984 to assassinate a waitress, whose unborn son will lead humanity in a war against the machines, while a soldier from that war is sent to protect her at all costs.",
Language: "English, Spanish",
Country: "UK, USA",
Awards: "5 wins & 6 nominations.",
Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BODE1MDczNTUxOV5BMl5BanBnXkFtZTcwMTA0NDQyNA@@._V1_SX300.jpg",
Metascore: "83",
imdbRating: "8.0",
imdbVotes: "628,783",
imdbID: "tt0088247",
Type: "movie",
Response: "True"
}

---------------------------------------------------------------------------
TWENTY:

make a variable called tyler and set it equal to an object with the following data of name Tyler, waterBottle true and whereLunchToday to "Tyler's house"

on the next line add a key to the tyler object called "is a bro" and set it to true

on the next line add a key to the tyler object called favBand and set it to "Iron Maiden"

on the next line update the waterBottle key in the tyler object with false

then after making the tyler object, loop over the object and alert the key and the value seperated by a space