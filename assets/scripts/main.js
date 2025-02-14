document.addEventListener('DOMContentLoaded', () => {
    const breadcrumbContainer = document.getElementById('breadcrumb');
    const langContainer = document.getElementById('lang');
    const breadLangContainer = document.querySelector('.bread-lang');
    const copyrightContainer = document.getElementById('copyright');
    let path = window.location.pathname;

    const repoName = '/RSSM';
    const isGitHubPages = path.startsWith(repoName);
    const isHindi = path.includes('/hi/');
    let displayPath = path;

    if (isHindi) {
        displayPath = path.replace('/hi/', '/');
    }

    displayPath = displayPath.replace(/\.[^/.]+$/, '');
    const segments = displayPath.split('/').filter(segment => segment !== '' && segment !== 'file:' && segment !== 'RSSM');

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

        let breadcrumbHtml = `<a href="${isGitHubPages ? repoName + (isHindi ? '/hi' : '') : ''}/">Home</a>`;
        let currentPath = '';

        segments.forEach((segment, index) => {
            const formattedSegment = segment.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
            currentPath += `/${segment}`;

            const fullPath = isHindi 
                ? `${isGitHubPages ? repoName : ''}/hi${currentPath}` 
                : `${isGitHubPages ? repoName : ''}${currentPath}`;

            if (index === segments.length - 1) {
                breadcrumbHtml += ` > <span>${formattedSegment}</span>`;
            } else {
                breadcrumbHtml += ` > <a href="${fullPath}.html">${formattedSegment}</a>`;
            }
        });

        breadcrumbContainer.innerHTML = breadcrumbHtml;
    }

    langContainer.textContent = isHindi ? 'Switch to English' : 'Switch to हिंदी';

    langContainer.addEventListener('click', () => {
        const url = new URL(window.location.href);
        let newPath;

        if (isHindi) {
            newPath = url.pathname.replace('/hi/', '/');
        } else {
            newPath = isGitHubPages 
                ? repoName + '/hi' + url.pathname.replace(repoName, '') 
                : '/hi' + url.pathname;
        }

        newPath = newPath.replace(/\/+/g, '/');

        // Check if the Hindi version exists before redirecting
        fetch(newPath, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    window.location.href = url.origin + newPath;
                } else {
                    alert("This page is not available in Hindi.");
                }
            })
            .catch(() => {
                alert("This page is not available in Hindi.");
            });
    });

    if (copyrightContainer) {
        copyrightContainer.innerHTML = isHindi
            ? `&copy; 2025 - राजा शंकर शाह कुंवर रघुनाथ शाह आदिवासी स्वतंत्रता सेनानी संग्रहालय, जबलपुर। सभी अधिकार सुरक्षित।`
            : `&copy; 2025 - Raja Shankar Shah Kunwar Raghunath Shah Tribal Freedom Fighters Museum, Jabalpur. All Rights Reserved.`;
    }
});




// Mobile Custom Nav
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


//  SlickMode Modal Dynamically
const slickMode = document.createElement("div");
slickMode.id = "slickmode-modal";
slickMode.innerHTML = `
  <div class="slickmode-content">
    <span class="slickmode-close">&times;</span>
    <img id="slickmode-image" src="" alt="Fullscreen Image">
  </div>
  <button id="slickmode-prev">&#10094;</button>
  <button id="slickmode-next">&#10095;</button>
  <div class="zoom-controls">
    <button id="zoom-out">-</button>
    <button id="zoom-reset">Reset</button>
    <button id="zoom-in">+</button>
  </div>
`;
document.body.appendChild(slickMode);

// Select Elements
const slickModeImage = document.getElementById("slickmode-image");
const slickModePrev = document.getElementById("slickmode-prev");
const slickModeNext = document.getElementById("slickmode-next");
const slickModeClose = document.querySelector(".slickmode-close");
const zoomInBtn = document.getElementById("zoom-in");
const zoomOutBtn = document.getElementById("zoom-out");
const zoomResetBtn = document.getElementById("zoom-reset");

