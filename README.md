# Chat Application

A real-time chat application built using Node.js, Express.js, MongoDB, JWT Authentication, and Socket.IO. The application provides secure user authentication and real-time messaging functionality.

## Features

- User registration and login
- JWT-based authentication
- Password hashing
- Real-time messaging using Socket.IO
- Chat-room functionality
- REST APIs for frontend-backend communication
- MongoDB database integration using Mongoose
- Secure authentication middleware
- AWS EC2 deployment
- Process management using PM2
- Nginx reverse proxy configuration
- MongoDB Atlas for cloud-hosted database storage

## Tech Stack

**Backend**
- Node.js
- Express.js
- JavaScript
- REST APIs
- Socket.IO

**Database**
- MongoDB
- Mongoose
- MongoDB Atlas

**Authentication**
- JSON Web Tokens (JWT)
- Password Hashing

**Cloud & Deployment**
- AWS EC2
- Nginx
- PM2

**Tools**
- Git
- GitHub
- Postman / Thunder Client

## Project Structure

```
Chat-application/
│
├── config/
├── middleware/
├── models/
├── routes/
├── socket/
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MongoDB or a MongoDB Atlas account
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/archishakya/Chat-application.git
```

Navigate to the project directory:

```bash
cd Chat-application
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root and configure the required environment variables.

```
PORT=5801
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Replace the values with your own configuration.

### Run the Application

Start the server:

```bash
npm start
```

The backend will run locally on:

```
http://localhost:5801
```

## API

The application provides REST APIs for:

- User registration
- User login
- Authentication
- Messaging
- Frontend-backend communication

## Real-Time Communication

Socket.IO is used to provide real-time communication between users. The application supports real-time messaging and chat-room functionality without requiring users to manually refresh the application.

## AWS Deployment

The application was deployed on an AWS EC2 instance. The deployment setup included:

- AWS EC2 — application hosting
- PM2 — Node.js process management
- Nginx — reverse proxy
- MongoDB Atlas — cloud-hosted database

### Deployment Architecture

```
Client
   │
   ▼
 Nginx
   │
   ▼
Node.js / Express.js
   │
   ├── REST APIs
   │
   ├── Socket.IO
   │
   ▼
MongoDB Atlas
```

## Security

- JWT-based authentication
- Password hashing
- Authentication middleware
- Environment variables for sensitive configuration

## Future Improvements

- Private messaging between individual users
- Message notifications
- Online/offline user status
- Image and file sharing
- Message read receipts
- Improved frontend interface
- Production-level security and monitoring

## Author

**Archi Shakya**

- GitHub: [https://github.com/archishakya](https://github.com/archishakya)
- LinkedIn: [https://linkedin.com/in/archi-shakya](https://linkedin.com/in/archi-shakya)
