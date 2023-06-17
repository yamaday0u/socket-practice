import socketIo from "socket.io";

export const join = function(io: socketIo.Server, socket: socketIo.Socket, roomId: string) {
  socket.join(roomId);
  console.log(`join room No.${roomId}`);
  io.emit("receive", `joined room ${roomId}`);
}

export const message = function(io: socketIo.Server, data: {roomId: string, message: string}) {
  console.log(`received message: ${data}`);
  io.to(data.roomId).emit("receive", `Message { roomId: ${data.roomId}, message: ${data.message} }`);
}