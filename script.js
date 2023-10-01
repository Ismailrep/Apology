const backgroundMusic = document.getElementById("backgroundMusic");

// Putar musik
window.addEventListener("load", () => {
    backgroundMusic.play().catch(error => {
        console.error("Error playing background music: ", error);
    });
});

const apologyBtn = document.getElementById("apologyBtn");
const apologyMessage = document.querySelector(".apology-message");

apologyBtn.addEventListener("click", function() {
    apologyBtn.style.display = "none";
    apologyMessage.classList.remove("hidden");
});

