import User from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "./catchAsyncMiddleware.js";
import jwt from 'jsonwebtoken';

export const isAuthenticate = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
      return next(new ErrorHandler(401, "please login to access"));
    }
    const decodeData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodeData.id);
    next();
  });