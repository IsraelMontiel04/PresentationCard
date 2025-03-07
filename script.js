document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".card-container").addEventListener("click", function() {
        this.querySelector(".card").classList.toggle("flipped");
    });
});