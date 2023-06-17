export const config = {
  port: process.env.PORT || 3000
}

export const CHECK_CONNECTION = "check connection";
export const JOIN_ROOM = "join room";
export const MESSAGE = "message";
export const socketActions = [CHECK_CONNECTION, JOIN_ROOM, MESSAGE];