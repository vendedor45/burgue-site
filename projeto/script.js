// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {

    // Seleção dos elementos do Menu Mobile
    const btnMobile = document.getElementById('btn-mobile');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Função para alternar a exibição do menu mobile
    function toggleMenu() {
        navMenu.classList.toggle('active');
        
        // Atualiza a acessibilidade (aria-expanded)
        const isActive = navMenu.classList.contains('active');
        btnMobile.setAttribute('aria-expanded', isActive);
    }

    // Evento de clique no botão hambúrguer
    btnMobile.addEventListener('click', toggleMenu);

    // Fecha o menu mobile automaticamente ao clicar em qualquer link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

});
