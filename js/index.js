'use strict';

// #Task 22


function findSmallNumDivision () {
  const num = +prompt('Write your number', '');

  if(num < 1 || isNaN(num)) throw new Error('write bigger number than 1');

  for(let i = 2; i < num; i++) {
    if(num % i === 0) return i
  }
  
}


console.log(findSmallNumDivision());





