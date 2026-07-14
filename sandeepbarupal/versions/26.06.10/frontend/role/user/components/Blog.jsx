import React, { useState, useEffect } from 'react';

const blogs = [
    {
        id: '01',
        date: '20 January 2026',
        category: 'Blog',
        title: 'We create a modern beautiful photo.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
        sectionTitle1: 'UI/UX Design',
        sectionDesc1: 'Creating intuitive, user-friendly, and engaging interfaces. We focus on delivering seamless user experiences that convert visitors into loyal customers.',
        sectionTitle2: 'Knowledge',
        sectionDesc2: 'We are a team of experienced developers who implement the most advanced, modern web projects using cutting-edge technologies.'
    },
    {
        id: '02',
        date: '14 February 2026',
        category: 'Development',
        title: 'Building scalable React apps.',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
        sectionTitle1: 'React Architecture',
        sectionDesc1: 'React has completely transformed how we build user interfaces. With the advent of hooks and modern state management, delivering smooth and scalable SPAs has never been easier.',
        sectionTitle2: 'Performance',
        sectionDesc2: 'Understanding component lifecycle, memoization, and advanced rendering patterns is crucial for achieving 60fps performance.'
    },
    {
        id: '03',
        date: '03 March 2026',
        category: 'Design Trends',
        title: 'The power of glassmorphism.',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80',
        sectionTitle1: 'Aesthetics',
        sectionDesc1: 'Glassmorphism brings depth and context to your UI. By utilizing background blur and subtle borders, you create a premium hierarchy that users love.',
        sectionTitle2: 'Immersion',
        sectionDesc2: 'Modern UI trends dictate a shift towards immersive, 3D-like digital environments that feel tactile and responsive.'
    },
    {
        id: '04',
        date: '22 April 2026',
        category: 'Optimization',
        title: 'Mastering web performance.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
        sectionTitle1: 'Core Web Vitals',
        sectionDesc1: 'Speed is a feature. Optimizing your core web vitals not only improves SEO but drastically reduces bounce rates across your platform.',
        sectionTitle2: 'Technical Strategy',
        sectionDesc2: 'Learn how to implement lazy loading, asset compression, and edge caching effectively. Every millisecond counts for user retention.'
    }
];

