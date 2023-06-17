import { io } from "socket.io-client";
import { startCommunication } from "./interface";
const config = require("./../environment/config.ts").config;

const port = config.port;
const socket = io(`http://localhost:${port}`, { path: "/socket/" });

socket.on("connect", () => {
  if (socket.connected) {
    console.log(`client connected on port ${port}`);
    startCommunication(socket);
  }
});

socket.on("receive", (message: string) => {
  console.log(`=> ${message}`);
  startCommunication(socket);
});