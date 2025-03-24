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




document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth >= 769) return; // Exit if screen is larger than 768px

    // Detect GitHub Pages repository name dynamically
    const repoName = window.location.pathname.split('/')[1]; // Extract repo name
    const basePath = repoName ? `/${repoName}` : ""; // Add repo prefix if exists

    // Detect language folder (English or Hindi)
    const isHindi = window.location.pathname.includes("/hi");
    let pathPrefix = `${basePath}${isHindi ? "/hi" : ""}`; // Ensure no trailing slash

    // Navbar content
    const navbarHTML = `
        <div class="custom-navbar">
            <!-- Toggle Button -->
            <button id="customMenuToggle" class="custom-menu-btn">☰</button>

            <!-- Full-Screen Offcanvas Menu -->
            <div id="customOffcanvasMenu" class="custom-offcanvas">
                <button id="customCloseMenu" class="custom-close-btn">&times;</button>
                <ul class="custom-menu">
                    <li><a href="${pathPrefix}/tribes-of-mp.html">${isHindi ? "म.प्र. की जनजातियाँ" : "Tribes of MP"}</a></li>
                    <li><a href="${pathPrefix}/gond-tribe.html">${isHindi ? "गोंडवाना जनजाति" : "Gondwana Tribe"}</a></li>
                    <li><a href="${pathPrefix}/history.html">${isHindi ? "इतिहास" : "History"}</a></li>
                    <li><a href="${pathPrefix}/conservation.html">${isHindi ? "संरक्षण" : "Conservation"}</a></li>
                    <li><a href="${basePath}/museum-collection.html">${isHindi ? "संग्रहालय संग्रह" : "Museum Collection"}</a></li>
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


class SlickMode {
    constructor() {
        this.createModal();
        this.slickModeImages = [];
        this.slickModeIndex = 0;
        this.captions = {};
        this.zoomScale = 1;
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.initEventListeners();
    }

    createModal() {
        this.slickMode = document.createElement("div");
        this.slickMode.id = "slickmode-modal";
        this.slickMode.innerHTML = `
            <div class="slickmode-content">
                <span class="slickmode-close">&times;</span>
                <img id="slickmode-image" src="" alt="Fullscreen Image">
                <p id="slickmode-caption"></p>
            </div>
            <button id="slickmode-prev">&#10094;</button>
            <button id="slickmode-next">&#10095;</button>
        `;
        document.body.appendChild(this.slickMode);

        this.slickModeImage = document.getElementById("slickmode-image");
        this.slickModeCaption = document.getElementById("slickmode-caption");
        this.slickModePrev = document.getElementById("slickmode-prev");
        this.slickModeNext = document.getElementById("slickmode-next");
        this.slickModeClose = document.querySelector(".slickmode-close");

        this.slickModeImage.style.transformOrigin = "center";
        this.slickModeImage.style.cursor = "grab";
    }

    open(images, selectedImageSrc, captions) {
        const clickedSwiperContainer = images.find(img => img.dataset.src === selectedImageSrc)?.closest(".swiper-container");

        if (!clickedSwiperContainer) return;

        this.slickModeImages = [...clickedSwiperContainer.querySelectorAll(".swiper-image")];
        this.captions = captions;

        this.slickModeIndex = this.slickModeImages.findIndex(img => img.dataset.src === selectedImageSrc);
        this.updateImage();
        this.slickMode.style.display = "flex";

        // Reset zoom & position
        this.resetZoomAndPosition();
    }

    close() {
        this.slickMode.style.display = "none";
    }

    changeImage(step) {
        this.slickModeIndex = (this.slickModeIndex + step + this.slickModeImages.length) % this.slickModeImages.length;
        this.updateImage();
    }

    updateImage() {
        const imgElement = this.slickModeImages[this.slickModeIndex];
        const imgSrc = imgElement.dataset.src;
        this.slickModeImage.src = imgSrc;
        this.slickModeCaption.textContent = this.captions[imgSrc] || "No caption available";

        // Reset zoom & position when switching images
        this.resetZoomAndPosition();
    }

    zoomImage(event) {
        event.preventDefault();
        const zoomFactor = 0.1;
        if (event.deltaY < 0) {
            this.zoomScale += zoomFactor; // Zoom in
        } else if (event.deltaY > 0) {
            this.zoomScale = Math.max(1, this.zoomScale - zoomFactor); // Zoom out (min scale 1)
        }
        this.slickModeImage.style.transform = `scale(${this.zoomScale}) translate(${this.offsetX}px, ${this.offsetY}px)`;
    }

    toggleZoom(event) {
        event.preventDefault();
        if (this.zoomScale === 1) {
            this.zoomScale = 2; // Zoom in
        } else {
            this.resetZoomAndPosition(); // Reset zoom and position
        }
        this.slickModeImage.style.transform = `scale(${this.zoomScale}) translate(${this.offsetX}px, ${this.offsetY}px)`;
    }

    resetZoomAndPosition() {
        this.zoomScale = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.slickModeImage.style.transform = `scale(1) translate(0px, 0px)`;
        this.slickModeImage.style.cursor = "grab";
    }

    startDragging(event) {
        if (this.zoomScale === 1) return;
        this.isDragging = true;
        this.slickModeImage.style.cursor = "grabbing";

        // Store initial positions
        this.startX = event.clientX - this.offsetX;
        this.startY = event.clientY - this.offsetY;
    }

    dragging(event) {
        if (!this.isDragging || this.zoomScale === 1) return;

        // Calculate new position
        this.offsetX = event.clientX - this.startX;
        this.offsetY = event.clientY - this.startY;

        // Apply transform
        this.slickModeImage.style.transform = `scale(${this.zoomScale}) translate(${this.offsetX}px, ${this.offsetY}px)`;
    }

    stopDragging() {
        this.isDragging = false;
        this.slickModeImage.style.cursor = "grab";
    }

    initEventListeners() {
        this.slickModeClose.addEventListener("click", () => this.close());
        this.slickModePrev.addEventListener("click", () => this.changeImage(-1));
        this.slickModeNext.addEventListener("click", () => this.changeImage(1));

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") this.close();
            if (e.key === "ArrowLeft") this.changeImage(-1);
            if (e.key === "ArrowRight") this.changeImage(1);
        });

        // Zoom in/out with mouse wheel
        this.slickModeImage.addEventListener("wheel", (e) => this.zoomImage(e));

        // Double-click to toggle zoom
        this.slickModeImage.addEventListener("dblclick", (e) => this.toggleZoom(e));

        // Dragging to move image when zoomed in
        this.slickModeImage.addEventListener("mousedown", (e) => this.startDragging(e));
        document.addEventListener("mousemove", (e) => this.dragging(e));
        document.addEventListener("mouseup", () => this.stopDragging());

        // Touchscreen dragging support
        this.slickModeImage.addEventListener("touchstart", (e) => this.startDragging(e.touches[0]));
        document.addEventListener("touchmove", (e) => this.dragging(e.touches[0]));
        document.addEventListener("touchend", () => this.stopDragging());
    }
}

const slickModeInstance = new SlickMode();


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".slickmode").forEach(image => {
        image.addEventListener("click", function () {
            let selectedImageSrc = this.getAttribute("data-src") || this.getAttribute("src");
            let selectedImageAlt = this.getAttribute("alt") || "No caption available"; // Get alt text or default

            if (!selectedImageSrc) return; // Exit if no valid image source

            // Open the modal with the clicked image as the only item
            slickModeInstance.slickModeImages = [this]; // Set the clicked image as the only image
            slickModeInstance.slickModeIndex = 0; // Since it's a single image
            slickModeInstance.slickModeImage.src = selectedImageSrc; // Set image source
            slickModeInstance.slickModeCaption.textContent = selectedImageAlt; // Set caption from alt text
            slickModeInstance.slickMode.style.display = "flex"; // Show the modal
            
            // Hide navigation buttons for independent images
            slickModeInstance.slickModePrev.style.display = "none";
            slickModeInstance.slickModeNext.style.display = "none";
        });
    });
});
