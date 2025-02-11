document.addEventListener("DOMContentLoaded", function () {
  // Initialize Smooth Scrollbar (Only Once)
  let scrollContainer = document.getElementById("scroll-container");
  let scrollbar = Scrollbar.get(scrollContainer);
  
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
  
  // Get current pathname
  const path = window.location.pathname;
  const isIndexPage = path === '/' || path.endsWith('/index') || path.endsWith('/index.html');

  // Identify first and last sections
  const firstSection = sections[0];
  const lastSection = sections[sections.length - 1];

  // Intersection Observer for Background Transition & Section Reveal
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

  // Observe sections
  sections.forEach(section => observer.observe(section));

  // Helper: Check if an element can scroll internally
  function canScroll(element) {
      return element.scrollHeight > element.clientHeight;
  }

  // Helper: Handle internal scrolling within sections
  function handleInnerScroll(event, content) {
      if (!canScroll(content)) return false;

      const isAtTop = content.scrollTop === 0;
      const isAtBottom = content.scrollTop + content.clientHeight >= content.scrollHeight;

      if ((event.deltaY > 0 && isAtBottom) || (event.deltaY < 0 && isAtTop)) {
          return false;
      }

      // Allow scrolling inside the content
      content.scrollTop += event.deltaY;
      return true;
  }

  // Mousewheel event listener for section scrolling
  document.addEventListener('wheel', (event) => {
      if (isScrolling) return;
      isScrolling = true;

      setTimeout(() => { isScrolling = false; }, 600); // Prevent multiple triggers

      const currentSection = sections[currentSectionIndex];
      const content = currentSection.querySelector('.right-side-tribe');

      if (content && handleInnerScroll(event, content)) {
          event.preventDefault();
          return;
      }

      // Scroll between sections
      if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
          currentSectionIndex++;
      } else if (event.deltaY < 0 && currentSectionIndex > 0) {
          currentSectionIndex--;
      }

      scrollbar.scrollTo(0, sections[currentSectionIndex].offsetTop, 600);
  });

  // Create "Go to Top" button dynamically
  let goTopBtn = document.createElement("button");
  goTopBtn.id = "goTopBtn";
  goTopBtn.innerText = "↑ Top";
  document.body.appendChild(goTopBtn);

  // Style the "Go to Top" button
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
  let scrollThreshold = 0;
  if (sections.length >= 2) {
      scrollThreshold = sections[0].offsetHeight + sections[1].offsetHeight;
  }

  function smoothScrollToTop() {
    let scrollbar = Scrollbar.get(document.getElementById("scroll-container"));

    if (scrollbar) {
        scrollbar.setPosition(0, 0); // 🚀 Instantly jump to top (no animation)
    } else {
        window.scrollTo(0, 0); // 🚀 Native fallback for instant jump
    }

    currentSectionIndex = 0; // 🚀 Reset section index
}




  // Attach event listener to Go to Top button
  goTopBtn.addEventListener("click", smoothScrollToTop);

  // Show/hide Go to Top button after scrolling past two sections
  scrollbar.addListener(({ offset }) => {
      if (offset.y > scrollThreshold) {
          goTopBtn.style.opacity = "1";
          goTopBtn.style.visibility = "visible";
      } else {
          goTopBtn.style.opacity = "0";
          goTopBtn.style.visibility = "hidden";
      }
  });
});
