'use strict';

 (function () {

    class Hamburger {
       

        constructor(size, suffering) {
                this.size = size
                this.suffering = suffering
                this.objToppings = {}
        }

        static SIZE_SMALL = {
            price: 50,
            calories: 20
        }

        static SIZE_BIG = {
            price: 100,
            calories: 40
        }

        static STUFFING_CHEESE = {
            price: 10,
            calories: 20
        }

        static STUFFING_SALAD = {
            price: 20,
            calories: 5
        }

        static STUFFING_POTATO = {
            price: 15,
            calories: 10
        }

        static TOPPING_SAUCE = {
            price: 15,
            calories: 0
        }

        static TOPPING_MAYO =  {
            price: 20,
            calories: 5
        } 

        addTopping(item) { 
           
            if(Object.values(this.objToppings).length !== 0) {
                this.objToppings = {
                    price: this.objToppings.price + item.price,
                    calories: this.objToppings.calories + item.calories
                }
                return this.objToppings
            }
            return this.objToppings = item
        }

        calculateCalories() {

            if(typeof this.size.calories !== 'number' && typeof this.suffering.calories !== 'number' && typeof this.objToppings.calories !== 'number') throw new Error('the typeof items are not number')

            const totalCalories = this.size.calories + this.suffering.calories + this.objToppings.calories

            return `Calories: ${totalCalories}`
        }

        calculatePrice() {
            if(typeof this.size.price !== 'number' && typeof this.suffering.price !== 'number' && typeof this.objToppings.price !== 'number') throw new Error('the typeof items are not number')

            const totalPrice = this.size.price + this.suffering.price + this.objToppings.price

            return `Price: ${totalPrice}`
        }

      }
      
      
      
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE); // 60 : 40
console.log(hamburger.addTopping(Hamburger.TOPPING_MAYO)); // 80 : 45
console.log(hamburger.calculateCalories());
console.log(hamburger.calculatePrice());
console.log(hamburger.addTopping(Hamburger.TOPPING_SAUCE)); // 95 : 0 = 95 : 45
console.log(hamburger.calculateCalories());
console.log(hamburger.calculatePrice());  
console.log(hamburger.addTopping(Hamburger.TOPPING_SAUCE)); // 110 : 45
console.log(hamburger.calculateCalories());
console.log(hamburger.calculatePrice());
console.log(hamburger.addTopping(Hamburger.TOPPING_MAYO)) // 130 : 50
console.log(hamburger.calculateCalories());
console.log(hamburger.calculatePrice());


}()) 
