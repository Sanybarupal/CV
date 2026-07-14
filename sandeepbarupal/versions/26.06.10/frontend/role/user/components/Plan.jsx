import React from 'react';

const Plan = () => {
    return (
        <section className="pricing-section">
            <div className="bg-text">Pricing</div>
            
            <div className="pricing-cards">
                {/* Free Plan */}
                <div className="card glass">
                    <div className="card-header">
                        <h3>Free</h3>
                        <h2>Free</h2>
                        <p>For creators taking their first steps with Forma.</p>
                    </div>
                    <ul className="features">
                        <li><i className="fa-solid fa-check-circle"></i> Up to 3 projects in the cloud</li>
                        <li><i className="fa-solid fa-check-circle"></i> Image export up to 1080p</li>
                        <li><i className="fa-solid fa-check-circle"></i> Basic editing tools</li>
                        <li><i className="fa-solid fa-check-circle"></i> Free templates and icons</li>
                        <li><i className="fa-solid fa-check-circle"></i> Access via web and mobile app</li>
                    </ul>
                    <button className="btn btn-white-outline">Choose Plan</button>
                </div>
                
                {/* Standard Plan */}
                <div className="card glass">
                    <div className="card-header">
                        <h3>Standard</h3>
                        <h2>$9,99/m</h2>
                        <p>For freelancers and small teams who need more freedom and flexibility.</p>
                    </div>
                    <ul className="features">
                        <li><i className="fa-solid fa-check-circle"></i> Up to 50 projects in the cloud</li>
                        <li><i className="fa-solid fa-check-circle"></i> Export up to 4K</li>
                        <li><i className="fa-solid fa-check-circle"></i> Advanced editing toolkit</li>
                        <li><i className="fa-solid fa-check-circle"></i> Team collaboration (up to 5 members)</li>
                        <li><i className="fa-solid fa-check-circle"></i> Access to premium template library</li>
                    </ul>
                    <button className="btn btn-white-outline">Choose Plan</button>
                </div>

                {/* Pro Plan */}
                <div className="card glass highlight-border">
                    <div className="card-header">
                        <h3>Pro</h3>
                        <h2>$19,99/m</h2>
                        <p>For studios, agencies, and professional creators working with brands.</p>
                    </div>
                    <ul className="features">
                        <li><i className="fa-solid fa-check-circle"></i> Unlimited projects</li>
                        <li><i className="fa-solid fa-check-circle"></i> Export up to 8K + animations</li>
                        <li><i className="fa-solid fa-check-circle"></i> AI-powered content generation tools</li>
                        <li><i className="fa-solid fa-check-circle"></i> Unlimited team members</li>
                        <li><i className="fa-solid fa-check-circle"></i> Brand customization (logos, fonts, color palettes)</li>
                    </ul>
                    <button className="btn btn-white-outline">Choose Plan</button>
                </div>
            </div>

            <div className="pricing-toggle">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <span className="toggle-label">Yearly</span>
            </div>
        </section>
    );
};

export default Plan;
