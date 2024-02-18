'use strict';

/* function Country(title = 'Ukraine', capital = 'Kiev') {
	this.title = title;
	this.capital = capital;
	// this.getInfo = function(){
	//     return `Capital is ${this.capital}`
	// }
}

Country.prototype.getInfo = function () {
	return `Capital is ${this.capital}`;
};

const ukraine = new Country();
const usa = new Country('USA', 'Washington');

console.log(ukraine.getInfo());
console.log(usa.getInfo());

console.log(ukraine.getInfo === usa.getInfo);
console.log(ukraine);

console.log(usa instanceof Array) */

// arguments-spread-rest
function someFunc(a) {
	return arguments;
}

const funcExp = function (a) {
    // const arr = Array.from(arguments);
    // arr.forEach(el => console.log(el))
	return arguments;
};

const arrowFunc = (a, ...args) => args;

console.dir(someFunc);
console.dir(funcExp);
console.dir(arrowFunc);

console.log(someFunc(1, 5, true, {}));
console.log(funcExp(1, 5, true, {}));
const arrArgs = arrowFunc(1, 5, true, {})
console.log(arrArgs);
