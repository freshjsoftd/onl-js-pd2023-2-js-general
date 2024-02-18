// __proto__ prototype
const animal = {
    type: 'common',
    limbAmount: 4,
    move() {
        console.log('I can move some way')
    },
    eat(){
        console.log('I can eat anything')
    }
}

const mammal = {
    type: 'mammal',
    eat(){
        console.log('I ate milk in My chilhood')
    }
}

const cat = {
	name: 'cat',
	maxWeight: 30,
	maxAge: 20,
	move() {
		console.log('I can run');
	},
};

mammal.__proto__ = animal;
cat.__proto__ = mammal;

console.log(mammal.limbAmount)
cat.eat()

const sonya = Object.create(cat, {
    name: {
        value: 'Sonya',
        enumerable: true,
    }
})

console.log(sonya)
// cat.type  cat.__proto__mammal__proto__animal__proto__Object

const myArr = [10];
const a = 110

console.log(myArr.valueOf());
console.log(a.valueOf());