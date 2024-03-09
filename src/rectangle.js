'use strict';

const rootSquare = document.querySelector('#square1');
const secondSquare = document.querySelector('#square2');
const thirdSquare = document.querySelector('#square3');

rootSquare.addEventListener(
    'click',
    (e) => {
        // e.stopPropagation();
        console.log('1');
        console.log(e.target);
        console.log(e.currentTarget);
    }
    );
secondSquare.addEventListener(
    'click',
    (e) => {
        // e.stopPropagation();
        // e.stopImmediatePropagation();
        console.log('2')
    },
    // true,
    {
        capture: true,
        once: true,
    }
    );
secondSquare.addEventListener(
    'click',
    (e) => {
        // e.stopPropagation();
        console.log('2-2');
        console.log(e.target);
        console.log(e.currentTarget);
    }
    );
thirdSquare.addEventListener(
    'click',
    (e) => {
        // e.stopPropagation();
        console.log('3')
    }
    );
/* document.body.addEventListener(
    'click',
    (e) => {
        console.log('0')
    }
    ); */

