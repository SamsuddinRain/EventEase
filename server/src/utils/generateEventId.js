// server/src/utils/generateEventId.js
const monthAbbr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                   "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function random3() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let out = "";
  for (let i = 0; i < 3; i++) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

function generateEventId(date = new Date()) {
  const d = new Date(date);
  const month = monthAbbr[d.getMonth()];
  const year = d.getFullYear();
  return `EVT-${month}${year}-${random3()}`;
}

module.exports = generateEventId;
