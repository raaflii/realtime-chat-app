import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { chatSocket } from "./socket/chat.ts";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: process.env.ORIGIN_CORS },
});

app.use(express.json());

io.on("connection", (socket) => {
  chatSocket(io, socket);
});

export default server;
