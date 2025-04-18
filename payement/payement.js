const methode = document.getElementById("methode");
const cbFields = document.getElementById("cb-fields");
const recap = document.getElementById("recap-articles");
const totalPrice = document.getElementById("total-price");
const form = document.getElementById("payment-form");
const message = document.getElementById("confirmation-message");

methode.addEventListener("change", () => {
  cbFields.style.display = methode.value === "carte" ? "block" : "none";
});

// 🔄 Simuler des articles ou utiliser localStorage
const cartItems = JSON.parse(localStorage.getItem("cart")) || [
  { name: "Veste Jean 90s", price: 79.99, quantity: 1 },
  { name: "Vinyle Pink Floyd", price: 34.99, quantity: 2 }
];

// Injecter les articles
let total = 0;
recap.innerHTML = cartItems.map(item => {
  const itemTotal = item.price * item.quantity;
  total += itemTotal;
  return `<p><span>${item.name} x${item.quantity}</span><span>€${itemTotal.toFixed(2)}</span></p>`;
}).join("");

totalPrice.textContent = `€${total.toFixed(2)}`;

// Validation formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const champsObligatoires = ["prenom", "nom", "email", "telephone", "livraison", "methode"];
  for (let champ of champsObligatoires) {
    const val = document.getElementById(champ).value.trim();
    if (!val) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
  }

  if (methode.value === "carte") {
    const cbVal = ["cb-numero", "cb-exp", "cb-cvv"].map(id => document.getElementById(id).value.trim());
    if (cbVal.includes("")) {
      alert("Veuillez remplir les informations de carte bancaire.");
      return;
    }
  }

  message.textContent = "✅ Paiement validé ! Merci pour votre commande.";
  form.reset();
  cbFields.style.display = "none";
});
