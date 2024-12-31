"use strict";

const socialPlatforms = ["youtube", "instagram", "facebook", "twitter"];
const socialLinks = ["https://www.youtube.com", "https://www.instagram.com/", "https://www.facebook.com/", "https://twitter.com/"];
const ul = document.querySelector(`#socials`);

for (let i = 0; i < socialPlatforms.length; i++) {
addSocial(socialLinks[i], socialPlatforms[i])
}

function addSocial(socialLink, socialPlatform) {
    const li = document.createElement(`li`);
    const a = document.createElement(`a`);
    const img = document.createElement(`img`);

    a.href = socialLink;
    a.target = `_blank`;
    img.src = `assets/icon${socialPlatform}.png`;

    a.appendChild(img);
    li.appendChild(a);
    ul.appendChild(li);
}
