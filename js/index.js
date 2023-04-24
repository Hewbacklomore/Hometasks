'use strict';

// #Task 33




const calculator = {
    
    read() {

      this.a = +prompt('Write your first number', '');
      this.b = +prompt('Write your second number', '');

      if(isNaN(this.a) || this.a === 0 || isNaN(this.b) || this.b === 0) return 'error' 

      return this
       
    },
    sum() {

        return this.a + this.b
    },
    mult() {
    
        return this.a * this.b
    }
    

}

console.log(calculator.read());
alert(calculator.sum());
alert(calculator.mult()); 

