const express = require("express");
const pool = require("../config/db");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const generateEventId = require("../utils/generateEventId");

const router = express.Router();

// GET ALL EVENTS (PUBLIC)
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM events ORDER BY start_datetime ASC");
    res.json(result.rows);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server error" });
  }
});

// CREATE EVENT (ADMIN ONLY)
router.post("/", protect, adminOnly, async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      locationType,
      location,
      startDateTime,
      endDateTime,
      capacity
    } = req.body;

    const eventId = generateEventId(startDateTime);

    const result = await pool.query(
      `INSERT INTO events
      (event_id, title, description, category, location_type, location,
       start_datetime, end_datetime, capacity, created_by)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
       RETURNING *`,
      [
        eventId,
        title,
        description,
        category,
        locationType,
        location,
        startDateTime,
        endDateTime,
        capacity,
        req.user.id
      ]
    );

    res.json(result.rows[0]);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server error" });
  }
});

// GET ATTENDEES FOR AN EVENT (ADMIN ONLY)
router.get("/:id/attendees", protect, adminOnly, async (req, res) => {
  try {
    const eventId = req.params.id;

    const result = await pool.query(
      `SELECT 
        b.id AS booking_id,
        b.seats,
        b.status,
        b.created_at,
        u.id AS user_id,
        u.name AS user_name,
        u.email AS user_email
       FROM bookings b
       JOIN users u ON b.user_id = u.id
       WHERE b.event_id = $1`,
      [eventId]
    );

    res.json(result.rows);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE EVENT (ADMIN ONLY)
router.delete("/:id", protect, adminOnly, async (req, res) => {
  try {
    const eventId = req.params.id;

    await pool.query("DELETE FROM events WHERE id = $1", [eventId]);

    res.json({ message: "Event deleted" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = router;

