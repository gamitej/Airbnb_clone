import { lazy } from "react";
import { AppAuth } from "@/types/pages";
import { Navigate, useRoutes } from "react-router-dom";

// auth
import ProtectedRoute from "@/auth/ProtectedRoutes";

// lazy
const Home = lazy(() => import("@/pages/home"));

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
      //   element: <Auth {...props} />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return route;
};

export default Router;
