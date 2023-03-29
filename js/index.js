'use strict';

// #TASK 12

const number = +prompt('Wtite first number', '');
const secondNumber = +prompt('Write second number', '');


function numPow(num, degree = 1) {


     if(typeof num !== 'number' || typeof degree !== 'number') throw new Error('write a number')

     if(num === 0 || degree === 0) throw new Error('write a number not null')

     if(isNaN(num) || isNaN(degree)) throw new Error('write a number')
         

     return Math.pow(num, degree)

}

const result = numPow(number, secondNumber);
console.log(result)