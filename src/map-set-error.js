// const str = 'Donic';
/* const timo = {
    fName: 'Timo',
    lName: 'Boll',
    age: 38,
    brand: 'Donic',
}
const obj = {rate: 20};
const map = new Map(Object.entries(timo));
console.log(map);

const mapEntries = map.entries();
console.log(mapEntries)
const mapArr = Array.from(mapEntries);
console.log(mapArr);
// console.log(Array.from(str))
console.log(map.get('lName'))
console.log(map.has('lName'))
// console.log(map.delete('brand'))
console.log(map.set('country', 'Germany'));
console.log(map.set('country', 'Germany'));
console.log(map.set(timo, 'Rate = 12000'));
// map[obj] = 40
for (const item of map) {
    console.log(item)
}

console.log(map);
// groupBy method */
// WeakMap
/* class Player {
	constructor(fistName, lastName, foreHand, backHand, age, rate, city) {
		this.fistName = fistName;
		this.lastName = lastName;
		this.foreHand = foreHand;
		this.backHand = backHand;
		this.age = age;
		this.rate = rate;
		this.city = city;
	}
}
const maLong = new Player(
	'Ma',
	'Long',
	'Butterfly Tenergy 19',
	'Donic Acuda S1',
	35,
	80,
	'Dnipro'
);
const xuXin = new Player(
	'Xu',
	'Xin',
	'Butterfly Tenergy 05',
	'Stiga Calibra',
	30,
	75,
	'Kiev'
);
const kokiNiva = new Player(
	'Koki',
	'Niva',
	'DHS Huricane',
	'TSP',
	25,
	35,
	'Odessa'
);
const timoBoll = new Player(
	'Timo',
	'Boll',
	'Donic Bar',
	'Donic Acuda',
	25,
	25,
	'Zaporizhzhia'
);

let kouLei = {
    fullName: 'Kou Lei',
    age: 30,
    rate: 85,
}
// const players = [maLong, xuXin, kokiNiva, timoBoll];
const players = [
    [maLong, 'Butterfly'], 
    [xuXin, 'DHS'], 
    [kokiNiva, 'Victas'], 
    [timoBoll, 'Donic'],
    [kouLei, 'Stiga']];


const mapWeak = new WeakMap(players);
console.log(mapWeak);
kouLei = null;
console.log(mapWeak);
console.log(mapWeak.get(kokiNiva));
console.log(mapWeak.get(kouLei));
console.log(mapWeak.get(kouLei)); */

// const master = { master: true };
// const candidat = { master: false };

// const result = Map.groupBy(players, ({ rate }) =>
// 	rate < 60 ? candidat : master
// );

// console.log(result);
// Set
/* const str = 'DonicDDooa';
const setStr = new Set(str);
console.log(setStr);
const arr1 = [1, 2, 3, 4, 2, 3, 1, 5, 9, 8, 9];
const setNumb = new Set(arr1);
setNumb.add(NaN)
setNumb.add({})
console.log(setNumb);
console.log(setNumb.values());
console.log(setNumb.keys());
console.log(setNumb.entries());

const arrUnic = Array.from(setNumb);
console.log(arrUnic) */
// ======================================
// Errors handler
// callSomeFunction()
// const callRealFunction = () => "It's real function";
// function tryReturn(a, b) {
// 	try {
// 		callRealFunction();
// 		callSomeFunction();
// 		console.log(`Application go on`);
//         return a + b;
// 	} catch (error) {
// 		console.log(`An error has been happened`);
// 		// console.log(error);
//         return error.name;
// 	} finally {
// 		console.log(`This message will print any way`);
// 	}
// }

// console.log(tryReturn(10, 20))

/* 
- try...catch,
- try...finally,
- try...catch...finally
*/
// Throw error
/* class User{
    constructor(userName, userAge){
        const age = parseInt(userAge);
        if(Number.isNaN(age)) throw new TypeError(`Age must be a number`);
        if(age < 0 || age > 150) throw new RangeError(`Age must be between 0 and    150`);
        this.name = userName;
        this.age = age;
    }

    printProps(){
        return `Name is ${this.name}, age is ${this.age}`
    }
}

try {
    const jhon = new User('Jhon', -10);
    console.log(jhon.printProps());
} catch (error) {
    console.log(error.name);
    console.log(error.message);
} */
// Create own Error object
/* class UserError extends Error{
    constructor(value, options, ...params){
        super(...params);
        this.name = 'UserError';
        this.argument = value;
        this.cause = options.cause ?? 'Common error';
    }
}

class User{
    constructor(userName, userAge){
        const age = parseInt(userAge);
        if(Number.isNaN(age)) 
        throw new UserError(
            userAge,
            {cause: 'Unexpected value'},
            `Age must be a number`);
        if(age < 0 || age > 150) 
        throw new UserError(
            userAge, `Age must be between 0 and 150`);
        this.name = userName;
        this.age = age;
    }

    printProps(){
        return `Name is ${this.name}, age is ${this.age}`
    }
}

try {
    const bill = new User('Bill', 40);
    const gary = new User('Garry', 'sdsd');
    console.log(bill.printProps())
    console.log(gary.printProps())
} catch (error) {
    if(error instanceof UserError){
        console.log(`Error type User. Incorrect value: ${error.argument}`);
        console.log(`Error cause is ${error.cause}`)
    } else{
        console.log(error.message)
    }

} */

// Symbol and iterator

const symb1 = Symbol('UserID');
const symb2 = Symbol('UserID');
console.log(symb1 === symb2);
const symb3 = Symbol.for('UserID');
const symb4 = Symbol.for('UserID');
console.log(symb1 === symb3);
console.log(symb4 === symb3);
console.log(Symbol.keyFor(symb3))
// obj props
const mySuperSecretPassword = Symbol('mySuperSecretPassword');
const myObj = {
    fullName: 'Bill'
};

myObj.myPassword = 'password';
myObj[mySuperSecretPassword] = 'qwerty_asdfg';

for(let key in myObj){
    console.log(`${key} = ${myObj[key]}`)
}
console.log(Object.keys(myObj))
console.log(Object.getOwnPropertyNames(myObj))
console.log(myObj[mySuperSecretPassword])
console.log(myObj)

// Iterator
const user = {
    fName: 'Jhon',
    lName: 'Doe',
    age:30,
    email: 'j-doe@gmail.com',
    phone: '+380(066)-864-22-99',
}
function iterFunction(){
    const arrEntries = Object.entries(this);
    let current = 0;
    let last = arrEntries.length;
    return {
        next(){
            if(current < last){
                return {
                    done: false,
                    value: arrEntries[current++],
                }
            }
            return {
                done: true,
            }

        }
    }
}
user[Symbol.iterator] = iterFunction;
const props = [...user];
console.log(props)