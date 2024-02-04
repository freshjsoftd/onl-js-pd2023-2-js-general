'use strict';

/* function setTitle(rate) {
	let title;
	let address = 'Ukraine';
	if (rate >= 60) {
		title = 'MS';
	} else if (rate >= 40 && rate < 60) {
		title = 'KMS';
	} else {
		title = 'ordinary sportsmen';
	}
	const sportsmen = {
		[title]: title,
		address,
	};
	return sportsmen;
}

console.log(setTitle(60)); */

const user = {
	name: 'Jhon',
	/* say: function(){
        return 'Hello everybody'
    } */
	/* say() {
		return 'Hello everybody';
	}, */
};

user.say = function () {
	return 'Hello everybody';
};

// console.log(user.say());

// Car
let color = 'green';
const car = {
	brand: 'Toyota',
	model: 'Avalon',
	'year of relise': 1995,
	transmition: 'mechanics',
	isWell: true,
	color,
	run(driver) {
		return `Run and drive ${driver} on ${this.brand} ${this.model}`;
	},
	go: (driver) => {
		return `Run and drive ${driver} on ${this.brand} ${this.model}`;
	},
};

// console.log(car);
console.log(car.run('Bill'));
console.log('=================');
console.log(car.go('Bill'));

// console.log('color' in car)
// for ... in

/* for (let key in car) {
	if (typeof car[key] !== 'function') {
		console.log(`key ${key} = ${car[key]}`);
	}
} */

/* const car2 = {
	brand: 'Toyota',
	model: 'Avalon',
	'year of relise': 1995,
	transmition: 'mechanics',
	isWell: true,
	color,
	run(driver) {
		return `Run and drive ${driver}`;
	},
	1: 1,
};

let a = 10;
let b = 10;

let c;

c = a;

console.log(a === b);

const car3 = car;

console.log(car === car2);
console.log(car === car3);

console.log(car3)
console.log('=================');
console.log(car)
console.log('=================');
console.log(car2) */
// console.log(car2);
//

/* const emptyObj = {}
function checkEmpty(obj) {
	for (let prop in obj) {
		return false;
	}
	return true;
}
console.log(checkEmpty(emptyObj));

console.log(Object.keys(car).length === 0); */

// THIS

const desktop = {
    brand: 'Intel'
}
const laptop = {
    brand: 'Dell'
}

function showBrand(){
    return this.brand;
}

function func(){
    return this;
}

const arrowFunc = () => this;

const bindArrow = func.bind(laptop);

laptop.show = showBrand;
desktop.show = showBrand;

// console.log(func())
console.log(bindArrow());
console.log(laptop.show());
console.log(desktop.show.apply(car));

const bindShow = laptop.show.bind(car);

console.log(bindShow())