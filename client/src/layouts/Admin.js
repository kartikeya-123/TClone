import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
// @material-ui/icons components
import Search from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import NavbarDropdown from "../components/Dropdowns/NavbarDropdown.js";
import IncomingCallDialog from "./../views/admin/Dashboard/components/IncomingCallDialog/IncomingCallDialog";
import routes from "routes.js";
import {
  acceptIncomingCallRequest,
  rejectIncomingCallRequest,
  getLocaleStream,
} from "utils/websocketclient/clientSocket";

import componentStyles from "assets/theme/layouts/admin.js";
import { callStates } from "store/actions/videoActions";
import { setNotification } from "store/actions/userActions.js";
import { setTeamMeetingData } from "store/actions/videoActions.js";
const useStyles = makeStyles(componentStyles);

const Admin = ({ userdata, cookies, getUserAgain, logOut, ...props }) => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const {
    callState,
    callerUsername,
    localStream,
    showNotifications,
    setNotification,
    clearTeamMeetingData,
    teamMeetingData,
  } = props;

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/" && prop.role.includes(userdata.role)) {
        return (
          <Route
            path={prop.layout + prop.path}
            render={() => (
              <prop.component
                user={userdata}
                getUserAgain={getUserAgain}
                history={history}
                cookies={cookies}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "";
  };

  const acceptDirectCall = () => {
    if (location.pathname !== "/call") {
      history.push("/call");
    }
  };
  const rejectDirectCall = () => {
    rejectIncomingCallRequest();
  };

  const acceptTeamMeeting = () => {
    setNotification(true);
    const teamId = teamMeetingData.teamId;
    history.push(`/team/${teamId}`);
    clearTeamMeetingData();
  };

  const rejectTeamMeeting = () => {
    setNotification(true);
    clearTeamMeetingData();
  };
  return (
    <>
      <>
        <Sidebar
          user={userdata}
          history={history}
          role={userdata.role}
          routes={routes}
          logo={{
            innerLink: "/",
            imgSrc: require("../assets/img/Logo/microsoft-teams-logo.png")
              .default,
            imgAlt: "...",
          }}
          dropdown={<NavbarDropdown user={userdata} logOut={logOut} />}
          // input={
          //   <FormControl variant="outlined" fullWidth>
          //     <InputLabel htmlFor="outlined-adornment-search-responsive">
          //       Search
          //     </InputLabel>
          //     <OutlinedInput
          //       id="outlined-adornment-search-responsive"
          //       type="text"
          //       endAdornment={
          //         <InputAdornment position="end">
          //           <Box
          //             component={Search}
          //             width="1.25rem!important"
          //             height="1.25rem!important"
          //           />
          //         </InputAdornment>
          //       }
          //       labelWidth={70}
          //     />
          //   </FormControl>
          // }
        />
        <Box position="relative" className={classes.mainContent}>
          <Box>
            <AdminNavbar
              user={userdata}
              cookies={cookies}
              brandText={getBrandText(location.pathname)}
              history={history}
              logOut={logOut}
              showNotifications={showNotifications}
              setNotification={setNotification}
            />
          </Box>
          {callState === callStates.CALL_REQUESTED ? (
            <IncomingCallDialog
              message={`Call from ${callerUsername} `}
              show={true}
              localStream={localStream}
              accept={acceptDirectCall}
              reject={rejectDirectCall}
            />
          ) : null}
          {!showNotifications ? (
            <IncomingCallDialog
              message={`New Meeting started in ${teamMeetingData.teamName}`}
              show={true}
              localStream={localStream}
              accept={acceptTeamMeeting}
              reject={rejectTeamMeeting}
            />
          ) : null}
          <Switch>
            {getRoutes(routes)}
            <Redirect from="*" to="/teams" />
          </Switch>
        </Box>
      </>
    </>
  );
};

function mapStoreStateToProps({ Video, User }) {
  return {
    ...Video,
    ...User,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setNotification: (show) => dispatch(setNotification(show)),
    clearTeamMeetingData: () => dispatch(setTeamMeetingData(null)),
  };
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(Admin);
