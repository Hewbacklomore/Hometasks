'use strict';

// #TASK 9


// Вивести на сторінку в один рядок через кому числа від 10 до 20.

//1) Вивести на сторінку в один рядок через кому числа від 10 до 20.
let str = '';
for(let i = 10; i <= 20; i++) {
    str += i + ','
}
console.log(str.slice(0, -1));

//2) Вивести квадрати чисел від 10 до 20.
let result = 0;
for(let i = 10; i <= 20; i++) {
  result = Math.pow(i, 2)
}
console.log(result);

//3) Вивести таблицю множення на 7.

for (let i = 1; i <= 10; i++) {
  let result1 = i * 7;
  console.log(`7 x ${i} = ${result1}`); 
}

//4)Знайти суму всіх цілих чисел від 1 до 15.

let result3 = 0;

for(let i = 1; i <= 15; i++) {
  result3 += i;
}
console.log(result3);

// 5) Знайти добуток усіх цілих чисел від 15 до 35.

let result4 = 0;
for(let i = 15; i <= 35; i++) {
  result4 *= i;
}
console.log(result4);

//6) Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let result5 = 0;
for(let i = 1; i <= 500; i++) {
   result5 += i;
}
let average = result5 / 500;
console.log(average);

//7) Вивести суму лише парних чисел в діапазоні від 30 до 80.

let result6 = 0;
for(let i = 30; i <= 80; i++) {
  if(i % 2 === 0) {
    result6 += i
    console.log(result6);
  }
}


//8) Вивести всі числа в діапазоні від 100 до 200 кратні 3.


for(let i = 100; i <= 200; i++) {
  if(i % 3 === 0) {
    console.log(i);
  }
}

//9) Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let num = 15; 
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}

//10) Визначити кількість його парних дільників.

let num1 = 15;
let count = 0; 
for (let i = 1; i <= num1; i++) {
  if (num1 % i === 0 && i % 2 === 0) {
    count++;
  }
}
console.log(count);

//11) Знайти суму його парних дільників.

let num2 = 6;
let result7 = 0;

for (let i = 1; i <= num2; i++) {
  if (num2 % i === 0 && i % 2 === 0) {
    result7 += i
  }
}
console.log(result7);

// 12) Надрукувати повну таблицю множення від 1 до 10.


for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
    console.log(i + " x " + j + " = " + (i*j));
  }
}