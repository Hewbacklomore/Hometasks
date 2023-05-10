'use strict';

// #Task 40

const mainTable = document.querySelector('.tableMain'),
      btn = document.querySelector('.btn');
      

    btn.addEventListener('click', function() {

     function createTable() {
      
          let number = 0;

          for(let i = 0; i < 10; i++) {
            let row = document.createElement('tr');
            for(let j = 0; j < 10; j++) {
              let colums = document.createElement('td');
              number++;
              colums.append(document.createTextNode(number));
              row.append(colums);
            }
          mainTable.appendChild(row)
        }
    } 
    
  createTable()
})

