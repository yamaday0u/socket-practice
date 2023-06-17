import socketIo from "socket.io";

export const join = function(io: socketIo.Server, socket: socketIo.Socket, roomId: string) {
  socket.join(roomId);
  console.log(`join room No.${roomId}`);
  io.emit("receive", `joined room ${roomId}`);
}