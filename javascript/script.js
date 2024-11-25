const arrow = document.querySelector('.scroll-down');
const splash = document.querySelector('.splash-page');
let opacity = 1.0;
let lastTouchY = 0; // For tracking touch positions on mobile
let navigationTimeout = null; // To prevent premature navigation

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

    // Adjust opacity based on scroll direction
    if (delta > 0) {
        // Scrolling downward: reduce opacity
        opacity -= 0.05;
    } else if (delta < 0) {
        // Scrolling upward: increase opacity
        opacity += 0.05;
    }

    // Clamp opacity between 0 and 1
    opacity = Math.max(0, Math.min(1, opacity));
    splash.style.opacity = opacity;

    // Navigation logic: Only navigate when opacity hits 0 and delay the transition
    if (opacity <= 0 && !navigationTimeout) {
        navigationTimeout = setTimeout(() => {
            navigateToHome();
        }, 1000); // Delay increased to 1000ms
    }

    // Clear navigation if opacity is restored above 0
    if (opacity > 0 && navigationTimeout) {
        clearTimeout(navigationTimeout);
        navigationTimeout = null;
    }
}

function navigateToHome() {
    splash.classList.add('fade_out');
    setTimeout(() => {
        window.location.href = "html/home.html";
    }, 500); // Longer fade-out delay (2 seconds)
}
