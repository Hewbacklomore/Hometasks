'use strict';

// #TASK 13


function padString (string, num, sym, bool = true) {

     if(typeof string !== 'string')  throw new Error('Write string')
      if(typeof num !== 'number' || Number.isNaN(num) || !isFinite(num)) {
          return ('Write a number')
     }  


     if(string === num) return string
     if(string.length > num) return string.substring(0, num)
     

     if(typeof sym !== 'string' || sym.length !== 1) throw new Error('Sym should be with one symbol with 1 length')

     if(typeof bool !== 'boolean') throw new Error('bool should be Boolean');
     
     


     const addSymbol = sym.repeat(string.length - length)

     return bool ? string + addSymbol : addSymbol + string
}

console.log(padString('hello', 8, '*')) 
console.log(padString('hello', 2)) 
console.log(padString('hello', 6, '*', false))  
