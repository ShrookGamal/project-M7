document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        once: true
    });

    const header = document.getElementById('main-header');
    const hamburger = document.getElementById('hamburger');
    const closeMenu = document.getElementById('closeMenu');
    const navLinksContainer = document.getElementById('navLinks');
    const navLinks = document.querySelectorAll('.nav-item');

    // Scroll Effect for Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active Link on Scroll
        changeActiveLink();
    });

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        navLinksContainer.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
        });
    });

    // Function to highlight active section
    function changeActiveLink() {
        let fromTop = window.scrollY + 100;

        navLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute('href'));
            
            if (section) {
                if (
                    section.offsetTop <= fromTop &&
                    section.offsetTop + section.offsetHeight > fromTop
                ) {
                    navLinks.forEach(item => item.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }
});
// تفعيل سلايدر معرض الأعمال
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow", // تأثير الـ 3D
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true, // جعل السلايدر يدور بشكل لا نهائي
    autoplay: {
        delay: 2500, // سرعة التقليب التلقائي
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 30, // زاوية دوران الصور
        stretch: 0,
        depth: 100, // العمق بين الصور
        modifier: 1,
        slideShadows: true, // تفعيل الظلال للعمق
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
