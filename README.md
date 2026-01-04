# BUY BUDDY
# React + Vite
# Ecommerce Store

A modern, full-featured ecommerce application built with React, Vite, and Firebase. This project provides a complete shopping experience with user authentication, product management, cart functionality, and an admin dashboard.

## 🚀 Features

- **User Authentication**: Secure login and signup with Firebase
- **Product Management**: Browse, search, and filter products
- **Shopping Cart**: Add, remove, and manage cart items with Redux
- **Admin Dashboard**: Manage products, orders, and users
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Real-time Updates**: Live cart updates and notifications
- **Order Tracking**: Complete order management system
- **Product Reviews**: Customer testimonials and ratings

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management for cart and app state

### Backend & Services
- **Firebase** - Authentication and database
- **React Router** - Client-side routing

### UI & UX
- **Headless UI** - Accessible UI components
- **Heroicons** - Beautiful hand-crafted SVG icons
- **React Icons** - Popular icon library
- **Motion** - Animation library for smooth interactions
- **React Toastify** - Toast notifications

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd vite-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore Database
   - Copy your Firebase config to `src/firebase/FirebaseConfig.jsx`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173` (default Vite port)

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── navbar/         # Navigation component
│   ├── footer/         # Footer component
│   ├── productCard/    # Product display card
│   ├── cart/          # Shopping cart components
│   ├── modal/         # Modal dialogs
│   └── ...
├── pages/              # Page components
│   ├── home/          # Home page
│   ├── cart/          # Shopping cart page
│   ├── admin/         # Admin dashboard
│   └── ...
├── context/            # React Context for state management
├── redux/              # Redux store and slices
├── firebase/           # Firebase configuration
└── assets/             # Static assets
```

## 🔧 Configuration

### Firebase Setup
1. Create a new Firebase project
2. Enable Authentication (Email/Password)
3. Enable Firestore Database
4. Add your Firebase config to `src/firebase/FirebaseConfig.jsx`:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```


