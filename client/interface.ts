const readlineSync = require("readline-sync");
import { socketActions, CHECK_CONNECTION, JOIN_ROOM, MESSAGE } from "./../environment/config"

export const startCommunication = function(socket: any) {
  const action = selectAction();
  switch (action) {
    case CHECK_CONNECTION:
      checkConnection(socket);
      break;

    case JOIN_ROOM:
      joinRoom(socket);
      break;

    case MESSAGE:
      message(socket);
      break;

    default:
      console.log("To exit, press Ctrl+C");
      break;
  }
}

const selectAction = function() {
  const index =  readlineSync.keyInSelect(socketActions, "選択してください > ");
  return socketActions[index];
}

const checkConnection = function(socket: any) {
  socket.emit("check");
}

const joinRoom = function (socket: any) {
  const roomId = readlineSync.question("input room id you want to join in > ");
  socket.emit("join", roomId);
}

const message = function(socket: any) {
  const roomId = readlineSync.question("input room id you want to message > ");
  const message = readlineSync.question("input message > ");
  socket.emit("message", {roomId, message });
}