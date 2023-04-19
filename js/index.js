'use strict';

// #Task 30


function anotherSum (num) {

    function plusSum () {
        num = num + num
        return num
    }

    return plusSum 
}


const sum = anotherSum(3);
console.log(sum)


 console.log(sum(3))
 console.log(sum(5))
console.log(sum(20))



function counter (num = 1) {

    function increase () {
        num = num + 1;
        return num
    }

    return increase
}

const countIncrease = counter(10);
console.log(countIncrease);