// Imports
const socket = require("socket.io");
const { v4: uuidv4 } = require("uuid");
const app = require("./app");

//Exports

const broadcastEventTypes = {
  activeUsers: "ACTIVE_USERS",
};

// Socket connection
module.exports.socketSetup = (server) => {
  console.log("connected with server");

  // Peer connection

  const io = socket(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  let peers = [];

  const broadcastEventTypes = {
    ACTIVE_USERS: "ACTIVE_USERS",
    GROUP_CALL_ROOMS: "GROUP_CALL_ROOMS",
  };

  io.on("connection", (socket) => {
    socket.emit("connection", null);
    console.log("new user connected");
    console.log(socket.id);

    socket.on("register-new-user", (data) => {
      peers.push({
        username: data.username,
        email: data.email,
        image: data.image,
        socketId: socket.id,
      });
      console.log("registered new user");

      io.sockets.emit("broadcast", {
        event: broadcastEventTypes.ACTIVE_USERS,
        activeUsers: peers,
      });
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
      console.log(socket.id);
      peers = peers.filter((peer) => peer.socketId !== socket.id);

      io.sockets.emit("broadcast", {
        event: broadcastEventTypes.ACTIVE_USERS,
        activeUsers: peers,
      });
    });

    // listeners related with direct call

    socket.on("pre-offer", (data) => {
      console.log("pre-offer handled");
      io.to(data.callee.socketId).emit("pre-offer", {
        callerUsername: data.caller.username,
        callerSocketId: socket.id,
      });
    });

    socket.on("pre-offer-answer", (data) => {
      console.log("handling pre offer answer");
      io.to(data.callerSocketId).emit("pre-offer-answer", {
        answer: data.answer,
      });
    });

    socket.on("webRTC-offer", (data) => {
      console.log("handling webRTC offer");
      io.to(data.calleeSocketId).emit("webRTC-offer", {
        offer: data.offer,
      });
    });

    socket.on("webRTC-answer", (data) => {
      console.log("handling webRTC answer");

      io.to(data.callerSocketId).emit("webRTC-answer", {
        answer: data.answer,
      });
    });

    socket.on("webRTC-candidate", (data) => {
      console.log("handling ice candidate");
      io.to(data.connectedUserSocketId).emit("webRTC-candidate", {
        candidate: data.candidate,
      });
    });

    socket.on("user-hanged-up", (data) => {
      io.to(data.connectedUserSocketId).emit("user-hanged-up");
    });

    socket.on("create-meeting", (data) => {
      console.log(data);
      const roomId = uuidv4();
      socket.join(roomId);
      io.to(socket.id).emit("roomId-for-group-call", {
        roomId: roomId,
      });
    });

    socket.on("join-meeting", (data) => {
      console.log(data);
      const peerData = {
        peerId: data.peerId,
      };
      io.to(data.roomId).emit("group-call-request", peerData);
      socket.join(data.roomId);
    });

    socket.on("leave-meeting", (data) => {
      socket.leave(data.roomId);
      io.to(data.roomId).emit("group-call-user-left", {
        streamId: data.streamId,
      });
    });
  });
};
