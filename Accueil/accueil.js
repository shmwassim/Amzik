// Menu burger pour mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

// Animation au scroll améliorée : déclenche l'effet sur les éléments dès qu'ils apparaissent
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.product-card, .about-content, .section-title');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
            element.classList.add('vintage-fade');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Animation au chargement et interactions
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Animation progressive pour les cartes produits
    const products = document.querySelectorAll('.product-card');
    products.forEach((product, index) => {
        setTimeout(() => {
            product.classList.add('vintage-fade');
        }, index * 200);
    });
    
    // Animation du formulaire newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const button = this.querySelector('button');
            button.textContent = 'Merci !';
            button.style.backgroundColor = 'var(--green)';
            setTimeout(() => {
                button.textContent = 'S\'abonner';
                button.style.backgroundColor = 'var(--orange)';
            }, 2000);
        });
    }
});
