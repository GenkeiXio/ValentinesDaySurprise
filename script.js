// JavaScript for Interactive Features
const loveLetters = document.querySelectorAll('.love-letter');
const popup = document.querySelector('.popup');
const popupMessage = document.querySelector('.popup-message');
const closeBtn = document.querySelector('.close-btn');

loveLetters.forEach(letter => {
    letter.addEventListener('click', () => {
        const message = letter.getAttribute('data-message');
        popupMessage.textContent = message;
        popup.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
});


