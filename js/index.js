'use strict';

// #Task 32


(function() {

function counter(num) {
    let newCounterObj = {};
    let countIncrease = 0;
    let countDecrease = 0;
    let countValue = 0;


    function createCounter() {
         return newCounterObj = {
            increase: function() {
                num = num + 1
                return `Function increase has been called: ${countIncrease++} and resuslt function increase: ${num}`
            },
            decrease: function() {
                num = num - 1
                return `Function decrease has been called: ${countDecrease++} and resuslt function decraese: ${num}`
            },
            value: function() {
                return `Function value has been called: ${countValue++} and resuslt function value: ${num}`
            },
            getStatic: function() {
                return {
                    increase: countIncrease,
                    decrease: countDecrease,
                    value: countValue
                }
            },
            reset: function() {
                return countDecrease = 0,
                       countDecrease = 0,
                       countValue = 0;
            }
        }
    }
    return createCounter()
    
}

const myCounter1 = counter(1);


console.log(myCounter1.increase());
console.log(myCounter1.increase());
console.log(myCounter1.increase());
console.log(myCounter1.decrease());
console.log(myCounter1.getStatic());


}()) 
 