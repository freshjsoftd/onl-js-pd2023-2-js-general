/* // Class declaration
class Car{

}

// Class expression
const Bike = class{

}

// function Train(type){
//     this.type = type;
// }

// Train.prototype = Array
// const train = Train()

console.dir(Car);
// const car = Car(); */

// ------------Classes-----------------
class Transport{
    constructor(type){
        this.type = type;
    }
}

class Plain extends Transport{
    constructor(type, speed){
        super(type);
        this.speed = speed;
    }
}
class Ship extends Transport {}
class Train extends Transport {}
class Vechile extends Transport {
	constructor(type) {
		super(type);
		// this.speed = speed;
	}

    drive(){
        console.log('I just drive to anywhere')
    }
}

class Engine {
    constructor(volume, type){
        this.volume = volume;
        this.type = type;
    }
}
class Car extends Vechile {

    static discount = 0.1
    #price;
    #priceUnit = '$';

    engine = new Engine();
    // engine;

    static isCar(obj) {
        return obj instanceof this;
    }

    static getFullCarTitle(car){
        return `${car.brand} ${car.model}`;
    }

	constructor(type, brand, model, price, engine = new Engine()) {
		super(type);
		this.brand = brand;
		this.model = model;
		this.#price = price;
		// this.engine = engine;
		this._tankVolume = 50;
	}

    get price(){
        return this.#addUnitPrice();
    }

    set price(price){
        if(price > 0){
            this.#price = price * (1 - Car.discount);
        }
    }

    #addUnitPrice(){
        return `${this.#price} ${this.#priceUnit}`;
    }

	fillFuel(volume) {
		this._tankVolume += volume;
        return this._tankVolume >= 50
                ? `My ${this.brand} has ${this._tankVolume} liter of gas`
                : `Tank is full`;
	}

    drive(city){
        // super.drive();
        // console.log(`Go to ${city}`);
        this._tankVolume -=10;
        return this._tankVolume > 0 
                ? `Tank volume is ${this._tankVolume}`
                : 'Tank is empty'
    }
}



const honda = new Car('sedan', 'Honda', 'CRV', 30000, 2.5);

console.log(honda.price);
honda.price = 50000;
// honda.#price = 50000;
console.log(honda.price);
console.log(honda.drive('Kiev'));
console.log(honda.drive('Kiev'));
console.log(honda.drive('Kiev'));
console.log(honda.drive('Kiev'));
// console.log(honda.drive('Kiev'));
console.log(honda.fillFuel());
console.log(honda instanceof Car);

console.log(Car.isCar(honda));
console.log(Car.getFullCarTitle(honda));


const an = new Plain('plain', 300)
console.log(an)

/* class MyArray{

    constructor(...args){
        this.length = 0;
        for (let i = 0; i < args.length; i++) {
			this.push(args[i]);
		}
    }

    static isMyArray(obj){
        return obj instanceof MyArray;
    }

    push(...args){
        if(args){
            for (let i = 0; i < args.length; i++) {
				this[this.length++] = args[i];
			}
        }
        return this.length;
    }

    pop(){
        if(this.length === 0){
            return;
        }
        const lastItem = this[this.length - 1];
        delete this[--this.length];
        return lastItem;
    }

    forEach(fn){
        for(let i = 0; i < this.length; i++){
            fn(this[i], i, this)
        }
    }

    concat(...args){
        const res = new MyArray();
		this.forEach((el) => {
			res.push(el);
		});
        for (let i = 0; i < args.length; i++) {
			if (Array.isArray(args[i])) {
				res.push(...args[i]);
			} else if (MyArray.isMyArray(args[i])) {
				for (let j = 0; j < args[i].length; j++) {
					res.push(args[i][j]);
				}
			} else {
				res.push(args[i]);
			}
		}
		return res;
    }

    flat(depth = 1){
        let newMyArray = new MyArray();
        this.forEach(item => {
            if(MyArray.isMyArray(item) && depth){
                const tempMyArr = item.flat(depth - 1);
                newMyArray = newMyArray.concat(tempMyArr);
            }else if(item !== undefined){
                newMyArray.push(item);
            }
        })
        return newMyArray;
    }
}


const myArrArr = new MyArray(
	new MyArray(1, 2, new MyArray(3, 4, new MyArray(5, 6, new MyArray(7, 8))))
);

console.log(myArrArr.concat([5, 7], false, 'str'));
console.log(myArrArr.flat(4)); */
