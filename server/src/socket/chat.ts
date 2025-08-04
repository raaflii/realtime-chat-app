import { Server, Socket } from "socket.io";
import Message from "../models/message.ts";

export const chatSocket = (io: Server, socket: Socket) => {
  const user = socket.id;
  console.log("User connected", user);

  socket.on("chat", async (msg: string) => {
    const savedChat = await Message.create({ user, text: msg });
    io.emit("chat", savedChat);
  });

  socket.on("disconneect", () => {
    console.log("User disconnected", user);
    io.emit("chat", `User disconnected ${user}`)
  });
};
