'use strict';

// #TASK 12

const number = +prompt('Wtite first number', '');
const secondNumber = +prompt('Write second number', '');


function numPow(num, degree = 1) {

     if(num === null || degree === null) return 'some error'

     if(isNaN(num) || isNaN(degree)) return 'some error'
         

     return Math.pow(num, degree)

}

const result = numPow(number, secondNumber);
console.log(result)