'use strict';

 (function () {

  const students = [ 
    { name: 'John', age: 20, subject: 'Math' }, 
    { name: 'Alice', age: 22, subject: 'English' }, 
    { name: 'Bob', age: 21, subject: 'History' } 
    ]; 

  function printGreetings(arr) {
    
    let greetings = [];
    let newGreetings;

    for(let {name, subject} of arr) {
      const result = `Hello, ${name}! You are study subject ${subject}`
      greetings.push(result);
      newGreetings = greetings.join('\n')
      
    }

    return newGreetings

  }

  const result = printGreetings(students);

  console.log(result);

}()) 

