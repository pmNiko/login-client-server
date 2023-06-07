import { Outlet } from "react-router-dom";
import { Nav } from "../components";

export const ProtectedLayout = () => {
  return (
    <>
      <Nav />
      <h4>Bienvenido usuario</h4>
      <Outlet />
    </>
  );
};
