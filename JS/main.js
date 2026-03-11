/*========================== toggle icon navbar==================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*========================== scroll section active link ======================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*========================== stick navbar ========================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*========================== remove toggle icon and navbar ========================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*========================== close navbar on link click ========================*/
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    });
});

/*========================== theme toggle ========================*/
let themeToggle = document.querySelector('#theme-toggle');

themeToggle.onclick = () => {
    if (themeToggle.classList.contains('fa-moon')) {
        themeToggle.classList.replace('fa-moon', 'fa-sun');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.classList.replace('fa-sun', 'fa-moon');
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.classList.replace('fa-moon', 'fa-sun');
}

/*========================== scroll reveal ========================*/
const isMobile = window.innerWidth <= 768;

const sr = ScrollReveal({
    distance: isMobile ? '20px' : '40px',
    duration: isMobile ? 800 : 1200,
    delay: isMobile ? 50 : 100,
    reset: false,
    viewFactor: isMobile ? 0.05 : 0.15
});

sr.reveal('.home-img', { origin: 'left' });
sr.reveal('.home-content', { origin: 'right' });
sr.reveal('.skills-title, .heading', { origin: 'top' });
sr.reveal('.skills-box', { origin: 'bottom', interval: 100 });
sr.reveal('.about-img', { origin: 'left' });
sr.reveal('.about-content', { origin: 'right' });
sr.reveal('.certificate-box', { origin: 'bottom', interval: 100 });
sr.reveal('.projects-box', { origin: 'bottom', interval: 100 });

/*========================== typed js ========================*/
const typed = new Typed('.multiple-text', {
    strings: ['Junior'],
    typeSpeed: 70,
    backSpeed: 130,
    backDelay: 1000,
    loop: true,
});

