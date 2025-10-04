const carouselImages = document.querySelectorAll('.carousel-img');
let currentIndex = 0;
setInterval(() => {
  carouselImages[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImages[currentIndex].classList.add('active');
}, 3500);
