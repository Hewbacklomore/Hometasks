'use strict';

let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
}

function closedObjectProperties(obj) {

    
    const descriptor = Object.getOwnPropertyNames(obj);

     for(const key in descriptor) {
        console.log(descriptor[key]);
    } 
   /*  descriptor.forEach(name => {
        console.log(obj[name]);
    }) */
}

console.log(closedObjectProperties(user))