import app from "./app.js";
import dbConnect from "./utils/dbConnect.js";
import printStatement from "./utils/printStatement.js";

dbConnect();

app.listen(process.env.PORT, () => {
  printStatement(`Server is running...`);
});
