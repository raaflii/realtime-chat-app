import { Server, Socket } from "socket.io";
import Message from "../models/message.ts";

export const chatSocket = (io: Server, socket: Socket) => {
  const user = socket.id;
  console.log("User connected", user);

  socket.on("chat", async (msg: { message: string; sender: string }) => {
    try {
      const savedChat = await Message.create({
        user: msg.sender || user,
        message: msg.message
      });

      io.emit("chat", {
        sender: savedChat.user,
        message: savedChat.message,
        sentTime: savedChat.timestamp
      });
    } catch (err) {
      console.error("Error saving message:", err);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected", user);
    io.emit("chat", {
      sender: "System",
      message: `User ${user} disconnected`,
      sentTime: new Date()
    });
  });
};

