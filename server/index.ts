import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
const config = require("./../environment/config.ts").config;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { path: "/socket/" });

app.get("/", (req: express.Request, res: express.Response) => {
  res.json({
    message: "root path"
  });
});

require("./event.ts").event(io);

const port = config.port;
httpServer.listen(port, () => {
  console.log(`Chat server listening on port ${port}`);
});