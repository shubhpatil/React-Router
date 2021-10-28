import Home from "../Home";
import About from "../About";
import Contact from "../Contact";

const Routes = [
  {
    path: "/",
    component: Home,
    isProtected: false,
  },
  {
    path: "/about",
    component: About,
    isProtected: false,
  },
  {
    path: "/contact",
    component: Contact,
    isProtected: true,
  },
];

export default Routes;
