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
      'images/6-iris.jpg',
      'images/7-begonia.webp',
      'images/8-peonies.webp',
      'images/9-zinnia.jpg',
      'images/10-alstroemeria.jpg'
    ];
  
    // === Add images to the gallery container === //
    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      galleryContainer.appendChild(img);
    });
  
    let currentIndex = 0;
  
    function showSlide(index) {
      const slides = document.querySelectorAll('.gallery-container img');
      if (index >= slides.length) {
        currentIndex = 0;
      } else if (index < 0) {
        currentIndex = slides.length - 1;
      } else {
        currentIndex = index;
      }
      const offset = -currentIndex * 100;
      galleryContainer.style.transform = `translateX(${offset}%)`;
    }
  
    window.nextSlide = function() {
      showSlide(currentIndex + 1);
    };
  
    window.prevSlide = function() {
      showSlide(currentIndex - 1);
    };
  
    // === Initialize the carousel === //

    showSlide(currentIndex);
  });
  

  // === Go Back Function === //
  function goBack() {
    window.location.href = 'mission_02.html'; // Change 'index.html' to your desired page
}