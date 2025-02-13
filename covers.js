const videos = document.querySelectorAll('.video-bg');

videos.forEach(video => {
    video.addEventListener('play', () => {
        // Pause all other videos when one is playing
        videos.forEach(v => {
            if (v !== video) {
                v.pause();
            }
        });
    });
});


// function toggleVideo() {
//     if (video.paused) {
//         video.play();
//     } else {
//         video.pause();
//     }
// }



const menuBtn = document.querySelector("#menu-btn")
const menu = document.querySelector(".menu")
const body = document.querySelector("body")
const containerBody = document.querySelector(".container-1-body")


menuBtn.addEventListener("click", () =>{
    menu.classList.toggle("show")
    body.classList.toggle("hide-scroll")
    containerBody.classList.toggle("hide-body")

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
