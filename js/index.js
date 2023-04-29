'use strict';

// #Task 35

//1)

function factorial(num) { 

    if (isNaN(num)) { 
        return "Error"; 
    }else if(num >= 1){
      return num * factorial(num - 1); 
    }else {
      return 1
    }

}

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));


//2)

function degree(num, deg) { 
  
      if(isNaN(num) || isNaN(deg)) {
        return 'Error'; 
      }else if(deg === 0) { 
        return 1; 
      }else if( degree === 1) {
        return num
      }else { 
        return  num * degree(num, deg - 1); // 2 * 2 * 2 * 2
      }
      
      
}

console.log(degree(2, 4));
console.log(degree(2, 5));
console.log(degree(2, 0)); 
console.log(degree(2, 6)); 



//3)

function sum(a, b) { 
    
    if(b === 0) { 
      return a
    }else { 
      return sum(a + 1, b - 1)
    }
  
}

console.log(sum(3, 4));