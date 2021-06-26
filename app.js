const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const path = require("path");
const middleware = require("./utils/middleware");
const AppError = require("./utils/appError");
const peerServer = require("./server");
const globalErrorHandler = require("./controllers/errorController");
const clientEndpoints = ["teams", "call", "team"];
//routers
const authRouter = require("./routes/authRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const teamRouter = require("./routes/teamRoutes.js");

//Creating an express App
const app = express();

// peerController.peerConnectionListeners(peerServer);

//Security packages
app.use(helmet());

app.use(cors());

app.use(xss());
app.use(cookieParser());
app.use(express.json({ limit: "10kb" }));
app.use(mongoSanitize());
app.use(middleware.requestLogger);

// Serving static files
app.use(express.static(path.join(__dirname, "client/build")));

// app.get("/:clientEndpoint", (req, res, next) => {
//   if (clientEndpoints.includes(req.params.clientEndpoint)) {
//     res.sendFile(path.join(__dirname, "/client/build/index.html"));
//   } else {
//     next();
//   }
// });

// API Endpoints
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/team", teamRouter);

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/client/public/index.html"));
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
