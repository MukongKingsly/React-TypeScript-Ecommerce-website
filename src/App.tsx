import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Home, Store, AboutUs, ContactUs } from "./pages";
import { Navbar } from "./components/navbar/Navbar";
import "./app.css";

function App() {
  return (
    <ShoppingCartProvider>
      <Suspense fallback={<Spinner animation="grow" />}>
        <Navbar />
        {/* <Container className="mb-4"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        {/* </Container> */}
      </Suspense>
    </ShoppingCartProvider>
  );
}

export default App;
