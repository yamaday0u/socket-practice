import socketIo from "socket.io";
import { join } from "./events/room";

export const event = function(io: socketIo.Server) {
  io.on("connect", (socket) => {
    console.log("server connected");

    socket.on("client", (message: string, callback: any) => {
      console.log("received message: " + message);
      callback({ status: "OK" });
    });

    socket.on("join", (roomId: string) => {
      join(socket, roomId);
    });
  });
}