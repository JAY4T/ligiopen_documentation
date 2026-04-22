// LigiOpen Documentation Interactive Features

document.addEventListener('DOMContentLoaded', function() {

    // Hamburger nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen);
        });
        // Close nav when a link is tapped
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', false);
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to current nav item
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            currentPath.includes(link.getAttribute('href').replace('.html', ''))) {
            link.classList.add('active');
        }
    });

    // Add copy button to code blocks (if any)
    document.querySelectorAll('pre code').forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.textContent = 'Copy';
        button.style.cssText = 'position: absolute; top: 5px; right: 5px; padding: 5px 10px; background: #004D3D; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.8rem;';
        
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);
        wrapper.appendChild(button);

        button.addEventListener('click', function() {
            navigator.clipboard.writeText(block.textContent).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => button.textContent = 'Copy', 2000);
            });
        });
    });

    // Table of contents generator for long pages
    const headings = document.querySelectorAll('h2, h3');
    if (headings.length > 5) {
        const toc = document.createElement('div');
        toc.className = 'table-of-contents';
        toc.style.cssText = 'background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 2rem; border-left: 4px solid #004D3D;';
        
        const tocTitle = document.createElement('h3');
        tocTitle.textContent = '📑 Table of Contents';
        tocTitle.style.marginTop = '0';
        toc.appendChild(tocTitle);
        
        const tocList = document.createElement('ul');
        tocList.style.cssText = 'list-style: none; padding-left: 0;';
        
        headings.forEach((heading, index) => {
            // Add ID to heading if it doesn't have one
            if (!heading.id) {
                heading.id = 'section-' + index;
            }
            
            const li = document.createElement('li');
            li.style.cssText = heading.tagName === 'H3' ? 'padding-left: 1.5rem;' : '';
            
            const link = document.createElement('a');
            link.href = '#' + heading.id;
            link.textContent = heading.textContent;
            link.style.cssText = 'color: #004D3D; text-decoration: none; display: block; padding: 0.3rem 0;';
            link.addEventListener('mouseover', () => link.style.textDecoration = 'underline');
            link.addEventListener('mouseout', () => link.style.textDecoration = 'none');
            
            li.appendChild(link);
            tocList.appendChild(li);
        });
        
        toc.appendChild(tocList);
        
        // Insert TOC after the first paragraph or at the start of main content
        const firstPara = document.querySelector('.container > p, .container > div');
        if (firstPara) {
            firstPara.parentNode.insertBefore(toc, firstPara.nextSibling);
        }
    }

    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #004D3D;
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        box-shadow: 0 4px 6px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    backToTop.addEventListener('mouseover', function() {
        this.style.background = '#003329';
        this.style.transform = 'scale(1.1)';
    });

    backToTop.addEventListener('mouseout', function() {
        this.style.background = '#004D3D';
        this.style.transform = 'scale(1)';
    });

    // Print friendly enhancements
    window.addEventListener('beforeprint', function() {
        document.querySelectorAll('.card').forEach(card => {
            card.style.pageBreakInside = 'avoid';
        });
    });

    // Add reading progress bar
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(to right, #004D3D, #2459CF);
        z-index: 9999;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
});
