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
