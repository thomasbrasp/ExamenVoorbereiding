// social info
const socialPlatforms = ["youtube", "instagram", "facebook", "twitter"];
const socialLinks = ["https://www.youtube.com", "https://www.instagram.com/", "https://www.facebook.com/", "https://twitter.com/"];

// social ul
const ul = document.getElementById('socials');

// per social media een li toevoegen aan ul
for (let i=0; i<socialPlatforms.length; i++) {
    
    // het platform en de link uit arrays halen
    const platform = socialPlatforms[i];
    const link = socialLinks[i];
    
    // nodige elementen aanmaken
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    // eigenschappen van elementen juist zetten
    a.href = link;
    a.target = "_blank";
    img.src = `assets/icon${platform}.png`;

    // elementen aan elkaar koppelen en toevoegen aan website
    a.appendChild(img);
    li.appendChild(a);
    ul.appendChild(li);
}