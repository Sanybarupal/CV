import os

# Read the HTML and CSS blocks from build_slider.py
with open('build_slider.py', 'r', encoding='utf-8') as f:
    script_content = f.read()

# We know the strings are assigned to `slider_css` and `slider_html`
css_start = script_content.find('slider_css = """\n') + len('slider_css = """\n')
css_end = script_content.find('"""\n', css_start)
slider_css = script_content[css_start:css_end]

html_start = script_content.find('slider_html = """\n') + len('slider_html = """\n')
html_end = script_content.find('"""\n', html_start)
slider_html = script_content[html_start:html_end]

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert CSS if not present
if "/* Projects Slider CSS */" not in content:
    css_insert_point = content.find("/* Sections */")
    if css_insert_point != -1:
        content = content[:css_insert_point] + slider_css + "\n\n        " + content[css_insert_point:]

# Insert HTML after skills section
# Look for <section id="skills"...> and then the closing </section>
if "<!-- Auto-Scrolling Projects Section -->" not in content:
    skills_start = content.find('<section id="skills"')
    if skills_start != -1:
        skills_end = content.find('</section>', skills_start) + len('</section>')
        content = content[:skills_end] + "\n\n" + slider_html + content[skills_end:]
        
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Injected slider into index.html!")
    else:
        print("Could not find skills section.")
else:
    print("Slider already exists in index.html.")
