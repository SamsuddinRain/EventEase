const express = require("express");
const pool = require("../config/db");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// USER BOOKING LIST
router.get("/my", protect, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT b.*, e.title, e.event_id, e.start_datetime, e.end_datetime 
       FROM bookings b
       JOIN events e ON b.event_id = e.id
       WHERE user_id = $1`,
      [req.user.id]
    );

    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

// CREATE BOOKING
router.post("/", protect, async (req, res) => {
  try {
    const { eventId, seats } = req.body;

    const result = await pool.query(
      `INSERT INTO bookings (user_id, event_id, seats)
       VALUES ($1,$2,$3)
       RETURNING *`,
      [req.user.id, eventId, seats]
    );

    res.json(result.rows[0]);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server error" });
  }
});

// CANCEL BOOKING
router.delete("/:id", protect, async (req, res) => {
  try {
    await pool.query(
      `UPDATE bookings SET status='Cancelled'
       WHERE id = $1 AND user_id=$2`,
      [req.params.id, req.user.id]
    );
    res.json({ message: "Booking cancelled" });
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
