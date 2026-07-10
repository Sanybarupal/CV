import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Look for <!-- Blog Section --> and remove until </section>
blog_pattern = r'<!-- Blog Section -->\s*<section id="blog".*?</section>'
content = re.sub(blog_pattern, '', content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Blog section removed successfully.")
