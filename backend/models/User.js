import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  counter: { type: Number, default: 0 },
  mala: { type: Number, default: 0 },
  highScore: { type: Number, default: 0 }
});

export default mongoose.model("User", userSchema);
