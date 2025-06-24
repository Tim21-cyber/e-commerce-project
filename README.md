
# Swift-Basket Project 🛒

A simple, elegant e-commerce SPA using Tailwind CSS, JavaScript, and JSON Server.

## 🔧 Step-by-Step Setup Instructions

### 1. Extract the ZIP and open the folder `Swift-Basket`

### 2. Install JSON Server
```bash
npm install -g json-server
```

### 3. Run the Backend
```bash
json-server --watch db.json --port 3000
```

This will start your API at: `http://localhost:3000`

### 4. Open the Frontend
Open `client/index.html` in your browser.

## 🌐 If Hosting the Backend on Railway

1. Fork the GitHub repo and deploy it to Railway
2. Use this command in Railway's settings:
```bash
npx json-server --watch db.json --port 3000
```
3. Set `PORT=3000` in Railway environment variables
4. Replace `API` URL in `script.js` with your public Railway URL

## ✅ Endpoints
- `GET /products`
- `POST /orders`

Enjoy your project!
