import React from 'react';

const Portfolio = () => {
    const projects = [
        { name: 'Personal Portfolio', category: 'Web Design', desc: 'A custom portfolio for creatives.', tech: ['React', 'Framer Motion'] },
        { name: 'School Website', category: 'Education', desc: 'Comprehensive school management site.', tech: ['PHP', 'MySQL', 'Tailwind'] },
        { name: 'IT Agency Website', category: 'Corporate', desc: 'Professional site for IT services.', tech: ['WordPress', 'Elementor'] },
        { name: 'Dashboard UI', category: 'UI/UX Design', desc: 'Data visualization admin panel.', tech: ['Figma', 'React'] },
        { name: 'Shopping Website', category: 'E-Commerce', desc: 'Full-stack e-commerce platform.', tech: ['React', 'Firebase', 'Stripe'] },
        { name: 'Translation Web App', category: 'Web App', desc: 'Real-time translation application.', tech: ['React', 'Google API'] }
    ];

    return (
        <section className="portfolio-section" style={{ padding: '80px 20px', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                <h2 style={{ fontSize: '1.5rem', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Featured Projects
                </h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                    {projects.map((project, i) => (
                        <div key={i} className="card glass" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '0', overflow: 'hidden' }}>
                            <div style={{ height: '220px', background: 'rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                                <img 
                                    src={`https://picsum.photos/seed/${i + 15}/800/600`} 
                                    alt={project.name} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} 
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                    <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#fff' }}>{project.name}</h3>
                                    <span style={{ fontSize: '0.8rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '4px 10px', borderRadius: '10px' }}>{project.category}</span>
                                </div>
                                <p style={{ color: '#a0a0a0', marginBottom: '20px', flexGrow: 1, lineHeight: '1.6' }}>{project.desc}</p>
                                
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {project.tech.map((t, j) => (
                                        <span key={j} style={{ fontSize: '0.8rem', padding: '4px 10px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#a0a0a0' }}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
