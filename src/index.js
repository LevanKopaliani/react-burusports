import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";

const Applayout = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  [
    {
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Contact",
          element: <Contacts />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
      ],
    },
  ],
  { basename: "/react-burusports/" }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
