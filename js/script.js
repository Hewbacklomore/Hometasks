'use strict';

(function () {


    class Gallery {
        

        constructor(url, btn) {
            this.url = url
           

            this.init()

        }

        async requestToServer(ip) {

            try{
            const data = await fetch(ip);
            const response = await data.json()
            
            return response
            }catch(error) {
                console.log('error');
            }finally {
                console.log('It`s OK!');
            }
        }

       async createAlbum() {
            
            const urlDomen = `${this.url}albums`
            const data = await this.requestToServer(urlDomen)

            const elem = document.createElement('div')
            elem.classList.add('albums__item');
            
            
   
            this.templateForAlbum(elem, data)
           
            document.querySelector('.albums').append(elem)
            
        }

        templateForAlbum(item, dataAlbum) {
            
            if(!Array.isArray(dataAlbum)) return []
            if(!item && !list) throw new Error('Thete are no items')

           /*  dataAlbum.forEach(elem => {
                item.innerHTML += `<div class="col">${elem.title}
                <button id = "${elem.id}" class = "albums__btn">Tap Here</button>
                </div>
                `
            }) */
            for(let i = 0; i < dataAlbum.length; i++) {
                /* item.innerHTML += `<div class="col">${dataAlbum[i].title}
                <button id = "${dataAlbum[i].id}" class = "albums__btn">Tap Here</button>
                </div>
                ` */
                const btn = document.createElement('button')
                const itemNew = document.createElement('div')
                btn.classList.add('btn-success')
                itemNew.classList.add('col')

                itemNew.append(dataAlbum[i].title)
                item.append(itemNew)
                btn.setAttribute('id', dataAlbum[i].id)
                itemNew.append(btn)
                this.eventListeners(btn)
            }
            
            
        }

        createPhotos() {

            
            

        }

        templateForPhotos() {

            const elem = document.createElement('div')
            elem.classList.add('photos')
        }

      

        eventListeners(btn) {
            if(!btn) throw new Error('there is no button')
            btn.textContent = 'Tap Here'

            
           /*  btn.addEventListener('click', ()=> {
                console.log('hello');
            }) */
        } 

        init() {
            document.addEventListener('DOMContentLoaded', ()=> {
                this.createAlbum()
             
            })
        }
        
    }

    const myApp = new Gallery('https://jsonplaceholder.typicode.com/')
}())