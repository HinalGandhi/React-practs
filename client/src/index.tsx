import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Feature from "./components/To-Do/To-Do";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Intro from "./components/Intro/intro";
import Page from "./components/404/404page";
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/To-Do" element={<Feature />} />
        <Route path="*" element={<Page />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
