import React from 'react';

const Service = () => {
    return (
        <section className="page-section">
            <div className="bg-text">SERVICE</div>
            
            <div className="glass card" style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>My Services</h2>
                
                <ul className="features" style={{ gap: '24px' }}>
                    <li>
                        <i className="fa-solid fa-check-circle" style={{ marginTop: '5px' }}></i> 
                        <div>
                            <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '5px' }}>UI/UX Design</strong>
                            <span style={{ color: '#a0a0a0' }}>Creating intuitive, user-friendly, and engaging interfaces using Figma and Framer.</span>
                        </div>
                    </li>
                    <li>
                        <i className="fa-solid fa-check-circle" style={{ marginTop: '5px' }}></i> 
                        <div>
                            <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '5px' }}>Web Development</strong>
                            <span style={{ color: '#a0a0a0' }}>Building fast, scalable, and responsive web applications using React, HTML, CSS, and JS.</span>
                        </div>
                    </li>
                    <li>
                        <i className="fa-solid fa-check-circle" style={{ marginTop: '5px' }}></i> 
                        <div>
                            <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '5px' }}>Backend Integration</strong>
                            <span style={{ color: '#a0a0a0' }}>Developing solid backend architecture using PHP and Node.js for seamless data flow.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Service;
