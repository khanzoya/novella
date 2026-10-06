Novella

Novella is a full-stack MERN book management and reading platform built with **React, Node.js, Express, and MongoDB****.

The project allows users to create an account, browse a collection of books, search and filter books by genre, and access their reading collection. It also includes an admin side for managing books and monitoring platform statistics.

Features
For Users
- User registration and login
- JWT-based authentication using HTTP-only cookies
- Browse available books
- Search books by name
- Filter books by fiction and nonfiction genres
- View book details
- Access available book files for reading

For Admins
- Admin authentication
- Add new books with metadata and PDF files
- Edit book information
- Delete books
- View dashboard statistics
- Manage the book collection

Tech Stack
**Frontend**
- React
- React Router
- Axios
- CSS
- Vite

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer

## Project Structure

```
novella/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── css/
│       ├── App.jsx
│       └── main.jsx
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── db.js
│   ├── index.js
│   └── seed.js
│
├── package.json
└── .gitignore


## Application Flow

```text
React Client
     ↓
Axios HTTP Requests
     ↓
Express REST API
     ↓
Authentication / Business Logic
     ↓
Mongoose
     ↓
MongoDB
```

The frontend communicates with the Express backend through HTTP APIs. Authentication is handled using JWTs stored in HTTP-only cookies, while MongoDB stores user and book data.

## Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/khanzoya/novella.git
cd novella
```

### 2. Install dependencies

Install the root dependencies:

```bash
npm install
```

Then install dependencies for the client and server:

```bash
cd client
npm install

cd ../server
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `server` directory.

Example:

```env
PORT=3001
URL=your_mongodb_connection_string
User_key=your_user_jwt_secret
Admin_key=your_admin_jwt_secret
```

Do not commit your `.env` file to the repository.

### 4. Start the backend

From the `server` directory:

```bash
node index.js
```

### 5. Start the frontend

From the `client` directory:

```bash
npm run dev
```

The Vite development server will provide the local frontend URL.

## Current Status

Novella V1 is a working college project and serves as the foundation for a larger reading-focused platform.

The current version focuses on book discovery, authentication, and book management. Future iterations can expand the platform with features such as personal libraries, reading progress, reader activity, and book-based discussions.

## What I Learned

Building Novella gave me hands-on experience with:

- Building React interfaces and routing
- Designing REST APIs with Express
- Connecting a React frontend to a Node.js backend
- MongoDB data modelling with Mongoose
- Authentication and authorization
- Handling file uploads with Multer
- Managing frontend/backend communication with Axios
- Structuring a full-stack application

## Author

**Humaira Khan**

Built as a full-stack MERN learning project.
