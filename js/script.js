'use strict';



(function () {
    const post = 'https://jsonplaceholder.typicode.com/posts/';
    const comments = 'https://jsonplaceholder.typicode.com/comments/';
    const mainInput = document.querySelector('.searching__input');
    const allBtn = document.querySelectorAll('button');

    

    allBtn.forEach(btn => {
       
        btn.addEventListener('click', (e)=> {
          
            const inputValue = +mainInput.value;

            if(e.target.className === 'searching__btn') {
                getElement(inputValue, post)
            }else if(e.target.className === 'comment') {
                getElement(inputValue, comments)
            }else {
                console.log('Something went wrong');
            }
        })
    })
    
  

          function getElement(id, ip) {

            if(id >= 0 && id <= 100) {
                fetch(ip + id) 
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    if(ip === post) {

                        const elem = document.createElement('div');
                        
                        elem.classList.add('posts')
                        elem.innerHTML = `<div class = "posts__title">${data.title}</div>
                                <div class = "posts__body">${data.body}</div>
                                <div class = "posts__id">${data.id}</div>
                                `
                        
                        document.querySelector('.container').append(elem)
                    }else if(ip === comments) {
                        const elem = document.createElement('div');
                        
                        elem.classList.add('comments')

                        elem.innerHTML = `<div class = "posts__title">${data.name}</div>
                        <div class = "posts__body">${data.email}</div>
                        <div class = "posts__id">${data.id}</div>
                        `
                
                        document.querySelector('.container').append(elem)
                    }else {
                        console.log('Something wrong with ip adress');
                    }
                 
                }).catch(error => {
                    console.error(`Something goes wrong: ${error}`)
                })

            }else {
                console.log('cant find ID');
            }

          }
}())