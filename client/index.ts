import { io } from "socket.io-client";
const config = require("./../environment/config.ts").config;

const port = config.port;
const socket = io(`http://localhost:${port}`, { path: "/socket/" });

socket.on("connect", () => {
  console.log(`client connected on port ${port}`);
  console.log(`client connected ${socket.connected}`);
  startMessaging();
});

import readLine from "readline";
const readInterface = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

const startMessaging = () => {
  const inputMessage = function() {
    readInterface.question(
    "> ",
    (input: string) => {
      socket.emit("client", input, (response: any) => {
        inputMessage();
      });
    });
  }
  console.log("メッセージを入力してください");
  inputMessage();
}

