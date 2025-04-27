const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log("Error status code: ", statusCode);

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        msg: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHERIZED:
      res.json({
        title: "Unauthorized",
        msg: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        msg: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not found",
        msg: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "Server error",
        msg: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      res.json({
        title: "No error",
        msg: err.message,
        stackTrace: err.stack,
      });
      break;
  }
};
module.exports = errorHandler;
