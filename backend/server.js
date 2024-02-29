import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

import app from "./app.js";

const DB = process.env.MONGODB_URL.replace(
  "<USERNAME>",
  process.env.USERNAME
).replace("<PASSWORD>", process.env.PASSWORD);

const PORT = process.env.PORT || 5001;
const serverListenToPort = () =>
  app.listen(PORT, () => console.log(`Server runs on Port ${PORT}`));

console.log("Connecting to database...");

mongoose
  .connect(DB, { dbName: "patientendaten" })
  .then(() => {
    console.log("DB connection succesfull!");
    serverListenToPort();
  })
  .catch((err) => {
    console.log("Error connectiong to database");
    console.log(err);
    console.log("Server will not start. Aborting...");
    process.exit(); // end the node process (clean exit)
  });
