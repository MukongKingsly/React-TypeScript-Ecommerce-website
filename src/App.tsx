import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import {
  Home,
  Store,
  AboutUs,
  ContactUs,
  Checkout,
  Login,
  Signup,
} from "./pages";
import { Navbar } from "./components/navbar/Navbar";
import { Spinner } from "./components/spinner/Spinner";
import Footer from "./components/footer/Footer";
import "./app.scss";

function App() {
  return (
    <ShoppingCartProvider>
      <Suspense fallback={<Spinner />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Suspense>
    </ShoppingCartProvider>
  );
}

export default App;
