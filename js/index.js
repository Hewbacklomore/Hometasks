'use strict';

// #Task 26


// indexOf

const arr1 = [1, 2, 3];
const elem = 4;


function findIndex(arr, item) {

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === item) return i
    
    return -1
  }

}

console.log(findIndex(arr1, elem))


// lastIndexOf


const newString = 'Hello world';
const words = 'Hello';

function findLastIndex(str, item) {

    
}

console.log(findLastIndex(newString, words));