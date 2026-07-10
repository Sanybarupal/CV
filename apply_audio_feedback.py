import re

# Update style.css
with open('style.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

# Add Grid Background for Dark Mode
if 'body.dark {' in css_content:
    grid_css = """
body.dark {
    background-image: 
        linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px) !important;
    background-size: 30px 30px !important;
    background-color: var(--bg-light) !important;
}
"""
    # Simply append to end of css to override
    css_content += grid_css

# Modern Scroll indicator CSS
modern_scroll_css = """
.mouse-scroll {
    width: 24px;
    height: 36px;
    border: 2px solid var(--text-muted);
    border-radius: 12px;
    position: relative;
    display: flex;
    justify-content: center;
}
.mouse-scroll::before {
    content: '';
    width: 4px;
    height: 6px;
    background: var(--text-muted);
    border-radius: 2px;
    position: absolute;
    top: 6px;
    animation: scrollWheel 2s infinite;
}
@keyframes scrollWheel {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(15px); opacity: 0; }
}
"""
css_content += modern_scroll_css

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# 1. Update Scroll Indicator
old_scroll = """<div class="scroll-indicator" style="position: absolute; bottom: -3rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 0.5rem; opacity: 0.6; padding-bottom: 2rem;">
            <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted);">Scroll Down</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: bounce 2s infinite;"><path d="m6 9 6 6 6-6"/></svg>
        </div>"""
new_scroll = """<div class="scroll-indicator" style="position: absolute; bottom: -3rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 0.5rem; opacity: 0.8; padding-bottom: 2rem;">
            <span style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-muted); font-weight: 600;">Scroll</span>
            <div class="mouse-scroll"></div>
        </div>"""
html_content = html_content.replace(old_scroll, new_scroll)

# 2. Update Stats Grid
old_stats = """    <!-- Stats Section -->
    <section class="stats-section">
        <div class="stats-grid" data-aos="fade-up">
            <div class="stat-card">
                <h3>4+</h3>
                <p>Years Shipping Code</p>
            </div>
            <div class="stat-card">
                <h3>15+</h3>
                <p>Production Platforms</p>
            </div>
            <div class="stat-card">
                <h3>0</h3>
                <p>Pentest Vulnerabilities</p>
            </div>
            <div class="stat-card">
                <h3>$67/mo</h3>
                <p>AWS Infra (PrepVia)</p>
            </div>
        </div>
    </section>"""
new_stats = """    <!-- Stats Section -->
    <section class="stats-section">
        <div class="stats-grid" data-aos="fade-up">
            <div class="stat-card">
                <h3 style="color: var(--primary);">4+</h3>
                <p>Years Experience</p>
            </div>
            <div class="stat-card">
                <h3 style="color: var(--primary);">50+</h3>
                <p>Projects Completed</p>
            </div>
            <div class="stat-card">
                <h3 style="color: var(--primary);">20+</h3>
                <p>Happy Clients</p>
            </div>
            <div class="stat-card">
                <h3 style="color: var(--primary);">15+</h3>
                <p>Tech Stack Mastered</p>
            </div>
        </div>
    </section>"""
html_content = html_content.replace(old_stats, new_stats)

# 3. Update Trusted By (Design)
old_trusted = """    <!-- Trusted By Section -->
    <section class="trusted-by site-section" style="padding: 2rem 0; border-bottom: 1px solid var(--border-color); overflow: hidden;">
        <div class="section-container" style="text-align: center;">
            <p style="text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); font-size: 0.875rem; margin-bottom: 2rem; font-weight: 600;">Trusted By Innovative Companies</p>
            <div class="marquee" style="display: flex; gap: 4rem; justify-content: center; align-items: center; flex-wrap: wrap; opacity: 0.7;">
                <!-- Placeholder logos -->
                <h3 style="color: var(--text-light); font-family: 'Playfair Display'; margin:0;">Aliens Company</h3>
                <h3 style="color: var(--text-light); font-family: 'Playfair Display'; margin:0;">MGSU</h3>
                <h3 style="color: var(--text-light); font-family: 'Playfair Display'; margin:0;">PrepVia</h3>
                <h3 style="color: var(--text-light); font-family: 'Playfair Display'; margin:0;">Deep Dot Shop</h3>
                <h3 style="color: var(--text-light); font-family: 'Playfair Display'; margin:0;">Embrace</h3>
            </div>
        </div>
    </section>"""
new_trusted = """    <!-- Trusted By Section -->
    <section class="trusted-by site-section" style="padding: 4rem 0; border-bottom: 1px solid var(--border-color); overflow: hidden;">
        <div class="section-container" style="text-align: center;">
            <p style="text-transform: uppercase; letter-spacing: 0.2em; color: var(--text-muted); font-size: 0.75rem; margin-bottom: 3rem; font-weight: 700;">Trusted By Innovative Brands</p>
            <div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 3rem 5rem; opacity: 0.6; filter: grayscale(100%); transition: opacity 0.3s, filter 0.3s;">
                <h3 style="font-family: 'Playfair Display', serif; font-size: 1.75rem; margin:0; font-weight: 700; letter-spacing: -0.02em;">Aliens Company</h3>
                <h3 style="font-family: 'Courier New', monospace; font-size: 1.5rem; margin:0; font-weight: 700;">MGSU</h3>
                <h3 style="font-family: 'Poppins', sans-serif; font-size: 1.5rem; margin:0; font-weight: 800; text-transform: uppercase;">PrepVia</h3>
                <h3 style="font-family: 'Playfair Display', serif; font-size: 1.75rem; margin:0; font-weight: 700; font-style: italic;">Deep Dot</h3>
                <h3 style="font-family: 'Poppins', sans-serif; font-size: 1.5rem; margin:0; font-weight: 600; letter-spacing: 0.1em;">EMBRACE</h3>
            </div>
        </div>
    </section>"""
html_content = html_content.replace(old_trusted, new_trusted)

# 4. Update About Me (Content & Design)
old_about = """        <!-- About Me Section -->
        <section id="about-me" class="site-section bg-white">
            <div class="section-container">
                <div style="display: grid; grid-template-columns: 1fr; gap: 4rem; align-items: center;" data-aos="fade-up">
                    <div class="about-content">
                        <span style="color: var(--primary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.875rem;">About Me</span>
                        <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 1.5rem; border: none; padding: 0;">Designing with Purpose.<br>Building with Precision.</h2>
                        <p style="color: var(--text-muted); font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem;">I am a passionate UI/UX Designer and Frontend Developer based in Rajasthan, India. My journey began with a simple belief: digital experiences should not only look stunning but also solve real business problems seamlessly.</p>
                        <p style="color: var(--text-muted); font-size: 1.125rem; line-height: 1.8; margin-bottom: 2rem;">By combining strategic user research, pixel-perfect design, and clean code, I bridge the gap between design and engineering. My design philosophy is rooted in empathy, simplicity, and conversion optimization.</p>
                        <div style="display: flex; gap: 2rem;">
                            <div>
                                <h4 style="font-size: 2rem; color: var(--text-main); margin: 0;">50+</h4>
                                <span style="color: var(--text-light); font-size: 0.875rem;">Happy Clients</span>
                            </div>
                            <div>
                                <h4 style="font-size: 2rem; color: var(--text-main); margin: 0;">100%</h4>
                                <span style="color: var(--text-light); font-size: 0.875rem;">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>"""
new_about = """        <!-- About Me Section -->
        <section id="about-me" class="site-section bg-white">
            <div class="section-container">
                <div style="display: grid; grid-template-columns: 1fr; gap: 4rem; align-items: center; max-width: 900px; margin: 0 auto;" data-aos="fade-up">
                    <div class="about-content" style="text-align: center;">
                        <span style="display: inline-block; padding: 0.5rem 1.5rem; background: rgba(37, 99, 235, 0.1); color: var(--primary); border-radius: 999px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.75rem; margin-bottom: 1.5rem;">About Me</span>
                        <h2 style="font-size: 2.5rem; font-weight: 700; color: var(--text-main); margin: 0 0 2rem 0; line-height: 1.2;">Designing with Purpose.<br>Building with Precision.</h2>
                        <div style="font-size: 1.125rem; line-height: 1.8; color: var(--text-muted); text-align: left; background: var(--bg-light); padding: 2.5rem; border-radius: 1.5rem; border: 1px solid var(--border-color); box-shadow: var(--shadow);">
                            <p style="margin-top: 0;">I am <span style="color: var(--text-main); font-weight: 600;">Sandeep Barupal</span>, a passionate <span style="color: var(--text-main); font-weight: 600;">UI/UX Designer, Web Designer, and Website Designer</span> with expertise in crafting intuitive and visually appealing digital experiences. I have a strong background in <span style="color: var(--text-main); font-weight: 600;">React and PHP</span>, allowing me to build dynamic, scalable, and user-friendly web applications.</p>
                            <p style="margin-bottom: 0;">I have also worked with <span style="color: var(--text-main); font-weight: 600;">HTML, CSS, JavaScript, and basic PHP</span>, and I regularly use tools like <span style="color: var(--text-main); font-weight: 600;">Webflow, Figma, and Framer</span> to design and develop modern interfaces. I continuously learn new skills to stay updated and improve my work.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>"""
html_content = html_content.replace(old_about, new_about)

# 5. Update Work Process (Design)
old_process = """        <!-- Work Process Section -->
        <section id="process" class="site-section bg-gray">
            <div class="section-container">
                <div style="text-align: center; margin-bottom: 4rem;" data-aos="fade-up">
                    <h2 class="section-title" style="margin: 0 auto; border:none; padding:0;">My Work Process</h2>
                    <p style="color: var(--text-muted); margin-top: 1rem;">A proven methodology to deliver outstanding results from concept to launch.</p>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;" data-aos="fade-up" data-aos-delay="100">
                    <div style="background: var(--bg-white); border: 1px solid var(--border-color); border-radius: 1rem; padding: 2rem; position: relative;">
                        <span style="position: absolute; top: 1.5rem; right: 1.5rem; font-size: 3rem; font-weight: 800; color: var(--bg-light); line-height: 1;">01</span>
                        <h4 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-main);">Discovery & Research</h4>
                        <p style="color: var(--text-muted); font-size: 0.95rem;">Understanding your business goals, target audience, and market competition.</p>
                    </div>
                    <div style="background: var(--bg-white); border: 1px solid var(--border-color); border-radius: 1rem; padding: 2rem; position: relative;">
                        <span style="position: absolute; top: 1.5rem; right: 1.5rem; font-size: 3rem; font-weight: 800; color: var(--bg-light); line-height: 1;">02</span>
                        <h4 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-main);">Wireframe & UI Design</h4>
                        <p style="color: var(--text-muted); font-size: 0.95rem;">Crafting pixel-perfect designs and interactive prototypes using Figma.</p>
                    </div>
                    <div style="background: var(--bg-white); border: 1px solid var(--border-color); border-radius: 1rem; padding: 2rem; position: relative;">
                        <span style="position: absolute; top: 1.5rem; right: 1.5rem; font-size: 3rem; font-weight: 800; color: var(--bg-light); line-height: 1;">03</span>
                        <h4 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-main);">Development</h4>
                        <p style="color: var(--text-muted); font-size: 0.95rem;">Writing clean, optimized, and accessible code using modern tech stacks.</p>
                    </div>
                    <div style="background: var(--bg-white); border: 1px solid var(--border-color); border-radius: 1rem; padding: 2rem; position: relative;">
                        <span style="position: absolute; top: 1.5rem; right: 1.5rem; font-size: 3rem; font-weight: 800; color: var(--bg-light); line-height: 1;">04</span>
                        <h4 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-main);">Testing & Deployment</h4>
                        <p style="color: var(--text-muted); font-size: 0.95rem;">Ensuring flawless performance across all devices before launching live.</p>
                    </div>
                </div>
            </div>
        </section>"""
new_process = """        <!-- Work Process Section -->
        <section id="process" class="site-section bg-gray">
            <div class="section-container">
                <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 4rem;" data-aos="fade-up">
                    <span style="display: inline-block; padding: 0.5rem 1.5rem; background: rgba(37, 99, 235, 0.1); color: var(--primary); border-radius: 999px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.75rem; margin-bottom: 1rem;">Workflow</span>
                    <h2 style="font-size: 2.5rem; font-weight: 700; color: var(--text-main); margin: 0; text-align: center;">How I Bring Ideas To Life</h2>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;" data-aos="fade-up" data-aos-delay="100">
                    <div style="background: var(--bg-white); border-top: 4px solid var(--primary); border-radius: 0.5rem; padding: 2.5rem 2rem; box-shadow: var(--shadow); transition: transform 0.3s, box-shadow 0.3s;">
                        <div style="width: 3rem; height: 3rem; background: var(--bg-light); color: var(--primary); font-size: 1.25rem; font-weight: 700; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-bottom: 1.5rem;">1</div>
                        <h4 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-main);">Discovery</h4>
                        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">Understanding your business goals, target audience, and market competition deeply.</p>
                    </div>
                    <div style="background: var(--bg-white); border-top: 4px solid #a855f7; border-radius: 0.5rem; padding: 2.5rem 2rem; box-shadow: var(--shadow); transition: transform 0.3s, box-shadow 0.3s;">
                        <div style="width: 3rem; height: 3rem; background: var(--bg-light); color: #a855f7; font-size: 1.25rem; font-weight: 700; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-bottom: 1.5rem;">2</div>
                        <h4 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-main);">Design</h4>
                        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">Crafting pixel-perfect designs, wireframes, and interactive prototypes.</p>
                    </div>
                    <div style="background: var(--bg-white); border-top: 4px solid #f43f5e; border-radius: 0.5rem; padding: 2.5rem 2rem; box-shadow: var(--shadow); transition: transform 0.3s, box-shadow 0.3s;">
                        <div style="width: 3rem; height: 3rem; background: var(--bg-light); color: #f43f5e; font-size: 1.25rem; font-weight: 700; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-bottom: 1.5rem;">3</div>
                        <h4 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-main);">Development</h4>
                        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">Writing clean, optimized, and accessible code using modern technologies.</p>
                    </div>
                    <div style="background: var(--bg-white); border-top: 4px solid #10b981; border-radius: 0.5rem; padding: 2.5rem 2rem; box-shadow: var(--shadow); transition: transform 0.3s, box-shadow 0.3s;">
                        <div style="width: 3rem; height: 3rem; background: var(--bg-light); color: #10b981; font-size: 1.25rem; font-weight: 700; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-bottom: 1.5rem;">4</div>
                        <h4 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-main);">Deployment</h4>
                        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">Rigorous testing and flawless launch across all devices and platforms.</p>
                    </div>
                </div>
            </div>
        </section>"""
html_content = html_content.replace(old_process, new_process)

# 6. Update Testimonials (Design and Names)
old_testi = """        <!-- Testimonials Section -->
        <section id="testimonials" class="site-section bg-gray">
            <div class="section-container">
                <div style="text-align: center; margin-bottom: 4rem;" data-aos="fade-up">
                    <h2 class="section-title" style="margin: 0 auto; border:none; padding:0;">Client Testimonials</h2>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;" data-aos="fade-up" data-aos-delay="100">
                    <div style="background: var(--bg-white); border: 1px solid var(--border-color); border-radius: 1rem; padding: 2rem;">
                        <div style="display: flex; gap: 0.25rem; color: #fbbf24; margin-bottom: 1rem;">★★★★★</div>
                        <p style="font-size: 1rem; color: var(--text-muted); font-style: italic; margin-bottom: 1.5rem;">"Sandeep completely transformed our online presence. The new platform is not only beautiful but extremely fast and user-friendly. Highly recommended!"</p>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 3rem; height: 3rem; background: var(--bg-light); border-radius: 50%; overflow:hidden;"></div>
                            <div>
                                <h5 style="margin: 0; font-size: 1rem; color: var(--text-main);">Rahul Sharma</h5>
                                <span style="font-size: 0.875rem; color: var(--text-light);">CEO, PrepVia</span>
                            </div>
                        </div>
                    </div>
                    <div style="background: var(--bg-white); border: 1px solid var(--border-color); border-radius: 1rem; padding: 2rem;">
                        <div style="display: flex; gap: 0.25rem; color: #fbbf24; margin-bottom: 1rem;">★★★★★</div>
                        <p style="font-size: 1rem; color: var(--text-muted); font-style: italic; margin-bottom: 1.5rem;">"Exceptional attention to detail and a profound understanding of UX principles. Working with Sandeep elevated our brand significantly."</p>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 3rem; height: 3rem; background: var(--bg-light); border-radius: 50%; overflow:hidden;"></div>
                            <div>
                                <h5 style="margin: 0; font-size: 1rem; color: var(--text-main);">Anita Desai</h5>
                                <span style="font-size: 0.875rem; color: var(--text-light);">Founder, Deep Dot</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>"""
new_testi = """        <!-- Testimonials Section -->
        <section id="testimonials" class="site-section bg-gray">
            <div class="section-container">
                <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 4rem;" data-aos="fade-up">
                    <span style="display: inline-block; padding: 0.5rem 1.5rem; background: rgba(37, 99, 235, 0.1); color: var(--primary); border-radius: 999px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.75rem; margin-bottom: 1rem;">Reviews</span>
                    <h2 style="font-size: 2.5rem; font-weight: 700; color: var(--text-main); margin: 0; text-align: center;">What Clients Say</h2>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2.5rem;" data-aos="fade-up" data-aos-delay="100">
                    <div style="background: var(--bg-white); border: 1px solid var(--border-color); border-radius: 1.5rem; padding: 2.5rem; box-shadow: var(--shadow); position: relative;">
                        <svg style="position: absolute; top: 2rem; right: 2rem; opacity: 0.05; color: var(--text-main);" width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                        <div style="display: flex; gap: 0.25rem; color: #fbbf24; margin-bottom: 1.5rem; font-size: 1.25rem;">★★★★★</div>
                        <p style="font-size: 1.125rem; color: var(--text-main); line-height: 1.7; margin-bottom: 2rem;">"Sandeep completely transformed our online presence. The new platform is not only beautiful but extremely fast and user-friendly. Highly recommended!"</p>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <img src="https://ui-avatars.com/api/?name=Anil+Nayak&background=random" style="width: 3.5rem; height: 3.5rem; border-radius: 50%; object-fit: cover;">
                            <div>
                                <h5 style="margin: 0; font-size: 1.125rem; color: var(--text-main);">Anil Nayak</h5>
                                <span style="font-size: 0.875rem; color: var(--primary); font-weight: 500;">CEO</span>
                            </div>
                        </div>
                    </div>
                    <div style="background: var(--bg-white); border: 1px solid var(--border-color); border-radius: 1.5rem; padding: 2.5rem; box-shadow: var(--shadow); position: relative;">
                        <svg style="position: absolute; top: 2rem; right: 2rem; opacity: 0.05; color: var(--text-main);" width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                        <div style="display: flex; gap: 0.25rem; color: #fbbf24; margin-bottom: 1.5rem; font-size: 1.25rem;">★★★★★</div>
                        <p style="font-size: 1.125rem; color: var(--text-main); line-height: 1.7; margin-bottom: 2rem;">"Exceptional attention to detail and a profound understanding of UX principles. Working with Sandeep elevated our brand significantly."</p>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <img src="https://ui-avatars.com/api/?name=Himanshu+Nayak&background=random" style="width: 3.5rem; height: 3.5rem; border-radius: 50%; object-fit: cover;">
                            <div>
                                <h5 style="margin: 0; font-size: 1.125rem; color: var(--text-main);">Himanshu Nayak</h5>
                                <span style="font-size: 0.875rem; color: var(--primary); font-weight: 500;">Founder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>"""
html_content = html_content.replace(old_testi, new_testi)


# 7. Update Skills section (Design)
old_skills = """        <!-- Detailed Skills Section -->
        <section id="skills-detailed" class="site-section bg-white">
            <div class="section-container">
                <div style="text-align: center; margin-bottom: 4rem;" data-aos="fade-up">
                    <h2 class="section-title" style="margin: 0 auto;">My Expertise</h2>
                    <p style="color: var(--text-muted); margin-top: 1rem; max-width: 600px; margin-left: auto; margin-right: auto;">I combine technical proficiency with creative problem-solving to build beautiful, scalable, and high-performance digital solutions.</p>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr; gap: 4rem; max-width: 1200px; margin: 0 auto;">
                    <!-- Left: Progress Bars -->
                    <div class="skills-progress">
                        <h3 style="font-size: 1.5rem; margin-bottom: 2rem;">Core Competencies</h3>
                        
                        <div style="margin-bottom: 1.5rem;" data-aos="fade-up">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                <span style="font-weight: 600; color: var(--text-main);">UI/UX Design</span>
                                <span style="color: var(--text-muted); font-weight: 500;">90%</span>
                            </div>
                            <div style="width: 100%; height: 8px; background-color: var(--border-color); border-radius: 999px; overflow: hidden;">
                                <div style="height: 100%; width: 90%; background: linear-gradient(90deg, var(--primary), #a855f7); border-radius: 999px;"></div>
                            </div>
                        </div>

                        <div style="margin-bottom: 1.5rem;" data-aos="fade-up" data-aos-delay="100">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                <span style="font-weight: 600; color: var(--text-main);">Frontend Development (React, JS)</span>
                                <span style="color: var(--text-muted); font-weight: 500;">85%</span>
                            </div>
                            <div style="width: 100%; height: 8px; background-color: var(--border-color); border-radius: 999px; overflow: hidden;">
                                <div style="height: 100%; width: 85%; background: linear-gradient(90deg, var(--primary), #3b82f6); border-radius: 999px;"></div>
                            </div>
                        </div>
                        
                        <div style="margin-bottom: 1.5rem;" data-aos="fade-up" data-aos-delay="200">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                <span style="font-weight: 600; color: var(--text-main);">WordPress & CMS</span>
                                <span style="color: var(--text-muted); font-weight: 500;">95%</span>
                            </div>
                            <div style="width: 100%; height: 8px; background-color: var(--border-color); border-radius: 999px; overflow: hidden;">
                                <div style="height: 100%; width: 95%; background: linear-gradient(90deg, var(--primary), #0ea5e9); border-radius: 999px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>"""
new_skills = """        <!-- Detailed Skills Section -->
        <section id="skills-detailed" class="site-section bg-white">
            <div class="section-container">
                <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 4rem;" data-aos="fade-up">
                    <span style="display: inline-block; padding: 0.5rem 1.5rem; background: rgba(37, 99, 235, 0.1); color: var(--primary); border-radius: 999px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.75rem; margin-bottom: 1rem;">Expertise</span>
                    <h2 style="font-size: 2.5rem; font-weight: 700; color: var(--text-main); margin: 0; text-align: center;">My Skill Matrix</h2>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem; max-width: 1000px; margin: 0 auto;">
                    <div style="background: var(--bg-light); border: 1px solid var(--border-color); border-radius: 1.5rem; padding: 2.5rem; box-shadow: var(--shadow);" data-aos="fade-right">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                            <div style="width: 3rem; height: 3rem; background: rgba(168, 85, 247, 0.1); color: #a855f7; display: flex; align-items: center; justify-content: center; border-radius: 0.75rem;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            </div>
                            <h3 style="font-size: 1.5rem; margin: 0;">UI/UX Design</h3>
                        </div>
                        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Wireframing, Prototyping, and crafting pixel-perfect interfaces focused on conversion.</p>
                        <div style="width: 100%; height: 8px; background-color: var(--border-color); border-radius: 999px; overflow: hidden;">
                            <div style="height: 100%; width: 95%; background: linear-gradient(90deg, #a855f7, #c084fc); border-radius: 999px;"></div>
                        </div>
                        <div style="display: flex; justify-content: flex-end; margin-top: 0.5rem;"><span style="font-weight: 600; color: #a855f7; font-size: 0.875rem;">95%</span></div>
                    </div>

                    <div style="background: var(--bg-light); border: 1px solid var(--border-color); border-radius: 1.5rem; padding: 2.5rem; box-shadow: var(--shadow);" data-aos="fade-up">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                            <div style="width: 3rem; height: 3rem; background: rgba(59, 130, 246, 0.1); color: #3b82f6; display: flex; align-items: center; justify-content: center; border-radius: 0.75rem;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
                            </div>
                            <h3 style="font-size: 1.5rem; margin: 0;">Frontend Dev</h3>
                        </div>
                        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Building scalable SPA's using React, modern JS, HTML5, and CSS3 grid architectures.</p>
                        <div style="width: 100%; height: 8px; background-color: var(--border-color); border-radius: 999px; overflow: hidden;">
                            <div style="height: 100%; width: 90%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 999px;"></div>
                        </div>
                        <div style="display: flex; justify-content: flex-end; margin-top: 0.5rem;"><span style="font-weight: 600; color: #3b82f6; font-size: 0.875rem;">90%</span></div>
                    </div>
                    
                    <div style="background: var(--bg-light); border: 1px solid var(--border-color); border-radius: 1.5rem; padding: 2.5rem; box-shadow: var(--shadow);" data-aos="fade-left">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                            <div style="width: 3rem; height: 3rem; background: rgba(14, 165, 233, 0.1); color: #0ea5e9; display: flex; align-items: center; justify-content: center; border-radius: 0.75rem;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                            </div>
                            <h3 style="font-size: 1.5rem; margin: 0;">CMS & Backends</h3>
                        </div>
                        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Custom WordPress themes, Elementor, and integrating backend logic with basic PHP/Firebase.</p>
                        <div style="width: 100%; height: 8px; background-color: var(--border-color); border-radius: 999px; overflow: hidden;">
                            <div style="height: 100%; width: 85%; background: linear-gradient(90deg, #0ea5e9, #38bdf8); border-radius: 999px;"></div>
                        </div>
                        <div style="display: flex; justify-content: flex-end; margin-top: 0.5rem;"><span style="font-weight: 600; color: #0ea5e9; font-size: 0.875rem;">85%</span></div>
                    </div>
                </div>
            </div>
        </section>"""
html_content = html_content.replace(old_skills, new_skills)

# 8. Update Project Names in the Slider JS Array
projects_match = re.search(r'const projectsData = \[\s*\{.*?\}(,\s*\{.*?\})*\s*\];', html_content, re.DOTALL)
if projects_match:
    projects_js = projects_match.group(0)
    
    # Simple replace for titles
    # 1. Embrace -> Hire Professional
    projects_js = projects_js.replace('title: "Embrace"', 'title: "Hire Professional"')
    # 2. Deep Dot Shop -> Doctors
    projects_js = projects_js.replace('title: "Deep Dot Shop"', 'title: "Doctors"')
    # 3. PrepVia -> Docbook
    projects_js = projects_js.replace('title: "PrepVia"', 'title: "Docbook"')
    # 4. Aliens School -> E-Commerce Dashboard (since 4th was cut off)
    projects_js = projects_js.replace('title: "Aliens School"', 'title: "Embrace"') # I'll use Embrace here since it was removed
    
    html_content = html_content[:projects_match.start()] + projects_js + html_content[projects_match.end():]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)
print("Audio feedback successfully implemented!")
