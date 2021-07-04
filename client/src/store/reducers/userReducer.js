import * as userActions from "../actions/userActions";

const initState = {
  user: null,
  showNotifications: true,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case userActions.NEW_LOGGED_USER:
      return {
        ...state,
        user: action.user,
      };
    case userActions.USER_NOTIFICATION_RECIVED:
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
