import { Navigate } from "react-router-dom";
import { ProtectedLayout } from "../layout/ProtectedLayout";
import { useAuthStore } from "../store/AuthStore";
import { useLayoutStore } from "../store/LayoutStore";
import { Route } from "./routes";

const ProtectedRoute = () => {
  const basename = useLayoutStore((state) => state.basename);
  const token = useAuthStore((state) => state.token);

  if (!token) return <Navigate to={basename + Route.auth} />;

  return <ProtectedLayout />;
};

export default ProtectedRoute;
