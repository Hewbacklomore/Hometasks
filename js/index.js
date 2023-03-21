'use strict';

// #TASK 13


function padString (string, num, sym, bool = true) {
      
      if(string == '' && typeof(string) !== 'string') {
        return 'write string'
      }else if(typeof(num) !== 'number' && num < 0) {
        return 'write number or bigger than 0'
      }else if(num < string.length) {
        return string.substr(0, num)
      }else if(num > string.length) {
        
        if(bool) {
          if(num % string.length === 3) {
            return `${sym}${sym}${sym}${string} `
         }else if(num % string.length === 1) {
          return `${sym}${string}`
         } 
        }else if(bool === false) {
          if(num % string.length === 0) {
            return `${string}${sym}${sym}${sym}`
         }else if(num % string.length === 3) {
          return `${sym}`
         } 
        }
      }

}

console.log(padString('hello', 8, '*'))
console.log(padString('hello', 8, '*')) 
console.log(padString('hello', 2)) 
console.log(padString('hello', 6, '*', false)) 
