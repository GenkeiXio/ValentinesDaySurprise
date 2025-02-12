const prompts = [
    "Are you sure?", "Really sure??", "Are you positive?",
    "Pookie please...", "Just think about it!", "I will be really sad...",
    "Ok fine, I will stop asking...", "Just kidding, say yes please! ❤️"
];

let promptIndex = 0;

document.querySelector('.no-button').addEventListener('click', function() {
    this.textContent = prompts[promptIndex];
    promptIndex = (promptIndex + 1) % prompts.length;
    document.querySelector('.yes-button').style.fontSize = `${parseFloat(window.getComputedStyle(document.querySelector('.yes-button')).fontSize) * 1.2}px`;
});

document.querySelector('.yes-button').addEventListener('click', function() {
    sessionStorage.setItem("musicPlaying", "true");
    window.location.href = "yes_page.html";
});

document.addEventListener('DOMContentLoaded', () => {
    const bgMusic = document.getElementById("bg-music");
    if (sessionStorage.getItem("musicPlaying")) {
        bgMusic.play();
    }
    // Try playing the music automatically
    const playMusic = () => {
        bgMusic.play().catch(() => {
            console.log("Autoplay prevented, waiting for user interaction.");
        });
    };

    // Play music on first user interaction
    document.body.addEventListener("click", playMusic, { once: true });
});

document.querySelector('.home_button').addEventListener('click', function() {
    window.location.href = 'question.html';
});
