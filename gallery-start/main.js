const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

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
