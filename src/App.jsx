import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Ui/Footer.jsx";
import Navbar2 from "./Ui/Header.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/Notfound.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Appointment from "./pages/Appointment.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./Scroll.jsx";
import Frames from "./Ui/Frames.jsx";
import Lenses from "./Ui/Lenses.jsx";
import { CartProvider } from "./store/cart.jsx"; // NEW
import Eyedrop from "./Ui/Eyedrop.jsx";
import Accessories from "./Ui/Accessories.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>{/* cart is now global & persistent */}
        <ScrollToTop />
        <Navbar2 />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route path="/shop" element={<Shop />}>
            <Route path="frames" element={<Frames />} />
            <Route path="eyedrop" element={<Eyedrop/>} />
            <Route path="lenses" element={<Lenses/>} />
            <Route path="accessories" element={<Accessories/>} />
          </Route>

          <Route path="/appointment" element={<Appointment />} />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
