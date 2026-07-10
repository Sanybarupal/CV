import os

html_file = 'index.html'
with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add "Trusted By / Clients" section after Stats Grid
trusted_html = """
    <!-- Trusted By Section -->
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
    </section>
"""

# Find Stats section end
stats_end = content.find('</section>\n\n    <main class="site-main">')
if stats_end != -1:
    stats_end += len('</section>')
    content = content[:stats_end] + "\n" + trusted_html + content[stats_end:]

# 2. Add "About Me" and "Work Process" before Education
about_html = """
        <!-- About Me Section -->
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
        </section>

        <!-- Work Process Section -->
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
        </section>
"""

edu_idx = content.find('<!-- Education Section -->')
if edu_idx != -1:
    content = content[:edu_idx] + about_html + "\n" + content[edu_idx:]


# 3. Add Blog & FAQ before Contact
extras_html = """
        <!-- Blog Section -->
        <section id="blog" class="site-section bg-gray">
            <div class="section-container">
                <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem;" data-aos="fade-right">
                    <div>
                        <h2 class="section-title" style="margin: 0; border: none; padding: 0;">Insights & Articles</h2>
                        <p style="color: var(--text-muted); margin-top: 0.5rem;">Thoughts on UI/UX, Web Design, and Tech.</p>
                    </div>
                    <a href="#" class="btn-outline" style="border:none; border-bottom: 1px solid var(--primary); border-radius: 0; padding: 0.25rem 0;">View All Posts</a>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;" data-aos="fade-up">
                    <!-- Blog Card -->
                    <div style="background: var(--bg-white); border: 1px solid var(--border-color); border-radius: 1rem; overflow: hidden; transition: transform 0.3s; cursor: pointer;">
                        <div style="height: 200px; background: var(--bg-light); display: flex; align-items: center; justify-content: center; color: var(--text-light);">[Image Placeholder]</div>
                        <div style="padding: 1.5rem;">
                            <span style="font-size: 0.75rem; color: var(--primary); font-weight: 600; text-transform: uppercase;">UI/UX Tips</span>
                            <h4 style="font-size: 1.25rem; margin: 0.5rem 0 1rem 0; color: var(--text-main);">How to master Glassmorphism in modern web design</h4>
                            <p style="color: var(--text-muted); font-size: 0.95rem; margin: 0;">A deep dive into creating beautiful frosted glass effects that perform well.</p>
                        </div>
                    </div>
                    <!-- Blog Card -->
                    <div style="background: var(--bg-white); border: 1px solid var(--border-color); border-radius: 1rem; overflow: hidden; transition: transform 0.3s; cursor: pointer;">
                        <div style="height: 200px; background: var(--bg-light); display: flex; align-items: center; justify-content: center; color: var(--text-light);">[Image Placeholder]</div>
                        <div style="padding: 1.5rem;">
                            <span style="font-size: 0.75rem; color: var(--primary); font-weight: 600; text-transform: uppercase;">Performance</span>
                            <h4 style="font-size: 1.25rem; margin: 0.5rem 0 1rem 0; color: var(--text-main);">Optimizing Core Web Vitals for React Apps</h4>
                            <p style="color: var(--text-muted); font-size: 0.95rem; margin: 0;">Strategies to hit a perfect 100 Lighthouse score on complex single page applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section id="faq" class="site-section bg-white">
            <div class="section-container" style="max-width: 48rem;">
                <div style="text-align: center; margin-bottom: 4rem;" data-aos="fade-up">
                    <h2 class="section-title" style="margin: 0 auto; border: none; padding: 0;">Frequently Asked Questions</h2>
                </div>
                <div style="display: flex; flex-direction: column; gap: 1rem;" data-aos="fade-up" data-aos-delay="100">
                    <div style="border: 1px solid var(--border-color); border-radius: 0.75rem; padding: 1.5rem; background: var(--bg-light);">
                        <h4 style="margin: 0 0 0.5rem 0; font-size: 1.125rem; color: var(--text-main);">What is your typical project timeline?</h4>
                        <p style="margin: 0; color: var(--text-muted); font-size: 0.95rem;">A standard website takes 2-4 weeks from discovery to launch, while complex web applications may take 6-8 weeks depending on the requirements.</p>
                    </div>
                    <div style="border: 1px solid var(--border-color); border-radius: 0.75rem; padding: 1.5rem; background: var(--bg-light);">
                        <h4 style="margin: 0 0 0.5rem 0; font-size: 1.125rem; color: var(--text-main);">Do you offer maintenance after launch?</h4>
                        <p style="margin: 0; color: var(--text-muted); font-size: 0.95rem;">Yes, I offer ongoing support and maintenance retainers to ensure your platform remains secure, fast, and up to date.</p>
                    </div>
                    <div style="border: 1px solid var(--border-color); border-radius: 0.75rem; padding: 1.5rem; background: var(--bg-light);">
                        <h4 style="margin: 0 0 0.5rem 0; font-size: 1.125rem; color: var(--text-main);">What technologies do you prefer?</h4>
                        <p style="margin: 0; color: var(--text-muted); font-size: 0.95rem;">I primarily work with HTML/CSS/JS, React, Next.js, and WordPress, choosing the right stack based on your specific business needs and scalability.</p>
                    </div>
                </div>
            </div>
        </section>
"""

# There is no contact section in index.html right now? 
# Wait, index.html just ends after the Projects slider... let's check.
# In a previous edit, we added the Projects Slider. 
# We should just append extras_html before </main>.

main_end = content.find('</main>')
if main_end != -1:
    content = content[:main_end] + extras_html + "\n    " + content[main_end:]


with open(html_file, 'w', encoding='utf-8') as f:
    f.write(content)
print("Phase 1 Core Sections Injected!")
