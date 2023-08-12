'use strict';



(function () {
    const mainBlockInput = document.querySelector('.searching');
    const mainInput = document.querySelector('.searching__input');
    const btn = document.querySelector('.searching__btn');
    const btnComments = document.createElement('button');
          btnComments.classList.add('searching__btn');

    const data = fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
            accept: 'application/json, text/plain, */*'
        }
    })


    data 
        .then(response => {
            if(!response.ok) throw new Error(`Status error: ${response.status}`)
            const data = response.json()
            return data
        }).then(data => {
            if(!Array.isArray(data)) throw new Error('array is emphty')

            
            btn.addEventListener('click', () => {
                data.filter(item => {
                    if(item.id == mainInput.value){
                        console.log(item);
                        const elem = document.createElement('div');
                        
                        elem.classList.add('posts')
                        elem.innerHTML = `<div class = "posts__title">${item.title}</div>
                                <div class = "posts__body">${item.body}</div>
                                <div class = "posts__id">${item.id}</div>
                                `
                        btnComments.textContent = 'Comments!'
                        elem.append(btnComments)
                        document.querySelector('.container').prepend(elem)
                    }else {
                        console.log('cant find id');
                    }
                    mainBlockInput.style.display = 'none'
                })
            })
           const newData = fetch('https://jsonplaceholder.typicode.com/comments', {
                     method: 'GET',
                     headers:  {
                         accept: 'application/json, text/plain, */*'
                     }
                 })
                 return newData
        }).then(response => {
            if(!response.ok) throw new Error(`Status error: ${response.status}`)

            const data = response.json();
            return data
          
        }).then(data => {
            btnComments.addEventListener('click', (e)=> {
                const previousIdElement = e.target.previousElementSibling.textContent
                data.filter(item => {
                    if(item.id == previousIdElement) {
                        const elem = document.createElement('div');
                        elem.classList.add('comments')
                    
                        elem.innerHTML = ` <div class = "comments__name">${item.name}</div>
                        <div class = "comments__mail">${item.email}</div>
                        <div class = "comments__number">${item.id}</div>
                        `
                        e.target.parentElement.append(elem)
                    }
                })
            })
        })
        .catch(error => {
            console.error(`Something went wrong ${error}`);
        })
}())