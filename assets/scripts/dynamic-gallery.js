document.addEventListener("DOMContentLoaded", function () {
  const $dynamicGallery = document.getElementById("dynamic-gallery-demo");

  // Detect if running on GitHub Pages (adjust for repo)
  const repoName = "/RSSM"; // Change this if your repo name is different
  const isGitHubPages = window.location.hostname === "a0749.github.io";

  // Function to update image paths dynamically
  function updateImagePaths(galleries) {
      Object.keys(galleries).forEach(key => {
          galleries[key] = galleries[key].map(item => ({
              ...item,
              src: isGitHubPages ? repoName + item.src : item.src,
              thumb: isGitHubPages ? repoName + item.thumb : item.thumb
          }));
      });
  }

  // Update all image paths
  updateImagePaths(galleries);

  // Function to detect language
  function detectLanguage() {
      return window.location.pathname.includes("/hi/") ? "hi" : "en";
  }

  // Function to initialize the gallery dynamically
  function initializeGallery(buttonId) {
      const lang = detectLanguage();
      const galleryData = galleries[buttonId].map(item => ({
          src: item.src,
          thumb: item.thumb,
          subHtml: item[lang]
      }));

      const dynamicGallery = window.lightGallery($dynamicGallery, {
          dynamic: true,
          plugins: [lgZoom, lgVideo, lgThumbnail],
          showDownload: false,
          dynamicEl: galleryData,
      });
      dynamicGallery.openGallery(0);
  }

  // Attach event listeners to all gallery buttons
  document.querySelectorAll("[data-gallery]").forEach(button => {
      button.addEventListener("click", () => {
          initializeGallery(button.dataset.gallery);
      });
  });


  //  Galleries object
  const galleries = {
    // Front Page Galleries
      "museum": [
          { src: "/assets/images/Front/museum/EastFacade.JPG", thumb: "/assets/images/Front/museum/EastFacade.JPG", en: "<p>East Facade</p>", hi: "<p>पूर्व मुख</p>" },
          { src: "/assets/images/Front/museum/NorthFacade.JPG", thumb: "/assets/images/Front/museum/NorthFacade.JPG", en: "<p>North Facade</p>", hi: "<p>उत्तर मुख</p>" },
          { src: "/assets/images/Front/museum/SouthFacade.jpg", thumb: "/assets/images/Front/museum/SouthFacade.jpg", en: "<p>South Facade</p>", hi: "<p>संग्रहालय </p>" },
          { src: "/assets/images/Front/museum/museum1.jpeg", thumb: "/assets/images/Front/museum/museum1.jpeg", en: "<p>Museum</p>", hi: "<p>संग्रहालय </p>" },
          { src: "/assets/images/Front/museum/1.JPG", thumb: "/assets/images/Front/museum/1.JPG", en: "<p>Museum</p>", hi: "<p>संग्रहालय </p>" },
          { src: "/assets/images/Front/museum/4b.JPG", thumb: "/assets/images/Front/museum/4b.JPG", en: "<p>Museum</p>", hi: "<p>संग्रहालय </p>" },
      ],
      "gallery-1": [
          { src: "/assets/images/Front/gallery1/1.webp", thumb: "/assets/images/Front/gallery1/1.webp", en: "<p>Gallery 1</p>", hi: "<p>दीर्घा 1</p>" },
          { src: "/assets/images/Front/gallery1/2.webp", thumb: "/assets/images/Front/gallery1/2.webp", en: "<p>Gallery 1</p>", hi: "<p>दीर्घा 1</p>" },
          { src: "/assets/images/Front/gallery1/3.webp", thumb: "/assets/images/Front/gallery1/3.webp", en: "<p>Gallery 1</p>", hi: "<p>दीर्घा 1</p>" }
      ],
      "gallery-2": [
          { src: "/assets/images/Front/gallery2/1.webp", thumb: "/assets/images/Front/gallery2/1.webp", en: "<p>Gallery 2</p>", hi: "<p>दीर्घा 2</p>" },
          { src: "/assets/images/Front/gallery2/2.webp", thumb: "/assets/images/Front/gallery2/2.webp", en: "<p>Gallery 2</p>", hi: "<p>दीर्घा 2</p>" },
          { src: "/assets/images/Front/gallery2/3.webp", thumb: "/assets/images/Front/gallery2/3.webp", en: "<p>Gallery 2</p>", hi: "<p>दीर्घा 2</p>" },
      ],
      "gallery-3": [
          { src: "/assets/images/Front/gallery3/Gallery3a.webp", thumb: "/assets/images/Front/gallery3/Gallery3a.webp", en: "<p>Gallery 3</p>", hi: "<p>दीर्घा 3</p>" },
          { src: "/assets/images/Front/gallery3/Gallery3b.webp", thumb: "/assets/images/Front/gallery3/Gallery3b.webp", en: "<p>Gallery 3</p>", hi: "<p>दीर्घा 3</p>" },
          { src: "/assets/images/Front/gallery3/Gallery3c.webp", thumb: "/assets/images/Front/gallery3/Gallery3c.webp", en: "<p>Gallery 3</p>", hi: "<p>दीर्घा 3</p>" },
      ],
      "gallery-4": [
          { src: "/assets/images/Front/gallery4/1.webp", thumb: "/assets/images/Front/gallery4/1.webp", en: "<p>Gallery 4</p>", hi: "<p>दीर्घा 4</p>" },
          { src: "/assets/images/Front/gallery4/2.webp", thumb: "/assets/images/Front/gallery4/2.webp", en: "<p>Gallery 4</p>", hi: "<p>दीर्घा 4</p>" },
          { src: "/assets/images/Front/gallery4/3.webp", thumb: "/assets/images/Front/gallery4/3.webp", en: "<p>Gallery 4</p>", hi: "<p>दीर्घा 4</p>" },
      ],
      "gallery-5": [
          { src: "/assets/images/Front/gallery5/1.webp", thumb: "/assets/images/Front/gallery5/1.webp", en: "<p>Gallery 5</p>", hi: "<p>दीर्घा 5</p>" },
          { src: "/assets/images/Front/gallery5/2.webp", thumb: "/assets/images/Front/gallery5/2.webp", en: "<p>Gallery 5</p>", hi: "<p>दीर्घा 5</p>" },
          { src: "/assets/images/Front/gallery5/3.webp", thumb: "/assets/images/Front/gallery5/3.webp", en: "<p>Gallery 5</p>", hi: "<p>दीर्घा 5</p>" },
          { src: "/assets/images/Front/gallery5/4.webp", thumb: "/assets/images/Front/gallery5/4.webp", en: "<p>Gallery 5</p>", hi: "<p>दीर्घा 5</p>" },
      ],
      "gallery-6": [
          { src: "/assets/images/Front/gallery6/Gallery6a.webp", thumb: "/assets/images/Front/gallery6/Gallery6a.webp", en: "<p>Gallery 6</p>", hi: "<p>दीर्घा 6</p>" },
          { src: "/assets/images/Front/gallery6/Gallery6b.webp", thumb: "/assets/images/Front/gallery6/Gallery6b.webp", en: "<p>Gallery 6</p>", hi: "<p>दीर्घा 6</p>" },
          { src: "/assets/images/Front/gallery6/Gallery6c.webp", thumb: "/assets/images/Front/gallery6/Gallery6c.webp", en: "<p>Gallery 6</p>", hi: "<p>दीर्घा 6</p>" },
      ],

    // Gondwana Tribe Galleries

      "gond-tribe": [
          { src: "/assets/images/tribe/gond/gond1.webp", thumb: "/assets/images/tribe/gond/gond1.webp", en: "<p>The Gondwana Tribe</p>", hi: "<p>गोंडवाना जनजाति</p>" },
          { src: "/assets/images/tribe/gond/gond2.webp", thumb: "/assets/images/tribe/gond/gond2.webp", en: "<p>The Gondwana Tribe</p>", hi: "<p>गोंडवाना जनजाति</p>" },
          { src: "/assets/images/tribe/gond/gond3.webp", thumb: "/assets/images/tribe/gond/gond3.webp", en: "<p>The Gondwana Tribe</p>", hi: "<p>गोंडवाना जनजाति</p>" },
          { src: "/assets/images/tribe/gond/gond4.webp", thumb: "/assets/images/tribe/gond/gond4.webp", en: "<p>The Gondwana Tribe</p>", hi: "<p>गोंडवाना जनजाति</p>" },
          { src: "/assets/images/tribe/gond/gond5.webp", thumb: "/assets/images/tribe/gond/gond5.webp", en: "<p>The Gondwana Tribe</p>", hi: "<p>गोंडवाना जनजाति</p>" },
          { src: "/assets/images/tribe/gond/gond6.webp", thumb: "/assets/images/tribe/gond/gond6.webp", en: "<p>The Gondwana Tribe</p>", hi: "<p>गोंडवाना जनजाति</p>" },
          { src: "/assets/images/tribe/gond/gond7.webp", thumb: "/assets/images/tribe/gond/gond7.webp", en: "<p>The Gondwana Tribe</p>", hi: "<p>गोंडवाना जनजाति</p>" },
          { src: "/assets/images/tribe/gond/gond8.webp", thumb: "/assets/images/tribe/gond/gond8.webp", en: "<p>The Gondwana Tribe</p>", hi: "<p>गोंडवाना जनजाति</p>" },
          { src: "/assets/images/tribe/gond/gond9.webp", thumb: "/assets/images/tribe/gond/gond9.webp", en: "<p>The Gondwana Tribe</p>", hi: "<p>गोंडवाना जनजाति</p>" },
          { src: "/assets/images/tribe/gond/gond10.webp", thumb: "/assets/images/tribe/gond/gond10.webp", en: "<p>The Gondwana Tribe</p>", hi: "<p>गोंडवाना जनजाति</p>" },

      ],
      "social-life": [
        { src: "/assets/images/tribe/social/social1.webp", thumb: "/assets/images/tribe/social/social1.webp", en: "<p>Social Life - The Gondwana Tribe</p>", hi: "<p>सामाजिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/social/social2.webp", thumb: "/assets/images/tribe/social/social2.webp", en: "<p>Social Life - The Gondwana Tribe</p>", hi: "<p>सामाजिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/social/social3.webp", thumb: "/assets/images/tribe/social/social3.webp", en: "<p>Social Life - The Gondwana Tribe</p>", hi: "<p>सामाजिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/social/social4.webp", thumb: "/assets/images/tribe/social/social4.webp", en: "<p>Social Life - The Gondwana Tribe</p>", hi: "<p>सामाजिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/social/social5.webp", thumb: "/assets/images/tribe/social/social5.webp", en: "<p>Social Life - The Gondwana Tribe</p>", hi: "<p>सामाजिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/social/social6.webp", thumb: "/assets/images/tribe/social/social6.webp", en: "<p>Social Life - The Gondwana Tribe</p>", hi: "<p>सामाजिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/social/social7.webp", thumb: "/assets/images/tribe/social/social7.webp", en: "<p>Social Life - The Gondwana Tribe</p>", hi: "<p>सामाजिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/social/social8.webp", thumb: "/assets/images/tribe/social/social8.webp", en: "<p>Social Life - The Gondwana Tribe</p>", hi: "<p>सामाजिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/social/social9.webp", thumb: "/assets/images/tribe/social/social9.webp", en: "<p>Social Life - The Gondwana Tribe</p>", hi: "<p>सामाजिक जीवन - गोंडवाना जनजाति</p>" }
      ],
      "religious-life": [
        { src: "/assets/images/tribe/religious/religious1.webp", thumb: "/assets/images/tribe/religious/religious1.webp", en: "<p>Religious Life - The Gondwana Tribe</p>", hi: "<p>धार्मिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/religious/religious2.webp", thumb: "/assets/images/tribe/religious/religious2.webp", en: "<p>Religious Life - The Gondwana Tribe</p>", hi: "<p>धार्मिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/religious/religious3.webp", thumb: "/assets/images/tribe/religious/religious3.webp", en: "<p>Religious Life - The Gondwana Tribe</p>", hi: "<p>धार्मिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/religious/religious4.webp", thumb: "/assets/images/tribe/religious/religious4.webp", en: "<p>Religious Life - The Gondwana Tribe</p>", hi: "<p>धार्मिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/religious/religious5.webp", thumb: "/assets/images/tribe/religious/religious5.webp", en: "<p>Religious Life - The Gondwana Tribe</p>", hi: "<p>धार्मिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/religious/religious6.webp", thumb: "/assets/images/tribe/religious/religious6.webp", en: "<p>Religious Life - The Gondwana Tribe</p>", hi: "<p>धार्मिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/religious/religious7.webp", thumb: "/assets/images/tribe/religious/religious7.webp", en: "<p>Religious Life - The Gondwana Tribe</p>", hi: "<p>धार्मिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/religious/religious8.webp", thumb: "/assets/images/tribe/religious/religious8.webp", en: "<p>Religious Life - The Gondwana Tribe</p>", hi: "<p>धार्मिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/religious/religious9.webp", thumb: "/assets/images/tribe/religious/religious9.webp", en: "<p>Religious Life - The Gondwana Tribe</p>", hi: "<p>धार्मिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/religious/religious10.webp", thumb: "/assets/images/tribe/religious/religious10.webp", en: "<p>Religious Life - The Gondwana Tribe</p>", hi: "<p>धार्मिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/religious/religious11.webp", thumb: "/assets/images/tribe/religious/religious11.webp", en: "<p>Religious Life - The Gondwana Tribe</p>", hi: "<p>धार्मिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/religious/religious12.webp", thumb: "/assets/images/tribe/religious/religious12.webp", en: "<p>Religious Life - The Gondwana Tribe</p>", hi: "<p>धार्मिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/religious/religious13.webp", thumb: "/assets/images/tribe/religious/religious13.webp", en: "<p>Religious Life - The Gondwana Tribe</p>", hi: "<p>धार्मिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/religious/religious14.webp", thumb: "/assets/images/tribe/religious/religious14.webp", en: "<p>Religious Life - The Gondwana Tribe</p>", hi: "<p>धार्मिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/religious/religious15.webp", thumb: "/assets/images/tribe/religious/religious15.webp", en: "<p>Religious Life - The Gondwana Tribe</p>", hi: "<p>धार्मिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/religious/religious16.webp", thumb: "/assets/images/tribe/religious/religious16.webp", en: "<p>Religious Life - The Gondwana Tribe</p>", hi: "<p>धार्मिक जीवन - गोंडवाना जनजाति</p>" }
      ],
      "cultural-life": [
        { src: "/assets/images/tribe/cultural/cultural1.webp", thumb: "/assets/images/tribe/cultural/cultural1.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural2.webp", thumb: "/assets/images/tribe/cultural/cultural2.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural3.webp", thumb: "/assets/images/tribe/cultural/cultural3.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural4.webp", thumb: "/assets/images/tribe/cultural/cultural4.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural5.webp", thumb: "/assets/images/tribe/cultural/cultural5.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural6.webp", thumb: "/assets/images/tribe/cultural/cultural6.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural7.webp", thumb: "/assets/images/tribe/cultural/cultural7.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural8.webp", thumb: "/assets/images/tribe/cultural/cultural8.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural9.webp", thumb: "/assets/images/tribe/cultural/cultural9.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural10.webp", thumb: "/assets/images/tribe/cultural/cultural10.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural11.webp", thumb: "/assets/images/tribe/cultural/cultural11.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural12.webp", thumb: "/assets/images/tribe/cultural/cultural12.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural13.webp", thumb: "/assets/images/tribe/cultural/cultural13.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural14.webp", thumb: "/assets/images/tribe/cultural/cultural14.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural15.webp", thumb: "/assets/images/tribe/cultural/cultural15.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural16.webp", thumb: "/assets/images/tribe/cultural/cultural16.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural17.webp", thumb: "/assets/images/tribe/cultural/cultural17.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural18.webp", thumb: "/assets/images/tribe/cultural/cultural18.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural19.webp", thumb: "/assets/images/tribe/cultural/cultural19.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural20.webp", thumb: "/assets/images/tribe/cultural/cultural20.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural21.webp", thumb: "/assets/images/tribe/cultural/cultural21.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cultural/cultural22.webp", thumb: "/assets/images/tribe/cultural/cultural22.webp", en: "<p>Cultural Life - The Gondwana Tribe</p>", hi: "<p>सांस्कृतिक जीवन - गोंडवाना जनजाति</p>" }
      
      ],
      "cuisine-life": [
        { src: "/assets/images/tribe/cuisine/cuisine1.webp", thumb: "/assets/images/tribe/cuisine/cuisine1.webp", en: "<p>Cuisine - The Gondwana Tribe</p>", hi: "<p>खान पान - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cuisine/cuisine2.webp", thumb: "/assets/images/tribe/cuisine/cuisine2.webp", en: "<p>Cuisine - The Gondwana Tribe</p>", hi: "<p>खान पान - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cuisine/cuisine3.webp", thumb: "/assets/images/tribe/cuisine/cuisine3.webp", en: "<p>Cuisine - The Gondwana Tribe</p>", hi: "<p>खान पान - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cuisine/cuisine4.webp", thumb: "/assets/images/tribe/cuisine/cuisine4.webp", en: "<p>Cuisine - The Gondwana Tribe</p>", hi: "<p>खान पान - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cuisine/cuisine5.webp", thumb: "/assets/images/tribe/cuisine/cuisine5.webp", en: "<p>Cuisine - The Gondwana Tribe</p>", hi: "<p>खान पान - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cuisine/cuisine6.webp", thumb: "/assets/images/tribe/cuisine/cuisine6.webp", en: "<p>Cuisine - The Gondwana Tribe</p>", hi: "<p>खान पान - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cuisine/cuisine7.webp", thumb: "/assets/images/tribe/cuisine/cuisine7.webp", en: "<p>Cuisine - The Gondwana Tribe</p>", hi: "<p>खान पान - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cuisine/cuisine8.webp", thumb: "/assets/images/tribe/cuisine/cuisine8.webp", en: "<p>Cuisine - The Gondwana Tribe</p>", hi: "<p>खान पान - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cuisine/cuisine9.webp", thumb: "/assets/images/tribe/cuisine/cuisine9.webp", en: "<p>Cuisine - The Gondwana Tribe</p>", hi: "<p>खान पान - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cuisine/cuisine10.webp", thumb: "/assets/images/tribe/cuisine/cuisine10.webp", en: "<p>Cuisine - The Gondwana Tribe</p>", hi: "<p>खान पान - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cuisine/cuisine11.webp", thumb: "/assets/images/tribe/cuisine/cuisine11.webp", en: "<p>Cuisine - The Gondwana Tribe</p>", hi: "<p>खान पान - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/cuisine/cuisine12.webp", thumb: "/assets/images/tribe/cuisine/cuisine12.webp", en: "<p>Cuisine - The Gondwana Tribe</p>", hi: "<p>खान पान - गोंडवाना जनजाति</p>" }
      
      ],
      "paintings-life": [
        { src: "/assets/images/tribe/painting/painting1.webp", thumb: "/assets/images/tribe/painting/painting1.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting2.webp", thumb: "/assets/images/tribe/painting/painting2.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting3.webp", thumb: "/assets/images/tribe/painting/painting3.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting4.webp", thumb: "/assets/images/tribe/painting/painting4.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting5.webp", thumb: "/assets/images/tribe/painting/painting5.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting6.webp", thumb: "/assets/images/tribe/painting/painting6.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting7.webp", thumb: "/assets/images/tribe/painting/painting7.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting8.webp", thumb: "/assets/images/tribe/painting/painting8.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting9.webp", thumb: "/assets/images/tribe/painting/painting9.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting10.webp", thumb: "/assets/images/tribe/painting/painting10.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting11.webp", thumb: "/assets/images/tribe/painting/painting11.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting12.webp", thumb: "/assets/images/tribe/painting/painting12.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting13.webp", thumb: "/assets/images/tribe/painting/painting13.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting14.webp", thumb: "/assets/images/tribe/painting/painting14.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting15.webp", thumb: "/assets/images/tribe/painting/painting15.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting16.webp", thumb: "/assets/images/tribe/painting/painting16.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting17.webp", thumb: "/assets/images/tribe/painting/painting17.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting18.webp", thumb: "/assets/images/tribe/painting/painting18.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting19.webp", thumb: "/assets/images/tribe/painting/painting19.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting20.webp", thumb: "/assets/images/tribe/painting/painting20.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting21.webp", thumb: "/assets/images/tribe/painting/painting21.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting22.webp", thumb: "/assets/images/tribe/painting/painting22.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting23.webp", thumb: "/assets/images/tribe/painting/painting23.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting24.webp", thumb: "/assets/images/tribe/painting/painting24.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting25.webp", thumb: "/assets/images/tribe/painting/painting25.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting26.webp", thumb: "/assets/images/tribe/painting/painting26.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting27.webp", thumb: "/assets/images/tribe/painting/painting27.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting28.webp", thumb: "/assets/images/tribe/painting/painting28.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting29.webp", thumb: "/assets/images/tribe/painting/painting29.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting30.webp", thumb: "/assets/images/tribe/painting/painting30.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting31.webp", thumb: "/assets/images/tribe/painting/painting31.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting32.webp", thumb: "/assets/images/tribe/painting/painting32.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting33.webp", thumb: "/assets/images/tribe/painting/painting33.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting34.webp", thumb: "/assets/images/tribe/painting/painting34.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting35.webp", thumb: "/assets/images/tribe/painting/painting35.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting36.webp", thumb: "/assets/images/tribe/painting/painting36.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting37.webp", thumb: "/assets/images/tribe/painting/painting37.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/painting38.webp", thumb: "/assets/images/tribe/painting/painting38.webp", en: "<p>Painting - The Gondwana Tribe</p>", hi: "<p>चित्रकला - गोंडवाना जनजाति</p>" }
      
      ],
      "jangarh": [
        { src: "/assets/images/tribe/painting/jangadKalam/jangadKalam9.webp", thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam9.webp", en: "<p>Jangad Kalam - The Artist and His Arts - The Gondwana Tribe</p>", hi: "<p>  गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/jangadKalam/jangadKalam1.webp", thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam1.webp", en: "<p>Jangad Kalam - The Artist and His Arts - The Gondwana Tribe</p>", hi: "<p>  गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/jangadKalam/jangadKalam2.webp", thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam2.webp", en: "<p>Jangad Kalam - The Artist and His Arts - The Gondwana Tribe</p>", hi: "<p>  गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/jangadKalam/jangadKalam3.webp", thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam3.webp", en: "<p>Jangad Kalam - The Artist and His Arts - The Gondwana Tribe</p>", hi: "<p>  गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/jangadKalam/jangadKalam4.webp", thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam4.webp", en: "<p>Jangad Kalam - The Artist and His Arts - The Gondwana Tribe</p>", hi: "<p>  गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/jangadKalam/jangadKalam5.webp", thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam5.webp", en: "<p>Jangad Kalam - The Artist and His Arts - The Gondwana Tribe</p>", hi: "<p>  गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/jangadKalam/jangadKalam6.webp", thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam6.webp", en: "<p>Jangad Kalam - The Artist and His Arts - The Gondwana Tribe</p>", hi: "<p>  गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/jangadKalam/jangadKalam7.webp", thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam7.webp", en: "<p>Jangad Kalam - The Artist and His Arts - The Gondwana Tribe</p>", hi: "<p>  गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/jangadKalam/jangadKalam8.webp", thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam8.webp", en: "<p>Jangad Kalam - The Artist and His Arts - The Gondwana Tribe</p>", hi: "<p>  गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/jangadKalam/jangadKalam10.webp", thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam10.webp", en: "<p>Jangad Kalam - The Artist and His Arts - The Gondwana Tribe</p>", hi: "<p>  गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/jangadKalam/jangadKalam11.webp", thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam11.webp", en: "<p>Jangad Kalam - The Artist and His Arts - The Gondwana Tribe</p>", hi: "<p>  गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/jangadKalam/jangadKalam12.webp", thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam12.webp", en: "<p>Jangad Kalam - The Artist and His Arts - The Gondwana Tribe</p>", hi: "<p>  गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/painting/jangadKalam/jangadKalam13.webp", thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam13.webp", en: "<p>Jangad Kalam - The Artist and His Arts - The Gondwana Tribe</p>", hi: "<p>  गोंडवाना जनजाति</p>" }
      
      ],
      "aayurveda-life": [
        { src: "/assets/images/tribe/aayurveda/aayurveda1.webp", thumb: "/assets/images/tribe/aayurveda/aayurveda1.webp", en: "<p>Aayurveda  - The Gondwana Tribe</p>", hi: "<p>आयुर्वेदा - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/aayurveda/aayurveda2.webp", thumb: "/assets/images/tribe/aayurveda/aayurveda2.webp", en: "<p>Aayurveda  - The Gondwana Tribe</p>", hi: "<p>आयुर्वेदा - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/aayurveda/aayurveda3.webp", thumb: "/assets/images/tribe/aayurveda/aayurveda3.webp", en: "<p>Aayurveda  - The Gondwana Tribe</p>", hi: "<p>आयुर्वेदा - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/aayurveda/aayurveda4.webp", thumb: "/assets/images/tribe/aayurveda/aayurveda4.webp", en: "<p>Aayurveda  - The Gondwana Tribe</p>", hi: "<p>आयुर्वेदा - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/aayurveda/aayurveda5.webp", thumb: "/assets/images/tribe/aayurveda/aayurveda5.webp", en: "<p>Aayurveda  - The Gondwana Tribe</p>", hi: "<p>आयुर्वेदा - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/aayurveda/aayurveda6.webp", thumb: "/assets/images/tribe/aayurveda/aayurveda6.webp", en: "<p>Aayurveda  - The Gondwana Tribe</p>", hi: "<p>आयुर्वेदा - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/aayurveda/aayurveda7.webp", thumb: "/assets/images/tribe/aayurveda/aayurveda7.webp", en: "<p>Aayurveda  - The Gondwana Tribe</p>", hi: "<p>आयुर्वेदा - गोंडवाना जनजाति</p>" }
      ],
      "economic-life": [
        { src: "/assets/images/tribe/economic/economic1.webp", thumb: "/assets/images/tribe/economic/economic1.webp", en: "<p>Economic Life - The Gondwana Tribe</p>", hi: "<p>आर्थिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/economic/economic2.webp", thumb: "/assets/images/tribe/economic/economic2.webp", en: "<p>Economic Life - The Gondwana Tribe</p>", hi: "<p>आर्थिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/economic/economic3.webp", thumb: "/assets/images/tribe/economic/economic3.webp", en: "<p>Economic Life - The Gondwana Tribe</p>", hi: "<p>आर्थिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/economic/economic4.webp", thumb: "/assets/images/tribe/economic/economic4.webp", en: "<p>Economic Life - The Gondwana Tribe</p>", hi: "<p>आर्थिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/economic/economic5.webp", thumb: "/assets/images/tribe/economic/economic5.webp", en: "<p>Economic Life - The Gondwana Tribe</p>", hi: "<p>आर्थिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/economic/economic6.webp", thumb: "/assets/images/tribe/economic/economic6.webp", en: "<p>Economic Life - The Gondwana Tribe</p>", hi: "<p>आर्थिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/economic/economic7.webp", thumb: "/assets/images/tribe/economic/economic7.webp", en: "<p>Economic Life - The Gondwana Tribe</p>", hi: "<p>आर्थिक जीवन - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/economic/economic8.webp", thumb: "/assets/images/tribe/economic/economic8.webp", en: "<p>Economic Life - The Gondwana Tribe</p>", hi: "<p>आर्थिक जीवन - गोंडवाना जनजाति</p>" }
      ],
      "architectural-legacy": [
        { src: "/assets/images/tribe/architectural/architectural1.webp", thumb: "/assets/images/tribe/architectural/architectural1.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural2.webp", thumb: "/assets/images/tribe/architectural/architectural2.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural3.webp", thumb: "/assets/images/tribe/architectural/architectural3.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural4.webp", thumb: "/assets/images/tribe/architectural/architectural4.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural5.webp", thumb: "/assets/images/tribe/architectural/architectural5.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural6.webp", thumb: "/assets/images/tribe/architectural/architectural6.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural7.webp", thumb: "/assets/images/tribe/architectural/architectural7.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural8.webp", thumb: "/assets/images/tribe/architectural/architectural8.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural9.webp", thumb: "/assets/images/tribe/architectural/architectural9.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural10.webp", thumb: "/assets/images/tribe/architectural/architectural10.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural11.webp", thumb: "/assets/images/tribe/architectural/architectural11.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural12.webp", thumb: "/assets/images/tribe/architectural/architectural12.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural13.webp", thumb: "/assets/images/tribe/architectural/architectural13.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural14.webp", thumb: "/assets/images/tribe/architectural/architectural14.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural15.webp", thumb: "/assets/images/tribe/architectural/architectural15.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural16.webp", thumb: "/assets/images/tribe/architectural/architectural16.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural17.webp", thumb: "/assets/images/tribe/architectural/architectural17.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural18.webp", thumb: "/assets/images/tribe/architectural/architectural18.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural19.webp", thumb: "/assets/images/tribe/architectural/architectural19.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural20.webp", thumb: "/assets/images/tribe/architectural/architectural20.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural21.webp", thumb: "/assets/images/tribe/architectural/architectural21.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural22.webp", thumb: "/assets/images/tribe/architectural/architectural22.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural23.webp", thumb: "/assets/images/tribe/architectural/architectural23.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural24.webp", thumb: "/assets/images/tribe/architectural/architectural24.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural25.webp", thumb: "/assets/images/tribe/architectural/architectural25.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural26.webp", thumb: "/assets/images/tribe/architectural/architectural26.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural27.webp", thumb: "/assets/images/tribe/architectural/architectural27.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" },
        { src: "/assets/images/tribe/architectural/architectural28.webp", thumb: "/assets/images/tribe/architectural/architectural28.webp", en: "<p>Architectural Legacy - The Gondwana Tribe</p>", hi: "<p>वाास्तुशिल्पीय धरोहर - गोंडवाना जनजाति</p>" }
      ],
      
      "conservation-compare": [
        { src: "/assets/images/conservation/slider/slider1.png", thumb: "/assets/images/conservation/slider/slider1.png", en: "<p>Before & After</p>", hi: "<p>पहले & बाद में </p>" },
        { src: "/assets/images/conservation/slider/slider2.png", thumb: "/assets/images/conservation/slider/slider2.png", en: "<p>Before & After</p>", hi: "<p>पहले & बाद में </p>" },
        { src: "/assets/images/conservation/slider/slider3.png", thumb: "/assets/images/conservation/slider/slider3.png", en: "<p>Before & After</p>", hi: "<p>पहले & बाद में </p>" },
        { src: "/assets/images/conservation/slider/slider4.png", thumb: "/assets/images/conservation/slider/slider4.png", en: "<p>Before & After</p>", hi: "<p>पहले & बाद में </p>" },
        { src: "/assets/images/conservation/slider/slider5.png", thumb: "/assets/images/conservation/slider/slider5.png", en: "<p>Before & After</p>", hi: "<p>पहले & बाद में </p>" },
        { src: "/assets/images/conservation/slider/slider6.png", thumb: "/assets/images/conservation/slider/slider6.png", en: "<p>Before & After </p>", hi: "<p>पहले & बाद में </p>" },
        { src: "/assets/images/conservation/slider/slider7.png", thumb: "/assets/images/conservation/slider/slider7.png", en: "<p>Before & After </p>", hi: "<p>पहले & बाद में </p>" },
        { src: "/assets/images/conservation/slider/slider8.png", thumb: "/assets/images/conservation/slider/slider8.png", en: "<p>Before & After </p>", hi: "<p>पहले & बाद में </p>" },
        { src: "/assets/images/conservation/slider/slider9.png", thumb: "/assets/images/conservation/slider/slider9.png", en: "<p>Before & After </p>", hi: "<p>पहले & बाद में </p>" },
        { src: "/assets/images/conservation/slider/slider10.png", thumb: "/assets/images/conservation/slider/slider10.png", en: "<p>Before & After</p>", hi: "<p>पहले & बाद में </p>" },
        { src: "/assets/images/conservation/slider/slider11.png", thumb: "/assets/images/conservation/slider/slider11.png", en: "<p>Before & After </p>", hi: "<p>पहले & बाद में </p>" },
        { src: "/assets/images/conservation/slider/slider12.png", thumb: "/assets/images/conservation/slider/slider12.png", en: "<p>Before & After </p>", hi: "<p>पहले & बाद में </p>" },
        { src: "/assets/images/conservation/slider/slider13.png", thumb: "/assets/images/conservation/slider/slider13.png", en: "<p>Before & After </p>", hi: "<p>पहले & बाद में </p>" },
      ],

      // Conservation Compare 



      


  };
});
