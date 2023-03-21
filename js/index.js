'use strict';

// #TASK 13


function padString (string, num, sym, bool) {
  
      if(string === '' && typeof(string) !== 'string') {
        return 'write string'
      }else if(typeof(num) !== 'number' && num < 0) {
        return 'write number or bigger than 0'
      }else if(num < string.length) {
        return string.substr(0, num)
      }

}

console.log(padString('hello', 2, '*'))
