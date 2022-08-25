import React from 'react';
import './style.css';
import { Route, Routes, NavLink } from 'react-router-dom';
// import About from './components/About';
// import Home from './components/Home';
import LoginForm from './components/LoginForm';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <>
      <div className="top-section">
        <div className="nav-bar">
          <Navbar />
        </div>
        <div className="login-signup">
          <NavLink to="/signup">Signup</NavLink>
        </div>
      </div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="about" element={<About />} /> */}
        <Route path="signup" element={<LoginForm />} />
      </Routes>
    </>
  );
}
