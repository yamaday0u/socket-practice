import socketIo from "socket.io";

export const join = function(socket: socketIo.Socket, roomId: string) {
  socket.join(roomId);
  console.log(`join room No.${roomId}`);
}