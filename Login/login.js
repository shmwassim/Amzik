document.addEventListener('DOMContentLoaded', function() {
    // Animation pour le formulaire de connexion
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulation de connexion avec animation
            const btn = this.querySelector('.btn-login');
            btn.textContent = 'Connexion...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.textContent = 'Connecté!';
                btn.style.backgroundColor = '#4CAF50';
                
                // Redirection après connexion (simulée)
                setTimeout(() => {
                    // window.location.href = 'content/products.html';
                    alert('Connexion réussie! (simulation)');
                    btn.textContent = 'Se connecter';
                    btn.style.backgroundColor = '#5a3921';
                    btn.disabled = false;
                }, 1000);
            }, 1500);
        });
    }
    
    // Effet de survol amélioré pour les éléments de fonctionnalités
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'scale(1)';
        });
    });
    
    // Animation pour le slogan
    const slogan = document.querySelector('.slogan');
    if (slogan) {
        setInterval(() => {
            slogan.style.opacity = '0.8';
            setTimeout(() => {
                slogan.style.opacity = '1';
            }, 500);
        }, 3000);
    }
});