'use strict';

window.addEventListener('DOMContentLoaded', function() {


const ulMenu = document.querySelector('.ulClass'),
      liElements = ulMenu.querySelectorAll('li');


// 1 каждый елемент в консоль 

for(let item of liElements) {
    console.log(item);
}


// 2 Вытянуть атрбуты имя и значения ....


let arrOfValue = [];
let arrOfName = [];

console.log(ulMenu.attributes);

for(let key of ulMenu.attributes) {
   arrOfValue.push(key.value)
   arrOfName.push(key.name)
}
console.log(arrOfValue);
console.log(arrOfName);

// 3 Изменить текст в последнем... удалить атрибут ...

    ulMenu.lastElementChild.textContent = 'Hello, my name is Arthur';

    ulMenu.firstElementChild.setAttribute('data-my-name', 'Arthur');

    ulMenu.removeAttribute('data-dog-tail')

})