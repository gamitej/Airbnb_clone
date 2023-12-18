import { lazy } from "react";
import { AppAuth } from "@/types/pages";
import { Navigate, useRoutes } from "react-router-dom";

// auth
import Login from "@/auth/Login";
import ProtectedRoute from "@/auth/ProtectedRoutes";

// lazy
const Home = lazy(() => import("@/pages/Home"));

const Router = (props: AppAuth) => {
  const route = useRoutes([
    {
      path: "/",
      element: <ProtectedRoute {...props} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },

    {
      path: "/auth",
      element: <Login {...props} />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return route;
};

export default Router;
