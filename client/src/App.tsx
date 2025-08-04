import { useEffect, useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  type MessageModel,
} from "@chatscope/chat-ui-kit-react";
import { io, Socket } from "socket.io-client";

const socket: Socket = io(import.meta.env.VITE_SOCKET_URI);

const ChatExample = () => {
  const [messages, setMessages] = useState<MessageModel[]>([]);
  const [socketId, setSocketId] = useState<string>("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server:", socket.id);
      setSocketId(socket.id as string);
    });

    socket.on(
      "chat",
      (msg: { message: string; sender: string; sentTime: string }) => {
        if (msg.sender === socketId) return;

        const incomingMsg: MessageModel = {
          message: msg.message,
          sender: msg.sender,
          sentTime: msg.sentTime,
          direction: "incoming",
          position: "single",
        };
        setMessages((prev) => [...prev, incomingMsg]);
      }
    );

    return () => {
      socket.off("chat");
      socket.off("connect");
    };
  }, [socketId]);

  const handleSend = (text: string) => {
    const sentTime = new Date().toLocaleTimeString();

    const newMessage: MessageModel = {
      message: text,
      sentTime,
      sender: "You",
      direction: "outgoing",
      position: "single",
    };

    setMessages((prev) => [...prev, newMessage]);

    socket.emit("chat", {
      message: text,
      sender: socket.id,
      sentTime,
    });
  };

  return (
    <div
      style={{
        height: "98vh",
        width: "512px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {messages.map((m, i) => (
              <Message key={i} model={m} />
            ))}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSend} attachDisabled/>
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatExample;
