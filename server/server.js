process.on("uncaughtException", (error) => {
  printStatement(
    `Error: ${error.message}`,
    "Shutting down the server due to uncaught exception"
  );
  process.exit(1);
});

import app from "./app.js";
import dbConnect from "./utils/dbConnect.js";
import printStatement from "./utils/printStatement.js";

dbConnect();

app.listen(process.env.PORT, () => {
  printStatement(`Server is running...`);
});

process.on("unhandledRejection", (error) => {
  printStatement(
    `Error: ${error.message}`,
    "Shutting down the server due to unhandled promise rejection"
  );
  server.close(() => {
    process.exit(1);
  });
});
