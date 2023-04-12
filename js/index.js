'use strict';

// #Task 27

// 1)
const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const result = arr.reduce((accum, item) => {
 
  if(item > 0) {
      accum.count++;
      accum.sum += item
  }
 
  return accum

}, {count : 0, sum : 0})


console.log(`Quantity positive numbers: ${result.count}`);
console.log(`Sum of this numbers: ${result.sum}`);

// либо второй вариант просто через цикл for


let positiveNum = 0;
let sum = 0;


for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      positiveNum++;
      sum += arr[i]
    }

   /*  sum += arr[i] */ // Не до конца понял нужно суммировать только позитивные числа или все, поэтому решил закоментить вариант со всеми числами
}

console.log(`Quantity positive numbers: ${positiveNum}`);
console.log(`Sum of this numbers: ${sum}`);

// 2)

const arr1 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];


const min = Math.min(...arr1);
const indexOfMinElem = arr1.indexOf(min);

console.log(min);
console.log(indexOfMinElem);
// 3)


const arr2 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const max = Math.max(...arr2);
const indexOfMaxElem = arr2.indexOf(max);

console.log(max);
console.log(indexOfMaxElem);
// 4)

const arr3 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const result3 = arr3.reduce((accum, item) => {

  if(item < 0) {
    accum.count++
  }
  return accum
}, {count: 0})

console.log(`Quantity negative numbers: ${result3.count}`);

// или через цикл for

let negativeNumbers = 0;

for(let i = 0; i < arr3.length; i++) {
    if(arr3[i] < 0) {
      negativeNumbers++
    } 
}
console.log(negativeNumbers);

// 5)

const arr4 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const result4 = arr4.reduce((accum, item) => {

    if(item % 2 !== 0) {
      if(item > 0) {
          accum.notPairedPositive++;
      }
    }

    return accum

}, {notPairedPositive: 0})

console.log(result4.notPairedPositive); 

// точно так же второй вариант через цикл

let negativeNotPairedNumbers = 0;

for(let i = 0; i < arr4.length; i++) {
  if(arr4[i] % 2 !== 0) {
      if(arr4[i] > 0) {
        negativeNotPairedNumbers++;
      }
  }
}
console.log(negativeNotPairedNumbers);

// 6) 


const arr5 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const result5 = arr5.reduce((accum, item) => {

  if(item % 2 == 0) {
    if(item > 0) {
      accum.pairedPositiveNumbers++;
    }
  }
  return accum

}, {pairedPositiveNumbers: 0});

console.log(result5.pairedPositiveNumbers);

// 7) 


const arr6 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const result6 = arr6.reduce((accum, item) => {

    if(item % 2 == 0) {
      if(item > 0) {
          accum.sumPaired += item
      }
    }
    return accum
}, {sumPaired: 0});

console.log(`Sum of paired positive numbers: ${result6.sumPaired}`);

// так же через цикл for

let sum1 = 0;

for(let i = 0; i < arr6.length; i++) {
    if(arr6[i] % 2 == 0) {
      if(arr6[i] > 0) {
        sum1 += arr6[i]
      }
    }
}

console.log(`Sum of paired positive numbers: ${sum1}`);

// 8) 


const arr7 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];


 const result8 = arr7.reduce((accum, item) => {
      if(item % 2 !== 0) {
        if(item > 0) {
          accum.sumOfNotPairedPositiveNum += item
          
        }
      }
      return accum
}, {sumOfNotPairedPositiveNum: 0})

console.log(`Sum of not paired positive numbers: ${result8.sumOfNotPairedPositiveNum}`);

// 9) 

const arr8 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const result1 = arr8.reduce((accum, item) => {
      if(item > 0) {
        accum *= item
      }
    return Math.ceil(accum)
})

console.log(result1);


// 10) 

const arr9 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, 63, 4, -54, 76, -4, 12, -35, 4, 47];

const maxElem = Math.max(...arr9);

const result10 = arr9.map((item) => {
 
  if(item !== maxElem) {
      item = 0;
  } 
  return item
    
})

console.log(result10);