import { Outlet } from "react-router-dom";
import { ProtectedNav } from "../components";

export const ProtectedLayout = () => {
  return (
    <>
      <ProtectedNav />
      <h4>Bienvenido usuario</h4>
      <Outlet />
    </>
  );
};
