'use strict';

// #TASK 5


// 1) Скомбинировать инструкции if;


 const askUser = prompt('How r u?', '');

if(askUser === 'number' || askUser === undefined || askUser === null) {
    alert('Error')
}else {
    alert('Ok')
} 




// 2) Переписать код на switch .. case;

let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch(true) {
        case numOrStr === null:
            console.log('вы отменили');
            break;
        case numOrStr.trim() === '':
            console.log('Empty String');
            break;
        case isNaN(+numOrStr):
            console.log(' number is Ba_NaN');
            break;
        default:
            console.log('OK!');
            break;
}