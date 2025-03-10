let currentIndex = 0;
const slidesContainer = document.querySelector(".slideshow-container");
const slides = Array.from(document.querySelectorAll(".slide"));

// Shuffle function (Fisher-Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the slides
shuffleArray(slides);

// Append shuffled slides back to the container
slides.forEach((slide) => slidesContainer.appendChild(slide));
slides[0].classList.add("active");

function showNextSlide() {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
}

setInterval(showNextSlide, 16000);
