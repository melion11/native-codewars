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

function sumMix(x) {
	let sum = 0;
	for (let i = 0; i < x.length; i++) {
		sum += Number(x[i]);
	}
	return sum;
}

console.log(sumMix([9, 3, '7', '3']))