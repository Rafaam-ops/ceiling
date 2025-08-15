<<<<<<< HEAD

=======
// Анимация для индикатора
>>>>>>> a88cff3e567acbb41616abb45b9ba683ce3d11c0
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav a');
    const indicator = document.querySelector('.nav-indicator');

    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const linkRect = link.getBoundingClientRect();
        const navRect = link.parentElement.getBoundingClientRect();
        const left = linkRect.left - navRect.left;
        const width = linkRect.width;

        indicator.style.left = `${left}px`;
        indicator.style.width = `${width}px`;
      });

      link.addEventListener('mouseleave', () => {
        indicator.style.width = '0';
      });
    });
  });