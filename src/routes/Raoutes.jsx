import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Categories from "../pages/Categories";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Gallery from "../pages/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "shop",
        element: <Shop />,
      },

      {
        path: "categories",
        element: <Categories />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
 {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);