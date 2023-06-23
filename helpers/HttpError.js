const HttpError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};
module.exports = HttpError;

// module.exports = (error, req, res, next) => {
//   const statusCode = res.statusCode || 500;
//   res.status(statusCode);
//   res.json({ code: statusCode, stack: error.stack });
//   //   console.log(statusCode);
// };
