const readlineSync = require("readline-sync");

const CHECK_CONNECTION = "check connection";
const JOIN_ROOM = "join room";
const MESSAGE = "message";
const actions = [CHECK_CONNECTION, JOIN_ROOM, MESSAGE];

export const startCommunication = function(socket: any) {
  const action = selectAction();
  if (action == CHECK_CONNECTION) checkConnection(socket);
  else if (action == JOIN_ROOM) joinRoom(socket);
  else if (action == MESSAGE) message(socket);
  else console.log("To exit, press Ctrl+C")
}

const selectAction = function() {
  const index =  readlineSync.keyInSelect(actions, "選択してください > ");
  return actions[index];
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