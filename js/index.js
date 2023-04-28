'use strict';

// #Task 35
/* 
function getFactorial(num) {
  
  function factorial() {
      if(num) num * ()
  }

   
    
};

console.log(getFactorial(3));
 */

function factorial(n) { debugger
  if (typeof(n) !== 'number' || !Number.isInteger(n)) { debugger
      return "Ошибка, проверьте данные"; debugger
  }

  if (n >= 1) { debugger
      return n * factorial(n - 1); debugger
  } else { debugger
      return 1; debugger
  }

}

console.log(factorial(5)); debugger

