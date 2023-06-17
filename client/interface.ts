const readlineSync = require("readline-sync");

export const startCommunication = function(socket: any) {
  const option = inputOption();
  if (option == "check connection") checkConnection(socket);
  else if (option == "join room") joinRoom(socket);
  else if (option == "message") message(socket);
  else console.log("To exit, press Ctrl+C")
}

const types = ["check connection", "join room", "message"];
const inputOption = function() {
  const index =  readlineSync.keyInSelect(types, "選択してください > ");
  return types[index];
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