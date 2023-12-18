/**
 * Project Name: Airbnb Clone
 * Description: Airbnb is an online marketplace that connects people who want to rent out their property with people who are looking for accommodations, typically for short stays.
 *
 * Author: Amitej Pratap Singh
 * Email: amitej.singh26@gmail.com
 */

require("dotenv").config();
const express = require("express");
const Database = require("./config/database.js");
// libs
const cors = require("cors");
const morgan = require("morgan");
const useragent = require("express-useragent");

const app = express();
const PORT = process.env.PORT || 4000;

// database connection
const db = new Database(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.connect().catch((err) =>
  console.error("Error connecting to database:", err)
);

// middlewares
app.use(cors());
app.use(morgan("common"));
app.use(useragent.express());

// user agent info
app.get("/useragent-info", (req, res) => {
  res.send(req.useragent);
});

// server status & port number
app.get("/server-status", (req, res) => {
  res.status(200).json({ message: "Server is up and running!" });
});

// close the connection
process.on("SIGINT", async () => {
  try {
    await db.disconnect();
    console.log("Disconnected from database.");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}!`));
