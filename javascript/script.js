// Za animaciju strelice na splash
const arrow = document.querySelector('.scroll-down');
// Za prijelaz na home.html, odabir splash page elementa
const splash = document.querySelector('.splash-page');
// za praćenje vidljivosti
let opacity = 1.0;



//klikanje na strelicu 
arrow.addEventListener('click', function(event)
{
    event.preventDefault() // da ne navigira odmah
    splash.classList.add('fade_out');
    // nakon 1 sekunde, prebaci na home.html
    setTimeout(() => {
        window.location.href = "home.html";
    }, 1000);
}
);




// čekanje na skrolanje ili pomicanje prema dole s dodirom
window.addEventListener('wheel', handleScroll);
window.addEventListener('touchmove', handleScroll);

// funkcija za obradu skrola
function handleScroll(event) {
    // dohvaćanje točnog elementa
    const splash = document.querySelector('.splash-page');
    // smanji ili povećaj vidljivost prema skrolu
    const delta = event.deltaY; // Za detekciju smjera skrola

    if (delta > 0) {
        // ako je pozitivno, ide prema dole, znači smanji vidljivost
        opacity -= 0.05; 
    } else {
        opacity += 0.05; 
    }

    //da ne ide više od 1 i manje od 0
    opacity = Math.max(0, opacity); 
    opacity = Math.min(1, opacity); 
    
    splash.style.opacity = opacity;

    // kad je blizu 0, prebaci na home.html
    if (opacity <= 0) {
        splash.classList.add('fade_out');
        // nakon 1 sekunde, prebaci na home.html
        setTimeout(() => {
            window.location.href = "home.html";
        }, 500);
    }
}







