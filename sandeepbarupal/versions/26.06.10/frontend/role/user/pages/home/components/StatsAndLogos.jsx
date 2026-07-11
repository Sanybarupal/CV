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
        <section className="stats-section" style={{ padding: '60px 20px', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <p style={{ color: '#a0a0a0', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>Trusted By</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', opacity: 0.5 }}>
                        {logos.map((logo, i) => (
                            <div key={i} style={{ fontSize: '24px', fontWeight: 'bold' }}>{logo}</div>
                        ))}
                    </div>
                </div>

                <div className="pricing-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                    {stats.map((stat, i) => (
                        <div key={i} className="card glass" style={{ textAlign: 'center', padding: '30px' }}>
                            <h2 style={{ fontSize: '3rem', margin: '0 0 10px 0', color: '#fff' }}>{stat.number}</h2>
                            <p style={{ color: '#a0a0a0', margin: 0 }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsAndLogos;
