import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import User from "./models/User.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

// Signup API
app.post("/api/signup", async (req, res) => {
  const { name, username } = req.body;
  if (!name || !username) return res.status(400).json({ error: "Name & Username required" });

  try {
    let user = await User.findOne({ username });
    if (!user) {
      user = new User({ name, username });
      await user.save();
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Update counter
app.post("/api/update", async (req, res) => {
  const { username } = req.body;
  try {
    let user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: "User not found" });

    user.counter++;
    if (user.counter % 108 === 0) {
      user.mala++;
      if (user.mala > user.highScore) {
        user.highScore = user.mala;
      }
    }
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Update failed" });
  }
});

// Leaderboard
app.get("/api/leaderboard", async (req, res) => {
  try {
    const leaderboard = await User.find().sort({ highScore: -1, mala: -1 });
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch leaderboard" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
