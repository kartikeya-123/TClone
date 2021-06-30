//Types
export const DASHBOARD_USER_REGISTERED = "NEW_USER_REGISTERED";
export const DASHBOARD_USER_USERNAME = "NEW_USER_USERNAME";
export const DASHBOARD_SHOW_MODAL = "PARTICPANT_MODAL";
export const DASHBOARD_LOGGED_USER = "LOGGED_USER";
export const DASHBOARD_USER_NOTIFICATION_RECIVED = "NOTIFICATION_RECIEVED";
//Actions

export const setActiveUsers = (activeUsers) => {
  //activeUsers are the peers
  console.log(activeUsers);
  //return a object with type such that reducer will understand which
  //type it is
  return {
    type: DASHBOARD_USER_REGISTERED,
    activeUsers: activeUsers,
  };
};

export const setUsername = (username) => {
  return {
    type: DASHBOARD_USER_USERNAME,
    username: username,
  };
};

export const setParticpantModal = (show) => {
  return {
    type: DASHBOARD_SHOW_MODAL,
    show: show,
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
