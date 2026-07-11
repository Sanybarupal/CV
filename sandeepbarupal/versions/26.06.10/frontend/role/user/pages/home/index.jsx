import React from 'react';
import Hero from './components/Hero';
import StatsAndLogos from './components/StatsAndLogos';
import AboutAndExpertise from './components/AboutAndExpertise';
import SkillsAndTech from './components/SkillsAndTech';
import Portfolio from './components/Portfolio';
import ExperienceAndEducation from './components/ExperienceAndEducation';
import SocialProof from './components/SocialProof';
import ContactAndFooter from './components/ContactAndFooter';

const Home = () => {
    return (
        <div style={{ width: '100%', overflowX: 'hidden' }}>
            <Hero />
            <StatsAndLogos />
            <AboutAndExpertise />
            <ExperienceAndEducation />
            <SkillsAndTech />
            <Portfolio />
            <SocialProof />
            <ContactAndFooter />
        </div>
    );
};

export default Home;
