const video = document.querySelectorAll(".video")
const vid = document.querySelectorAll("video")


video.addEventListener("click", () => {
    video.forEach((vid) => {
        vid.play();
        vid.setAttribute("controls", "controls")
    })
    
})


// function toggleVideo() {
//     if (video.paused) {
//         video.play();
//     } else {
//         video.pause();
//     }
// }



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
