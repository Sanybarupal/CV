import os

html_file = 'index.html'

with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

work_section = """
        <!-- Work Experience Section -->
        <section id="work-experience" class="site-section bg-white">
            <div class="section-container">
                <h2 class="section-title" data-aos="fade-right">Work Experience</h2>
                <div class="education-list">
                    <div class="education-item" data-aos="fade-up" data-aos-delay="100">
                        <div class="edu-logo" style="background-color: var(--bg-light);">
                            <img src="assets/aliens-logo.png" alt="Aliens Logo" style="filter: invert(var(--icon-invert, 0));">
                        </div>
                        <div class="edu-details">
                            <div class="edu-header">
                                <h4>Aliens Company</h4>
                                <span class="edu-date">Present</span>
                            </div>
                            <p class="edu-degree">UI/UX Designer & Frontend Developer</p>
                        </div>
                    </div>
                    <div class="education-item" data-aos="fade-up" data-aos-delay="200">
                        <div class="edu-logo" style="background-color: var(--bg-light);">
                            <img src="assets/aliens-logo.png" alt="Aliens Logo" style="filter: invert(var(--icon-invert, 0));">
                        </div>
                        <div class="edu-details">
                            <div class="edu-header">
                                <h4>Aliens School</h4>
                                <span class="edu-date">Previous</span>
                            </div>
                            <p class="edu-degree">Web Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
"""

# Find the end of the education section
search_str = 'id="education"'
idx = content.find(search_str)
if idx != -1:
    end_idx = content.find('</section>', idx) + len('</section>')
    content = content[:end_idx] + "\n" + work_section + content[end_idx:]
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Added Work Experience section!")
else:
    print("Could not find education section.")
