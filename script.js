document.addEventListener("DOMContentLoaded", function () {
    // Captura todos os links de navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtém o elemento para o qual o link aponta
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Calcula a posição do elemento
const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

            // Realiza a rolagem suave até o elemento
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
    
    
 