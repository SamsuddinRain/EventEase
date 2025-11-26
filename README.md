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

====================================================================

# ⚙ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/EventEase.git
cd EventEase

2️⃣ Backend Setup (server)
cd server
npm install

Create .env in server/:
PORT=5000
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/eventease
JWT_SECRET=your_jwt_secret

Initialize PostgreSQL Tables:
node src/config/initTables.js

Start Backend:
npm run dev

3️⃣ Frontend Setup (client)
cd client
npm install
npm start

4️⃣ Environment Variables
Backend .env should include:
PORT=5000
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/eventease
JWT_SECRET=mysecretkey

Frontend

❗ No .env required in this project.

5️⃣ How to Run Backend & Frontend Together
Start backend:
cd server
npm run dev

Start frontend:
cd client
npm start


Backend starts at 5000, Frontend at 3000.

Both must run simultaneously.
========================================================================
🛢 Database Schema
🧑 Users Table

id (PK)

name

email

password (hashed)

role (admin/user)

🎉 Events Table

id (PK)

event_id (custom generated code)

title

category

description

location_type

location

start_datetime

end_datetime

capacity

created_by (FK → users.id)

🎫 Bookings Table

id (PK)

user_id (FK → users.id)

event_id (FK → events.id)

seats (1–2)

status (Confirmed/Cancelled)
===========================================================================
🚀 API Endpoints
🔐 Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login and receive token
🎉 Events
Method	Endpoint	Role	Description
GET	/api/events	Public	Get all events
POST	/api/events	Admin	Create event
PUT	/api/events/:id	Admin	Update event
DELETE	/api/events/:id	Admin	Delete event
GET	/api/events/:id/attendees	Admin	Get all attendees
🎫 Bookings
Method	Endpoint	Role
POST	/api/bookings	User
GET	/api/bookings/my	User
DELETE	/api/bookings/:id	User

===========================================================================
🧪 API Testing (Postman)

✔ Open Postman
✔ Import file:

EventEase_API_Collection.json


Includes:

Register

Login

Create Event

Book Event

Cancel Booking

Get Attendees

Get My Bookings
