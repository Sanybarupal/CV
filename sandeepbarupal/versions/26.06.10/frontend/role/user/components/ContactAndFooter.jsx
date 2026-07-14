import React from 'react';

const ContactAndFooter = () => {
    return (
        <section className="contact-footer-section" style={{ position: 'relative', zIndex: 1, width: '100%' }}>

            {/* CTA Banner */}
            <div style={{ padding: '80px 5vw', textAlign: 'center', position: 'relative' }}>
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    marginBottom: '15px',
                    fontWeight: '800',
                    letterSpacing: '-1px',
                    color: '#fff'
                }}>
                    Have a project in mind?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                    Let's collaborate to build something amazing. I'm currently available for freelance projects and new opportunities.
                </p>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '50px',
                    padding: '8px',
                    maxWidth: '500px',
                    margin: '0 auto',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
                }}>
                    <i className="fa-regular fa-envelope" style={{ padding: '0 20px', color: 'rgba(255,255,255,0.5)', fontSize: '18px' }}></i>
                    <input
                        type="email"
                        placeholder="Enter your email address..."
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#fff',
                            outline: 'none',
                            flex: 1,
                            fontSize: '16px',
                            padding: '12px 0'
                        }}
                    />
                    <button style={{
                        background: '#4ade80',
                        color: '#000',
                        border: 'none',
                        borderRadius: '50px',
                        padding: '16px 32px',
                        fontWeight: '700',
                        fontSize: '15px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 5px 15px rgba(74, 222, 128, 0.3)'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(74, 222, 128, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 5px 15px rgba(74, 222, 128, 0.3)';
                        }}>
                        Let's Talk
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer style={{
                padding: '80px 5vw 40px',
                width: '100%',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative'
            }}>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '80px' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '60px' }}>

                        {/* Brand / Left */}
                        <div style={{ maxWidth: '400px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #4ade80, #10b981)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: '20px', fontWeight: '900' }}>
                                    S
                                </div>
                                <span style={{ fontSize: '2rem', fontWeight: '800', letterSpacing: '-1px', color: '#fff' }}>sandeep.</span>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.6)', margin: '0 0 35px 0', fontSize: '1.1rem', lineHeight: '1.7' }}>Designing modern websites and digital experiences that help businesses grow online.</p>

                            {/* Social Icons */}
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <a href="https://github.com/Sanybarupal" target="_blank" rel="noreferrer" style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', transition: 'all 0.3s', fontSize: '20px' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                ><i className="fa-brands fa-github"></i></a>

                                <a href="https://www.linkedin.com/in/sandeep-barupal-a5b323321/?isSelfProfile=false" target="_blank" rel="noreferrer" style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', transition: 'all 0.3s', fontSize: '20px' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0, 119, 181, 0.2)'; e.currentTarget.style.color = '#0077b5'; e.currentTarget.style.borderColor = '#0077b5'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                ><i className="fa-brands fa-linkedin-in"></i></a>

                                <a href="https://x.com/sandeepbarupal_" target="_blank" rel="noreferrer" style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', transition: 'all 0.3s', fontSize: '20px' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(29, 161, 242, 0.2)'; e.currentTarget.style.color = '#1da1f2'; e.currentTarget.style.borderColor = '#1da1f2'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                ><i className="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>

                        {/* Contact Info / Right */}
                        <div>
                            <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '30px', fontWeight: '700' }}>Contact Info</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                <a href="mailto:sandeepaliens01@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '20px', transition: 'color 0.3s', fontSize: '1.05rem' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4ade80'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <i className="fa-regular fa-envelope" style={{ color: '#4ade80', fontSize: '18px' }}></i>
                                    </div>
                                    sandeepaliens01@gmail.com
                                </a>
                                <a href="tel:7878142323" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '20px', transition: 'color 0.3s', fontSize: '1.05rem' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4ade80'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <i className="fa-solid fa-phone" style={{ color: '#4ade80', fontSize: '18px' }}></i>
                                    </div>
                                    +91 7878 142323
                                </a>
                                <span style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '20px', fontSize: '1.05rem' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <i className="fa-solid fa-location-dot" style={{ color: '#4ade80', fontSize: '18px' }}></i>
                                    </div>
                                    India (Remote)
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Copyright */}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                        <p style={{ color: 'rgba(255,255,255,0.4)', margin: 0, fontSize: '0.95rem' }}>&copy; {new Date().getFullYear()} Sandeep Barupal. All Rights Reserved.</p>
                        <div style={{ display: 'flex', gap: '30px' }}>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>Privacy Policy</a>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default ContactAndFooter;
