import os
import re

html_file = 'work.html'

with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

slider_css = """
        /* Projects Slider CSS */
        .slider-section {
            background-color: var(--bg-light);
            padding: 5rem 1.5rem;
            transition: background-color 0.3s;
        }
        .slider-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        .slider-header h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin: 0;
            color: var(--text-main);
            letter-spacing: -0.02em;
        }
        .slider-wrapper {
            position: relative;
            width: 100%;
            background-color: #0a0a0a;
            border-radius: 2rem;
            padding: 2rem;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            min-height: 600px;
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
        }
        .mockup-container {
            position: relative;
            width: 100%;
            max-width: 900px;
            height: 450px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 6rem; /* space for thumbnails */
        }
        
        .mockup-desktop {
            position: absolute;
            width: 80%;
            height: 100%;
            left: 5%;
            background-color: #ffffff;
            border-radius: 1.5rem;
            border: 8px solid #1a1a1a;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
            overflow: hidden;
            transition: opacity 0.5s ease;
        }
        .mockup-desktop img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }
        
        .mockup-mobile {
            position: absolute;
            width: 25%;
            height: 80%;
            right: 5%;
            top: 10%;
            background-color: #ffffff;
            border-radius: 2rem;
            border: 10px solid #1a1a1a;
            box-shadow: -10px 10px 25px rgba(0, 0, 0, 0.5);
            overflow: hidden;
            transition: opacity 0.5s ease;
            z-index: 10;
        }
        .mockup-mobile img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }

        .slider-arrow {
            position: absolute;
            top: 45%;
            transform: translateY(-50%);
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 20;
            transition: background 0.3s, transform 0.2s;
        }
        .slider-arrow:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-50%) scale(1.1);
        }
        .slider-arrow.left { left: 1rem; }
        .slider-arrow.right { right: 1rem; }

        .slider-thumbnails {
            position: absolute;
            bottom: 2rem;
            display: flex;
            gap: 1rem;
            background: rgba(255,255,255,0.05);
            padding: 0.75rem;
            border-radius: 1rem;
            border: 1px solid rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            z-index: 20;
        }
        .thumbnail-btn {
            width: 4rem;
            height: 3rem;
            border-radius: 0.5rem;
            border: 2px solid transparent;
            overflow: hidden;
            cursor: pointer;
            position: relative;
            background-color: #fff;
            transition: border-color 0.3s, transform 0.2s;
        }
        .thumbnail-btn img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.6;
            transition: opacity 0.3s;
        }
        .thumbnail-btn.active {
            border-color: #a855f7;
            transform: scale(1.05);
        }
        .thumbnail-btn.active img {
            opacity: 1;
        }
        .thumbnail-number {
            position: absolute;
            bottom: 0.25rem;
            left: 0.25rem;
            background: rgba(0,0,0,0.7);
            color: white;
            font-size: 0.6rem;
            font-weight: bold;
            padding: 0.1rem 0.3rem;
            border-radius: 0.2rem;
        }

        .slider-details {
            margin-top: 3rem;
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            background-color: var(--bg-white);
            padding: 2rem;
            border-radius: 1.5rem;
            border: 1px solid var(--border-color);
            box-shadow: var(--shadow);
            transition: background-color 0.3s, border-color 0.3s;
        }
        @media (min-width: 768px) {
            .slider-details {
                grid-template-columns: 1fr 1.5fr;
                gap: 4rem;
                padding: 3rem;
            }
        }
        .details-title {
            font-family: 'Playfair Display', serif;
            font-style: italic;
            font-size: 2.5rem;
            font-weight: 600;
            color: var(--text-main);
            margin: 0 0 1.5rem 0;
            transition: opacity 0.3s;
        }
        .details-features {
            list-style: none;
            padding: 0;
            margin: 0 0 1.5rem 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .details-features li {
            font-size: 1rem;
            color: var(--text-muted);
            font-weight: 500;
        }
        .details-features li strong {
            color: var(--text-main);
            display: block;
            margin-bottom: 0.25rem;
        }
        .details-desc {
            font-size: 1.125rem;
            line-height: 1.8;
            color: var(--text-muted);
            margin: 0;
            transition: opacity 0.3s;
        }
"""

