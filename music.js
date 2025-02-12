const jealous = document.querySelector(".jealous")
const jealousAudio = document.querySelector(".jealous-audio")
const love = document.querySelector(".love")
const loveAudio = document.querySelector(".love-audio")
const soSweet = document.querySelector(".so-sweet")
const soSweetAudio = document.querySelector(".so-sweet-audio")



// jealous.addEventListener("mouseover", () => {
//     jealousAudio.setAttribute("controls", "controls")
// })
// jealous.addEventListener("mouseleave", () => {
//     jealousAudio.removeAttribute("controls")
// })

// love.addEventListener("mouseover", () => {
//     loveAudio.setAttribute("controls", "controls")
// })

// love.addEventListener("mouseleave", () => {
//     loveAudio.removeAttribute("controls")
// })
// soSweet.addEventListener("mouseover", () => {
//     soSweetAudio.setAttribute("controls", "controls")
// })
// soSweet.addEventListener("mouseleave", () => {
//     soSweetAudio.removeAttribute("controls")
// })


function toggleTellMe() {
    if (jealousAudio.paused) {
        loveAudio.pause();
        soSweetAudio.pause();
        jealousAudio.play();
    } else {
        jealousAudio.pause();
    }
}
function toggleJealous() {
    if (jealousAudio.paused) {
        loveAudio.pause();
        soSweetAudio.pause();
        jealousAudio.play();
    } else {
        jealousAudio.pause();
    }
}
function toggleLove() {
    if (loveAudio.paused) {
        jealousAudio.pause();
        soSweetAudio.pause();
        loveAudio.play();
    } else {
        loveAudio.pause();
    }
}
function toggleSoSweet() {
    if (soSweetAudio.paused) {
        jealousAudio.pause();
        loveAudio.pause();
        soSweetAudio.play();
    } else {
        soSweetAudio.pause();
    }
}


const menuBtn = document.querySelector("#menu-btn")
const menu = document.querySelector(".menu")
const body = document.querySelector("body")


menuBtn.addEventListener("click", () =>{
    menu.classList.toggle("show")
    body.classList.toggle("hide-scroll")
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


// closeNav.addEventListener("click", ()=> {
//     menuNav.classList.toggle("hide")
//     menu.classList.toggle("hide")
//     body.classList.toggle("hide-scroll")
// })


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
  

