document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.querySelector('.btn-download');
    const cvImage = document.querySelector('.cv-image');

    cvImage.classList.add('fade-in', 'image-animation');
    downloadButton.classList.add('fade-in', 'button-animation');

    downloadButton.addEventListener('click', (event) => {
        const userConfirmed = confirm('Želite li preuzeti moj životopis?');
        if (!userConfirmed) {
            event.preventDefault(); 
        }
    });
});
