import React from 'react';

const BlogAndFAQ = () => {
    return (
        <section className="info-section" style={{ padding: '80px 20px', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
                
                {/* Blog */}
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '30px', borderBottom: '2px solid #2563eb', display: 'inline-block', paddingBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Latest Insights</h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '20px' }}>
                        {[
                            { title: '10 UI Tips for Better Conversion Rates', category: 'UI Tips', date: 'Jul 10, 2026' },
                            { title: 'Why Web Design Matters in 2026', category: 'Web Design', date: 'Jun 28, 2026' },
                            { title: 'Mastering React & Tailwind CSS', category: 'Frontend', date: 'Jun 15, 2026' }
                        ].map((post, i) => (
                            <div key={i} className="card glass" style={{ padding: '25px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '15px', background: 'rgba(255,255,255,0.05)', flexShrink: 0 }}></div>
                                <div>
                                    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                        <span style={{ fontSize: '0.7rem', color: '#10b981', textTransform: 'uppercase' }}>{post.category}</span>
                                        <span style={{ fontSize: '0.7rem', color: '#a0a0a0' }}>{post.date}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.1rem', margin: 0, lineHeight: '1.4' }}>{post.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BlogAndFAQ;
