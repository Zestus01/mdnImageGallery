const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const thumbBar2 = document.querySelector('.thumb-bar2');
const displayedImage2 = document.querySelector('.displayed-img2');
const overlay2 = document.querySelector('.overlay2');
//const btn2 = document.querySelector('button2');

/* Declaring the array of image filenames */
const imageStr = [
    './images/pic1.jpg',
    './images/pic2.jpg',
    './images/pic3.jpg',
    './images/pic4.jpg',
    './images/pic5.jpg',
];
/* Declaring the alternative text for each image file */
const altStr = [
    'Close up of a human eye',
    'Some sandstone',
    'Daffodils',
    'Egyptian Hieroglyphs',
    'A nice brown butterfly',
];

/* Looping through images */
let index = 1;
for(image of imageStr){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', altStr[index]);
    thumbBar.appendChild(newImage);
    index++;
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    let btnCheck = btn.getAttribute('class');
    if(btnCheck === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0, 0, 0, 0)';
    }
});

// Setting up the second image gallery
const imageStr2 = [
    './image2/babyYoda.jpg',
    './image2/Corgi_train.jpg',
    './image2/Dembois.jpg',
    './image2/snowball-in-hell.jpg',
    './image2/Waveofthefuture.jpg',
];

const altStr2 = [
    'Baby Yoda and the Mandolorian',
    'Corgis on a train',
    'Daffodils',
    'Egyptian Hieroglyphs',
    'A nice brown butterfly',
];

let index2 = 1;
for(image of imageStr2){
    const newImage2 = document.createElement('img');
    newImage2.setAttribute('src', image);
    newImage2.setAttribute('alt', altStr2[index]);
    thumbBar2.appendChild(newImage2);
    index++;
    newImage2.addEventListener('click', e2 => {
        displayedImage2.src = e2.target.src;
        displayedImage2.alt = e2.target.alt;
    })
}