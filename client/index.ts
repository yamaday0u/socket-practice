import { io } from "socket.io-client";

const socket = io("http://localhost:3000", { path: "/socket/" });

socket.on("connect", () => {
  console.log("client connected");
});