// Imports
const socket = require("socket.io");
const { v4: uuidv4 } = require("uuid");
const app = require("./app");
const {
  sendMessage,
  meetingNotification,
  finishTeamMeeting,
} = require("./controllers/teamController");
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
  let activeTeams = [];

  const broadcastEventTypes = {
    ACTIVE_USERS: "ACTIVE_USERS",
    GROUP_CALL_ROOMS: "GROUP_CALL_ROOMS",
  };

  io.on("connection", (socket) => {
    socket.emit("connection", null);
    // console.log("new user connected");
    // console.log(socket.id);

    socket.on("new-user-connected", (data) => {
      peers.push({
        username: data.username,
        email: data.email,
        image: data.image,
        socketId: socket.id,
      });
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
      console.log(socket.id);
      peers = peers.filter((peer) => peer.socketId !== socket.id);
    });

    // listeners related with direct call

    socket.on("pre-offer", (data) => {
      console.log("pre-offer handled");
      const reciever = peers.find((peer) => peer.email === data.reciever.email);
      console.log(peers);
      if (reciever) {
        io.to(reciever.socketId).emit("pre-offer", {
          callerUsername: data.caller.username,
          callerSocketId: socket.id,
        });
      } else {
        io.to(socket.id).emit("pre-offer-answer", {
          answer: "NOT_AVAILABLE",
        });
      }
    });

    socket.on("pre-offer-answer", (data) => {
      console.log("handling pre offer answer");
      io.to(data.callerSocketId).emit("pre-offer-answer", {
        calleeSocketId: socket.id,
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
      io.to(data.recieverSocketId).emit("webRTC-candidate", {
        candidate: data.candidate,
      });
    });

    socket.on("user-hanged-up", (data) => {
      io.to(data.recieverSocketId).emit("user-hanged-up");
    });

    socket.on("create-meeting", async (data) => {
      console.log(data);
      const roomId = uuidv4();
      if (data.teamId) {
        const activeTeam = {
          roomId: roomId,
          teamId: data.teamId,
        };
        activeTeams.push(activeTeam);
        // console.log(activeTeams);
        io.to(data.teamId).emit("team-meeting-started", activeTeam);

        const users = await meetingNotification({
          teamId: data.teamId,
          teamName: data.teamName,
          owner: data.owner,
          ownerId: data.ownerId,
          roomId: roomId,
        });
        for (let user of users) {
          const activeUser = peers.find((peer) => peer.email === user.email);
          if (activeUser) io.to(activeUser.socketId).emit("new-notification");
        }
      }
    });

    socket.on("join-meeting", (data) => {
      // console.log(data);
      const peerData = {
        peerId: data.peerId,
      };
      io.to(data.roomId).emit("group-call-request", peerData);
      socket.join(data.roomId);
      console.log(io.sockets.adapter.rooms.get(data.roomId).size);
    });

    socket.on("leave-meeting", async (data) => {
      console.log(io.sockets.adapter.rooms.get(data.roomId).size);
      if (io.sockets.adapter.rooms.get(data.roomId).size == 1) {
        //If the size of room is 1
        let teamId;
        activeTeams = activeTeams.filter((activeTeam) => {
          if (activeTeam.roomId !== data.roomId) return true;
          else {
            teamId = activeTeam.teamId;
            return false;
          }
        });

        await finishTeamMeeting({ roomId: data.roomId });
        io.to(teamId).emit("team-meeting-finished", {
          roomId: data.roomId,
        });
        socket.leave(data.roomId);
      } else {
        socket.leave(data.roomId);
        io.to(data.roomId).emit("group-call-user-left", {
          streamId: data.streamId,
        });
      }
    });

    // Socket connection related to teams
    socket.on("team", (data) => {
      socket.join(data.teamId);
      const activeTeam = activeTeams.find(
        (team) => team.teamId === data.teamId
      );
      // console.log(activeTeams.length);
      if (activeTeam) {
        io.to(socket.id).emit("team-meeting-started", activeTeam);
      }
      console.log(`connected with team ${data.teamId}`);
    });

    socket.on("message", async (chatDetails, callBack) => {
      console.log(chatDetails);
      await sendMessage(chatDetails);
      const teamId = chatDetails.teamId;
      io.to(teamId).emit("new-message", chatDetails);
      callBack();
    });

    socket.on("group-message", async (chatDetails) => {
      await sendMessage(chatDetails);
      const roomId = chatDetails.roomId;
      io.to(roomId).emit("group-message-recieved", chatDetails);
    });

    socket.on("direct-message", (chatDetails) => {
      const reciever = chatDetails.reciever;
      io.to(socket.id).emit("direct-message-recieved", chatDetails);
      io.to(reciever).emit("direct-message-recieved", chatDetails);
    });

    socket.on("drawing", (data) => {
      // console.log(data);
      io.to(data.roomId).emit("drawing", data);
    });
  });
};
