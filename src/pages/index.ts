import React from "react";

export const Home = React.lazy(() => import("./home/Home"));
export const Store = React.lazy(() => import("./store/Store"));
export const AboutUs = React.lazy(() => import("./aboutUs/About"));
export const ContactUs = React.lazy(() => import("./contact/ContactUs"));
