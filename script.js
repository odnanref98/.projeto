document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links que começam com '#' para a rolagem suave
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Pega a altura do header para descontar no scroll
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
                
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});