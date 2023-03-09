'use strict';

// #TASK 2

const askUserHours = +prompt('Write number of hours', ''); 



const oneHourInSeconds = 60;

let hours = 0;

if(askUserHours === 'string' && askUserHours === 'undefined' && askUserHours === 'null') {
    alert('Bro, c`mon write numbers!')
}

let arrHours = [askUserHours];
for(let i = 0; i < arrHours.length; i++) {
    hours += arrHours[i] * oneHourInSeconds;
    alert(hours);
}


// Ну и второй метод через if либо можно было попробоавать switch, но больше всего мне понарвилось через массив;

/* if(askUserHours == 2) {
    hours = askUserHours * oneHourInSeconds
    alert(hours)
}else if(askUserHours == 3) {
    hours = askUserHours * oneHourInSeconds
}........  и
 */
