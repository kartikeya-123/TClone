import React, { useRef, useEffect } from "react";
import "./Board.css";
import { sendDrawing } from "utils/websocketclient/clientSocket";
import { socket } from "utils/websocketclient/clientSocket";
import { Card, CardContent, CardActions, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import componentStyles from "assets/theme/views/admin/groupMessages";

const useStyles = makeStyles(componentStyles);

const Board = ({ imageData, user }) => {
  const classes = useStyles();
  const canvasRef = useRef();
  const colorsRef = useRef(null);

  useEffect(() => {
    // --------------- getContext() method returns a drawing context on the canvas-----

    const canvas = canvasRef.current;
    const test = colorsRef.current;
    const context = canvas.getContext("2d");

    // ----------------------- Colors --------------------------------------------------

    const colors = document.getElementsByClassName("color");
    console.log(colors);
    // console.log(colors, "the colors");
    // console.log(test);
    // set the current color
    const current = {
      color: "black",
    };

    // helper that will update the current color
    const onColorUpdate = (e) => {
      console.log(e);
      current.color = e.target.className.split(" ")[1];
    };

    // loop through the color elements and add the click event listeners
    for (let i = 0; i < colors.length; i++) {
      colors[i].addEventListener("click", onColorUpdate, false);
    }
    let drawing = false;

    // ------------------------------- create the drawing ----------------------------

    const drawLine = (x0, y0, x1, y1, color, emit) => {
      var rect = canvas.getBoundingClientRect();

      context.beginPath();
      context.moveTo(x0 - rect.x, y0 - rect.y);
      context.lineTo(x1 - rect.x, y1 - rect.y);
      context.strokeStyle = color;
      context.lineWidth = 4;
      context.stroke();
      context.closePath();

      if (!emit) {
        return;
      }
      const w = canvas.width;
      const h = canvas.height;

      const roomId = window.location.pathname.split("/")[2];

      socket.emit("drawing", {
        x0: x0 / w,
        y0: y0 / h,
        x1: x1 / w,
        y1: y1 / h,
        color,
        roomId: roomId,
      });
      // var base64ImageData = canvas.toDataURL("image/png");
      // const data = {
      //   imageData: base64ImageData,
      //   roomId: roomId,
      //   userId: user.id,
      // };
      // sendDrawing(data);
    };

    // ---------------- mouse movement --------------------------------------

    const onMouseDown = (e) => {
      drawing = true;

      // console.log(e.clientY);
      current.x = e.clientX || e.touches[0].clientX;
      current.y = e.clientY || e.touches[0].clientY;
    };

    const onMouseMove = (e) => {
      if (!drawing) {
        return;
      }
      //   console.log("Moving down");
      var rect = canvas.getBoundingClientRect();
      // console.log(rect);
      drawLine(
        current.x,
        current.y,
        e.clientX || e.touches[0].clientX,
        e.clientY || e.touches[0].clientY,
        current.color,
        true
      );
      current.x = e.clientX || e.touches[0].clientX;
      current.y = e.clientY || e.touches[0].clientY;
    };

    const onMouseUp = (e) => {
      if (!drawing) {
        return;
      }
      var rect = canvas.getBoundingClientRect();
      //   console.log(current.x);
      //   console.log(current.y);
      // console.log(e);

      drawing = false;
      drawLine(
        current.x,
        current.y,
        e.clientX || e.touches[0].clientX,
        e.clientY || e.touches[0].clientY,
        current.color,
        true
      );
      current.x = e.clientX || e.touches[0].clientX;
      current.y = e.clientY || e.touches[0].clientY;
    };

    // ----------- limit the number of events per second -----------------------

    const throttle = (callback, delay) => {
      let previousCall = new Date().getTime();
      return function () {
        const time = new Date().getTime();

        if (time - previousCall >= delay) {
          previousCall = time;
          callback.apply(null, arguments);
        }
      };
    };

    // -----------------add event listeners to our canvas ----------------------

    canvas.addEventListener("mousedown", onMouseDown, false);
    canvas.addEventListener("mouseup", onMouseUp, false);
    canvas.addEventListener("mouseout", onMouseUp, false);
    canvas.addEventListener("mousemove", throttle(onMouseMove, 100), false);

    // Touch support for mobile devices
    canvas.addEventListener("touchstart", onMouseDown, false);
    canvas.addEventListener("touchend", onMouseUp, false);
    canvas.addEventListener("touchcancel", onMouseUp, false);
    canvas.addEventListener("touchmove", throttle(onMouseMove, 100), false);

    // -------------- make the canvas fill its parent component -----------------

    const onResize = () => {
      if (document.getElementById("cardContent")) {
        var width = document.getElementById("cardContent").clientWidth;
        var height = document.getElementById("cardContent").clientHeight;
        // console.log(height);
        canvas.width = width;
        canvas.height = height;
      }
    };

    window.addEventListener("resize", onResize, false);
    onResize();

    // ----------------------- socket.io connection ----------------------------
    const onDrawingEvent = (data) => {
      const w = canvas.width;
      const h = canvas.height;
      drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
      // console.log("Drawing again");
      // var image = new Image();
      // image.onload = function () {
      //   context.drawImage(image, 0, 0);
      // };
      // image.src = data;
    };

    // if (imageData != null && imageData.userId !== user.id)
    //   onDrawingEvent(imageData.imageData);
    socket.on("drawing", (data) => onDrawingEvent(data));
  }, []);

  return (
    <Grid
      item
      xs={12}
      xl={12}
      component={Box}
      //   marginBottom="3rem"
      classes={{ root: classes.gridItemRoot2 + " " + classes.order2 }}
    >
      <Card className={classes.root}>
        <CardContent style={{ backgroundColor: "#1976D2" }} id="cardContent">
          <canvas ref={canvasRef} className="whiteboard" />
        </CardContent>
        <CardActions>
          <div ref={colorsRef} className="colors">
            <div className="color black" />
            <div className="color red" />
            <div className="color green" />
            <div className="color blue" />
            <div className="color yellow" />
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Board;
