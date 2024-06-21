document.addEventListener('DOMContentLoaded', function() {
    const welcome = document.querySelector('.welcome-animation');
    const beginButton = document.querySelector('.begin-button');
    setTimeout(() => {
        welcome.style.opacity = 1;
        setTimeout(() => {
            beginButton.style.opacity = 1;
        }, 2000); // Button fades in after the title
    }, 500);
});

function startGame() {
    window.location.href = 'game.html'; 
}

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
}
