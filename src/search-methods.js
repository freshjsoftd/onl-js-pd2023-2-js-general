'use strict';

// let a;
// forEach()
const arr1 = [1, 2, 3, 8, 11];
// console.log(arr1);
/* console.log(arr1.forEach((el, i, arr1) => {
    arr1[i] = el * 5;
})); */

// console.log(arr1)
//  Own implementation of forEach
function myForEach(arr, callback, thisArg){
    for(let i = 0; i < arr.length; i++){
        callback.call(thisArg, arr[i], i, arr);
    }
}
myForEach(arr1, (el) => {
    console.log(el)
})
// Find
const arr2 = ['Donic', 'Stiga', 'DHS', 'Xiom', 'TSP'];

console.log(arr2.findIndex(el => el === 'DHSs'))
console.log(arr1.findLastIndex((el) => el % 2 === 0));

// map
const strIntArr = ['1', '5', '10']
const parseToInt = (item) => parseInt(item) * 10;
// const intArr = strIntArr.map(parseToInt);
// console.log(intArr);
// Own implementation of map
function myMap(arr, callback, thisArg){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callback.apply(thisArg, [arr[i], i, arr]));
    }
    return result;
}

console.log(myMap(strIntArr, parseToInt));