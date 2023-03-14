'use strict';

// #TASK 7

//Вам нужно запросить у пользователя число. Добавить условие при котором число будет выводиться (через alert) с правильным словом: «год», «года» или «лет». Т.е. «29 лет» или «4 года».

//Ограничений по возрасту — нет, 0 тоже подходит.

//Также сделайте простую проверку, что пользователь ввел число.

let askUser = +prompt('Write a number');

switch(askUser) {
        case isNaN(askUser):
            alert('Write numbers');
            break;
        case askUser = 0:
            alert(`${askUser} лет`);
            break;
        case askUser = 1:
            alert(`${askUser} год`);
            break;
        case (askUser = 2):
            alert(`${askUser} года`)
            break;
}