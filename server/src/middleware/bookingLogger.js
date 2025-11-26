// server/src/middleware/bookingLogger.js

const bookingLogger = (req, res, next) => {
  const userId = req.user ? req.user.id : null;

  console.log(
    `[BOOKING LOG] User=${userId} | Event=${req.body.eventId} | Seats=${req.body.seats} | Time=${new Date().toISOString()}`
  );

  next();
};

module.exports = bookingLogger;
