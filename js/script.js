'use strict';

 (function () {


  const student = { name: 'Иван Иванов' }; 

  const grades = { math: 90, fiz: 85, eng: 95 }; 

  
  function saveGrades(person, marks) {
    const newGrades = new WeakMap();  

    return !newGrades.has(person, marks) ?  newGrades.set(person, marks) : 'there is no nothing inside WeakMap'
    
  }

  const result = saveGrades(student, grades);

  console.log(result);

    

}()) 
