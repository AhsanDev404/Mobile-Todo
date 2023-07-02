import mongoose from "mongoose";
import printStatement from "./printStatement.js";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    printStatement("DB Connected");
  } catch (error) {
    printStatement(error.message);
  }
};

export default dbConnect;
