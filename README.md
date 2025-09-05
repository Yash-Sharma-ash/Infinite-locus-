# 🚀 Full Stack Application

A full-stack application built with **Node.js, Express, TypeScript, MongoDB** on the backend and **Vite + React** on the frontend.  
It includes authentication, user management, events system, and real-time updates with **Socket.IO**.

---

## ✨ Features
- 🔐 User authentication (JWT-based login & registration)  
- 👥 User management (CRUD APIs)  
- 📅 Event creation and registration  
- ⚡ Real-time communication using Socket.IO  
- 🛡 Security (Helmet, CORS, rate limiting)  
- 🗄 MongoDB with Mongoose  
- ⚙ TypeScript for type safety  

---

## 🛠 Tech Stack
**Frontend**  
- React + Vite  
- TailwindCSS  

**Backend**  
- Node.js + Express  
- TypeScript  
- MongoDB + Mongoose  
- Socket.IO  

**Utilities**  
- dotenv (environment variables)  
- Helmet (security)  
- Express-rate-limit (rate limiting)  
root/
├── backend/ # Express + TypeScript backend
│ ├── routes/ # API routes
│ ├── models/ # Mongoose models
│ ├── controllers/ # Business logic
│ ├── middlewares/ # Middleware (auth, validation, etc.)
│ └── server.ts # Entry point
│
├── frontend/ # React + Vite frontend
│ ├── src/ # React components & pages
│ └── vite.config.ts
│
└── README.md

Backend
npm run dev     # Start dev server
npm run build   # Build TS to JS

Frontend
npm run dev     # Start Vite dev server
npm run build   # Build production bundle

## 📂 Project Structure
