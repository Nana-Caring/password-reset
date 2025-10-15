import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResetPassword from './pages/ResetPassword';
import Success from './pages/Success';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/" element={<ResetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;