import React, { useEffect, useRef, useState } from 'react';
import profilePic from '../../../assets/img/profile.png';

const AboutMeSection = () => {
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

    const tools = [
        { name: 'React', color: '#61dafb' },
        { name: 'Figma', color: '#f24e1e' },
        { name: 'JavaScript', color: '#f7df1e' },
        { name: 'Node.js', color: '#68a063' },
        { name: 'Webflow', color: '#4353ff' },
        { name: 'Framer', color: '#bb4bff' },
        { name: 'HTML/CSS', color: '#e34f26' },
        { name: 'PHP', color: '#777bb4' },
    ];

    return (
        <section
            ref={sectionRef}
            className="about-me-section"
            style={{
                padding: '120px 20px',
                position: 'relative',
                zIndex: 1,
                minHeight: 'auto',
                display: 'block',
                background: 'transparent',
            }}
        >
            {/* Background glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(74, 222, 128, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0,
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* ── Section Header ── */}
                <div style={{
                    marginBottom: '80px',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                        <div style={{
                            width: '40px',
                            height: '2px',
                            background: '#4ade80',
                        }} />
                        <span style={{
                            fontSize: '12px',
                            fontWeight: '700',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            color: '#4ade80',
                        }}>About Me</span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '900',
                        margin: 0,
                        lineHeight: '1.1',
                        letterSpacing: '-1px',
                        background: 'linear-gradient(135deg, #fff 0%, #a0a0a0 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Designing digital<br />
                        <span style={{ color: 'rgba(255,255,255,0.3)', WebkitTextFillColor: 'rgba(255,255,255,0.3)' }}>experiences that matter</span>
                    </h2>
                </div>

                {/* ── Two Column Layout ── */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
                    gap: '80px',
                    alignItems: 'start',
                    marginBottom: '100px',
                }}>
                    {/* Left: About text */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
                        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
                    }}>
                        <p style={{
                            margin: 0,
                            fontSize: '1.1rem',
                            color: '#a0a0a0',
                            lineHeight: '1.9',
                        }}>
                            I am <strong style={{ color: '#fff', fontWeight: '600' }}>Sandeep Barupal</strong>, a passionate{' '}
                            <strong style={{ color: '#4ade80', fontWeight: '600' }}>UI/UX Designer, Web Designer, and Frontend Developer</strong>{' '}
                            with expertise in crafting intuitive and visually appealing digital experiences. I have a strong
                            background in <strong style={{ color: '#fff', fontWeight: '600' }}>React and PHP</strong>, allowing
                            me to build dynamic, scalable, and user-friendly web applications.
                        </p>
                        <p style={{
                            margin: 0,
                            fontSize: '1.1rem',
                            color: '#a0a0a0',
                            lineHeight: '1.9',
                        }}>
                            Over the years, I have collaborated with various clients and teams to deliver high-quality
                            digital products. My approach combines{' '}
                            <strong style={{ color: '#fff', fontWeight: '600' }}>user-centric design principles</strong> with
                            robust technical execution — always striving to create memorable web experiences that
                            drive business success.
                        </p>

                        {/* Quick stats row */}
                        <div style={{
                            display: 'flex',
                            gap: '40px',
                            marginTop: '20px',
                            paddingTop: '30px',
                            borderTop: '1px solid rgba(255,255,255,0.08)',
                        }}>
                            {[
                                { num: '50+', label: 'Projects' },
                                { num: '30+', label: 'Happy Clients' },
                                { num: '2+', label: 'Years Exp.' },
                            ].map((s, i) => (
                                <div key={i} style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.6 + i * 0.15}s`,
                                }}>
                                    <div style={{
                                        fontSize: '2rem',
                                        fontWeight: '800',
                                        color: '#fff',
                                        lineHeight: '1',
                                        marginBottom: '6px',
                                        background: 'linear-gradient(135deg, #fff 0%, #4ade80 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}>{s.num}</div>
                                    <div style={{
                                        fontSize: '12px',
                                        color: '#a0a0a0',
                                        fontWeight: '500',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                    }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Portrait image */}
                    <div style={{
                        position: 'relative',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.95)',
                        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
                    }} className="about-portrait-container">
                        <div style={{
                            position: 'relative',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.08)',
                            aspectRatio: '4/5',
                            transition: 'all 0.4s ease',
                        }} className="about-portrait-inner">
                            <img src={profilePic} alt="Sandeep Barupal" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top center',
                                filter: 'grayscale(20%) contrast(1.05)',
                                transition: 'transform 0.4s ease',
                            }} className="about-portrait-img" />
                            {/* Green overlay gradient */}
                            <div style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                right: '0',
                                height: '40%',
                                background: 'linear-gradient(to top, rgba(7,10,8,0.9), transparent)',
                                pointerEvents: 'none',
                            }} />
                        </div>
                        {/* Decorative corner accent */}
                        <div style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '-10px',
                            width: '60px',
                            height: '60px',
                            border: '2px solid #4ade80',
                            borderRadius: '16px',
                            opacity: 0.3,
                            pointerEvents: 'none',
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: '-10px',
                            left: '-10px',
                            width: '40px',
                            height: '40px',
                            border: '2px solid #4ade80',
                            borderRadius: '10px',
                            opacity: 0.2,
                            pointerEvents: 'none',
                        }} />
                    </div>
                </div>

                {/* ── Tools & Technologies ── */}
                <div style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        marginBottom: '30px',
                    }}>
                        <div style={{ width: '40px', height: '2px', background: '#4ade80' }} />
                        <span style={{
                            fontSize: '12px',
                            fontWeight: '700',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            color: '#4ade80',
                        }}>Tools & Tech</span>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                    }}>
                        {tools.map((tool, i) => (
                            <span
                                key={i}
                                className="about-tool-tag"
                                style={{
                                    padding: '12px 24px',
                                    borderRadius: '30px',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#fff',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'default',
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
                                    transitionDelay: `${0.6 + i * 0.06}s`,
                                }}
                            >
                                {tool.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .about-tool-tag:hover {
                    background: rgba(74, 222, 128, 0.12) !important;
                    border-color: rgba(74, 222, 128, 0.4) !important;
                    color: #4ade80 !important;
                    transform: translateY(-4px) !important;
                    box-shadow: 0 10px 20px -10px rgba(74,222,128,0.5);
                }
                
                .about-portrait-container:hover .about-portrait-inner {
                    border-color: rgba(74, 222, 128, 0.5) !important;
                    box-shadow: 0 0 30px rgba(74, 222, 128, 0.2);
                }
                .about-portrait-container:hover .about-portrait-img {
                    transform: scale(1.05);
                }

                @media (max-width: 768px) {
                    .about-me-section > div > div:nth-child(2) {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                }
            `}} />
        </section>
    );
};

export default AboutMeSection;
