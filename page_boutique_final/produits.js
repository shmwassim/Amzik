// === MENU BURGER ===
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
}

// === ANIMATIONS AU SCROLL ===
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

// === DOM READY ===
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();

  const cartItems = [];
  const cartList = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('cart-total');

  // Animation progressive
  document.querySelectorAll('.product-card').forEach((product, index) => {
    setTimeout(() => {
      product.classList.add('vintage-fade');
    }, index * 200);
  });

  // Ajouter au panier
  document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const product = button.closest('.product-card');
      const name = product.dataset.name;
      const price = parseFloat(product.dataset.price);
      cartItems.push({ name, price });

      // Mettre à jour l'affichage du panier
      cartList.innerHTML = cartItems.map(item =>
        `<p>${item.name} - €${item.price.toFixed(2)}</p>`
      ).join("");

      const total = cartItems.reduce((sum, item) => sum + item.price, 0);
      totalDisplay.textContent = `Total: €${total.toFixed(2)}`;
    });
  });

  // === LIEN VERS PAGE DE PAIEMENT (corrigé) ===
  const payerBtn = document.getElementById('go-to-payment');
  if (payerBtn) {
    payerBtn.addEventListener('click', () => {
      if (cartItems.length === 0) {
        alert("Votre panier est vide !");
        return;
      }

      const grouped = {};
      cartItems.forEach(item => {
        if (grouped[item.name]) {
          grouped[item.name].quantity += 1;
        } else {
          grouped[item.name] = { name: item.name, price: item.price, quantity: 1 };
        }
      });

      const panierFinal = Object.values(grouped);
      localStorage.setItem("cart", JSON.stringify(panierFinal));

      // ✅ Redirection corrigée vers le bon dossier
      window.location.href = "../payement/payement.html";
    });
  }
});
