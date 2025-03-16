// Parallax effect for stars
document.addEventListener('mousemove', (e) => {
    const stars = document.querySelector('.stars');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    stars.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive journey start
function startJourney() {
    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        planet.style.animation = 'pulse 2s infinite';
    });
    
    // Add a cosmic sound effect
    const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU9vT18=');
    audio.play().catch(() => {}); // Ignore errors if audio can't play
    
    // Trigger animation sequence
    document.querySelector('.hero').style.transform = 'scale(1.1)';
    setTimeout(() => {
        document.querySelector('.hero').style.transform = 'scale(1)';
    }, 500);
}