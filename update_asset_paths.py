import glob

files = glob.glob("*.html")
old_mgsu = "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Maharaja_Ganga_Singh_University_logo.png/220px-Maharaja_Ganga_Singh_University_logo.png"

for filename in files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace aliens logo
    content = content.replace('src="aliens-logo.png"', 'src="assets/aliens-logo.png"')
    
    # Replace mgsu logo
    content = content.replace('src="' + old_mgsu + '"', 'src="assets/mgsu-logo.png"')
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Updated asset paths in all HTML files.")
