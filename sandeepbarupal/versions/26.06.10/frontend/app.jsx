import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './role/user/pages/home/index.jsx';
import About from './role/user/pages/about/index.jsx';
import Work from './role/user/pages/work/index.jsx';
import Service from './role/user/pages/service/index.jsx';
import Plan from './role/user/pages/plan/index.jsx';
import Contact from './role/user/pages/contact/index.jsx';
import './role/user/style.css'; 

const Navbar = () => (
    <nav className="navbar glass-nav">
        <div className="logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/plan">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button className="btn btn-white">Download</button>
    </nav>
);

const App = () => (
    <BrowserRouter>
        <div className="bg-glow glow-blue"></div>
        <div className="bg-glow glow-bottom-blue"></div>
        <div className="bg-glow glow-green"></div>
        <Navbar />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/service" element={<Service />} />
                <Route path="/plan" element={<Plan />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
    </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
