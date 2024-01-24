import React from "react";

export const Home = React.lazy(() => import("./home/Home"));
export const Store = React.lazy(() => import("./store/Store"));
export const AboutUs = React.lazy(() => import("./aboutUs/About"));
export const ContactUs = React.lazy(() => import("./contact/ContactUs"));
export const Checkout = React.lazy(() => import("./checkout/Checkout"));
export const Login = React.lazy(() => import("./login/Login"));
export const Signup = React.lazy(() => import("./signup/SignUp"));
