# 🍔 Food Ordering App

A modern, fully dynamic **Food Ordering Application** built using **React** and **Parcel**, integrating live **Swiggy APIs** to deliver real-time restaurant and menu data.  
Developed as part of continuous frontend learning, with a strong focus on performance optimization, dynamic data handling, clean UI, and automated testing — **without relying on any hardcoded content**.

---

## 📌 Table of Contents
- 🚀 [Live Demo](#-live-demo)
- 📸 [Screenshots](#-screenshots)
- ✨ [Features](#-features)
- 🛠 [Tech Stack](#-tech-stack)
- 📡 [API Integration](#-api-integration)
- 🧪 [Testing](#-testing)
- 🤝 [Contributing](#-contributing)
- ⭐ [Support](#-support)

---

## 🚀 Live Demo
[![Food Ordering App](https://raw.githubusercontent.com/rajeshlru/Namaste-React/refs/heads/main/Home%20page.png?token=GHSAT0AAAAAADGGRVZTU6FROCF5K6V7OOYG2EXC35Q)](https://fodelivery.netlify.app/)

*(Deployed using Netlify for fast, reliable hosting)*

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](https://raw.githubusercontent.com/rajeshlru/Namaste-React/refs/heads/main/Home%20page.png?token=GHSAT0AAAAAADGGRVZTU6FROCF5K6V7OOYG2EXC35Q)

### 🍽️ Restaurant Menu
![Restaurant Menu](https://raw.githubusercontent.com/rajeshlru/Namaste-React/refs/heads/main/Restaurant%20Menu%20page.png?token=GHSAT0AAAAAADGGRVZSKPIVFPLO4GCFBPQE2EXC4PQ)

### 🛒 Cart Page
![Cart Page](https://raw.githubusercontent.com/rajeshlru/Namaste-React/refs/heads/main/Cart.png?token=GHSAT0AAAAAADGGRVZSIQCROUTQNZIXTBTA2EXC43Q)

## ✨ Features
- ⚡ **Fast Development** – Powered by Parcel bundler for quick builds & hot reloading
- 🔄 **Live Swiggy API Data** – Always fresh, never hardcoded
- 🧭 **Dynamic Routing** – Smooth navigation via React Router
- 🛒 **Cart Functionality** – Add, remove, and manage orders
- 🔍 **Restaurant Search** – Instant filtering with optimized performance
- 🧪 **Unit & Integration Testing** – Built with Jest & React Testing Library
- 🎨 **Responsive Design** – Optimized for mobile, tablet & desktop
- 🚀 **Performance Optimized** – Code splitting & lazy loading for speed

---

## 🛠 Tech Stack
| Category        | Technology Used           |
|-----------------|---------------------------|
| Language        | JavaScript (ES6+)         |
| Framework       | React                     |
| Bundler         | Parcel                    |
| Styling         | CSS                       |
| Routing         | React Router DOM          |
| Testing         | Jest, React Testing Library |
| API Source      | Swiggy API (Unofficial)   |
| Version Control | Git + GitHub              |

---

## 📡 API Integration
This app pulls **real-time restaurant lists, menus, and images** directly from Swiggy’s public APIs via an accessible proxy, ensuring a dynamic and up-to-date experience.

**Endpoints Used:**
- 🍽 **Restaurant List API** – Fetches restaurants by location  
- 📋 **Restaurant Details API** – Full menu and pricing  
- 🖼 **Image CDN** – Optimized restaurant images  

> ⚠ **Note:** Swiggy APIs may require specific headers/tokens if their policy changes.  
> For local development, use a proxy/middleware to handle CORS issues.

---

## 🧪 Testing
Backed by **comprehensive tests** to ensure stability and performance.

**Testing Stack:**
- 🧪 **Jest** – Test runner & assertions  
- 🖥 **React Testing Library** – DOM-based component testing  

**Coverage Includes:**
✅ Component rendering  
✅ API data fetching  
✅ User interactions (add/remove from cart)  
✅ Edge case handling  

**Run Tests:**
```bash
npm run test
