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

/* let variant = function get(){};

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
} */

// Switch with multiply case
// birds: sparrow, hawk, falcon, eagle, owl
// fishes: salmon, pike, carp, crucian, shark, tuna
// mammalia: dog, cat, whale, horse, human

let creature = 'dragon';

switch (creature) {
	case 'sparrow':
	case 'hawk':
	case 'falcon':
	case 'eagle':
	case 'owl':
		console.log('It is a bird');
		break;
	case 'salmon':
	case 'pike':
	case 'carp':
	case 'crucian':
	case 'shark':
	case 'tuna':
		console.log('It is a fish');
		break;
	case 'dog':
	case 'cat':
	case 'whale':
	case 'horse':
	case 'human':
		console.log('It is a mumal');
		break;
    default: console.log('It is an unknown creature');
}
