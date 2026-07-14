import React from 'react';
import Hero from '../../components/Hero';
import StatsAndLogos from '../../components/StatsAndLogos';
import AboutMeSection from '../../components/AboutMeSection';
import ServicesSection from '../../components/ServicesSection';
import SkillsAndTech from '../../components/SkillsAndTech';
import Portfolio from '../../components/Portfolio';
import ExperienceAndEducation from '../../components/ExperienceAndEducation';
import SocialProof from '../../components/SocialProof';
import ContactAndFooter from '../../components/ContactAndFooter';

const Home = () => {
    return (
        <div style={{ width: '100%', overflowX: 'hidden' }}>
            <Hero />
            <StatsAndLogos />
            <AboutMeSection />
            <ExperienceAndEducation />
            <SkillsAndTech />
            <ServicesSection />
            <Portfolio />
            <SocialProof />
            <ContactAndFooter />
        </div>
    );
};

export default Home;
