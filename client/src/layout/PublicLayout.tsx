import { Outlet } from "react-router-dom";
import { Nav } from "../components";

export const PublicLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
