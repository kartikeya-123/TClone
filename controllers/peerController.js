module.exports.peerConnectionListeners = (peerServer) => {
  peerServer.on("connection", (client) => {
    console.log("succesfully connecter to peer js server");
    console.log(client.id);
  });
};
