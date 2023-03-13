'use strict';

// #TASK 4


const a = +prompt('Write first number', '');
const b = +prompt('Write second number', '');

function equal (a, b) {
    return a === b
}

console.log(equal(a, b));

function sum (a, b) {
    return a + b > 10
}

console.log(sum(a, b));


const c = +prompt('Write thrid number', '');

function negativeNumber (c) {
    return c < 0
}

console.log(negativeNumber(c))
