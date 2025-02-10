const historySections = document.querySelectorAll(".history-section");
const navItems = document.querySelectorAll(".section-nav-item");
const navLine = document.querySelector(".section-nav-line");
const informerBtn = document.getElementById("informer");
const sectionInfo = document.getElementById("section-info");
const arrow = document.getElementById("arrow");

let currentSectionIndex = 0;

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

  // Update the button content based on the current section
  if (currentSectionIndex === 0) {
    sectionInfo.textContent = "The 52nd Regiment";
    arrow.innerHTML = "&#8595;"; // Down arrow for section 1
  } else {
    sectionInfo.textContent = "The Gond Dynasty";
    arrow.innerHTML = "&#8593;"; // Up arrow for section 2
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

// Handle mouse scroll navigation
document.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    switchSection(currentSectionIndex + 1);
  } else {
    switchSection(currentSectionIndex - 1);
  }
});

// Add click event listeners to navigation items
navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    switchSection(index);
  });
});

// Add click event listener for the button
informerBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default action (page reload)
  
  // Switch to the next section when the button is clicked
  if (currentSectionIndex === 0) {
    switchSection(1); // Move to section 2
  } else {
    switchSection(0); // Move back to section 1
  }
});

// Initialize the first section
switchSection(currentSectionIndex);


const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 0, // No space between slides
  centeredSlides: true, // Ensure slides are fully aligned
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: { slidesPerView: 1 }, // Show only 1 slide at a time
    480: { slidesPerView: 1 }, 
    767: { slidesPerView: 1 },
    1024: { slidesPerView: 2 }, // Show 2 slides for larger screens
    1025: { slidesPerView: 4 },
  },
});



const slides = document.querySelectorAll('.slide-image-container');

slides.forEach(slide => {
  slide.addEventListener('mouseenter', () => {
    slide.querySelector('.moon').style.opacity = '1';
  });

  slide.addEventListener('mouseleave', () => {
    slide.querySelector('.moon').style.opacity = '0';
  });
});
