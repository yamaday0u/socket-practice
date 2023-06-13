import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { path: "/socket/" });

app.get("/", (req: express.Request, res: express.Response) => {
  res.json({
    message: "root path"
  });
});

require("./event.ts").event(io);

httpServer.listen(3000, () => {
  console.log("Chat server listening on port 3000");
});