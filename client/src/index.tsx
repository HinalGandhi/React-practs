import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Feature from "./components/features";
import About from "./components/about";
import Contact from "./components/contact";
import Intro from "./components/intro";
import Page from "./components/404page";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="*" element={<Page />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
