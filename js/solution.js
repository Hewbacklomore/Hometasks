'use strict';

window.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form'),
          inputEmail = form.querySelector('input[type="email"]'),
          inputFirstName = form.querySelector('input[type="text"]'),
          inputLastName = form.querySelector('#lastName'),
          inputNickName = form.querySelector('#nickName'),
          inputPassword = form.querySelector('input[type="password"]'),
          textAreaCom = form.querySelector('textarea[placeholder="Leave a comment here"]'),
          chekBox = form.querySelector('input[type="checkbox"]'); 



        

 
form.addEventListener('submit', (e)  => {

    e.preventDefault();

    let obj = {};

     if(!inputEmail.value || !chekBox.checked || !inputFirstName.value || !inputLastName.value || !inputNickName.value || !inputPassword.value ) {
        console.log('submit fields according the rules');
    }else {
        obj = {
            email: inputEmail.value,
            firstname: inputFirstName.value,
            lastname: inputLastName.value,
            nickname: inputNickName.value,
            password: inputPassword.value,
            comment: textAreaCom.value
        }
    } 
        console.log(obj);
}) 

});