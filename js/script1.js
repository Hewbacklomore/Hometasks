'use strict';

const ulMenu = document.querySelector('.menu'); 


const newData = JSON.parse(localStorage.getItem('formData'));

    if(!newData) throw new Error('There is no data');

    for(let key in newData) {
        const liMenu = document.createElement('li');
    
        liMenu.innerHTML = newData[key]
        ulMenu.append(liMenu)
    };


