const arrow = document.querySelector('.scroll-down');
const splash = document.querySelector('.splash-page');
let opacity = 1.0;
let lastTouchY = 0; 


arrow.addEventListener('click', function (event) {
    event.preventDefault();
    navigateToHome();
});


window.addEventListener('wheel', handleScroll);
window.addEventListener('touchmove', handleScroll);
window.addEventListener('touchend', () => {
    lastTouchY = 0; 
});

function handleScroll(event) {
    let delta = 0;

    if (event.type === 'wheel') {
        delta = event.deltaY; 
    } else if (event.type === 'touchmove') {
        if (lastTouchY) {
            delta = lastTouchY - event.touches[0].clientY; 
        }
        lastTouchY = event.touches[0].clientY;
    }

    if (delta > 0) {
        opacity -= 0.05;
        opacity = Math.max(0, opacity); 
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
