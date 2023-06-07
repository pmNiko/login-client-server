import { NavLink } from "react-router-dom";
import { useLayoutStore } from "../store/LayoutStore";

export const Nav = () => {
  const path = useLayoutStore((state) => state.basename);

  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
      <div style={{ marginLeft: "2em" }}></div>
      <div className="container-fluid">
        <NavLink
          to={`${path}/`}
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
            <NavLink
              to={`${path}/auth`}
              style={{ color: "white", textDecoration: "none", margin: "auto" }}
            >
              Login
            </NavLink>
            <div style={{ marginLeft: "2em" }}></div>

            <NavLink
              to={`${path}/auth/register`}
              style={{
                color: "white",
                textDecoration: "none",
                margin: "auto",
              }}
            >
              Register
            </NavLink>
          </ul>
          <button>nada</button>
        </div>
      </div>
    </nav>
  );
};
