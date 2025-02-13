const tellMe = document.querySelector(".tell-me")
const tellMeAudio = document.querySelector(".tell-me-audio")
const jealous = document.querySelector(".jealous")
const jealousAudio = document.querySelector(".jealous-audio")
const love = document.querySelector(".love")
const loveAudio = document.querySelector(".love-audio")
const soSweet = document.querySelector(".so-sweet")
const soSweetAudio = document.querySelector(".so-sweet-audio")
// const tellMeplayPauseBtn = document.getElementById('tell-me-playPauseBtn');
// const jealousplayPauseBtn = document.getElementById('jealous-playPauseBtn');
// const loveplayPauseBtn = document.getElementById('love-playPauseBtn');
// const soSweetplayPauseBtn = document.getElementById('so-sweet-playPauseBtn');



function toggleTellMe() {
    if (tellMeAudio.paused) {
        loveAudio.pause();
        soSweetAudio.pause();
        jealousAudio.pause();
        tellMeAudio.play()
    } else {
        tellMeAudio.pause();
    }
}

function toggleJealous() {
    if (jealousAudio.paused) {
        loveAudio.pause();
        soSweetAudio.pause();
        tellMeAudio.pause();
        jealousAudio.play();
    } else {
        jealousAudio.pause();
    }
}

function toggleLove() {
    if (loveAudio.paused) {
        jealousAudio.pause();
        soSweetAudio.pause();
        tellMeAudio.pause();
        loveAudio.play();      
    } else {
        loveAudio.pause();
    }
}
function toggleSoSweet() {
    if (soSweetAudio.paused) {
        jealousAudio.pause();
        loveAudio.pause();
        tellMeAudio.pause();
        soSweetAudio.play();
    } else {
        soSweetAudio.pause();
    }
}



const progressBar = document.getElementById('progressBar');
const progressContainer = document.getElementById('progressContainer');
const timeDisplay = document.getElementById('timeDisplay');


    document.querySelectorAll('.audio-player').forEach(player => {
    const audio = player.querySelector('audio');
    const playPauseBtn = player.querySelector('#playPauseBtn');
    const progressBar = player.querySelector('.progress-bar');
    const progressContainer = player.querySelector('.progress-container');
    const timeDisplay = player.querySelector('#timeDisplay');

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            // Pause all other audios before playing this one
            document.querySelectorAll('audio').forEach(a => a.pause());
            document.querySelectorAll('#playPauseBtn').forEach(btn => btn.textContent = 'Play Now');

            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play Now';
        }
    });

    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;

        // Update time display
        const minutes = Math.floor(audio.currentTime / 60);
        const seconds = Math.floor(audio.currentTime % 60);
        timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });

    progressContainer.addEventListener('click', (e) => {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    });

    audio.addEventListener('ended', () => {
        playPauseBtn.textContent = 'Play Now';
        progressBar.style.width = '0%';
    });

});







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
  

