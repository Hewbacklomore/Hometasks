'use strict';

// #Task 19


function mainFunction(callback, mult, div) { 
 
  const num1 = +prompt('Write first number', ''); 
  const num2 = +prompt('Write second number', '');  
  
  
  callback(num1, num2); 
  mult(num1, num2); 
  div(num1, num2);
  modullo(num1, num2);
  
}

const exponentiation = (a, b,) => { 

  const result = Math.pow(a, b)
  return alert(`The result of pow: ${result}`)
}

const multiplay = (a, b) => { 

  const result = Math.round(a * b)
  return alert(`The result of multiplay: ${result}`)
}

const divsion = (a, b) => { 

  const result = Math.round(a / b); 
  return alert(`The result of division: ${result}`)
}

const modullo = (a, b) => { 

  const result = Math.round(a % b)
  return alert(`The result modullo: ${result}`)
}



mainFunction(exponentiation, multiplay, divsion, modullo);  

