document.addEventListener('DOMContentLoaded', (event) => {
    const nav = document.querySelector('nav');
    const links = nav.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            e.preventDefault();
            const current = document.getElementsByClassName('current');
            current[0].className = current[0].className.replace(' current', '');
            this.parentElement.className += ' current';
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({behavior: 'smooth'});
        });
    }
});