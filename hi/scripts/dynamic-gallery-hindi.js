const $dynamicGallery = document.getElementById("dynamic-gallery-demo");

      // Gallery data for different buttons
      const galleries = {
        "museum": [
          {
            src: "../../assets/images/Front/museum/EastFacade.JPG",
            thumb: "../../assets/images/Front/museum/EastFacade.JPG",
            subHtml: "<h4>Museum</h4><p>East Facade</p>",
          },
          {
            src: "../../assets/images/Front/museum/NorthFacade.JPG",
            thumb: "../../assets/images/Front/museum/NorthFacade.JPG",
            subHtml: "<h4>Museum</h4><p>North Facade</p>",
          },
          {
            src: "../../assets/images/Front/museum/SouthFacade.jpg",
            thumb: "../../assets/images/Front/museum/SouthFacade.jpg",
            subHtml: "<h4>Museum</h4><p>South Facade</p>",
          },
          {
            src: "../../assets/images/Front/museum/4b.JPG",
            thumb: "../../assets/images/Front/museum/4b.JPG",
            subHtml: "<h4>Museum</h4><p>Picture Details</p>",
          },
          {
            src: "../../assets/images/Front/museum/1.JPG",
            thumb: "../../assets/images/Front/museum/1.JPG",
            subHtml: "<h4>Museum</h4><p>Picture Details</p>",
          },
        ],
        "gallery-button-1": [
          {
            src: "../../assets/images/Front/gallery1/1.jpeg",
            thumb: "../../assets/images/Front/gallery1/1.jpeg",
            subHtml: "<h4>Gallary 1</h4><p>Description for image A</p>",
          },
          {
            src: "../../assets/images/Front/gallery1/2.JPEG",
            thumb: "../../assets/images/Front/gallery1/2.JPEG",
            subHtml: "<h4>Gallary 1</h4><p>Description for image B</p>",
          },
          {
            src: "../../assets/images/Front/gallery1/3.JPEG",
            thumb: "../../assets/images/Front/gallery1/3.JPEG",
            subHtml: "<h4>Gallary 1</h4><p>Description for image B</p>",
          },
        ],
        "gallery-button-2": [
          {
            src: "../../assets/images/Front/gallery2/1.JPG",
            thumb: "../../assets/images/Front/gallery2/1.JPG",
            subHtml: "<h4>Gallery 2</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/Front/gallery2/2.JPG",
            thumb: "../../assets/images/Front/gallery2/2.JPG",
            subHtml: "<h4>Gallery 2</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/Front/gallery2/3.JPG",
            thumb: "../../assets/images/Front/gallery2/3.JPG",
            subHtml: "<h4>Gallery 2</h4><p>Description for image X</p>",
          },
        ],
        "gallery-button-3": [
          {
            src: "../../assets/images/Front/gallery3/Gallery3a.JPG",
            thumb: "../../assets/images/Front/gallery3/Gallery3a.JPG",
            subHtml: "<h4>Gallery 3</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/Front/gallery3/Gallery3b.JPG",
            thumb: "../../assets/images/Front/gallery3/Gallery3b.JPG",
            subHtml: "<h4>Gallery 3</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/Front/gallery3/Gallery3c.JPG",
            thumb: "../../assets/images/Front/gallery3/Gallery3c.JPG",
            subHtml: "<h4>Gallery 3</h4><p>Description for image X</p>",
          },
        ],
        "gallery-button-4": [
          {
            src: "../../assets/images/Front/gallery4/1.jpeg",
            thumb: "../../assets/images/Front/gallery4/1.jpeg",
            subHtml: "<h4>Gallery 4</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/Front/gallery4/2.jpeg",
            thumb: "../../assets/images/Front/gallery4/2.jpeg",
            subHtml: "<h4>Gallery 4</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/Front/gallery4/3.jpeg",
            thumb: "../../assets/images/Front/gallery4/3.jpeg",
            subHtml: "<h4>Gallery 4</h4><p>Description for image X</p>",
          },
          
        ],
        "gallery-button-5": [
          {
            src: "../../assets/images/Front/gallery5/1.JPG",
            thumb: "../../assets/images/Front/gallery5/1.JPG",
            subHtml: "<h4>Gallery 5</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/Front/gallery5/2.JPG",
            thumb: "../../assets/images/Front/gallery5/2.JPG",
            subHtml: "<h4>Gallery 5</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/Front/gallery5/3.JPG",
            thumb: "../../assets/images/Front/gallery5/3.JPG",
            subHtml: "<h4>Gallery 5</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/Front/gallery5/4.JPG",
            thumb: "../../assets/images/Front/gallery5/4.JPG",
            subHtml: "<h4>Gallery 5</h4><p>Description for image X</p>",
          },
        ],
        "gallery-button-6": [
          {
            src: "../../assets/images/Front/gallery6/Gallery6a.JPEG",
            thumb: "../../assets/images/Front/gallery6/Gallery6a.JPEG",
            subHtml: "<h4>Gallery 6</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/Front/gallery6/Gallery6b.JPG",
            thumb: "../../assets/images/Front/gallery6/Gallery6b.JPG",
            subHtml: "<h4>Gallery 6</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/Front/gallery6/Gallery6c.JPG",
            thumb: "../../assets/images/Front/gallery6/Gallery6c.JPG",
            subHtml: "<h4>Gallery 6</h4><p>Description for image X</p>",
          },
        ],
        "tribe-intro-main": [
          {
            src: "../../assets/images/tribe/gond/1.jpg",
            thumb: "../../assets/images/tribe/gond/1.jpg",
            subHtml: "<h4>Gallery 6</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/tribe/gond/2.jpg",
            thumb: "../../assets/images/tribe/gond/2.jpg",
            subHtml: "<h4>Gallery 6</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/tribe/gond/3.jpg",
            thumb: "../../assets/images/tribe/gond/3.jpg",
            subHtml: "<h4>Gallery 6</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/tribe/gond/4.jpg",
            thumb: "../../assets/images/tribe/gond/4.jpg",
            subHtml: "<h4>Gallery 6</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/tribe/gond/5.jpg",
            thumb: "../../assets/images/tribe/gond/5.jpg",
            subHtml: "<h4>Gallery 6</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/tribe/gond/6.jpg",
            thumb: "../../assets/images/tribe/gond/6.jpg",
            subHtml: "<h4>Gallery 6</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/tribe/gond/8.jpg",
            thumb: "../../assets/images/tribe/gond/8.jpg",
            subHtml: "<h4>Gallery 6</h4><p>Description for image X</p>",
          },
          {
            src: "../../assets/images/tribe/gond/7.jpg",
            thumb: "../../assets/images/tribe/gond/7.jpg",
            subHtml: "<h4>Gallery 6</h4><p>Description for image X</p>",
          },
        ],
      };
    
      // Function to initialize the gallery dynamically
      function initializeGallery(buttonId) {
        const dynamicGallery = window.lightGallery($dynamicGallery, {
          dynamic: true,
          plugins: [lgZoom, lgVideo, lgThumbnail],
          showDownload: false, // Disable the download button
          dynamicEl: galleries[buttonId], // Load corresponding gallery
        });
        dynamicGallery.openGallery(0); // Open gallery at index 0
      }
    
      // Attach event listeners to buttons
      document.getElementById("museum").addEventListener("click", () => {
        initializeGallery("museum");
      });
      document.getElementById("gallery-button-1").addEventListener("click", () => {
        initializeGallery("gallery-button-1");
      });
    
      document.getElementById("gallery-button-2").addEventListener("click", () => {
        initializeGallery("gallery-button-2");
      });
    
      document.getElementById("gallery-button-3").addEventListener("click", () => {
        initializeGallery("gallery-button-3");
      });
      document.getElementById("gallery-button-4").addEventListener("click", () => {
        initializeGallery("gallery-button-4");
      });
      document.getElementById("gallery-button-5").addEventListener("click", () => {
        initializeGallery("gallery-button-5");
      });
      document.getElementById("gallery-button-6").addEventListener("click", () => {
        initializeGallery("gallery-button-6");
      });
      document.getElementById("tribe-intro-main").addEventListener("click", () => {
        initializeGallery("tribe-intro-main");
      });