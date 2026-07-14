import React from 'react';

const StatsAndLogos = () => {
    const stats = [
        { number: '50+', label: 'Projects' },
        { number: '30+', label: 'Happy Clients' },
        { number: '2+', label: 'Years Experience' },
        { number: '100%', label: 'Client Satisfaction' },
    ];

    const logos = ['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix'];

    return (
        <section className="stats-section" style={{ 
            padding: '100px 20px', 
            position: 'relative', 
            zIndex: 1,
            background: '#070a08', // Match Hero background
            overflow: 'hidden'
        }}>
            {/* Background Ambient Glow matching the image (Green/Blue split) */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '20%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 60%)',
                zIndex: 0,
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '-20%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
                zIndex: 0,
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                
                {/* Trusted By Section */}
                <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                    <p style={{ 
                        color: 'rgba(255,255,255,0.3)', 
                        fontSize: '11px', 
                        fontWeight: '700',
                        textTransform: 'uppercase', 
                        letterSpacing: '4px', 
                        marginBottom: '35px' 
                    }}>Trusted By Industry Leaders</p>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: 'clamp(30px, 6vw, 70px)', 
                        flexWrap: 'wrap', 
                        opacity: 0.6 
                    }}>
                        {logos.map((logo, i) => (
                            <div key={i} style={{ 
                                fontSize: 'clamp(20px, 2.5vw, 26px)', 
                                fontWeight: '800',
                                color: '#e2e8f0',
                                letterSpacing: '-0.5px',
                                transition: 'all 0.4s ease',
                                cursor: 'default'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#fff';
                                e.currentTarget.style.transform = 'scale(1.1)';
                                e.currentTarget.style.textShadow = '0 0 20px rgba(255,255,255,0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#e2e8f0';
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.textShadow = 'none';
                            }}
                            >
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="stats-grid" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(4, 1fr)', 
                    gap: '20px' 
                }}>
                    {stats.map((stat, i) => (
                        <div key={i} style={{ 
                            textAlign: 'center', 
                            padding: '45px 20px',
                            background: 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRadius: '20px',
                            transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s, background 0.3s',
                            cursor: 'default'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.borderColor = 'rgba(74, 222, 128, 0.3)';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                        }}
                        >
                            <h2 style={{ 
                                fontSize: '4rem', 
                                margin: '0 0 10px 0', 
                                background: 'linear-gradient(135deg, #fff 0%, #4ade80 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: '900',
                                letterSpacing: '-2px'
                            }}>{stat.number}</h2>
                            <p style={{ 
                                color: 'rgba(255,255,255,0.5)', 
                                margin: 0,
                                fontSize: '14px',
                                fontWeight: '500'
                            }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @media (max-width: 900px) {
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 500px) {
                    .stats-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}} />
        </section>
    );
};

export default StatsAndLogos;
