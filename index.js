// CAROUSEL ONE

const carousel1slides = document.querySelectorAll('#carousel1 .slide');
const carousel1buttons = document.querySelectorAll('#carousel1 .carousel-buttons button');
const slideCount = document.querySelectorAll('.slide').length;


let carousel1Index = 0;
let carousel1Interval;

// Function to show the current slide
function showCarousel1Slide(index) {
  carousel1slides.forEach((slide, idx) => {
    if (idx === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  carousel1buttons.forEach((button, idx) => {
    button.classList.toggle('active', idx === index);
  });

  carousel1Index = index;
}

// Function to start the automatic sliding
function startCarousel1AutoSlide() {
  carousel1Interval = setInterval(() => {
    const nextIndex = (carousel1Index + 1) % carousel1slides.length;
    showCarousel1Slide(nextIndex);
  }, 8000); // Change slide every 8 seconds
}

// Function to stop the automatic sliding

// Add event listeners to buttons
carousel1buttons.forEach((button) => {
  button.addEventListener('click', () => {
    stopAutoSlide();
    const slideIndex = parseInt(button.dataset.slide, 10);
    showCarousel1Slide(slideIndex);
    startCarousel1AutoSlide();
  });
});

// Initialize the carousel
showCarousel1Slide(0);
startCarousel1AutoSlide();


const menuBtn = document.querySelector("#menu-btn")
const menu = document.querySelector(".menu")
const body = document.querySelector("body")
const carousel = document.querySelector(".sub-cont")

menuBtn.addEventListener("click", () =>{
    menu.classList.toggle("show")
    body.classList.toggle("hide-scroll")
    carousel.classList.toggle("hide-carousel")
})

menuBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the page from jumping when clicking the link

    // Toggle text content
    if (this.innerText === "menu") {
      this.innerText = "close";
    } else {
      this.innerText = "menu";
    }
  });




  document.querySelectorAll(".container-4 div").forEach(circle => {
    circle.addEventListener("mouseenter", function() {
        this.style.animationPlayState = "paused"; 
    });

    circle.addEventListener("mouseleave", function() {
        this.style.animationPlayState = "running"; 
    });
});



// script.js
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, {
      threshold: 0.5 // Trigger when 50% of the section is visible
  });

  sections.forEach(section => {
      observer.observe(section);
  });
});
