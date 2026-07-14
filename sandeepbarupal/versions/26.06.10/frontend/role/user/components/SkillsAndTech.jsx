import React from 'react';

const SkillsAndTech = () => {
    const categories = [
        {
            title: 'UI/UX Design',
            items: [
                { name: 'UI Design', icon: 'fa-solid fa-table-layout' },
                { name: 'UX Design', icon: 'fa-solid fa-users' },
                { name: 'User Research', icon: 'fa-solid fa-magnifying-glass' },
                { name: 'Wireframing', icon: 'fa-solid fa-border-all' },
                { name: 'Prototyping', icon: 'fa-solid fa-layer-group' },
                { name: 'Design Systems', icon: 'fa-solid fa-cubes' },
                { name: 'Responsive Design', icon: 'fa-solid fa-desktop' },
                { name: 'Mobile-First Design', icon: 'fa-solid fa-mobile-screen' },
                { name: 'Dashboard Design', icon: 'fa-solid fa-chart-line' },
                { name: 'Landing Page Design', icon: 'fa-solid fa-rocket' },
                { name: 'Website Redesign', icon: 'fa-solid fa-rotate' }
            ]
        },
        {
            title: 'Frontend Development',
            items: [
                { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e34f26' },
                { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
                { name: 'JavaScript (ES6)', icon: 'fa-brands fa-js', color: '#f7df1e' },
                { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#7952b3' },
                { name: 'Responsive Web Design', icon: 'fa-solid fa-laptop-code' },
                { name: 'CSS Grid', icon: 'fa-solid fa-border-all' },
                { name: 'Flexbox', icon: 'fa-solid fa-arrows-left-right' },
                { name: 'Vanilla JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' },
                { name: 'Single Page Applications (SPA)', icon: 'fa-regular fa-window-maximize' },
                { name: 'AJAX', icon: 'fa-solid fa-arrow-right-arrow-left' },
                { name: 'JSON', icon: 'fa-solid fa-code' },
                { name: 'REST API Integration', icon: 'fa-solid fa-network-wired' }
            ]
        },
        {
            title: 'Backend',
            items: [
                { name: 'PHP', icon: 'fa-brands fa-php', color: '#777bb4' },
                { name: 'PHP MVC', icon: 'fa-brands fa-php', color: '#777bb4' },
                { name: 'Node.js (Basic)', icon: 'fa-brands fa-node-js', color: '#339933' },
                { name: 'Express.js (Basic)', icon: 'fa-brands fa-node-js' },
                { name: 'MySQL (Basic)', icon: 'fa-solid fa-database', color: '#4479a1' },
                { name: 'Firebase Authentication', icon: 'fa-solid fa-fire', color: '#ffca28' },
                { name: 'Firestore Database', icon: 'fa-solid fa-database', color: '#ffca28' }
            ]
        },
        {
            title: 'CMS',
            items: [
                { name: 'WordPress', icon: 'fa-brands fa-wordpress', color: '#21759b' },
                { name: 'Elementor', icon: 'fa-solid fa-e' },
                { name: 'Theme Customization', icon: 'fa-solid fa-palette' },
                { name: 'Plugin Configuration', icon: 'fa-solid fa-plug' },
                { name: 'Website Management', icon: 'fa-solid fa-gear' }
            ]
        },
        {
            title: 'Design Tools',
            items: [
                { name: 'Figma', icon: 'fa-brands fa-figma', color: '#F24E1E' },
                { name: 'Adobe Photoshop', icon: 'fa-solid fa-image', color: '#31A8FF' },
                { name: 'Adobe Illustrator', icon: 'fa-solid fa-pen-nib', color: '#FF9A00' },
                { name: 'Canva', icon: 'fa-solid fa-paint-roller', color: '#00C4CC' }
            ]
        },
        {
            title: 'Development Tools',
            items: [
                { name: 'Visual Studio Code', icon: 'fa-solid fa-code', color: '#007ACC' },
                { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#F05032' },
                { name: 'GitHub', icon: 'fa-brands fa-github' },
                { name: 'Vercel', icon: 'fa-solid fa-triangle-exclamation' },
                { name: 'Netlify', icon: 'fa-solid fa-cloud' },
                { name: 'npm', icon: 'fa-brands fa-npm', color: '#CB3837' },
                { name: 'Chrome DevTools', icon: 'fa-brands fa-chrome', color: '#4285F4' }
            ]
        },
        {
            title: 'AI Tools',
            items: [
                { name: 'ChatGPT', icon: 'fa-solid fa-robot' },
                { name: 'Claude AI', icon: 'fa-solid fa-brain' },
                { name: 'Gemini', icon: 'fa-solid fa-sparkles' },
                { name: 'Cursor AI', icon: 'fa-solid fa-terminal' },
                { name: 'GitHub Copilot', icon: 'fa-brands fa-github' },
                { name: 'Bolt.new', icon: 'fa-solid fa-bolt' },
                { name: 'Lovable', icon: 'fa-solid fa-heart' }
            ]
        },
        {
            title: 'SEO & Performance',
            items: [
                { name: 'Semantic HTML', icon: 'fa-solid fa-code' },
                { name: 'Technical SEO', icon: 'fa-solid fa-chart-line' },
                { name: 'Website Optimization', icon: 'fa-solid fa-gauge-high' },
                { name: 'Image Optimization', icon: 'fa-regular fa-image' },
                { name: 'Lazy Loading', icon: 'fa-solid fa-spinner' },
                { name: 'Accessibility Basics', icon: 'fa-solid fa-eye' }
            ]
        },
        {
            title: 'Soft Skills',
            items: [
                { name: 'Problem Solving', icon: 'fa-solid fa-puzzle-piece' },
                { name: 'UI/UX Thinking', icon: 'fa-solid fa-lightbulb' },
                { name: 'Client Communication', icon: 'fa-regular fa-comments' },
                { name: 'Team Collaboration', icon: 'fa-solid fa-users' },
                { name: 'Project Planning', icon: 'fa-solid fa-calendar-check' },
                { name: 'Requirement Analysis', icon: 'fa-solid fa-clipboard-list' }
            ]
        }
    ];


    return (
        <section className="skills-section" style={{ padding: '80px 20px', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
                
                {/* Skills */}
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Skills & Technologies
                    </h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        {categories.map((category, i) => (
                            <div key={i}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '20px', color: '#a0a0a0', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '500' }}>
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb', display: 'inline-block' }}></span>
                                    {category.title}
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                                    {category.items.map((item, j) => (
                                        <span key={j} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', color: '#fff', transition: 'background 0.3s' }}>
                                            {item.icon && <i className={item.icon} style={{ color: item.color || '#a0a0a0', fontSize: '1.1rem' }}></i>}
                                            {item.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



            </div>
        </section>
    );
};

export default SkillsAndTech;
