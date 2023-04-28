'use strict';



document.addEventListener('DOMContentLoaded', () => {

const ulElement = document.getElementById('ulId'),
      listOfElem = ulElement.getElementsByTagName('li');




//1)
      for(let key of listOfElem) {
        console.log(key);
      }


//2)
      console.log(`Quantity of elements: ${listOfElem.length}`); 

//3)
 
      let arr = [];
      for(let value of listOfElem) {
        const textValue = value.textContent;
        console.log(textValue);
        arr.push(textValue);
      } 
      console.log(arr);

      
});


