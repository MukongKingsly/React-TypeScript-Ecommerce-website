import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Home, Store, AboutUs, ContactUs, Checkout } from "./pages";
import { Navbar } from "./components/navbar/Navbar";
import { Spinner } from "./components/spinner/Spinner";
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
        </Routes>
      </Suspense>
    </ShoppingCartProvider>
  );
}

export default App;
