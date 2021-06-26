const dotenv = require("dotenv");
const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const { socketSetup } = require("./socketSetup");
const config = require("./utils/config");
const peerController = require("./controllers/peerController");
const { ExpressPeerServer } = require("peer");
const AppError = require("./utils/appError");

// const server = http.createServer(app);

// socketSetup(server);

dotenv.config();

console.log("Starting app..");

console.log("Waiting for connection to MongoDB");

const server = app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
const peerServer = ExpressPeerServer(server, {
  debug: true,
});
app.use("/api/v1/peerjs", peerServer);

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/client/public/index.html"));
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

peerController.peerConnectionListeners(peerServer);

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to MongoDB!");
    console.log("Starting webserver..");
    socketSetup(server);
  })
  .catch(() => {
    console.log("Could not connect to MongoDB server! Shutting down...");
    process.exit(1);
  });
