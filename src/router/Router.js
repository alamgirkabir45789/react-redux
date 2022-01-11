import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import Navigation from "../Layout/Navigation";
import About from "../views/about/form/About";
import LoginForm from "../views/account/login/form/LoginForm";
import SignUpForm from "../views/account/signup/form/SignUpForm";
import Contact from "../views/contact/list/index";
import Customer from "../views/customer/list/index";
import Error from "../views/error/form/Error";
import Home from "../views/home/form/Home";
import Final from "../views/modal-final/Final";
import Product from "../views/product/list/index";
import Test5 from "../views/test/Test5";
const Router = () => {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Navigation />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/contact",
          element: <Contact />,
        },

        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/final",
          element: <Final />,
        },
        {
          path: "/test5",
          element: <Test5 />,
        },
        {
          path: "/customer",
          element: <Customer />,
        },
        {
          path: "/sign-up",
          element: <SignUpForm />,
        },
        {
          path: "/login",
          element: <LoginForm />,
        },
        { path: "*", element: <Error /> },
      ],
    },
  ];

  // // The useRoutes() hook allows you to define your routes as JavaScript objects
  // // instead of <Routes> and <Route> elements. This is really just a style
  // // preference for those who prefer to not use JSX for their routes config.
  let element = useRoutes(routes);
  return (
    <div>
      {element}

      {/* <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
      </Routes> */}
    </div>
  );
};

export default Router;
