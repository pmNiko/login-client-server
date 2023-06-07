import { Form, Home, Register } from "../components";
import { PublicLayout } from "../layout/PublicLayout";
import ProtectedRoute from "./ProtectedRoute";

export const routes = [
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <PublicLayout />,
    children: [
      {
        index: "login",
        element: <Form />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];
