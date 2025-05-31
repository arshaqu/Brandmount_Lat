import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import './App.css';
import './';
import Contactus from './Pages/Contactus';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contactus />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
