import React from 'react';

const Work = () => {
    return (
        <section className="page-section">
            <div className="bg-text">WORK</div>
            
            <div className="glass card" style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>Featured Case Studies</h2>
                
                <div style={{ marginBottom: '40px', paddingBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Hire Professional</h3>
                    <p style={{ color: '#a0a0a0', lineHeight: '1.7' }}>A comprehensive platform connecting clients with top-tier professionals. Features include dynamic service search, role-based dashboards, robust filtering, and seamless user registration flows tailored for a professional marketplace.</p>
                    <div style={{ marginTop: '20px' }}>
                        <span className="glass-tag">UI/UX Design</span>
                        <span className="glass-tag" style={{ marginLeft: '10px' }}>React</span>
                        <span className="glass-tag" style={{ marginLeft: '10px' }}>Tailwind CSS</span>
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>DocsApp</h3>
                    <p style={{ color: '#a0a0a0', lineHeight: '1.7' }}>A sleek, dark-themed documentation and learning hub. It organizes complex technical subjects like HTML, Git, and Backend development into easily navigable, beautifully structured categories and topics.</p>
                    <div style={{ marginTop: '20px' }}>
                        <span className="glass-tag">Web Design</span>
                        <span className="glass-tag" style={{ marginLeft: '10px' }}>Frontend Dev</span>
                        <span className="glass-tag" style={{ marginLeft: '10px' }}>Dark Mode UI</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
