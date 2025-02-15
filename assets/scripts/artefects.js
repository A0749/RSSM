// Artifact Data
const artifacts = [
    {
      image: "assets/images/artefects/Bajubandh.png",
      category: "Jewellery",
      description: "This is a beautiful painting from the 18th century.",
    },
    {
      image: "assets/images/artefects/Bogri.png",
      category: "Jewellery",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Tora.png",
      category: "Jewellery",
      description: "Tora is a piece of jewellery made of Aluminium. It is made by intertwining aluminium wires. It is worn by women of the Gond tribe in regions of Chhindwara and Mandla in their daily lives.",
    },
    {
      image: "assets/images/artefects/RignaOrRing.png",
      category: "Jewellery",
      description: "Ring/Rigna is a piece of jewellery made of iron. On the outer surface, the prominent design is mostly circular, like a rope. It is worn by the men of the Gond tribe in regions of Mandla in their daily lives.",
    },
    {
      image: "assets/images/artefects/Kangan.png",
      category: "Jewellery",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Kakna.png",
      category: "Jewellery",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Hansli.png",
      category: "Jewellery",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Kanosi.png",
      category: "Jewellery",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Payjna.png",
      category: "Jewellery",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Ghunghru.png",
      category: "Jewellery",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Toda.png",
      category: "Jewellery",
      description: "An ancient coin from the Roman Empire.",
    },
    // Jwellery Ends Here
    {
      image: "assets/images/artefects/Bana.bmp",
      category: "Instruments",
      description: "An intricate sculpture made of marble.",
    },
    {
      image: "assets/images/artefects/BariOrBali.png",
      category: "coins",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Barooddani.bmp",
      category: "coins",
      description: "An ancient coin from the Roman Empire.",
    },
    
    {
      image: "assets/images/artefects/BharmaarBanduk.png",
      category: "Weapons",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Bhurabhagat(panchayat).png",
      category: "coins",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Bhurabhagat.png",
      category: "coins",
      description: "An ancient coin from the Roman Empire.",
    },

    // Garments Starts here
    {
      image: "assets/images/artefects/Chadar.bmp",
      category: "Garments",
      description: "An ancient coin from the Roman Empire.",
    },
    
    {
      image: "assets/images/artefects/ChuridarPajama.png",
      category: "Garments",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Pajama.png",
      category: "Garments",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Fota.jpg",
      category: "Garments",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Gamcha.bmp",
      category: "Garments",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/SendriDhoti.bmp",
      category: "Garments",
      description: "An ancient coin from the Roman Empire.",
    }, 
    {
      image: "assets/images/artefects/Khalta.bmp",
      category: "Garments",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/pisuBatua.bmp",
      category: "Garments",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/PataSaree.bmp",
      category: "Garments",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Pagdi.bmp",
      category: "Garments",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/rajaiKhol.bmp",
      category: "Garments",
      description: "An ancient coin from the Roman Empire.",
    },





    {
      image: "assets/images/artefects/Chhaaka.png",
      category: "Accessory",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Chidiya.png",
      category: "coins",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Chonkya.bmp",
      category: "coins",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Chunauti.bmp",
      category: "Accessory",
      description: "An ancient coin from the Roman Empire.",
    },
    
    {
      image: "assets/images/artefects/ChurukDhana(Dhanmakkad).png",
      category: "Accessory",
      description: "An ancient coin from the Roman Empire.",
    },
    {
      image: "assets/images/artefects/Chutkule.png",
      category: "Games",
      description: "An ancient coin from the Roman Empire.",
    },
    // Resume Here
    {
      image: "assets/images/artefects/BariOrBali.png",
      category: "coins",
      description: "An ancient coin from the Roman Empire.",
    },
 
  ];

//  Generate ID from image name
function generateIdFromName(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, ""); 
}

// Utility function to extract and format artifact name from the image name
function getArtifactNameFromImage(imagePath) {
  const fileName = imagePath.split("/").pop().split(".")[0]; 
  return fileName
    .replace(/([a-z])([A-Z])/g, "$1 $2") 
    .replace(/\b\w/g, (char) => char.toUpperCase()); 
}

// Enhance artifact data by dynamically adding IDs and names
artifacts.forEach((artifact) => {
  const name = getArtifactNameFromImage(artifact.image);
  artifact.name = name; 
  artifact.id = generateIdFromName(name); 
});

const ROW_LIMIT = 4; 
let currentCategory = "all";
let currentSearchQuery = "";
let currentArtifacts = []; 
let visibleRows = 0; 

function loadArtifacts(category = "all", searchQuery = "", reset = true) {
  const container = document.querySelector(".grid-container");

  if (reset) {
    container.innerHTML = ""; 
    visibleRows = 0; 
    currentArtifacts = artifacts.filter(
      (artifact) =>
        (category === "all" || artifact.category === category) &&
        artifact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const itemsPerRow = Math.floor(container.offsetWidth / 200); 
  const totalItemsToShow = (visibleRows + ROW_LIMIT) * itemsPerRow;
  const artifactsToShow = currentArtifacts.slice(0, totalItemsToShow);

  artifactsToShow.forEach((artifact, index) => {
    const rowClass = index % 2 === 0 ? "row-horizontal" : "row-vertical";
    let row = container.querySelector(`.${rowClass}`);

    
    if (!row) {
      row = document.createElement("div");
      row.classList.add(rowClass);
      container.appendChild(row);
    }

    const artifactEl = document.createElement("div");
    artifactEl.classList.add("artifact");
    artifactEl.dataset.id = artifact.id;
    artifactEl.dataset.category = artifact.category;

    artifactEl.innerHTML = `
      <div class="artifact-image-wrapper">
        <img src="${artifact.image}" alt="${artifact.name}" />
      </div>
      <div class="artifact-name">${artifact.name}</div>
    `;

    row.appendChild(artifactEl);
  });

  visibleRows += ROW_LIMIT; 

  
  const loadMoreBtn = document.querySelector(".load-more");
  if (currentArtifacts.length > artifactsToShow.length) {
    loadMoreBtn.style.display = "block";
  } else {
    loadMoreBtn.style.display = "none";
  }
}


loadArtifacts();


document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentCategory = btn.dataset.category;
    currentSearchQuery = ""; 
    document.getElementById("search").value = ""; 
    loadArtifacts(currentCategory);
  });
});

document.getElementById("search").addEventListener("input", (e) => {
  currentSearchQuery = e.target.value; 
  loadArtifacts(currentCategory, currentSearchQuery);
});


document.querySelector(".load-more").addEventListener("click", () => {
  loadArtifacts(currentCategory, currentSearchQuery, false);
});

// Modal 
document.addEventListener("click", (e) => {
  if (e.target.closest(".artifact")) {
    const artifactId = e.target.closest(".artifact").dataset.id;
    const artifact = artifacts.find((art) => art.id === artifactId);

    // Populate modal
    document.getElementById("modal-img").src = artifact.image;
    document.getElementById("artifact-title").textContent = artifact.name;
    document.getElementById("artifact-description").textContent =
      artifact.description;

    document.getElementById("artifact-modal").style.display = "flex";
  } else if (e.target.classList.contains("close-btn")) {
    document.getElementById("artifact-modal").style.display = "none";
  }
});

