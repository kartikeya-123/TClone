(this["webpackJsonpcomp-frontend"] =
  this["webpackJsonpcomp-frontend"] || []).push([
  [0],
  {
    174: function (e, t, a) {},
    176: function (e, t, a) {},
    233: function (e, t, a) {},
    257: function (e, t, a) {},
    291: function (e, t, a) {},
    305: function (e, t, a) {},
    306: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = a.p + "static/media/microsoft-teams-logo.c9f61336.png");
    },
    307: function (e, t, a) {
      "use strict";
      a.r(t), (t.default = a.p + "static/media/google.eae9aa93.svg");
    },
    308: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        r = a.n(n),
        o = a(19),
        i = a.n(o),
        c = (a(233), a(20)),
        s = a(8),
        l = a(178),
        d = a(179),
        m = a(204),
        p = a(203),
        u = a(25),
        g = a(403),
        b = a(64),
        h = a(32),
        j = a(356),
        x = a(401),
        f = a(370),
        O = a(372),
        v = a(371),
        y = a(45),
        w = a(9),
        S = a(17),
        C = a.n(S),
        k = a(99),
        A = a.n(k),
        R = a(407),
        I = a(362),
        T = a(361),
        E = a(404),
        L = a(205),
        N = a(360),
        B = a(181),
        M = a.n(B),
        D = a(108),
        F = a.n(D),
        z = a(10),
        U = function (e) {
          var t;
          return {
            buttonRoot:
              ((t = {
                padding: ".25rem 0 .25rem 1rem!important",
                border: "0!important",
                boxShadow: "none!important",
              }),
              Object(z.a)(t, e.breakpoints.down("md"), {
                padding: "0!important",
                minWidth: "unset!important",
                borderRadius: "50%",
              }),
              Object(z.a)(t, "marginRight", "30px"),
              t),
            buttonLabel: Object(z.a)(
              {
                fontSize: ".875rem",
                fontWeight: "600",
                color: e.palette.buttonLightLabel.main,
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
              },
              e.breakpoints.down("md"),
              { padding: "0!important" }
            ),
            avatarRoot: Object(z.a)(
              { width: "36px", height: "36px", marginRight: "0.5rem" },
              e.breakpoints.down("md"),
              { marginRight: "0" }
            ),
            dividerRoot: {
              height: "0",
              margin: ".5rem 0",
              overflow: "hidden",
              borderTop: "1px solid " + e.palette.gray[200],
            },
            menuTitle: {
              margin: "0!important",
              textTransform: "uppercase",
              display: "block",
              padding: ".5rem 1rem",
              whiteSpace: "nowrap",
            },
          };
        },
        V = a(2),
        H = Object(j.a)(U);
      function P(e) {
        var t = e.user,
          a = e.cookies,
          n = e.logOut,
          o = Object(u.g)(),
          i = H(),
          c = r.a.useState(null),
          s = Object(w.a)(c, 2),
          l = s[0],
          d = s[1],
          m = Boolean(l),
          p = function () {
            d(null);
          },
          g = "primary-search-account-menu",
          b = Object(V.jsxs)(L.a, {
            anchorEl: l,
            anchorOrigin: { vertical: "top", horizontal: "right" },
            id: g,
            keepMounted: !0,
            transformOrigin: { vertical: "top", horizontal: "right" },
            open: m,
            onClose: p,
            children: [
              Object(V.jsx)(y.a, {
                variant: "h6",
                component: "h6",
                classes: { root: i.menuTitle },
                children: "Welcome!",
              }),
              Object(V.jsxs)(x.a, {
                display: "flex!important",
                alignItems: "center!important",
                component: N.a,
                onClick: function () {
                  p(), o.push("/user-profile");
                },
                children: [
                  Object(V.jsx)(x.a, {
                    component: F.a,
                    width: "1.25rem!important",
                    height: "1.25rem!important",
                    marginRight: "1rem",
                  }),
                  Object(V.jsx)("span", { children: "My profile" }),
                ],
              }),
              Object(V.jsx)(T.a, {
                component: "div",
                classes: { root: i.dividerRoot },
              }),
              Object(V.jsx)(k.GoogleLogout, {
                clientId:
                  "814516511786-nucvcmf3osa464saoshkeg2ma2slfuqa.apps.googleusercontent.com",
                buttonText: "LOG OUT",
                render: function (e) {
                  return Object(V.jsxs)(x.a, {
                    display: "flex!important",
                    alignItems: "center!important",
                    component: N.a,
                    onClick: e.onClick,
                    children: [
                      Object(V.jsx)(x.a, {
                        component: M.a,
                        width: "1.25rem!important",
                        height: "1.25rem!important",
                        marginRight: "1rem",
                      }),
                      Object(V.jsx)(I.a, {
                        disableElevation: !0,
                        disableRipple: !0,
                        disableFocusRipple: !0,
                        disableTouchRipple: !0,
                        style: { textAlign: "left", padding: "0px" },
                        children: "Sign Out",
                      }),
                    ],
                  });
                },
                onLogoutSuccess: function () {
                  n(!0),
                    C.a
                      .post("/api/v1/auth/logout", { withCredentials: !0 })
                      .then(function (e) {
                        a.remove("isLoggedIn", { path: "/" }),
                          a.remove("userData", { path: "/" }),
                          window.location.reload(!1);
                      })
                      .catch(function (e) {
                        //console.log(e),
                          alert("Failed to log out. Try again later");
                      });
                },
                icon: !1,
                style: { color: "black", boxSizing: "inherit" },
              }),
            ],
          });
        return Object(V.jsxs)(V.Fragment, {
          children: [
            Object(V.jsxs)(I.a, {
              edge: "end",
              "aria-label": "account of current user",
              "aria-controls": g,
              "aria-haspopup": "true",
              onClick: function (e) {
                d(e.currentTarget);
              },
              color: "inherit",
              classes: { label: i.buttonLabel, root: i.buttonRoot },
              children: [
                Object(V.jsx)(R.a, {
                  alt: "...",
                  src: t ? t.image : null,
                  classes: { root: i.avatarRoot },
                }),
                Object(V.jsx)(E.a, { smDown: !0, children: t ? t.name : null }),
              ],
            }),
            b,
          ],
        });
      }
      var W = {
          white: { main: "#FFFFFF" },
          black: { light: "#12263F", main: "#000000" },
          transparent: { main: "transparent" },
          gray: {
            100: "#f6f9fc",
            200: "#e9ecef",
            300: "#dee2e6",
            400: "#ced4da",
            500: "#adb5bd",
            600: "#8898aa",
            700: "#525f7f",
            800: "#32325d",
            900: "#212529",
          },
          primary: {
            main: "#5e72e4",
            dark: "#233dd2",
            snackbar: "#7889e8",
            badgeBg: "#eaecfb",
            badgeBgHover: "#2a44db",
            badge: "#2643e9",
          },
          secondary: {
            main: "#f7fafc",
            snackbar: "#f8fbfc",
            badgeBgHover: "#cadeeb",
            btnOutline: "#4385b1",
            btnActive: "#d2e3ee",
          },
          warning: {
            light: "#ffd600",
            main: "#fb6340",
            snackbar: "#fc7c5f",
            badgeBg: "#fee6e0",
            badgeBgHover: "#f93305",
            badge: "#ff3709",
          },
          error: {
            light: "#f3a4b5",
            main: "#f5365c",
            snackbar: "#f75676",
            badgeBg: "#fdd1da",
            badgeBgHover: "#e30b36",
            badge: "#f80031",
            dialogNotification: "#f56036",
          },
          info: {
            main: "#464775",
            snackbar: "#37d5f2",
            badgeBg: "#aaedf9",
            badgeBgHover: "#0c9cb7",
            badge: "#F5F5F5",
            hovered: "#ebedfa",
          },
          background: { default: "#f8f9fe" },
          text: { primary: "#525f7f" },
          dark: {
            tableBorder: "#1f3a68",
            tableHeadColor: "#4d7bca",
            tableHeadBgColor: "#1c345d",
            main: "#172b4d",
            dark: "#0b1526",
            snackbar: "#3c4d69",
            badgeBg: "#4172c6",
            badgeBgHover: "#09111e",
            heading: "black",
          },
          success: {
            main: "#2dce89",
            snackbar: "#4fd69c",
            badgeBg: "#b0eed3",
            badgeBgHover: "#229c68",
            badge: "#1aae6f",
          },
        },
        Q = function (e) {
          e = (e += "").replace("#", "");
          if (!/[0-9A-Fa-f]/g.test(e) || (3 !== e.length && 6 !== e.length))
            throw new Error("input is not a valid hex color.");
          if (3 === e.length) {
            var t = e[0],
              a = e[1],
              n = e[2];
            e = t + t + a + a + n + n;
          }
          var r = (e = e.toUpperCase())[0] + e[1],
            o = e[2] + e[3],
            i = e[4] + e[5];
          return (
            parseInt(r, 16) + ", " + parseInt(o, 16) + ", " + parseInt(i, 16)
          );
        },
        G = {
          boxShadow: "0 0 2rem 0 rgba(" + Q(W.gray[600]) + ",.15)",
          buttonBoxShadow:
            "0 7px 14px rgba(" +
            Q(W.gray[800]) +
            ",0.1), 0 3px 6px rgba(" +
            Q(W.black.main) +
            ", 0.08)",
          buttonBoxShadowNeutral:
            "0 4px 6px rgba(" +
            Q(W.gray[800]) +
            ",0.11), 0 1px 3px rgba(" +
            Q(W.black.main) +
            ", 0.08)",
          iconsPageButtonBoxShadow:
            "0 0 0 1px rgba(" +
            Q(W.black.main) +
            ", 0.1), 0 4px 16px rgba(" +
            Q(W.black.main) +
            ", 0.1)",
          inputBoxShadow:
            "0 1px 3px rgba(" +
            Q(W.gray[800]) +
            ",0.15), 0 1px 0 rgba(" +
            Q(W.black.main) +
            ", 0.02)",
          linearProgressBoxShadow:
            "inset 0 1px 2px rgba(" + Q(W.black.main) + ", 0.1)",
          menuBoxShadow:
            "0 50px 100px rgba(" +
            Q(W.gray[800]) +
            ",0.10), 0 15px 35px rgba(" +
            Q(W.gray[800]) +
            ",0.15), 0 5px 15px rgba(" +
            Q(W.black.main) +
            ", 0.1)",
          sliderBoxShadow: "inset 0 1px 2px rgba(" + Q(W.gray[800]) + ", 0.1)",
          popoverBoxShadow:
            "0px 0.5rem 2rem 0px rgba(" + Q(W.black.main) + ", 0.2)",
        },
        _ = function (e) {
          var t;
          return {
            appBarRoot:
              ((t = {}),
              Object(z.a)(t, e.breakpoints.down("sm"), { display: "none" }),
              Object(z.a)(
                t,
                "background",
                "linear-gradient(87deg," + e.palette.info.main + ",#464775)"
              ),
              Object(z.a)(t, "height", "60px"),
              t),
            brandTitle: Object(z.a)(
              {
                textTransform: "capitalise",
                margin: "0",
                color: e.palette.white.main,
              },
              e.breakpoints.down("md"),
              { display: "none" }
            ),
            searchBox: {
              borderColor: e.palette.adminNavbarSearch.main,
              borderRadius: "2rem",
              border: "2px solid ",
              backgroundColor: "initial",
              boxShadow: G.inputBoxShadow,
              transition: "box-shadow .15s ease",
            },
            searchIcon: {
              color: e.palette.adminNavbarSearch.main,
              marginRight: "0.5rem",
              marginLeft: "1rem",
            },
            searchInput: {
              color: e.palette.adminNavbarSearch.main,
              width: "270px",
              backgroundColor: "initial",
              border: 0,
              boxShadow: "none",
              padding: "0",
            },
            containerRoot: Object(z.a)({}, e.breakpoints.up("md"), {
              paddingLeft: "39px",
              paddingRight: "39px",
            }),
          };
        },
        Y = (a(257), a(406)),
        q = a(366),
        J = a(368),
        Z = a(367),
        X = a(369),
        K = a(208),
        $ = a(182),
        ee = a.n($),
        te = a(75),
        ae = a(363),
        ne = a(364),
        re = a(365),
        oe = a.p + "static/media/notification.b7c5a8ce.mp3",
        ie = Object(j.a)({
          root: {
            width: "min(360px, 90vw)",
            boxShadow: "0px 0px",
            padding: 0,
            margin: 0,
          },
          bullet: {
            display: "inline-block",
            margin: "0 2px",
            transform: "scale(0.8)",
          },
          title: { fontSize: 14 },
          pos: { marginBottom: 12 },
          badge: { color: "red" },
          dot: { color: "#fc03a9", backgroundColor: "#fc03a9" },
          popover: { padding: 0 },
          tile: {
            transition: "0.3s ease-in-out",
            padding: "4px 10px",
            borderTop: "1px solid rgb(0,0,0,0.2)",
            display: "flex",
            "&:hover": {
              backgroundColor: "rgb(65, 153, 242)",
              color: "rgb(255,255,255)",
              boxShadow: "0px 3px 5px rgb(0,0,0,0.4)",
            },
            cursor: "pointer",
          },
          head: { fontWeight: 600 },
          desc: { fontSize: "14px" },
        }),
        ce = function (e) {
          var t = e.user,
            a = e.history,
            r = e.color,
            o = e.show,
            i = e.setNotification,
            c = ie(),
            s = Object(n.useState)(null),
            l = Object(w.a)(s, 2),
            d = l[0],
            m = l[1],
            p = Object(n.useState)(!0),
            u = Object(w.a)(p, 2),
            g = u[0],
            b = u[1],
            h = Object(n.useState)([
              { message: "You have no Notifications", link: "NULL" },
            ]),
            j = Object(w.a)(h, 2),
            x = j[0],
            f = j[1],
            O = Object(n.useState)(t.notificationsSeen),
            v = Object(w.a)(O, 2),
            S = v[0],
            k = v[1];
          Object(n.useEffect)(
            function () {
              !1 === o && (A(), k(!1));
            },
            [o]
          );
          var A = function () {
              new te.Howl({
                src: oe,
                html5: !0,
                format: ["mp3", "aac"],
              }).play(),
                //console.log("sound");
            },
            R = function () {
              i(!0),
                C.a
                  .get("/api/v1/user/notifications", { withCredentials: !0 })
                  .then(function (e) {
                    var t = e.data.data.notifications.reverse();
                    e.data.data.status;
                    t.length > 0 && f(t), k(!0), b(!1);
                  })
                  .catch(function (e) {
                    //console.log(e), b(!1);
                  });
            },
            I = Boolean(d),
            T = I ? "simple-popover" : void 0,
            E = function (e) {
              switch (e.notificationType) {
                case "profileMatch":
                  return Object(V.jsx)(ae.a, { color: "darkblue", size: 20 });
                case "New Team":
                  return Object(V.jsx)(ne.a, { color: "blue", size: 20 });
                case "New Meeting":
                  return Object(V.jsx)(re.a, { color: "blue", size: 20 });
                default:
                  return Object(V.jsx)(ae.a, { size: 20 });
              }
            },
            L = function (e) {
              switch (e.type) {
                case "New Team":
                  return Object(V.jsxs)("div", {
                    children: [
                      " ",
                      Object(V.jsx)(y.a, {
                        className: c.head,
                        children: '"Team Update"',
                      }),
                      Object(V.jsx)(y.a, {
                        className: c.desc,
                        children: e.message,
                      }),
                    ],
                  });
                case "New Meeting":
                  return Object(V.jsxs)("div", {
                    children: [
                      " ",
                      Object(V.jsx)(y.a, {
                        className: c.head,
                        children: '"Meeting Update"',
                      }),
                      Object(V.jsx)(y.a, {
                        className: c.desc,
                        children: e.message,
                      }),
                    ],
                  });
                default:
                  return Object(V.jsx)("div", {
                    children: Object(V.jsx)(y.a, {
                      className: c.head,
                      children: e.message,
                    }),
                  });
              }
            },
            N = Object(V.jsxs)(q.a, {
              className: c.root,
              children: [
                Object(V.jsx)(Z.a, {
                  title: "NOTIFICATIONS",
                  style: { padding: "10px 0px 0px 10px", margin: 0 },
                }),
                Object(V.jsx)(J.a, {
                  style: { padding: 0, margin: 0 },
                  children: g
                    ? null
                    : x.map(function (e, t) {
                        return Object(V.jsxs)(
                          "div",
                          {
                            className: c.tile,
                            onClick: function () {
                              !(function (e) {
                                var t = "/team/".concat(e);
                                a.push(t);
                              })(e.teamId);
                            },
                            children: [
                              Object(V.jsx)("div", {
                                style: {
                                  alignItems: "center",
                                  display: "flex",
                                  margin: "0px 10px 0px 3px",
                                },
                                children: E(e),
                              }),
                              L(e),
                            ],
                          },
                          t
                        );
                      }),
                }),
              ],
            });
          return Object(V.jsxs)("div", {
            children: [
              Object(V.jsx)(X.a, {
                classes: { dot: c.dot },
                overlap: "circle",
                variant: "dot",
                invisible: S,
                children: Object(V.jsx)(K.a, {
                  style: {
                    color: "white",
                    width: "25px",
                    height: "30px",
                    cursor: "pointer",
                  },
                  onClick: function (e) {
                    R(), m(e.currentTarget);
                  },
                  children: Object(V.jsx)(ee.a, {
                    style: { color: r || "white" },
                  }),
                }),
              }),
              Object(V.jsx)(Y.a, {
                id: T,
                open: I,
                anchorEl: d,
                onClose: function () {
                  m(null);
                },
                anchorOrigin: { vertical: "bottom", horizontal: "center" },
                className: c.popover,
                transformOrigin: { vertical: "top", horizontal: "center" },
                children: N,
              }),
            ],
          });
        },
        se = Object(j.a)(_);
      function le(e) {
        var t = e.user,
          a = e.cookies,
          n = (e.brandText, e.history),
          r = e.logOut,
          o = e.showNotifications,
          i = e.setNotification,
          c = se();
        return Object(V.jsx)(V.Fragment, {
          children: Object(V.jsx)(f.a, {
            position: "absolute",
            color: "transparent",
            elevation: 0,
            classes: { root: c.appBarRoot },
            children: Object(V.jsx)(v.a, {
              disableGutters: !0,
              children: Object(V.jsx)(O.a, {
                maxWidth: !1,
                component: x.a,
                classes: { root: c.containerRoot },
                children: Object(V.jsxs)(x.a, {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "0.5rem",
                  children: [
                    Object(V.jsx)("div", {
                      children: Object(V.jsx)(y.a, {
                        className: c.brandTitle,
                        variant: "h4",
                        component: "a",
                        children: "Microsoft Teams",
                      }),
                    }),
                    Object(V.jsxs)(x.a, {
                      display: "flex",
                      alignItems: "center",
                      width: "auto",
                      children: [
                        Object(V.jsx)(P, { user: t, cookies: a, logOut: r }),
                        Object(V.jsx)(ce, {
                          user: t,
                          history: n,
                          show: o,
                          setNotification: i,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
      var de = a(373),
        me = function (e) {
          return {
            listItemRoot: {
              width: "auto",
              color: e.palette.gray[600],
              fontSize: ".875rem",
            },
            copyrightWrapper: Object(z.a)(
              {
                color: e.palette.gray[600],
                fontSize: ".875rem",
                textAlign: "center",
              },
              e.breakpoints.up("md"),
              { textAlign: "left" }
            ),
            copyrightLink: {
              fontWeight: "600",
              marginLeft: ".25rem",
              color: e.palette.primary.main,
              backgroundColor: "initial",
              textDecoration: "none",
              "&:hover": { color: e.palette.primary.dark },
            },
            justifyContentCenter: Object(z.a)({}, e.breakpoints.down("lg"), {
              justifyContent: "center!important",
            }),
            flexDirectionColumn: Object(z.a)({}, e.breakpoints.down("sm"), {
              flexDirection: "column!important",
            }),
          };
        },
        pe = (Object(j.a)(me), a(374)),
        ue = a(359),
        ge = a(310),
        be = a(184),
        he = a.n(be),
        je = a(183),
        xe = a.n(je),
        fe = function (e) {
          var t;
          return {
            listRoot: { marginTop: "2rem", height: "100%" },
            listItemRoot: {
              display: "flex",
              fontSize: ".9rem",
              color: e.palette.sidebarLinks.main,
              padding: ".65rem 1.5rem !important",
              "&:hover": { color: e.palette.sidebarLinks.dark },
            },
            listItemRootUpgradeToPro:
              ((t = {}),
              Object(z.a)(t, e.breakpoints.up("md"), {
                position: "absolute",
                bottom: "10px",
              }),
              Object(z.a)(t, "&,&:hover", {
                background: e.palette.gray[100] + "!important",
              }),
              Object(z.a)(t, "&:before", { display: "none" }),
              t),
            listItemSelected: {
              color: e.palette.sidebarLinks.dark,
              "&$listItemRoot,&$listItemRoot:hover": {
                backgroundColor: "unset",
              },
              "&:before": {
                top: ".25rem",
                bottom: ".25rem",
                left: 0,
                right: "auto",
                borderLeft: "2px solid " + e.palette.primary.main,
                borderBottom: 0,
                content: '""',
                position: "absolute",
              },
            },
            listItemIconRoot: {
              minWidth: "2.25rem",
              fontSize: ".9375rem",
              lineHeight: "1.5rem",
              display: "inline-block",
              top: "2px",
            },
            divider: {
              marginBottom: "1rem",
              marginTop: "1rem",
              marginLeft: "1.5rem",
              marginRight: "1.5rem",
            },
            title: {
              paddingTop: ".25rem",
              paddingBottom: ".25rem",
              fontSize: ".75rem",
              textTransform: "uppercase",
              letterSpacing: ".04em",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              color: e.palette.gray[600],
            },
            logoClasses: Object(z.a)(
              {
                maxHeight: "2rem",
                maxWidth: "100%",
                verticalAlign: "middle",
                borderStyle: "none",
              },
              e.breakpoints.up("md"),
              { maxHeight: "4.5rem" }
            ),
            logoLinkClasses: {
              fontSize: "1.25rem",
              lineHeight: "inherit",
              whiteSpace: "nowrap",
              textDecoration: "none",
              display: "block",
              textAlign: "center",
            },
            textPrimary: { color: e.palette.primary.main },
            textPrimaryLight: { color: e.palette.primary.light },
            textError: { color: e.palette.error.main },
            textErrorLight: { color: e.palette.error.light },
            textWarning: { color: e.palette.warning.main },
            textWarningLight: { color: e.palette.warning.light },
            textInfo: { color: e.palette.info.main },
            textInfoLight: { color: e.palette.info.light },
            menuPaper: { width: "calc(100% - 5rem)" },
            outlineNone: { outline: "none!important" },
          };
        },
        Oe = Object(j.a)(fe);
      function ve(e) {
        var t = e.role,
          a = e.routes,
          r = e.logo,
          o = e.dropdown,
          i = (e.input, e.user),
          s = e.history,
          l = Oe(),
          d = Object(u.h)(),
          m = Object(n.useState)(null),
          p = Object(w.a)(m, 2),
          g = p[0],
          b = p[1],
          h = Object(n.useState)(null),
          j = Object(w.a)(h, 2),
          S = j[0],
          C = j[1],
          k = Boolean(g),
          A = function () {
            b(null);
          };
        Object(n.useEffect)(function () {
          C(t);
        }, []);
        var R = "responsive-menu-id",
          I = function (e) {
            return e.map(function (e, t) {
              if (!e.show) return null;
              if (e.role && !e.role.includes(S)) return null;
              if (e.divider)
                return Object(V.jsx)(T.a, { classes: { root: l.divider } }, t);
              if (e.title)
                return Object(V.jsx)(
                  y.a,
                  {
                    variant: "h6",
                    component: "h6",
                    classes: { root: l.title },
                    children: e.title,
                  },
                  t
                );
              var a = Object(V.jsxs)(V.Fragment, {
                children: [
                  Object(V.jsxs)(x.a, {
                    minWidth: "2.25rem",
                    display: "flex",
                    alignItems: "center",
                    children: [
                      "string" === typeof e.icon
                        ? Object(V.jsx)(x.a, {
                            component: "i",
                            className: e.icon + " " + l["text" + e.iconColor],
                          })
                        : null,
                      "object" === typeof e.icon
                        ? Object(V.jsx)(x.a, {
                            component: e.icon,
                            width: "1.25rem!important",
                            height: "1.25rem!important",
                            className: l["text" + e.iconColor],
                          })
                        : null,
                    ],
                  }),
                  e.name,
                ],
              });
              return e.href
                ? Object(V.jsx)(
                    ge.a,
                    {
                      component: "a",
                      href: e.href,
                      onClick: A,
                      classes: {
                        root:
                          l.listItemRoot +
                          (e.upgradeToPro
                            ? " " + l.listItemRootUpgradeToPro
                            : ""),
                        selected: l.listItemSelected,
                      },
                      target: "_blank",
                      selected: !0 === e.upgradeToPro,
                      children: a,
                    },
                    t
                  )
                : Object(V.jsx)(
                    ge.a,
                    {
                      component: c.b,
                      onClick: A,
                      to: e.layout + e.path,
                      classes: {
                        root:
                          l.listItemRoot +
                          (e.upgradeToPro
                            ? " " + l.listItemRootUpgradeToPro
                            : ""),
                        selected: l.listItemSelected,
                      },
                      selected:
                        d.pathname === e.layout + e.path ||
                        !0 === e.upgradeToPro,
                      children: a,
                    },
                    t
                  );
            });
          },
          N = Object(V.jsx)("img", {
            alt: r.imgAlt,
            className: l.logoClasses,
            src: r.imgSrc,
          }),
          B =
            r && r.innerLink
              ? Object(V.jsx)(c.b, {
                  to: r.innerLink,
                  className: l.logoLinkClasses,
                  children: N,
                })
              : r && r.outterLink
              ? Object(V.jsx)("a", {
                  href: r.outterLink,
                  className: l.logoLinkClasses,
                  children: N,
                })
              : null;
        return Object(V.jsxs)(V.Fragment, {
          children: [
            Object(V.jsx)(E.a, {
              smDown: !0,
              implementation: "css",
              children: Object(V.jsxs)(pe.a, {
                variant: "permanent",
                anchor: "left",
                open: !0,
                children: [
                  Object(V.jsx)(x.a, { paddingBottom: "1rem", children: B }),
                  Object(V.jsx)(ue.a, {
                    classes: { root: l.listRoot },
                    children: I(a),
                  }),
                ],
              }),
            }),
            Object(V.jsxs)(E.a, {
              mdUp: !0,
              implementation: "css",
              children: [
                Object(V.jsx)(f.a, {
                  position: "relative",
                  color: "default",
                  elevation: 0,
                  children: Object(V.jsxs)(v.a, {
                    children: [
                      Object(V.jsxs)(O.a, {
                        display: "flex!important",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: ".75rem",
                        marginBottom: ".75rem",
                        component: x.a,
                        maxWidth: !1,
                        padding: "0!important",
                        children: [
                          Object(V.jsx)(x.a, {
                            component: xe.a,
                            width: "2rem!important",
                            height: "2rem!important",
                            "aria-controls": R,
                            "aria-haspopup": "true",
                            onClick: function (e) {
                              b(e.currentTarget);
                            },
                          }),
                          B,
                          o,
                        ],
                      }),
                      Object(V.jsx)(ce, {
                        user: i,
                        history: s,
                        color: "black",
                      }),
                    ],
                  }),
                }),
                Object(V.jsxs)(L.a, {
                  anchorEl: g,
                  anchorOrigin: { vertical: "top", horizontal: "right" },
                  id: R,
                  keepMounted: !0,
                  transformOrigin: { vertical: "top", horizontal: "right" },
                  open: k,
                  onClose: A,
                  classes: { paper: l.menuPaper },
                  children: [
                    Object(V.jsxs)(x.a, {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingLeft: "1.25rem",
                      paddingRight: "1.25rem",
                      paddingBottom: "1rem",
                      className: l.outlineNone,
                      children: [
                        B,
                        Object(V.jsx)(x.a, {
                          component: he.a,
                          width: "2rem!important",
                          height: "2rem!important",
                          "aria-controls": R,
                          "aria-haspopup": "true",
                          onClick: A,
                        }),
                      ],
                    }),
                    Object(V.jsx)(x.a, {
                      component: T.a,
                      marginBottom: "1rem!important",
                      marginLeft: "1.25rem!important",
                      marginRight: "1.25rem!important",
                    }),
                    Object(V.jsx)(ue.a, {
                      classes: { root: l.listRoot },
                      children: I(a),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      ve.defaultProps = { routes: [] };
      a(258), a(259);
      var ye,
        we,
        Se,
        Ce,
        ke,
        Ae,
        Re,
        Ie,
        Te = a(375),
        Ee = a(378),
        Le = a(376),
        Ne = a(377),
        Be = a(56),
        Me = a.n(Be),
        De = a(90),
        Fe = a(89),
        ze = a(29),
        Ue = a(185),
        Ve = a.n(Ue),
        He = a(85),
        Pe = "LOGGED_USER",
        We = "NOTIFICATION_RECIEVED",
        Qe = function (e) {
          return { type: We, show: e };
        },
        Ge = { user: null, showNotifications: !0 },
        _e = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Ge,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case Pe:
              return Object(s.a)(Object(s.a)({}, e), {}, { user: t.user });
            case We:
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { showNotifications: t.show }
              );
            default:
              return e;
          }
        },
        Ye = "AVAILABLE",
        qe = "REQUESTED",
        Je = "ONGOING",
        Ze = function (e) {
          return { type: "SET_LOCALE_STREAM", localStream: e };
        },
        Xe = function (e) {
          return { type: "SET_VIDEO_STATE", callState: e };
        },
        Ke = function (e) {
          return { type: "SET_CALLING_DIALOG", show: e };
        },
        $e = function (e) {
          return { type: "SET_CALL_REJECTED", callRejected: e };
        },
        et = function (e) {
          return { type: "SET_GROUP_STEAMS", groupStreams: e };
        },
        tt = function (e) {
          return { type: "SET_ACTIVE_TEAM", activeTeams: e };
        },
        at = function (e) {
          return { type: "SET_SCREEN_SHARE_ACTIVE", active: e };
        },
        nt = function (e) {
          return { type: "SET_USER_SOCKET_ID", socketId: e };
        },
        rt = function (e) {
          return { type: "SET_TEAM_MEETING_DATA", teamMeetingData: e };
        },
        ot = {
          localStream: null,
          callState: Ye,
          callerUsername: "",
          recieverUsername: "",
          directCallModal: !1,
          callRejected: { rejected: !1, reason: "" },
          remoteStream: null,
          localCamera: !0,
          localMicrophone: !0,
          screenSharing: !1,
          isTeamMeetingPresent: !1,
          teamMeetingStreams: [],
          activeTeams: [],
          groupMessages: [],
          directMessages: [],
          connectedUserId: "",
          imageData: null,
          teamMeetingData: null,
        },
        it = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ot,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "SET_LOCALE_STREAM":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { localStream: t.localStream }
              );
            case "SET_VIDEO_STATE":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { callState: t.callState }
              );
            case "SET_CALLING_DIALOG":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { directCallModal: t.show }
              );
            case "SET_CALLER_DETAILS":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { callerUsername: t.callerUsername }
              );
            case "SET_CALLEE_DETAILS":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { recieverUsername: t.recieverUsername }
              );
            case "SET_CALL_REJECTED":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { callRejected: t.callRejected }
              );
            case "SET_USER_REMOTE_STREAM":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { remoteStream: t.remoteStream }
              );
            case "ENABLE_CAMERA":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { localCamera: t.enabled }
              );
            case "ENABLE_MICROPHONE":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { localMicrophone: t.enabled }
              );
            case "SET_SCREEN_SHARE_ACTIVE":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { screenSharing: t.active }
              );
            case "RESET_CALL_DATA":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                {
                  remoteStream: null,
                  screenSharing: !1,
                  callerUsername: "",
                  localMicrophone: !0,
                  localCamera: !0,
                  directCallModal: !1,
                  recieverUsername: "",
                  directMessages: [],
                  connectedUserId: "",
                }
              );
            case "RESET_GROUP_DATA":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                {
                  isTeamMeetingPresent: !1,
                  teamMeetingStreams: [],
                  callState: Ye,
                  localMicrophone: !0,
                  localCamera: !0,
                  groupMessages: [],
                  imageData: null,
                }
              );
            case "SET_START_GROUP_CALL":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { isTeamMeetingPresent: t.active }
              );
            case "SET_GROUP_STEAMS":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { teamMeetingStreams: t.groupStreams }
              );
            case "SET_ACTIVE_TEAM":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { activeTeams: t.activeTeams }
              );
            case "SET_GROUP_MESSAGE":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { groupMessages: t.groupMessages }
              );
            case "SET_DIRECT_MESSAGE":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { directMessages: t.directMessages }
              );
            case "SET_USER_SOCKET_ID":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { connectedUserId: t.socketId }
              );
            case "SET_IMAGE_DATA":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { imageData: t.imageData }
              );
            case "SET_TEAM_MEETING_DATA":
              return Object(s.a)(
                Object(s.a)({}, e),
                {},
                { teamMeetingData: t.teamMeetingData }
              );
            default:
              return e;
          }
        },
        ct = Object(He.combineReducers)({ User: _e, Video: it }),
        st = a(186),
        lt = Object(He.createStore)(ct, Object(st.composeWithDevTools)()),
        dt = [],
        mt = function () {
          //console.log("connecting with peer");
          var e = Ut();
          (ye = new window.Peer(void 0, {
            config: {
              iceServers: [].concat(Object(ze.a)(e), [
                { url: "stun:stun.lund1.de:3478" },
                { url: "stun:stun.l.google.com:19302" },
                { url: "stun:stun.12connect.com:3478" },
                { url: "stun:stun.12voip.com:3478" },
              ]),
              iceTransportPolicy: "relay",
            },
          })).on("open", function (e) {
            //console.log("succesfully connected with peer server"), (we = e);
          }),
            ye.on("call", function (e) {
              var t = lt.getState().Video.localStream;
              e.answer(t),
                e.on("stream", function (t) {
                  var a = lt
                    .getState()
                    .Video.teamMeetingStreams.find(function (e) {
                      return e.id === t.id;
                    });
                  (dt = [].concat(Object(ze.a)(dt), [e.peerConnection])),
                    null == a && pt(t);
                });
            });
        },
        pt = function (e) {
          var t = lt.getState().Video.teamMeetingStreams,
            a = [].concat(Object(ze.a)(t), [e]);
          lt.dispatch(et(a));
        },
        ut = "ANOTHER_CALL",
        gt = "ACCEPTED",
        bt = "REJECTED",
        ht = "NOT_AVAILABLE",
        jt = function (e) {
          (Ie = Ve()("/")).on("connection", function () {
            ft(e);
          }),
            Ie.on("pre-offer", function (e) {
              yt(e);
            }),
            Ie.on("pre-offer-answer", function (e) {
              wt(e);
            }),
            Ie.on("web-rtc-offer", function (e) {
              kt(e);
            }),
            Ie.on("web-rtc-answer", function (e) {
              At(e);
            }),
            Ie.on("web-rtc-candidate", function (e) {
              Rt(e);
            }),
            Ie.on("user-ended-call", function () {
              It();
            }),
            Ie.on("team-meeting-request", function (e) {
              !(function (e) {
                var t = lt.getState().Video.localStream,
                  a = ye.call(e.peerId, t);
                a.on("stream", function (e) {
                  var t = lt
                    .getState()
                    .Video.teamMeetingStreams.find(function (t) {
                      return t.id === e.id;
                    });
                  (dt = [].concat(Object(ze.a)(dt), [a.peerConnection])),
                    t || pt(e);
                });
              })(e);
            }),
            Ie.on("team-meeting-user-left", function (e) {
              !(function (e) {
                var t = lt.getState().Video.teamMeetingStreams;
                (t = t.filter(function (t) {
                  return t.id !== e.streamId;
                })),
                  lt.dispatch(et(t));
              })(e);
            }),
            Ie.on("team-meeting-started", function (e) {
              Et(e);
            }),
            Ie.on("team-meeting-finished", function (e) {
              Tt(e);
            }),
            Ie.on("new-notification", function (e) {
              Dt(e);
            }),
            Ie.on("group-message-recieved", function (e) {
              Mt(e);
            }),
            Ie.on("direct-message-recieved", function (e) {
              Ft(e);
            });
        },
        xt = function () {
          var e = Ut(),
            t = {
              iceServers: [].concat(Object(ze.a)(e), [
                { urls: "stun:stun.l.google.com:13902" },
                { urls: "stun:stun.12connect.com:3478" },
                { urls: "stun:stun.12voip.com:3478" },
                { urls: "stun:stun.lund1.de:3478" },
                { urls: "stun:stun2.l.google.com:13902" },
                { urls: "stun:stun3.l.google.com:13902" },
                { urls: "stun:stun4.l.google.com:13902" },
              ]),
              iceTransportPolicy: "relay",
            };
          ke = new RTCPeerConnection(t);
          var a,
            n = lt.getState().Video.localStream,
            r = Object(Fe.a)(n.getTracks());
          try {
            for (r.s(); !(a = r.n()).done; ) {
              var o = a.value;
              ke.addTrack(o, n);
            }
          } catch (i) {
            r.e(i);
          } finally {
            r.f();
          }
          (ke.ontrack = function (e) {
            var t = Object(w.a)(e.streams, 1)[0];
            lt.dispatch({ type: "SET_USER_REMOTE_STREAM", remoteStream: t });
          }),
            (ke.onicecandidate = function (e) {
              if (e.candidate) {
                var t = { candidate: e.candidate, recieverSocketId: Ce };
                Ie.emit("web-rtc-candidate", t);
              }
            }),
            (ke.onconnectionstatechange = function (e) {
              "connected" === ke.connectionState &&
                //console.log("succesfully connected with other peer"),
                //console.log(ke.connectionState);
            });
        },
        ft = function (e) {
          lt.dispatch(
            (function (e) {
              var t = {
                name: e.name,
                image: e.image,
                email: e.email,
                id: e._id,
                role: e.role,
              };
              return { type: Pe, user: t };
            })(e)
          ),
            Ie.emit("new-user-connected", {
              username: e.name,
              email: e.email,
              image: e.image,
              socketId: Ie.id,
            });
        },
        Ot = function () {
          navigator.mediaDevices
            .getUserMedia({ video: { width: 620, height: 520 }, audio: !0 })
            .then(function (e) {
              lt.dispatch(Ze(e)), xt();
            })
            .catch(function (e) {
              //console.log(e);
            });
        },
        vt = function () {
          var e = lt.getState().Video.localStream;
          e &&
            (e.getTracks().forEach(function (e) {
              e.stop();
            }),
            lt.dispatch(Ze(e)));
        },
        yt = function (e) {
          if (!0 === (lt.getState().Video.callState !== Je))
            (Ce = e.callerSocketId),
              lt.dispatch(nt(Ce)),
              lt.dispatch({
                type: "SET_CALLER_DETAILS",
                callerUsername: e.callerUsername,
              }),
              lt.dispatch(Xe(qe));
          else {
            var t = { callerSocketId: e.callerSocketId, answer: ut };
            Ie.emit("pre-offer-answer", t);
          }
        },
        wt = function (e) {
          var t = lt.getState().Video.recieverUsername,
            a = "";
          switch (e.answer) {
            case ut:
              a = "".concat(t, " is on another call");
              break;
            case bt:
              a = "".concat(t, " rejected the call");
              break;
            case ht:
              a = "".concat(t, " is not available to take the call");
              break;
            default:
              (Ce = e.reciverSocketId), lt.dispatch(nt(Ce)), St();
          }
          if (a.length > 0) {
            var n = { rejected: !0, reason: a };
            lt.dispatch($e(n)), Ct();
          }
          lt.dispatch(Ke(!1));
        },
        St = (function () {
          var e = Object(De.a)(
            Me.a.mark(function e() {
              var t, a;
              return Me.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), ke.createOffer();
                    case 2:
                      return (
                        (t = e.sent), (e.next = 5), ke.setLocalDescription(t)
                      );
                    case 5:
                      (a = { reciverSocketId: Ce, offer: t }),
                        Ie.emit("web-rtc-offer", a);
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Ct = function () {
          (Ce = null), lt.dispatch(Xe(Ye));
        },
        kt = (function () {
          var e = Object(De.a)(
            Me.a.mark(function e(t) {
              var a, n;
              return Me.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), ke.setRemoteDescription(t.offer);
                    case 2:
                      return (e.next = 4), ke.createAnswer();
                    case 4:
                      return (
                        (a = e.sent), (e.next = 7), ke.setLocalDescription(a)
                      );
                    case 7:
                      (n = { callerSocketId: Ce, answer: a }),
                        Ie.emit("web-rtc-answer", n);
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        At = (function () {
          var e = Object(De.a)(
            Me.a.mark(function e(t) {
              return Me.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), ke.setRemoteDescription(t.answer);
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Rt = (function () {
          var e = Object(De.a)(
            Me.a.mark(function e(t) {
              return Me.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          //console.log("adding ice candidates"),
                          (e.next = 4),
                          ke.addIceCandidate(t.candidate)
                        );
                      case 4:
                        e.next = 9;
                        break;
                      case 6:
                        (e.prev = 6), (e.t0 = e.catch(0)), console.error(e.t0);
                      case 9:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 6]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        It = function () {
          ke.close(), (ke = null), xt(), Ct();
          var e = lt.getState().Video.localStream;
          (e.getVideoTracks()[0].enabled = !0),
            (e.getAudioTracks()[0].enabled = !0),
            lt.getState().Video.screenSharing &&
              Ae.getTracks().forEach(function (e) {
                e.stop();
              }),
            lt.dispatch({ type: "RESET_CALL_DATA" });
        },
        Tt = function (e) {
          var t = lt.getState().Video.activeTeams;
          (t = t.filter(function (t) {
            return t.roomId !== e.roomId;
          })),
            lt.dispatch(tt(t));
        },
        Et = function (e) {
          var t = lt.getState().Video.activeTeams;
          t.some(function (t) {
            return t.roomId === e.roomId && t.teamId === e.teamId;
          }) || (t = [].concat(Object(ze.a)(t), [e])),
            lt.dispatch(tt(t));
        },
        Lt = function (e) {
          Ie.emit("create-meeting", e);
        },
        Nt = function (e) {
          Ie.emit("join-meeting", e);
        },
        Bt = function (e) {
          Ie.emit("leave-meeting", e);
        },
        Mt = function (e) {
          var t = lt.getState().Video.groupMessages;
          (t = [].concat(Object(ze.a)(t), [e])),
            lt.dispatch(
              (function (e) {
                return { type: "SET_GROUP_MESSAGE", groupMessages: e };
              })(t)
            );
        },
        Dt = function (e) {
          lt.dispatch(rt(e)), lt.dispatch(Qe(!1));
        },
        Ft = function (e) {
          var t = lt.getState().Video.directMessages;
          (t = [].concat(Object(ze.a)(t), [e])),
            lt.dispatch(
              (function (e) {
                return { type: "SET_DIRECT_MESSAGE", directMessages: e };
              })(t)
            );
        },
        zt = [],
        Ut = function () {
          return zt;
        },
        Vt = function (e) {
          zt = e;
        },
        Ht = function (e) {
          return {
            gridLayout: {
              position: "absolute",
              width: "250px",
              height: "200px",
              top: "calc(50% - 150px)",
              left: "calc(50% - 150px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
            },
            root: {
              backgroundColor: "#405361",
              color: "white",
              textAlign: "center",
            },
            dialogHeader: {
              display: "flex",
              padding: "1.25rem",
              borderTopLeftRadius: ".4375rem",
              borderTopRightRadius: ".4375rem",
              alignItems: "center",
              justifyContent: "space-between",
            },
            dialogTitle: { fontSize: "1.0625rem", marginBottom: "0" },
            dialogHeading: {
              fontSize: ".95rem",
              fontWeight: 600,
              letterSpacing: ".025em",
              textTransform: "uppercase",
              marginTop: "1.5rem!important",
            },
            dialogNotification: {
              color: e.palette.white.main,
              background:
                "linear-gradient(87deg," +
                e.palette.error.main +
                " 0," +
                e.palette.error.dialogNotification +
                " 100%)!important",
              "& $dialogHeading, & $dialogTitle": {
                color: e.palette.white.main,
              },
            },
            buttonOutlineSuccess: {
              color: e.palette.success.main,
              borderColor: e.palette.success.main,
              "&:hover": {
                color: "white",
                backgroundColor: e.palette.success.main,
              },
            },
            buttonOutlineError: {
              color: e.palette.error.main,
              borderColor: e.palette.error.main,
              "&:hover": {
                color: "white",
                backgroundColor: e.palette.error.main,
              },
            },
          };
        },
        Pt = a.p + "static/media/hangouts_video_call.d16a4382.mp3",
        Wt = Object(j.a)(Ht);
      function Qt(e) {
        var t = e.show,
          a = e.message,
          o = e.localStream,
          i = e.accept,
          c = e.reject,
          s = r.a.useState(t),
          l = Object(w.a)(s, 2),
          d = l[0],
          m = l[1],
          p = (Object(u.h)(), Object(u.g)(), Wt());
        Object(n.useEffect)(function () {
          null == o && Ot(), g();
        }, []);
        var g = function () {
            new te.Howl({ src: Pt, html5: !0, format: ["mp3", "aac"] }).play(),
              //console.log("sound");
          },
          b = function () {
            m(!1);
          };
        return Object(V.jsx)(V.Fragment, {
          children: Object(V.jsx)(de.a, {
            container: !0,
            spacing: 0,
            className: p.gridLayout,
            children: Object(V.jsxs)(Te.a, {
              open: d,
              onClose: b,
              "aria-labelledby": "alert-dialog-title",
              "aria-describedby": "alert-dialog-description",
              classes: { paper: p.root },
              children: [
                Object(V.jsx)(Le.a, {
                  children: Object(V.jsx)(Ne.a, {
                    style: { color: "white", fontSize: "16px" },
                    children: a,
                  }),
                }),
                Object(V.jsxs)(Ee.a, {
                  children: [
                    Object(V.jsx)(I.a, {
                      onClick: function () {
                        i(), b();
                      },
                      className: p.buttonOutlineSuccess,
                      children: "Continue",
                    }),
                    Object(V.jsx)(I.a, {
                      onClick: function () {
                        c(), b();
                      },
                      className: p.buttonOutlineError,
                      autoFocus: !0,
                      children: "Cancel",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var Gt = a(26),
        _t = function (e) {
          var t;
          return {
            header: Object(z.a)(
              {
                position: "relative",
                paddingBottom: "1rem",
                paddingTop: "4rem",
              },
              e.breakpoints.up("md"),
              { paddingTop: "2rem" }
            ),
            containerRoot:
              ((t = {}),
              Object(z.a)(t, e.breakpoints.up("md"), {
                paddingLeft: "39px",
                paddingRight: "39px",
              }),
              Object(z.a)(t, "heading", { fontSize: "40px", color: "red" }),
              t),
          };
        },
        Yt = Object(j.a)(_t),
        qt = function () {
          var e = Yt();
          Object(Gt.a)();
          return Object(V.jsx)(V.Fragment, {
            children: Object(V.jsx)("div", {
              className: e.header,
              children: Object(V.jsx)(O.a, {
                maxWidth: !1,
                component: x.a,
                classes: { root: e.containerRoot },
                children: Object(V.jsx)("div", {}),
              }),
            }),
          });
        },
        Jt = function (e) {
          return {
            gridRoot: {
              paddingTop: "0px",
              margin: "10px auto 0px auto",
              width: "100%",
            },
            gridRootHeader: { marginLeft: "20px", marginTop: "20px" },
            cardRootBgGradient: {
              background:
                "linear-gradient(87deg," +
                e.palette.dark.main +
                ",#1a174d)!important",
            },
            cardRoot: {
              boxShadow: G.boxShadow + "!important",
              border: "0!important",
            },
            cardHeaderRoot: {
              backgroundColor: "initial!important",
              marginTop: "0px",
            },
            textUppercase: { textTransform: "uppercase" },
            containerRoot: Object(z.a)({}, e.breakpoints.up("md"), {
              paddingLeft: "39px",
              paddingRight: "39px",
            }),
            newContainerRoot: Object(z.a)({}, e.breakpoints.up("md"), {
              paddingLeft: "10px",
              paddingRight: "10px",
            }),
            buttonRootUnselected: {
              background: e.palette.white.main + "!important",
              color: e.palette.primary.main + "!important",
            },
            gridItemRoot: Object(z.a)({}, e.breakpoints.up("xl"), {
              marginBottom: "0!important",
            }),
            tableRoot: { marginBottom: "0!important" },
            tableCellRoot: {
              verticalAlign: "middle",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              borderTop: "0",
            },
            tableCellRootHead: {
              backgroundColor: e.palette.gray[100],
              color: e.palette.gray[600],
            },
            tableCellRootBodyHead: {
              textTransform: "unset!important",
              fontSize: ".8125rem",
            },
            borderBottomUnset: { borderBottom: "0!important" },
            linearProgressRoot: {
              height: "3px!important",
              width: "120px!important",
              margin: "0!important",
            },
            bgGradientError: {
              background:
                "linear-gradient(87deg," +
                e.palette.error.main +
                ",#f56036)!important",
            },
            bgGradientSuccess: {
              background:
                "linear-gradient(87deg," +
                e.palette.success.main +
                ",#2dcecc)!important",
            },
            bgGradientPrimary: {
              background:
                "linear-gradient(87deg," +
                e.palette.primary.main +
                ",#825ee4)!important",
            },
            bgGradientInfo: {
              background:
                "linear-gradient(87deg," +
                e.palette.info.main +
                ",#1171ef)!important",
            },
            bgGradientWarning: {
              background:
                "linear-gradient(87deg," +
                e.palette.warning.main +
                ",#fbb140)!important",
            },
            square: {
              color: e.palette.secondary.main,
              backgroundColor: "red",
              margin: "20px",
              height: "60px",
              width: "60px",
              textTransform: "uppercase",
              fontSize: "20px",
            },
            image: {
              height: "150px",
              width: "150px",
              postion: "absolute",
              float: "center",
              textAlign: "center",
              marginLeft: "40%",
            },
          };
        },
        Zt = a(384),
        Xt = Object(j.a)(Jt),
        Kt = function (e) {
          var t = e.team,
            a = e.clicked,
            n = Xt(),
            r = Object(Gt.a)();
          return Object(V.jsx)(
            de.a,
            {
              item: !0,
              style: { width: "340px", cursor: "pointer" },
              component: x.a,
              onClick: a,
              children: Object(V.jsxs)(q.a, {
                classes: { root: n.cardRoot },
                style: {
                  height: "100%",
                  boxShadow: "0px 0px 1rem rgba(136,152,170,0.35)",
                  border: "0!important",
                },
                children: [
                  Object(V.jsx)(Z.a, {
                    style: { minHeight: "140px" },
                    subheader: Object(V.jsxs)(x.a, {
                      children: [
                        Object(V.jsx)(x.a, {
                          component: y.a,
                          variant: "h2",
                          className: n.textUppercase,
                          marginBottom: "1rem!important",
                          children: Object(V.jsx)(x.a, {
                            component: "span",
                            style: { textAlign: "center" },
                            children: t.Name,
                          }),
                        }),
                        Object(V.jsx)(x.a, {
                          component: y.a,
                          variant: "h5",
                          letterSpacing: ".0625rem",
                          marginBottom: ".25rem!important",
                          children: Object(V.jsx)(x.a, {
                            component: "span",
                            color: r.palette.gray[600],
                            children: t.Description,
                          }),
                        }),
                      ],
                    }),
                    classes: { root: n.cardHeaderRoot },
                  }),
                  Object(V.jsx)(J.a, {
                    classes: { root: n.cardHeaderRoot },
                    children: Object(V.jsxs)("div", {
                      style: { display: "flex", alignItems: "center" },
                      children: [
                        Object(V.jsx)(R.a, {
                          style: {
                            width: "40px",
                            height: "40px",
                            marginRight: "10px",
                          },
                          src: t.Owner.image,
                        }),
                        Object(V.jsx)(y.a, { children: t.Owner.name }),
                      ],
                    }),
                  }),
                ],
              }),
            },
            t._id
          );
        },
        $t = function (e) {
          var t;
          return {
            cardRoot: {
              boxShadow: G.boxShadow + "!important",
              border: "0!important",
            },
            cardRootSecondary: { backgroundColor: e.palette.secondary.main },
            cardHeaderRoot: {
              backgroundColor: e.palette.white.main + "!important",
            },
            containerRoot:
              ((t = {}),
              Object(z.a)(t, e.breakpoints.up("md"), {
                paddingLeft: "9px",
                paddingRight: "9px",
              }),
              Object(z.a)(t, "width", "100%"),
              t),
            avatar: { marginRight: e.spacing(2) },
            gridItemRoot: Object(z.a)({}, e.breakpoints.up("xl"), {
              marginBottom: "0!important",
            }),
            typographyRootH6: { textTransform: "uppercase" },
            plLg4: Object(z.a)({}, e.breakpoints.up("md"), {
              paddingLeft: "0.5rem",
            }),
            ptMd4: Object(z.a)({}, e.breakpoints.up("sm"), {
              paddingTop: "1.5rem!important",
            }),
            mtMd5: Object(z.a)({}, e.breakpoints.up("sm"), {
              paddingTop: "3rem!important",
            }),
            cardHeaderRootProfile: Object(z.a)({}, e.breakpoints.up("sm"), {
              paddingBottom: "1.5rem!important",
              paddingTop: "1.5rem!important",
            }),
            buttonRootInfo: {
              color: e.palette.white.main,
              backgroundColor: e.palette.info.main,
              "&:hover": { backgroundColor: e.palette.info.dark },
            },
            buttonRootDark: {
              color: e.palette.white.main,
              backgroundColor: e.palette.dark.main,
              "&:hover": { backgroundColor: e.palette.dark.dark },
              "&:disabled": { border: "0" },
            },
            profileImage: {
              verticalAlign: "middle",
              borderStyle: "none",
              transform: "translate(-50%,-30%)",
              transition: "all .15s ease",
            },
            cardProfileLink: {
              color: e.palette.primary.main,
              backgroundColor: "initial",
              textDecoration: "none",
              fontSize: "1rem",
              "&:hover": { color: e.palette.primary.dark },
            },
            order1: Object(z.a)({}, e.breakpoints.down("lg"), {
              order: "1!important",
            }),
            order2: Object(z.a)({}, e.breakpoints.down("lg"), {
              order: "2!important",
            }),
            marginBottomXl0: Object(z.a)({}, e.breakpoints.up("lg"), {
              marginBottom: "0!important",
            }),
            checkBoxLabel: { fontSize: "0.8rem" },
            searchInput: {
              color: "black",
              backgroundColor: "#ffffff",
              boxShadow: "none",
              padding: "10px",
              "&::placeholder": {
                color: e.palette.dark[200],
                fontSize: "1rem",
              },
              borderRadius: "20px 20px",
            },
            pgl4: { paddingTop: "0.5rem", paddingBottom: "0.5rem" },
            paperRoot: {
              flexGrow: 1,
              overflow: "hidden",
              padding: e.spacing(0, 3),
            },
            paper: {
              width: "100%",
              margin: "".concat(e.spacing(1), "px auto"),
              padding: e.spacing(2),
            },
            buttonContainedInfo: {
              backgroundColor: e.palette.white,
              borderColor: e.palette.info.badge,
              color: e.palette.dark.heading,
              "&:hover": {
                backgroundColor: "#ebedfa",
                borderColor: e.palette.info.hovered,
              },
              display: "flex",
              margin: e.spacing(2),
            },
            icon: { width: "20px", height: "20px" },
          };
        },
        ea = a(212),
        ta = a(379),
        aa = a(380),
        na = a(381),
        ra = a(382),
        oa = a(383),
        ia = a(187),
        ca = a(111),
        sa = a.n(ca),
        la = a(7),
        da = a(188),
        ma = a.n(da),
        pa = Object(j.a)($t),
        ua = Object(la.a)(function (e) {
          return {
            root: { "label + &": { marginTop: e.spacing(3) } },
            input: {
              borderRadius: 4,
              position: "relative",
              backgroundColor: e.palette.background.paper,
              border: "1px solid #ced4da",
              fontSize: 16,
              padding: "10px 26px 10px 12px",
              transition: e.transitions.create(["border-color", "box-shadow"]),
              fontFamily: [
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
              ].join(","),
              "&:focus": {
                borderRadius: 4,
                borderColor: "#80bdff",
                boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
              },
            },
          };
        })(ea.a),
        ga = function (e) {
          var t = e.user,
            a = e.createTeam,
            r = e.redirectToCall,
            o = pa(),
            i = (Object(Gt.a)(), Object(n.useState)(!1)),
            c = Object(w.a)(i, 2),
            l = c[0],
            d = c[1],
            m = function () {
              d(!1);
            },
            p = "Only team owners can add members to the team",
            u = [p, "Anyone in the team can add members to the team"],
            g = Object(n.useState)({ Name: "", Description: "", privacy: p }),
            b = Object(w.a)(g, 2),
            h = b[0],
            j = b[1],
            f = function (e) {
              j(
                Object(s.a)(
                  Object(s.a)({}, h),
                  {},
                  Object(z.a)({}, e.target.name, e.target.value)
                )
              );
            },
            O = Object(V.jsxs)(Te.a, {
              open: l,
              onClose: m,
              "aria-labelledby": "form-dialog-title",
              children: [
                Object(V.jsxs)(ta.a, {
                  children: [
                    " ",
                    Object(V.jsxs)(de.a, {
                      container: !0,
                      component: x.a,
                      alignItems: "center",
                      justifyContent: "space-between",
                      classes: { root: o.cardHeaderRoot },
                      children: [
                        Object(V.jsxs)(de.a, {
                          item: !0,
                          xs: "auto",
                          children: [
                            Object(V.jsx)(x.a, {
                              component: y.a,
                              variant: "h3",
                              marginBottom: "0!important",
                              children: "Create your team",
                            }),
                            Object(V.jsx)("br", {}),
                          ],
                        }),
                        Object(V.jsxs)(de.a, {
                          item: !0,
                          xs: "auto",
                          children: [
                            Object(V.jsx)(x.a, {
                              component: y.a,
                              variant: "h5",
                              marginBottom: "0!important",
                              style: { color: "#707070" },
                              children:
                                "Collaborate closely with a group of people inside your organization based on project, initiative, or common interest",
                            }),
                            Object(V.jsx)("br", {}),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(V.jsxs)(Le.a, {
                  style: { paddingTop: "5px" },
                  children: [
                    Object(V.jsxs)("div", {
                      children: [
                        Object(V.jsx)(de.a, {
                          container: !0,
                          children: Object(V.jsx)(de.a, {
                            item: !0,
                            xs: 12,
                            lg: 6,
                            children: Object(V.jsxs)(aa.a, {
                              children: [
                                Object(V.jsx)(na.a, { children: "Team name" }),
                                Object(V.jsx)(ra.a, {
                                  variant: "filled",
                                  width: "100%",
                                  style: { marginBottom: "1rem!important" },
                                  required: !0,
                                  children: Object(V.jsx)(oa.a, {
                                    style: {
                                      paddingLeft: "0.75rem",
                                      paddingRight: "0.75rem",
                                    },
                                    type: "text",
                                    required: !0,
                                    label: "Team Name",
                                    name: "Name",
                                    onChange: f,
                                    value: h.Name,
                                    classes: { input: o.searchInput },
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        Object(V.jsx)(de.a, {
                          container: !0,
                          children: Object(V.jsx)(de.a, {
                            item: !0,
                            xs: 12,
                            lg: 12,
                            children: Object(V.jsxs)(aa.a, {
                              children: [
                                Object(V.jsx)(na.a, {
                                  children: "Team Description",
                                }),
                                Object(V.jsx)(ra.a, {
                                  variant: "filled",
                                  width: "100%",
                                  styles: { marginBottom: "1rem!important" },
                                  children: Object(V.jsx)(oa.a, {
                                    style: {
                                      paddingLeft: "0.75rem",
                                      paddingRight: "0.75rem",
                                    },
                                    classes: { input: o.searchInput },
                                    type: "text",
                                    value: h.Description,
                                    label: "Description",
                                    name: "Description",
                                    onChange: f,
                                    placeholder:
                                      "Let people know what this is about",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    Object(V.jsx)(x.a, {
                      component: T.a,
                      marginBottom: "0.8rem!important",
                      marginTop: "0.8rem!important",
                    }),
                    Object(V.jsx)("div", {
                      children: Object(V.jsx)(de.a, {
                        container: !0,
                        children: Object(V.jsx)(de.a, {
                          item: !0,
                          xs: 12,
                          lg: 12,
                          children: Object(V.jsxs)(aa.a, {
                            children: [
                              Object(V.jsx)(na.a, { children: "Privacy" }),
                              Object(V.jsx)(ra.a, {
                                variant: "filled",
                                width: "100%",
                                styles: { marginBottom: "1rem!important" },
                                children: Object(V.jsx)(ia.a, {
                                  id: "demo-customized-select-native",
                                  value: h.privacy,
                                  onChange: f,
                                  input: Object(V.jsx)(ua, {}),
                                  name: "privacy",
                                  children: u.map(function (e, t) {
                                    return Object(V.jsx)("option", {
                                      value: e,
                                      id: t,
                                      children: e,
                                    });
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                Object(V.jsxs)(Ee.a, {
                  children: [
                    Object(V.jsx)(I.a, {
                      onClick: m,
                      color: "primary",
                      children: "Cancel",
                    }),
                    Object(V.jsx)(I.a, {
                      onClick: function () {
                        var e = {
                          Name: h.Name,
                          Description: h.Description,
                          privacy: h.privacy === p,
                          Owner: t,
                        };
                        a(e), m();
                      },
                      color: "primary",
                      disabled: "" === h.Name || "" === h.Description,
                      children: "Create",
                    }),
                  ],
                }),
              ],
            });
          return Object(V.jsxs)(V.Fragment, {
            children: [
              Object(V.jsx)(I.a, {
                className: o.buttonContainedInfo,
                startIcon: Object(V.jsx)(ma.a, { className: o.icon }),
                onClick: r,
                children: Object(V.jsx)(y.a, {
                  style: { fontSize: "14px" },
                  children: "Call others",
                }),
              }),
              Object(V.jsx)(I.a, {
                className: o.buttonContainedInfo,
                onClick: function () {
                  d(!0);
                },
                startIcon: Object(V.jsx)(sa.a, { className: o.icon }),
                children: Object(V.jsx)(y.a, {
                  style: { fontSize: "14px" },
                  children: "Create a new team",
                }),
              }),
              O,
            ],
          });
        },
        ba = Object(j.a)(Jt);
      var ha = Object(h.b)(function (e) {
          var t = e.Video;
          return e.User, Object(s.a)({}, t);
        }, null)(function (e) {
          var t = e.user,
            a = e.history,
            r = Object(b.a)(e, ["user", "history"]),
            o = ba(),
            i = Object(n.useState)(!0),
            c = Object(w.a)(i, 2),
            s = c[0],
            l = c[1],
            d = Object(n.useState)([]),
            m = Object(w.a)(d, 2),
            p = m[0],
            u = m[1],
            g = Object(n.useState)([]),
            h = Object(w.a)(g, 2),
            j = h[0],
            f = h[1],
            O = (r.callState, r.callerUsername, r.localStream),
            v = function (e) {
              a.push("/team/".concat(e));
            };
          return (
            Object(n.useEffect)(function () {
              C.a
                .get("/api/v1/team/memberTeams")
                .then(function (e) {
                  //console.log(e.data), u(e.data.data), l(!1);
                })
                .catch(function (e) {
                  //console.log(e);
                }),
                C.a
                  .get("/api/v1/team/ownerTeams")
                  .then(function (e) {
                    //console.log(e.data), f(e.data.data), l(!1);
                  })
                  .catch(function (e) {
                    //console.log(e);
                  }),
                O && (//console.log("hello"), vt());
            }, []),
            Object(V.jsxs)("div", {
              children: [
                Object(V.jsx)(qt, {}),
                Object(V.jsx)(x.a, {
                  style: { display: "flex", justifyContent: "flex-end" },
                  children: Object(V.jsx)(ga, {
                    user: t,
                    createTeam: function (e) {
                      C.a
                        .post("/api/v1/team/createTeam", e, {
                          withCredentials: !0,
                        })
                        .then(function (e) {
                          var t = e.data.data;
                          //console.log(t),
                            f(function (e) {
                              return [].concat(Object(ze.a)(e), [t]);
                            });
                        })
                        .catch(function (e) {
                          return //console.log(e);
                        });
                    },
                    redirectToCall: function () {
                      a.push("/call");
                    },
                  }),
                }),
                s
                  ? Object(V.jsx)(Zt.a, { style: { margin: "auto" } })
                  : Object(V.jsxs)(V.Fragment, {
                      children: [
                        p.length > 0
                          ? Object(V.jsxs)(de.a, {
                              className: o.gridRootHeader,
                              children: [
                                Object(V.jsx)(x.a, {
                                  component: "span",
                                  children: Object(V.jsx)(y.a, {
                                    children: "Teams as a member",
                                  }),
                                }),
                                Object(V.jsx)(de.a, {
                                  container: !0,
                                  spacing: 3,
                                  className: o.gridRoot,
                                  children: p.map(function (e, t) {
                                    return Object(V.jsx)(
                                      Kt,
                                      {
                                        team: e,
                                        clicked: function () {
                                          return v(e._id);
                                        },
                                      },
                                      t
                                    );
                                  }),
                                }),
                              ],
                            })
                          : null,
                        j.length > 0
                          ? Object(V.jsxs)(de.a, {
                              className: o.gridRootHeader,
                              children: [
                                Object(V.jsx)(x.a, {
                                  component: "span",
                                  style: { paddingLeft: "30px" },
                                  children: Object(V.jsx)(y.a, {
                                    children: "Teams as a owner",
                                  }),
                                }),
                                Object(V.jsx)(de.a, {
                                  container: !0,
                                  spacing: 3,
                                  className: o.gridRoot,
                                  children: j.map(function (e, t) {
                                    return Object(V.jsx)(
                                      Kt,
                                      {
                                        team: e,
                                        clicked: function () {
                                          return v(e._id);
                                        },
                                      },
                                      t
                                    );
                                  }),
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
              ],
            })
          );
        }),
        ja = (a(291), a(313)),
        xa = (a(124), Object(j.a)(Jt), a(385)),
        fa = a(114),
        Oa = a(386),
        va = a(387),
        ya = a(388),
        wa = a(389),
        Sa = a(390),
        Ca = a(127),
        ka = a.n(Ca),
        Aa = function (e) {
          var t = ka()(e).format("ll");
          return (t = t.split(",")[0]) + ", " + ka()(e).format("LT");
        },
        Ra = Object(j.a)(Jt),
        Ia = function (e) {
          e.user;
          var t = e.teamId,
            a = Ra(),
            r = (Object(u.g)(), Object(n.useState)(!0)),
            o = Object(w.a)(r, 2),
            i = o[0],
            c = o[1],
            s = Object(n.useState)([]),
            l = Object(w.a)(s, 2),
            d = l[0],
            m = l[1],
            p = Object(n.useState)(""),
            g = Object(w.a)(p, 2),
            b = g[0],
            h = g[1],
            j = Object(n.useState)(!1),
            f = Object(w.a)(j, 2),
            v = (f[0], f[1], Object(n.useState)("")),
            S = Object(w.a)(v, 2);
          S[0], S[1];
          Object(n.useEffect)(function () {
            //console.log(t),
              //console.log(t),
              C.a
                .get("/api/v1/team/files/".concat(t))
                .then(function (e) {
                  //console.log(e.data);
                  for (
                    var t = e.data.files.files, a = 0, n = Object.keys(t);
                    a < n.length;
                    a++
                  )
                    t[n[a]].fileUrl = "";
                  m(t), c(!1);
                })
                .catch(function (e) {
                  //console.log(e);
                });
          }, []);
          var k = Object(V.jsxs)(x.a, {
              component: "span",
              m: 1,
              children: [
                Object(V.jsx)("br", {}),
                d && d.length > 0
                  ? Object(V.jsxs)(V.Fragment, {
                      children: [
                        Object(V.jsx)(y.a, {
                          style: { textAlign: "center", fontWeight: "bold" },
                          children: "Submitted Files",
                        }),
                        Object(V.jsx)(xa.a, {
                          component: fa.a,
                          children: Object(V.jsxs)(Oa.a, {
                            className: a.table,
                            "aria-label": "simple table",
                            children: [
                              Object(V.jsx)(va.a, {
                                children: Object(V.jsxs)(ya.a, {
                                  children: [
                                    Object(V.jsx)(wa.a, { children: "Name" }),
                                    Object(V.jsx)(wa.a, {
                                      children: "Modified ",
                                    }),
                                    Object(V.jsx)(wa.a, {
                                      children: "Modified By",
                                    }),
                                  ],
                                }),
                              }),
                              Object(V.jsx)(Sa.a, {
                                children: d.map(function (e, t) {
                                  return Object(V.jsxs)(ya.a, {
                                    children: [
                                      Object(V.jsx)(wa.a, {
                                        style: { cursor: "pointer" },
                                        onClick: function () {
                                          var a;
                                          "" === e.fileUrl
                                            ? ((a = t),
                                              C.a
                                                .get(
                                                  "/api/v1/team/file/open/".concat(
                                                    d[a].fileName
                                                  ),
                                                  {
                                                    withCredentials: !0,
                                                    responseType: "arraybuffer",
                                                  }
                                                )
                                                .then(function (e) {
                                                  var t = new Blob([e.data], {
                                                      type: e.headers[
                                                        "content-type"
                                                      ],
                                                    }),
                                                    n = URL.createObjectURL(t);
                                                  (d[a].fileUrl = n),
                                                    m(d),
                                                    window.open(n);
                                                }))
                                            : window.open(e.fileUrl);
                                        },
                                        children: e.originalName,
                                      }),
                                      Object(V.jsx)(wa.a, {
                                        children: Aa(e.createdAt),
                                      }),
                                      Object(V.jsx)(wa.a, {
                                        children: Object(V.jsxs)(y.a, {
                                          style: { padding: "0px" },
                                          children: [
                                            "\xa0",
                                            e.submittedBy.name,
                                          ],
                                        }),
                                      }),
                                    ],
                                  });
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    })
                  : Object(V.jsxs)("div", {
                      children: [
                        Object(V.jsx)("img", {
                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAADwCAYAAADIOTsjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMTowNzowMSAwMDo1Mjo0MF9DVI0AABIdSURBVHhe7d1pj9xEF4ZhD5CwTDaSDCGLsi9CIASI//8H4AMS4gMg1iCRZQjZJpNtkjd3y8Xb6fRiV3upsu9LsnocQpLpsR+fOlV2b+zs7LwsJCnCW+WrJNVmgEiKZoBIimaASIpmgEiKZoBIimaASIrmOhA1and3t9jb2yv3ltvc3Cw2NjbKPeXICkRSNANEUjQDRFI0A0RSNANEUjQDRFI0A0RSNANEUjQDRFI0A0RSNANEUjQDRFI0A0RSNANEUjQDRFI0A0RSNANEUjQDRFI0A0RSNANEUjQDRFI0A0RSNANEUjQDRFI0A0RSNANEUjQDRFI0A0RSNANEUjQDRFI0A0RSNANEUjQDRFI0A0RSNANEUjQDRFI0A0RSNANEUjQDRFI0A0RSNANEUjQDRFI0A0RSNANEUjQDRFI0A2SEXr58WTx9+rTcG5YXL14Uz549K/fUNgNkZAiP3d3dSYA8fvy4/NVhIDz43p48eVI8f/68/FW1yQAZkXCC8QpOMk62IQjfGwEJwtEQaZ8BMhKcYJxUITwCyv3cQ2Q2PAJDpH0GyAhwYs0LjyDnEFkUHoEh0i4DZOA4sR49erQwPIIcQ2RVeASGSHsMkAEL4bHqBAtyCpGq4REYIu0wQAaMk6bqCRbkECJ7e3u1gjGIeT+0nAEyYO+9916xsbFR7lVHiKS6ToTKgyCI8f7770e9H1rMABkwTpYPPvgg6qQhQFILkbrDlmmEx9tvv13uqSkGyMANJUQMjzQZICOQe4isEx4M4wyP9mzs7OzYVRoJTsCY5iP2798/2VbhRKfJWcXm5ubKUOPPim1+Eh7vvPNOuZcGwpCfwYMHDybvFQ1rXr/66qvyd+TFABmZtkOkyQDhz+HPi5FCeBB8vNd8D+F10QzXF198Uezbt6/cy4cBMkLrhAgH+bvvvlvuvampAMkpPPi38n7OhgXVRlWffvrpZJiZGwNkpAiPugd5sCxEmgiQlMNjOiDCaxM9oitXrhRHjhwp9/JhgIwY4UGZ3WSIrBsgqYQHq1ZfnRuvBQVbTNVWxfnz54utra1yLx8GyMg1HSLrBEgf4UEg8P3PhgWL6bp06tSp4vTp0+VePgwQNRoisQGyTnhUXedBKMwOP9jaqirqoPqgCsmNAaKJdUJkenYmJkCaDg8CYTYoeE35ZrrDhw8XV69eLffyYYDoP+uECFUI1UjdAOHvWic8+LvmVRW5YQaGmZjcGCB6zbohwlW+aoDQt+DvirG9vV3cuXOn8t+VOvo3X375ZbmXD5ey6zVvvfXW5MrOa10skqpzQseGx59//lncvn17MOGBXJ9VYoDoDfQlYkOkTVRFf/zxx2TGZIi6nvlpggGiuVILEcLj+vXrkz7HUPV902IMA0QLpRIihAfDliGHB6xANDh9h0gIjxxnVuqyAtEg9RUiYwoPWIFosLoOkbGFB6xANGhdhcgYwwNWIBq8tkNkrOEBKxCNQlshMubwQI6LyQwQRWk6RAgPFomNNTzAECaFO4PrMEAUrakQCeERu7R9SHLrgxggWsu6IWJ4vC63PogBorXFhojh8SYrEI0SIVLnA5wMj/lyCxCfB6IolNrcFRs2mp8c/FQhPJpv3gOXA8NjsZMnTxZnzpwp99JngGglwoIb2UJY8PWyKyUhcu7cuckDg2bxDA+mag2P+Y4fP15cuHCh3EufAaLXEAwhKMIWsz5hXogQHlQeiz6dTUVx6NCh4tq1a+Ve+gyQEZsNi1WVRV3TIWJ4VJPbs1ENkJEgGKaHIWxNhsUiNFYZ09+8edNhSwW5PRvVABmgvsJCzfj6668ns1o5MEAyR39iOigIjhxvytL/ff7550tnsVJigGSEsJitLAyL4fnkk0+KAwcOlHtpM0ASZViM16VLl4qjR4+We2kzQBLADMXDhw8ngRFCw9mK8Tp79mxx4sSJci9tBkjHCAsCYrq6MCw0LafVqAZIiwwLxTh27Fhx8eLFci9tBkhDQliwcV8Ir657UIycPqnfAIlAWISqIrwaFmlhFSyPGGBjJSyv3IOTQwXIv/Wzzz4r99JmgFTA7AefBE9YsI35sXup2rdv32QZeAgLtlmE/G+//Vbupaup1ag8HpE7n7ng8cp7VOeRC1UYIBUQHr/88ku5p76xSjMEBa8EBydHFdvb25NP9k9dndWohMNsWLDN2tzcbHyFqwFSAVXHDz/8UO6pa1w1Q1URNoYosahCUh9yzluNGoJhNiyqamNxmgFSAT+wb7/9ttxT2/bv3z+pKkKFwdYk+iC///57rZOvK1QIfP/MwvDKsVc3KOYhcHlPm2aAVPTdd995Q1oLOLCn+xZs9ADaxrCUO4T7EoKCKoONIRjvA7/W9DADvKdNBzEMkIp+/PHH4v79++WeYnEgh6AITc82TpgqeD4Jw9O28T2HoCAg2OhHdImAmh0SNcEAqYiSN4fmW2o4aMNwhI2TJxVUlL/++mtjQxlO0umqInzd9MxHDP4dVRvNdRggFd24caO4fv16uad5wtqLUFnwdQonzzJ3794t/v7773KvmlBFTIcEryl/r/w82hgaGiAVcaD9/PPP5Z7ASUNIcHASGpxIfQ1H1sGFgZsZZ4W+RLh688q2zgxQX9qYwoUBUhHTft9//325N07TQxG2LpqdXeDRCVSYoZIIrzkGxSJtPV/EAKnhm2++Kb8avtDsDNUFr0M6ocaEnxs/wzYYIDVQgQz1nheuutO9C/Y1DFwM+Lm2wQCp4aeffiru3btX7uUrNDunK4zUm52Kx3CMrQ0GSA002xgr54YG4OxwJMdmp+JQTbYxhQsDpIZbt25NFh+ljGAIw5AQGG0dPMoDx0FbDW8DpAZWorIiNVU8iHdra8tmp17T1hQuPNJqIMlTdvDgQcNDb2hzuOrRVgONqFR7B2HoIk1r+4JigNSU6klKo8zqQ7PavuB5xNVEczJFqf671K+2p+cNkJpSXWDV1kpD5c0KJDGpXuntf2geAyQxKVYgzPG3tdJQeXMIk5gUKxD7H1rECiQxJHpqt7Hb/9A8XczKGSARUus3WIFonrarDxggEVLqg3CQ2EDVPF3cYW2AREjpik94dHGlUX6sQBKVUgVi/0OLGCCJSmnIYP9Di9hETVRKJ60BokUMkERRGqawcIsHBaU2paw0dHVjpQESKYUrv/0PLdJVY90AiZRCI9Xhixbp6iHZBkikFBqpViBaxAokcX0HCGPcVB8toP7ZA0lc3wHi8EXLWIEkru+rvwGiZaxAMtDnSWz/Q4t0FR4wQNbQVxVCeWoFokW6Gr7AAFlDX30QFrF1eZVRXrqawoVH4Rr6ChCrDy1jBZKJvgLE/oeWsQeSCSsQpcgKJBPczNblDws+gV2rWIFkpOtqoO8FbEpb1811A2RNXQeI/Q8t03VFbICsqeu1IPY/tIwVSGa6HFJwdTFAtIwBkpkuA4Rqp+sSVXkxQDLTZYDY/9Aq9kAy0+VHXTp80SpWIBnq6sS2AtEyXYcHDJAGdDET4xPYtUof/TEDpAFdVCAOX7SKFUimuqhADBCtYoBkqouZGPsfWsUAyVTb1QEHhvfAaBV7IBlrcxjj8EVVWIFkrM0AsfrQKn2EBwyQhrRZJdj/0Cp93eJggDSkzQrEANEqViCZa6sCIZj6OjiUDwMkc21VIDZQVYUBkjkCpI1xqAGiKuyBDEAbsyUGiKqwAhmApgOEg6LN5qyGoc8emQHSoKZPdmdfVEVfwxcYIA1qerjh8EVVWIEMRNMViAGiKgyQgWiyB0JZaoCoCgNkIHhqGM9IbQLVTJ8HhvJhD2RAmhrG2EBVVVYgmXr69Gnx8OHD4s6dO8XNmzeLv/76q/wv6/MOXFXRd5W6sbOz87L8Wks8e/ZsEhhPnjyZfM328uWbb92r97N48OBBuRfv8uXLkyGRtAxD5j57ZQbIHFXDYh7+n3///bfci0NwECDSKhwrfS42HH2AhLAIW52wmOf58+fF9vZ2uRfn0KFDxenTp8s9aTHCo89KdVQB0nRYLHLjxo3yqzgnTpwojh49Wu5JizF8aWrmL8ZgA6SrsJjn1q1bxYsXL8q9+s6fP+8aEFXCbF2fjdRBBMhsWDCMWOcEXhc9EHohMTgYrl692uvcvvJx4MCB8qt+ZBcgqYXFPPfv3y8ePXpU7tXDFeXcuXPlnrQYF5u+1wslHSCEw3RYEB6phcU8hAchEuP48ePF1tZWuSct1vcULpIJkFzDYh7+/Swui3HmzJni4MGD5Z60WN9TuOglQAiLMBQJrzQ4Q5Ozq2ZnW/b29orbt2+Xe/VcuXLFT+FXJfv3759sfWo9QAiLUF0QFmyYDYtFr7mKmcrlYLh06VK5Jy3X9xQuGg0QhhwhKEKVgaphwSuzD7O/niMWk/Ee1HHkyJHi5MmT5Z60XN9TuIgOEMIiVBSU7JwsnPCzJ/9sCCz676t+f27u3r1bPH78uNyrhvAgRKRVOC9S6JVFxxeBwQkS7hfhG5oOgbCOYXo9w/R/n37Fst+fo5jS0sVjqiqVCYboAGG8fvjw4ckWOsHTIbAsHGZfwe9f9t9zU7cRSinad0dd+aBVkIK1B1CcKJRSH3744eQZFmFMNhsOs6/zwmLe78tV3QrEBwhpkVDtExpUHlSqqawVanwWhpN+d3d38g3TG1kUCrwuC43Z19zwg+aemKo4IFhEJoVlDVyMuSinPLRtdRqX/sirP/+/2ZhgVViE12B2Pxd1pnJZvm4VMj5caMJsHdU8x0BO64BaXwcCAoQgmb7BbFV4zIbG7H4O6kzlXrt2rfcpObWPypzzgcqCPuLm5mb5X/LUSYAEnEzcJ8IQh0CYFxpD6oVUncrlYLpw4UK5p6FgCB+G8vTEaJLTL+x78VeTOg2QgLKNIGHjzcUQQ4QHLrOtQgP6448/LveUKyrsMDtCdUHvYujD0l4CZFoIkrCWBEMID3D1oQpZhccX8hhD5YOLIIFBVR2qC4YjY7uPqfcACfhhcLUOfZIhhAih+M8//5R7i3H/S983RWm5cIsGwcFdsISFC/8SCpCAHxIfixD6JOB1eliTC/69fF7MMlyxuANX6ZiuLsICP578NbbqoorkAiSgN/Lq3zapSviB5hoiq56PSlONZ4CoP1y0QuUbplKdUq8m2QAJCIzQjKw6JZoSHiy0bNmxT2DvFsdTmBnhgsQMGGHR50cj5Cz5AJnGsIZHBS47IVNz7969yb97EZ/A3i4uOhwvVIGhuuD9Jjy0vqwCJOCAmO2TpIph2KKPuuQgZgGZB3MzOBZCs5P3NMyMWF20J8sACShDwxPQl/UZ+rRsKpcrIRWI4vDzp3cRqouw7sJA7k7WARJwANEj4WqfWp+Eg3zR81GPHTtWfPTRR+WeViEsrC7SMogAmUaIECYp9UkW3VTnE9gX46JA9cawhIVaNDsJDKuLtAwuQAIOPnoPvPaNCoRKZJZPYP8/Aj9Uj2Ghlovr0jfYAAnCwjT6JH01XOd91CUnyeXLl8u9caG6CL0LKgrCwt5FngYfIAEHK0HCEGdeNdCmeR91yaMgT506Ve4NGyHOBqoKwsLqYhhGEyABVQghQp8kHNRtIzxmP+qSu2+5C3doeH9DdUHvgqCgwvBZJ8M0ugCZ1tXCNP782Y+6vHjx4mQmIXf0LQhigoNhGdXFEL4vVTPqAAk4wdtcmMbVePr5qFyNWUCWG94b3iuGgPQrwsyI1cV4GSBTODFCn4STvknTU7mcdGfPni330hWqC94LhiIs1CI0pMAAmYMrbQiSpham8VyQ0HPh6eupPJZ/Gr0LQjT0LhiODOnxe2qeAbICDVDCZN0+yfRULtUHVUifCIrQuwjLwK0uVJcBUtG6C9PCIwnQxxPYCQu26WXgVhdalwFSEydhGN7UQYOWW/s5eZmBaVOoLuhdhFvYrS7UBgMkEidnqCo4YVfhhKYPwqfv8yn8TbK6UF8MkAaEIOEkXiRM5bL6lFWosfhz+HvoXTAMonfBJvXBAGkQwxSGN7P3vQRM5dZ9AnuYSqW6CKs6rS6UCgOkBZzwrHCdXZjGr/EZuIuEhVpUGYSEvQulzgBpUeiTvHqP/6skph8gxH6oLsLTtFzVqZwYIB0hRKhAqCyYGeFzRuoMZaQUGSCSolkvS4pmgEiKZoBIimaASIpmgEiKZoBIimaASIpmgEiKZoBIimaASIpmgEiKZoBIilQU/wOGBALxr3vLqwAAAABJRU5ErkJggg==",
                          alt: "Folder",
                          className: a.image,
                        }),
                        Object(V.jsx)(y.a, {
                          style: { textAlign: "center" },
                          children: "No files submitted",
                        }),
                      ],
                    }),
              ],
            }),
            A = Object(V.jsxs)("div", {
              children: [
                Object(V.jsx)(ra.a, {
                  variant: "filled",
                  width: "100%",
                  children: Object(V.jsx)(oa.a, {
                    type: "file",
                    name: "file",
                    id: "upload-file",
                    onChange: function (e) {
                      h(e.target.files[0]);
                    },
                    className: "file-upload",
                    style: { display: "none" },
                  }),
                }),
                Object(V.jsxs)("div", {
                  style: { display: "flex", alignItems: "center" },
                  children: [
                    Object(V.jsx)("label", {
                      htmlFor: "upload-file",
                      children: Object(V.jsx)(I.a, {
                        variant: "outlined",
                        component: "span",
                        className: a.button,
                        style: { width: "130px" },
                        children: "Upload File",
                      }),
                    }),
                    b
                      ? Object(V.jsxs)(V.Fragment, {
                          children: [
                            Object(V.jsx)(y.a, {
                              style: { marginLeft: "10px", overflow: "hidden" },
                              children: b.name,
                            }),
                            Object(V.jsx)(I.a, {
                              onClick: function (e) {
                                return (function (e) {
                                  e.preventDefault();
                                  var a = new FormData();
                                  a.append("file", b),
                                    C.a
                                      .post(
                                        "/api/v1/team/submitFile/".concat(t),
                                        a
                                      )
                                      .then(function (e) {
                                        //console.log(e.data);
                                        var t = e.data.file;
                                        t.fileUrl = "";
                                        var a = [].concat(Object(ze.a)(d), [t]);
                                        h(""), m(a);
                                      })
                                      .catch(function (e) {
                                        //console.log(e);
                                      });
                                })(e);
                              },
                              children: "Submit",
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
              ],
            });
          return Object(V.jsx)(V.Fragment, {
            children: i
              ? Object(V.jsx)("div", {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    margin: "40px 0px",
                  },
                  children: Object(V.jsx)(Zt.a, {}),
                })
              : Object(V.jsx)(O.a, {
                  maxWidth: !1,
                  component: x.a,
                  marginTop: "1rem",
                  style: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                  },
                  children: Object(V.jsx)(de.a, {
                    container: !0,
                    style: { width: "100%" },
                    component: x.a,
                    children: Object(V.jsx)(de.a, {
                      item: !0,
                      xs: 12,
                      children: Object(V.jsx)(q.a, {
                        classes: { root: a.cardRoot },
                        style: { backgroundColor: "#FEFEFE" },
                        children: Object(V.jsxs)(J.a, {
                          children: [
                            A,
                            Object(V.jsx)(x.a, {
                              component: "span",
                              m: 1,
                              children: d
                                ? k
                                : Object(V.jsx)("div", {
                                    children: "No files present",
                                  }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
          });
        },
        Ta = a(312),
        Ea = a(396),
        La = a(78),
        Na = a.n(La),
        Ba = a(391),
        Ma = a(394),
        Da = a(395),
        Fa = a(189),
        za = a.n(Fa),
        Ua = a(405),
        Va = a(392),
        Ha = a(393),
        Pa = a(190),
        Wa = a.n(Pa),
        Qa = Object(j.a)(function (e) {
          return {
            root: {
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              overflow: "hidden",
              backgroundColor: "red",
            },
            gridList: { maxHeight: "60vh" },
            image: { width: "30px", height: "30px" },
            messageCard: {
              backgroundColor: "#ebebeb",
              display: "inline-block",
              padding: "10px",
            },
            messageCardRight: {
              marginLeft: "50%",
              backgroundColor: "#E9EAF6",
              display: "inline-block",
              padding: "10px",
            },
            imageLayout: { justifyContent: "right" },
            gridLayout: { alignItems: "right" },
            cardgridLayout: {
              width: "100%",
              backgroundColor: "#fcfcfc",
              padding: "10px",
            },
            meetingCard: { minWidth: "90%" },
            span: {
              color: "#5F5F5F",
              float: "right",
              fontSize: "12px",
              textDecoration: "transparent",
              fontWeight: 400,
              margin: "3px",
            },
            AccordionRoot: {
              width: "100%",
              boxShadow: "0px",
              backgroundColor: "#F7F7F7",
            },
            messageList: { width: "100%", backgroundColor: "#F7F7F7" },
          };
        }),
        Ga = function (e) {
          return e.replace(
            /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi,
            function (e) {
              return '<a href="'
                .concat(e, '" target="_blank"> ')
                .concat(e, " </a>");
            }
          );
        },
        _a = function (e) {
          var t = e.teamMessages,
            a = e.user,
            o = Qa(),
            i = function () {
              var e = document.getElementById("chat-elem");
              e && (e.scrollTop = e.scrollHeight);
            };
          return (
            Object(n.useEffect)(function () {
              i();
            }, []),
            Object(n.useEffect)(
              function () {
                i();
              },
              [t]
            ),
            Object(V.jsx)("div", {
              id: "chat-lem",
              style: { paddingTop: "0px", minHeight: "60vh" },
              children: Object(V.jsx)(Ba.a, {
                cellHeight: 40,
                className: o.gridList,
                cols: 1,
                id: "chat-elem",
                children: t.map(function (e, t) {
                  if (e.roomId)
                    return Object(V.jsx)(
                      r.a.Fragment,
                      {
                        children: Object(V.jsxs)(de.a, {
                          container: !0,
                          wrap: "nowrap",
                          spacing: 1,
                          style: { margin: "10px 5px", height: "auto" },
                          className: o.cardgridLayout,
                          children: [
                            Object(V.jsx)(de.a, {
                              item: !0,
                              children: Object(V.jsx)(za.a, {
                                className: o.image,
                              }),
                            }),
                            Object(V.jsx)(de.a, {
                              className: o.meetingCard,
                              item: !0,
                              zeroMinWidth: !0,
                              alignItems: "flex-end",
                              direction: "reverse",
                              justify: "flex-end",
                              xs: 6,
                              children: Object(V.jsxs)(x.a, {
                                style: { width: "100%" },
                                children: [
                                  Object(V.jsxs)("h4", {
                                    style: { margin: 0, paddingBottom: "10px" },
                                    children: [
                                      "Meeting started by ",
                                      e.startedBy,
                                      " ",
                                      Object(V.jsx)("span", {
                                        className: o.span,
                                        children: e.endedAt
                                          ? Aa(e.endedAt)
                                          : "On going",
                                      }),
                                      Object(V.jsxs)("span", {
                                        className: o.span,
                                        children: [Aa(e.createdAt), " - "],
                                      }),
                                    ],
                                  }),
                                  e.chatMessages.length > 0
                                    ? Object(V.jsxs)(Ua.a, {
                                        className: { root: o.AccordionRoot },
                                        style: {
                                          boxShadow: "0px",
                                          backgroundColor: "#F7F7F7",
                                        },
                                        elevation: 0,
                                        children: [
                                          Object(V.jsx)(Va.a, {
                                            expandIcon: Object(V.jsx)(Wa.a, {}),
                                            "aria-controls": "panel1a-content",
                                            id: "panel1a-header",
                                            children: Object(V.jsx)(y.a, {
                                              className: o.heading,
                                              children: "See messages",
                                            }),
                                          }),
                                          Object(V.jsx)(Ha.a, {
                                            children: Object(V.jsx)(ue.a, {
                                              className: o.messageList,
                                              children: e.chatMessages.map(
                                                function (e, t) {
                                                  return Object(V.jsxs)(ge.a, {
                                                    style: { display: "flex" },
                                                    children: [
                                                      Object(V.jsx)(Ma.a, {
                                                        children: Object(V.jsx)(
                                                          R.a,
                                                          {
                                                            alt: "avatar",
                                                            src: e.userImage,
                                                            className: o.image,
                                                          }
                                                        ),
                                                      }),
                                                      Object(V.jsx)(Da.a, {
                                                        disableTypography: !0,
                                                        primary: Object(V.jsxs)(
                                                          "h4",
                                                          {
                                                            style: {
                                                              margin: 0,
                                                            },
                                                            children: [
                                                              e.userName,
                                                              " ",
                                                              Object(V.jsx)(
                                                                "span",
                                                                {
                                                                  className:
                                                                    o.span,
                                                                  children: Aa(
                                                                    e.createdAt
                                                                  ),
                                                                }
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                        secondary: Object(
                                                          V.jsx
                                                        )("p", {
                                                          style: {
                                                            margin: "0px",
                                                          },
                                                          dangerouslySetInnerHTML:
                                                            {
                                                              __html: Ga(
                                                                e.message
                                                              ),
                                                            },
                                                        }),
                                                      }),
                                                    ],
                                                  });
                                                }
                                              ),
                                            }),
                                          }),
                                        ],
                                      })
                                    : null,
                                ],
                              }),
                            }),
                          ],
                        }),
                      },
                      t
                    );
                  var n = "left";
                  return (
                    e.userId === a.id && (n = "right"),
                    Object(V.jsx)(
                      r.a.Fragment,
                      {
                        children: Object(V.jsxs)(de.a, {
                          container: !0,
                          wrap: "nowrap",
                          spacing: 1,
                          style: { margin: "10px 5px", height: "auto" },
                          className: o.gridLayout,
                          children: [
                            "left" == n
                              ? Object(V.jsx)(de.a, {
                                  item: !0,
                                  children: Object(V.jsx)(R.a, {
                                    alt: "avatar",
                                    src: e.userImage,
                                    className: o.image,
                                  }),
                                })
                              : null,
                            Object(V.jsx)(de.a, {
                              className:
                                "right" === n
                                  ? o.messageCardRight
                                  : o.messageCard,
                              item: !0,
                              zeroMinWidth: !0,
                              alignItems: "flex-end",
                              direction: "reverse",
                              justify: "flex-end",
                              xs: 6,
                              children: Object(V.jsxs)(x.a, {
                                children: [
                                  Object(V.jsxs)("h4", {
                                    style: { margin: 0 },
                                    children: [
                                      e.userName,
                                      " ",
                                      Object(V.jsx)("span", {
                                        className: o.span,
                                        children: Aa(e.createdAt),
                                      }),
                                    ],
                                  }),
                                  Object(V.jsx)("p", {
                                    style: { margin: "0px" },
                                    dangerouslySetInnerHTML: {
                                      __html: Ga(e.message),
                                    },
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      },
                      t
                    )
                  );
                }),
              }),
            })
          );
        },
        Ya = Object(j.a)($t),
        qa = function (e) {
          var t = e.user,
            a = e.Team,
            r = Ya(),
            o = Object(n.useState)([]),
            i = Object(w.a)(o, 2),
            c = i[0],
            s = i[1],
            l = Object(n.useState)(!0),
            d = Object(w.a)(l, 2),
            m = d[0],
            p = d[1],
            u = Object(n.useState)(""),
            g = Object(w.a)(u, 2),
            b = g[0],
            h = g[1];
          window.location.pathname.split("/")[3];
          Object(n.useEffect)(function () {
            C.a
              .get("/api/v1/team/chat-room/".concat(a._id))
              .then(function (e) {
                p(!1),
                  200 === e.status &&
                    (//console.log(e.data.data.results), s(e.data.data.results));
              })
              .catch(function (e) {
                //console.log(e), window.alert(e);
              }),
              Ie.on("new-message", function (e) {
                //console.log("Received new message"),
                  s(function (t) {
                    return [].concat(Object(ze.a)(t), [e]);
                  });
              });
          }, []);
          var j = null;
          return (
            (j = m
              ? Object(V.jsx)("div", {
                  style: {
                    display: "flex",
                    margin: "20px 0px",
                    justifyContent: "center",
                  },
                  children: Object(V.jsx)(Zt.a, {}),
                })
              : !m && c.length > 0
              ? Object(V.jsx)(_a, { teamMessages: c, user: t })
              : Object(V.jsx)(y.a, {
                  style: {
                    fontSize: "17px",
                    padding: "10px 0px",
                    height: "10px",
                    margin: "5px",
                  },
                  children: "Start Conversation",
                })),
            Object(V.jsx)("div", {
              className: "content",
              style: {
                position: " relative",
                fontSize: "1rem",
                height: "100%",
                justifyContent: "space-evenly",
                paddingBottom: "10px",
              },
              children: Object(V.jsxs)(de.a, {
                container: !0,
                children: [
                  Object(V.jsx)(de.a, { item: !0, xs: 12, xl: 1 }),
                  Object(V.jsx)(de.a, {
                    item: !0,
                    xs: 12,
                    xl: 12,
                    component: x.a,
                    classes: { root: r.gridItemRoot + " " + r.order2 },
                    children: Object(V.jsxs)(fa.a, {
                      style: {
                        padding: "2px 10px 0px 0px",
                        backgroundColor: "#f5f5f5",
                      },
                      classes: { root: r.cardRoot },
                      children: [
                        j,
                        Object(V.jsxs)("div", {
                          className: r.plLg4,
                          style: {
                            marignLeft: "auto",
                            marginRight: "auto",
                            marginBottom: "10px",
                          },
                          children: [
                            Object(V.jsx)("br", {}),
                            Object(V.jsx)(de.a, {
                              children: Object(V.jsx)(de.a, {
                                item: !0,
                                xs: "auto",
                                children: Object(V.jsx)(aa.a, {
                                  children: Object(V.jsx)(ra.a, {
                                    variant: "filled",
                                    width: "100%",
                                    style: { marginBottom: "1rem!important" },
                                    required: !0,
                                    children: Object(V.jsx)(Ta.a, {
                                      style: {
                                        paddingLeft: "0.75rem",
                                        paddingRight: "0.75rem",
                                        width: "100%",
                                      },
                                      type: "text",
                                      required: !0,
                                      autoComplete: "off",
                                      classes: { input: r.searchInput },
                                      placeholder: "Write Your Message",
                                      id: "message",
                                      onChange: function (e) {
                                        h(e.target.value);
                                      },
                                      value: b,
                                      disableUnderline: !0,
                                      endAdornment: Object(V.jsx)(Ea.a, {
                                        position: "end",
                                        children: Object(V.jsx)(ja.a, {
                                          onClick: function (e) {
                                            !(function (e) {
                                              if (
                                                (e.preventDefault(), "" === b)
                                              )
                                                alert("Empty Message!");
                                              else {
                                                var n = {
                                                  userId: t._id,
                                                  userName: t.name,
                                                  userImage: t.image,
                                                  message: b,
                                                  teamId: a._id,
                                                  createdAt: new Date(),
                                                };
                                                Ie &&
                                                  Ie.emit(
                                                    "message",
                                                    n,
                                                    function () {
                                                      h("");
                                                    }
                                                  );
                                              }
                                            })(e);
                                          },
                                          style: {
                                            border: "0",
                                            padding: "7px",
                                          },
                                          disabled: "" === b,
                                          children: Object(V.jsx)(Na.a, {
                                            style: {
                                              padding: "0",
                                              width: "23px",
                                              height: "23px",
                                            },
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(V.jsx)(de.a, { item: !0, xs: 12, xl: 1 }),
                ],
              }),
            })
          );
        },
        Ja = a(191),
        Za = a.n(Ja),
        Xa = a(128),
        Ka = a.n(Xa),
        $a = a(397),
        en = a(402),
        tn = a(408),
        an = Object(j.a)(function (e) {
          return {
            root: {
              width: "100%",
              maxWidth: 360,
              backgroundColor: e.palette.background.paper,
            },
            paper: {
              maxHeight: 200,
              overflow: "auto",
              width: 360,
              marginTop: "10px",
            },
            avatar: { height: "30px", width: "30px" },
            chips: {
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
              padding: e.spacing(0.5),
              margin: 0,
            },
            chip: { margin: e.spacing(0.5) },
          };
        });
      function nn(e) {
        var t = e.show,
          a = e.handleEvent,
          r = e.Team,
          o = an(),
          i = Object(n.useState)([]),
          c = Object(w.a)(i, 2),
          l = c[0],
          d = c[1],
          m = Object(n.useState)([]),
          p = Object(w.a)(m, 2),
          u = p[0],
          g = p[1],
          b = Object(n.useState)(""),
          h = Object(w.a)(b, 2),
          j = h[0],
          f = h[1],
          O = Object(n.useState)({ text: "" }),
          v = Object(w.a)(O, 2),
          S = v[0],
          k = v[1],
          A = Object(n.useState)([]),
          T = Object(w.a)(A, 2),
          E = T[0],
          L = T[1];
        Object(n.useEffect)(
          function () {
            !(function () {
              var e = u.filter(function (e) {
                return (
                  -1 !== e.name.toLowerCase().indexOf(j.toLowerCase()) ||
                  -1 !== e.email.toLowerCase().indexOf(j.toLowerCase())
                );
              });
              //console.log(e), d(e);
            })();
          },
          [j]
        ),
          Object(n.useEffect)(
            function () {
              t && N();
            },
            [t]
          );
        var N = function () {
            var e = r.id;
            C.a
              .get("/api/v1/user/otherUsers/".concat(e), {
                withCredentials: !0,
              })
              .then(function (e) {
                d(e.data.data), g(e.data.data);
              })
              .catch(function (e) {
                return //console.log(e);
              });
          },
          B = Object(V.jsx)("div", {
            className: o.chips,
            children: E.map(function (e) {
              return Object(V.jsx)(
                "li",
                {
                  children: Object(V.jsx)(tn.a, {
                    label: e.name,
                    onDelete:
                      ((t = e),
                      function () {
                        L(function (e) {
                          return e.filter(function (e) {
                            return e.id !== t.id;
                          });
                        });
                      }),
                    className: o.chip,
                    color: "primary",
                    variant: "outlined",
                  }),
                },
                e.id
              );
              var t;
            }),
          });
        return Object(V.jsx)("div", {
          children: Object(V.jsxs)(Te.a, {
            open: t,
            onClose: a,
            "aria-labelledby": "form-dialog-title",
            children: [
              Object(V.jsx)(ta.a, {
                style: {
                  color: "#32325d",
                  fontSize: "15px",
                  fontWeight: "bold",
                },
                disableTypography: !0,
                children: "Add members to the team",
              }),
              Object(V.jsxs)(Le.a, {
                style: { paddingTop: "0px" },
                children: [
                  Object(V.jsx)(Ne.a, {
                    style: { fontSize: "13px" },
                    children:
                      "Start typing a name, distribution list, or security group to add to your team. You can also add people outside your organization as guests by typing their email addresses.",
                  }),
                  Object(V.jsx)(x.a, { children: E.length > 0 ? B : null }),
                  Object(V.jsx)(en.a, {
                    autoFocus: !0,
                    margin: "dense",
                    id: "name",
                    label: "Name or Email",
                    type: "text",
                    fullWidth: !0,
                    name: "text",
                    value: S.text,
                    onChange: function (e) {
                      //console.log(e.target.value),
                        k(
                          Object(s.a)(
                            Object(s.a)({}, S),
                            {},
                            Object(z.a)({}, e.target.name, e.target.value)
                          )
                        ),
                        "" === e.target.value ? d(u) : f(e.target.value);
                    },
                    placeholder: "Enter name or email",
                  }),
                  Object(V.jsx)("br", {}),
                  Object(V.jsx)("br", {}),
                  "" !== j
                    ? Object(V.jsx)(fa.a, {
                        className: o.paper,
                        children: Object(V.jsx)(ue.a, {
                          component: "nav",
                          className: o.root,
                          "aria-label": "contacts",
                          children:
                            l.length > 0
                              ? l.map(function (e, t) {
                                  return Object(V.jsxs)(
                                    ge.a,
                                    {
                                      button: !0,
                                      style: { display: "flex" },
                                      onClick: function () {
                                        return (function (e) {
                                          if (!E.includes(e)) {
                                            //console.log("hello");
                                            var t = [].concat(Object(ze.a)(E), [
                                              e,
                                            ]);
                                            L(t);
                                          }
                                        })(e);
                                      },
                                      children: [
                                        Object(V.jsx)($a.a, {
                                          children: Object(V.jsx)(R.a, {
                                            src: e.image,
                                            className: o.avatar,
                                          }),
                                        }),
                                        Object(V.jsx)(Da.a, {
                                          primary: e.name,
                                          secondary: e.email,
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                })
                              : Object(V.jsx)(y.a, {
                                  style: { textAlign: "center" },
                                  children: "No users found",
                                }),
                        }),
                      })
                    : null,
                ],
              }),
              Object(V.jsxs)(Ee.a, {
                children: [
                  Object(V.jsx)(I.a, {
                    onClick: a,
                    color: "primary",
                    children: "Cancel",
                  }),
                  Object(V.jsx)(I.a, {
                    onClick: function () {
                      if (0 !== E.length) {
                        var e = E.map(function (e) {
                          return e.id;
                        });
                        C.a
                          .post("/api/v1/team/addMember/".concat(r.id), e)
                          .then(function (e) {
                            L([]), f(""), a();
                          })
                          .catch(function (e) {
                            return //console.log(e);
                          });
                      }
                    },
                    color: "primary",
                    disabled: 0 === E.length,
                    children: "Submit",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var rn = a(311),
        on = r.a.forwardRef(function (e, t) {
          return Object(V.jsx)(
            rn.a,
            Object(s.a)({ direction: "up", ref: t }, e)
          );
        });
      function cn(e) {
        return Object(V.jsxs)(Te.a, {
          open: e.open,
          TransitionComponent: on,
          keepMounted: !0,
          onClose: e.handleClose,
          "aria-labelledby": "alert-dialog-slide-title",
          "aria-describedby": "alert-dialog-slide-description",
          children: [
            Object(V.jsxs)(Le.a, {
              children: [
                Object(V.jsx)("h2", {
                  style: { textAlign: "center" },
                  children: e.title,
                }),
                Object(V.jsx)(Ne.a, {
                  id: "alert-dialog-slide-description",
                  children: Object(V.jsx)("i", { children: e.description }),
                }),
              ],
            }),
            Object(V.jsxs)(Ee.a, {
              children: [
                Object(V.jsx)(I.a, {
                  onClick: e.accept,
                  color: "primary",
                  children: "Confirm",
                }),
                Object(V.jsx)(I.a, {
                  onClick: e.handleClose,
                  color: "primary",
                  children: "Close",
                }),
              ],
            }),
          ],
        });
      }
      a(292);
      var sn = [
          {
            icon: Object(V.jsx)(sa.a, {}),
            itemName: "Add member",
            id: 0,
            privacy: !0,
          },
          {
            icon: Object(V.jsx)(Ka.a, {}),
            itemName: "Leave team",
            id: 1,
            privacy: !1,
          },
          {
            icon: Object(V.jsx)(Ka.a, {}),
            itemName: "Delete Team",
            id: 2,
            privacy: !0,
          },
        ],
        ln = function (e) {
          var t = e.Team,
            a = e.user,
            r = Object(u.g)(),
            o = Object(n.useState)(null),
            i = Object(w.a)(o, 2),
            c = i[0],
            s = i[1],
            l = Object(n.useState)(!1),
            d = Object(w.a)(l, 2),
            m = d[0],
            p = d[1],
            g = Object(n.useState)(!1),
            b = Object(w.a)(g, 2),
            h = b[0],
            j = b[1],
            x = Object(n.useState)(!1),
            f = Object(w.a)(x, 2),
            O = f[0],
            v = f[1],
            y = Object(n.useState)([]),
            S = Object(w.a)(y, 2),
            k =
              (S[0],
              S[1],
              function (e) {
                0 === e
                  ? p(function (e) {
                      return !e;
                    })
                  : 1 === e
                  ? j(function (e) {
                      return !e;
                    })
                  : 2 === e &&
                    v(function (e) {
                      return !e;
                    });
              }),
            A = Object(V.jsx)(cn, {
              title: "Leave Team",
              description: "Confirmation to leave team",
              handleClose: function () {
                return k(1);
              },
              accept: function () {
                C.a
                  .patch("/api/v1/team/leaveTeam/".concat(t.id))
                  .then(function (e) {
                    //console.log(e), r.push("/teams");
                  })
                  .catch(function (e) {
                    return //console.log(e);
                  });
              },
              open: h,
            }),
            R = Object(V.jsx)(cn, {
              title: "Delete Team",
              description: "Confirmation to delete team",
              handleClose: function () {
                return k(2);
              },
              accept: function () {
                C.a
                  .patch("/api/v1/team/deleteTeam/".concat(t.id))
                  .then(function (e) {
                    //console.log(e.data), r.push("/teams");
                  })
                  .catch(function (e) {
                    return //console.log(e);
                  });
              },
              open: O,
            });
          return Object(V.jsxs)("div", {
            children: [
              Object(V.jsx)(Za.a, {
                onClick: function (e) {
                  s(e.currentTarget);
                },
                style: { height: "20px", width: "20px", cursor: "pointer" },
              }),
              Object(V.jsx)(L.a, {
                id: "simple-menu",
                anchorEl: c,
                keepMounted: !0,
                open: Boolean(c),
                onClose: function () {
                  s(null);
                },
                children: sn.map(function (e) {
                  return (e.privacy &&
                    t.privacy &&
                    t.Owner.email !== a.email) ||
                    (1 === e.id && t.Owner.email === a.email) ||
                    (2 === e.id && t.Owner.email !== a.email)
                    ? null
                    : Object(V.jsxs)(
                        N.a,
                        {
                          style: { display: "flex" },
                          onClick: function () {
                            return k(e.id);
                          },
                          children: [
                            Object(V.jsx)($a.a, {
                              style: {
                                color: "blue",
                                marginRight: "10px",
                                minWidth: "0px",
                              },
                              children: e.icon,
                            }),
                            Object(V.jsx)(Da.a, { children: e.itemName }),
                          ],
                        },
                        e.id
                      );
                }),
              }),
              Object(V.jsx)(nn, {
                Team: t,
                show: m,
                handleEvent: function () {
                  return k(0);
                },
              }),
              A,
              R,
            ],
          });
        },
        dn = Object(j.a)(Jt),
        mn = function (e) {
          var t = e.Team,
            a = e.user,
            n = dn(),
            r = Object(Gt.a)();
          return Object(V.jsxs)(q.a, {
            classes: { root: n.cardRoot },
            style: {
              height: "100vh",
              borderRadius: "0px",
              width: "min(300px,80vw)",
            },
            children: [
              Object(V.jsx)(Z.a, {
                style: { minHeight: "140px", border: 0 },
                subheader: Object(V.jsxs)(x.a, {
                  children: [
                    Object(V.jsx)(x.a, {
                      component: O.a,
                      children: Object(V.jsx)(R.a, {
                        variant: "square",
                        className: n.square,
                        children: (function (e) {
                          var t = e.split(" ");
                          return t.length > 1
                            ? t[0][0] + "" + t[1][0]
                            : t[0][0] + t[0][1];
                        })(t.Name),
                      }),
                    }),
                    Object(V.jsxs)(x.a, {
                      component: y.a,
                      variant: "h2",
                      className: n.textUppercase,
                      marginBottom: "1rem!important",
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                      },
                      children: [
                        Object(V.jsx)(x.a, {
                          component: "span",
                          style: { textAlign: "center" },
                          children: t.Name,
                        }),
                        Object(V.jsx)(x.a, {
                          children: Object(V.jsx)(ln, { Team: t, user: a }),
                        }),
                      ],
                    }),
                    Object(V.jsx)(x.a, {
                      component: y.a,
                      variant: "h5",
                      letterSpacing: ".0625rem",
                      marginBottom: ".25rem!important",
                      children: Object(V.jsx)(x.a, {
                        component: "span",
                        color: r.palette.gray[400],
                        style: { fontSize: "16px", color: "grey" },
                        children: t.Description,
                      }),
                    }),
                  ],
                }),
                classes: { root: n.cardHeaderRoot },
              }),
              Object(V.jsxs)(J.a, {
                classes: { root: n.cardHeaderRoot },
                style: {
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "left",
                },
                children: [
                  Object(V.jsx)(R.a, {
                    style: {
                      width: "35px",
                      height: "35px",
                      marginRight: "10px",
                    },
                    src: t.Owner.image,
                  }),
                  Object(V.jsx)(y.a, { children: t.Owner.name }),
                ],
              }),
            ],
          });
        },
        pn = Object(j.a)(Jt);
      var un = Object(h.b)(function (e) {
          var t = e.Video;
          return e.dashboard, Object(s.a)({}, t);
        }, null)(function (e) {
          var t = e.user,
            a = (e.cookies, e.history),
            r = Object(b.a)(e, ["user", "cookies", "history"]),
            o = pn(),
            i = (Object(Gt.a)(), Object(n.useState)(!1)),
            c = Object(w.a)(i, 2),
            s = (c[0], c[1], Object(n.useState)(!1)),
            l = Object(w.a)(s, 2),
            d = (l[0], l[1], Object(n.useState)("")),
            m = Object(w.a)(d, 2),
            p = (m[0], m[1], r.activeTeams),
            u = Object(n.useState)(null),
            g = Object(w.a)(u, 2),
            h = g[0],
            j = g[1],
            f = Object(n.useState)("Chat"),
            O = Object(w.a)(f, 2),
            v = O[0],
            S = O[1];
          return (
            Object(n.useEffect)(function () {
              Ie || jt(t);
              var e = window.location.pathname.split("/")[2];
              !(function (e) {
                C.a
                  .get("/api/v1/team/getTeam/".concat(e))
                  .then(function (e) {
                    var t = e.data.data;
                    j(t), //console.log(e.data);
                  })
                  .catch(function (e) {
                    //console.log(e), a.push("/teams");
                  });
              })(e),
                (function (e) {
                  var t = { teamId: e };
                  Ie.emit("team", t);
                })(e);
            }, []),
            Object(V.jsxs)("div", {
              children: [
                Object(V.jsx)(qt, { style: { marginBottom: "0px" } }),
                null != h
                  ? Object(V.jsxs)(
                      de.a,
                      {
                        item: !0,
                        style: {
                          width: "100%",
                          margin: "0px",
                          padding: "0px",
                          display: "flex",
                        },
                        component: x.a,
                        children: [
                          Object(V.jsx)(de.a, {
                            children: Object(V.jsx)(mn, { Team: h, user: t }),
                          }),
                          Object(V.jsx)(de.a, {
                            style: { width: "100%", height: "100%" },
                            children: Object(V.jsxs)(q.a, {
                              classes: o.cardRoot,
                              style: {
                                borderRadius: "0px",
                                height: "100vh",
                                boxShadow:
                                  "0px 0px 1rem rgba(136,152,170,0.35)",
                              },
                              children: [
                                Object(V.jsx)(Z.a, {
                                  style: {
                                    minHeight: "30px",
                                    minWidth: "min(300px,80vw)",
                                    border: 0,
                                    paddingBottom: "0px",
                                  },
                                  classes: { root: o.cardHeaderRoot },
                                  subheader: Object(V.jsxs)(x.a, {
                                    style: {
                                      display: "flex",
                                      justifyContent: "space-between",
                                    },
                                    children: [
                                      Object(V.jsx)(x.a, {
                                        component: y.a,
                                        variant: "h2",
                                        marginBottom: "1rem!important",
                                        children: Object(V.jsx)(x.a, {
                                          component: "span",
                                          style: { textAlign: "center" },
                                          children: "General",
                                        }),
                                      }),
                                      Object(V.jsxs)(x.a, {
                                        children: [
                                          Object(V.jsx)(I.a, {
                                            className:
                                              "Chat" === v
                                                ? "active"
                                                : "in-active",
                                            onClick: function () {
                                              S("Chat");
                                            },
                                            children: "Chat",
                                          }),
                                          Object(V.jsx)(I.a, {
                                            className:
                                              "Files" === v
                                                ? "active"
                                                : "in-active",
                                            onClick: function () {
                                              S("Files");
                                            },
                                            children: "Files",
                                          }),
                                          p.some(function (e) {
                                            return e.teamId == h._id;
                                          })
                                            ? Object(V.jsx)(I.a, {
                                                primary: !0,
                                                style: { marginLeft: "10px" },
                                                onClick: function () {
                                                  var e = p.find(function (e) {
                                                    return e.teamId == h._id;
                                                  });
                                                  //console.log(e);
                                                  var t = "/call/".concat(
                                                    e.roomId
                                                  );
                                                  a.push({
                                                    pathname: t,
                                                    state: { teamId: h._id },
                                                  });
                                                },
                                                children: "Join meeting",
                                              })
                                            : Object(V.jsx)(I.a, {
                                                primary: !0,
                                                style: { marginLeft: "10px" },
                                                onClick: function () {
                                                  !(function (e, t, a, n) {
                                                    var r =
                                                        lt.getState().User.user,
                                                      o = {
                                                        email: r.email,
                                                        name: r.name,
                                                        peerId: we,
                                                        teamId: e,
                                                        teamName: t,
                                                        owner: a,
                                                        ownerId: n,
                                                      };
                                                    Lt(o);
                                                  })(
                                                    h.id,
                                                    h.Name,
                                                    t.name,
                                                    t.id
                                                  );
                                                },
                                                children: "Start meeting",
                                              }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                Object(V.jsx)(J.a, {
                                  style: {
                                    paddingLeft: "0px",
                                    paddingBottom: "0px",
                                  },
                                  children: Object(V.jsx)("div", {
                                    children:
                                      "Chat" === v
                                        ? Object(V.jsx)(qa, {
                                            Team: h,
                                            user: t,
                                          })
                                        : "Files" === v
                                        ? Object(V.jsx)(Ia, {
                                            user: t,
                                            teamId: h._id,
                                          })
                                        : null,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      },
                      h._id
                    )
                  : null,
              ],
            })
          );
        }),
        gn = function (e) {
          return {
            cardRoot: {
              boxShadow: G.boxShadow + "!important",
              border: "0!important",
              width: "100%",
              height: "100%",
              backgroundColor: "initial!important",
            },
            cardContentRoot: {
              backgroundColor: "initial!important",
              color: "white",
              textAlign: "center",
              marginTop: "10%",
            },
            gridLayout: {
              position: "absolute",
              width: "300px",
              height: "200px",
              top: "calc(50% - 150px)",
              left: "calc(50% - 150px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              border: "2px solid red",
            },
            spinner: { marginTop: "15px" },
          };
        },
        bn = Object(j.a)(gn),
        hn = function (e) {
          var t = e.reason,
            a = e.hideCallRejectedDialog,
            r = bn();
          return (
            Object(n.useEffect)(function () {
              setTimeout(
                function () {
                  a({ rejected: !1, reason: "" });
                },
                [3e3]
              );
            }, []),
            Object(V.jsx)(de.a, {
              container: !0,
              spacing: 0,
              className: r.gridLayout,
              children: Object(V.jsx)(q.a, {
                className: r.cardRoot,
                children: Object(V.jsx)(J.a, {
                  className: r.cardContentRoot,
                  children: Object(V.jsx)(y.a, { children: t }),
                }),
              }),
            })
          );
        },
        jn = Object(j.a)(gn),
        xn = function (e) {
          var t = e.recieverUsername,
            a = jn();
          return Object(V.jsx)(de.a, {
            container: !0,
            spacing: 0,
            className: a.gridLayout,
            children: Object(V.jsx)(q.a, {
              className: a.cardRoot,
              children: Object(V.jsxs)(J.a, {
                className: a.cardContentRoot,
                children: [
                  Object(V.jsxs)(y.a, {
                    children: [
                      "Calling ",
                      Object(V.jsxs)("span", { children: [" ", t] }),
                      " ",
                    ],
                  }),
                  Object(V.jsx)(Zt.a, { className: a.spinner }),
                ],
              }),
            }),
          });
        },
        fn = a(194),
        On = a(193),
        vn = a(192),
        yn = a(65),
        wn =
          (a(5),
          Object(j.a)({
            list: { width: "300px" },
            paper: { width: "300px", backgroundColor: "#151515" },
            root: { minWidth: 275, minHeight: 400, top: "10%" },
            bullet: {
              display: "inline-block",
              margin: "0 2px",
              transform: "scale(0.8)",
            },
            title: { fontSize: 14 },
            pos: { marginBottom: 12 },
            input: { width: "100%", padding: "0px" },
            listPaper: {
              maxHeight: 240,
              overflow: "auto",
              width: 270,
              marginTop: "10px",
            },
            avatar: { height: "25px", width: "25px", marginRight: "2px" },
            primary: { fontSize: "14px" },
            ListRoot: { minWidth: "200" },
          }));
      function Sn(e) {
        var t = e.show,
          a = e.close,
          r = e.currentUser,
          o = wn(),
          i = Object(n.useState)(""),
          c = Object(w.a)(i, 2),
          s = c[0],
          l = c[1],
          d = Object(n.useState)([]),
          m = Object(w.a)(d, 2),
          p = m[0],
          u = m[1],
          g = Object(n.useState)([]),
          b = Object(w.a)(g, 2),
          h = b[0],
          j = b[1];
        Object(n.useEffect)(function () {
          return x();
        }, []);
        var x = function () {
          C.a
            .get("/api/v1/user")
            .then(function (e) {
              var t = e.data.data.docs;
              (t = t.filter(function (e) {
                return e.email !== r.email;
              })),
                u(t);
            })
            .catch(function (e) {
              return //console.log(e);
            });
        };
        Object(n.useEffect)(
          function () {
            !(function () {
              var e = p.filter(function (e) {
                return (
                  -1 !== e.name.toLowerCase().indexOf(s.toLowerCase()) ||
                  -1 !== e.email.toLowerCase().indexOf(s.toLowerCase())
                );
              });
              j(e);
            })();
          },
          [s]
        );
        var f = function (e) {
            !(function (e) {
              lt.dispatch(Xe(Je)),
                lt.dispatch({
                  type: "SET_CALLEE_DETAILS",
                  recieverUsername: e.name,
                }),
                lt.dispatch(Ke(!0));
              var t = {
                reciever: e,
                caller: { username: lt.getState().User.user.name },
              };
              Ie.emit("pre-offer", t);
            })(e);
          },
          O = Object(V.jsxs)(q.a, {
            className: o.root,
            children: [
              Object(V.jsx)(Z.a, {
                subheader: Object(V.jsx)(y.a, { children: " People" }),
              }),
              Object(V.jsxs)(J.a, {
                children: [
                  Object(V.jsx)(en.a, {
                    id: "outlined-multiline-flexible",
                    label: "Invite",
                    rowsMax: 4,
                    value: s,
                    onChange: function (e) {
                      l(e.target.value);
                    },
                    variant: "outlined",
                    placeholder: "Invite Someone",
                    classes: { root: o.input },
                    autoComplete: "off",
                  }),
                  s.length > 0
                    ? Object(V.jsx)(fa.a, {
                        className: o.listPaper,
                        children:
                          h.length > 0
                            ? Object(V.jsx)(ue.a, {
                                component: "nav",
                                className: o.rootList,
                                "aria-label": "contacts",
                                children: h.map(function (e, t) {
                                  return Object(V.jsxs)(
                                    ge.a,
                                    {
                                      button: !0,
                                      style: { display: "flex" },
                                      onClick: function () {
                                        return f(e);
                                      },
                                      children: [
                                        Object(V.jsx)($a.a, {
                                          style: {
                                            minWidth: "10px",
                                            marginRight: "10px",
                                          },
                                          children: Object(V.jsx)(R.a, {
                                            src: e.image,
                                            className: o.avatar,
                                          }),
                                        }),
                                        Object(V.jsx)(Da.a, {
                                          primary: e.name,
                                          secondary: e.email,
                                          classes: { primary: o.primary },
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                }),
                              })
                            : Object(V.jsx)("div", {
                                style: { textAlign: "center" },
                                children: Object(V.jsx)(y.a, {
                                  children: "No users matched",
                                }),
                              }),
                      })
                    : null,
                ],
              }),
            ],
          });
        return Object(V.jsx)("div", {
          children: Object(V.jsx)(pe.a, {
            open: t,
            anchor: "right",
            onClose: a,
            classes: { paper: o.paper },
            children: O,
          }),
        });
      }
      var Cn = function (e) {
          return {
            buttons: {
              display: "flex",
              position: "absolute",
              bottom: "5%",
              left: "35%",
              cursor: "pointer",
              backgroundColor: "#43484A",
              borderRadius: "30px",
              paddingLeft: "5px",
              paddingRight: "10px",
            },
            icon: { width: "25px", height: "25px", fill: "#e6e5e8" },
          };
        },
        kn = Object(j.a)(Cn);
      var An = Object(h.b)(null, function (e) {
          return {
            handleCamera: function (t) {
              return e({ type: "ENABLE_CAMERA", enabled: t });
            },
            handleMicrophone: function (t) {
              return e({ type: "ENABLE_MICROPHONE", enabled: t });
            },
          };
        })(function (e) {
          var t = kn(),
            a = e.localStream,
            r = e.localCamera,
            o = e.localMicrophone,
            i = e.screenSharing,
            c = e.callState,
            s = e.handleMicrophone,
            l = e.handleCamera,
            d = e.isTeamMeetingPresent,
            m = e.history,
            p = e.showChat,
            u = e.handleChat,
            g = e.user,
            b = e.showBoardGrid,
            h = e.groupCall,
            j = Object(n.useState)(!1),
            x = Object(w.a)(j, 2),
            f = x[0],
            O = x[1],
            v = function () {
              O(!f);
            };
          return Object(V.jsxs)("div", {
            className: t.buttons,
            children: [
              Object(V.jsx)(ja.a, {
                onClick: function () {
                  (a.getAudioTracks()[0].enabled = !o), s(!o);
                },
                children: o
                  ? Object(V.jsx)(yn.b, { className: t.icon })
                  : Object(V.jsx)(yn.c, { className: t.icon }),
              }),
              Object(V.jsx)(ja.a, {
                onClick: function () {
                  (a.getVideoTracks()[0].enabled = !r), l(!r);
                },
                children: r
                  ? Object(V.jsx)(yn.f, { className: t.icon })
                  : Object(V.jsx)(yn.g, { className: t.icon }),
              }),
              c === Je
                ? Object(V.jsxs)(V.Fragment, {
                    children: [
                      Object(V.jsx)(ja.a, {
                        onClick: function () {
                          d
                            ? (//console.log(ye.connections),
                              lt.getState().Video.screenSharing
                                ? (function () {
                                    var e,
                                      t = lt.getState().Video.localStream,
                                      a = Object(Fe.a)(dt);
                                    try {
                                      for (a.s(); !(e = a.n()).done; )
                                        e.value
                                          .getSenders()
                                          .find(function (e) {
                                            return (
                                              e.track.kind ===
                                              t.getVideoTracks()[0].kind
                                            );
                                          })
                                          .replaceTrack(t.getVideoTracks()[0]);
                                    } catch (n) {
                                      a.e(n);
                                    } finally {
                                      a.f();
                                    }
                                    lt.dispatch(at(!1)),
                                      Se.getTracks().forEach(function (e) {
                                        return e.stop();
                                      });
                                  })()
                                : navigator.mediaDevices
                                    .getDisplayMedia({ video: !0 })
                                    .then(function (e) {
                                      Se = e;
                                      var t,
                                        a = e.getVideoTracks()[0],
                                        n = Object(Fe.a)(dt);
                                      try {
                                        for (n.s(); !(t = n.n()).done; )
                                          t.value
                                            .getSenders()
                                            .find(function (e) {
                                              return e.track.kind === a.kind;
                                            })
                                            .replaceTrack(a);
                                      } catch (r) {
                                        n.e(r);
                                      } finally {
                                        n.f();
                                      }
                                      lt.dispatch(at(!0));
                                    })
                                    .catch(function (e) {
                                      return //console.log(e);
                                    }))
                            : (function () {
                                if (lt.getState().Video.screenSharing) {
                                  var e = lt.getState().Video.localStream;
                                  ke
                                    .getSenders()
                                    .find(function (t) {
                                      return (
                                        t.track.kind ===
                                        e.getVideoTracks()[0].kind
                                      );
                                    })
                                    .replaceTrack(e.getVideoTracks()[0]),
                                    lt.dispatch(at(!1)),
                                    Ae.getTracks().forEach(function (e) {
                                      return e.stop();
                                    });
                                } else
                                  navigator.mediaDevices
                                    .getDisplayMedia({ video: !0 })
                                    .then(function (e) {
                                      (Ae = e),
                                        (Re = e.getVideoTracks()[0]),
                                        //console.log(ke.getSenders());
                                      var t = ke
                                        .getSenders()
                                        .find(function (e) {
                                          return e.track.kind === Re.kind;
                                        });
                                      t.replaceTrack(Re),
                                        //console.log(t),
                                        lt.dispatch(at(!0));
                                    })
                                    .catch(function (e) {
                                      return //console.log(e);
                                    });
                              })();
                        },
                        children: i
                          ? Object(V.jsx)(yn.d, { className: t.icon })
                          : Object(V.jsx)(yn.e, { className: t.icon }),
                      }),
                      Object(V.jsx)(ja.a, {
                        onClick: function () {
                          d
                            ? (!(function (e) {
                                var t = lt.getState().Video.localStream.id;
                                Bt({ roomId: e, streamId: t }),
                                  lt.dispatch({ type: "RESET_GROUP_DATA" }),
                                  ye.destroy(),
                                  mt(),
                                  vt();
                              })(window.location.pathname.split("/")[2]),
                              m.goBack())
                            : (//console.log(lt.getState().Video.callState),
                              lt.getState().Video.callState !== qe
                                ? (Ie.emit("user-ended-call", {
                                    recieverSocketId: Ce,
                                  }),
                                  It())
                                : (Ct(),
                                  lt.dispatch({ type: "RESET_CALL_DATA" })));
                        },
                        children: Object(V.jsx)(yn.a, { className: t.icon }),
                      }),
                      Object(V.jsx)(ja.a, {
                        onClick: d ? p : u,
                        children: Object(V.jsx)(vn.a, { className: t.icon }),
                      }),
                      d
                        ? Object(V.jsx)(ja.a, {
                            onClick: b,
                            children: Object(V.jsx)(On.a, {
                              className: t.icon,
                            }),
                          })
                        : null,
                    ],
                  })
                : null,
              h || c === Je
                ? null
                : Object(V.jsx)(ja.a, {
                    onClick: v,
                    children: Object(V.jsx)(fn.a, { className: t.icon }),
                  }),
              Object(V.jsx)(Sn, { show: f, close: v, currentUser: g }),
            ],
          });
        }),
        Rn = function (e) {
          return {
            root: {
              alignItems: "left",
              justifyContent: "left",
              margin: "0px",
              height: "100vh",
            },
            layout: {
              width: "100%",
              height: "100%",
              alignItems: "left",
              backgroundColor: "#1B1A1A",
              top: "100px",
            },
            gridLayout: {
              width: "120px",
              position: "absolute",
              display: "flex",
              justifyContent: "flex-end",
              bottom: "20px",
              left: "35px",
              height: "120px",
            },
            localVideoLayout: { width: "100%", height: "100%" },
            videoCallGridLayout: {
              height: "60vh",
              maxWidth: "100%",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(200px,40vmin),1fr))",
              gridAutoRows: "minmax(min(200px , 50vmin),1fr)",
              overFlowX: "auto",
              alignItems: "center",
            },
            videoGrid: {
              marginBottom: "10px",
              maxHeight: "60vh",
              maxWidth: "100%",
            },
            localVideoGrid: { marginTop: "10px" },
            button: {
              color: e.palette.white.main,
              backgroundColor: e.palette.dark.main,
              "&:hover": { backgroundColor: e.palette.dark.dark },
              "&:disabled": { border: "0" },
              marginTop: "20px",
              marginLeft: "20px",
            },
          };
        },
        In = a(398),
        Tn = function (e) {
          var t, a;
          return {
            root: {
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              overflow: "hidden",
              minHeight: 400,
            },
            gridList: { maxHeight: "50vh" },
            image: { width: "30px", height: "30px" },
            messageCard: {
              backgroundColor: "#ebebeb",
              display: "inline-block",
              padding: "10px",
            },
            messageCardRight: {
              marginLeft: "50%",
              backgroundColor: "#E9EAF6",
              display: "inline-block",
              padding: "10px",
            },
            imageLayout: { justifyContent: "right" },
            gridLayout: { alignItems: "right" },
            span: {
              color: "#5F5F5F",
              float: "right",
              fontSize: "12px",
              textDecoration: "transparent",
              fontWeight: 400,
            },
            gridItemRoot:
              ((t = {}),
              Object(z.a)(t, e.breakpoints.up("xl"), {
                marginBottom: "0!important",
              }),
              Object(z.a)(t, "width", "40%"),
              Object(z.a)(t, "position", "absolute"),
              Object(z.a)(t, "right", "2%"),
              Object(z.a)(t, "top", "20%"),
              t),
            gridItemRoot2:
              ((a = {}),
              Object(z.a)(a, e.breakpoints.up("xl"), {
                marginBottom: "0!important",
              }),
              Object(z.a)(a, "width", "70%"),
              Object(z.a)(a, "position", "absolute"),
              Object(z.a)(a, "right", "2%"),
              Object(z.a)(a, "top", "15%"),
              a),
            cardRoot: {
              boxShadow: G.boxShadow + "!important",
              border: "0!important",
            },
            searchInput: {
              color: "black",
              backgroundColor: "#ffffff",
              boxShadow: "none",
              padding: "10px",
              "&::placeholder": {
                color: e.palette.dark[200],
                fontSize: "1rem",
              },
              borderRadius: "20px 20px",
            },
            cardActions: { display: "inline" },
          };
        },
        En = Object(j.a)(Tn),
        Ln = function (e) {
          var t = e.user,
            a = e.directMessages,
            o = e.connectedUserId,
            i = En(),
            c = Object(n.useState)(""),
            s = Object(w.a)(c, 2),
            l = s[0],
            d = s[1],
            m = function (e) {
              if ((e.preventDefault(), "" !== l)) {
                var a = {
                  reciever: o,
                  name: t.name,
                  createdAt: Aa(Date.now()),
                  message: l,
                  userId: t.id,
                  userImage: t.image,
                };
                (n = a), Ie.emit("direct-message", n), d("");
              }
              var n;
            };
          return Object(V.jsx)(de.a, {
            item: !0,
            xs: 6,
            xl: 12,
            component: x.a,
            classes: { root: i.gridItemRoot + " " + i.order2 },
            children: Object(V.jsxs)(q.a, {
              className: i.root,
              children: [
                Object(V.jsx)(J.a, {
                  children: Object(V.jsx)(Ba.a, {
                    cellHeight: 35,
                    className: i.gridList,
                    cols: 1,
                    children: a.map(function (e, a) {
                      var n,
                        o = "left";
                      return (
                        e.userId === t.id && (o = "right"),
                        Object(V.jsx)(
                          r.a.Fragment,
                          {
                            children: Object(V.jsxs)(de.a, {
                              container: !0,
                              wrap: "nowrap",
                              spacing: 1,
                              style: { margin: "10px 5px", height: "auto" },
                              className: i.gridLayout,
                              children: [
                                "left" === o
                                  ? Object(V.jsx)(de.a, {
                                      item: !0,
                                      children: Object(V.jsx)(R.a, {
                                        alt: "avatar",
                                        src: e.userImage,
                                        className: i.image,
                                      }),
                                    })
                                  : null,
                                Object(V.jsx)(de.a, {
                                  className:
                                    "right" === o
                                      ? i.messageCardRight
                                      : i.messageCard,
                                  item: !0,
                                  zeroMinWidth: !0,
                                  alignItems: "flex-end",
                                  direction: "reverse",
                                  justify: "flex-end",
                                  xs: 6,
                                  children: Object(V.jsxs)(x.a, {
                                    children: [
                                      Object(V.jsxs)("h4", {
                                        style: { margin: 0 },
                                        children: [
                                          e.name,
                                          " ",
                                          Object(V.jsx)("span", {
                                            className: i.span,
                                            children: e.createdAt,
                                          }),
                                        ],
                                      }),
                                      Object(V.jsx)("p", {
                                        style: { margin: "0px" },
                                        dangerouslySetInnerHTML: {
                                          __html:
                                            ((n = e.message),
                                            n.replace(
                                              /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi,
                                              function (e) {
                                                return '<a href="'
                                                  .concat(
                                                    e,
                                                    '" target="_blank"> '
                                                  )
                                                  .concat(e, " </a>");
                                              }
                                            )),
                                        },
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          },
                          a
                        )
                      );
                    }),
                  }),
                }),
                Object(V.jsx)(In.a, {
                  className: i.cardActions,
                  children: Object(V.jsx)(aa.a, {
                    children: Object(V.jsx)(ra.a, {
                      variant: "filled",
                      width: "100%",
                      style: { marginBottom: "1rem!important" },
                      required: !0,
                      children: Object(V.jsx)(Ta.a, {
                        style: {
                          paddingLeft: "0.75rem",
                          paddingRight: "0.75rem",
                          width: "100%",
                        },
                        type: "text",
                        required: !0,
                        autoComplete: "off",
                        classes: { input: i.searchInput },
                        placeholder: "Write Your Message",
                        id: "message",
                        onChange: function (e) {
                          d(e.target.value);
                        },
                        value: l,
                        disableUnderline: !0,
                        endAdornment: Object(V.jsx)(Ea.a, {
                          position: "end",
                          children: Object(V.jsx)(ja.a, {
                            onClick: function (e) {
                              m(e);
                            },
                            style: { border: "0", padding: "7px" },
                            disabled: "" === l,
                            children: Object(V.jsx)(Na.a, {
                              style: {
                                padding: "0",
                                width: "23px",
                                height: "23px",
                              },
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        Nn = Object(j.a)(Rn);
      var Bn = Object(h.b)(
          function (e) {
            var t = e.Video,
              a = e.User;
            return Object(s.a)(Object(s.a)({}, t), a);
          },
          function (e) {
            return {
              hideCallRejectedDialog: function (t) {
                return e($e(t));
              },
            };
          }
        )(function (e) {
          var t = Object(n.useRef)(),
            a = Object(n.useRef)(),
            r = Object(n.useState)(!1),
            o = Object(w.a)(r, 2),
            i = o[0],
            c = o[1],
            l = Nn(),
            d = e.localStream,
            m = e.remoteStream,
            p = e.directCallModal,
            u = e.callRejected,
            g = e.hideCallRejectedDialog,
            b = e.recieverUsername,
            h = e.callState;
          Object(n.useEffect)(
            function () {
              window.scrollBy(0, 40),
                d &&
                  (function () {
                    var e = t.current;
                    (e.srcObject = d),
                      (e.onloadedmetadata = function () {
                        e.play();
                      });
                  })();
            },
            [d]
          ),
            Object(n.useEffect)(
              function () {
                m &&
                  (function () {
                    var e = a.current;
                    (e.srcObject = m),
                      (e.onloadedmetadata = function () {
                        e.play();
                      });
                  })();
              },
              [m]
            );
          var j = Object(V.jsx)(de.a, {
              className: l.gridLayout,
              children: Object(V.jsx)("video", {
                className: l.videoLayout,
                ref: t,
                autoPlay: !0,
                muted: !0,
              }),
            }),
            x = Object(V.jsx)(de.a, {
              className: l.localVideoLayout,
              children: Object(V.jsx)("video", {
                className: l.localVideoLayout,
                ref: a,
                autoPlay: !0,
              }),
            });
          return Object(V.jsxs)(V.Fragment, {
            children: [
              h === qe
                ? Object(V.jsx)(de.a, {
                    xs: 6,
                    children: Object(V.jsx)(I.a, {
                      onClick: function () {
                        !(function () {
                          var e = { callerSocketId: Ce, answer: gt };
                          lt.dispatch(Xe(Je)), Ie.emit("pre-offer-answer", e);
                        })();
                      },
                      className: l.button,
                      children: "ACCEPT",
                    }),
                  })
                : null,
              j,
              m ? x : null,
              u.rejected
                ? Object(V.jsx)(hn, {
                    reason: u.reason,
                    hideCallRejectedDialog: g,
                  })
                : null,
              p ? Object(V.jsx)(xn, { recieverUsername: b }) : null,
              Object(V.jsx)(
                An,
                Object(s.a)(
                  Object(s.a)({}, e),
                  {},
                  {
                    handleChat: function () {
                      c(!i);
                    },
                  }
                )
              ),
              Object(V.jsx)(de.a, {
                children: i ? Object(V.jsx)(Ln, Object(s.a)({}, e)) : null,
              }),
            ],
          });
        }),
        Mn = function (e) {
          return {
            gridVideo: {
              maxHeight: "100%",
              maxWidth: "100%",
              height: "100%",
              margin: "auto",
              padding: "10px 10px",
              boxSizing: "border-box",
              objectFit: "contain",
              transition: "0.4s ease-in-out",
            },
            video: { maxWidth: "100%", maxHeight: "60vh" },
          };
        },
        Dn = Object(j.a)(Mn),
        Fn = function (e) {
          var t = e.incomingStream,
            a = (e.index, Object(b.a)(e, ["incomingStream", "index"]), Dn()),
            r = Object(n.useRef)();
          return (
            Object(n.useEffect)(
              function () {
                !(function () {
                  var e = r.current;
                  (e.srcObject = t),
                    (e.onloadedmetadata = function () {
                      e.play();
                    });
                })();
              },
              [t]
            ),
            Object(V.jsx)("div", {
              className: a.gridVideo,
              children: Object(V.jsx)("video", {
                ref: r,
                autoPlay: !0,
                className: a.video,
              }),
            })
          );
        },
        zn = Object(j.a)(Rn),
        Un = function (e) {
          var t = zn(),
            a = e.teamMeetingStreams;
          return Object(V.jsx)("div", {
            className: t.videoCallGridLayout,
            children: a.map(function (e, t) {
              return Object(V.jsx)(Fn, { incomingStream: e }, e.id);
            }),
          });
        },
        Vn = Object(j.a)(Tn),
        Hn = function (e) {
          var t = e.groupMessages,
            a = e.user,
            o = Vn(),
            i = Object(u.h)(),
            c = Object(n.useState)(""),
            s = Object(w.a)(c, 2),
            l = s[0],
            d = s[1],
            m = function (e) {
              (e.preventDefault(), "" !== l) &&
                (!(function (e) {
                  Ie.emit("group-message", e);
                })({
                  roomId: window.location.pathname.split("/")[2],
                  userName: a.name,
                  createdAt: Date.now(),
                  message: l,
                  userId: a.id,
                  userImage: a.image,
                  teamId: i.state.teamId,
                }),
                d(""));
            };
          return Object(V.jsx)(de.a, {
            item: !0,
            xs: 6,
            xl: 12,
            component: x.a,
            classes: { root: o.gridItemRoot + " " + o.order2 },
            children: Object(V.jsxs)(q.a, {
              className: o.root,
              children: [
                Object(V.jsx)(J.a, {
                  children: Object(V.jsx)(Ba.a, {
                    cellHeight: 35,
                    className: o.gridList,
                    cols: 1,
                    children: t.map(function (e, t) {
                      var n,
                        i = "left";
                      return (
                        e.userId === a.id && (i = "right"),
                        Object(V.jsx)(
                          r.a.Fragment,
                          {
                            children: Object(V.jsxs)(de.a, {
                              container: !0,
                              wrap: "nowrap",
                              spacing: 1,
                              style: { margin: "10px 5px", height: "auto" },
                              className: o.gridLayout,
                              children: [
                                "left" === i
                                  ? Object(V.jsx)(de.a, {
                                      item: !0,
                                      children: Object(V.jsx)(R.a, {
                                        alt: "avatar",
                                        src: e.userImage,
                                        className: o.image,
                                      }),
                                    })
                                  : null,
                                Object(V.jsx)(de.a, {
                                  className:
                                    "right" === i
                                      ? o.messageCardRight
                                      : o.messageCard,
                                  item: !0,
                                  zeroMinWidth: !0,
                                  alignItems: "flex-end",
                                  direction: "reverse",
                                  justify: "flex-end",
                                  xs: 6,
                                  children: Object(V.jsxs)(x.a, {
                                    children: [
                                      Object(V.jsxs)("h4", {
                                        style: { margin: 0 },
                                        children: [
                                          e.userName,
                                          " ",
                                          Object(V.jsx)("span", {
                                            className: o.span,
                                            children: Aa(e.createdAt),
                                          }),
                                        ],
                                      }),
                                      Object(V.jsx)("p", {
                                        style: { margin: "0px" },
                                        dangerouslySetInnerHTML: {
                                          __html:
                                            ((n = e.message),
                                            n.replace(
                                              /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi,
                                              function (e) {
                                                return '<a href="'
                                                  .concat(
                                                    e,
                                                    '" target="_blank"> '
                                                  )
                                                  .concat(e, " </a>");
                                              }
                                            )),
                                        },
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          },
                          t
                        )
                      );
                    }),
                  }),
                }),
                Object(V.jsx)(In.a, {
                  className: o.cardActions,
                  children: Object(V.jsx)(aa.a, {
                    children: Object(V.jsx)(ra.a, {
                      variant: "filled",
                      width: "100%",
                      style: { marginBottom: "1rem!important" },
                      required: !0,
                      children: Object(V.jsx)(Ta.a, {
                        style: {
                          paddingLeft: "0.75rem",
                          paddingRight: "0.75rem",
                          width: "100%",
                        },
                        type: "text",
                        required: !0,
                        autoComplete: "off",
                        classes: { input: o.searchInput },
                        placeholder: "Write Your Message",
                        id: "message",
                        onChange: function (e) {
                          d(e.target.value);
                        },
                        value: l,
                        disableUnderline: !0,
                        endAdornment: Object(V.jsx)(Ea.a, {
                          position: "end",
                          children: Object(V.jsx)(ja.a, {
                            onClick: function (e) {
                              m(e);
                            },
                            style: { border: "0", padding: "7px" },
                            disabled: "" === l,
                            children: Object(V.jsx)(Na.a, {
                              style: {
                                padding: "0",
                                width: "23px",
                                height: "23px",
                              },
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        Pn = (a(305), Object(j.a)(Tn)),
        Wn = function (e) {
          e.imageData, e.user;
          var t = Pn(),
            a = Object(n.useRef)(),
            r = Object(n.useRef)(null);
          return (
            Object(n.useEffect)(function () {
              var e = a.current,
                t = (r.current, e.getContext("2d")),
                n = document.getElementsByClassName("color");
              //console.log(n);
              for (
                var o = { color: "black" },
                  i = function (e) {
                    //console.log(e),
                      (o.color = e.target.className.split(" ")[1]);
                  },
                  c = 0;
                c < n.length;
                c++
              )
                n[c].addEventListener("click", i, !1);
              var s = !1,
                l = function (a, n, r, o, i, c) {
                  var s = e.getBoundingClientRect();
                  if (
                    (t.beginPath(),
                    t.moveTo(a - s.x, n - s.y),
                    t.lineTo(r - s.x, o - s.y),
                    (t.strokeStyle = i),
                    (t.lineWidth = 4),
                    t.stroke(),
                    t.closePath(),
                    c)
                  ) {
                    var l = e.width,
                      d = e.height,
                      m = window.location.pathname.split("/")[2];
                    Ie.emit("drawing", {
                      x0: a / l,
                      y0: n / d,
                      x1: r / l,
                      y1: o / d,
                      color: i,
                      roomId: m,
                    });
                  }
                },
                d = function (e) {
                  (s = !0),
                    (o.x = e.clientX || e.touches[0].clientX),
                    (o.y = e.clientY || e.touches[0].clientY);
                },
                m = function (t) {
                  if (s) {
                    e.getBoundingClientRect();
                    l(
                      o.x,
                      o.y,
                      t.clientX || t.touches[0].clientX,
                      t.clientY || t.touches[0].clientY,
                      o.color,
                      !0
                    ),
                      (o.x = t.clientX || t.touches[0].clientX),
                      (o.y = t.clientY || t.touches[0].clientY);
                  }
                },
                p = function (t) {
                  if (s) {
                    e.getBoundingClientRect();
                    (s = !1),
                      l(
                        o.x,
                        o.y,
                        t.clientX || t.touches[0].clientX,
                        t.clientY || t.touches[0].clientY,
                        o.color,
                        !0
                      ),
                      (o.x = t.clientX || t.touches[0].clientX),
                      (o.y = t.clientY || t.touches[0].clientY);
                  }
                },
                u = function (e, t) {
                  var a = new Date().getTime();
                  return function () {
                    var n = new Date().getTime();
                    n - a >= t && ((a = n), e.apply(null, arguments));
                  };
                };
              e.addEventListener("mousedown", d, !1),
                e.addEventListener("mouseup", p, !1),
                e.addEventListener("mouseout", p, !1),
                e.addEventListener("mousemove", u(m, 100), !1),
                e.addEventListener("touchstart", d, !1),
                e.addEventListener("touchend", p, !1),
                e.addEventListener("touchcancel", p, !1),
                e.addEventListener("touchmove", u(m, 100), !1);
              var g = function () {
                if (document.getElementById("cardContent")) {
                  var t = document.getElementById("cardContent").clientWidth,
                    a = document.getElementById("cardContent").clientHeight;
                  (e.width = t), (e.height = a);
                }
              };
              window.addEventListener("resize", g, !1), g();
              Ie.on("drawing", function (t) {
                return (function (t) {
                  var a = e.width,
                    n = e.height;
                  l(t.x0 * a, t.y0 * n, t.x1 * a, t.y1 * n, t.color);
                })(t);
              });
            }, []),
            Object(V.jsx)(de.a, {
              item: !0,
              xs: 12,
              xl: 12,
              component: x.a,
              classes: { root: t.gridItemRoot2 + " " + t.order2 },
              children: Object(V.jsxs)(q.a, {
                className: t.root,
                children: [
                  Object(V.jsx)(J.a, {
                    style: { backgroundColor: "#1976D2" },
                    id: "cardContent",
                    children: Object(V.jsx)("canvas", {
                      ref: a,
                      className: "whiteboard",
                    }),
                  }),
                  Object(V.jsx)(In.a, {
                    children: Object(V.jsxs)("div", {
                      ref: r,
                      className: "colors",
                      children: [
                        Object(V.jsx)("div", { className: "color black" }),
                        Object(V.jsx)("div", { className: "color red" }),
                        Object(V.jsx)("div", { className: "color green" }),
                        Object(V.jsx)("div", { className: "color blue" }),
                        Object(V.jsx)("div", { className: "color yellow" }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          );
        },
        Qn = Object(j.a)(Rn);
      var Gn = Object(h.b)(function (e) {
          var t = e.Video,
            a = e.User;
          return Object(s.a)(Object(s.a)({}, t), a);
        }, null)(function (e) {
          var t = Object(n.useRef)(),
            a = Qn(),
            r = Object(n.useState)(!1),
            o = Object(w.a)(r, 2),
            i = o[0],
            c = o[1],
            l = Object(n.useState)(!1),
            d = Object(w.a)(l, 2),
            m = d[0],
            p = d[1],
            u = e.localStream,
            g = e.isTeamMeetingPresent,
            b = e.user,
            h = e.groupMessages,
            j = e.imageData;
          Object(n.useEffect)(
            function () {
              u &&
                (window.scrollBy(0, 60),
                (function () {
                  var e = t.current;
                  (e.srcObject = u),
                    (e.onloadedmetadata = function () {
                      e.play();
                    });
                })());
            },
            [u]
          );
          var x = Object(V.jsx)(de.a, {
            className: a.gridLayout,
            children: Object(V.jsx)("video", {
              className: a.videoLayout,
              ref: t,
              autoPlay: !0,
              muted: !0,
            }),
          });
          return Object(V.jsxs)(de.a, {
            container: !0,
            direction: "column",
            spacing: 3,
            children: [
              Object(V.jsx)(de.a, {
                xs: 6,
                children:
                  !g &&
                  Object(V.jsx)(I.a, {
                    onClick: function () {
                      var e = window.location.pathname.split("/")[2];
                      //console.log(e),
                        (function (e) {
                          var t = lt.getState().User.user;
                          Nt({ roomId: e, peerId: we, user: t }),
                            lt.dispatch(Xe(Je)),
                            lt.dispatch({
                              type: "SET_START_GROUP_CALL",
                              active: !0,
                            });
                        })(e);
                    },
                    className: a.button,
                    children: "JOIN",
                  }),
              }),
              Object(V.jsx)(de.a, {
                className: a.videoGrid,
                children: g && Object(V.jsx)(Un, Object(s.a)({}, e)),
              }),
              Object(V.jsxs)(de.a, {
                className: a.localVideoGrid,
                children: [
                  x,
                  Object(V.jsx)(
                    An,
                    Object(s.a)(
                      Object(s.a)({}, e),
                      {},
                      {
                        groupCall: !0,
                        showChat: function () {
                          c(function (e) {
                            return !e;
                          });
                        },
                        showBoardGrid: function () {
                          p(function (e) {
                            return !e;
                          });
                        },
                      }
                    )
                  ),
                  Object(V.jsxs)(de.a, {
                    children: [
                      i
                        ? Object(V.jsx)(Hn, { user: b, groupMessages: h })
                        : null,
                      m ? Object(V.jsx)(Wn, { imageData: j, user: b }) : null,
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        _n = Object(j.a)(Rn),
        Yn = function (e) {
          e.user;
          var t = e.history,
            a = _n(),
            r = Object(n.useState)(!0),
            o = Object(w.a)(r, 2),
            i = o[0],
            c = o[1],
            s = Object(n.useState)(!0),
            l = Object(w.a)(s, 2),
            d = l[0],
            m = l[1],
            p = function () {
              3 === window.location.pathname.split("/").length && m(!1), c(!1);
            };
          return (
            Object(n.useEffect)(function () {
              0 === Ut().length
                ? C.a
                    .get("/api/v1/turnCredentials")
                    .then(function (e) {
                      //console.log(e.data.token.iceServers),
                        Vt(e.data.token.iceServers),
                        Ot(),
                        p();
                    })
                    .catch(function (e) {
                      Ot(), p(), //console.log(e);
                    })
                : (Ot(), p());
            }, []),
            Object(V.jsxs)(V.Fragment, {
              children: [
                Object(V.jsx)(qt, {}),
                i
                  ? Object(V.jsx)("div", {
                      style: {
                        display: "flex",
                        height: "100vh",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                      children: Object(V.jsxs)("div", {
                        style: { display: "flex", alignItems: "center" },
                        children: [
                          Object(V.jsx)(Zt.a, {}),
                          Object(V.jsx)("h3", {
                            style: { marginLeft: "20px" },
                            children: "Loading...",
                          }),
                        ],
                      }),
                    })
                  : Object(V.jsx)(de.a, {
                      sx: 12,
                      className: a.root,
                      children: Object(V.jsx)(de.a, {
                        className: a.layout,
                        children: d
                          ? Object(V.jsx)(Bn, { history: t })
                          : Object(V.jsx)(Gn, { history: t }),
                      }),
                    }),
              ],
            })
          );
        },
        qn = a(129),
        Jn = a.n(qn),
        Zn = a(197),
        Xn = a.n(Zn),
        Kn = a(198),
        $n = a.n(Kn),
        er = a(196),
        tr = a.n(er),
        ar = a(195),
        nr = [
          { divider: !0, show: !0, role: ["user", "admin", "Teacher"] },
          { title: "Activities", show: !0, role: ["user", "admin", "Teacher"] },
          {
            path: "teams",
            name: "Teams",
            icon: a.n(ar).a,
            iconColor: "Primary",
            component: ha,
            layout: "/",
            show: !0,
            role: ["user", "admin", "Teacher"],
          },
          {
            path: "team/:id",
            name: "Team",
            icon: tr.a,
            iconColor: "Primary",
            component: un,
            layout: "/",
            show: !1,
            role: ["user", "admin", "Teacher"],
          },
          {
            path: "call",
            name: "Call",
            icon: Jn.a,
            iconColor: "Primary",
            component: Yn,
            layout: "/",
            show: !1,
            exact: !0,
            role: ["user", "admin", "Teacher"],
          },
          { divider: !0, show: !1 },
          { title: "Documentation", show: !1 },
          {
            href: "https://www.creative-tim.com/learning-lab/material-ui/overview/argon-dashboard?ref=admui-admin-sidebar",
            name: "Getting started",
            icon: Xn.a,
            show: !1,
          },
          {
            href: "https://www.creative-tim.com/learning-lab/material-ui/colors/argon-dashboard?ref=admui-admin-sidebar",
            name: "Foundation",
            icon: $n.a,
            show: !1,
          },
          {
            href: "https://www.creative-tim.com/learning-lab/material-ui/alerts/argon-dashboard?ref=admui-admin-sidebar",
            name: "Components",
            icon: Jn.a,
            show: !1,
          },
        ],
        rr = function (e) {
          var t;
          return {
            mainContent:
              ((t = {}),
              Object(z.a)(t, e.breakpoints.up("md"), { marginLeft: "200px" }),
              Object(z.a)(t, "height", "100%"),
              t),
            containerRoot: Object(z.a)({}, e.breakpoints.up("md"), {
              paddingLeft: "39px",
              paddingRight: "39px",
            }),
          };
        },
        or = Object(j.a)(rr);
      var ir = Object(h.b)(
          function (e) {
            var t = e.Video,
              a = e.User;
            return Object(s.a)(Object(s.a)({}, t), a);
          },
          function (e) {
            return {
              setNotification: function (t) {
                return e(Qe(t));
              },
              clearTeamMeetingData: function () {
                return e(rt(null));
              },
            };
          }
        )(function (e) {
          var t = e.userdata,
            n = e.cookies,
            o = e.getUserAgain,
            i = e.logOut,
            c = Object(b.a)(e, [
              "userdata",
              "cookies",
              "getUserAgain",
              "logOut",
            ]),
            s = or(),
            l = Object(u.h)(),
            d = Object(u.g)(),
            m = c.callState,
            p = c.callerUsername,
            g = c.localStream,
            h = c.showNotifications,
            j = c.setNotification,
            f = c.clearTeamMeetingData,
            O = c.teamMeetingData;
          r.a.useEffect(
            function () {
              (document.documentElement.scrollTop = 0),
                (document.scrollingElement.scrollTop = 0);
            },
            [l]
          );
          var v;
          return Object(V.jsx)(V.Fragment, {
            children: Object(V.jsxs)(V.Fragment, {
              children: [
                Object(V.jsx)(ve, {
                  user: t,
                  history: d,
                  role: t.role,
                  routes: nr,
                  logo: {
                    innerLink: "/",
                    imgSrc: a(306).default,
                    imgAlt: "...",
                  },
                  dropdown: Object(V.jsx)(P, { user: t, logOut: i }),
                }),
                Object(V.jsxs)(x.a, {
                  position: "relative",
                  className: s.mainContent,
                  children: [
                    Object(V.jsx)(x.a, {
                      children: Object(V.jsx)(le, {
                        user: t,
                        cookies: n,
                        brandText: (function () {
                          for (var e = 0; e < nr.length; e++)
                            if (
                              -1 !==
                              l.pathname.indexOf(nr[e].layout + nr[e].path)
                            )
                              return nr[e].name;
                          return "";
                        })(l.pathname),
                        history: d,
                        logOut: i,
                        showNotifications: h,
                        setNotification: j,
                      }),
                    }),
                    m === qe
                      ? Object(V.jsx)(Qt, {
                          message: "Call from ".concat(p, " "),
                          show: !0,
                          localStream: g,
                          accept: function () {
                            "/call" !== l.pathname && d.push("/call");
                          },
                          reject: function () {
                            !(function () {
                              var e = { callerSocketId: Ce, answer: bt };
                              Ie.emit("pre-offer-answer", e), Ct();
                            })();
                          },
                        })
                      : null,
                    h
                      ? null
                      : Object(V.jsx)(Qt, {
                          message: "New Meeting started in ".concat(O.teamName),
                          show: !0,
                          localStream: g,
                          accept: function () {
                            j(!0);
                            var e = O.teamId;
                            d.push("/team/".concat(e)), f();
                          },
                          reject: function () {
                            j(!0), f();
                          },
                        }),
                    Object(V.jsxs)(u.d, {
                      children: [
                        ((v = nr),
                        v.map(function (e, a) {
                          return "/" === e.layout && e.role.includes(t.role)
                            ? Object(V.jsx)(
                                u.b,
                                {
                                  path: e.layout + e.path,
                                  render: function () {
                                    return Object(V.jsx)(e.component, {
                                      user: t,
                                      getUserAgain: o,
                                      history: d,
                                      cookies: n,
                                    });
                                  },
                                },
                                a
                              )
                            : null;
                        })),
                        Object(V.jsx)(u.a, { from: "*", to: "/teams" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        cr = a(200),
        sr = a.n(cr),
        lr = a(199),
        dr = a.n(lr),
        mr = a(201),
        pr = a.n(mr),
        ur = function (e) {
          return {
            listItemRoot: Object(z.a)(
              {
                display: "flex",
                alignItems: "center",
                fontSize: "1rem",
                paddingLeft: "1.25rem",
                paddingRight: "1.25rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                transition: "all .15s linear",
                fontWeight: "400",
                "& i": { marginRight: "0.25rem" },
              },
              e.breakpoints.up("md"),
              {
                marginRight: ".5rem",
                paddingLeft: ".5rem",
                paddingRight: ".5rem",
                color: e.palette.authNavbarLink.dark,
                justifyContent: "center",
                "&:hover": { color: e.palette.authNavbarLink.main },
              }
            ),
            headerImg: { verticalAlign: "middle", borderStyle: "none" },
            menuPaper: { width: "calc(100% - 2rem)" },
            outlineNone: { outline: "none!important" },
            flexDirectionColumn: Object(z.a)({}, e.breakpoints.down("md"), {
              flexDirection: "column",
            }),
          };
        },
        gr = Object(j.a)(ur);
      function br() {
        var e = gr(),
          t = (Object(Gt.a)(), Object(n.useState)(null)),
          a = Object(w.a)(t, 2),
          r = (a[0], a[1]),
          o = function () {
            r(null);
          };
        x.a,
          ue.a,
          e.flexDirectionColumn,
          ge.a,
          c.b,
          e.listItemRoot,
          x.a,
          dr.a,
          ge.a,
          c.b,
          e.listItemRoot,
          x.a,
          sr.a,
          ge.a,
          c.b,
          e.listItemRoot,
          x.a,
          pr.a,
          ge.a,
          c.b,
          e.listItemRoot,
          x.a,
          F.a;
        return Object(V.jsx)(V.Fragment, {
          children: Object(V.jsx)(f.a, {
            position: "absolute",
            color: "transparent",
            elevation: 0,
            children: Object(V.jsx)(v.a, {
              children: Object(V.jsx)(O.a, {
                display: "flex!important",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: ".75rem",
                component: x.a,
                maxWidth: "xl",
                children: Object(V.jsx)(x.a, {
                  color: "text.primary",
                  height: "30px",
                  className: e.header,
                  children: Object(V.jsx)("div", {
                    style: { fontSize: "22px" },
                  }),
                }),
              }),
            }),
          }),
        });
      }
      var hr = function (e) {
          return {
            header: {
              background:
                "linear-gradient(87deg," + e.palette.info.main + ",#1171ef)",
            },
          };
        },
        jr = Object(j.a)(hr),
        xr = function () {
          var e = jr(),
            t = Object(Gt.a)();
          return Object(V.jsx)(V.Fragment, {
            children: Object(V.jsxs)(x.a, {
              className: e.header,
              position: "relative",
              paddingTop: "8rem",
              paddingBottom: "8rem",
              children: [
                Object(V.jsx)(O.a, {
                  maxWidth: "xl",
                  children: Object(V.jsx)(x.a, {
                    marginBottom: "3rem",
                    textAlign: "center",
                    children: Object(V.jsx)(x.a, {
                      component: de.a,
                      container: !0,
                      justifyContent: "center",
                      color: t.palette.white.main,
                      children: Object(V.jsxs)(de.a, {
                        item: !0,
                        lg: 5,
                        md: 6,
                        xs: 8,
                        children: [
                          Object(V.jsxs)("h2", {
                            children: [
                              "Welcome to ",
                              Object(V.jsx)("i", { children: "TEAMS" }),
                            ],
                          }),
                          Object(V.jsx)(x.a, {
                            component: "p",
                            color: t.palette.gray[400],
                            lineHeight: "1.7",
                            fontSize: "1rem",
                            children: "Teams for all conversations",
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                Object(V.jsx)(x.a, {
                  position: "absolute",
                  zIndex: "100",
                  height: "70px",
                  top: "auto",
                  bottom: "0",
                  pointerEvents: "none",
                  left: "0",
                  right: "0",
                  width: "100%",
                  overflow: "hidden",
                  transform: "translateZ(0)",
                  children: Object(V.jsx)(x.a, {
                    bottom: "0",
                    position: "absolute",
                    pointerEvents: "none",
                    component: "svg",
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "none",
                    version: "1.1",
                    viewBox: "0 0 2560 100",
                    x: "0",
                    y: "0",
                    children: Object(V.jsx)(x.a, {
                      component: "polygon",
                      fill: t.palette.dark.main,
                      points: "2560 0 2560 100 0 100",
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        fr = function (e) {
          return {
            cardRoot: {
              boxShadow: G.boxShadow + "!important",
              border: "0!important",
              backgroundColor: e.palette.secondary.main,
            },
            cardHeader: { backgroundColor: "initial" },
            cardContent: Object(z.a)({}, e.breakpoints.up("md"), {
              padding: "3rem",
            }),
            buttonImg: { verticalAlign: "middle", borderStyle: "none" },
            buttonRoot: {
              backgroundColor: e.palette.white.main,
              color: e.palette.primary.main,
              boxShadow: G.buttonBoxShadowNeutral,
              borderColor: e.palette.white.main + "!important",
              "&:hover": {
                color: e.palette.gray[900],
                borderColor: e.palette.white.main + "!important",
                backgroundColor: e.palette.white.main,
              },
            },
            formControlLabelRoot: {
              position: "relative",
              display: "flex",
              minHeight: "1.5rem",
              WebkitPrintColorAdjust: "exact",
            },
            formControlLabelLabel: {
              cursor: "pointer",
              fontSize: ".875rem",
              position: "relative",
              verticalAlign: "top",
              display: "inline-block",
              color: e.palette.gray[600],
            },
            footerLinks: { color: e.palette.gray[400], textDecoration: "none" },
          };
        },
        Or = Object(j.a)(fr),
        vr = function (e) {
          var t = e.sucessLogin,
            r = e.load,
            o = Or(),
            i = Object(Gt.a)(),
            c = Object(n.useState)({ email: "", password: "" }),
            s = Object(w.a)(c, 2);
          s[0], s[1];
          return Object(V.jsx)(V.Fragment, {
            children: Object(V.jsx)(de.a, {
              item: !0,
              xs: 12,
              lg: 5,
              md: 7,
              children: Object(V.jsx)(q.a, {
                classes: { root: o.cardRoot },
                children: Object(V.jsx)(Z.a, {
                  className: o.cardHeader,
                  title: Object(V.jsx)(x.a, {
                    fontSize: "80%",
                    fontWeight: "400",
                    component: "small",
                    color: i.palette.gray[600],
                    children: "Sign in with your gmail account",
                  }),
                  titleTypographyProps: {
                    component: x.a,
                    textAlign: "center",
                    marginBottom: "1rem!important",
                    marginTop: ".5rem!important",
                    fontSize: "1rem!important",
                  },
                  subheader: Object(V.jsx)(x.a, {
                    textAlign: "center",
                    children: Object(V.jsx)(A.a, {
                      className: "google-login",
                      clientId:
                        "814516511786-nucvcmf3osa464saoshkeg2ma2slfuqa.apps.googleusercontent.com",
                      render: function (e) {
                        return Object(V.jsxs)(I.a, {
                          variant: "contained",
                          classes: { root: o.buttonRoot },
                          onClick: e.onClick,
                          children: [
                            Object(V.jsx)(x.a, {
                              component: "span",
                              marginRight: "4px",
                              children: Object(V.jsx)(x.a, {
                                alt: "...",
                                component: "img",
                                width: "20px",
                                className: o.buttonImg,
                                src: a(307).default,
                              }),
                            }),
                            Object(V.jsx)(x.a, {
                              component: "span",
                              marginLeft: ".75rem",
                              children: "Google",
                            }),
                          ],
                        });
                      },
                      onSuccess: function (e) {
                        r(!0),
                          C.a
                            .post(
                              "/api/v1/auth/login",
                              { tokenId: e.tokenId },
                              { withCredentials: !0 }
                            )
                            .then(function (e) {
                              t(e), r(!1);
                            })
                            .catch(function (e) {
                              //console.log(e), r(!1);
                            });
                      },
                      onFailure: function (e) {
                        alert("Please try again");
                      },
                      cookiePolicy: "single_host_origin",
                      icon: !1,
                      padding: 100,
                    }),
                  }),
                }),
              }),
            }),
          });
        },
        yr = function (e) {
          return { bgDefault: { backgroundColor: e.palette.dark.main } };
        },
        wr = Object(j.a)(yr),
        Sr = function (e) {
          var t = e.sucessLogin,
            a = e.load,
            n = wr(),
            o = r.a.useRef(null),
            i = Object(u.h)();
          r.a.useEffect(function () {
            return (
              document.body.classList.add(n.bgDefault),
              function () {
                document.body.classList.remove(n.bgDefault);
              }
            );
          }),
            r.a.useEffect(
              function () {
                (document.documentElement.scrollTop = 0),
                  (document.scrollingElement.scrollTop = 0),
                  (o.current.scrollTop = 0);
              },
              [i]
            );
          return Object(V.jsx)(V.Fragment, {
            children: Object(V.jsxs)("div", {
              className: "main-content",
              ref: o,
              children: [
                Object(V.jsx)(br, {}),
                Object(V.jsx)(xr, {}),
                Object(V.jsx)(O.a, {
                  component: x.a,
                  maxWidth: "xl",
                  marginTop: "-10rem",
                  paddingBottom: "3rem",
                  position: "relative",
                  zIndex: "101",
                  children: Object(V.jsx)(x.a, {
                    component: de.a,
                    container: !0,
                    justifyContent: "center",
                    children: Object(V.jsx)(vr, { sucessLogin: t, load: a }),
                  }),
                }),
              ],
            }),
          });
        },
        Cr = (function (e) {
          Object(m.a)(a, e);
          var t = Object(p.a)(a);
          function a() {
            var e;
            Object(l.a)(this, a);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = {
                isLoggedIn: !1,
                user: null,
                isLoading: !0,
                loggingOut: !1,
              }),
              (e.getServersFromBackend = function () {
                C.a
                  .get("/api/v1/turnCredentials")
                  .then(function (e) {
                    //console.log(e.data.token.iceServers),
                      Vt(e.data.token.iceServers),
                      mt();
                  })
                  .catch(function (e) {
                    mt(), //console.log(e);
                  });
              }),
              (e.getUser = function (t) {
                C.a
                  .get("/api/v1/user/profile")
                  .then(function (a) {
                    e.setState({
                      user: a.data.data.user,
                      isLoggedIn: t ? t.isLoggedIn : e.state.isLoggedIn,
                      isLoading: !1,
                    }),
                      jt(a.data.data.user),
                      e.getServersFromBackend();
                  })
                  .catch(function (t) {
                    //console.log(t), e.setState({ isLoading: !1 });
                  });
              }),
              (e.checkIsLoggedIn = function () {
                var t = e.props.cookies.cookies;
                t.userData ? e.getUser(t) : e.setState({ isLoading: !1 });
              }),
              (e.componentDidMount = function () {
                e.checkIsLoggedIn();
              }),
              (e.getLoggedInUser = function (t) {
                e.setState({ user: t.data.user, isLoggedIn: !0 }),
                  jt(t.data.user),
                  e.getServersFromBackend();
                var a = {
                    name: t.data.user.name,
                    email: t.data.user.email,
                    role: t.data.user.role,
                    image: t.data.user.image,
                  },
                  n = e.props.cookies;
                n.set("userData", a, {
                  path: "/",
                  expires: new Date(t.data.expireAt),
                }),
                  n.set("isLoggedIn", !0, {
                    path: "/",
                    expires: new Date(t.data.expireAt),
                  }),
                  n.set("JWTClient", t.data.token, {
                    path: "/",
                    expires: new Date(t.data.expireAt),
                  });
              }),
              (e.load = function (t) {
                e.setState({ isLoading: t });
              }),
              (e.logOut = function (t) {
                e.setState({ loggingOut: t });
              }),
              e
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(V.jsx)("div", {
                    children:
                      this.state.isLoading || this.state.loggingOut
                        ? this.state.loggingOut
                          ? Object(V.jsx)("div", {
                              style: {
                                display: "flex",
                                height: "100vh",
                                justifyContent: "center",
                                alignItems: "center",
                              },
                              children: Object(V.jsxs)("div", {
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                },
                                children: [
                                  Object(V.jsx)(Zt.a, {}),
                                  Object(V.jsx)("h3", {
                                    style: { marginLeft: "20px" },
                                    children: "Logging Out...",
                                  }),
                                ],
                              }),
                            })
                          : Object(V.jsx)("div", {
                              style: {
                                display: "flex",
                                height: "100vh",
                                justifyContent: "center",
                                alignItems: "center",
                              },
                              children: Object(V.jsxs)("div", {
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                },
                                children: [
                                  Object(V.jsx)(Zt.a, {}),
                                  Object(V.jsx)("h3", {
                                    style: { marginLeft: "20px" },
                                    children: "Loading...",
                                  }),
                                ],
                              }),
                            })
                        : Object(V.jsx)(V.Fragment, {
                            children:
                              this.state.isLoggedIn && this.state.user
                                ? Object(V.jsx)(c.a, {
                                    children: Object(V.jsxs)(u.d, {
                                      children: [
                                        Object(V.jsx)(u.b, {
                                          path: "/",
                                          render: function (t) {
                                            return Object(V.jsx)(
                                              ir,
                                              Object(s.a)(
                                                {
                                                  userdata: e.state.user,
                                                  cookies: e.props.cookies,
                                                  getUserAgain: e.getUser,
                                                  logOut: e.logOut,
                                                },
                                                t
                                              )
                                            );
                                          },
                                        }),
                                        Object(V.jsx)(u.a, {
                                          from: "/",
                                          to: "/user-profile",
                                        }),
                                      ],
                                    }),
                                  })
                                : Object(V.jsx)(Sr, {
                                    sucessLogin: this.getLoggedInUser,
                                    load: this.load,
                                  }),
                          }),
                  });
                },
              },
            ]),
            a
          );
        })(n.Component),
        kr = Object(g.a)(Cr),
        Ar = a(400),
        Rr = a(399),
        Ir = a(202),
        Tr = {
          marginBottom: ".5rem",
          fontFamily: "inherit",
          fontWeight: 600,
          lineHeight: 1.5,
          color: W.gray[800],
        },
        Er = Object(Ir.a)({
          breakpoints: {
            values: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
          },
          palette: Object(s.a)(
            Object(s.a)({}, W),
            {},
            {
              buttonLightLabel: { main: "rgba(" + Q(W.white.main) + ", 0.95)" },
              sidebarLinks: {
                main: "rgba(" + Q(W.black.main) + ", 0.5)",
                dark: "rgba(" + Q(W.black.main) + ", 0.9)",
              },
              adminNavbarSearch: { main: "rgba(" + Q(W.white.main) + ", 0.6)" },
              authNavbarLink: {
                main: "rgba(" + Q(W.white.main) + ", 0.65)",
                dark: "rgba(" + Q(W.white.main) + ", 0.95)",
              },
            }
          ),
          typography: {
            fontFamily: "Open Sans,sans-serif",
            h1: Object(s.a)({ fontSize: "1.625rem" }, Tr),
            h2: Object(s.a)({ fontSize: "1.25rem" }, Tr),
            h3: Object(s.a)({ fontSize: "1.0625rem" }, Tr),
            h4: Object(s.a)({ fontSize: ".9375rem" }, Tr),
            h5: Object(s.a)({ fontSize: ".8125rem" }, Tr),
            h6: Object(s.a)({ fontSize: ".625rem" }, Tr),
          },
          overrides: {
            MuiDrawer: {
              paper: {
                width: "200px",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              },
              paperAnchorDockedLeft: {
                borderRight: "none",
                boxShadow: G.boxShadow + "!important",
              },
              docked: { width: "250px" },
            },
            MuiListItem: {
              root: {
                display: "block",
                paddingTop: ".25rem",
                paddingBottom: ".25rem",
                color: W.gray[700],
              },
              gutters: { paddingLeft: ".75rem", paddingRight: ".75rem" },
            },
            MuiMenu: {
              paper: {
                minWidth: "12rem",
                fontSize: "1rem",
                color: W.gray[700],
                textAlign: "left",
                listStyle: "none",
                backgroundColor: W.white.main,
                backgroundClip: "padding-box",
                border: "0 solid rgba(" + Q(W.black.main) + ",.15)",
                borderRadius: ".4375rem",
                boxShadow: G.menuBoxShadow,
                padding: ".5rem 0",
              },
            },
            MuiMenuItem: {
              root: {
                padding: ".5rem 1rem",
                fontSize: ".875rem",
                display: "block",
                width: "100%",
                clear: "both",
                fontWeight: 400,
                color: W.gray[900],
                textAlign: "inherit",
                whiteSpace: "nowrap",
                backgroundColor: "initial",
                border: 0,
                "& i": {
                  marginRight: "1rem",
                  fontSize: "1rem",
                  verticalAlign: "-17%",
                },
              },
            },
            MuiFormLabel: {
              root: {
                color: W.gray[700],
                fontSize: ".875rem",
                fontWeight: "600",
                display: "inline-block",
                marginBottom: ".5rem",
              },
            },
            MuiFormGroup: { root: { marginBottom: "1.5rem" } },
            MuiInputBase: {
              input: {
                display: "block",
                width: "100%",
                height: "calc(1.5em + 1.25rem + 2px)",
                padding: ".625rem .75rem",
                fontWeight: 400,
                lineHeight: 1.5,
                color: W.gray[600],
                backgroundColor: W.white.main,
                backgroundClip: "padding-box",
                border: "1px solid #cad1d7",
                borderRadius: ".375rem",
                boxShadow: "none",
                transition: "all .2s cubic-bezier(.68,-.55,.265,1.55)",
                fontSize: ".875rem",
                boxSizing: "border-box",
              },
            },
            MuiInputLabel: {
              outlined: { transform: "translate(14px, 15px) scale(1)" },
            },
            MuiOutlinedInput: {
              input: {
                padding: ".625rem .75rem",
                borderTop: "0",
                borderBottom: "0",
                borderLeft: "0",
                "&:not(:last-child)": {
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  paddingRight: 0,
                },
              },
              root: { paddingRight: "0" },
            },
            MuiFilledInput: {
              underline: {
                "&:before": { display: "none" },
                "&:after": {
                  borderRadius: ".375rem",
                  height: "100%",
                  border: "2px solid " + W.primary.main,
                },
              },
              multiline: { padding: ".625rem .75rem" },
              root: {
                boxShadow: G.inputBoxShadow,
                border: 0,
                transition: "box-shadow .15s ease",
                borderRadius: ".375rem",
                position: "relative",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                width: "100%",
                backgroundColor: W.white.main + "!important",
              },
              input: {
                border: 0,
                boxShadow: "none",
                position: "relative",
                flex: "1 1 auto",
                width: "1%",
                minWidth: 0,
                marginBottom: 0,
                padding: ".625rem .75rem",
                "&:not(:first-child)": {
                  borderLeft: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                },
              },
              inputAdornedStart: { paddingLeft: ".75rem" },
              inputAdornedEnd: { paddingRight: ".75rem" },
            },
            MuiInputAdornment: {
              root: {
                transition: "all .2s cubic-bezier(.68,-.55,.265,1.55)",
                display: "flex",
                alignItems: "center",
                padding: ".625rem 0",
                marginBottom: "0",
                fontSize: ".875rem",
                fontWeight: "400",
                lineHeight: "1.5",
                color: W.gray[500],
                textAlign: "center",
                whiteSpace: "nowrap",
                backgroundColor: W.white.main,
                border: "0",
                marginTop: "0!important",
                height: "calc(1.5em + 1.25rem + 2px)",
              },
              positionEnd: { paddingLeft: 0 },
              positionStart: { paddingLeft: 0 },
              filled: {
                display: "flex",
                "&$positionStart": {
                  marginRight: "-1px",
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0",
                  border: "0",
                  boxShadow: "none",
                },
              },
            },
            MuiCheckbox: {
              root: {
                "& .MuiSvgIcon-root": { width: "1.5rem", height: "1.5rem" },
              },
            },
            MuiRadio: {
              root: {
                "& .MuiSvgIcon-root": { width: "1.5rem", height: "1.5rem" },
              },
            },
            MuiSwitch: {
              root: { width: "3.25rem", height: "1.5rem", padding: 0 },
              switchBase: {
                padding: "3px",
                "&$checked": {
                  transform: "translateX(28px)",
                  "& + $track": {
                    backgroundColor: W.transparent.main + "!important",
                    borderColor: W.primary.main,
                    opacity: 1,
                  },
                  "& $thumb": { backgroundColor: W.primary.main },
                },
              },
              checked: {},
              thumb: {
                width: "18px",
                height: "18px",
                boxShadow: "none",
                backgroundColor: W.gray[200],
              },
              track: {
                backgroundColor: W.transparent.main,
                border: "1px solid " + W.gray[400],
                opacity: 1,
                borderRadius: "34px",
              },
            },
            MuiCard: {
              root: {
                position: "relative",
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
                wordWrap: "break-word",
                backgroundColor: W.white.main,
                backgroundClip: "initial",
                border: "0",
                borderRadius: ".375rem",
                overflow: "unset",
              },
            },
            MuiCardHeader: {
              root: {
                padding: "1.25rem 1.5rem",
                marginBottom: "0",
                backgroundColor: W.white.main,
                borderBottom: "1px solid rgba(" + Q(W.black.main) + ",.05)",
                "&:first-child": {
                  borderRadius: "calc(.375rem - 1px) calc(.375rem - 1px) 0 0",
                },
              },
            },
            MuiCardContent: {
              root: { flex: "1 1 auto", minHeight: "1px", padding: "1rem" },
            },
            MuiCardActions: {
              root: {
                "&:last-child": {
                  borderRadius: "0 0 calc(.375rem - 1px) calc(.375rem - 1px)",
                  padding: "1.25rem 1.5rem",
                  backgroundColor: W.white.main,
                  borderTop: "1px solid rgba(" + Q(W.black.main) + ",.05)",
                },
              },
            },
            MuiButton: {
              root: {
                position: "relative",
                textTransform: "none",
                transition: "all .15s ease",
                letterSpacing: ".025em",
                fontSize: ".875rem",
                padding: ".625rem 1.25rem",
                willChange: "transform",
                border: "1px solid transparent",
                lineHeight: "1.5",
                borderRadius: ".375rem",
                userSelect: "none",
                display: "inline-block",
                fontWeight: "600",
                textAlign: "center",
                verticalAlign: "middle",
                boxShadow:
                  "0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)",
                "&:hover": {
                  boxShadow: G.buttonBoxShadow,
                  transform: "translateY(-1px)",
                },
              },
              text: { padding: ".625rem 1.25rem" },
              contained: {
                color: W.white.main,
                borderColor: W.dark.main,
                backgroundColor: W.dark.main,
                "&:hover": {
                  boxShadow: G.buttonBoxShadow,
                  backgroundColor: W.dark.dark,
                },
              },
              containedSizeSmall: {
                fontSize: ".75rem",
                padding: ".25rem .5rem",
                lineHeight: "1.5",
                borderRadius: ".375rem",
              },
              containedSizeLarge: {
                fontSize: ".875rem",
                lineHeight: 1.5,
                padding: ".875rem 1rem",
                borderRadius: ".4375rem",
              },
              containedPrimary: { borderColor: W.primary.main },
              containedSecondary: {
                borderColor: W.secondary.main,
                "&:hover": {
                  borderColor: W.gray[200],
                  backgroundColor: W.gray[200],
                },
              },
              outlined: {
                padding: ".625rem 1.25rem",
                color: W.dark.main,
                borderColor: W.dark.main,
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                  backgroundColor: W.dark.main,
                  color: W.white.main,
                },
              },
              outlinedSizeSmall: {
                fontSize: ".75rem",
                padding: ".25rem .5rem",
                lineHeight: "1.5",
                borderRadius: ".375rem",
              },
              outlinedSizeLarge: {
                fontSize: ".875rem",
                lineHeight: 1.5,
                padding: ".875rem 1rem",
                borderRadius: ".4375rem",
              },
              outlinedPrimary: {
                color: W.primary.main,
                borderColor: W.primary.main,
                "&:hover": { backgroundColor: W.primary.main },
              },
              outlinedSecondary: {
                color: W.secondary.btnOutline,
                borderColor: W.secondary.main,
                backgroundColor: W.transparent.main,
                "&:hover": {
                  borderColor: W.secondary.main,
                  backgroundColor: W.secondary.main,
                  color: W.gray[900],
                },
              },
            },
            MuiContainer: {
              root: {
                width: "100%",
                paddingRight: "15px",
                paddingLeft: "15px",
                marginRight: "auto",
                marginLeft: "auto",
              },
              maxWidthXs: {
                "@media (min-width: 576px)": { maxWidth: "540px" },
              },
              maxWidthSm: {
                "@media (min-width: 576px)": { maxWidth: "540px" },
              },
              maxWidthMd: {
                "@media (min-width: 768px)": { maxWidth: "720px" },
              },
              maxWidthLg: {
                "@media (min-width: 992px)": { maxWidth: "960px" },
              },
              maxWidthXl: {
                "@media (min-width: 1200px)": { maxWidth: "1140px" },
              },
            },
            MuiGrid: {
              item: { paddingRight: "15px", paddingLeft: "15px" },
              container: { width: "unset" },
            },
            MuiSvgIcon: { root: { width: "14px", height: "14px" } },
            MuiTable: {
              root: {
                width: "100%",
                marginBottom: "1rem",
                color: W.gray[700],
                backgroundColor: W.transparent.main,
                borderCollapse: "collapse",
              },
            },
            MuiTableCell: {
              root: {
                fontSize: ".8125rem",
                whiteSpace: "nowrap",
                padding: "1rem",
                verticalAlign: "top",
                borderTop: "1px solid " + W.gray[200],
                borderBottom: "1px solid " + W.gray[200],
              },
              head: {
                padding: "1rem",
                borderTop: "1px solid " + W.gray[200],
                fontWeight: "600",
                whiteSpace: "nowrap",
                verticalAlign: "bottom",
                paddingTop: ".75rem",
                paddingBottom: ".75rem",
                fontSize: ".65rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
                borderBottom: "1px solid " + W.gray[200],
              },
            },
            MuiLinearProgress: {
              root: {
                height: "8px",
                marginBottom: "1rem",
                overflow: "hidden",
                borderRadius: ".25rem",
                backgroundColor: W.gray[200] + "!important",
                boxShadow: G.linearProgressBoxShadow,
                display: "flex",
                lineHeight: "0",
                fontSize: ".75rem",
              },
              bar: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                overflow: "hidden",
                color: W.white.main,
                textAlign: "center",
                whiteSpace: "nowrap",
                transition: "width .6s ease",
                boxShadow: "none",
                borderRadius: 0,
                height: "auto",
              },
            },
            MuiAvatar: {
              root: {
                color: W.white.main,
                backgroundColor: W.gray[500],
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                borderRadius: "50%",
                height: "48px",
                width: "48px",
              },
              img: {
                width: "100%",
                borderRadius: "50%",
                verticalAlign: "middle",
                borderStyle: "none",
              },
            },
            MuiAvatarGroup: {
              avatar: {
                position: "relative",
                zIndex: "5!important",
                border: "2px solid " + W.white.main,
                marginLeft: "-.75rem",
                "&:hover": { zIndex: "6!important" },
              },
            },
            MuiPaginationItem: {
              root: {
                width: "36px",
                height: "36px",
                fontSize: ".875rem",
                color: W.gray[600],
                border: "1px solid " + W.gray[300],
                borderRadius: "50%",
                "&:hover": { backgroundColor: W.gray[300] },
              },
              outlined: {
                color: W.gray[600],
                border: "1px solid " + W.gray[300],
                "&:hover": { backgroundColor: W.gray[300] },
              },
              outlinedPrimary: {
                "&.Mui-selected": {
                  "&, &:hover": {
                    backgroundColor: W.primary.main + "!important",
                    color: W.white.main,
                    boxShadow: G.buttonBoxShadow,
                  },
                },
              },
              sizeLarge: {
                lineHeight: "46px",
                width: "46px",
                height: "46px",
                borderRadius: "50%",
              },
              sizeSmall: {
                lineHeight: "30px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
              },
            },
            MuiDivider: {
              root: { backgroundColor: "rgba(" + Q(W.black.main) + ", 0.1)" },
            },
            MuiSlider: {
              root: { height: "5px", borderRadius: "5px", padding: "15px 0" },
              rail: {
                height: "5px",
                borderRadius: "5px",
                backgroundColor: W.gray[300],
                boxShadow: G.sliderBoxShadow,
              },
              track: { height: "5px", borderRadius: "5px" },
              thumb: { width: "15px", height: "15px" },
            },
            MuiSnackbarContent: {
              root: {
                fontSize: ".875rem",
                position: "relative",
                marginBottom: "1rem",
                padding: "1rem 1.5rem",
                border: "1px solid transparent",
                borderRadius: ".375rem",
              },
              message: { padding: "0", display: "flex" },
            },
            MuiBadge: {
              root: {
                textDecoration: "none",
                "&[href] $badge:hover": {
                  color: W.white.main,
                  backgroundColor: W.dark.badgeBgHover,
                },
                "&[href] $colorPrimary:hover": {
                  backgroundColor: W.primary.badgeBgHover,
                },
                "&[href] $colorSecondary:hover": {
                  color: W.gray[900],
                  backgroundColor: W.secondary.badgeBgHover,
                },
                "&[href] $colorError:hover": {
                  backgroundColor: W.error.badgeBgHover,
                },
              },
              badge: {
                height: "unset",
                fontSize: "66%",
                fontWeight: "600",
                lineHeight: "1",
                display: "inline-block",
                padding: ".35rem .375rem",
                transition:
                  "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                textAlign: "center",
                verticalAlign: "baseline",
                whiteSpace: "nowrap",
                borderRadius: ".375rem",
                textTransform: "uppercase",
                border: "3px solid",
                color: W.white.main,
                backgroundColor: W.dark.badgeBg,
              },
              colorPrimary: {
                color: W.primary.badge,
                backgroundColor: W.primary.badgeBg,
              },
              colorSecondary: {
                color: W.gray[900],
                backgroundColor: W.secondary.main,
              },
              colorError: {
                color: W.error.badge,
                backgroundColor: W.error.badgeBg,
              },
            },
            MuiTooltip: {
              tooltip: {
                backgroundColor: W.black.main,
                maxWidth: "200px",
                padding: "0.25rem 0.5rem",
                textAlign: "center",
                borderRadius: "0.375rem",
                fontWeight: 400,
                lineHeight: 1.5,
                fontSize: "0.875rem",
              },
              arrow: { color: W.black.main },
            },
            MuiPopover: {
              paper: {
                padding: "0.5rem 0.95rem",
                color: W.gray[700],
                boxShadow: G.popoverBoxShadow,
              },
            },
            MuiTabs: {
              indicator: { display: "none" },
              scroller: { padding: ".5rem" },
            },
            MuiTab: {
              root: {
                fontSize: ".875rem",
                fontWeight: 500,
                padding: ".75rem 1rem",
                transition: "all .15s ease",
                boxShadow:
                  "0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)",
                borderRadius: ".375rem",
                display: "block",
                textAlign: "center",
                flex: "1 1 auto",
                maxWidth: "unset",
                "&$selected": {
                  color: W.white.main + "!important",
                  backgroundColor: W.primary.main + "!important",
                },
                "&:not(:last-child)": { marginRight: "1rem" },
                "& svg": {
                  width: "1rem!important",
                  height: "1rem!important",
                  position: "relative",
                  top: "2px",
                },
              },
              wrapper: { flexDirection: "row" },
              labelIcon: { minHeight: "unset", paddingTop: ".75rem" },
            },
            MuiTabPanel: { root: { padding: "0" } },
            MuiDialog: { paper: { width: "100%" } },
            MuiDialogContent: {
              root: {
                position: "relative",
                padding: "1.5rem",
                flex: "1 1 auto",
              },
            },
            MuiDialogActions: {
              root: {
                display: "flex",
                padding: "1.25rem",
                borderBottomRightRadius: ".4375rem",
                borderBottomLeftRadius: ".4375rem",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "flex-end",
              },
            },
          },
        }),
        Lr =
          (a(174),
          a(175),
          a(176),
          Object(g.a)(function () {
            return Object(V.jsx)(h.a, {
              store: lt,
              children: Object(V.jsxs)(Rr.a, {
                theme: Er,
                children: [
                  Object(V.jsx)(Ar.a, {}),
                  Object(V.jsx)(c.a, { children: Object(V.jsx)(kr, {}) }),
                ],
              }),
            });
          }));
      i.a.render(Object(V.jsx)(Lr, {}), document.querySelector("#root"));
    },
  },
  [[308, 1, 2]],
]);
//# sourceMappingURL=main.82bae1f8.chunk.js.map
