import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  createdBy: { type: String, default: "SYS" },
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model("Group", groupSchema);

export default Message;
