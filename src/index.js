'use strict';

let strNum = '11';

function get() {
	return 1;
}

// console.log(parseInt(true));
// console.log(Number(false));

// console.log(String(Object))

// console.log(Boolean(NaN))

// console.log(NaN ** 1)
// console.log('258' + 10 - 20);

// console.log(true + false);

// console.log(!!' ');

// alert('Hi')
// console.log(confirm('Are you ready'));
// console.log(Number(prompt('Enter number')));

// Conditions
let cret = 1100;

let rating = 1100;

/* if (rating > cret) {
	console.log('It is so hi rating');
} else if (rating < cret) {
	console.log('It is so low rating');
} else {
	console.log('It is equal');
} */

// SWITCH

let variant = function get(){};

let result = typeof variant;

switch (result) {
    case 'string': 
        console.log(`${variant} is a string`);
        break;
    case 'number': 
        console.log(`${variant} is a number`);
        break;
    case 'boolean': 
        console.log(`${variant} is a boolean`);
        break;
    case 'object': 
        console.log(`${variant} is a object`);
        break;
    default: console.log(`${variant} is an unknown`);
}
