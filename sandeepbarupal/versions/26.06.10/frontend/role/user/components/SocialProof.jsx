import React from 'react';

const SocialProof = () => {
    const benefits = [
        { title: 'Fast Delivery', desc: 'Projects completed within the agreed timeframe without compromising quality.', icon: 'fa-solid fa-bolt', color: '#f59e0b' },
        { title: 'Clean Code', desc: 'Maintainable, scalable, and well-documented codebase for future growth.', icon: 'fa-solid fa-code', color: '#3b82f6' },
        { title: 'Modern UI', desc: 'Cutting-edge design trends tailored to your brand identity.', icon: 'fa-solid fa-wand-magic-sparkles', color: '#8b5cf6' },
        { title: 'Responsive Design', desc: 'Flawless experience across all devices, from mobile to desktop.', icon: 'fa-solid fa-mobile-screen', color: '#10b981' },
        { title: 'SEO Friendly', desc: 'Optimized structure to rank higher on search engines.', icon: 'fa-solid fa-magnifying-glass-chart', color: '#ef4444' },
        { title: 'Long-Term Support', desc: 'Continuous updates and support even after project completion.', icon: 'fa-solid fa-headset', color: '#06b6d4' }
    ];

    const testimonials = [
        { name: 'Sarah Jenkins', role: 'CEO, Tech Startup', text: 'Sandeep is an exceptional designer. He understood our requirements perfectly and delivered a stunning website that exceeded our expectations.' },
        { name: 'David Chen', role: 'Founder, E-Commerce Brand', text: 'The attention to detail and modern UI approach completely transformed our brand. Sales increased by 40% after the redesign.' },
        { name: 'Aisha Malik', role: 'Marketing Director', text: 'Fast delivery and clean code. The new dashboard is extremely intuitive and lightning fast. Highly recommended!' }
    ];

    return (
        <section className="proof-section" style={{ padding: '100px 20px', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
            
            {/* Ambient Background Glows */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '100px', position: 'relative', zIndex: 1 }}>
                
                {/* Why Hire Me */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2rem', margin: 0, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800', background: 'linear-gradient(90deg, #fff, #a0a0a0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Why Hire Me?
                        </h2>
                        <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, rgba(255,255,255,0.1), transparent)' }}></div>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                        {benefits.map((benefit, i) => (
                            <div key={i} className="hire-card" style={{ 
                                padding: '35px 30px', 
                                display: 'flex', 
                                gap: '20px', 
                                alignItems: 'flex-start', 
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
                                border: '1px solid rgba(255,255,255,0.03)',
                                background: 'rgba(255,255,255,0.015)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '24px',
                                cursor: 'default',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.borderColor = `rgba(${parseInt(benefit.color.slice(1,3),16)},${parseInt(benefit.color.slice(3,5),16)},${parseInt(benefit.color.slice(5,7),16)},0.3)`;
                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                e.currentTarget.style.boxShadow = `0 15px 30px -10px rgba(${parseInt(benefit.color.slice(1,3),16)},${parseInt(benefit.color.slice(3,5),16)},${parseInt(benefit.color.slice(5,7),16)},0.15)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                            >
                                {/* Subtle glowing gradient inside card */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0, right: 0,
                                    width: '150px', height: '150px',
                                    background: `radial-gradient(circle at top right, rgba(${parseInt(benefit.color.slice(1,3),16)},${parseInt(benefit.color.slice(3,5),16)},${parseInt(benefit.color.slice(5,7),16)},0.1), transparent 70%)`,
                                    pointerEvents: 'none'
                                }} />

                                <div style={{ 
                                    width: '55px', 
                                    height: '55px', 
                                    borderRadius: '16px', 
                                    background: `rgba(${parseInt(benefit.color.slice(1,3),16)},${parseInt(benefit.color.slice(3,5),16)},${parseInt(benefit.color.slice(5,7),16)},0.1)`, 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    flexShrink: 0,
                                    border: `1px solid rgba(${parseInt(benefit.color.slice(1,3),16)},${parseInt(benefit.color.slice(3,5),16)},${parseInt(benefit.color.slice(5,7),16)},0.2)`
                                }}>
                                    <i className={benefit.icon} style={{ fontSize: '22px', color: benefit.color }}></i>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', margin: '0 0 12px 0', color: '#fff', fontWeight: '700' }}>{benefit.title}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: '0.95rem', lineHeight: '1.7' }}>{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2rem', margin: 0, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800', background: 'linear-gradient(90deg, #fff, #a0a0a0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            What Clients Say
                        </h2>
                        <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, rgba(255,255,255,0.1), transparent)' }}></div>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                        {testimonials.map((item, i) => (
                            <div key={i} className="testimonial-card" style={{ 
                                padding: '40px',
                                background: 'rgba(255,255,255,0.015)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.03)',
                                borderRadius: '24px',
                                transition: 'all 0.4s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)';
                            }}
                            >
                                <div style={{ display: 'flex', gap: '6px', color: '#f59e0b', marginBottom: '25px', fontSize: '14px' }}>
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                </div>
                                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '35px', fontStyle: 'italic', fontSize: '1rem' }}>"{item.text}"</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ width: '55px', height: '55px', borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fa-solid fa-user" style={{ color: '#fff', fontSize: '20px' }}></i>
                                    </div>
                                    <div>
                                        <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: '#fff' }}>{item.name}</h4>
                                        <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: '500' }}>{item.role}</span>
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
