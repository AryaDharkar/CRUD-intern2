# 📚 CRUD Operations with File Upload and Download

This project demonstrates a **backend-heavy** web application built using the **MERN stack**, featuring file uploads and CRUD operations with a MySQL database. It's an ideal project for practicing **CRUD operations**, focusing more on the backend (API creation and database interaction) while providing a simple frontend for user interaction.

## 🚀 Project Overview

### Features:
- **Create** records with file uploads.
- **Read** and display records in a table format.
- **Delete** records from the database.
- **Download** files from the server.

### Frontend:
- **React.js** for the UI.
- Form to create records and display them in a table.

### Backend:
- **Node.js** and **Express.js** for server-side logic.
- **Multer** for handling file uploads.
- **MySQL** for database operations.
- **Custom API** for creating, reading, deleting records, and downloading files.

## 🛠️ Tech Stack

### Backend:
- **Node.js**: Server-side runtime.
- **Express.js**: Web framework.
- **MySQL**: Database for record storage.
- **Multer**: Middleware for handling file uploads.
- **File System (fs)**: Used to manage uploaded files.

### Frontend:
- **React.js**: Library for building the user interface.

## 📦 Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install Dependencies

```bash
# Backend dependencies
cd server
npm install

# Frontend dependencies
cd ../client
npm install
```

### 3. Set Up MySQL Database

Run the following SQL commands in MySQL:

```sql
CREATE DATABASE internTask3;
USE internTask3;

CREATE TABLE student (
  name VARCHAR(100),
  roll INT PRIMARY KEY,
  marks INT,
  file VARCHAR(255)
);
```

### 4. Configure the Backend

Create a `.env` file in the `server` folder:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=internTask3
```

### 5. Run the Application

#### Backend:
```bash
# Start the server
cd server
node app.js
```

#### Frontend:
```bash
# Start the client
cd ../client
npm start
```

### 6. Access the Application

- **Frontend**: `http://localhost:3000`
- **Backend API**: `http://localhost:9000`

## 📝 API Endpoints

- **POST /create**: Creates a new record and uploads a file.
- **GET /read**: Retrieves all records.
- **GET /delete/:roll**: Deletes a record.
- **GET /download/:file**: Downloads the file associated with a record.

## ⚠️ Important Notes

This project is designed to run **locally** since file uploads and downloads are stored in the local file system. Live deployment without proper configuration can lead to file handling risks.

## 📁 File Management

Uploaded files are stored in the `uploads/` folder on the backend. Files can be downloaded via the **Download** button on the frontend.


