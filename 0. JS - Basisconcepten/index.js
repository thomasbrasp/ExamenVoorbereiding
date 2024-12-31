'use strict';

(() => {
    function oef8() {
        //"https://apwt.gitbook.io/webtechnologie/javascript/basisconcepten/oefeningen#oefening-8-uren"
        const currentHour = 14;
        const addHours = 33;
        const newHour = currentHour + (addHours % 24)
        console.log(newHour)

        console.log(`Het is nu ${currentHour} uur.`)
        console.log(`Over ${addHours} is het ${newHour} uur.`);
    }
    function oef9() {
        //"https://apwt.gitbook.io/webtechnologie/javascript/basisconcepten/oefeningen#oefening-9-wisselgeld"
        const amountToPay = 454;
        const amountOf50s = Math.ceil(amountToPay / 50);
        const change = amountOf50s * 50 - amountToPay;

        console.log(`Te betalen bedrag is ${amountToPay}`);
        console.log(`Je hebt ${amountOf50s} briefjes van 50 nodig.`);
        console.log(`Je wisselgeld is dan ${change} euro.`);
    }
    function oef14() {
        //"https://apwt.gitbook.io/webtechnologie/javascript/basisconcepten/oefeningen#oefening-14-text-box"

    }
    function oefExtra() {
        //"https://apwt.gitbook.io/webtechnologie/javascript/basisconcepten/oefeningen-extra"
    }
})();



