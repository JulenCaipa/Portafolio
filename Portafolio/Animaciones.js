document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    function scrollToSection(event) {
        event.preventDefault();

        const targetId = event.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }
});
// animacion sobre mi
const imagenes = document.querySelectorAll('.imagen');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        const descripcion = imagen.querySelector('.descripcion');
        descripcion.classList.toggle('activo');
    });
});










