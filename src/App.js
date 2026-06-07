import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Home from './components/Home';
import Joey from './components/Joey';
import Project2 from './components/Project2';
import NutriBeli from './components/NutriBeli';
import FieldMice from './components/FieldMice';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casestudy-joey" element={<Joey />} />
          <Route path="/casestudy-project2" element={<Project2 />} />
          <Route path="/casestudy-nutribeli" element={<NutriBeli />} />
          <Route path="/casestudy-fieldmice" element={<FieldMice />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

