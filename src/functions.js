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
let age = 20;
// let welcome;
if (age < 18) {
	function welcome() {
		console.log('You are too much young');
	}
	/* welcome = function() {
		console.log('You are too much young');
	}; */
	welcome();
} else {
	function welcome() {
		console.log('You are enough adult');
	}
	/* welcome = function () {
		console.log('You are enough adult');
	}; */
	welcome();
}
// welcome();

// Arrow functions

const function3 = (par) => par * 2;

console.log(function3(5));
