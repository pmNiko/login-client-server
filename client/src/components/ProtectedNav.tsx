import { NavLink } from "react-router-dom";
import { Route } from "../router/routes";
import { useAuthStore } from "../store/AuthStore";
import { useLayoutStore } from "../store/LayoutStore";

export const ProtectedNav = () => {
  const basename = useLayoutStore((state) => state.basename);
  const isAuth = useAuthStore((state) => state.isAuth);
  const reset = useAuthStore((state) => state.reset);

  const Nav = {
    home: `${basename + Route.root}`,
    login: `${basename + Route.auth}`,
  };

  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-info">
      <div style={{ marginLeft: "2em" }}></div>
      <div className="container-fluid">
        <NavLink
          to={Nav.home}
          style={{ color: "white", textDecoration: "none", margin: "auto" }}
        >
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div style={{ marginLeft: "2em" }}></div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <NavLink
            to={Nav.login}
            style={{ color: "white", textDecoration: "none", margin: "auto" }}
          >
            Login
          </NavLink> */}
            <div style={{ marginLeft: "2em" }}></div>
          </ul>

          <div>
            <NavLink
              hidden={!isAuth}
              to={Nav.login}
              style={{ color: "white", textDecoration: "none", margin: "auto" }}
              onClick={reset}
            >
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
