import React from 'react';

const AboutAndExpertise = () => {
    return (
        <section className="about-section" style={{ padding: '80px 20px', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
                
                {/* About Me */}
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        About Me
                    </h2>
                    
                    <div style={{ color: '#a0a0a0', lineHeight: '1.8', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <p style={{ margin: 0 }}>
                            I am <strong style={{ color: '#fff' }}>Sandeep Barupal</strong>, a passionate <strong style={{ color: '#fff' }}>UI/UX Designer, Web Designer, and Website Designer</strong> with expertise in crafting intuitive and visually appealing digital experiences. I have a strong background in <strong style={{ color: '#fff' }}>React and PHP</strong>, allowing me to build dynamic, scalable, and user-friendly web applications.
                        </p>
                        <p style={{ margin: 0 }}>
                            I have also worked with <strong style={{ color: '#fff' }}>HTML, CSS, JavaScript, and basic PHP</strong>, and I regularly use tools like <strong style={{ color: '#fff' }}>Webflow, Figma, and Framer</strong> to design and develop modern interfaces. I continuously learn new skills to stay updated and improve my work.
                        </p>
                        <p style={{ margin: 0 }}>
                            Over the years, I have collaborated with various clients and teams to deliver high-quality digital products. My approach combines user-centric design principles with robust technical execution. I am dedicated to solving complex problems through elegant design and clean code, always striving to exceed client expectations and create memorable web experiences that drive business success.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutAndExpertise;
