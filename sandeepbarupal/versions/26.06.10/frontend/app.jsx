import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './role/user/pages/home/index.jsx';
import About from './role/user/pages/about/index.jsx';
import Experience from './role/user/pages/experience/index.jsx';
import Work from './role/user/pages/work/index.jsx';
import Service from './role/user/pages/service/index.jsx';
import Plan from './role/user/pages/plan/index.jsx';
import Contact from './role/user/pages/contact/index.jsx';
import Blog from './role/user/pages/blog/index.jsx';
import './role/user/style.css'; 

const Navbar = () => (
    <nav style={{
        position: 'fixed',
        top: '25px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1000px',
        padding: '12px 25px',
        background: 'rgba(7, 10, 8, 0.65)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
    }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4ade80"/>
                <path d="M2 17L12 22L22 17" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
            {['Home', 'About', 'Experience', 'Service', 'Blog', 'Contact'].map(item => (
                <li key={item}>
                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} style={{ 
                        color: 'rgba(255,255,255,0.6)', 
                        textDecoration: 'none', 
                        fontSize: '13px', 
                        fontWeight: '600',
                        transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                    >
                        {item}
                    </Link>
                </li>
            ))}
        </ul>
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
                <Route path="/experience" element={<Experience />} />
                <Route path="/work" element={<Work />} />
                <Route path="/service" element={<Service />} />
                <Route path="/plan" element={<Plan />} />
                <Route path="/blog" element={<Blog />} />
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
