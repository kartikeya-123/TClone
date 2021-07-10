import moment from "moment";

export const getDate = (dt) => {
  let date = moment(dt).format("ll");
  date = date.split(",")[0];

  let time = moment(dt).format("LT");

  let finalTime = date + ", " + time;
  return finalTime;
};
