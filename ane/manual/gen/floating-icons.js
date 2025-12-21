// Funciones para los iconos flotantes
document.addEventListener('DOMContentLoaded', function() {
    
    // Función para ir al inicio de la página
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Función para ir al final de la página
    function scrollToBottom() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }
    
    // Función para desplazar 20 líneas hacia abajo
    function scrollDown20Lines() {
        const lineHeight = parseInt(getComputedStyle(document.body).lineHeight) || 24;
        const scrollAmount = lineHeight * 20;
        window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
        });
    }
    
    // Asignar funciones a los botones
    const btnHome = document.getElementById('btn-home');
    const btnTop = document.getElementById('btn-top');
    const btnBottom = document.getElementById('btn-bottom');
    const btnScroll = document.getElementById('btn-scroll');
    const btnHelp = document.getElementById('btn-help');
    
    if (btnHome) {
        btnHome.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }
    
    if (btnTop) {
        btnTop.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToTop();
        });
    }
    
    if (btnBottom) {
        btnBottom.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToBottom();
        });
    }
    
    if (btnScroll) {
        btnScroll.addEventListener('click', function(e) {
            e.preventDefault();
            scrollDown20Lines();
        });
    }
    
    if (btnHelp) {
        btnHelp.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'help.html';
        });
    }
    
    // Mostrar/ocultar botones según scroll
    window.addEventListener('scroll', function() {
        const floatingIcons = document.querySelector('.floating-icons');
        if (floatingIcons) {
            if (window.pageYOffset > 100) {
                floatingIcons.style.opacity = '0.7';
            } else {
                floatingIcons.style.opacity = '0.5';
            }
        }
    });
    
});
