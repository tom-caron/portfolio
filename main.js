const heroSection = document.querySelector('.hero');
const heroText = document.querySelectorAll('.hero h1, .hero p');

// Effet de déplacement sur mouvement de souris
heroSection.addEventListener('mousemove', (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 50;
    const y = (e.clientY - window.innerHeight / 2) / 50;

    heroText.forEach(element => {
        element.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Réinitialisation à la sortie de la souris
heroSection.addEventListener('mouseleave', () => {
    heroText.forEach(element => {
        element.style.transform = 'translate(0, 0)';
    });
});