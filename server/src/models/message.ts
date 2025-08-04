import mongoose, { Types } from "mongoose";

const messageSchema = new mongoose.Schema({
  user: { type: String, required: true },
  message: { type: String, required: true },
  group: {
    type: Types.ObjectId,
    ref: "Group",
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
