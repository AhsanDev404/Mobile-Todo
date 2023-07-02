import catchAsyncError from "../middleware/catchAsyncMiddleware.js";
import User from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import sendToken from "../utils/sendToken.js";

export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    // custom class for error handel
    return next(new ErrorHandler(401, "User already exist"));
  }
  user = await User.create({ name, email, password });
  if (!user) {
    return next(new ErrorHandler(401, "User not created"));
  }
  sendToken(201, user, res);
});

export const login = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorHandler(401, "Invalid Email or Password"));
    }
    const isMatched = await user.comparePassword(password);
    if (!isMatched) {
      return next(new ErrorHandler(401, "Invalid Email or Password"));
    }
    sendToken(201, user, res);
  });

  export default 