let slickModeImages = [];
let slickModeIndex = 0;
let zoomLevel = 1;
let isDragging = false;
let startX = 0, startY = 0;
let currentX = 0, currentY = 0;
let isSwiperMode = false;
let swiperInstance = null;

// Open SlickMode Function
function openSlickMode(images, index) {
    slickModeImages = images;
    slickModeIndex = index;
    slickModeImage.src = slickModeImages[slickModeIndex].src;
    slickMode.style.display = "flex";

    // Detect if Swiper is being used
    isSwiperMode = images[0].closest(".swiper-container") ? true : false;

    if (isSwiperMode) {
        // Find the related Swiper instance
        swiperInstance = document.querySelector(".swiper-container").swiper;
    }

    // Show/hide prev/next buttons
    if (slickModeImages.length > 1) {
        slickModePrev.style.display = "block";
        slickModeNext.style.display = "block";
    } else {
        slickModePrev.style.display = "none";
        slickModeNext.style.display = "none";
    }

    updateZoom(); // Keep zoom level stable when switching images
}

// Close SlickMode Function
function closeSlickMode() {
    slickMode.style.display = "none";
}

// Change Image Function (Handles Swiper & Standalone)
function slickModeChange(step) {
    if (slickModeImages.length <= 1) return; // No change if only one image

    if (isSwiperMode && swiperInstance) {
        // Control Swiper directly
        if (step === 1) swiperInstance.slideNext();
        if (step === -1) swiperInstance.slidePrev();
        slickModeImage.src = slickModeImages[swiperInstance.realIndex].src;
    } else {
        // Regular image switching
        slickModeIndex = (slickModeIndex + step + slickModeImages.length) % slickModeImages.length;
        slickModeImage.src = slickModeImages[slickModeIndex].src;
    }

    updateZoom();
}

// Zoom Functions
function zoomImage(factor) {
    zoomLevel = Math.max(1, Math.min(3, zoomLevel * factor));
    updateZoom();
}

function updateZoom() {
    slickModeImage.style.transform = `scale(${zoomLevel}) translate(${currentX / zoomLevel}px, ${currentY / zoomLevel}px)`;
    slickModeImage.style.cursor = zoomLevel > 1 ? "grab" : "zoom-in";
}

// Dragging Functionality for Moving Image
slickModeImage.addEventListener("mousedown", (e) => {
    if (zoomLevel === 1) return; // Only allow dragging when zoomed in
    isDragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
    slickModeImage.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    updateZoom();
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    slickModeImage.style.cursor = zoomLevel > 1 ? "grab" : "zoom-in";
});

// Prevent Image Selection While Dragging
slickModeImage.addEventListener("dragstart", (e) => e.preventDefault());

// Click Zoom Functionality
slickModeImage.addEventListener("click", () => {
    if (zoomLevel === 1) {
        zoomImage(1.5);
    }
});

// Zoom Button Click Events
zoomInBtn.addEventListener("click", () => zoomImage(1.5));
zoomOutBtn.addEventListener("click", () => zoomImage(0.67));
zoomResetBtn.addEventListener("click", () => {
    zoomLevel = 1;
    currentX = 0;
    currentY = 0;
    updateZoom();
});

// Attach Click Event to All Images (Handles Swiper & Standalone)
document.querySelectorAll(".swiper-container, .slickmode").forEach((container) => {
    container.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
            const swiperImages = [...document.querySelectorAll(".swiper-container img")];
            const standaloneImages = [...document.querySelectorAll(".slickmode")];

            let images, index;
            if (swiperImages.includes(e.target)) {
                images = swiperImages;
            } else {
                images = [e.target];
            }
            index = images.indexOf(e.target);
            openSlickMode(images, index);
        }
    });
});

// Prev/Next Buttons
slickModePrev.addEventListener("click", () => slickModeChange(-1));
slickModeNext.addEventListener("click", () => slickModeChange(1));

// Close on Click & Keyboard Navigation
slickModeClose.addEventListener("click", closeSlickMode);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSlickMode();
    if (e.key === "ArrowLeft") slickModeChange(-1);
    if (e.key === "ArrowRight") slickModeChange(1);
});



