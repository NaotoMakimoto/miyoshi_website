document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            hamburger.classList.toggle('active');
        });
    }
});
