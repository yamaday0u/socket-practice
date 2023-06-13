import socketIo from "socket.io";

export const event = function(io: socketIo.Server) {
  io.on("connect", (socket) => {
    console.log("server connected");
  });
}