export const errorHandler = (err, req, res, next) => {

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map(e => e.message);

    return res.status(400).json({
      success: false,
      errors
    });
  }

  res.status(500).json({
    success: false,
    message: err.message
  });
};