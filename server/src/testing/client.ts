import { io } from "socket.io-client";

const socket = io('http://localhost:3000')

socket.on("connect", () => {
    console.log("Connected", socket.id)
    socket.emit("chat", "halo testing client")
}) 

socket.on("chat", (msg) => {
    console.log("Terima: ", msg)
})
