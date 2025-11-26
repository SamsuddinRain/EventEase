// server/src/utils/dateUtils.js
const monthAbbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function pad2(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  const d = new Date(date);
  const day = pad2(d.getDate());
  const month = monthAbbr[d.getMonth()];
  const year = d.getFullYear();
  return `${day}-${month}-${year}`; // DD-MMM-YYYY
}

module.exports = { formatDate };
