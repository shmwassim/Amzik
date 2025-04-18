// Fonction pour basculer la visibilité du mot de passe
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    const icon = field.nextElementSibling.querySelector('i');
    
    if (field.type === "password") {
        field.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        field.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Validation du formulaire d'inscription
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validation basique
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;
        
        if (password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas!');
            return;
        }
        
        if (!terms) {
            alert('Veuillez accepter les conditions générales');
            return;
        }
        
        // Simulation d'inscription réussie
        const btn = this.querySelector('.btn-register');
        btn.textContent = 'Inscription en cours...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Inscription réussie!';
            btn.style.backgroundColor = '#4CAF50';
            
            // Redirection après inscription (simulée)
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        }, 2000);
    });
}

// Animation de la page
document.addEventListener('DOMContentLoaded', function() {
    // Animation des éléments du formulaire
    const formGroups = document.querySelectorAll('.input-group, .form-checkbox');
    formGroups.forEach((group, index) => {
        setTimeout(() => {
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
        }, index * 200);
    });
});