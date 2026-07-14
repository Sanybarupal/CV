import React from 'react';
import ServicesSection from '../../components/ServicesSection';
import SkillsAndTech from '../../components/SkillsAndTech';

const Service = () => {
    return (
        <div style={{ width: '100%', overflowX: 'hidden', minHeight: '100vh', paddingTop: '80px' }}>
            <ServicesSection />
            <SkillsAndTech />
        </div>
    );
};

export default Service;
