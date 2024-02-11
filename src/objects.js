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
/* let color = 'green';
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
}; */

// console.log(car);
/* console.log(car.run('Bill'));
console.log('=================');
console.log(car.go('Bill')); */

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

/* const desktop = {
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

console.log(bindShow()) */

// Constuctor
/* function Car(brand, model, transmition = 'auto', color = 'black') {
	this.brand = brand;
	this.model = model;
	this.transmition = transmition;
	this.color = color;
	this.run = function () {
		return `Run and drive on ${this.brand} ${this.model}`;
	};
}

const bmw = new Car('BMW', 'X5', 'auto', 'black');
const toyota = new Car('Toyota', 'Camry');

const extendObj = {
	maxSpeed: 350,
	year: 2000
}

const newBmw = Object.assign({}, bmw, extendObj);

// console.log(newBmw);

const objProto = Object.create(Array, {
	numb: {
		value: 20,
		enumerable: true,
		writable: true,
	},
	string: {
		value: 'str',
		enumerable: true,
		writable: true,
	},
}); */

// const audi = objProto('Audi', )

// console.log(objProto);

// console.log(bmw)
// console.log(toyota);
/* bmw.maxSpeed = 240
console.log(Object.getOwnPropertyDescriptor(bmw, 'color'));
console.log(Object.getOwnPropertyDescriptors(bmw));

Object.defineProperty(toyota, 'minSpeed', {
	value: 0,
	enumerable: true,
	writable: true,
	configurable: true,
});
Object.freeze(toyota);
console.log(Object.getOwnPropertyDescriptors(toyota));
// Object.preventExtensions(bmw);
Object.defineProperties(bmw, {
	year: {
		value: 1985,
		writable: true,
		enumerable: true
	},
	maxSpeed: {
		value: 350,
	}
})

console.log(bmw)
console.log(Object.getOwnPropertyDescriptor(bmw, 'year'));

// console.log(toyota.minSpeed = 10);
// delete toyota.minSpeed;

for (const key in toyota) {
	console.log(key)
} */

// ===============================

/* 
const arr = []

console.log(Array.isArray(arr));

// Multiply price
const price = {
    tea: 20,
    coffee: 30,
    meal: 50,
    onion: 10,
    waiter: 'Jhon Doe',
    isPaid: false,
}
for(let key in price){
    console.log(`${key} : ${price[key]}`)
}

console.log('=======================')

function multPrice(bill) {
    for (let key in bill){
        if(typeof bill[key] === 'number'){
            bill[key] *= 2;
        }
    }
}

multPrice(price)

for (let key in price) {
	console.log(`${key} : ${price[key]}`);
} */

// Math
// console.log(Math.random() * 100)

/* function getRandomRange(min, max) {
	return Math.random() * (max - min) + min;
}
console.log(getRandomRange(10, 100).toFixed(3));
console.log(getRandomRange(10, 100).toPrecision(6));
 */
// Number
/* const numb = 11225442554232554225;
console.log(numb.toExponential()); */
// Date
/* const date = new Date()
console.log(date);
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toISOString());
console.log(Date.now().toExponential()); */
// String
let sams = ' Samsung';
let gap = ' ';
let nokia = 'Nokia ';

let together = sams.concat(gap, nokia);
let end = nokia.padEnd(20, "/'");

console.log(sams.length);
console.log(sams.charAt(5));
console.log(sams.charCodeAt(2));
console.log('--------------');
console.log(together);
console.log(together.includes('s', 3));
console.log(together.indexOf('', 100));
console.log(together.lastIndexOf('a'));
console.log(nokia.repeat(3));
console.log(nokia.padEnd(20, '/\''));
// console.log(nokia);
// console.log(end);
console.log('--------------');
console.log(together.slice(3, 2));
console.log(together.split(' '));
console.log(together.toLowerCase());
console.log(together.toUpperCase());
console.log(together.trim().split(' '));