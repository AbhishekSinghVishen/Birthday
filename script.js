document.getElementById('revealMessageButton').addEventListener('click', function() {
    var surpriseMessage = document.getElementById('surpriseMessage');
    var birthdaySong = document.getElementById('birthdaySong');
    if (surpriseMessage.classList.contains('hidden')) {
        surpriseMessage.classList.remove('hidden');
        this.textContent = 'Hide the Surprise Message';
        birthdaySong.play();
        startConfetti();
    } else {
        surpriseMessage.classList.add('hidden');
        this.textContent = 'Reveal a Surprise Message';
        birthdaySong.pause();
        stopConfetti();
    }
});

function startConfetti() {
    var confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiContainer.appendChild(confettiPiece);
    }
}

function stopConfetti() {
    var confettiContainer = document.getElementById('confetti');
    while (confettiContainer.firstChild) {
        confettiContainer.removeChild(confettiContainer.firstChild);
    }
}
