import socketIo from "socket.io";
import { join, message } from "./events/room";

export const event = function(io: socketIo.Server) {
  io.on("connect", (socket: socketIo.Socket) => {
    console.log("server connected");

    socket.on("check", () => {
      const checkMessage: string = "connection is OK";
      console.log(checkMessage)
      io.emit("receive", "connection is OK");
    });

    socket.on("join", (roomId: string) => {
      join(io, socket, roomId);
    });

    socket.on("message", (data: {roomId: string, message: string}) => {
      message(io, data);
    })

    socket.on("disconnect", () => {
      socket.disconnect;
      console.log("disconnected");
    })
  });
}