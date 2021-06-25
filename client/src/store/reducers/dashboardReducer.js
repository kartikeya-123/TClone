import * as dashboardActions from "../actions/dashboardActions";

const initialState = {
  userName: "",
  activeUsers: null,
  showParticipantModal: false,
  user : null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case dashboardActions.DASHBOARD_USER_REGISTERED:
      return {
        ...state,
        activeUsers: action.activeUsers,
      };
    case dashboardActions.DASHBOARD_USER_USERNAME:
      return {
        ...state,
        userName: action.username,
      };
    case dashboardActions.DASHBOARD_SHOW_MODAL:
      return {
        ...state,
        showParticipantModal: action.show,
      };
    case dashboardActions.DASHBOARD_LOGGED_USER:
      return{
        ...state,
        user : action.user
      }
    default:
      return state;
  }
};

//Reducer workflow
// Client -> dispatch a action -> action returns a object -> according to action type the reducer updates the state
export default reducer;
