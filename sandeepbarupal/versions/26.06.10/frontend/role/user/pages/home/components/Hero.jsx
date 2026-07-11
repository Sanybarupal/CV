import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section" style={{ padding: '80px 20px', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '20px 0', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="glass-tag" style={{ color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)', background: 'rgba(16, 185, 129, 0.05)' }}>
                        <i className="fa-solid fa-circle" style={{ fontSize: '10px', marginRight: '8px' }}></i> Available for Freelance
                    </span>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <a href="#" className="glass-tag" style={{ color: '#fff', textDecoration: 'none', background: 'transparent' }}><i className="fa-brands fa-github" style={{ fontSize: '1.2rem' }}></i></a>
                        <a href="#" className="glass-tag" style={{ color: '#fff', textDecoration: 'none', background: 'transparent' }}><i className="fa-brands fa-linkedin" style={{ fontSize: '1.2rem' }}></i></a>
                        <a href="#" className="glass-tag" style={{ color: '#fff', textDecoration: 'none', background: 'transparent' }}><i className="fa-brands fa-twitter" style={{ fontSize: '1.2rem' }}></i></a>
                    </div>
                </div>
                
                <div>
                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-1px' }}>
                        Hi, I'm Sandeep Kumar Barupal.
                    </h1>
                    <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: '#a0a0a0', fontWeight: '400', maxWidth: '800px', lineHeight: '1.5' }}>
                        I design modern websites and digital experiences that help businesses grow online.
                    </h2>
                </div>

                <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
                    <button className="btn btn-white" style={{ padding: '16px 40px', fontSize: '16px', fontWeight: '600', borderRadius: '30px' }}>Hire Me</button>
                    <button className="btn btn-white-outline" style={{ width: 'auto', marginTop: '0', padding: '16px 40px', fontSize: '16px', border: 'none', background: 'transparent', color: '#fff', borderRadius: '30px' }}>
                        <i className="fa-solid fa-download" style={{ marginRight: '8px' }}></i> Download Resume
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
