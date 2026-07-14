import React from 'react';

const Contact = () => {
    return (
        <section style={{
            minHeight: '100vh',
            padding: '120px 20px 80px',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center'
        }}>
            {/* Background elements for premium feel */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '20%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(74, 222, 128, 0.05) 0%, rgba(7, 10, 8, 0) 70%)',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                zIndex: 0
            }}></div>

            <div style={{
                maxWidth: '1200px',
                width: '100%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '60px',
                position: 'relative',
                zIndex: 1,
                alignItems: 'center'
            }}>

                {/* Info and Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%' }}>

                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            padding: '8px 16px', borderRadius: '30px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            fontSize: '14px', fontWeight: '600',
                            marginBottom: '20px'
                        }}>
                            <i className="fa-solid fa-circle-user" style={{ color: '#4ade80' }}></i> Contact
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                            fontWeight: '800',
                            margin: '0 0 15px 0',
                            letterSpacing: '-1px'
                        }}>Get in touch</h2>
                        <p style={{
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '16px',
                            lineHeight: '1.6',
                            margin: '0 auto',
                            maxWidth: '500px'
                        }}>
                            Have questions or ready to transform your business with AI automation?
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '25px',
                        marginTop: '50px',
                        width: '100%'
                    }}>
                        {/* Call Card */}
                        <a href="tel:+917878142323" style={{ textDecoration: 'none' }}>
                            <div className="contact-card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div className="contact-icon-box">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="fa-solid fa-arrow-trend-up"></i>
                                    </div>
                                </div>
                                <div style={{ marginTop: '30px' }}>
                                    <h4 className="contact-card-title">Call us</h4>
                                    <p className="contact-card-desc">+91 78781 42323</p>
                                </div>
                            </div>
                        </a>

                        {/* WhatsApp Card */}
                        <a href="https://wa.me/917878142323" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                            <div className="contact-card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div className="contact-icon-box">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="fa-solid fa-arrow-trend-up"></i>
                                    </div>
                                </div>
                                <div style={{ marginTop: '30px' }}>
                                    <h4 className="contact-card-title">WhatsApp</h4>
                                    <p className="contact-card-desc">Message us anytime</p>
                                </div>
                            </div>
                        </a>

                        {/* Email Card */}
                        <a href="mailto:sandeepaliens01@gmail.com" style={{ textDecoration: 'none' }}>
                            <div className="contact-card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div className="contact-icon-box">
                                        <i className="fa-regular fa-envelope"></i>
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="fa-solid fa-arrow-trend-up"></i>
                                    </div>
                                </div>
                                <div style={{ marginTop: '30px' }}>
                                    <h4 className="contact-card-title">Email us</h4>
                                    <p className="contact-card-desc">sandeepaliens01@gmail.com</p>
                                </div>
                            </div>
                        </a>

                        {/* LinkedIn Card */}
                        <a href="https://www.linkedin.com/in/sandeep-barupal-a5b323321/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                            <div className="contact-card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div className="contact-icon-box">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="fa-solid fa-arrow-trend-up"></i>
                                    </div>
                                </div>
                                <div style={{ marginTop: '30px' }}>
                                    <h4 className="contact-card-title">LinkedIn</h4>
                                    <p className="contact-card-desc">Connect professionally</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .contact-card {
                    padding: 30px;
                    border-radius: 24px;
                    background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
                    border: 1px solid rgba(255,255,255,0.05);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    cursor: pointer;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                .contact-card:hover {
                    background: linear-gradient(145deg, rgba(74, 222, 128, 0.05) 0%, rgba(255,255,255,0.02) 100%);
                    border-color: rgba(74, 222, 128, 0.3);
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(74, 222, 128, 0.1);
                }
                
                .contact-icon-box {
                    width: 60px;
                    height: 60px;
                    border-radius: 16px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    color: rgba(255, 255, 255, 0.7);
                    transition: all 0.4s ease;
                }
                .contact-card:hover .contact-icon-box {
                    background: rgba(74, 222, 128, 0.1);
                    border-color: rgba(74, 222, 128, 0.3);
                    color: #4ade80;
                    box-shadow: inset 0 0 20px rgba(74, 222, 128, 0.1);
                }
                
                .arrow-icon {
                    color: rgba(255,255,255,0.2);
                    font-size: 18px;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .contact-card:hover .arrow-icon {
                    color: #4ade80;
                    transform: translate(5px, -5px) scale(1.1);
                }
                
                .contact-card-title {
                    margin: 0 0 8px 0;
                    font-size: 18px;
                    font-weight: 700;
                    color: #fff;
                    letter-spacing: -0.5px;
                }
                .contact-card-desc {
                    margin: 0;
                    font-size: 14px;
                    color: rgba(255,255,255,0.5);
                    line-height: 1.5;
                }
            `}} />
        </section>
    );
};

export default Contact;
