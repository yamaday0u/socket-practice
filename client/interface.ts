const readlineSync = require("readline-sync");

export const startCommunication = function(socket: any) {
  const option = inputOption(socket);
  if (option == "check connection") {
    checkConnection(socket);
  }
}

const types = ["check connection"];
const inputOption = function(socket: any) {
  const index =  readlineSync.keyInSelect(types, "選択してください > ");
  return types[index];
}

const checkConnection = function(socket: any) {
  socket.emit("client", "check connection", (response: any) => {
    if (response.status == "OK") {
      console.log("connection is ok");
      startCommunication(socket);
    }
    else {
      console.log("connection is but");
      startCommunication(socket);
    }
  });
}