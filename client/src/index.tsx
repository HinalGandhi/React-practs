import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feature from "./components/To-Do/To-Do";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Intro from "./components/Intro/intro";
import Page from "./components/404/404page";
import { PostsList } from "./components/features/records/recordList";
import './App.css';
import { Provider } from "react-redux";
import { store } from "./components/app/store";
import App from "../src/components/App"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/Records" element={<PostsList />} />
          <Route path="/Deploy" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/To-Do" element={<Feature />} />
          <Route path="*" element={<Page />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
