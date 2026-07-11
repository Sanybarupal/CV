import React from 'react';

const ContactAndFooter = () => {
    return (
        <section className="contact-footer-section" style={{ position: 'relative', zIndex: 1 }}>
            
            {/* CTA Banner */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
                <div className="card glass" style={{ padding: '80px 40px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(168,85,247,0.15) 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px', fontWeight: '800', letterSpacing: '-1px' }}>Have a project in mind?</h2>
                    <p style={{ color: '#a0a0a0', fontSize: '1.2rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>Let's collaborate to build something amazing. I'm currently available for freelance projects and new opportunities.</p>
                    <button className="btn btn-white" style={{ padding: '18px 40px', fontSize: '18px', fontWeight: '600', borderRadius: '30px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                        Start a Project <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 20px 40px', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
                        <div style={{ maxWidth: '400px' }}>
                            <span style={{ fontSize: '1.8rem', fontWeight: '800', letterSpacing: '-1px', color: '#fff' }}>Sandeep Barupal</span>
                            <p style={{ color: '#a0a0a0', margin: '15px 0 25px 0', fontSize: '0.95rem', lineHeight: '1.6' }}>Designing modern websites and digital experiences that help businesses grow online.</p>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <a href="#" className="glass-tag" style={{ color: '#fff', textDecoration: 'none', background: 'rgba(255,255,255,0.05)' }}><i className="fa-brands fa-github"></i></a>
                                <a href="#" className="glass-tag" style={{ color: '#fff', textDecoration: 'none', background: 'rgba(255,255,255,0.05)' }}><i className="fa-brands fa-linkedin"></i></a>
                                <a href="#" className="glass-tag" style={{ color: '#fff', textDecoration: 'none', background: 'rgba(255,255,255,0.05)' }}><i className="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '20px' }}>Contact Info</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <a href="mailto:sandeepaliens01@gmail.com" style={{ color: '#a0a0a0', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', transition: 'color 0.3s' }}>
                                    <i className="fa-regular fa-envelope" style={{ color: '#3b82f6' }}></i> sandeepaliens01@gmail.com
                                </a>
                                <a href="tel:7878142323" style={{ color: '#a0a0a0', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', transition: 'color 0.3s' }}>
                                    <i className="fa-brands fa-whatsapp" style={{ color: '#10b981' }}></i> +91 7878142323
                                </a>
                                <span style={{ color: '#a0a0a0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <i className="fa-solid fa-location-dot" style={{ color: '#f59e0b' }}></i> India (Remote)
                                </span>
                            </div>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                        <p style={{ color: '#888', margin: 0, fontSize: '0.9rem' }}>&copy; 2026 Sandeep Barupal. All Rights Reserved.</p>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }}>Privacy Policy</a>
                            <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }}>Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default ContactAndFooter;
