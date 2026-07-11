import React from 'react';

const SocialProof = () => {
    return (
        <section className="proof-section" style={{ padding: '80px 20px', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
                
                {/* Why Hire Me */}
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Why Hire Me?
                    </h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            { title: 'Fast Delivery', desc: 'Projects completed within the agreed timeframe without compromising quality.', icon: 'fa-solid fa-bolt', color: '#f59e0b' },
                            { title: 'Clean Code', desc: 'Maintainable, scalable, and well-documented codebase for future growth.', icon: 'fa-solid fa-code', color: '#3b82f6' },
                            { title: 'Modern UI', desc: 'Cutting-edge design trends tailored to your brand identity.', icon: 'fa-solid fa-wand-magic-sparkles', color: '#8b5cf6' },
                            { title: 'Responsive Design', desc: 'Flawless experience across all devices, from mobile to desktop.', icon: 'fa-solid fa-mobile-screen', color: '#10b981' },
                            { title: 'SEO Friendly', desc: 'Optimized structure to rank higher on search engines.', icon: 'fa-solid fa-magnifying-glass-chart', color: '#ef4444' },
                            { title: 'Long-Term Support', desc: 'Continuous updates and support even after project completion.', icon: 'fa-solid fa-headset', color: '#06b6d4' }
                        ].map((benefit, i) => (
                            <div key={i} className="card glass" style={{ padding: '30px', display: 'flex', gap: '20px', alignItems: 'flex-start', transition: 'transform 0.3s', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '15px', background: `rgba(${parseInt(benefit.color.slice(1,3),16)},${parseInt(benefit.color.slice(3,5),16)},${parseInt(benefit.color.slice(5,7),16)},0.1)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <i className={benefit.icon} style={{ fontSize: '24px', color: benefit.color }}></i>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px 0', color: '#fff' }}>{benefit.title}</h3>
                                    <p style={{ color: '#a0a0a0', margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        What Clients Say
                    </h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="card glass" style={{ padding: '40px' }}>
                                <div style={{ display: 'flex', gap: '5px', color: '#f59e0b', marginBottom: '20px' }}>
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                </div>
                                <p style={{ color: '#a0a0a0', lineHeight: '1.6', marginBottom: '30px', fontStyle: 'italic' }}>"Sandeep is an exceptional designer. He understood our requirements perfectly and delivered a stunning website that exceeded our expectations."</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fa-solid fa-user" style={{ color: '#fff' }}></i>
                                    </div>
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Client Name</h4>
                                        <span style={{ fontSize: '0.8rem', color: '#10b981' }}>CEO, Tech Startup</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SocialProof;
