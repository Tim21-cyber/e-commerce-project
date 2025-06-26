# 🛒 Swift-Basket Project

Swift-Basket is a simple, responsive single-page e-commerce web application built using JavaScript, HTML, and CSS. It uses a mock backend powered by JSON Server.

---

## 🧾 Project Summary

- This app allows users to browse products, add items to a cart, and simulate a checkout process. 

- It’s designed to be clean, responsive, and beginner-friendly, with both light and dark modes.

---

## 👥 User Stories

- As a user, I can view a list of products with their names, images, and prices.
- As a user, I can add products to a shopping cart without reloading the page.
- As a user, I can see all items added to my cart in a dedicated cart section.
- As a user, I can click a “Checkout” button to simulate placing an order.
- As a user, I can toggle between light and dark mode for a more personalized browsing experience.

---

## 🚀 Minimum Viable Product (MVP)

1. **Product Listing**  
   - Displays all products from the API with image, name, and price.

2. **Shopping Cart Feature**  
   - Users can add products to the cart dynamically.

3. **Checkout Feature**  
   - Simulates order submission via a POST request to the backend.

4. **Dark/Light Mode Toggle**  
   - UI toggle to switch between light and dark themes using CSS variables.

5. **Responsive Layout**  
   - Grid-based layout adapts to desktop and mobile screens.

6. **Image Resizing + Product Containment**  
   - Ensures all product images are displayed within equally-sized boxes for a clean layout.

---

## 🌐 Public API Used

- Mock RESTful API
- **Tool:** [JSON Server]
- **Endpoints:**
  - `GET /products` – Fetch product data
  - `POST /orders` – Submit order details

---

## 📁 Project Structure

Swift-Basket/
├── db.json # Backend database (products + orders)
├── README.md # Project documentation
└── client/
├── index.html # Single Page Application UI
├── styles.css # Light/Dark mode CSS styling
└── script.js # JavaScript functionality

---

## 🛠️ Setup Instructions

1. **Install JSON Server**  

npm install -g json-server

2. **Run the API locally**

json-server --watch db.json --port 3000

3. **Open client/index.html in your browser**
 
 ---

👤 Author

Created by Timothy Ochieng