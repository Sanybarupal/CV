import os
import re

new_css = """
        /* Hero Section */
        .hero {
            background-color: var(--bg-white);
            padding: 8rem 1.5rem;
            border-bottom: 1px solid var(--border-color);
            transition: background-color 0.3s, border-color 0.3s;
        }
        .hero-content-new {
            max-width: 64rem;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr;
            gap: 4rem;
            align-items: center;
        }
        @media (min-width: 768px) {
            .hero-content-new {
                grid-template-columns: 1.5fr 1fr;
            }
        }
        .greeting {
            font-family: 'Playfair Display', serif;
            font-style: italic;
            font-size: 3rem;
            color: var(--text-main);
            display: block;
            margin-bottom: 1rem;
            font-weight: 500;
        }
        .hero-left h1 {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1.2;
            margin: 0 0 2rem 0;
            color: var(--text-main);
            letter-spacing: -0.02em;
        }
        @media (min-width: 768px) {
            .hero-left h1 {
                font-size: 3.5rem;
            }
        }
        .highlight-serif {
            font-family: 'Playfair Display', serif;
            font-style: italic;
            font-weight: 500;
        }
        .hero-buttons {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
        .btn-gradient {
            background: linear-gradient(135deg, #f43f5e 0%, #a855f7 100%);
            color: white !important;
            text-decoration: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: transform 0.2s, box-shadow 0.2s;
            border: none;
            cursor: pointer;
        }
        .btn-gradient:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(168, 85, 247, 0.4);
        }
        .btn-outline {
            background: transparent;
            color: var(--text-main) !important;
            text-decoration: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            position: relative;
            z-index: 1;
            transition: transform 0.2s;
            cursor: pointer;
        }
        .btn-outline::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 0.5rem;
            padding: 2px;
            background: linear-gradient(135deg, #f43f5e 0%, #a855f7 100%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            z-index: -1;
        }
        .btn-outline:hover {
            transform: translateY(-2px);
        }
        .hero-right p {
            font-size: 1.125rem;
            line-height: 1.7;
            color: var(--text-muted);
            margin: 0;
            border-left: 2px solid var(--border-color);
            padding-left: 1.5rem;
        }
        body.dark .hero-right p {
            border-left-color: #444;
        }
"""

new_html = """    <!-- Hero Section -->
    <header id="home" class="hero">
        <div class="hero-content-new" data-aos="fade-up">
            <div class="hero-left">
                <span class="greeting">hello world</span>
                <h1>I design & craft beautiful websites for users, that solves your <span class="highlight-serif">business tasks</span></h1>
                <div class="hero-buttons">
                    <a href="work.html" class="btn-gradient">
                        See Projects 
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                    <a href="#" class="btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                        Resume
                    </a>
                </div>
            </div>
            <div class="hero-right">
                <p>Hello, I'm Sandeep Kumar, a UI/UX Designer & Web Designer with experience developing and designing — web applications.</p>
            </div>
        </div>
    </header>"""

font_import = "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500;1,600&display=swap');"

files = ['index.html', 'about.html', 'work.html', 'services.html', 'contact.html']

for filename in files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Add font import if not present
    if "Playfair+Display" not in content:
        content = content.replace(
            "@import url('https://fonts.googleapis.com/css2?family=Poppins",
            font_import + "\n        @import url('https://fonts.googleapis.com/css2?family=Poppins"
        )
    
    # 2. Extract old hero CSS block to replace
    css_start = content.find("/* Hero Section */")
    css_end = content.find("/* Sections */", css_start)
    if css_start != -1 and css_end != -1:
        content = content[:css_start] + new_css.strip() + "\n\n        " + content[css_end:]
        
    # 3. Replace old hero HTML block
    html_start = content.find("<!-- Hero Section -->")
    html_end = content.find("<main class=\"site-main\">", html_start)
    
    if html_start != -1 and html_end != -1:
        if filename == 'index.html':
            # Insert the new hero html
            content = content[:html_start] + new_html + "\n\n    " + content[html_end:]
        else:
            # For subpages, remove the hero entirely so they just show their section content under navbar
            content = content[:html_start] + "    " + content[html_end:]
            
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated Hero section across all files successfully!")
