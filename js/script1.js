'use strict';

const ulMenu = document.querySelector('.menu'); 


const newData = JSON.parse(localStorage.getItem('formData'));

for(let key in newData) {
    const liMenu = document.createElement('li');
    
    liMenu.innerHTML = newData[key]
    ulMenu.append(liMenu)
};


