import React from "react";
import "./App.css";
import { Navbar } from "./core/components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Services } from "./screens/Services";
import { AboutUs } from "./screens/AboutUs";
import { Contact } from "./screens/Contact";
import { Blog } from "./screens/Blog";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
