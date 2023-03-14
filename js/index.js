'use strict';

// #TASK 5


// 1) Скомбинировать инструкции if;

let numOrStr = prompt('input number or string');
console.log(numOrStr)


if(numOrStr === null || numOrStr.trim() === '' || !isNaN(+numOrStr)) {
    alert('Error')
}else {
    alert('Ok')
}  




// 2) Переписать код на switch .. case;



switch(numOrStr) {
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
            
}