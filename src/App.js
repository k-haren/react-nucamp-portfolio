import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
import Home  from './components/Home';
import About from './components/About';
import Schools from './components/Schools';
import Merchandise from './components/Merchandise';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';


function App() {

  return (
    <div>
      <Navbar />
      
      <Home />
      <About />
      <Schools />
      <Merchandise />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
