require("dotenv").config();
const express = require("express");
const cors = require("cors");

const auth = require("./routes/auth");
const fare = require("./routes/fare");
const groups = require("./routes/groups");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", auth);
app.use("/fare", fare);
app.use("/groups", groups);

app.listen(5000, () =>
  console.log("Backend running on port 5000")
);
