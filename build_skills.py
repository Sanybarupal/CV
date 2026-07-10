import os

html_file = 'index.html'
with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

testimonials_html = """
        <!-- Testimonials Section -->
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
        </section>
"""

skills_html = """
        <!-- Detailed Skills Section -->
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
        </section>
"""

# Insert Testimonials before Blog
blog_idx = content.find('<!-- Blog Section -->')
if blog_idx != -1:
    content = content[:blog_idx] + testimonials_html + "\n" + content[blog_idx:]

# Insert Detailed Skills before the existing #skills grid
old_skills_idx = content.find('<section id="skills" class="site-section bg-white">')
if old_skills_idx != -1:
    content = content[:old_skills_idx] + skills_html + "\n" + content[old_skills_idx:]

with open(html_file, 'w', encoding='utf-8') as f:
    f.write(content)
print("Skills & Testimonials Injected!")
