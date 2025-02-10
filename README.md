# Expense-Tracker

# Expense Tracker - Phase 1 (Backend Development)

## 🚀 Introduction
This project is an **Expense Tracker API** built using **Django and Django REST Framework (DRF)**. In Phase 1, we have set up a backend that allows users to register, log in, and manage their expenses securely using JWT authentication.

---

## 📌 Features Implemented in Phase 1
- ✅ **User Authentication (JWT)**
  - Register a new user
  - Login to obtain access and refresh tokens
  - Logout and invalidate tokens
- ✅ **Expense Management (CRUD Operations)**
  - Create an expense
  - Retrieve all expenses
  - Update an expense
  - Delete an expense
- ✅ **Security & Permissions**
  - Only authenticated users can manage their expenses
  - Each user sees only their own expenses
- ✅ **API Endpoints with Postman Testing**
  
---

## 🛠️ Technologies Used
- **Python 3.12**
- **Django 5.1.6**
- **Django REST Framework (DRF)**
- **JWT Authentication (djangorestframework-simplejwt)**
- **SQLite (Default Django Database)**

---

## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/imzeus7463/Expense-Tracker.git
cd Expense-Tracker/backend
```

### 2️⃣ Create a Virtual Environment
```bash
python -m venv venv
source venv/bin/activate   # On macOS/Linux
venv\Scripts\activate     # On Windows
```

### 3️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```

### 4️⃣ Apply Migrations
```bash
python manage.py makemigrations user_auth expenses
python manage.py migrate
```

### 5️⃣ Run the Development Server
```bash
python manage.py runserver
```
The API will be available at: **http://127.0.0.1:8000/**

---

## 🔑 Authentication API
### 1️⃣ Register a New User
**Endpoint:** `POST /api/auth/register/`
```json
{
    "username": "testuser",
    "email": "test@example.com",
    "password": "securepassword"
}
```
**Response:**
```json
{
    "user": {"id": 1, "username": "testuser", "email": "test@example.com"},
    "message": "User registered successfully!"
}
```

### 2️⃣ Login to Get JWT Token
**Endpoint:** `POST /api/auth/login/`
```json
{
    "username": "testuser",
    "password": "securepassword"
}
```
**Response:**
```json
{
    "refresh": "your_refresh_token",
    "access": "your_access_token"
}
```

---

## 💰 Expense Management API
### 3️⃣ Create an Expense
**Endpoint:** `POST /api/expenses/`
**Headers:**
```
Authorization: Bearer your_access_token
```
**Body:**
```json
{
    "description": "Lunch",
    "amount": 12.50
}
```

### 4️⃣ Get All Expenses
**Endpoint:** `GET /api/expenses/`
**Headers:**
```
Authorization: Bearer your_access_token
```

### 5️⃣ Update an Expense
**Endpoint:** `PUT /api/expenses/{expense_id}/`
**Body:**
```json
{
    "description": "Updated Lunch",
    "amount": 15.00
}
```

### 6️⃣ Delete an Expense
**Endpoint:** `DELETE /api/expenses/{expense_id}/`

---

## 🛠️ Testing with Postman
- Use Postman or Thunder Client to test the API endpoints.
- Ensure to include the **JWT access token** in the `Authorization` header for authenticated requests.

---

## ✅ Next Steps (Phase 2: Frontend Development)
Now that the backend is complete, the next phase will focus on:
- Developing a **React + Tailwind UI** for users to manage expenses
- Integrating frontend with the Django API
- Adding features like OCR for bill scanning

📌 **Stay tuned for Phase 2! 🚀**

