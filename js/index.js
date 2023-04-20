'use strict';

// #Task 31


(function () {

    function counter (num = 0) {

        function changeCounter (x) {
            num += x
            return num
        }
            return changeCounter
    }

    const sum = counter();
    console.log(sum(3));
    console.log(sum(5));
    console.log(sum(20));

} ())