const Blog = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleDotClick = (index) => {
        if (index === activeIndex || isAnimating) return;
        setIsAnimating(true);
        setActiveIndex(index);
        setTimeout(() => {
            setIsAnimating(false);
        }, 600); // match CSS transition duration
    };

    const activeBlog = blogs[activeIndex];

    return (
        <section className="page-section" style={{
            minHeight: '100vh',
            paddingTop: '100px',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column'
        }}>

            {/* Main Content Grid */}
            <div style={{
                maxWidth: '1300px',
                width: '100%',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '120px 1fr 350px',
                gap: '40px',
                flex: 1,
                padding: '0 20px',
                alignItems: 'start'
            }}>

                {/* LEFT: Numbers Sidebar */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px',
                    paddingTop: '60px',
                    borderRight: '1px solid rgba(255,255,255,0.05)',
                    height: '100%'
                }}>
                    {blogs.map((b, i) => (
                        <div
                            key={b.id}
                            onClick={() => handleDotClick(i)}
                            style={{
                                fontSize: '18px',
                                fontWeight: activeIndex === i ? '600' : '400',
                                color: activeIndex === i ? '#4ade80' : 'rgba(255,255,255,0.4)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                transform: activeIndex === i ? 'translateX(10px)' : 'translateX(0)'
                            }}
                            className="blog-number"
                        >
                            {b.id}
                        </div>
                    ))}
                </div>

                {/* CENTER: Title and Image */}
                <div style={{ paddingRight: '40px' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '12px',
                        color: 'rgba(255,255,255,0.5)',
                        marginBottom: '20px',
                        fontWeight: '600',
                        opacity: isAnimating ? 0 : 1,
                        transform: isAnimating ? 'translateY(10px)' : 'translateY(0)',
                        transition: 'all 0.4s ease'
                    }}>
                        <span>{activeBlog.date}</span>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#4ade80' }}></span>
                        <span>{activeBlog.category}</span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        margin: '0 0 40px 0',
                        letterSpacing: '-1px',
                        opacity: isAnimating ? 0 : 1,
                        transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
                        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
                    }}>
                        {activeBlog.title.split(' ').map((word, index, arr) => {
                            if (index >= arr.length - 2) {
                                return <span key={index} style={{ color: 'rgba(255,255,255,0.4)' }}>{word} </span>;
                            }
                            return <span key={index}>{word} </span>;
                        })}
                    </h1>

                    <div style={{
                        width: '100%',
                        height: '400px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        position: 'relative',
                        opacity: isAnimating ? 0 : 1,
                        transform: isAnimating ? 'scale(0.95)' : 'scale(1)',
                        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                    }}>
                        <img
                            src={activeBlog.image}
                            alt={activeBlog.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.8) contrast(1.1)',
                                transition: 'transform 0.6s ease'
                            }}
                            className="blog-main-img"
                        />
                        {/* Inner Shadow / Vignette */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(7,10,8,0.8), transparent 50%)',
                            pointerEvents: 'none'
                        }}></div>
                    </div>
                </div>

                {/* RIGHT: Descriptions */}
                <div style={{
                    paddingTop: '60px',
                    borderLeft: '1px solid rgba(255,255,255,0.05)',
                    paddingLeft: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '50px',
                    height: '100%'
                }}>

                    {/* Section 1 */}
                    <div style={{
                        opacity: isAnimating ? 0 : 1,
                        transform: isAnimating ? 'translateX(20px)' : 'translateX(0)',
                        transition: 'all 0.5s ease 0.2s'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 10px #4ade80' }}></div>
                            <h3 style={{ fontSize: '16px', fontWeight: '700', margin: 0 }}>{activeBlog.sectionTitle1}</h3>
                        </div>
                        <p style={{
                            fontSize: '13px',
                            color: 'rgba(255,255,255,0.5)',
                            lineHeight: '1.8',
                            margin: 0
                        }}>{activeBlog.sectionDesc1}</p>
                    </div>

                    {/* Section 2 */}
                    <div style={{
                        opacity: isAnimating ? 0 : 1,
                        transform: isAnimating ? 'translateX(20px)' : 'translateX(0)',
                        transition: 'all 0.5s ease 0.3s'
                    }}>
                        <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 15px 0' }}>{activeBlog.sectionTitle2}</h3>
                        <p style={{
                            fontSize: '13px',
                            color: 'rgba(255,255,255,0.5)',
                            lineHeight: '1.8',
                            margin: 0
                        }}>{activeBlog.sectionDesc2}</p>
                    </div>

                </div>
            </div>

            {/* Bottom Footer links mimicking the image */}
            <div style={{
                maxWidth: '1300px',
                width: '100%',
                margin: 'auto auto 0 auto',
                padding: '40px 20px 20px 20px',
                display: 'grid',
                gridTemplateColumns: '120px 1fr 350px',
                gap: '40px'
            }}>
                <div></div>
                <div style={{ display: 'flex', gap: '40px', fontSize: '13px', fontWeight: '600', color: 'rgba(255,255,255,0.7)' }}>
                    <a href="https://github.com/Sanybarupal" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }} className="hover-white">GitHub</a>
                    <a href="https://x.com/sandeepbarupal_" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }} className="hover-white">Twitter</a>
                    <a href="https://www.linkedin.com/in/sandeep-barupal-a5b323321/?isSelfProfile=false" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }} className="hover-white">LinkedIn</a>
                </div>
                <div style={{ paddingLeft: '40px', fontSize: '13px', fontWeight: '600', color: 'rgba(255,255,255,0.7)' }}>
                    <span style={{ cursor: 'pointer' }} className="hover-white">Send your inquiry</span>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .hover-white:hover {
                    color: #fff !important;
                }
                .blog-number:hover {
                    color: #fff !important;
                }
                .blog-main-img:hover {
                    transform: scale(1.05);
                }
                
                @media (max-width: 1024px) {
                    .page-section > div:nth-child(2) {
                        grid-template-columns: 80px 1fr !important;
                    }
                    .page-section > div:nth-child(2) > div:nth-child(3) {
                        grid-column: 1 / -1;
                        border-left: none !important;
                        padding-left: 0 !important;
                        border-top: 1px solid rgba(255,255,255,0.05);
                    }
                    .page-section > div:nth-child(3) {
                        grid-template-columns: 1fr !important;
                    }
                }
                @media (max-width: 768px) {
                    .page-section > div:nth-child(2) {
                        grid-template-columns: 1fr !important;
                    }
                    .page-section > div:nth-child(2) > div:nth-child(1) {
                        flex-direction: row !important;
                        height: auto !important;
                        border-right: none !important;
                        border-bottom: 1px solid rgba(255,255,255,0.05);
                        padding-top: 20px !important;
                        padding-bottom: 20px !important;
                    }
                    .page-section > div:nth-child(2) > div:nth-child(2) {
                        padding-right: 0 !important;
                    }
                    .page-section > div:nth-child(1) {
                        display: none !important;
                    }
                }
            `}} />
        </section>
    );
};

export default Blog;
