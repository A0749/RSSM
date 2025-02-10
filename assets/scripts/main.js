document.addEventListener('DOMContentLoaded', () => {
    const breadcrumbContainer = document.getElementById('breadcrumb');
    const langContainer = document.getElementById('lang');
    const breadLangContainer = document.querySelector('.bread-lang');
    const copyrightContainer = document.getElementById('copyright');
    let path = window.location.pathname;

    // GitHub Pages repository name
    const repoName = '/RSSM';

    // Check if running inside GitHub Pages
    const isGitHubPages = path.startsWith(repoName);

    // Check if the current path is in Hindi
    const isHindi = path.includes('/hi/');
    let displayPath = path;

    // Remove `/hi/` prefix if it exists
    if (isHindi) {
        displayPath = path.replace('/hi/', '/');
    }

    // Remove file extensions like `.html`
    displayPath = displayPath.replace(/\.[^/.]+$/, '');

    // Split path into segments and filter out empty ones
    const segments = displayPath.split('/').filter(segment => segment !== '' && segment !== 'file:');

    // ======= ✅ Correct Homepage Logic for GitHub Pages ======= //
    const isHomepage = 
        path === '/' || path === '/index.html' ||         
        path === repoName + '/' || path === repoName + '/index.html' ||  
        path === repoName + '/hi/' || path === repoName + '/hi/index.html';

    if (isHomepage) {
        breadcrumbContainer.style.opacity = '0';
        breadcrumbContainer.style.visibility = 'hidden';
        breadLangContainer.style.top = '40%';
    } else {
        breadcrumbContainer.style.opacity = '1';
        breadcrumbContainer.style.visibility = 'visible';
        langContainer.style.position = 'relative';
        langContainer.style.top = 'unset';
        langContainer.style.right = 'unset';

        // Generate breadcrumb
        let breadcrumbHtml = `<a href="${isGitHubPages ? repoName : ''}/">Home</a>`;
        let currentPath = '';

        segments.forEach((segment, index) => {
            const formattedSegment = segment.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
            currentPath += `/${segment}`;

            // ✅ Ensure correct breadcrumb links for GitHub Pages
            const fullPath = isHindi 
                ? `${isGitHubPages ? repoName : ''}/hi${currentPath}` 
                : `${isGitHubPages ? repoName : ''}${currentPath}`;

            if (index === segments.length - 1) {
                breadcrumbHtml += ` > <span>${formattedSegment}</span>`;
            } else {
                breadcrumbHtml += ` > <a href="${fullPath}">${formattedSegment}</a>`;
            }
        });

        breadcrumbContainer.innerHTML = breadcrumbHtml;

        // ✅ Attach event listener to breadcrumb links to add `.html` on click
        breadcrumbContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default navigation

                let newHref = link.getAttribute('href');
                if (!newHref.endsWith('.html')) {
                    newHref += '.html'; // Add .html extension
                }

                window.location.href = newHref; // Navigate to modified URL
            });
        });
    }

    // Set language toggle text
    langContainer.textContent = isHindi ? 'Switch to English' : 'Switch to हिंदी';

    // ✅ Fix Language Toggle for GitHub Pages
    langContainer.addEventListener('click', () => {
        const url = new URL(window.location.href);
        let newPath;

        if (isHindi) {
            // Remove "/hi/" from the path
            newPath = url.pathname.replace('/hi/', '/');
        } else {
            // ✅ Correctly insert "/hi/" inside "/RSSM/"
            if (isGitHubPages) {
                newPath = repoName + '/hi' + url.pathname.replace(repoName, '');
            } else {
                newPath = '/hi' + url.pathname;
            }
        }

        // ✅ Normalize the path (remove duplicate slashes)
        newPath = newPath.replace(/\/+/g, '/');

        // Redirect to the new path
        window.location.href = url.origin + newPath;
    });

    // Update copyright based on language
    if (copyrightContainer) {
        copyrightContainer.innerHTML = isHindi
            ? `&copy; 2025 - राजा शंकर शाह कुंवर रघुनाथ शाह आदिवासी स्वतंत्रता सेनानी संग्रहालय, जबलपुर। सभी अधिकार सुरक्षित।`
            : `&copy; 2025 - Raja Shankar Shah Kunwar Raghunath Shah Tribal Freedom Fighters Museum, Jabalpur. All Rights Reserved.`;
    }
});



document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth >= 769) return; // Exit if screen is larger than 768px

    // Detect language folder (English or Hindi)
    const isHindi = window.location.pathname.includes("/hi/");
    let pathPrefix = isHindi ? "/hi/" : "/";

    // Navbar content
    const navbarHTML = `
        <div class="custom-navbar">
            <!-- Toggle Button -->
            <button id="customMenuToggle" class="custom-menu-btn">☰</button>

            <!-- Full-Screen Offcanvas Menu -->
            <div id="customOffcanvasMenu" class="custom-offcanvas">
                <button id="customCloseMenu" class="custom-close-btn">&times;</button>
                <ul class="custom-menu">
                    <li><a href="${pathPrefix}tribes-of-mp.html">${isHindi ? "म.प्र. की जनजातियाँ" : "Tribes of MP"}</a></li>
                    <li><a href="${pathPrefix}gond-tribe.html">${isHindi ? "गोंडवाना जनजाति" : "Gondwana Tribe"}</a></li>
                    <li><a href="${pathPrefix}history.html">${isHindi ? "इतिहास" : "History"}</a></li>
                    <li><a href="${pathPrefix}conservation.html">${isHindi ? "संरक्षण" : "Conservation"}</a></li>
                    <li><a href="/museum-collection.html">${isHindi ? "संग्रहालय संग्रह" : "Museum Collection"}</a></li>
                </ul>
            </div>
        </div>
    `;

    // Insert navbar inside the placeholder
    document.getElementById("customNavbar").innerHTML = navbarHTML;

    // Select elements after insertion
    const menuToggle = document.getElementById("customMenuToggle");
    const closeMenu = document.getElementById("customCloseMenu");
    const offcanvasMenu = document.getElementById("customOffcanvasMenu");

    // Toggle menu
    menuToggle.addEventListener("click", function () {
        offcanvasMenu.classList.toggle("show");
    });

    // Close menu
    closeMenu.addEventListener("click", function () {
        offcanvasMenu.classList.remove("show");
    });

    // Close menu if user clicks outside of it
    document.addEventListener("click", function (event) {
        if (!offcanvasMenu.contains(event.target) && event.target !== menuToggle) {
            offcanvasMenu.classList.remove("show");
        }
    });
});
