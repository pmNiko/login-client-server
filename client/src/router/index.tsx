import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

export const Navigation = ({ baseName = "" }: { baseName?: string }) => {
  const basename = { basename: baseName };
  const router = createBrowserRouter(routes, basename);
  return <RouterProvider router={router} />;
};
