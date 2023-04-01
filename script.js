/** In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. **/

// function highAndLow(numbers) {

// 	let arrNumbers = numbers.split(' ')
// 	let arrMaxMin = [];

// 	let max = Math.max.apply(null, arrNumbers);
// 	let min = Math.min.apply(null, arrNumbers);

// 	arrMaxMin.push(max, min);

// 	let arr = arrMaxMin.join(' ')

// 	return arr;
// }

// let numbers = '8 3 -5 42 -1 0 0 -9 4 7 4 -4';
// console.log(highAndLow(numbers));




/** In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.**/

// function makeNegative(num) {
// 	if (num > 0) {
// 		return -num;
// 	} else if (num < 0) {
// 		return num;
// 	} else {
// 		return 0;
// 	}
// }



/** Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */


// function sumTwoSmallestNumbers(numbers) {

// 	const min1 = Math.min(...numbers);
// 	numbers.splice(numbers.indexOf(min1), 1);
// 	const min2 = Math.min(...numbers);

// 	return min1 + min2;
// }

// let result = sumTwoSmallestNumbers([5, 8, 12, 19, 22]);
// console.log(result);

/** Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000 */


// function past(h, m, s) {

// 	h = h * 3600000;
// 	m = m * 60000;
// 	s = s * 1000;

// 	let result = h + m + s;

// 	return result;
// }

// console.log(past(0, 1, 1))




// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// function sumMix(x) {
// 	let sum = 0;
// 	for (let i = 0; i < x.length; i++) {
// 		sum += Number(x[i]);
// 	}
// 	return sum;
// }

// console.log(sumMix([9, 3, '7', '3']))


// Task
// Given an integral number, determine if it's a square number:

// var isSquare = function (n) {
// 	if (Math.sqrt(n) % 1 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(isSquare(25));


// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

// function getSum(a, b) {
// 	let sum = 0;
// 	if (a === b) {
// 		return a || b;
// 	}

// 	if (a > b) {
// 		for (let i = b; i <= a; i++) {
// 			sum += i;
// 		}
// 		return sum;
// 	} else if (b > a) {
// 		for (let i = a; i <= b; i++) {
// 			sum += i;
// 		}
// 		return sum;
// 	}
// }

// let result = getSum(1, 4);

// console.log(result);

// Let's play! You have to return which player won! In case of a draw return Draw!.

// const rps = (p1, p2) => {
// 	const rockPaperScissors = ['rock', 'paper', 'scissors'];
// 	const player1 = rockPaperScissors.indexOf(p1);
// 	const player2 = rockPaperScissors.indexOf(p2);
// 	if (player1 == 2 && player2 == 1 ||
// 		player1 == 0 && player2 == 2 ||
// 		player1 == 1 && player2 == 0) {
// 		return 'Player 1 won!'
// 	} else if (player1 == player2) {
// 		return "Draw!"
// 	} else {
// 		return 'Player 2 won!'
// 	}
// };


// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// const binaryArrayToNumber = arr => {
// 	const arrJoin = arr.join('');
// 	const binaryValue = parseInt(arrJoin, 2);
// 	return binaryValue;
//  };

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// function greet (name, owner) {
// 	if (name === owner) {
// 	  return 'Hello boss';
// 	} else if (name !== owner) {
// 	  return 'Hello guest';
// 	}
//  }

// You're writing code to control your town's traffic lights.
// You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state
// of the light and returns a string representing the state the light should change to.

// function updateLight(current) {
  
// 	if (current === 'green') {
// 	  return 'yellow';
// 	} else if (current === 'yellow') {
// 		return 'red';
// 	 } else {
// 		return 'green'
// 	 }
  
//   }



