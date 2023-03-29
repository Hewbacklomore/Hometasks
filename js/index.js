'use strict';

// #Task 23
/* 
function fib(num = 1) { debugger

  
  let lastResult = ''; debugger

  for(let i = 0; i < 10; i++) { debugger
      lastResult += `${i} `; debugger
      if(i === 2) break; debugger
      console.log(lastResult); debugger
    
  }
  
  

}

const result = fib(); 
console.log(result); */
/* 
 
 function fib() {

  let string = ''
  let prev = 0;
  for(let i = 0; i <= 2; i++) {
    prev += i
    if(i === 2) break;
    console.log(prev);
    for(let j = 1; j < 2; j++) {
      prev += j
      console.log(prev)
    }  
  } 
  let next = prev;
  string += `${next}`
  console.log(string);

 }

 console.log(fib()); */

              function fib(num = 1) {
                      let result = 0;
                      let next = 0;

                      for(let i = 0; i < 10; i++) {
                        let result = num += i
                        return result
                      }
              }

              console.log(fib()); 