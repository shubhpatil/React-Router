import { Route, Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";
// import _ from "lodash";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // const redux = useSelector((state) => state.user);
  // let user = _.isEmpty(redux);
  let user = false;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
