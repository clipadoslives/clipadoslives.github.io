// Função para abrir/fechar a sidebar
function toggleNav() {
    const sidebar = document.getElementById("mySidebar");
    const toggleBtn = sidebar.querySelector('.menu-toggle-btn');
    if (sidebar && toggleBtn) {
        if (sidebar.classList.contains('expanded')) {
            sidebar.classList.remove('expanded');
            toggleBtn.innerHTML = 'Menu'; // Texto "Menu"
        } else {
            sidebar.classList.add('expanded');
            toggleBtn.innerHTML = 'X'; // Texto "Menu"
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("initialVideo");

    // Verifica se o modal e o vídeo existem antes de tentar acessá-los
    if (modal) {
        modal.style.display = "block";
    }

    if (video) {
        video.play();
    }

    // Carrossel
    let slideIndex = 0;
    let autoSlideInterval;

    // Função para mostrar os slides automaticamente
    function showSlides() {
        const slides = document.querySelectorAll('.carousel-item');
        slides.forEach((slide, index) => {
            slide.style.display = 'none';
        });
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = 'block';
        autoSlideInterval = setTimeout(showSlides, 3000); // Muda a cada 3 segundos
    }

    // Função para mover os slides manualmente
    function moveSlide(direction) {
        clearTimeout(autoSlideInterval); // Para a mudança automática quando movido manualmente
        const slides = document.querySelectorAll('.carousel-item');
        slideIndex += direction;

        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        } else if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        slides.forEach((slide, index) => {
            slide.style.display = 'none';
        });
        slides[slideIndex].style.display = 'block';
        autoSlideInterval = setTimeout(showSlides, 3000); // Reinicia a mudança automática
    }

    showSlides(); // Inicia a apresentação de slides automaticamente

    // Eventos dos botões do carrossel
    const prevButton = document.querySelector('.carousel-button-prev');
    const nextButton = document.querySelector('.carousel-button-next');

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            moveSlide(-1);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            moveSlide(1);
        });
    }
});
