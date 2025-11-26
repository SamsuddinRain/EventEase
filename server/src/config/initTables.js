// server/src/config/initTables.js
const pool = require("./db");

const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(200) UNIQUE NOT NULL,
        password VARCHAR(200) NOT NULL,
        role VARCHAR(20) DEFAULT 'user'
      );

      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        event_id VARCHAR(50) UNIQUE,
        title VARCHAR(200),
        description TEXT,
        category VARCHAR(50),
        location_type VARCHAR(50),
        location VARCHAR(200),
        start_datetime TIMESTAMP,
        end_datetime TIMESTAMP,
        capacity INTEGER,
        created_by INTEGER REFERENCES users(id)
      );

      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        event_id INTEGER REFERENCES events(id),
        seats INTEGER,
        status VARCHAR(20) DEFAULT 'Confirmed',
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    console.log("Tables created successfully 🎉");
  } catch (err) {
    console.error(err);
  }
};

createTables();
