import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import './App.css';
import Contactus from './Pages/Contactus';
import Aboutus from './Pages/Aboutus/Aboutus';
import S1 from './Pages/Service/S1';
import S2 from './Pages/Service/S2';
import S3 from './Pages/Service/S3';
import S4 from './Pages/Service/S4';
import S5 from './Pages/Service/S5';
import S6 from './Pages/Service/S6';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/brand-strategy" element={<S1 />} />
          <Route path="/digital-marketing" element={<S2 />} />
          <Route path="/web-development" element={<S3 />} />
          <Route path="/personal-branding" element={<S4 />} />
          <Route path="/sales-funnelng" element={<S5 />} />
          <Route path="/media-production" element={<S6 />} />





        </Routes>
      </div>
    </Router>
  );
}

export default App;
