import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Unsplash URLs with local paths
content = content.replace("url('https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1000')", "url('assets/images/hire-professional.png')")
content = content.replace("url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000')", "url('assets/images/docsapp.png')")

# Also, update background position to top left if it's a screenshot, or contain/cover properly. 
# Screenshots often look better with background-position: top center; so it shows the top header.
# Let's adjust the style string
old_style_1 = "aspect-ratio: 16/9; background: url('assets/images/hire-professional.png') center/cover;"
new_style_1 = "aspect-ratio: 16/9; background: url('assets/images/hire-professional.png') top center/cover no-repeat;"

old_style_2 = "aspect-ratio: 16/9; background: url('assets/images/docsapp.png') center/cover;"
new_style_2 = "aspect-ratio: 16/9; background: url('assets/images/docsapp.png') top center/cover no-repeat;"

content = content.replace(old_style_1, new_style_1)
content = content.replace(old_style_2, new_style_2)


with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated images to real project screenshots.")
