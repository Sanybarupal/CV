import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

projects_html = """
        <!-- Featured Projects Section -->
        <section id="projects" class="site-section bg-gray">
            <div class="section-container">
                <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 4rem;" data-aos="fade-up">
                    <span style="display: inline-block; padding: 0.5rem 1.5rem; background: rgba(37, 99, 235, 0.1); color: var(--primary); border-radius: 999px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.75rem; margin-bottom: 1rem;">Portfolio</span>
                    <h2 style="font-size: 2.5rem; font-weight: 700; color: var(--text-main); margin: 0; text-align: center;">Featured Case Studies</h2>
                </div>
                
                <div style="display: flex; flex-direction: column; gap: 4rem;">
                    <!-- Project 1: Hire Professional -->
                    <div style="display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center;" class="project-row" data-aos="fade-up">
                        <div style="order: 2; @media(min-width: 768px){order: 1;}">
                            <h3 style="font-size: 2rem; font-weight: 700; color: var(--text-main); margin: 0 0 1rem 0;">Hire Professional</h3>
                            <p style="color: var(--text-muted); font-size: 1.125rem; line-height: 1.7; margin-bottom: 1.5rem;">A comprehensive platform connecting clients with top-tier professionals. Features include dynamic service search, role-based dashboards, robust filtering, and seamless user registration flows tailored for a professional marketplace.</p>
                            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 2rem;">
                                <span style="padding: 0.5rem 1rem; background: var(--bg-light); border: 1px solid var(--border-color); border-radius: 999px; font-size: 0.875rem; font-weight: 500; color: var(--text-light);">UI/UX Design</span>
                                <span style="padding: 0.5rem 1rem; background: var(--bg-light); border: 1px solid var(--border-color); border-radius: 999px; font-size: 0.875rem; font-weight: 500; color: var(--text-light);">React</span>
                                <span style="padding: 0.5rem 1rem; background: var(--bg-light); border: 1px solid var(--border-color); border-radius: 999px; font-size: 0.875rem; font-weight: 500; color: var(--text-light);">Tailwind CSS</span>
                            </div>
                            <a href="#" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: var(--primary); color: white; text-decoration: none; border-radius: 0.75rem; font-weight: 600; transition: transform 0.2s, box-shadow 0.2s;">
                                View Case Study
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </a>
                        </div>
                        <div style="order: 1; @media(min-width: 768px){order: 2;} border-radius: 1.5rem; overflow: hidden; box-shadow: var(--hover-shadow); border: 1px solid var(--border-color); background: var(--bg-white);">
                            <div style="width: 100%; aspect-ratio: 16/9; background: url('https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1000') center/cover;"></div>
                        </div>
                    </div>

                    <!-- Project 2: DocsApp -->
                    <div style="display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center;" class="project-row" data-aos="fade-up">
                        <div style="border-radius: 1.5rem; overflow: hidden; box-shadow: var(--hover-shadow); border: 1px solid var(--border-color); background: var(--bg-white);">
                            <div style="width: 100%; aspect-ratio: 16/9; background: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000') center/cover;"></div>
                        </div>
                        <div>
                            <h3 style="font-size: 2rem; font-weight: 700; color: var(--text-main); margin: 0 0 1rem 0;">DocsApp</h3>
                            <p style="color: var(--text-muted); font-size: 1.125rem; line-height: 1.7; margin-bottom: 1.5rem;">A sleek, dark-themed documentation and learning hub. It organizes complex technical subjects like HTML, Git, and Backend development into easily navigable, beautifully structured categories and topics.</p>
                            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 2rem;">
                                <span style="padding: 0.5rem 1rem; background: var(--bg-light); border: 1px solid var(--border-color); border-radius: 999px; font-size: 0.875rem; font-weight: 500; color: var(--text-light);">Web Design</span>
                                <span style="padding: 0.5rem 1rem; background: var(--bg-light); border: 1px solid var(--border-color); border-radius: 999px; font-size: 0.875rem; font-weight: 500; color: var(--text-light);">Frontend Dev</span>
                                <span style="padding: 0.5rem 1rem; background: var(--bg-light); border: 1px solid var(--border-color); border-radius: 999px; font-size: 0.875rem; font-weight: 500; color: var(--text-light);">Dark Mode UI</span>
                            </div>
                            <a href="#" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: var(--primary); color: white; text-decoration: none; border-radius: 0.75rem; font-weight: 600; transition: transform 0.2s, box-shadow 0.2s;">
                                View Case Study
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
"""

# Insert the Projects section right after the Work Process section
process_end = content.find('</section>', content.find('<section id="process"'))
if process_end != -1:
    content = content[:process_end + 10] + "\n" + projects_html + content[process_end + 10:]

# Inject simple CSS fix for the grid layout in the Projects section
css_fix = """
        @media (min-width: 768px) {
            .project-row { grid-template-columns: 1fr 1.2fr !important; }
            .project-row:nth-child(even) { grid-template-columns: 1.2fr 1fr !important; }
        }
"""
if css_fix not in content:
    style_end = content.find('</style>')
    if style_end != -1:
        content = content[:style_end] + css_fix + content[style_end:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Projects section added successfully.")
