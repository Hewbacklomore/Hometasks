'use strict';

// #TASK 8


// 1) //Вам даны две переменные x и y, менять их не нужно. При помощи тернарного оператора сравните их и если x больше, чем y, то выведите фразу: «x больше, чем y», иначе выведите фразу: «x не больше, чем y».

let x = 10, y = 7;

x > y ? console.log('x bigger than y') : console.log('x isnt bigger than y');

// 2) Пользователь вводит какое-то число (num). Используя конструкцию if..else, напишите код, который делает запрос: «Введите число».Если посетитель вводит четное число, то выводить «»Число » + num + » четное»», если нечетное: «Число » + num + » нечетное

 const num = +prompt('Write down your number', ''); 

 if(num % 2 == 0) {
    console.log(`Число ${num} четное`)
}else {
    console.log(`Число ${num} нечетное`)
} 

// num % 2 == 0 ? console.log(`Число ${num} четное`) : console.log(`Число ${num} нечетное`)


// 3) Напишите код, который предлагает пользователю ввести целое число. Нужно вывести на экран сколько в этом числе цифр, а также положительное оно или отрицательное. Например, «Число » + num + » однозначное положительное». Достаточно будет определить, является ли число однозначным, двухзначным или трехзначным и более.Чтобы узнать длину строки которую ввел юзер в prompt нужно использовать.


 const num1 =  prompt('Write an integer', '');
const numLength = num1.length;
const deleteMinus = num1.substring(1).length;


if(num1 >= 0) {
    if(numLength === 1) {
        console.log(`Число ${num1} однозначное положительное`)
    }else if(numLength === 2) {
        console.log(`Число ${num1} двузначное положительное`)
    }else if(numLength === 3) {
        console.log(`Число ${num1} трёхзначное положительное`)
    }else {
        console.log(`Число ${num1} многозначное положительное`)
    }
}else if(num1 < 0) {
    if(deleteMinus === 1) {
        console.log(`Число ${num1} однозначное отрицательное`)
    }else if(deleteMinus === 2) {
        console.log(`Число ${num1} двузначное отрицательное`)
    }else if(deleteMinus === 3) {
        console.log(`Число ${num1} трёхзначное отрицательное`)
    }else {
        console.log(`Число ${num1} многозначное отрицательное`)
    }
}else {
    console.log('Write an integer number')
} 


// 4) Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.Пользователь вводит поочерёдно через prompt числа. Используя конструкцию if..else, напишите код, который должен определять, какое из введенных чисел является наибольшим.


 


const a = +prompt('Write first number', '');
const b = +prompt('Write second number', '');
const c = +prompt('Write third number', '');

if(a > b && a > c) {
    console.log(`The biggest number: ${a}`);
}else if(b > a && b > c) {
    console.log(`The biggest number: ${b}`);
}else if (c > a && c > b) {
    console.log(`The biggest number: ${c}`);
}else {
    console.log('There are no max number')
} 


// 5) У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две стороны просто <лягут> на третью и треугольника не получится.Пользователь вводит поочерёдно через prompt длины трех сторон. Используя конструкцию if..else, напишите код, который должен определять, может ли существовать треугольник при таких длинах. Т. е. нужно сравнить суммы двух любых строн с оставшейся третьей стороной. Чтобы треугольник существовал, сумма всегда должна быть больше отдельной стороны.

const firstSide = +prompt('Write first number', '');
const secondSide = +prompt('Write second number', '');
const thirdSide = +prompt('Write third number', '');

if(firstSide + secondSide > thirdSide && firstSide + thirdSide > secondSide && secondSide + thirdSide > firstSide) {
    console.log('Triangle is possible')
}else {
    console.log('Triangle is impossible')
}