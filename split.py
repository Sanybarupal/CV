import re
import os

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Update Navbar links
html = html.replace('<a href="#home">Home</a>', '<a href="index.html">Home</a>')
html = html.replace('<a href="#about">About</a>', '<a href="about.html">About</a>')
html = html.replace('<a href="#work">Work</a>', '<a href="work.html">Work</a>')
html = html.replace('<a href="#services">Services</a>', '<a href="services.html">Services</a>')
html = html.replace('<a href="#contact">Contact</a>', '<a href="contact.html">Contact</a>')

# Header includes everything up to <main class="site-main"> and the opening tag
header_end_idx = html.find('<main class="site-main">') + len('<main class="site-main">')
header = html[:header_end_idx]

# Footer is from </main> to the end
footer_start_idx = html.find('</main>')
footer = html[footer_start_idx:]

# Extract sections
def get_section(start_comment, end_comment):
    start_idx = html.find(start_comment)
    end_idx = html.find(end_comment, start_idx) if end_comment else footer_start_idx
    if start_idx == -1: return ""
    if end_idx == -1: end_idx = footer_start_idx
    return html[start_idx:end_idx]

about_section = get_section('<!-- About Section -->', '<!-- Services Section')
services_section = get_section('<!-- Services Section (NEW) -->', '<!-- Experience Section')
work_section1 = get_section('<!-- Experience Section (Now part of "Work") -->', '<!-- Projects Section')
work_section2 = get_section('<!-- Projects Section (Continued "Work") -->', '<!-- Education Section')
education_section = get_section('<!-- Education Section -->', '<!-- Skills Section')
skills_section = get_section('<!-- Skills Section -->', '<!-- Contact Section')
contact_section = get_section('<!-- Contact Section (NEW) -->', '</main>')

# Build index.html
index_html = header + "\n" + education_section + skills_section + footer

# Build about.html
about_html = header + "\n" + about_section + footer

# Build services.html
services_html = header + "\n" + services_section + footer

# Build work.html
work_html = header + "\n" + work_section1 + work_section2 + footer

# Build contact.html
contact_html = header + "\n" + contact_section + footer

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_html)

with open('about.html', 'w', encoding='utf-8') as f:
    f.write(about_html)

with open('services.html', 'w', encoding='utf-8') as f:
    f.write(services_html)

with open('work.html', 'w', encoding='utf-8') as f:
    f.write(work_html)

with open('contact.html', 'w', encoding='utf-8') as f:
    f.write(contact_html)

print("Successfully created multiple pages!")
