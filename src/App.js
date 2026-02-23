import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Joey from './components/Joey';
import Project2 from './components/Project2';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casestudy-joey" element={<Joey />} />
          <Route path="/casestudy-project2" element={<Project2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

