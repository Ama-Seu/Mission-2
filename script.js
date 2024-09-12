// "use strict"
console.log("Connected");

// === GALLERY SECTION === //


document.addEventListener('DOMContentLoaded', () => {
const galleryContainer = document.getElementById('gallery');
const images = [
    'images/1-orchid.jpg',
    'images/2-tulip.webp',
    'images/3-dahlia.jpg',
    'images/4-carnation.jpg',
    'images/5-sunflower.jpg',
    // 'images/6-iris.jpg', - Image too blurry so left it out //
    'images/7-begonia.webp',
    'images/8-peonies.webp',
    'images/9-zinnia.jpg',
    'images/10-alstroemeria.jpg'
];

// === ADD IMAGES TO GALLERY CONTAINER === //

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    galleryContainer.appendChild(img);
});

// Loops through each image path in the images array
// The forEach loop goes through each image path in the images array and does the following:
// Creates a new <img> element.
// Sets its src attribute to the current image path.
// Adds the <img> element to the galleryContainer.
// This process ensures that all the images in the images array are dynamically added to the carousel and displayed on the webpage.

let currentIndex = 0; // Shows the current image on display

// === SHOWSLIDE FUNCTION === //

function showSlide(index) {
    const slides = document.querySelectorAll('.gallery-container img'); // Finds all the image elements inside the gallery container //
    if (index >= slides.length) {
    currentIndex = 0;
    } else if (index < 0) {
    currentIndex = slides.length - 1;
    } else {
    currentIndex = index;
}
// If the index is too big, it wraps around to the first slide.
// If the index is too small, it wraps around to the last slide.
// Otherwise, it just uses the given index

const offset = -currentIndex * 100;
galleryContainer.style.transform = `translateX(${offset}%)`;
}
// Calculates how much to move the gallery to show the current slide.
// Moves the gallery to the left by a percentage to display the correct image.

// === NEXT AND PREV SLIDE FUNCTIONS === //

window.nextSlide = function() {
    showSlide(currentIndex + 1);
};

window.prevSlide = function() {
    showSlide(currentIndex - 1);
};

// === CAROUSEL EFFECT === //

showSlide(currentIndex);
});


// === GO BACK FUNCTION === //
function goBack() {
    window.location.href = 'mission_02.html'; 
}

// === Comments for funtcions simplified === //
// showSlide(index): Updates which image is visible.
// nextSlide(): Moves to the next image.
// prevSlide(): Moves to the previous image.
// goBack(): Redirects to another page