slider_html = """
        <!-- Auto-Scrolling Projects Section -->
        <section id="projects" class="site-section slider-section">
            <div class="section-container" style="max-width: 72rem;">
                
                <div class="slider-header" data-aos="fade-right">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5L30 20L10 35V5Z" stroke="#a855f7" stroke-width="2" stroke-linejoin="round"/>
                        <path d="M20 12L32 20L20 28" stroke="#f43f5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h2>Projects</h2>
                </div>

                <div class="slider-wrapper" data-aos="fade-up" data-aos-delay="100">
                    <div class="mockup-container">
                        <div class="mockup-desktop" id="slide-desktop">
                            <img src="" alt="Project Desktop">
                        </div>
                        <div class="mockup-mobile" id="slide-mobile">
                            <img src="" alt="Project Mobile">
                        </div>
                    </div>

                    <button class="slider-arrow left" onclick="prevSlide()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <button class="slider-arrow right" onclick="nextSlide()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                    </button>

                    <div class="slider-thumbnails" id="thumbnail-container">
                        <!-- Thumbnails injected by JS -->
                    </div>
                </div>

                <div class="slider-details" data-aos="fade-up" data-aos-delay="200">
                    <div class="details-left">
                        <h3 class="details-title" id="slide-title">Project Title</h3>
                        
                        <a href="#" class="btn-outline" id="slide-link" target="_blank" style="width: fit-content; margin-bottom: 2rem; border-color: var(--primary);">
                            Live 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </a>
                        
                        <ul class="details-features" id="slide-features">
                            <!-- Features injected by JS -->
                        </ul>
                    </div>
                    <div class="details-right" style="display:flex; align-items:center;">
                        <p class="details-desc" id="slide-desc"></p>
                    </div>
                </div>

            </div>
        </section>

        <!-- Slider Logic -->
        <script>
            const projectsData = [
                {
                    title: "Embrace",
                    link: "#",
                    desktopImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
                    mobileImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80",
                    features: [
                        { highlight: "Near 100% Accuracy", text: "in Diagnosis" },
                        { highlight: "Pleasant", text: "User Experience" }
                    ],
                    description: "Embrace is a web application that offers intuitive health tracking. Users can upload medical images for accurate assessments, while also tracking their cycles. With a focus on empowerment, Embrace aims to improve outcomes and promote early detection."
                },
                {
                    title: "Deep Dot Shop",
                    link: "#",
                    desktopImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
                    mobileImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
                    features: [
                        { highlight: "Custom E-commerce", text: "Platform" },
                        { highlight: "Secure Cart", text: "and Checkout Flow" }
                    ],
                    description: "Deep Dot Shop is a highly optimized, fully custom e-commerce solution designed to maximize conversion rates. Featuring a fast, dynamic cart, secure payment gateways, and a beautifully tailored product display interface for a premium shopping experience."
                },
                {
                    title: "Aliens School",
                    link: "#",
                    desktopImg: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
                    mobileImg: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=300&q=80",
                    features: [
                        { highlight: "Educational", text: "Management Portal" },
                        { highlight: "Real-time", text: "Student Tracking" }
                    ],
                    description: "A comprehensive digital portal built for Aliens School. It features dedicated dashboards for students and teachers, dynamic scheduling, and seamless resource management, all wrapped in a fully responsive, modern design tailored for education."
                },
                {
                    title: "Admin Dashboard",
                    link: "#",
                    desktopImg: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
                    mobileImg: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=300&q=80",
                    features: [
                        { highlight: "Data Visualization", text: "and Analytics" },
                        { highlight: "Role-Based", text: "Access Control" }
                    ],
                    description: "A sophisticated admin panel offering real-time insights and comprehensive management tools. Integrating complex data sets into easy-to-read charts, it allows business owners to seamlessly manage users, track sales, and monitor system health."
                }
            ];

            let currentSlide = 0;
            let slideInterval;

            const deskEl = document.querySelector('#slide-desktop img');
            const mobEl = document.querySelector('#slide-mobile img');
            const titleEl = document.getElementById('slide-title');
            const linkEl = document.getElementById('slide-link');
            const descEl = document.getElementById('slide-desc');
            const featuresEl = document.getElementById('slide-features');
            const thumbContainer = document.getElementById('thumbnail-container');

            function renderThumbnails() {
                thumbContainer.innerHTML = '';
                projectsData.forEach((proj, idx) => {
                    const btn = document.createElement('button');
                    btn.className = 'thumbnail-btn' + (idx === currentSlide ? ' active' : '');
                    btn.onclick = () => goToSlide(idx);
                    
                    const img = document.createElement('img');
                    img.src = proj.desktopImg;
                    
                    const num = document.createElement('span');
                    num.className = 'thumbnail-number';
                    num.textContent = idx + 1;
                    
                    btn.appendChild(img);
                    btn.appendChild(num);
                    thumbContainer.appendChild(btn);
                });
            }

            function updateSlide() {
                const data = projectsData[currentSlide];
                
                // Fade effect
                deskEl.style.opacity = 0;
                mobEl.style.opacity = 0;
                titleEl.style.opacity = 0;
                descEl.style.opacity = 0;
                
                setTimeout(() => {
                    deskEl.src = data.desktopImg;
                    mobEl.src = data.mobileImg;
                    titleEl.textContent = data.title;
                    linkEl.href = data.link;
                    descEl.textContent = data.description;
                    
                    featuresEl.innerHTML = '';
                    data.features.forEach(f => {
                        const li = document.createElement('li');
                        li.innerHTML = `<strong>${f.highlight}</strong> ${f.text}`;
                        featuresEl.appendChild(li);
                    });
                    
                    deskEl.style.opacity = 1;
                    mobEl.style.opacity = 1;
                    titleEl.style.opacity = 1;
                    descEl.style.opacity = 1;
                    
                    renderThumbnails();
                }, 300);
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % projectsData.length;
                updateSlide();
                resetInterval();
            }

            function prevSlide() {
                currentSlide = (currentSlide - 1 + projectsData.length) % projectsData.length;
                updateSlide();
                resetInterval();
            }

            function goToSlide(idx) {
                currentSlide = idx;
                updateSlide();
                resetInterval();
            }

            function startInterval() {
                slideInterval = setInterval(nextSlide, 5000);
            }

            function resetInterval() {
                clearInterval(slideInterval);
                startInterval();
            }

            // Initialize
            updateSlide();
            startInterval();
            
            // Pause on hover
            const wrapper = document.querySelector('.slider-wrapper');
            if(wrapper) {
                wrapper.addEventListener('mouseenter', () => clearInterval(slideInterval));
                wrapper.addEventListener('mouseleave', startInterval);
            }
        </script>
"""

# Insert CSS
if "/* Projects Slider CSS */" not in content:
    css_start = content.find("/* Sections */")
    if css_start != -1:
        content = content[:css_start] + slider_css + "\n\n        " + content[css_start:]

# Replace old Featured Projects section
start_tag = '<!-- Projects Section (Continued "Work") -->'
end_tag = '</section>'
idx = content.find(start_tag)

if idx != -1:
    end_idx = content.find(end_tag, idx) + len(end_tag)
    
    # Check if there are multiple sections after it. The old layout had the projects grid inside a section.
    # The grid ends at `</section>`.
    
    content = content[:idx] + slider_html + content[end_idx:]
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Replaced Projects section successfully!")
else:
    print("Could not find the old projects section to replace.")
