'use strict';

// #Task 39

function generateList(array) {
  let ulMenu = '<ul>';

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      ulMenu += '<li>' + generateList(array[i]) + '</li>';
    } else {
      ulMenu += '<li>' + array[i] + '</li>';
    }
  }

  ulMenu += '</ul>';
  return ulMenu;
}


const generList = generateList([1, 2, [1.1, 1.2, 1.3], 3]);
document.write(generList);