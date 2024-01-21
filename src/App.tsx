import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Home, Store, AboutUs, ContactUs } from "./pages";
import { Navbar } from "./components/navbar/Navbar";
import { Spinner } from "./components/spinner/Spinner";
import "./app.scss";

function App() {
  return (
    <ShoppingCartProvider>
      <Suspense fallback={<Spinner />}>
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
