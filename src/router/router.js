import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/Home";
import Project from "../pages/Project";
import Awwards from "../pages/Awwards";
import Testimonials from "../pages/Testimonials";
import Experience from "../pages/Experience";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/project", Component: Project },
      { path: "/awwards", Component: Awwards },
      { path: "/testimonials", Component: Testimonials },
      { path: "/experience", Component: Experience },
      { path: "/blog", Component: Blog },
      { path: "/contact", Component: Contact },
    ],
  },
]);

export default router
