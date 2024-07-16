import React from "react";
import "./App.css";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.min.css";
import "./css/animate.css";
import {
  About,
  Contact,
  Event,
  Home,
  Menu,
  Services,
  PageNotFound,
  Cart,
  Blog,
} from "./components/pages/index";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event" element={<Event />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
