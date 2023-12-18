import { Navigate } from "react-router-dom";
// types
import { AppAuth } from "@/types/pages";

const Login = (props: AppAuth) => {
  // ====  if user is logged in ======
  if (props.isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  /**
   * TSX
   */
  return <div>Login</div>;
};

export default Login;
