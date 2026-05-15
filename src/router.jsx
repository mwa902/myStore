import { Route, Routes } from "react-router";
import Contact from "./components/contact";
import Home from "./home";
import About from "./components/about";
import Product from "./list/product";
import Cart from "./list/cart";
import Checkout from "./checkout";
import Login from "./login/login";
import Signup from "./login/signup";
import PageNull from "./pagenulll";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<PageNull />} />
    </Routes>
  );
}
