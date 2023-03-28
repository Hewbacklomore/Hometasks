'use strict';

// #Task 20



function calculateAmountPotato () {
    const litres = 48;
    const potatoesPerLitr = 4;
    const onePotato = 75;
    const onePricePotato = 13;

    const potatoesNeed = litres * potatoesPerLitr // сколько количество картошки необходимо на 48л борща;
    const amountPotatoKg = Math.ceil((onePotato * potatoesNeed) / 1000) // узнаём кг картошки необходимое;

    const amountPrice = amountPotatoKg * onePricePotato // мы узнаём сколько денег нам нужно в общеё сумме;

    return amountPrice

}

console.log(calculateAmountPotato());





