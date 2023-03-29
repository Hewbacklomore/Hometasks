'use strict';

// #Task 23
/* 
function fib(num = 1) { debugger

  function changeNum() { debugger
      num += num; debugger
      return num; 
  }

  return changeNum; 

}

const result = fib(); debugger
const adder = result(); debugger
console.log(adder); debugger
 */
/* let result = 0;
for(let i = 0; i < 10; i++) {
    result += i
    if(i === 2) break
    console.log(result)

} */

let result = 0; debugger
for(let i = 0; i < 10; i++) { debugger
   for(let j = 0; j < 2; j++ ) { debugger
      result += j + i; debugger
      console.log(result); debugger
   }
}


