import React from 'react';
import aliensLogo from '../../../assets/img/aliens.company.png';

const Experience = () => {
    return (
        <section className="page-section" style={{ minHeight: '100vh', padding: '150px 20px 100px', position: 'relative', zIndex: 1 }}>
            <div className="bg-text" style={{ top: '20%' }}></div>

            <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1, width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '80px', justifyContent: 'center' }}>
                    <div style={{
                        width: '60px', height: '60px', borderRadius: '16px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 0 30px rgba(0, 195, 255, 0.1)'
                    }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                    </div>
                    <h2 style={{
                        fontSize: '3rem', margin: 0, textTransform: 'uppercase',
                        letterSpacing: '3px', fontWeight: '800',
                        background: 'linear-gradient(90deg, #ffffff, #00e5ff)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 40px rgba(0, 229, 255, 0.3)'
                    }}>
                        Work Journey
                    </h2>
                </div>

                {/* Timeline Container */}
                <div style={{ position: 'relative', paddingLeft: '40px' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        bottom: '0',
                        width: '2px',
                        background: 'linear-gradient(to bottom, rgba(0, 229, 255, 0.5), rgba(255, 255, 255, 0.05))',
                        borderRadius: '2px'
                    }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>

                        {/* Job 1 */}
                        <div style={{ position: 'relative' }}>
                            {/* Timeline Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '-46px',
                                top: '40px',
                                width: '14px',
                                height: '14px',
                                borderRadius: '50%',
                                background: '#00e5ff',
                                boxShadow: '0 0 15px #00e5ff',
                                border: '3px solid #030303'
                            }}></div>

                            <div className="glass" style={{
                                padding: '40px',
                                borderRadius: '24px',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                                    e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.4)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 229, 255, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                {/* Subtle Glow Inside Card */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-50px',
                                    right: '-50px',
                                    width: '150px',
                                    height: '150px',
                                    background: 'radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%)',
                                    borderRadius: '50%',
                                    pointerEvents: 'none'
                                }}></div>

                                <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                                    <div style={{
                                        width: '90px', height: '90px', borderRadius: '20px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        overflow: 'hidden', background: '#0a0a0a', flexShrink: 0,
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
                                    }}>
                                        <img src={aliensLogo} alt="Aliens Company" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '10px' }}>
                                            <h3 style={{ fontSize: '1.8rem', margin: 0, color: '#fff', fontWeight: '700', letterSpacing: '-0.5px' }}>Aliens Company</h3>
                                            <span style={{
                                                fontSize: '0.85rem', color: '#00e5ff',
                                                border: '1px solid rgba(0, 229, 255, 0.3)',
                                                padding: '8px 20px', borderRadius: '30px',
                                                background: 'rgba(0, 229, 255, 0.05)',
                                                fontWeight: '600', letterSpacing: '1px'
                                            }}>2023 – PRESENT</span>
                                        </div>
                                        <p style={{ color: '#a0a0a0', margin: '0 0 20px 0', fontSize: '1.2rem', fontWeight: '500' }}>Web Designer / Frontend Developer</p>

                                        <div style={{ display: 'flex', gap: '25px', marginBottom: '30px', flexWrap: 'wrap' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#888', fontSize: '0.95rem' }}>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                Gurugram, Haryana
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#888', fontSize: '0.95rem' }}>
                                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00e5ff', display: 'inline-block', boxShadow: '0 0 10px #00e5ff' }}></span>
                                                Full-time
                                            </div>
                                        </div>

                                        <div style={{ marginBottom: '30px', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                                            <span style={{ fontSize: '0.85rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginRight: '5px' }}>Tech Stack:</span>
                                            {['HTML', 'CSS', 'JavaScript', 'PHP'].map(tech => (
                                                <span key={tech} style={{
                                                    fontSize: '0.8rem', padding: '6px 14px',
                                                    borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)',
                                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                                    color: '#d0d0d0'
                                                }}>{tech}</span>
                                            ))}
                                        </div>

                                        <ul style={{
                                            margin: 0, paddingLeft: '20px', color: '#b0b0b0',
                                            lineHeight: '1.9', display: 'flex', flexDirection: 'column',
                                            gap: '15px', fontSize: '1rem'
                                        }}>
                                            <li>Developed and maintained dynamic, responsive web applications, primarily focused on e-commerce solutions.</li>
                                            <li>Worked extensively with HTML, CSS, JavaScript, and basic PHP to build and enhance front-end and back-end functionality.</li>
                                            <li>Designed user-centric UI/UX interfaces to enhance user engagement and overall customer experience.</li>
                                            <li>Implemented secure authentication systems and integrated shopping cart functionality for scalable e-commerce platforms.</li>
                                            <li>Utilized Git for version control and deployed front-end projects using Netlify and Vercel.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Job 2 */}
                        <div style={{ position: 'relative' }}>
                            {/* Timeline Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '-46px',
                                top: '40px',
                                width: '14px',
                                height: '14px',
                                borderRadius: '50%',
                                background: '#555',
                                border: '3px solid #030303'
                            }}></div>

                            <div className="glass" style={{
                                padding: '40px',
                                borderRadius: '24px',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                                    <div style={{
                                        width: '90px', height: '90px', borderRadius: '20px',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        overflow: 'hidden', background: '#0a0a0a', flexShrink: 0,
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                                        filter: 'grayscale(100%)',
                                        opacity: '0.8'
                                    }}>
                                        <img src={aliensLogo} alt="Aliens School" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '10px' }}>
                                            <h3 style={{ fontSize: '1.8rem', margin: 0, color: '#ccc', fontWeight: '700', letterSpacing: '-0.5px' }}>Aliens School</h3>
                                            <span style={{
                                                fontSize: '0.85rem', color: '#888',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                padding: '8px 20px', borderRadius: '30px',
                                                background: 'rgba(255, 255, 255, 0.02)',
                                                fontWeight: '600', letterSpacing: '1px'
                                            }}>2021 – 2023</span>
                                        </div>
                                        <p style={{ color: '#888', margin: '0 0 20px 0', fontSize: '1.2rem', fontWeight: '500' }}>Web Developer / Designer</p>

                                        <div style={{ display: 'flex', gap: '25px', marginBottom: '30px', flexWrap: 'wrap' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#666', fontSize: '0.95rem' }}>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                Rajasthan, India
                                            </div>
                                        </div>

                                        <ul style={{
                                            margin: 0, paddingLeft: '20px', color: '#777',
                                            lineHeight: '1.9', display: 'flex', flexDirection: 'column',
                                            gap: '15px', fontSize: '1rem'
                                        }}>
                                            <li>Designed and managed the school website and digital assets.</li>
                                            <li>Ensured website responsiveness and optimized loading speeds.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
