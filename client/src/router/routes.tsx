import { Form, Home, Register } from "../components";
import { PublicLayout } from "../layout/PublicLayout";
import ProtectedRoute from "./ProtectedRoute";

export enum Route {
  root = "/",
  auth = "/auth",
  register = "register",
}

export const routes = [
  {
    path: Route.root,
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: Route.auth,
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Form />,
      },
      {
        path: Route.register,
        element: <Register />,
      },
    ],
  },
];
