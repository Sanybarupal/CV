import React from 'react';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="bg-text">CONTACT</div>
            
            <div className="contact-container">
                <div className="contact-info">
                    <div className="tag glass-tag">
                        <i className="fa-solid fa-circle-user"></i> Contact
                    </div>
                    <h2>Get in touch</h2>
                    <p>Have questions or ready to transform your business with AI automation?</p>
                    
                    <div className="info-cards">
                        <div className="info-card glass">
                            <div className="icon-box"><i className="fa-regular fa-envelope"></i></div>
                            <div className="info-text">
                                <h4>Email us</h4>
                                <p>johnnykyorov@gmail.com</p>
                            </div>
                            <div className="arrow"><i className="fa-solid fa-arrow-trend-up"></i></div>
                        </div>
                        
                        <div className="info-card glass">
                            <div className="icon-box"><i className="fa-solid fa-phone"></i></div>
                            <div className="info-text">
                                <h4>Call us</h4>
                                <p>(501) 123-4567</p>
                            </div>
                            <div className="arrow"><i className="fa-solid fa-arrow-trend-up"></i></div>
                        </div>
                        
                        <div className="info-card glass">
                            <div className="icon-box"><i className="fa-solid fa-location-dot"></i></div>
                            <div className="info-text">
                                <h4>Our location</h4>
                                <p>Crosby Street, NY, US</p>
                            </div>
                            <div className="arrow"><i className="fa-solid fa-arrow-trend-up"></i></div>
                        </div>
                    </div>
                </div>
                
                <div className="contact-form glass">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-white w-100">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
