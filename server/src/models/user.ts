import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  createdBy: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model("User", userSchema);

export default Message;
