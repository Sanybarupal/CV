import React from 'react';
import mgsuLogo from '../../../assets/img/mgsu.png.jpg';
import aliensLogo from '../../../assets/img/aliens.company.png';

const ExperienceAndEducation = () => {
    const itemStyle = {

        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '25px',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        transition: 'all 0.3s ease'
    };

    return (
        <section className="timeline-section" style={{ padding: '80px 20px', position: 'relative', zIndex: 1, width: '100%' }}>
            <div data-aos="fade-up" data-aos-duration="1000" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px', width: '100%' }}>
                
                {/* Work Experience */}
                <div data-aos="fade-right" data-aos-delay="200" style={{ width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                        <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                        </div>
                        <h2 style={{ fontSize: '2rem', margin: 0, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', background: 'linear-gradient(90deg, #ffffff, #888888)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Work Experience
                        </h2>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
                        {/* Experience Item 1 */}
                        <div style={itemStyle} className="hover-scale">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                                <div style={{ width: '70px', height: '70px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#000' }}>
                                    <img src={aliensLogo} alt="Aliens Company" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', margin: '0 0 8px 0', color: '#fff', fontWeight: '600' }}>Aliens Company</h3>
                                    <p style={{ color: '#a0a0a0', margin: 0, fontSize: '0.95rem' }}>UI/UX Designer & Frontend Developer</p>
                                </div>
                            </div>
                            <span style={{ fontSize: '0.85rem', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '8px 20px', borderRadius: '30px', background: 'rgba(255,255,255,0.05)', fontWeight: '500' }}>Present</span>
                        </div>
                        
                        {/* Experience Item 2 */}
                        <div style={itemStyle} className="hover-scale">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                                <div style={{ width: '70px', height: '70px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#000' }}>
                                    <img src={aliensLogo} alt="Aliens School" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', margin: '0 0 8px 0', color: '#fff', fontWeight: '600' }}>Aliens School</h3>
                                    <p style={{ color: '#a0a0a0', margin: 0, fontSize: '0.95rem' }}>Web Designer</p>
                                </div>
                            </div>
                            <span style={{ fontSize: '0.85rem', color: '#a0a0a0', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 20px', borderRadius: '30px', background: 'transparent' }}>Previous</span>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                        <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                            </svg>
                        </div>
                        <h2 style={{ fontSize: '2rem', margin: 0, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', background: 'linear-gradient(90deg, #ffffff, #888888)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Education
                        </h2>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
                        {/* Education Item 1 */}
                        <div style={itemStyle} className="hover-scale">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                                <div style={{ width: '70px', height: '70px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#fff' }}>
                                    <img src={mgsuLogo} alt="MGSU Bikaner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', margin: '0 0 8px 0', color: '#fff', fontWeight: '600' }}>MGSU Bikaner (Maharaja Ganga Singh University)</h3>
                                    <p style={{ color: '#a0a0a0', margin: 0, fontSize: '0.95rem' }}>Master of Political Science</p>
                                </div>
                            </div>
                            <span style={{ fontSize: '0.85rem', color: '#a0a0a0', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 20px', borderRadius: '30px', background: 'transparent' }}>2021 - 2023</span>
                        </div>
                        
                        {/* Education Item 2 */}
                        <div style={itemStyle} className="hover-scale">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                                <div style={{ width: '70px', height: '70px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#fff' }}>
                                    <img src={mgsuLogo} alt="MGSU Bikaner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', margin: '0 0 8px 0', color: '#fff', fontWeight: '600' }}>MGSU Bikaner (Maharaja Ganga Singh University)</h3>
                                    <p style={{ color: '#a0a0a0', margin: 0, fontSize: '0.95rem' }}>Bachelor of Arts (BA)</p>
                                </div>
                            </div>
                            <span style={{ fontSize: '0.85rem', color: '#a0a0a0', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 20px', borderRadius: '30px', background: 'transparent' }}>2018 - 2021</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExperienceAndEducation;
