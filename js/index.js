'use strict';

// #Task 21


function simpleNumber () {
  const num = +prompt('Write your number', '');

  if(num < 1) {
      return false
 }

  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
        return false
    }
  }
    return true
}



console.log(simpleNumber());









