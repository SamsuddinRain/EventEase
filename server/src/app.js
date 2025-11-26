const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db");  // PostgreSQL connect

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("EventEase API using PostgreSQL ❤️"));

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);

module.exports = app;
