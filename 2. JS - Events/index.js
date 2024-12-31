'use strict';
(() => {
    //"https://apwt.gitbook.io/webtechnologie/javascript/events/oefeningen#oefening-5-reageren-op-muisbeweging"

    const p = document.querySelector(`p`);
    document.body.addEventListener('mousemove', (e) => {
        let x = e.clientX
        let y = e.clientY
        p.textContent = `Je muis bevindt zich op x:${x}, y:${y}`
    })
})();


