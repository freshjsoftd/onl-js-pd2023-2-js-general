'use strict';

let arrNumb = [];
let arrSortNumb = [];
let value = 5000;
// 'O(n) - liner complexity'
const createArr = (limit = 1e5) => {
    let start = Date.now();
    for(let i = 0; i < limit; i++){
        arrNumb.push(Math.round(Math.random() * value));
    }
    console.log('O(n) - liner complexity')
    console.log(`Create an array for ${Date.now() - start} ms`);
    arrSortNumb = arrNumb.sort((a, b) => a - b);
    console.log('Native sort');
    console.log(`Sort an array for ${Date.now() - start} ms`);
    return arrNumb;
}

createArr();
// Linear find
const linearFind = (arr, value) => {
    let start = Date.now();
    for(let i = 0; i < arr.length; i++){
        if(value === arr[i]){
           console.log('liner find');
           console.log(`Find value for ${Date.now() - start} ms`);
           return i;
        }
    }
    return -1;
}

console.log(linearFind(arrNumb, 350))
// // 'O(n) - liner complexity'
const finfMax = (arr) => {
    let start = Date.now();
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    console.log(`Find max value for ${Date.now() - start} ms`);
    return max;
}

console.log(finfMax(arrNumb))
// binary finding
const binaryFind = (arr, value) => {
    let start = Date.now();
    let beginning = 0;
    let end = arr.length - 1;
    let middle;
    while(beginning <= end){
        middle = Math.round((beginning + end) / 2);
        if(arr[middle] === value){
         console.log(`Find value by binary for ${Date.now() - start} ms`); 
         return middle;  
        }

        if(arr[middle] > value){
            end = middle - 1
        }else {
            beginning = middle + 1
        }
    }
    return -1;
}

console.log(binaryFind(arrSortNumb, value))
// =============O(n^2)square complexity===========
// =============BubbleSort========================
function bubbleSort(arr) {
    let start = Date.now();
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    console.log(`Sort array by bubble for ${Date.now() - start} ms`);
    return arr;
}

bubbleSort(arrNumb)
