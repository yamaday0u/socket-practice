import socketIo from "socket.io";
import { join } from "./events/room";

export const event = function(io: socketIo.Server) {
  io.on("connect", (socket: socketIo.Socket) => {
    console.log("server connected");

    socket.on("check", () => {
      const checkMessage: string = "connection is OK";
      console.log(checkMessage)
      io.emit("result", "connection is OK");
    });

    socket.on("join", (roomId: string) => {
      join(io, socket, roomId);
    });

    socket.on("disconnect", () => {
      socket.disconnect;
      console.log("disconnected");
    })
  });
}