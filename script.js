document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');
    const scrollToTop = document.getElementById('scrollToTop');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
            if (scrollToTop) {
                scrollToTop.classList.add('show');
            }
        } else {
            navbar.classList.remove('scrolled');
            if (scrollToTop) {
                scrollToTop.classList.remove('show');
            }
        }
    });

    if (scrollToTop) {
        scrollToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.category-card, .feature-card, .product-card, .about-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = 'products.html';
        });
    });

    const showAlcoholicBtn = document.getElementById('showAlcoholic');
    const ageModal = document.getElementById('ageModal');
    const ageYesBtn = document.getElementById('ageYes');
    const ageNoBtn = document.getElementById('ageNo');
    const alcoholicSection = document.getElementById('alcoholic-drinks');
    const ageGate = document.getElementById('age-gate');

    if (showAlcoholicBtn) {
        showAlcoholicBtn.addEventListener('click', () => {
            ageModal.classList.add('active');
        });
    }

    if (ageYesBtn) {
        ageYesBtn.addEventListener('click', () => {
            ageModal.classList.remove('active');
            if (ageGate) ageGate.style.display = 'none';
            if (alcoholicSection) alcoholicSection.style.display = 'block';

            setTimeout(() => {
                alcoholicSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        });
    }

    if (ageNoBtn) {
        ageNoBtn.addEventListener('click', () => {
            ageModal.classList.remove('active');
        });
    }

    if (ageModal) {
        ageModal.addEventListener('click', (e) => {
            if (e.target === ageModal) {
                ageModal.classList.remove('active');
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const closeSuccessBtn = document.getElementById('closeSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };

            console.log('Form submitted:', formData);

            contactForm.reset();

            successModal.classList.add('active');
        });
    }

    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', () => {
            successModal.classList.remove('active');
        });
    }

    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.classList.remove('active');
            }
        });
    }

    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }
});
