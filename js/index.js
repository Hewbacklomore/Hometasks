'use strict';

// #TASK 12




const num = +prompt('Write frist number', '');
const exponent = +prompt('Write second number', ''); 

function mult(firstNum, secondNum = 1) { 
  
if(num === null || exponent === exponent) return 'some error'

   
  if(isNaN(firstNum) || isNaN(secondNum)) {  
    return 'some error'
  } 
    return Math.pow(firstNum, secondNum)
  
}

let result = mult(num, exponent); 
alert(result); 


