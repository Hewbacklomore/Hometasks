'use strict';

// #TASK 6

let a = +prompt('Write your first number', ''); //Написал через let потому что в 10 пункте мы будем класть в переменную новое значение;

//1)Если переменная a равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

a == 0 ? console.log('Correct') : console.log('Error');

//2) Если переменная a больше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.

a > 0 ? console.log('Correct') : console.log('Error');

//3) Если переменная a меньше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.

a < 0 ? console.log('Correct') : console.log('Error');

//4)  Если переменная a больше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

a >= 0 ? console.log('Correct') : console.log('Error');

//5) Если переменная a меньше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

a <= 0 ? console.log('Correct') : console.log('Error');

//6) Если переменная a не равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

a != 0 ? console.log('Correct') : console.log('Error');

//7) Если переменная a равна ‘test’, то выведите ‘Верно’, иначе выведите ‘Неверно’.

a == 'test' ? console.log('Correct') : console.log('Error'); 

//8) Если переменная a равна ‘1’ и по значению и по типу, то выведите ‘Верно’, иначе выведите ‘Неверно’.

a === '1' ? console.log('Correct') : console.log('Error'); 

//9) Если переменная a больше нуля и меньше 5-ти, то выведите ‘Верно’, иначе выведите ‘Неверно’.

if(a > 0 && a < 5) {
    console.log('Correct')
}else {
    console.log('Error')
}

//10) Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран.

if(a == 0 || a == 2) {
    console.log(a += 7);
}else {
    console.log(a /= 10);
}

//11) Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).

const b = +prompt('Write second number', '');


if(a <= 1 && b >= 3) {
    console.log(a + b)
}else {
    console.log(a - b)
}

//12)  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите ‘Верно’, в противном случае выведите ‘Неверно’.

if((a >= 2 && a <= 11) || (b >= 6 && b < 14)) {
    console.log('Correct')
}else {
    console.log('Error')
}

//13) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение ‘1’, то в переменную result запишем ‘зима’, если имеет значение ‘2’ – ‘весна’ и так далее. Решите задачу через switch-case.

const num = +prompt('Write number from 1 till 4', '');
let result = '';

    switch(num){
            case 1:
                console.log(result +='Winter');
                break;
            case 2:
                console.log(result +='Spring');
                break;
            case 3:
                console.log(result += 'Summer');
                break;
            case 4:
                console.log(result += 'Autumn');
                break;
            default:
                console.log('There are no such numbers here');
    }