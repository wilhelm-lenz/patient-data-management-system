import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";
import AppError from "../utils/AppError.js";

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, BAD_REQUEST);
};

const handleJWTError = () =>
  new AppError("Invalid token. Please log in again!", 401);

const handleJWTExpiredError = () =>
  new AppError("Your token has expired! Please log in again", 401);

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  // console.error("???????????????????????", err);
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
    // Programming or other unknown error: don't leak error details
  } else {
    // 1) Log error
    // console.error("ERROR", err);

    // 2) Send generic message
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ status: "error", message: "Something went wrong" });
  }
};

export const globalErrorCtrl = (err, req, res, next) => {
  err.statusCode = err.statusCode || INTERNAL_SERVER_ERROR;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };

    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.name === "JsonWebTokenError") error = handleJWTError();
    if (error.name === "TokenExpiredError") error = handleJWTExpiredError();
    sendErrorProd(error, res);
  }
};

const ErrorController = {
  globalErrorCtrl,
};

export default ErrorController;
