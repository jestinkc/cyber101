import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Schedule } from "./components/Schedule";
import { Speakers } from "./components/Speakers";
import { About } from "./components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "schedule", Component: Schedule },
      { path: "speakers", Component: Speakers },
      { path: "about", Component: About },
    ],
  },
]);
