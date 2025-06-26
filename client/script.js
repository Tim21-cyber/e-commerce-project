
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(products => {
      renderProducts(products);
      document.getElementById('search-input').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = products.filter(p => p.name.toLowerCase().includes(term));
        renderProducts(filtered);
      });
    });

  document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
      alert("🛒 Your cart is empty!");
    } else {
      alert("✅ Order placed! Thank you for shopping with Swift Basket.");
      cart = [];
      updateCartTotal();
    }
  });
});

function renderProducts(products) {
  const container = document.getElementById('products');
  container.innerHTML = '';
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    const badge = product.price < 100 ? '<span class="badge">SALE</span>' : '';
    div.innerHTML = `
      ${badge}
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick='addToCart(${product.price})'>Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(price) {
  cart.push(price);
  updateCartTotal();
}

function updateCartTotal() {
  const total = cart.reduce((sum, val) => sum + val, 0);
  document.getElementById('cart-summary').textContent = `🛍️ Cart Total: $${total}`;
}
