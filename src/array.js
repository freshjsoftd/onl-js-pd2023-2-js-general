'use strict';

const arr1 = [10, 20];
const numObj = {
    0: 0,
    1: 1,
    2: 2
}

console.log(arr1);
console.log(numObj);

const arrStr = new Array('Stiga', 'DHS');
console.log(arrStr);

// Create
arr1[2] = 50;
// Read
console.log(arr1[1]);
// Update
arr1[2] = 70
console.log(arr1);

const fruits = [
    'Apple',
    'Orange',
    'Pear',
    'Peach',
    'Pineapple',
    'melon',
    'Plum',
    'Pineapple',
]
fruits[2] = 'Mango'
console.log(fruits);
// Delete
console.log(fruits[3]);
console.log(fruits.at(-3));

const arrOf = Array.of(10, 12, 15)

console.log(arrOf);
console.log(fruits);
console.log(fruits.concat(arr1, () => {}, {}, NaN));

console.log(arrOf.fill(2, 1, 5))
console.log(arrOf)

const arrMulty = [1, [2, 3], [4, 5, [6, 7]]];
console.log(arrMulty.flat(2));

console.log(fruits.includes('sss'));
console.log(fruits.join('-'));
// console.log(fruits.reverse());

console.log(arr1.join('-'));

const subFruits = fruits.slice(1, 5)
console.log(subFruits);

const numbArr1 = [12,23,38,95,100,215,41,1000]

console.log(fruits.sort())
console.log(numbArr1.sort((a, b) => b - a));

console.log(fruits.splice(2, 0, 'Blubery'))
console.log(fruits)

console.log(numbArr1.with(2, 500));
console.log(numbArr1);

// Practice
const str1 = 'Montenegro';
const str2 = 'Аргентина манит негра'
const sep = '';

const reverseLine = (str) => {
    const sep = '';
    const strWithoutGaps = str.toLowerCase().replaceAll(' ', sep);
    console.log(strWithoutGaps);
    return strWithoutGaps.split(sep).reverse().join(sep);
    // return reverseString;
}

reverseLine(str2);
/* const reverseString = (str, sep) => str.split(sep).reverse().join(sep);

console.log(reverseString(str2, sep)); */

const arr5 = new Array(10).fill(2)

console.log(arr5)
/* for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
} */
for(let fruit of fruits){
    console.log(fruit)
}