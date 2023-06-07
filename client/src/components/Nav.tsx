import { NavLink } from "react-router-dom";
import { Route } from "../router/routes";
import { useLayoutStore } from "../store/LayoutStore";

export const Nav = () => {
  const basename = useLayoutStore((state) => state.basename);

  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
      <div style={{ marginLeft: "2em" }}></div>
      <div className="container-fluid">
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
            <NavLink
              to={basename + Route.auth}
              style={{ color: "white", textDecoration: "none", margin: "auto" }}
            >
              Login
            </NavLink>
            <div style={{ marginLeft: "2em" }}></div>

            <NavLink
              to={Route.register}
              style={{
                color: "white",
                textDecoration: "none",
                margin: "auto",
              }}
            >
              Register
            </NavLink>
          </ul>

          <div></div>
        </div>
      </div>
    </nav>
  );
};
