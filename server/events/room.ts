import socketIo from "socket.io";

export const join = function(io: socketIo.Server, socket: socketIo.Socket, roomId: string) {
  socket.join(roomId);
  console.log(`join room: ${roomId}`);
  io.to(roomId).emit("receive", `joined room ${roomId}`);
}

export const message = function(io: socketIo.Server, data: {roomId: string, message: string}) {
  const message = `Message { roomId: ${data.roomId}, message: ${data.message} }`;
  console.log(message);
  io.to(data.roomId).emit("receive", message);
}