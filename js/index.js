'use strict';

// #Task 19



function mainFunction(callback, mult, div, rules) {
 
  const num1 = +prompt('Write first number', '');
  const num2 = +prompt('Write second number', ''); 
  
  rules(num1, num2)
  callback(num1, num2);
  mult(num1, num2)
  div(num1, num2)
  
}

const exponentiation = (a, b) => {
  mainRules()

  const result = Math.pow(a, b)
  return alert(`The result of pow: ${result}`)
}

const multiplay = (a, b) => {
  mainRules()

  const result = Math.round(a * b)
  return alert(`The result of multiplay: ${result}`)
  
}

const divsion = (a, b) => {
  mainRules()

  const result = Math.round(a / b)
  return alert(`The result of division: ${result}`)

}

const modullo = (a, b) => {
  mainRules()
  
  const result = Math.round(a % b)
  return alert(`The result modullo: ${result}`)
}

const mainRules = (a, b) => {
    if(isNaN(a) || isNaN(b) || typeof a !== 'number' || typeof b !== 'number') throw new Error('Write a number')
        
} 


mainFunction(exponentiation, multiplay, divsion, modullo, mainRules)