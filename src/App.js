import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Schools from "./components/Schools";
import Merchandise from "./components/Merchandise";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/schools" component={Schools} />
        <Route path="/merchandise" component={Merchandise} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

{
  /* <Home />
      <About />
      <Schools />
      <Merchandise />
      <Contacts />
      <Footer /> */
}
