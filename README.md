# Online Shopping Platform

## 📱 Project Introduction

**Online Shopping Platform** is a comprehensive e-commerce application that provides a complete shopping experience for customers and powerful management tools for administrators. The platform is built with a modern, scalable architecture consisting of three main components: a customer-facing web application, an admin management dashboard, and a robust backend API server. It supports essential e-commerce features including product browsing and management, shopping cart functionality, order processing, user authentication, real-time customer support chat, and email notifications.

---

## ✨ Features

### Customer Features
- **User Authentication**: Secure login/signup with JWT-based authentication
- **Product Browsing**: Browse products, view detailed information, and filter by categories
- **Shopping Cart**: Add/remove products, manage quantities, and view cart continuously
- **Order Management**: Place orders, track order status, and view order history
- **User Profile**: Manage personal information, update password, and view profile details
- **Live Chat Support**: Real-time customer support via Tawk.to messenger
- **Product Slider**: Interactive carousel for featured and promotional products
- **Responsive Design**: Mobile-friendly interface with Bootstrap styling

### Admin Features
- **Product Management**: Add, edit, delete products with categorization
- **Category Management**: Create and manage product categories
- **Order Management**: View and manage all customer orders
- **Customer Management**: View customer information and account details
- **Statistics Dashboard**: View sales metrics and analytics
- **User Authentication**: Secure admin login with role-based access

### General Features
- **Email Notifications**: Automated emails for order confirmation and updates via Nodemailer
- **Data Encryption**: Secure data transmission with JWT and crypto utilities
- **REST API**: Well-designed backend APIs for all operations
- **MongoDB Database**: NoSQL database for flexible data storage

---

## 🛠️ Technologies Used

### Frontend
- **React** 18.3.1 - UI library for building interactive interfaces
- **React Router DOM** 6.23.1 - Client-side routing and navigation
- **Bootstrap** 5.3.3 - CSS framework for responsive design (Customer)
- **React Bootstrap** 2.10.3 - React components for Bootstrap
- **React Slick** 0.30.2 - Carousel component for product slider
- **React Toastify** 10.0.5 - Toast notifications for user feedback
- **Tawk.to** 2.0.2 - Live chat integration for customer support
- **Axios** 1.7.2 - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** 4.19.2 - Web framework for building REST APIs
- **MongoDB** - NoSQL database for data storage
- **Mongoose** 8.4.0 - ODM (Object Data Modeling) for MongoDB
- **JWT (jsonwebtoken)** 9.0.2 - JSON Web Tokens for authentication and authorization
- **Nodemailer** 6.9.13 - Email sending utility for notifications
- **Crypto** - Built-in cryptography for data encryption

### Development Tools
- **React Scripts** 5.0.1 - Build tools and scripts for React applications
- **Testing Library** - Testing utilities for React components
- **Web Vitals** - Performance metrics monitoring

---

## 📁 Project Structure

```
Shopping online/
├── client-admin/              # Admin dashboard application
│   ├── src/
│   │   ├── components/        # Admin UI components
│   │   ├── contexts/          # React context for state management
│   │   └── App.js
│   ├── public/
│   ├── build/                 # Production build
│   └── package.json
│
├── client-customer/           # Customer web application
│   ├── src/
│   │   ├── components/        # Customer UI components
│   │   ├── contexts/          # React context for state management
│   │   ├── utils/             # Utility functions (CartUtil, withRouter)
│   │   └── App.js
│   ├── public/
│   ├── build/                 # Production build
│   └── package.json
│
└── server/                    # Backend API server
    ├── api/                   # API routes (admin.js, customer.js)
    ├── models/                # Data models and DAOs
    ├── utils/                 # Utilities (Crypto, Email, JWT, Mongoose, etc.)
    ├── index.js               # Server entry point
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Shopping online"
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   # Admin dashboard
   cd ../client-admin
   npm install

   # Customer application
   cd ../client-customer
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm start
   # Server will run on http://localhost:3000
   ```

2. **Start the admin dashboard** (in a new terminal)
   ```bash
   cd client-admin
   npm start
   # Admin app will run on http://localhost:3000/admin
   ```

3. **Start the customer application** (in a new terminal)
   ```bash
   cd client-customer
   npm start
   # Customer app will run on http://localhost:3000
   ```

### Building for Production

```bash
cd server
npm run build
# This will install dependencies and build both client applications
```

---

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication for users
- **Password Encryption**: Passwords are encrypted using crypto utilities
- **CORS Support**: Cross-origin requests are properly handled
- **Input Validation**: Server-side validation of all user inputs
- **Email Verification**: Optional email verification for account creation

---

## 📝 API Endpoints

The backend provides REST APIs for:
- User authentication (login, signup, logout)
- Product management (CRUD operations)
- Category management
- Order processing
- Customer information management
- Email notifications

---

## 📧 Contact & Support

For customer support, use the built-in chat feature via Tawk.to messenger on the customer application.

---
