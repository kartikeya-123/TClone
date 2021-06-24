// core components

import Teams from "./views/admin/Teams/Teams";
import Team from "./views/admin/Teams/Team";
import Dashboard from "./views/admin/Dashboard/VideoLayout";
import Dns from "@material-ui/icons/Dns";
import FlashOn from "@material-ui/icons/FlashOn";
import Palette from "@material-ui/icons/Palette";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PeopleIcon from "@material-ui/icons/People";

var routes = [
  {
    divider: true,
    show: true,
    role: ["user", "admin", "Teacher"],
  },
  {
    title: "Activities",
    show: true,
    role: ["user", "admin", "Teacher"],
  },
  {
    path: "teams",
    name: "Teams",
    icon: PeopleIcon,
    iconColor: "Primary",
    component: Teams,
    layout: "/",
    show: true,
    role: ["user", "admin", "Teacher"],
  },

  {
    path: "team/:id",
    name: "Team",
    icon: LibraryBooksIcon,
    iconColor: "Primary",
    component: Team,
    layout: "/",
    show: false,
    exact: true,
    role: ["user", "admin", "Teacher"],
  },
  {
    path: "call",
    name: "Call",
    icon: Dns,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/",
    show: false,
    exact: true,
    role: ["user", "admin", "Teacher"],
  },

  {
    divider: true,
    show: false,
  },
  {
    title: "Documentation",
    show: false,
  },
  {
    href: "https://www.creative-tim.com/learning-lab/material-ui/overview/argon-dashboard?ref=admui-admin-sidebar",
    name: "Getting started",
    icon: FlashOn,
    show: false,
  },
  {
    href: "https://www.creative-tim.com/learning-lab/material-ui/colors/argon-dashboard?ref=admui-admin-sidebar",
    name: "Foundation",
    icon: Palette,
    show: false,
  },
  {
    href: "https://www.creative-tim.com/learning-lab/material-ui/alerts/argon-dashboard?ref=admui-admin-sidebar",
    name: "Components",
    icon: Dns,
    show: false,
  },
];
export default routes;
