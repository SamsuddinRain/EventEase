# 🚀 EventEase – Full Stack Event Management Platform

EventEase is a complete full-stack event management system built using  
**React (Frontend)**, **Node.js + Express (Backend)**, and **PostgreSQL (Database)**.

This project includes:
- User authentication (JWT)
- Admin and User roles
- Event creation, editing, deleting (Admin)
- Event booking (User)
- My bookings view (User)
- Attendee list (Admin)
- Clean UI with lightweight custom CSS
- Fully functional API with documentation

---

## 📌 Features

### 👤 User Features
- Register and login
- View all events
- Filter events by category/location
- Book event seats (1–2 seats)
- View **My Bookings**
- Cancel bookings

### 🛠 Admin Features
- Create events  
- Update events  
- Delete events  
- View attendees of each event  
- Protected admin-only API routes  

### 🔐 Security Features
- JWT-based secure authentication  
- Middleware for access control  
- Bcrypt password hashing  
- Server-side validations  

---

## 🏗 Tech Stack

### Frontend:
- React.js  
- Axios  
- React Router  
- Pure CSS (lightweight, responsive)

### Backend:
- Node.js  
- Express.js  
- JWT Authentication  
- Bcrypt  
- PostgreSQL + pg module

### Database:
- PostgreSQL with foreign key constraints  
- Auto-increment event and booking IDs  

---

## 📂 Folder Structure

EventEase/
├── client/ # React App
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── api/
│ │ ├── context/
│ │ └── styles/
│ └── package.json
│
├── server/ # Express Backend
│ ├── src/
│ │ ├── routes/
│ │ ├── middleware/
│ │ ├── controllers/
│ │ ├── config/
│ │ └── utils/
│ ├── package.json
│ └── .env (not uploaded)
│
├── .gitignore
├── README.md
└── EventEase_API_Collection.json (Postman collection)
