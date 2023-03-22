'use strict';

// #TASK 14




const arr = [1, 2, 3, -1, -2, -3];

function createNewPositiveArr(item) {
 
    let exampleArr = [];

    if(!Array.isArray(item)) return null;
    
    
         for(let i = 0; i < item.length; i++) {
          if(item[i] <= 0) continue
            let currentPositiveNumber = item[i];
                exampleArr.push(currentPositiveNumber)
           
        } 
  
    if(!exampleArr.length) {
      return null
    }
    return exampleArr
}


console.log(createNewPositiveArr(arr))


