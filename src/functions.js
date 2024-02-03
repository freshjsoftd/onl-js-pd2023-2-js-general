'use strict';
// Function Declaration
/* console.log(summ(40, 50));
function summ(a, b) {
	// console.log(a + b + c);

    function innerFunction(){}
	return a + b;
}

// console.log(summ(10, 20));


// Function Expression
const showDivide = function(c, d){
    return summ;
}


function callBack(c, func) {

}

callBack(10, summ);

console.log(showDivide())

const func1 = summ;

const newFunc = showDivide();

console.log(typeof newFunc)

console.log(newFunc(20, 40)) */

// Check age
/* let age = 20;
// let welcome;
if (age < 18) {
	function welcome() {
		console.log('You are too much young');
	}
	// welcome = function() {
	// 	console.log('You are too much young');
	// };
	welcome();
} else {
	function welcome() {
		console.log('You are enough adult');
	}
	// welcome = function () {
	// 	console.log('You are enough adult');
	// };
	welcome();
}
// welcome(); */

// Arrow functions

const function3 = (par1, par2) => {
	return par1 ** par2;
};

console.log(function3(8, 2));

//  Change global var as param
/* let brand = 'Stiga';

let ttBlade = 'Donic';

function changeArg(brand = 'TSP', ttBlade = 'Xiom') {
	// brand = 'Butterfly';
	// ttBlade = 'DHS';
	console.log(brand);
	console.log(ttBlade);
	return `${brand} + ${ttBlade}`;
}
console.log(changeArg());
console.log(brand);
console.log(ttBlade); */

/* function add(a, b) {
	return (a ?? 10) + (b ?? 20);
}

console.log(add()); */

//  Calculator
/* const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mul = (a, b) => a * b;

const calculate = (num1, num2, mathOperation) => {
	if (Number.isNaN(num1 - num2)) {
		return 'Enter number, please!';
	}

	let operation;

	switch (mathOperation) {
		case '+': {
			operation = sum;
			break;
		}
		case '-': {
			operation = sub;
			break;
		}
		case '/': {
			operation = div;
			break;
		}
		case '*': {
			operation = mul;
			break;
		}
		default:
			console.log('Unknown math operation');
	}

	if (typeof operation === 'function') {
		return operation(num1, num2);
	} else {
		return 'Unknown math operation';
	}
};

const userInput1 = Number(Number(prompt('Enter first number')))
	? userInput1
	: console.log('Enter number, please!');
const userInput2 = Number(prompt('Enter second number'));
const mathOperation = prompt('Enter math operation');

const result = calculate(userInput1, userInput2, mathOperation);

console.log(result); */

/* const mul = (a, b) => a * b;

const noPureFunction = (a, b) => {
    a = a * Math.random(); 
    return a + b;
}
console.log(noPureFunction(10, 20));
console.log(noPureFunction(10, 20));
console.log(noPureFunction(10, 20));
console.log(noPureFunction(10, 20));
console.log(noPureFunction(10, 20));
console.log(noPureFunction(10, 20)); */

let c = 10;

const add1 = (d) => (c += d);

console.log(add1(10));
console.log(c);
