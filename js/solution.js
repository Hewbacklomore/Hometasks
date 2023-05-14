'use strict';

window.addEventListener('DOMContentLoaded', function() {

    function generateList(array) {

        const ulMenu = document.createElement('ul');

        for (let i = 0; i < array.length; i++) {
          const li = document.createElement('li');
          if (Array.isArray(array[i])) {
            li.appendChild(generateList(array[i]));
          } else {
            li.textContent = array[i];
          }
          ulMenu.appendChild(li);
        }
        return ulMenu;
      }
      const myArray = [1, 2, [1.1, 1.2, 1.3], 3];
      const myUlMenu = generateList(myArray);
      document.body.appendChild(myUlMenu);
})