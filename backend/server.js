const express = require("express");
const dotenv = require("dotenv").config();
const db = require("./config/db");
const PORT = process.env.PORT || 5000;

db();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/todo", require("./routes/todoRoutes"));

app.use("/", (req, res) => {
  res.status(404).json({ error: "Oh no error" });
});

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
