import { Route, BrowserRouter, Switch, Redirect, Link } from "react-router-dom";
import RouterScroll from "./RouterScroll";
import ProtectedRoute from "../Protected Routes/ProtectedRoute";

// ROUTES
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";

function ReactRouter() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <RouterScroll />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <ProtectedRoute exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default ReactRouter;
