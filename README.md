# Task Management API

## 🚀 Overview
This project is a **Task Management API** built with **Node.js, Express, and MongoDB**, featuring **JWT-based authentication**, task CRUD operations, filtering, sorting, and validation using **Zod**.

## 📌 Features
- **User Authentication**
  - User registration & login with **JWT authentication**.
  - Passwords securely stored using **bcrypt**.

- **Task Management**
  - Users can **create, update, delete, and retrieve tasks**.
  - Each task includes:
    - `id` (UUID)
    - `title` (required)
    - `description` (optional)
    - `status` (`pending`, `in-progress`, `completed`)
    - `dueDate` (optional)
    - `createdAt` (timestamp)
  - Only the task creator can modify or delete it.

- **Filtering & Sorting**
  - Filter tasks by **status** and **dueDate**.
  - Sort tasks by **createdAt** (ascending/descending).

- **Input Validation & Error Handling**
  - Used **Zod** for request validation.
  - Proper error handling for invalid inputs.

- **Bonus Features (Optional Enhancements)**
  - **Pagination** for task listing.
  - Clean and structured code following best practices.

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, bcrypt
- **Validation**: Zod
- **Version Control**: Git

---

## 📂 Project Structure
```
backend-task/
│── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── taskController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   ├── models/
│   │   ├── Task.js
│   │   ├── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── taskRoutes.js
│   ├── validations/
│   │   ├── authValidation.js
│   │   ├── taskValidation.js
│   ├── app.js
│   ├── server.js
│── .env
│── .gitignore
│── package.json
│── README.md
```

---

## 🏗️ Setup & Installation
### **1️⃣ Clone the Repository**
```sh
git clone [repo_link]
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the root directory and add:
```
MONGO_URI=your_mongo_connection_string
PORT=3000
JWT_SECRET=your_secret_key
```

### **4️⃣ Run the Server**
```sh
npm start   # or nodemon server.js for auto-reload
```

---

## 📝 API Endpoints
### **Auth Routes**
| Method | Endpoint        | Description |
|--------|---------------|-------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Authenticate user & get token |

### **Task Routes** (Protected, requires `Authorization: Bearer <token>`)
| Method | Endpoint           | Description |
|--------|-------------------|-------------|
| POST   | `/api/tasks`      | Create a new task |
| GET    | `/api/tasks`      | Retrieve tasks (with filtering & sorting) |
| GET    | `/api/tasks/:id`  | Get a specific task |
| PUT    | `/api/tasks/:id`  | Update a task |
| DELETE | `/api/tasks/:id`  | Delete a task |

## 💡 Improvements & Optimizations
- **Added Pagination** for better scalability.
- **Used Async/Await** to improve performance.
- **Organized Folder Structure** for maintainability.

---

## 🤝 Conclusion
This project successfully implements **JWT authentication**, **task management**, and **MongoDB CRUD operations** with **filtering, sorting, pagination, and error handling**. Let me know if you have any feedback! 🚀

