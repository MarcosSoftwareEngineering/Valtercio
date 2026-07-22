document.addEventListener('DOMContentLoaded', () => {
    
    function fireConfetti() {
        const duration = 2500;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

        function randomInRange(min, max) { 
            return Math.random() * (max - min) + min; 
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            
            const particleCount = 50 * (timeLeft / duration);
            
            confetti(Object.assign({}, defaults, { 
                particleCount, 
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
            }));
            
            confetti(Object.assign({}, defaults, { 
                particleCount, 
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
            }));
        }, 250);
    }

    // Dispara a animação de confetes
    fireConfetti();

    // Gerencia a transição da Splash Screen para o Conteúdo Principal
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        const mainContent = document.getElementById('main-content');
        const body = document.getElementById('body');

        if (splash) splash.classList.add('fade-out');

        setTimeout(() => {
            if (splash) splash.style.display = 'none';
            if (body) body.classList.remove('no-scroll');
            if (mainContent) {
                mainContent.classList.remove('hidden');
                mainContent.classList.add('fade-in');
            }
        }, 1000); // Tempo do fade-out
    }, 3000); // Tempo de exibição da Splash Screen
});