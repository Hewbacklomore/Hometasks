'use strict';

// #TASK 10


// Вам нужно запросить у пользователя число. Добавить условие при котором число будет выводиться (через alert) с правильным словом: «год», «года» или «лет». Т.е. «29 лет» или «4 года».

//Ограничений по возрасту — нет, 0 тоже подходит.

//Также сделайте простую проверку, что пользователь ввел число.




const age = +prompt("How old r u", '');

if(!isNaN(age) && age !== '') {
    if(age >= 5 && age <= 20) {
      alert(`${age} лет`)
    }else if(age % 10 === 1) {
      alert(`${age} год`)
    }else if(age % 10 >= 2 && age % 10 <= 4 ) {
      alert(`${age} годa`)
    }else {
      alert(`${age} лет`)
    }
}else {
  alert('Try one more time')
}


