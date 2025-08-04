import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { connectDB } from "./config/db.ts";
import { chatSocket } from "./socket/chat.ts";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.json());

io.on("connection", (socket) => {
  chatSocket(io, socket);
});

export default server;
