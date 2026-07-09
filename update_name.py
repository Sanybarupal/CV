import glob

files = glob.glob("*.html")

for filename in files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the longer name first so we don't accidentally get "Sandeep Barupal Barupal"
    content = content.replace("Sandeep Kumar Barupal", "Sandeep Barupal")
    
    # Replace the shorter name
    content = content.replace("Sandeep Kumar", "Sandeep Barupal")
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Name updated across all HTML files!")
