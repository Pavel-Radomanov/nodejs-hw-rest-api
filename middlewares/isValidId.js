const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  console.log(req.params);
  if (!isValidObjectId(contactId)) {
    next(HttpError(400, `${contactId} is not valid id`));
  }
  next();
};
module.exports = isValidId;

// const isValidId = (req, res, next) => {
//   const { id } = req.params;
//   if (!isValidObjectId(id)) {
//     const error = HttpError(400, `Product with id=${id} not found`);
//     console.log(error);
//     next(error);
//   }
//   next();
// };
