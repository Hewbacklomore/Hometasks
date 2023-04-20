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
    sum(3);
    sum(5);
    sum(20);

} ())