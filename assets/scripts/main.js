document.addEventListener('DOMContentLoaded', () => {
    const breadcrumbContainer = document.getElementById('breadcrumb');
    const langContainer = document.getElementById('lang');
    const breadLangContainer = document.querySelector('.bread-lang');
    const copyrightContainer = document.getElementById('copyright');
    let path = window.location.pathname;

    // GitHub Pages repository name
    const repoName = '/UpdatedRSSM';

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
        path === '/' || path === '/index.html' ||         // Standard root homepage
        path === repoName + '/' || path === repoName + '/index.html' ||  // GitHub Pages root homepage
        path === repoName + '/hi/' || path === repoName + '/hi/index.html'; // GitHub Pages Hindi homepage

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
            // ✅ Correctly insert "/hi/" inside "/UpdatedRSSM/"
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


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a');
    const currentDomain = window.location.hostname;

    links.forEach(link => {
      const linkDomain = new URL(link.href).hostname;
      // Check if the link is not pointing to the same domain
      if (linkDomain !== currentDomain) {
        link.setAttribute('target', '_blank');
      }
    });
  });