const arrow = document.querySelector('.scroll-down');
const splash = document.querySelector('.splash-page');
let opacity = 1.0;
let lastTouchY = 0; // For tracking touch positions on mobile

// Arrow click event
arrow.addEventListener('click', function (event) {
    event.preventDefault();
    navigateToHome();
});

// Scroll and touchmove events
window.addEventListener('wheel', handleScroll);
window.addEventListener('touchmove', handleScroll);
window.addEventListener('touchend', () => {
    lastTouchY = 0; // Reset after touch ends
});

function handleScroll(event) {
    let delta = 0;

    if (event.type === 'wheel') {
        delta = event.deltaY; // For desktop scroll
    } else if (event.type === 'touchmove') {
        if (lastTouchY) {
            delta = lastTouchY - event.touches[0].clientY; // Positive delta means scrolling down
        }
        lastTouchY = event.touches[0].clientY;
    }

    if (delta > 0) {
        // Scrolling downward: reduce opacity
        opacity -= 0.05;
        opacity = Math.max(0, opacity); // Clamp to a minimum of 0
        splash.style.opacity = opacity;

        if (opacity <= 0) {
            navigateToHome();
        }
    }
}

function navigateToHome() {
    splash.classList.add('fade_out');
    setTimeout(() => {
        window.location.href = "html/home.html";
    }, 500);
}
