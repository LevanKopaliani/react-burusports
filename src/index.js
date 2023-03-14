import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Account from "./pages/Account";
import Myorders from "./components/Myorders";
import ChangeEmail from "./components/ChangeEmail";
import ChangePassword from "./components/ChangePassword";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Products from "./pages/Products";

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
        {
          path: "/Cart",
          element: <Cart />,
        },
        {
          path: "/Order",
          element: <Order />,
        },
        {
          path: "/Registration",
          element: <Registration />,
        },
        {
          path: "/Product-details",
          element: <ProductDetails />,
        },
        {
          path: "/Products",
          element: <Products />,
        },
        {
          path: "/Account",
          element: <Account />,
          children: [
            {
              path: "/Account/",
              element: <Myorders />,
            },
            {
              path: "/Account/Change-email",
              element: <ChangeEmail />,
            },
            {
              path: "/Account/Change-password",
              element: <ChangePassword />,
            },
          ],
        },
      ],
    },
  ],
  { basename: "/react-burusports/" }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
