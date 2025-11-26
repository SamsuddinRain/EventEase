// server/src/config/db.js
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.PG_URI,
});

pool.connect()
  .then(() => console.log("PostgreSQL Connected ✅"))
  .catch((err) => console.error("PostgreSQL Error ❌", err));

module.exports = pool;
