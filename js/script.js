'use strict';

function Student(name, surname, birth, ...studentsMark) {

    this.name = name;
    this.birth = birth;
    this.surname = surname;
    this.studentsMark = studentsMark;
    this.arrAttendance = [];
    this.arrMark = [];

     this.mark = function() {
        
        for(let i = 0; i <= this.arrMark.length; i++) {
            if(typeof this.arrMark[i] === 'undefined') {
                 return this.arrMark[i] = this.studentsMark
            }else if(this.arrMark >= 10) throw new Error('arr is full')
        }
        
    };

    this.age = function() {
        const yearNow = new Date().getFullYear();
        const studentAge = yearNow - birth 
        return studentAge
    };

    this.present = function() {
        const index = true;

        for(let i = 0; i <= this.arrAttendance.length; i++) {
            if(typeof this.arrAttendance[i] === 'undefined') {
                return this.arrAttendance[i] = index
            }else if(this.arrAttendance.length >= 10) throw new Error('the arr is full')
        }
    };
    this.absent = function() {
        const index = false;

        for(let i = 0; i <= this.arrAttendance.length; i++) {
            if(typeof this.arrAttendance[i] === 'undefined') {
                return this.arrAttendance[i] = index
            }else if(this.arrAttendance >= 10)throw new Error('the arr is full')
        }
    };

    this.summery = function() {
        
       let sumMarks = 0;
       let sumAttendance = 0;
       let resultMarks;
       let resultAttendance;

       for(let key in this.arrMark) {
       
        for(let i = 0; i < this.arrMark[key].length; i++) {
           
            sumMarks += this.arrMark[key][i];
            resultMarks = sumMarks / this.arrMark[key].length
        } 
           
       }
       console.log(resultMarks);
       for(let i = 0; i < this.arrAttendance.length; i++) {

        sumAttendance += Number(this.arrAttendance[i]);
        resultAttendance = sumAttendance / this.arrAttendance.length
    }
       console.log(resultAttendance);
        if(resultMarks > 9) {
            if(resultAttendance >= 0.9) {
                return `You are a great man`
            }
        }else if(resultMarks < 9) {
            if(resultAttendance < 0.9) {
                return `Try to be better`
            }
        }else {
            return 'You are a radish'
        }
       
    };
   
}

 const student1 = new Student('Alex', 'Banks', 1995, 6, 7, 8);
console.log('This is Alex');
console.log(student1.age());
console.log(student1.present());
console.log(student1.present());
console.log(student1.present());
console.log(student1.present());
console.log(student1.absent());
console.log(student1.arrAttendance);
console.log(student1.mark());
console.log(student1.arrMark);
console.log(student1.summery());
 
console.log('-------------------------');

const student2 = new Student('Giorgi', 'Milito', 2001, 3, 3, 3);
console.log('Questo Giorgi');
console.log(student2.age());
console.log(student2.age());
console.log(student2.present());
console.log(student2.present());
console.log(student2.present());
console.log(student2.absent());
console.log(student2.arrAttendance);
console.log(student2.mark());
console.log(student2.mark());
console.log(student2.arrMark);
console.log('hello');
console.log(student2.summery());

console.log('-------------------------');

const student3 = new Student('Alessandro', 'Giovanni', 1993, 24, 35, 16);
console.log('Questo Alessandro');
console.log(student3.age());
console.log(student3.age());
console.log(student3.present());
console.log(student3.present());
console.log(student3.present());
console.log(student3.present());
console.log(student3.present());
console.log(student3.present());
console.log(student3.present());
console.log(student3.present());
console.log(student3.present());
console.log(student3.absent());
console.log(student3.arrAttendance);
console.log(student3.mark());
console.log(student3.mark());
console.log(student3.arrMark);
console.log(student3.summery());

