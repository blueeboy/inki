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
