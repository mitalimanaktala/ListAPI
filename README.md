🛒 ListAPI – Product Management REST API
A structured RESTful API built using Node.js, Express, and MongoDB following MVC + Service Layer architecture.
It supports product creation, pagination, full-text search, validation, and centralized error handling.

---

🚀 Features

✅ Create Product
✅ List Products (with Pagination)
✅ Search Products (MongoDB Text Index)
✅ Mongoose Validation
✅ Centralized Error Handling Middleware
✅ Clean MVC + Service Architecture
✅ Environment Configuration using dotenv
✅ Database Seeding Script

---

🏗️ Architecture

This project follows a clean layered architecture:

<pre>
LISTAPI
│
├── config/              # Database configuration
├── controller/          # Route controllers
├── middleware/          # Error handling middleware
├── models/              # Mongoose schemas
├── routes/              # API route definitions
├── service/             # Business logic layer
├── app.js               # Express app setup
├── server.js            # Server entry point
├── seed.js              # Database seeding script
└── .env                 # Environment variables
</pre>


🔹 Flow
Route → Controller → Service → Model → Database


This separation ensures:

1. Better scalability
2. Clean business logic
3. Maintainability

---

🛠️ Tech Stack

Node.js
Express.js
MongoDB
Mongoose
dotenv

---

⚙️ Installation & Setup

1️⃣ Clone Repository
git clone https://github.com/your-username/listapi.git
cd listapi

2️⃣ Install Dependencies
npm install

3️⃣ Create .env File
Create a .env file in the root directory:
MONGO_URI=your_mongodb_connection_string
PORT=3000

4️⃣ Run the Server
node server.js

OR if using nodemon:
npm run dev

Server runs at:
http://localhost:3000

---

🌱 Database Seeding

To populate database with 25+ sample products:
node seed.js

This will:
1. Delete existing products
2. Insert predefined sample products

---

📡 API Endpoints

🔹 Base Route
GET /

Response:
Welcome to the List API

🔹 Get All Products (Pagination)
GET /api/products?page=1&limit=10

Response:
{
  "success": true,
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 3,
    "totalProducts": 25,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}

🔹 Create Product
POST /api/products

Body:
{
  "name": "iPad Pro",
  "category": "Electronics",
  "price": 89999,
  "inStock": true
}

🔹 Search Products (Full Text Search)
GET /api/products/search?q=iphone

Uses MongoDB text index on:
1. name
2. category

---

🧠 Validation Rules

1. Name → Required, minimum 3 characters
2. Category → Required
3. Price → Required, must be ≥ 0
4. inStock → Boolean (default: true)

---

🛡️ Error Handling

Centralized error middleware handles:
1. Mongoose Validation Errors
2. Server Errors (500)
3. Clean JSON error responses

Example:

{
  "success": false,
  "errors": ["Product name is required"]
}

---

📌 Future Improvements

🔐 JWT Authentication
📄 Filtering & Sorting
📦 Deployment (Render / Railway / AWS)
🧪 Unit Testing (Jest)
📊 Swagger API Documentation

---

👩‍💻 Author

Mitali Manaktala
B.Tech CSE | Backend & Data Enthusiast
GitHub: hhtps://github.com/mitalimanaktala
# 🛒 ListAPI - Product Management REST API

A RESTful API built using **Node.js, Express, and MongoDB** following a clean **MVC + Service Layer architecture**.  
The API supports product creation, pagination, full-text search, validation, and centralized error handling.

---

## 🚀 Features

- ✅ Create Product
- ✅ List Products with Pagination
- ✅ Search Products (MongoDB Text Index)
- ✅ Mongoose Schema Validation
- ✅ Centralized Error Handling Middleware
- ✅ Clean MVC + Service Architecture
- ✅ Database Seeding Script
- ✅ Environment Configuration using dotenv

---

## 🏗️ Project Architecture

The project follows a layered structure for better scalability and maintainability:

```
LISTAPI
│
├── config/              # Database connection
├── controller/          # Request handling logic
├── middleware/          # Error handling middleware
├── models/              # Mongoose schema definitions
├── routes/              # API routes
├── service/             # Business logic layer
├── app.js               # Express app configuration
├── server.js            # Server entry point
├── seed.js              # Database seeding script
└── .env                 # Environment variables
```

### 🔄 Request Flow

```
Route → Controller → Service → Model → Database
```

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone: https://github.com/mitalimanaktala/ListAPI.git
cd listapi
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Create a `.env` File

Create a `.env` file in the root directory and add:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4️⃣ Start the Server

```
node server.js
```

Or (if using nodemon):

```
npm run dev
```

Server runs at:

```
http://localhost:3000
```

---

## 🌱 Database Seeding

To insert 25+ sample products into the database:

```
node seed.js
```

This will:
- Delete existing products
- Insert predefined sample products

---

## 📡 API Endpoints

### 🔹 Base Route

```
GET /
```

Response:
```
Welcome to the List API
```

---

### 🔹 Get All Products (Pagination)

```
GET /api/products?page=1&limit=10
```

Response:

```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 3,
    "totalProducts": 25,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

---

### 🔹 Create Product

```
POST /api/products
```

Request Body:

```json
{
  "name": "iPad Pro",
  "category": "Electronics",
  "price": 89999,
  "inStock": true
}
```

---

### 🔹 Search Products

```
GET /api/products/search?q=iphone
```

Uses MongoDB full-text search on:
- name
- category

---

## 🧠 Validation Rules

- **name** → Required, minimum 3 characters
- **category** → Required
- **price** → Required, must be greater than or equal to 0
- **inStock** → Boolean (default: true)

---

## 🛡️ Error Handling

Centralized error middleware handles:

- Mongoose Validation Errors (400)
- Internal Server Errors (500)

Example error response:

```json
{
  "success": false,
  "errors": ["Product name is required"]
}
```

---

## 📌 Future Improvements

- 🔐 JWT Authentication
- 📄 Filtering & Sorting
- 📦 Deployment (Render / Railway / AWS)
- 🧪 Unit Testing (Jest)
- 📊 Swagger API Documentation

---

## 👩‍💻 Author

**Mitali Manaktala**  
B.Tech CSE | Backend & Data Enthusiast  

GitHub: https://github.com/mitalimanaktala