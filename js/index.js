'use strict';

// #Task 37

(function() {

const obj = {
  name: 'Alex',
  surname: 'Horny'
}

function showInfo(age, hair) {
  return `The name of the person:${this.name}, his surname is ${this.surname} and his age: ${age}, and his hair is ${hair}`
}

function myBund(myFun, context, ...rest) {
  return function() {
      return myFun.apply(context, rest)
  }
}

const result = myBund(showInfo, obj, 36, 'black');
console.log(result());

}());