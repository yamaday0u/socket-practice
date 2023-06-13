import { io } from "socket.io-client";
const config = require("./../environment/config.ts").config;

const port = config.port;
const socket = io(`http://localhost:${port}`, { path: "/socket/" });

socket.on("connect", () => {
  console.log(`client connected on port ${port}`);
});