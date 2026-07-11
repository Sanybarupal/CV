import React from 'react';
import mgsuLogo from '../../../../assets/img/mgsu-logo.png';
import aliensLogo from '../../../../assets/img/aliens-logo.png';

const ExperienceAndEducation = () => {
    return (
        <section className="timeline-section" style={{ padding: '80px 20px', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
                
                {/* Work Experience */}
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>Work Experience</h2>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '20px' }}>
                        {/* Experience Item 1 */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#000' }}>
                                    <img src={aliensLogo} alt="Aliens Company" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', margin: '0 0 5px 0', color: '#fff', fontWeight: '600' }}>Aliens Company</h3>
                                    <p style={{ color: '#a0a0a0', margin: 0, fontSize: '0.9rem' }}>UI/UX Designer & Frontend Developer</p>
                                </div>
                            </div>
                            <span style={{ fontSize: '0.8rem', color: '#a0a0a0', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 16px', borderRadius: '20px', background: 'rgba(255,255,255,0.02)' }}>Present</span>
                        </div>
                        
                        {/* Experience Item 2 */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#000' }}>
                                    <img src={aliensLogo} alt="Aliens School" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', margin: '0 0 5px 0', color: '#fff', fontWeight: '600' }}>Aliens School</h3>
                                    <p style={{ color: '#a0a0a0', margin: 0, fontSize: '0.9rem' }}>Web Designer</p>
                                </div>
                            </div>
                            <span style={{ fontSize: '0.8rem', color: '#a0a0a0', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 16px', borderRadius: '20px', background: 'rgba(255,255,255,0.02)' }}>Previous</span>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>Education</h2>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '20px' }}>
                        {/* Education Item 1 */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#fff' }}>
                                    <img src={mgsuLogo} alt="MGSU Bikaner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', margin: '0 0 5px 0', color: '#fff', fontWeight: '600' }}>MGSU Bikaner (Maharaja Ganga Singh University)</h3>
                                    <p style={{ color: '#a0a0a0', margin: 0, fontSize: '0.9rem' }}>Master of Political Science</p>
                                </div>
                            </div>
                            <span style={{ fontSize: '0.8rem', color: '#a0a0a0', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 16px', borderRadius: '20px', background: 'rgba(255,255,255,0.02)' }}>2021 - 2023</span>
                        </div>
                        
                        {/* Education Item 2 */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#fff' }}>
                                    <img src={mgsuLogo} alt="MGSU Bikaner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', margin: '0 0 5px 0', color: '#fff', fontWeight: '600' }}>MGSU Bikaner (Maharaja Ganga Singh University)</h3>
                                    <p style={{ color: '#a0a0a0', margin: 0, fontSize: '0.9rem' }}>Bachelor of Arts (BA)</p>
                                </div>
                            </div>
                            <span style={{ fontSize: '0.8rem', color: '#a0a0a0', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 16px', borderRadius: '20px', background: 'rgba(255,255,255,0.02)' }}>2018 - 2021</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExperienceAndEducation;
