import React from 'react';
import profilePic from '../../../assets/img/profile.png';

const Hero = () => {
    return (
        <section className="hero-section" style={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            minHeight: '100vh',
            background: '#070a08', // deeper, richer dark
            overflow: 'hidden',
            color: '#fff',
            fontFamily: "'Inter', sans-serif",
            padding: '0',
            display: 'block',
        }}>

            {/* ── Cinematic ambient glow behind portrait ── */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(74, 222, 128, 0.08) 0%, transparent 60%)',
                zIndex: 1,
                pointerEvents: 'none',
            }} />

            {/* ── Subtitle (Glass pill badge) ── */}
            <div className="hero-subtitle" style={{
                position: 'absolute',
                top: '22%',
                left: '8vw',
                zIndex: 10,
                fontSize: '15px',
                fontWeight: '500',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#fff',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '8px 20px',
                borderRadius: '50px',
                backdropFilter: 'blur(10px)',
            }}>
                <span style={{ fontSize: '1.2em' }}>👋</span> Hello, I'm a Full Stack Developer
            </div>

            {/* ── Massive title (left-aligned) ── */}
            <h1 className="hero-title" style={{
                position: 'absolute',
                top: '30%',
                left: '7.5vw',
                zIndex: 4,
                fontSize: 'clamp(50px, 8vw, 90px)',
                fontWeight: '900',
                margin: '0px',
                lineHeight: '0.9',
                letterSpacing: '-2px',
                textTransform: 'uppercase'
            }}>
                <span style={{
                    display: 'block',
                    WebkitTextStroke: '2px rgba(255, 255, 255, 0.2)',
                    color: 'transparent',
                    transition: 'all 0.4s ease',
                }} className="title-outline">
                    Sandeep
                </span>
                <span style={{
                    display: 'block',
                    color: '#4ade80',
                    textShadow: '0 0 40px rgba(74, 222, 128, 0.3)'
                }}>
                    Barupal
                </span>
            </h1>

            {/* ── Portrait image (Anchored to bottom-center) ── */}
            <div className="hero-portrait" style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'clamp(350px, 35vw, 550px)',
                height: '85vh',
                zIndex: 5,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                pointerEvents: 'auto',
                cursor: 'pointer',
            }}>
                <div className="glitch-img-container" style={{ position: 'relative', width: '100%', height: '100%' }}>
                    {/* Base image */}
                    <img src={profilePic} alt="Sandeep Barupal" className="hero-img-base" />
                    {/* Slices */}
                    <div className="hero-img-slice hero-img-slice-1" style={{ backgroundImage: `url(${profilePic})` }} />
                    <div className="hero-img-slice hero-img-slice-2" style={{ backgroundImage: `url(${profilePic})` }} />
                    <div className="hero-img-slice hero-img-slice-3" style={{ backgroundImage: `url(${profilePic})` }} />
                </div>
                {/* Seamless Fade-out gradient at the bottom */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '25%',
                    background: 'linear-gradient(to top, #070a08, transparent)',
                    zIndex: 6,
                    pointerEvents: 'none',
                }} />
            </div>

            {/* ── Bottom-left: Contact ── */}
            <div className="hero-contact" style={{
                position: 'absolute',
                bottom: '50px',
                left: '8vw',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
            }}>
                <a href="mailto:info@sandeepbarupal.com" style={{ 
                    display: 'flex', alignItems: 'center', gap: '10px', margin: 0, fontSize: '14px', 
                    color: 'rgba(255,255,255,0.7)', fontWeight: '500', textDecoration: 'none', transition: 'color 0.3s' 
                }} className="contact-link">
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 10px #4ade80' }}></span>
                    info@sandeepbarupal.com
                </a>
                <a href="tel:+917878142323" style={{ 
                    display: 'flex', alignItems: 'center', gap: '10px', margin: 0, fontSize: '14px', 
                    color: 'rgba(255,255,255,0.7)', fontWeight: '500', textDecoration: 'none', transition: 'color 0.3s' 
                }} className="contact-link">
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 10px #4ade80' }}></span>
                    +91 7878 142323
                </a>
            </div>

            {/* ── Right side: Scroll + description + social ── */}
            <div className="hero-right" style={{
                position: 'absolute',
                bottom: '50px',
                right: '6vw',
                zIndex: 10,
                maxWidth: '450px',
                display: 'flex',
                flexDirection: 'column',
                gap: '35px',
            }}>
                {/* Scroll line */}
                <div style={{
                    position: 'absolute',
                    right: '0',
                    top: '-180px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px',
                }}>
                    <div className="hero-scroll-line" style={{
                        width: '1px',
                        height: '60px',
                        background: 'linear-gradient(to bottom, #4ade80, transparent)',
                    }} />
                    <span style={{
                        writingMode: 'vertical-rl',
                        fontSize: '11px',
                        letterSpacing: '6px',
                        color: 'rgba(255,255,255,0.4)',
                        textTransform: 'uppercase',
                        fontWeight: '700',
                    }}>Scroll</span>
                </div>

                {/* Description */}
                <p style={{
                    margin: 0,
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: '1.9',
                    fontWeight: '400',
                }}>
                    I build fast, scalable, and user-friendly web applications using modern JavaScript technologies. My main tools of choice are React on the frontend and Node.js on the backend.
                </p>

                {/* Social links (Tags) */}
                <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '15px' }}>
                    <a href="https://x.com/sandeepbarupal_" target="_blank" rel="noreferrer" className="hero-social-tag">Twitter (X)</a>
                    <a href="https://www.linkedin.com/in/sandeep-barupal-a5b323321/?isSelfProfile=false" target="_blank" rel="noreferrer" className="hero-social-tag">LinkedIn</a>
                    <a href="https://github.com/Sanybarupal" target="_blank" rel="noreferrer" className="hero-social-tag">GitHub</a>
                </div>
            </div>

            {/* ── CSS Animations & Styles ── */}
            <style dangerouslySetInnerHTML={{
                __html: `
                /* Keyframes */
                @keyframes heroFadeUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes heroFadeRight {
                    from { opacity: 0; transform: translateX(-40px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes heroFadeLeft {
                    from { opacity: 0; transform: translateX(40px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes heroPortraitUp {
                    from { opacity: 0; transform: translateX(-50%) translateY(60px); }
                    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
                }
                @keyframes scrollPulse {
                    0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
                    50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
                    50.1% { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
                    100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
                }

                /* Apply animations */
                .hero-subtitle {
                    animation: heroFadeRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
                }
                .hero-title {
                    animation: heroFadeRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
                }
                .hero-portrait {
                    animation: heroPortraitUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
                }
                .hero-contact {
                    animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both;
                }
                .hero-right {
                    animation: heroFadeLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both;
                }
                .hero-scroll-line {
                    animation: scrollPulse 2s ease-in-out infinite;
                }

                /* Title Hover Effect */
                .hero-title:hover .title-outline {
                    -webkit-text-stroke: 2px #4ade80;
                    text-shadow: 0 0 20px rgba(74, 222, 128, 0.3);
                }

                /* Contact Hovers */
                .contact-link:hover {
                    color: #fff !important;
                }

                /* Social Tags Hover */
                .hero-social-tag {
                    color: rgba(255,255,255,0.7);
                    text-decoration: none;
                    font-size: 13px;
                    font-weight: 600;
                    padding: 8px 16px;
                    border-radius: 20px;
                    border: 1px solid rgba(255,255,255,0.1);
                    background: rgba(255,255,255,0.03);
                    transition: all 0.3s;
                }
                .hero-social-tag:hover {
                    background: #4ade80;
                    color: #000;
                    border-color: #4ade80;
                    box-shadow: 0 0 20px rgba(74,222,128,0.4);
                }

                /* Glitch/Slice Hover Effect on Portrait */
                .glitch-img-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                .glitch-img-container .hero-img-base {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: top center;
                    filter: drop-shadow(0 20px 50px rgba(0,0,0,0.9));
                    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                .hero-img-slice {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: top center;
                    background-repeat: no-repeat;
                    opacity: 0;
                    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    pointer-events: none;
                }
                .hero-img-slice-1 { clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%); }
                .hero-img-slice-2 { clip-path: polygon(0 33%, 100% 33%, 100% 66%, 0 66%); }
                .hero-img-slice-3 { clip-path: polygon(0 66%, 100% 66%, 100% 100%, 0 100%); }

                .hero-portrait:hover .hero-img-base {
                    opacity: 0.6;
                    filter: drop-shadow(0 20px 50px rgba(74, 222, 128, 0.5)) grayscale(40%);
                }
                .hero-portrait:hover .hero-img-slice {
                    opacity: 1;
                }
                .hero-portrait:hover .hero-img-slice-1 {
                    transform: translateX(-15px);
                    filter: drop-shadow(5px 0 0 rgba(74, 222, 128, 0.6));
                }
                .hero-portrait:hover .hero-img-slice-2 {
                    transform: translateX(20px);
                    filter: drop-shadow(-5px 0 0 rgba(255,0,100,0.5));
                }
                .hero-portrait:hover .hero-img-slice-3 {
                    transform: translateX(-10px);
                    filter: drop-shadow(5px 0 0 rgba(0,100,255,0.5));
                }
            `}} />
        </section >
    );
};

export default Hero;
