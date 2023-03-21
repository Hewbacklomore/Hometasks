'use strict';

// #TASK 12
/* 
Нужно создать функцию которая будет возводить число в степень

Запрашиваем у пользователя число (с помощью prompt)
Запрашиваем у пользователя степень, в которую это число нужно возвести (с помощью prompt)
Создаем функцию которая принимает 2 аргумента (число, степень)
Задаем аргументу который принимает степень значение по умолчанию 1
Внутри функции нужно написать проверку, если аргументы не являются числами завершить функцию с указанием того, что пользователь ввел неправильные данные, например (return ‘some error’)
 Если проверка прошла успешно, то возвести число в степень (работаем с аргументами функции)
Вернуть результат выполнения функции и завершить ее
Результат вызова функции записать в переменную и вывести пользователю через alert()
 */



const num = +prompt('Write frist number', '');
const exponent = +prompt('Write second number', ''); 

function mult(firstNum, secondNum = 1) { 
  console.log(secondNum)
  if(isNaN(firstNum) && isNaN(secondNum)) {  // if(type of firstNum !== 'number && typeof secondNum !== 'number')
    return 'some error'
  }else { 
    return Math.pow(firstNum, secondNum)
  }
}

let result = mult(num, exponent); 
alert(result); 


