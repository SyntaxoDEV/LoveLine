document.addEventListener('DOMContentLoaded', function() {
    // ANIMOWANE SERCA
    const colors = ['#ffcdd2', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63'];
    const body = document.body;

    for (let i = 0; i < 80; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.fontSize = (Math.random() * 25 + 15) + 'px';
        heart.style.animationDelay = Math.random() * 10 + 's';
        heart.style.animationDuration = (Math.random() * 15 + 10) + 's';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        body.appendChild(heart);
    }

    // OBSERVER DO DISCORD FRAME
    const discordFrame = document.querySelector('.discord-frame');

    // Dodajemy klasę z animacją w CSS
    discordFrame.classList.add('animate-ready');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                discordFrame.classList.add('animate-on-scroll');
                observer.unobserve(discordFrame); // animacja tylko raz
            }
        });
    }, { threshold: 0.5 }); // 50% elementu w widoku

    observer.observe(discordFrame);
});
