//Types
export const DASHBOARD_USER_REGISTERED = "NEW_USER_REGISTERED";
export const DASHBOARD_USER_USERNAME = "NEW_USER_USERNAME";
export const DASHBOARD_SHOW_MODAL = "PARTICPANT_MODAL";
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
