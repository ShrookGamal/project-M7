document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true,
        duration: 1000,
        offset: 100
    });
    const header = document.getElementById('main-header');
    const hamburger = document.getElementById('hamburger');
    const closeMenu = document.getElementById('closeMenu');
    const navLinksContainer = document.getElementById('navLinks');
    const navLinks = document.querySelectorAll('.nav-item');
    const body = document.body;
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinksContainer.classList.add('active');
            body.style.overflow = 'hidden'; 
        });
    }
    const closeMobileMenu = () => {
        navLinksContainer.classList.remove('active');
        body.style.overflow = 'auto'; 
    };

    if(closeMenu) {
        closeMenu.addEventListener('click', closeMobileMenu);
    }
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
                changeActiveLink();
    });

    function changeActiveLink() {
        let fromTop = window.scrollY + 150; 

        navLinks.forEach(link => {
            const sectionId = link.getAttribute('href');
            if (sectionId.startsWith('#') && sectionId.length > 1) {
                const section = document.querySelector(sectionId);
                
                if (section) {
                    if (
                        section.offsetTop <= fromTop &&
                        section.offsetTop + section.offsetHeight > fromTop
                    ) {
                        navLinks.forEach(item => item.classList.remove('active'));
                        link.classList.add('active');
                    }
                }
            }
        });
    }
    if (document.querySelector('.mySwiper')) {
        var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            coverflowEffect: {
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
});