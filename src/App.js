import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ChangePassword from './pages/ChangePassword';
import Success from './pages/Success';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/" element={<ForgotPassword />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;