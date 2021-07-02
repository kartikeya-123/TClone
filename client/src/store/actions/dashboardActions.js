//Types
export const DASHBOARD_USER_REGISTERED = "NEW_USER_REGISTERED";
export const DASHBOARD_USER_USERNAME = "NEW_USER_USERNAME";
export const DASHBOARD_SHOW_MODAL = "PARTICPANT_MODAL";
export const DASHBOARD_LOGGED_USER = "LOGGED_USER";
export const DASHBOARD_USER_NOTIFICATION_RECIVED = "NOTIFICATION_RECIEVED";
//Actions

export const setUsername = (username) => {
  return {
    type: DASHBOARD_USER_USERNAME,
    username: username,
  };
};

export const setLoggedUser = (data) => {
  const user = {
    name: data.name,
    image: data.image,
    email: data.email,
    id: data._id,
    role: data.role,
  };
  return {
    type: DASHBOARD_LOGGED_USER,
    user: user,
  };
};

export const setNotification = (show) => {
  return {
    type: DASHBOARD_USER_NOTIFICATION_RECIVED,
    show: show,
  };
};
