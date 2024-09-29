📚 CRUD Operations Project with File Upload and Download
This project demonstrates a backend-heavy web application built using the MERN stack. It provides a simple frontend with complex CRUD operations handled on the backend. The focus is on server-side coding with file handling, API design, and database management using MySQL.

🚀 Project Overview
Features:
Create records with file uploads.
Read and display all records in a table format.
Delete records from the database.
Download files that are stored on the server.
This project is ideal for anyone looking to practice CRUD operations with a heavier focus on the backend while keeping the frontend minimal.

Frontend:
React.js for the user interface.
Simple form to create and view records.
Backend:
Node.js and Express.js for server-side handling.
Multer for file uploads.
MySQL for database management.
Custom API endpoints for handling data and file operations.
🛠️ Tech Stack
Backend:
Node.js: The core runtime for server-side logic.
Express.js: Web framework for building APIs and handling routes.
MySQL: Relational database used to store records.
Multer: Middleware for handling file uploads.
File System (fs): Used for file operations.
Frontend:
React.js: Simple interface to display forms and data in tables.
📦 Local Setup
To run this project on your local machine, follow the steps below:

1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/your-repo.git
cd your-repo
2. Install Dependencies
bash
Copy code
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
3. Set up the MySQL Database
Create a new MySQL database locally:

sql
Copy code
CREATE DATABASE internTask3;
USE internTask3;

CREATE TABLE student (
  name VARCHAR(100),
  roll INT PRIMARY KEY,
  marks INT,
  file VARCHAR(255)
);
4. Configure the Backend
In the server folder, create a .env file:

makefile
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=internTask3
5. Run the Backend
bash
Copy code
# From the server folder
node app.js
6. Run the Frontend
bash
Copy code
# From the client folder
npm start
7. Access the Application
Visit the app at: http://localhost:3000 for the frontend.
Backend runs on http://localhost:9000.
⚠️ Important Note
This project and the database are meant to run locally, as managing file uploads and downloads requires direct access to your file system. Deploying this setup to the cloud without proper configurations can be risky.

📝 API Endpoints
POST /create: Creates a new record and uploads the associated file.
GET /read: Fetches all records from the database.
GET /delete/
: Deletes a specific record based on the roll number.
GET /download/
: Downloads the associated file.
📁 File Upload/Download
Uploaded files are saved to the uploads/ directory on the server. Files can be downloaded using the Download button in the frontend.

👨‍💻 Contributing
Feel free to fork the repository, open issues, or submit pull requests if you want to improve the project or add features.

🙏 Acknowledgments
This project is part of my personal development to strengthen my understanding of CRUD operations and backend development with Node.js and MySQL.
