import { Route, Redirect } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, isProtected, ...rest }) => {
  let user = false;
  if (isProtected) {
    const token = localStorage.getItem("token");
    if (token) {
      user = true;
    }
  } else {
    user = true;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...rest} {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoutes;
