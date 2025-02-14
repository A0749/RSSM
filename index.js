let scrollbar; 

document.addEventListener("DOMContentLoaded", function () {
    let scrollContainer = document.getElementById("scroll-container");
    scrollbar = Scrollbar.get(scrollContainer);

    if (!scrollbar) {
        scrollbar = Scrollbar.init(scrollContainer, {
            damping: 0.1,
            delegateTo: document,
            alwaysShowTracks: true
        });
    }

    const sections = document.querySelectorAll('.section');
    const gradientOverlay = document.getElementById('gradient-overlay');

    let currentSectionIndex = 0;
    let isScrolling = false;

    const path = window.location.pathname.replace(/\/$/, ''); 
    const isIndexPage =
      path === '' ||  
      path === '/' ||  
      path.endsWith('/index') ||  
      path.endsWith('/index.html') ||  
      path === '/RSSM' ||  
      path === '/RSSM/index' ||  
      path === '/RSSM/index.html';
    
    const firstSection = sections[0];
    const lastSection = sections[sections.length - 1];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const bgImage = entry.target.getAttribute('data-bg');
                const isOddSection = entry.target.classList.contains('odd');

                // Set the background image dynamically
                scrollContainer.style.backgroundImage = `url(${bgImage})`;

                // Manage gradient overlay
                if (!isIndexPage && (entry.target === firstSection || entry.target === lastSection)) {
                    gradientOverlay.style.background = 'none';
                } else {
                    const gradientDirection = isOddSection ? 'to right' : 'to left';
                    gradientOverlay.style.setProperty(
                        'background',
                        `linear-gradient(${gradientDirection}, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0.2))`
                    );
                }

                // Animate section reveal
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    document.addEventListener('wheel', (event) => {
        if (isScrolling) return;
        isScrolling = true;

        setTimeout(() => { isScrolling = false; }, 600); 

        const currentSection = sections[currentSectionIndex];
        const content = currentSection.querySelector('.right-side-tribe');

        if (content && handleInnerScroll(event, content)) {
            event.preventDefault();
            return;
        }

        if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
        } else if (event.deltaY < 0 && currentSectionIndex > 0) {
            currentSectionIndex--;
        }

        scrollbar.scrollTo(0, sections[currentSectionIndex].offsetTop, 600); 
    });

    let goTopBtn = document.createElement("button");
    goTopBtn.id = "goTopBtn";
    goTopBtn.innerText = "↑ Top";
    document.body.appendChild(goTopBtn);

    Object.assign(goTopBtn.style, {
        position: "fixed",
        bottom: "5vh",
        right: "2%",
        padding: "10px 15px",
        fontSize: "16px",
        background: "#c1b103",
        color: "#000",
        border: "none",
        cursor: "pointer",
        opacity: "0",
        visibility: "hidden",
        transition: "opacity 0.3s ease-in-out, visibility 0.3s",
        zIndex: "1000",
    });

    // Get the height of the first two sections for Go to Top visibility
   
    let scrollThreshold = sections.length > 0 ? sections[0].offsetHeight : 0;


    function smoothScrollToSection(sectionId) {
        let targetSection = document.getElementById(sectionId);
        if (!targetSection) {
            console.warn(`Section with ID '${sectionId}' not found.`);
            return;
        }
    
        // Instantly update the section index
        currentSectionIndex = Array.from(sections).indexOf(targetSection);
    
        // Instantly scroll to the section just like goTopBtn
        scrollbar.setPosition(0, targetSection.offsetTop);
    
        // Reset any scrolling state to avoid issues
        isScrolling = false;
    }
    
    const sectionMap = {
        scrollToFooterBtn: "section-footer",
        scrollToGeneologyBtn: "section-geneology",
        scrollToServicesBtn: "services-section",
        scrollToContactBtn: "contact-section"
    };
    
    Object.entries(sectionMap).forEach(([btnId, sectionId]) => {
        document.getElementById(btnId)?.addEventListener("click", () => smoothScrollToSection(sectionId));
    });
    

    // Show/hide Go to Top button after scrolling past two sections
    scrollbar.addListener(({ offset }) => {
        goTopBtn.style.opacity = offset.y > scrollThreshold ? "1" : "0";
        goTopBtn.style.visibility = offset.y > scrollThreshold ? "visible" : "hidden";
    });

    goTopBtn.addEventListener("click", () => smoothScrollToSection(sections[0].id));
});
