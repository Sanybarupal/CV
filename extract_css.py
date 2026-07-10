import re
import os

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract <style> tag content
match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
if match:
    css_content = match.group(1).strip()
    
    # Save to style.css
    with open('style.css', 'w', encoding='utf-8') as f:
        f.write(css_content)
        
    # Replace <style> block in index.html with <link rel="stylesheet" href="style.css">
    # Make sure we don't accidentally remove other styles, but there should be only one main block.
    # We can replace the exact match
    new_content = content[:match.start()] + '<link rel="stylesheet" href="style.css">' + content[match.end():]
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully extracted CSS to style.css")
else:
    print("Could not find <style> block")
