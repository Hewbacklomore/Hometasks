'use strict';



(function() {

    const form = document.querySelector('#form');
    const inputs = form.querySelectorAll('input, select, textarea');
    const linkSecondIndex = document.querySelector('#link');
    const data = {};


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();


        inputs.forEach(function({name, value}) {
            data[name] = value;
        });
         
         
        localStorage.setItem('formData', JSON.stringify(data));

        setTimeout(()=> {
            form.style.display = 'none';
        }, 2000)
       
        linkSecondIndex.removeAttribute('style');
        linkSecondIndex.setAttribute('style', 'font-size: 40px');
        document.body.append(linkSecondIndex);
        
    })

    document.addEventListener('DOMContentLoaded', ()=> {

        JSON.parse(localStorage.getItem('formData'));
        
    })

}())