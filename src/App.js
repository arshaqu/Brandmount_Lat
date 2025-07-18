import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import './App.css';
import './';
import Contactus from './Pages/Contactus';
import Aboutus from './Pages/Aboutus/Aboutus';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
