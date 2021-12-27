import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../views/about/form/About";
import LoginForm from "../views/account/login/form/LoginForm";
import ContactForm from "../views/contact/form/ContactForm";
import Customer from '../views/customer/list/index';
import Home from '../views/home/form/Home';
import Product from '../views/product/list/index';
import ProtectedRoutes from "../views/protected/ProtectedRoutes";
const Router = () => {

  // let routes: RouteObject[] = [
  //   {
  //     path: "/",
  //     element: <Navigation />,
  //     children: [
  //       { index: true, element: <LoginForm /> },
  //       {
  //         path: "/contact",
  //         element: <Contact />,
  //       },

  //       {
  //         path: "/about",
  //         element: <About />,
  //       },
  //       {
  //         path: "/product",
  //         element: <Product />,
  //       },
  //       {
  //         path: "/customer",
  //         element: <Customer />,
  //       },
  //       {
  //         path: "/sign-up",
  //         element: <SignUpForm />,
  //       },
  //       {
  //         path: "/login",
  //         element: <LoginForm />,
  //       },
  //       { path: "*", element: <Error /> },
  //     ],
  //   },
  // ];

  // // The useRoutes() hook allows you to define your routes as JavaScript objects
  // // instead of <Routes> and <Route> elements. This is really just a style
  // // preference for those who prefer to not use JSX for their routes config.
  // let element = useRoutes( routes );
  return <div>
    {/* {element} */}

    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/login" element={<LoginForm />} />
      </Route>
    </Routes>
  </div>;
};

export default Router;
