require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
// Routes
app.get("/", (req, res) => res.send("This is the Homepage"));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// cors - cross origin resource sharing

app.use(
  cors({
    origin: ["http://localhost:3000", "https://task-app.onrender.com"],
  })
);
app.use("/api/tasks", taskRoutes);

// connect to mongoDB then start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
