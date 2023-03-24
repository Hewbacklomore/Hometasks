'use strict';

// #TASK 13


function padString (string, num, sym, bool = false) {

     if(typeof string !== string)  throw new Error('Write string')
     if(typeof num !== 'number' || isNaN(num) ) throw new Error('Write a number')
}

console.log(padString('hello', 8, '*')) 
console.log(padString('hello', 2)) 
console.log(padString('hello', 6, '*', false)) 
