import React, { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const expertise = [
        { icon: '🎨', title: 'UI/UX Design', desc: 'Creating intuitive, beautiful interfaces that users love using Figma & Framer. Focus on seamless user journeys.' },
        { icon: '⚛️', title: 'React Development', desc: 'Building fast, scalable single-page applications with modern React patterns, Redux, and Context APIs.' },
        { icon: '🌐', title: 'Web Design', desc: 'Designing responsive, pixel-perfect websites with clean HTML, CSS & modern frontend frameworks.' },
        { icon: '🚀', title: 'Performance & SEO', desc: 'Optimizing web applications for speed, search engine rankings, and flawless user experiences.' },
        { icon: '🔗', title: 'Backend Integration', desc: 'Developing solid backend architecture using Node.js and PHP for seamless data flow.' },
        { icon: '📱', title: 'Responsive Design', desc: 'Mobile-first approach ensuring your application looks and functions perfectly across all devices.' },
    ];

    return (
        <section
            ref={sectionRef}
            className="services-section"
            style={{
                padding: '120px 20px',
                position: 'relative',
                zIndex: 1,
                minHeight: 'auto',
                display: 'block',
                background: 'transparent',
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* ── Section Header ── */}
                <div style={{
                    marginBottom: '60px',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                        <div style={{ width: '40px', height: '2px', background: '#4ade80' }} />
                        <span style={{
                            fontSize: '12px',
                            fontWeight: '700',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            color: '#4ade80',
                        }}>My Services</span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: '900',
                        margin: 0,
                        lineHeight: '1.1',
                        letterSpacing: '-1px',
                        background: 'linear-gradient(135deg, #fff 0%, #a0a0a0 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Expertise & <br />
                        <span style={{ color: 'rgba(255,255,255,0.3)', WebkitTextFillColor: 'rgba(255,255,255,0.3)' }}>What I offer</span>
                    </h2>
                </div>

                {/* ── Services Cards ── */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '30px',
                }}>
                    {expertise.map((item, i) => (
                        <div
                            key={i}
                            className="expertise-service-card"
                            style={{
                                padding: '40px',
                                borderRadius: '24px',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.04)',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                cursor: 'pointer',
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                                transitionDelay: `${0.2 + i * 0.1}s`,
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Hover Glow */}
                            <div className="card-hover-glow" style={{
                                position: 'absolute',
                                top: 0, left: 0, right: 0, bottom: 0,
                                background: 'radial-gradient(circle at top right, rgba(74, 222, 128, 0.15), transparent 60%)',
                                opacity: 0,
                                transition: 'opacity 0.4s ease',
                                pointerEvents: 'none'
                            }}></div>

                            <div style={{
                                fontSize: '2rem',
                                marginBottom: '25px',
                                width: '60px',
                                height: '60px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '16px',
                                background: 'rgba(74, 222, 128, 0.08)',
                                border: '1px solid rgba(74, 222, 128, 0.15)',
                                transition: 'transform 0.4s ease',
                                position: 'relative',
                                zIndex: 1
                            }} className="service-icon-box">
                                {item.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: '800',
                                margin: '0 0 15px 0',
                                color: '#fff',
                                position: 'relative',
                                zIndex: 1
                            }}>{item.title}</h3>
                            <p style={{
                                margin: 0,
                                fontSize: '0.95rem',
                                color: 'rgba(255,255,255,0.6)',
                                lineHeight: '1.8',
                                position: 'relative',
                                zIndex: 1
                            }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .expertise-service-card:hover {
                    background: rgba(255,255,255,0.04) !important;
                    border-color: rgba(74, 222, 128, 0.3) !important;
                    transform: translateY(-10px) !important;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                }
                .expertise-service-card:hover .card-hover-glow {
                    opacity: 1 !important;
                }
                .expertise-service-card:hover .service-icon-box {
                    transform: scale(1.1) rotate(5deg);
                    background: rgba(74, 222, 128, 0.15) !important;
                }
            `}} />
        </section>
    );
};

export default ServicesSection;
