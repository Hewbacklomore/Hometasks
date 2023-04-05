'use strict';

// #Task 25

// 1)



const arr = ['a', 'b', 'c', 'd'];

const firstPare = arr.slice(0, 2).join('+').split(',');
const secondPare = arr.slice(2, 4).join('+').split(',');

const togetherArr = firstPare.concat(secondPare)
const result = togetherArr.join(',')

alert(result);

// 2) 

const arr1 = [ 2, 5, 3, 9];

const firstPare1 = arr1.slice(0, 2);
const secondPare1 = arr1.slice(2, 4);
const resultFirstPare = firstPare1.reduce((total, item) => total * item);
const resultSecondPare = secondPare1.reduce((accum, num) => accum * num);
const result1 = resultFirstPare + resultSecondPare;

alert(result1);

// 3) 

const arr2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] // or just console.log(arr2[1][0]);

for(let i = 0; i < arr2.length; i++) {
    for(let k = 0; k < arr2[i].length; k++) {
      if(arr2[i][k] === 4) {
             alert(arr2[i][k]);
      } 
    }
}

// 4)

const obj = {                        // or just console.log(obj.js[0]);
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
}

for(let key in obj) {
  for(let item in obj[key]) {
    if(obj[key][item] === 'jQuery') {
      alert(obj[key][item]);
    }
  }
}

// 5) 

const arr5 = new Array();

for(let i = 1; i <= 6; i++) {
  arr5.push('x'.repeat(i))
}
alert(arr5);

// 6)

const arr6 = new Array();
for(let i = 1; i <= 6; i++) {
 arr6.push(String(i).repeat(i))
}

alert((arr6));

//7 

const item7 = 'x';
const quantityElem = 1;


function arrayFill(elem, num) {
  const arr7 = new Array();

  if(num === 0 || typeof num !== 'number')  throw new Error ('write a number bigger than 0')

  for(let i = 1; i <= num; i++) {
    const result = arr7.push(elem)
    
  }
  return arr7
 
}

alert(arrayFill(item7, quantityElem));

// 8)

const arr8 = [1, 2, 3, 4, 5, 6];

let sum = 0;
let count = 0;

for(let i = 0; i < arr8.length; i++) {
  sum += arr8[i];
  count++;
  if(sum > 10) break;
}
alert(count);



// 9

const arr9 = [1, 2, 3, 4, 5, 6];

const changeLastThreeEl = arr9.splice(0, 3, 6, 5, 4);
const changeFirstTreeEl = arr9.splice(3, 6, 3, 2, 1)
alert(arr9);

// 10)

const arr10 =  [[1, 2, 3], [4, 5], [6]];

let result10 = 0;

for(let key in arr10) {
 for(let item in arr10[key]) {
    result10 += arr10[key][item]
 }
  
}
alert(result10);


// 11)

const arr11 =  [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let result11 = 0;

for(let key in arr11) {
  for(let item in arr11[key]) {
    for(let elem in arr11[key][item])
    result11 += arr11[key][item][elem];
  }
}

alert(result11);