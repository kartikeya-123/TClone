let myPeer;
let myPeerId;

export const connectWithPeer = () => {
  //Creating a new Peer
  console.log("connecting with peer");

  myPeer = new window.Peer(undefined, {
    path: "/api/v1/peerjs",
    host: "/",
    port: "3000",
  });

  myPeer.on("open", (id) => {
    console.log("succesfully connected with peer server");
    myPeerId = id;
    console.log(id);
  });
};
