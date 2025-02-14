const historySections = document.querySelectorAll(".history-section");
const navItems = document.querySelectorAll(".section-nav-item");
const navLine = document.querySelector(".section-nav-line");
const informerBtn = document.getElementById("informer");
const sectionInfo = document.getElementById("section-info");
const arrow = document.getElementById("arrow");

let currentSectionIndex = 0;
let lastScrollTime = 0; // Prevent multiple scrolls in one rotation

// Function to get the current language
function getLanguage() {
  return document.body.getAttribute("data-lang") || "en"; // Default to English
}

// Function to switch sections
function switchSection(index) {
  if (index < 0 || index >= historySections.length) return;

  // Remove active class from all sections and nav items
  historySections.forEach((section) => section.classList.remove("active"));
  navItems.forEach((item) => item.classList.remove("active"));

  // Add active class to the current section and nav item
  historySections[index].classList.add("active");
  navItems[index].classList.add("active");

  // Update the current section index
  currentSectionIndex = index;

  // Get current language
  const lang = getLanguage();

  // Update section info text and arrow based on the section
  if (currentSectionIndex === 0) {
    sectionInfo.textContent =
      lang === "hi" ? "बावनवीं पलटन" : "The 52nd Regiment";
    arrow.innerHTML = "&#8595;"; // Down arrow
  } else if (currentSectionIndex === 1) {
    sectionInfo.textContent =
      lang === "hi" ? "गोंड राजवंश" : "The Gond Dynasty";
    arrow.innerHTML = "&#8595;"; // Down arrow for middle section
  } else {
    sectionInfo.textContent =
      lang === "hi" ? "शहीदों की सूची" : "List of Martyrs";
    arrow.innerHTML = "&#8593;"; // Up arrow for last section
  }
}

// Handle keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
    switchSection(currentSectionIndex + 1);
  } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
    switchSection(currentSectionIndex - 1);
  }
});

// Handle mouse scroll navigation (one section per wheel rotation)
document.addEventListener("wheel", (e) => {
  const now = new Date().getTime();
  if (now - lastScrollTime < 400) return; // Prevent multiple triggers in one rotation
  lastScrollTime = now; // Update last scroll time

  if (e.deltaY > 0) {
    switchSection(currentSectionIndex + 1);
  } else {
    switchSection(currentSectionIndex - 1);
  }
});

// Add click event listeners to navigation items (Instant)
navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    switchSection(index);
  });
});

// Add click event listener for the button (Instant)
informerBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default action

  // Move to the next section instantly when button is clicked
  if (currentSectionIndex < historySections.length - 1) {
    switchSection(currentSectionIndex + 1);
  } else {
    switchSection(0); // Loop back to the first section
  }
});

// Initialize the first section
switchSection(currentSectionIndex);

// Swiper Initialization
const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    767: { slidesPerView: 1 },
    1024: { slidesPerView: 2 },
    1025: { slidesPerView: 4 },
  },
});
