const historySections = document.querySelectorAll(".history-section");
const navItems = document.querySelectorAll(".section-nav-item");
const navLine = document.querySelector(".section-nav-line");
const informerBtn = document.getElementById("informer");
const sectionInfo = document.getElementById("section-info");
const arrow = document.getElementById("arrow");

let currentSectionIndex = 0;
let lastScrollTime = 0; 

function getLanguage() {
  return document.body.getAttribute("data-lang") || "en"; 
}

function switchSection(index) {
  if (index < 0 || index >= historySections.length) return;

  historySections.forEach((section) => section.classList.remove("active"));
  navItems.forEach((item) => item.classList.remove("active"));

  historySections[index].classList.add("active");
  navItems[index].classList.add("active");

  currentSectionIndex = index;

  const lang = getLanguage();

  if (currentSectionIndex === 0) {
    sectionInfo.textContent =
      lang === "hi" ? "बावनवीं पलटन" : "The 52nd Regiment";
    arrow.innerHTML = "&#8595;"; 
  } else if (currentSectionIndex === 1) {
    sectionInfo.textContent =
    lang === "hi" ? "शहीदों की सूची" : "List of Martyrs";
    arrow.innerHTML = "&#8595;"; 
  } else {
    sectionInfo.textContent =
    lang === "hi" ? "गोंड राजवंश" : "The Gond Dynasty";
    arrow.innerHTML = "&#8593;"; 
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


document.addEventListener("wheel", (e) => {
  const now = new Date().getTime();
  if (now - lastScrollTime < 400) return; 
  lastScrollTime = now; 

  if (e.deltaY > 0) {
    switchSection(currentSectionIndex + 1);
  } else {
    switchSection(currentSectionIndex - 1);
  }
});

navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    switchSection(index);
  });
});

informerBtn.addEventListener("click", (e) => {
  e.preventDefault(); 

  if (currentSectionIndex < historySections.length - 1) {
    switchSection(currentSectionIndex + 1);
  } else {
    switchSection(0);
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
