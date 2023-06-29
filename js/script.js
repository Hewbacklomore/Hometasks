'use strict';

 (function () {

  const goods = [['футболка', 15], ['шорты', 25], ['носки', 5]];


      function sumOfAllPrices(arr) {

      if(!Array.isArray(arr)) throw new Error('the item isn`t arr')

      const myMap = new Map();

      for(let [item, price] of arr) {
        myMap.set(item, price);
      }
    
      const newItem = myMap.values();
      let equal = 0;
      
      for(let price of newItem) {
        equal += price
      }

      return `The total price of all items ${equal}`

  }

      const result = sumOfAllPrices(goods);
      console.log(result);
}()) 
