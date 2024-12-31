'use strict';


(() => {

    function oef5() {
        // "https://apwt.gitbook.io/webtechnologie/javascript/intro/oefeningen#oefening-5-elementen-verwijderen"
        document.querySelector(`li`).remove();
    }

    function oef7() {
        // "https://apwt.gitbook.io/webtechnologie/javascript/intro/oefeningen#oefening-7-stijlen-lezen"
        let backgroundColor = window.getComputedStyle(
            document.querySelector(`#bg-grey`)
        ).backgroundColor
        console.log(backgroundColor)
    }
})();

