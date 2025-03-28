# 🍔 UberChow - Food Delivery Web App

**UberChow** is a full-stack food delivery application inspired by Uber Eats, built with **Angular** (frontend) and **Spring Boot + MySQL** (backend). It allows users to browse restaurants, add dishes to cart, checkout, and track orders. Admins can manage cities, restaurants, and dishes.

---

## 🚀 Features

### 👤 End-User
- Browse available restaurants and dishes
- Add dishes to cart
- Checkout with dummy payment
- Sign up / Log in at checkout
- View past orders
- Manage user profile

### 🛠️ Admin
- Admin login
- Dashboard with CRUD for:
  - Cities
  - Restaurants (with image URLs)
  - Dishes (with image URLs)

---

## 🧱 Tech Stack

| Layer       | Technology           |
|-------------|----------------------|
| Frontend    | Angular (Standalone Components) |
| Backend     | Spring Boot (REST API) |
| Database    | MySQL (locally and AWS RDS-ready) |
| Tools       | Bootstrap, Postman, GitHub |

---

## 📦 Getting Started

### Frontend

```bash
cd uberchow-frontend
npm install
ng serve

## Backend
cd uberchow-backend
mvn spring-boot:run


📂 Project Structure

uberchow-frontend/
├── components/
│   ├── admin-dashboard/
│   ├── end-user-dashboard/
│   ├── restaurant-admin/
│   ├── restaurant-end-user/
│   ├── dish-admin/
│   └── dish-end-user/
├── models/
│   ├── dish.model.ts
│   ├── restaurant.model.ts
│   └── cart.model.ts
└── app.routes.ts

🤝 Author
Valerio P.
Full-Stack Developer | Ex-Chef turned Coder
📍 California
🛠️ Passion for clean code, UX, and tasty apps.

Project built for Capstone & Portfolio. Open to contributions and feedback!

