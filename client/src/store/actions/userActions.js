//Types
export const NEW_LOGGED_USER = "LOGGED_USER";
export const USER_NOTIFICATION_RECIVED = "NOTIFICATION_RECIEVED";

//Actions
export const setLoggedUser = (data) => {
  const user = {
    name: data.name,
    image: data.image,
    email: data.email,
    id: data._id,
    role: data.role,
  };
  return {
    type: NEW_LOGGED_USER,
    user: user,
  };
};

export const setNotification = (show) => {
  return {
    type: USER_NOTIFICATION_RECIVED,
    show: show,
  };
};
