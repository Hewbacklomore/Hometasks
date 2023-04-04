'use strict';

// #Task 24

// 1) 

const arr = [1, 2, 3];
const arr1 = [4, 5, 6];

const newArr = arr.concat(arr1); // or spread operator [...arr, ...arr1];

// 2)

const arr2 = [1, 2, 3];
const newArr2 = arr2.reverse();

// 3)

const arr3 = [1, 2, 3];
const newArr3 = arr3.push(4, 5, 6);

// 4)

const arr4 = [1, 2, 3];
const newArr4 = arr4.unshift(4, 5, 6);

// 5)

const arr5 = ['js', 'css', 'jq'];                         
const showFirstEl = arr5.slice(0, 1)
alert(showFirstEl);

/* 
for(let i = 0; i < arr5.length; i++) {
  if(i == 0) {
    alert(arr5[i])
  }
} */

// 6) 

const arr6 = ['js', 'css', 'jq'];                         
const showLastEl = arr6.slice(2, 3)
alert(showLastEl); 

// 7)

const arr7 = [1, 2, 3, 4, 5];
const newArr7 = arr7.slice(0, 3);
console.log((newArr7));


// 8)

const arr8 = [1, 2, 3, 4, 5];
const newArr8 = arr8.slice(3, 6)
console.log(newArr8);

// 9)

const arr9 = [1, 2, 3, 4, 5];
const deleteElem = arr9.splice(1, 2);
console.log(arr9);

// 10) 

const arr10 = [1, 2, 3, 4, 5];
const newArr10 = arr10.splice(1, 3);
console.log((newArr10));

// 11)

const arr11 = [1, 2, 3, 4, 5];
arr11.splice(3, 0, 'a', 'b', 'c')
console.log(arr11);

// 12)

const arr12 = [1, 2, 3, 4, 5];   // [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const addTwoElements = arr12.splice(1, 0, 'a', 'b');
const addOneElement = arr12.splice(6, 0, 'c')
const addLastElement = arr12.push('e');
console.log(arr12);

// 13)

const arr13 = [3, 4, 1, 2, 7];
const sortedArr = arr13.sort();

// 14)

const arr14 = [5, 6, 7, 8, 9];
const result = arr14.reduce((total, sum) => total + sum);


// 15) 

const arr15 = [5, 6, 7, 8, 9];
const result1 = arr15.map((item) => item ** 2)

console.log(result1);

// 16) 

const arr16 =  [1, -3, 5, 6, -7, 8, 9, -11];
const newArrNegative = arr16.filter((num) => num < 0)
console.log(newArrNegative)

// 17) 

const arr17 = [1, -3, 5, 6, -7, 8, 9, -11];
const evenNumbers = arr17.filter((item) => item % 2 == 0)
console.log(evenNumbers);

// 18)

const arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const neweArr18 = arr18.filter((item) => item.length > 5);
console.log(neweArr18);

// 19)
 
const arr19 = [1, 2, [3, 4], 5, [6, 7]];
const newArr19 =  arr19.filter((arr) => Array.isArray(arr));
console.log(newArr19);


// 20)

const arr20 = [5, -3, 6, -5, 0, 7, 8, 9];
const newArr20 = arr20.filter((num) => num < 0);
const count = newArr20.length;
console.log(count);