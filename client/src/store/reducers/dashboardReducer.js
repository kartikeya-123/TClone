import { CardActions } from "@material-ui/core";
import * as dashboardActions from "../actions/dashboardActions";

const initialState = {
  userName: "",
  user: null,
  showNotifications: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case dashboardActions.DASHBOARD_USER_USERNAME:
      return {
        ...state,
        userName: action.username,
      };
    case dashboardActions.DASHBOARD_LOGGED_USER:
      return {
        ...state,
        user: action.user,
      };
    case dashboardActions.DASHBOARD_USER_NOTIFICATION_RECIVED:
      return {
        ...state,
        showNotifications: action.show,
      };
    default:
      return state;
  }
};

//Reducer workflow
// Client -> dispatch a action -> action returns a object -> according to action type the reducer updates the state
export default reducer;
