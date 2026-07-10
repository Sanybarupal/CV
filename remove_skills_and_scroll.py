import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove the Detailed Skills Section (My Skill Matrix)
skills_pattern = r'<!-- Detailed Skills Section -->\s*<section id="skills-detailed".*?</section>'
content = re.sub(skills_pattern, '', content, flags=re.DOTALL)

# 2. Remove the Scroll Indicator from the Hero Section
scroll_pattern = r'<div class="scroll-indicator".*?</div>'
content = re.sub(scroll_pattern, '', content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Skills section and Scroll Indicator removed successfully.")
