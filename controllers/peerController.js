const twilio = require("twilio");
const config = require("./../utils/config");

module.exports.peerConnectionListeners = (peerServer) => {
  peerServer.on("connection", (client) => {
    //console.log("succesfully connecter to peer js server");
    //console.log(client.id);
  });
};

exports.turnServer = (req, res, next) => {
  const client = twilio(config.accountSid, config.authToken);
  client.tokens.create().then((token) => res.send({ token }));
};
