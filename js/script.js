'use strict';

 (function () {

  const defaultString = "abracadabra";

  function uniqSymbolsCount(string) {

    if(typeof string !== 'string') throw new Error('typeof string isnt string')

    const mySet = new Set();


    for(let i = 0; i < string.length; i++) {
        mySet.add(string[i])
    }

    return mySet.size

  }


  const result = uniqSymbolsCount(defaultString);
  console.log(result);

}()) 
