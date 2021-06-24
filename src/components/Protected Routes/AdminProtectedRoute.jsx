import { Route, Redirect } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import _ from "lodash";

const AdminProtectedRoute = ({ component: Component, ...rest }) => {
  // const redux = useSelector((state) => state.user);
  // const Dispatch = useDispatch();

  // const _removeStore = async () => {
  //   Dispatch({ type: "GET_USER", payload: {} });
  // };

  // let user = _.isEmpty(redux);
  // if (user === false) {
  //   if (
  //     redux.isAdmin === true &&
  //     redux.email === "admin@gmail.com" &&
  //     redux.__na__ === true
  //   ) {
  //     // Nothing
  //   } else {
  //     _removeStore();
  //     user = true;
  //   }
  // }
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

export default AdminProtectedRoute;
