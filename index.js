// Initialize Smooth Scrollbar
const scrollbar = Scrollbar.init(document.querySelector('#scroll-container'), {
  damping: 0.1,
});

const sections = document.querySelectorAll('.section');
const container = document.getElementById('scroll-container');
const gradientOverlay = document.getElementById('gradient-overlay');

let currentSectionIndex = 0;
let isScrolling = false; // Prevent multiple scroll events

// Intersection Observer Options
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

// Get current pathname
const path = window.location.pathname;

// Determine if the current page is the index page
const isIndexPage = path === '/' || path.endsWith('/index') || path.endsWith('/index.html');

// Identify the first and last sections
const firstSection = sections[0];
const lastSection = sections[sections.length - 1];

// Background Transition and Section Reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const bgImage = entry.target.getAttribute('data-bg');
      const isOddSection = entry.target.classList.contains('odd');

      // Set the background image of the scroll container dynamically
      container.style.backgroundImage = `url(${bgImage})`;

      // Disable gradient for first and last sections on non-index pages
      if (!isIndexPage && (entry.target === firstSection || entry.target === lastSection)) {
        gradientOverlay.style.background = 'none';
      } else {
        // Adjust the gradient direction based on whether the section is odd or even
        const gradientDirection = isOddSection ? 'to right' : 'to left';
        gradientOverlay.style.setProperty(
          'background',
          `linear-gradient(${gradientDirection}, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0))`
        );
      }

      // Reveal the section with animation
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, observerOptions);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});


// Helper to check if an element can scroll
function canScroll(element) {
  return element.scrollHeight > element.clientHeight;
}

// Helper to handle internal scrolling
function handleInnerScroll(event, content) {
  if (!canScroll(content)) return false;

  const isAtTop = content.scrollTop === 0;
  const isAtBottom =
    content.scrollTop + content.clientHeight >= content.scrollHeight;

  if (event.deltaY > 0 && isAtBottom) {
    // Prevent scrolling to the next section when at the bottom
    return false;
  } else if (event.deltaY < 0 && isAtTop) {
    // Prevent scrolling to the previous section when at the top
    return false;
  }

  // Allow scrolling inside the content
  content.scrollTop += event.deltaY;
  return true;
}

// Mousewheel event listener for section scrolling
document.addEventListener('wheel', (event) => {
  if (isScrolling) return; // Prevent handling the event if we're already scrolling
  isScrolling = true; // Set the flag to true when scrolling

  // Use setTimeout to reset the flag after a delay
  setTimeout(() => {
    isScrolling = false; // Reset the flag after scrolling completes
  }, 600); // Adjust this timeout based on your preference

  const currentSection = sections[currentSectionIndex];
  const content = currentSection.querySelector('.right-side-tribe');

  if (content && handleInnerScroll(event, content)) {
    event.preventDefault(); // Prevent default section scrolling
    return;
  }

  // Scroll to the next or previous section
  if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
    currentSectionIndex++;
  } else if (event.deltaY < 0 && currentSectionIndex > 0) {
    currentSectionIndex--;
  }

  // Smoothly scroll to the target section
  scrollbar.scrollTo(0, sections[currentSectionIndex].offsetTop, 600);
});
