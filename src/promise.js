'use strict';
import { newRateSpan } from './events.js';
// Callback hell
/* setTimeout(function () {
    console.log('Its first callback');
    setTimeout(function () {
            console.log('Its second callback');
            setTimeout(function () {
                    console.log('Its third callback');
                    setTimeout(function () {
                            console.log('Its fourth callback');
                          }, 2000)
                  }, 2000)
          }, 2000)
    }, 2000) */
// Promise
const promise = new Promise((resolve, reject) => {
	setTimeout(() => resolve('Is done'), 2000);
	setTimeout(() => reject(new Error('Smth went wrong')), 2000);
})
	.then((value) => {
		console.log(value);
		return value + ' it all';
	})
    .finally(() => console.log('I print this anyway'))
	.then((done) => {
		console.log(done);
        newRateSpan.textContent = done;
        return `${done} add smth else`
	})
    .then((str) => {
        console.log(str);
        return str
    })
    // .then(null, (error) => {
    //     console.log(error.message);
    //     newRateSpan.textContent = error.message;
    // })
    .catch((error) => {
        console.log(error.message);
        newRateSpan.textContent = error.message;
    })

// promise.then((value) => value + 'Smth')

console.log(promise);
// Function return promise
function sum(a, b){
    return new Promise((resolve) => {
        const result = a + b;
        resolve(result);
    })
}

sum(5, 20)
    .then((value) => `${value}$`)
    .then(summ => console.log(summ))
// Promise API
// method all()
