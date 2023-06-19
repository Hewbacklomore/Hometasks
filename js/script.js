'use strict';


const arr = [13, 16, 65];


function api(item) {
    let index = 0;

    const obj = {
        value: null,
        done: false
    }

        function close() {
            if(index < item.length) {
              obj.value = item[index++]
              return obj
            }else {
                obj.value = undefined
                obj.done = true
                return obj
            }
        }
        return close
}

const preview = api(arr);
console.log(preview());
console.log(preview());
console.log(preview());  
console.log(preview());  


