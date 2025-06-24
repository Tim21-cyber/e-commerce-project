
const API = 'http://localhost:3000'; 
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
  fetch(`${API}/products`)
    .then(res => res.json())
    .then(data => renderProducts(data));

  document.getElementById('checkout-btn').addEventListener('click', checkout);
});

function renderProducts(products) {
  const container = document.getElementById('products');
  products.forEach(prod => {
    const div = document.createElement('div');
    div.className = 'bg-white p-4 rounded shadow';
    div.innerHTML = `
      <img src="${prod.image}" class="w-30 h-40 object-contain mb-2"/>
      <h3 class="text-lg font-bold">${prod.name}</h3>
      <p class="text-gray-700">$${prod.price}</p>
      <button class="mt-2 bg-green-500 text-white px-3 py-1 rounded" onclick="addToCart(${prod.id}, '${prod.name}', ${prod.price})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id, name, price) {
  cart.push({ id, name, price });
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

function checkout() {
  fetch(`${API}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: cart, createdAt: new Date().toISOString() })
  }).then(() => {
    alert('Order placed!');
    cart = [];
    renderCart();
  });
}

// Theme toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('change', () => {
    document.documentElement.setAttribute('data-theme', toggle.checked ? 'dark' : 'light');
  });
});
