let currentIndex = 0;
const slidesContainer = document.querySelector(".slideshow-container");
const slides = Array.from(document.querySelectorAll(".slide"));
let interval;

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

function startSlideshow() {
  clearInterval(interval); // Clear any existing interval
  interval = setInterval(showNextSlide, 16000);
}

function handleUserClick() {
  showNextSlide();
  startSlideshow(); // Reset the interval timer
}

// Start the slideshow initially
startSlideshow();

// Show next slide and reset interval on window click
window.addEventListener("click", handleUserClick);

document.addEventListener("mousemove", (event) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const hue = (event.clientX / width) * 360; // X controls the hue
  const lightness = (event.clientY / height) * 100; // Y controls the lightness

  document.body.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
});
