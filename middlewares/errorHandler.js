const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode || 500;
  res.status(statusCode);
  res.json({ message: error.message, code: statusCode, stack: error.stack });
  //   console.log(statusCode);
};

module.exports = errorHandler;

// app.use((err, req, res, next) => {

//   const { status = 500  } = err;

//   res.status(status).json({ message: error.message, stack: err:stack });

//  });
