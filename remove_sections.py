import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove FAQ Section
# Look for <!-- FAQ Section --> and remove until </section>
faq_pattern = r'<!-- FAQ Section -->\s*<section id="faq".*?</section>'
content = re.sub(faq_pattern, '', content, flags=re.DOTALL)

# 2. Remove Projects Slider Section and its Script
# Look for <!-- Auto-Scrolling Projects Section --> down to the end of the script
projects_pattern = r'<!-- Auto-Scrolling Projects Section -->\s*<section id="projects".*?</section>\s*<!-- Slider Logic -->\s*<script>.*?</script>'
content = re.sub(projects_pattern, '', content, flags=re.DOTALL)

# Also check if they just have <section id="projects" ...> without the comment
if '<section id="projects"' in content:
    alt_proj_pattern = r'<section id="projects".*?</section>'
    content = re.sub(alt_proj_pattern, '', content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Sections removed successfully.")
