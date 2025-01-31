// Simulated JSON data
const peopleData = 
  [
    {
      "name": "Akbar Khan",
      "origin": "Mathura, North-Western Province (now Uttar Pradesh)",
      "description": "Born in 1823; took part in the Uprising of 1857 against the British dominance over the Saugor district of the Central Provinces and Berar (now Sagor, Madhya Pradesh). Joined the anti-British rebel forces of Nawab of Ambapani at Rahatgarh in 1857; fought against the British reinforcement under Hugh Rose from 24 to 28 January 1858 at the Rahatgarh fort. Captured and accused of rebellion against the British, Akbar was executed by hanging at the front gate of the Rahatgarh Fort on 29 January 1858.",
      "sources": [
        "Mutiny Papers, Vol. II, NAIB",
        "Poll Deptt, Vol. No.50 (VII) (1858), MSAB"
      ]
    },
    {
      "name": "Anant Singh",
      "origin": "Banpur State, Madhya Pradesh",
      "description": "Organized rebel troops and took a leading role in the Uprising of 1857 against the British forces. Confronted the British army under Hugh Rose at Barodia on 31 January 1858. Valorously sacrificed his life along with a large number of his soldiers in this battle.",
      "sources": [
        "Mutiny Papers, I, NAIB",
        "Poll Deptt, Vol. No.46 (III) (1858), MSAB",
        "WWIM, III, p.10"
      ]
    },
    {
      "name": "Arjunsingh Dangi",
      "origin": "Saugar (Sagar), Madhya Pradesh",
      "description": "Took part in the Uprising of 1857 and fought the British forces in his area. He was caught by the British during an engagement and executed by hanging on 14 July 1857.",
      "sources": [
        "Mutiny Records, Poll. Deptt. F. No. 16 (1857), MPSAB"
      ]
    },
    {
      "name": "Badan Rai",
      "origin": "Achalpur region, Madhya Pradesh",
      "description": "Took part in the Uprising of 1857 and fought the British forces at several places in his area. He was caught by the British during their attack on the rebels and executed by hanging on 5 April 1858.",
      "sources": [
        "Mutiny Records, Poll. Deptt., Vol. No. 56 (1859), MSAB"
      ]
    },
    {
      "name": "Baddu Mahajan",
      "origin": "Jahanabad, Madhya Pradesh",
      "description": "Joined hands with the rebels of his area during the Uprising of 1857. Provided financial support to the rebel forces and encouraged attacks on British establishments. He was caught by the advancing British army and hanged in 1858.",
      "sources": [
        "Mutiny Records, Poll. Deptt. Vol. No. 106 (1859), MSAB"
      ]
    },
    {
      "name": "Bahadoor Ally",
      "origin": "Saugar (Sagar), Madhya Pradesh",
      "description": "Fought against the British forces during the Uprising of 1857. Caught by the British at the time of their counterattacks on the rebels, he was executed by hanging on 19 February 1858.",
      "sources": [
        "Mutiny Records, Poll. Deptt. Vol. III, No. 43D, MSAB"
      ]
    },
    {
      "name": "Bahadur Singh",
      "origin": "Nimar, Central India Agency (now Madhya Pradesh)",
      "description": "Joined the anti-British rebel forces of the Uprising of 1857. Played a decisive role in fighting the British forces at Mandleshwar Battle in 1857. Captured and sentenced to transportation for life, he died in detention.",
      "sources": [
        "Mutiny Papers, V, III, NAIB",
        "Poll Deptt, Vol. No.52 (IX) (1858), MSAB",
        "WWIM, III, p.15"
      ]
    },
    {
      "name": "Bahadur Singh",
      "origin": "Central Provinces and Berar (now Madhya Pradesh)",
      "description": "Took a leading role in the anti-British Uprising of 1857 in the southern part of the Central Provinces and Berar (Mandla and Seoni districts). He was caught by the British forces and awarded capital punishment by hanging.",
      "sources": [
        "Mutiny Papers, III, NAIB",
        "Poll Deptt, Vol. No.52 (IX) (1858), MSAB",
        "WWIM, V, III, p.15"
      ]
    },
    {
      "name": "Bajeer Beg",
      "origin": "Rahatgarh, distt. Sagar (now Madhya Pradesh)",
      "description": "Served as constable in the State Police before joining the anti-British rebel forces during the Uprising of 1857. Participated in overrunning the British settlement at Rahatgarh Fort in October 1857. Confronted British forces under Hugh Rose at Rahatgarh fort between 24 and 28 January 1858. After reverses, he and others were rounded up at Narsingpur Marg by Captain Suley and sentenced to death. Executed in 1858.",
      "sources": [
        "Mutiny Papers, Vol. II, NAIB",
        "Poll Deptt, Vol. No.50 (VII) (1858), MSAB"
      ]
    },
    {
      "name": "Bajmi Khan",
      "origin": "Rahatgarh, distt. Saugor (Sagar, now Madhya Pradesh)",
      "description": "Joined the rebellion under Nawab Fazil Mohammad Khan of Ambapani and participated in driving the British from Rahatgarh Fort in October 1857. Fought against British troops during their re-occupation of Rahatgarh fort in January 1858. Rounded up by Captain Suley while leaving the fort. Sentenced to death on charges of treason, murder, and rebellion. Executed soon thereafter.",
      "sources": [
        "Mutiny Papers, Vol. V, NAIB",
        "Poll Deptt, Vol. No.52 (IX) (1858), MSAB"
      ]
    },
  {
    "name": "Bakhtawar Pande alias Fukur Nayak",
    "origin": "Kanau, Jabalpur Division (now Madhya Pradesh)",
    "description": "He participated in the Uprising of 1857 and fought against the British forces on several occasions in Jabalpur; he was caught by the British in the course of an encounter and hanged in 1858; his property was also confiscated.",
    "sources": [
      "Mutiny Records, Poll. Deptt. F. No. 31 (1858), MPSAB"
    ]
  },
  {
    "name": "Bapu Rao",
    "origin": "Molampally, Chanda, Madhya Pradesh",
    "description": "Powerful Zamindar; in the Uprising of 1857, he played a leader’s role by assembling tribal (Gond and Maria) and nontribal (Rohilla) communities for fighting against the oppressive British intrusions; betrayed by the Rani of Aheri to the British authorities; captured, imprisoned and tortured, Bapu Rao was executed in the Chanda jail premises in 1857.",
    "sources": [
      "Mutiny Papers, Vol. I, NAIB",
      "Poll Deptt, Vol. No.52 (IX) (1858), MSAB",
      "WWIM, III, pp. 16-17"
    ]
  },
  {
    "name": "Bashirullah Khan",
    "origin": "Amjhera State, Central India Agency (now in Madhya Pradesh)",
    "description": "Held the post Chief Minister of Amjhera and was involved in the revolt of 1857 under the leadership of his king Raja Bakhtawar Singh, he was captured and executed in 1858.",
    "sources": [
      "Mutiny Papers, Vol. VI, NAIB",
      "Poll Deptt, Vol. No.50 (VII) (1858), MSAB"
    ]
  },
  {
    "name": "Beehary Gond",
    "origin": "Khamaria, Jabalpur, Madhya Pradesh",
    "description": "Joined hands with the rebels of his locality during the Uprising of 1857 and fought against the British forces on several occasions; caught by the advancing British army in Jabalpur, he was sentenced to death on 17 February 1858.",
    "sources": [
      "Mutiny Records, Poll. Deptt. F. No. 3 (1858), MPSAB"
    ]
  },
  {
    "name": "Bhagirath Silawat",
    "origin": "Indore, Madhya Pradesh",
    "description": "An Infantry Officer in the Holkar’s Indore army but left the service during the Uprising of 1857 and led a group of rebels in fighting the British; captured by the Holkar’s troops and executed in November 1857.",
    "sources": [
      "Mutiny Records, Poll. Deptt. Vol. No. 60 (1859), MSAB",
      "WWIM, III, p. 20"
    ]
  },
  {
    "name": "Bharat Dheemar",
    "origin": "Saugor (Sagar), Madhya Pradesh",
    "description": "He participated in the Uprising of 1857 and fought against the British forces in the Sagar region; captured by the advancing British forces, he was executed by hanging in 1858.",
    "sources": [
      "Mutiny Records, Poll. Deptt. Vol. II, No. 43C (1859), MSAB"
    ]
  },
  {
    "name": "Bhau Chitnis",
    "origin": "Mahidpur, Madhya Pradesh",
    "description": "Joined the struggle against the British in 1857 and provided financial support to the rebels; caught by the British during an engagement in Mahidpur, he was blown away with a cannon on 8 January 1858.",
    "sources": [
      "Mutiny Records, Poll Deptt. Vol. II, No.43C (1859), MSAB"
    ]
  },
  {
    "name": "Bhawani Prasad",
    "origin": "Sagar, the Central Provinces and Berar (now Madhya Pradesh)",
    "description": "Joined the anti-British rebel forces in the Sagar area during the Uprising of 1857; he was caught eventually by the British force and sent on the gallows on 20 July 1857.",
    "sources": [
      "Mutiny Papers, Vol. I, NAIB",
      "WWIM, III, pp. 16-17"
    ]
  },
  {
    "name": "Bhawani Singh",
    "origin": "Bhaopawar, Malwa region, the Central India Agency (now Madhya Pradesh)",
    "description": "Enlisted on the rebel side by Raja Bakhat Bali (ruler of Amjhera) during the Uprising of 1857 for resisting unwanted British intrusions; he took part in the tribal attack on the Bhopawar Political Agency on 3 July 1857; he was captured by the British forces and hanged till death on 20 July 1857.",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB",
      "WWIM, III, pp. 16-17"
    ]
  },
  {
    "name": "Bhijania",
    "origin": "Nimar, Central India Agency (now Madhya Pradesh)",
    "description": "A trusted lieutenant of Tantia Bhil, took part in the Bhil tribes’ armed resistance against British encroachments; arrested by the British in 1880 and executed in the same year.",
    "sources": [
      "H/Poll, F.No.28/08/1880, NAI",
      "MPDGN, p.122",
      "TCIAI, p. 18"
    ]
  },
    {
      "name": "Bhikam Khan",
      "origin": "Dhar, Madhya Pradesh",
      "description": "Belonged to Dhar, Madhya Pradesh; s/o Peer Mohammad; he took part in the Uprising of 1857 and fought against the British forces at several places in the Dhar region; caught by the British during an engagement, he was executed on 11 January 1857.",
      "sources": [
        "Mutiny Records, Poll. Deptt. Vol. No. 56 (1859), MSAB",
        "WWIM, III, p.23"
      ]
    },
    {
      "name": "Bhima Naik",
      "origin": "Dholi Bhowlee, Barwani State, Madhya Pradesh",
      "description": "A prominent leader of the Bhils of Nimar; took part in the Uprising of 1857 against the British raj; he raised an anti-British force by bringing in men from Bhil, Bhilala, Mandoi and Naik tribes, and collaborated with Tantia Tope. He deployed his troops on the Bhil-populated Bombay [Mumbai]–Agra Highway, where they constantly disturbed the British troop movements. The British authorities tried hard to corner and capture Bhima since 1859, but succeeded in arresting him only in 1861 from his jungle hideout. He was found guilty, sentenced to transportation for life, and sent to Cellular Jail of the Andaman Islands, where he died in detention.",
      "sources": [
        "Mutiny Papers, I, NAIB",
        "Poll Deptt, Vol. No.50 (VII) (1858), MSAB",
        "WWIM, III, pp. 103-104"
      ]
    },
    {
      "name": "Bhola Singh",
      "origin": "Madhya Pradesh",
      "description": "Previously served as a Sepoy in the 52nd Native Infantry of the British-Indian Army. During his posting at Jabalpur, he decided to join the rebel forces led by Baldev Shukul at Katangi (in Jabalpur) and took part in the Uprising of 1857 against the British. In the course of fighting, he was wounded seriously, captured by the British, and executed in 1857.",
      "sources": [
        "Mutiny Papers, Vol. II, NAIB",
        "Poll Deptt, Vol. No. 50 (VII) (1858), MSAB",
        "WWIM, III, p. 24"
      ]
    },
    {
      "name": "Bhugga",
      "origin": "Nimar, Central India Agency, Indore (now Madhya Pradesh)",
      "description": "Took a leading part in organizing the rebel forces to fight the British during the Uprising of 1857 at Mandleshwar. While fighting, he was captured by the British and executed in 1858.",
      "sources": [
        "Mutiny Papers, VI, NAIB",
        "Poll Deptt, Vol. No.50 (VII) (1858), MSAB",
        "WWIM, III, p. 24"
      ]
    },
    {
      "name": "Bhumani Prasad",
      "origin": "Sagour [Sagar], Jubbulpore Division, the Central Provinces and Berar (now Madhya Pradesh)",
      "description": "Previously served in the State police force as a constable. Joined the anti-British rebel forces led by Adil Mohammad Khan in Sagour area during the Uprising of 1857. He took part in attacking and plundering the British outposts at Rahatgarh. When the British succeeded in retrieving position in this area, they managed to catch Bhumani from his native village. On the charges of aiding and abetting the rebellion, he was sentenced to death by hanging on 25 March 1858.",
      "sources": [
        "NAI, Poll Proc., file No. 134, Letters by and to the Governor General, Bundle 98, dated 9 March 1858",
        "1857KAVRB, p. 139"
      ]
    },
    {
      "name": "Bhurjarai Singh",
      "origin": "Bhopal State (Madhya Pradesh)",
      "description": "A prominent rebel leader during the Uprising of 1857 in Jhansi; joined the rebel forces and fought against the British troops in the Jhansi region in 1857-58. He was caught by the British troops during their re-occupation of Jhansi and charged with rebellion against the British and aiding the rebellion. Singh was sentenced to death in 1858 and executed soon thereafter.",
      "sources": [
        "Mutiny Records, Jhansi Mutiny Basta, UPRAA",
        "Poll Deptt, Vol. No.52 (IX) (1858), MSAB"
      ]
    },
    {
      "name": "Bijnya Bheel",
      "origin": "Khargone, Jabalpur division, the Central Provinces and Berar (now Madhya Pradesh)",
      "description": "Joined the anti-British rebel forces during the Uprising of 1857. While fighting against the enemy, he was caught, imprisoned in Jabalpur Central jail, and sentenced to death by hanging in the jail premises.",
      "sources": [
        "Mutiny Papers, VI, NAIB",
        "Poll Deptt, Vol. No.50 (VII) (1858), MSAB",
        "WWIM, III, p. 24"
      ]
    },
    {
      "name": "Bukru Bhoi",
      "origin": "Ramgarh, Mandla, Madhya Pradesh",
      "description": "Joined hands with the rebel forces of the Rani of Ramgarh during the Uprising of 1857 and fought the British at several places in Ramgarh. He was captured by the British army at the time of its counterattacks on the rebels and executed by hanging on 21 January 1858.",
      "sources": [
        "Mutiny Records, Judl Deptt. F. No. 12 (1858), MPSAB"
      ]
    },
    {
      "name": "Bhagwan Singh Gond",
      "origin": "Not Available",
      "description": "Content not available.",
      "sources": []
    },
    {
      "name": "Bhoj Singh Gond",
      "origin": "Not Available",
      "description": "Content not available.",
      "sources": []
    },
    
      {
        "name": "Chand Khan",
        "origin": "Madhya Pradesh",
        "description": "S/o Chhote Khan; joined hands with the rebel forces in the Gwalior region during the Uprising of 1857 and fought against the British and allied forces. Captured by the British in an encounter, he was executed by hanging in 1858.",
        "sources": [
          "Mutiny Records, Poll. Deptt. Vol. No. 56 (1859), MSAB"
        ]
      },
      {
        "name": "Chittu",
        "origin": "Mandleshwar, Malwa region, Central India Agency (now Madhya Pradesh)",
        "description": "S/o Madar Baksh; joined the anti-British rebel forces during the Uprising of 1857 in the Malwa region. Captured at his home and hanged on 23 December 1857.",
        "sources": [
          "Mutiny Papers, Vol. V, NAIB",
          "Poll Deptt, Vol. No.50 (VII) (1858), MSAB",
          "WWIM, III, p. 30"
        ]
      },
      {
        "name": "Chuni Lal",
        "origin": "Amjhera State, Malwa region, Central India Agency (now Madhya Pradesh)",
        "description": "Joined the anti-British rebel forces during the Uprising of 1857 and participated in raids on Bhopawar (Political) Agency. Captured and executed in Indore after being defeated.",
        "sources": [
          "Mutiny Papers, V, NAIB",
          "Poll Deptt, Vol. No.50 (VII) (1858), MSAB",
          "WWIM, III, p.30"
        ]
      },
      {
        "name": "Dalganjan Singh",
        "origin": "Singpur, distt. Saugor (now Sagar), the Central Provinces and Berar (now Madhya Pradesh)",
        "description": "Joined the rebel forces and became prominent in leading the Uprising of 1857 in the valley of Narmada River. Collaborated with rebel leaders Dhillain Shah and Narvar Shah. Captured, tried, and hanged on 23 November 1857.",
        "sources": [
          "Mutiny Papers, Vol. IV, NAIB",
          "Poll Deptt, Vol. No.50 (VII) (1858), MSAB",
          "WWIM, III, p.31"
        ]
      },
      {
        "name": "Daulat Rajput",
        "origin": "Saugor (now Sagar), the Central Province and Berar (now Madhya Pradesh)",
        "description": "Organized a small band of anti-British rebels and led attacks on British troops in Bushari village. Captured and executed in July 1857.",
        "sources": [
          "Mutiny Papers, VI, NAIB",
          "Poll Deptt, Vol. No.52 (IX) (1858), MSAB",
          "WWIM, III, p.32"
        ]
      },
      {
        "name": "Daulat Singh",
        "origin": "Hosangabad, Central Province and Berar (now Madhya Pradesh)",
        "description": "Organized an armed rebel force and joined the fighting against the British. Confronted Major Orr at Piplia on 28 October 1857. Captured and executed by hanging.",
        "sources": [
          "Mutiny Papers, Vol. II, NAIB",
          "Poll Deptt, Vol. No.52 (IX) (1858), MSAB",
          "WWIM, III, p.32"
        ]
      },
      {
        "name": "Despat Bundela",
        "origin": "Chhatarpur, Madhya Pradesh",
        "description": "Joined the Uprising of 1857 and played a leading part in organizing rebel forces in the Bundelkhund region. Fought alongside the Rani of Jhansi. Killed by a British agent after the suppression of the Uprising.",
        "sources": [
          "Mutiny Records, F/ Poll. Consultation no. 75/80 (1868), NAI",
          "Hamirpur Mutiny Basta, UPRAA"
        ]
      },
      {
        "name": "Dev Karan",
        "origin": "Sehore, Madhya Pradesh",
        "description": "Chaprasi; joined rebel forces under Fazil Mohammad Khan of Ambapani and fought against the British. Captured and executed by hanging on 25 March 1858.",
        "sources": [
          "Mutiny Papers, Vol. No. II, NAIB"
        ]
      },

        {
          "name": "Devee Gontia",
          "origin": "Jabalpur region, Madhya Pradesh",
          "description": "Belonged to the Jabalpur region, Madhya Pradesh; he joined hands with the rebels of his region during the Uprising of 1857 and fought against the British forces; caught by the British in the midst of an engagement, he was executed by hanging on 15 December 1857.",
          "sources": [
            "Mutiny Records, Poll Deptt. F. No. 10 (1858), MPSAB",
            "TFWI, I, p. 144"
          ]
        },
        {
          "name": "Devi Singh",
          "origin": "Seoni, Jubbulpore Division, Madhya Pradesh",
          "description": "Resident of Seoni, Jubbulpore Division, the Central Provinces and Berar (now Madhya Pradesh); took a prominent role in spreading the Uprising of 1857 in the southern part of C.P. and Berar; organised an anti-British rebel force and challenged the Britishers in Seoni district; in the course of fighting he was defeated, captured, sentenced to capital punishment and hanged.",
          "sources": [
            "Mutiny Papers, Vol. II, NAIB",
            "Poll Deptt, Vol. No.52 (IX) (1858), MSAB",
            "WWIM, III, p. 35"
          ]
        },
        {
          "name": "Devi",
          "origin": "Nimar, Malwa region, Madhya Pradesh",
          "description": "Resident of Nimar, Malwa region, Central India Agency, Indore, (now Madhya Pradesh); took part in the Uprising of 1857 at Mandleshwar against the oppressive British policies of public health, forest and land revenues. He and his associates tried hard to retain their position in Mandleshwar and Dhar but failed against the superior British forces. Captured and sentenced to transportation for life, Devi breathed his last in an overseas jail.",
          "sources": [
            "Mutiny Papers, Vol. III, NAIB",
            "Poll Deptt, Vol. No.48 (V) (1858), MSAB",
            "WWIM, III, p.34"
          ]
        },
        {
          "name": "Dhankuji",
          "origin": "Gwalior State, Madhya Pradesh",
          "description": "Resident of Gwalior State (now Madhya Pradesh); Thakur; organized the rebel troops and played a leading role in the Uprising of 1857 against the British forces in Jhansi; while encountering the British attempts at re-occupying Jhansi in 1858, he was caught by the enemy; sentenced to death on charges of rebellion against the British, he was executed in 1858.",
          "sources": [
            "Mutiny Records, Jhansi Mutiny Basta, UPRAA",
            "Poll Deptt, Vol. No.52 (IX) (1858), MSAB"
          ]
        },
        {
          "name": "Dhansingh",
          "origin": "Patan, Madhya Pradesh",
          "description": "Resident of Patan, Madhya Pradesh; he took part in the Uprising of 1857 and fought the British forces in the Patan region; he was caught by the British forces during their raids on the rebel camps and was executed by hanging in 1858.",
          "sources": [
            "Mutiny Papers, Vol. No. II, NAIB"
          ]
        },
        {
          "name": "Dhian Singh",
          "origin": "Tendukhera, Narsinghpur, Madhya Pradesh",
          "description": "Hailed from v. Tendukhera, Gaddawara, distt. Narshingpur, Nerbudda Division, the Central Provinces and Berar (now Madhya Pradesh); s/o Bishram Singh; chief of Gond tribes of Madanpur; previously he fought against the British expansion in the Bundela region in 1842, lost and was deprived of his traditional rights; taking advantage of the outbreak of 1857 and its effects on the Central India, Dhyan Singh organised an anti-British rebel force, re-occupied Deori, Chawarpatha and Tendukhera from the British in 1857 and challenged the authorities in the Bhilin-habited areas by using guerrilla tactics; he was captured during an engagement with Captain Terman-led British troops; executed by hanging from a mango tree in May 1858.",
          "sources": [
            "Mutiny Papers, Vol. II, NAIB",
            "WWIM, III, p. 36"
          ]
        },
        {
          "name": "Dhillanshah Gond",
          "origin": "Madanpur, Narsinghpur, Madhya Pradesh",
          "description": "Resident of Madanpur, Narsinghpur, Madhya Pradesh: he led a group of rebels of his area during the Uprising of 1857 and fought the British and the allied forces at several places; he was caught by the British police and executed by hanging on 23 May 1858.",
          "sources": [
            "Mutiny Records, Narrative of Events, Narsinghpur Collectorate 16-22 November 1858, MPSAB"
          ]
        },
        {
          "name": "Dhoka Singh",
          "origin": "Western Malwa region, Madhya Pradesh",
          "description": "Belonged to Western Malwa region, Central India Agency, Indore, (now Madhya Pradesh); he raised an anti-British local force, when the wave of the 1857 Rising reached the area; he and his troops confronted the British troops in a number of battlefields in the hope of dealing the British authorities a heavy blow; he died while fighting against British troops at Sitamau.",
          "sources": [
            "Mutiny Papers, Vol. I, NAIB",
            "Poll Deptt, Vol. No.48 (V) (1858), MSAB",
            "WWIM, III, p.36"
          ]
        },
        {
          "name": "Dhotal",
          "origin": "Imlea, Rewa, Madhya Pradesh",
          "description": "Resident of Imlea, Rewa, the North-Western Provinces (now in Madhya Pradesh) Bhoonhar; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces on several occasions; he was caught by the British in the course of an engagement and hanged.",
          "sources": [
            "Mutiny Records, NWP, Fatehpur Mutiny Basta (Ur./Per. Srs.), UPRAA"
          ]
        },
        {
          "name": "Dilsher Khan",
          "origin": "Nimar, Madhya Pradesh",
          "description": "Resident of Nimar, Madhya Pradesh; he led a group of local rebels during the Uprising of 1857 and fought against the British troops at Mandaleshwar; he was caught by the advancing British forces in Nimar and charged with leading the rebellion against the British; sentenced to death and executed in 1859.",
          "sources": [
            "Mutiny Records, Judl Deptt. Vol. No. 32 (1859), MSAB",
            "WWIM, III, p. 37"
          ]
        }

];

let currentIndex = 0;
const itemsPerPage = 10; // Updated to 10 items per page

// DOM Elements
const searchInput = document.getElementById('search');
const peopleList = document.getElementById('people-list');
const loadMoreButton = document.getElementById('load-more');
const counter = document.getElementById('counter');

// Update Counter
function updateCounter(displayedCount, filteredCount, totalCount) {
  counter.textContent = `Showing ${displayedCount} (Total: ${totalCount})`;
}

// Render People
function renderPeople(data) {
  const fragment = document.createDocumentFragment();
  data.forEach((person, index) => {
    const card = document.createElement('div');
    card.classList.add('person-card');
    card.setAttribute('data-index', index);

    card.innerHTML = `
      <div class="card-content">
        <div class="name-origin">
          <strong>${person.name}</strong>
          <span class="origin"><strong>Origin:</strong> ${person.origin}</span>
        </div>
        <div class="description">${person.description}</div>
        <div class="sources">${person.sources.map(source => `<em>${source}</em>`).join(", ")}</div>
      </div>
    `;

    // Toggle Description and Sources
    card.addEventListener('click', () => {
      document.querySelectorAll('.person-card.active').forEach((activeCard) => {
        if (activeCard !== card) {
          activeCard.classList.remove('active');
        }
      });
      card.classList.toggle('active');
    });

    fragment.appendChild(card);
  });
  peopleList.appendChild(fragment);
}

// Load Initial People
function loadPeople(filteredData) {
  const nextBatch = filteredData.slice(currentIndex, currentIndex + itemsPerPage);
  renderPeople(nextBatch);
  currentIndex += nextBatch.length;

  // Update counter with currently displayed items
  updateCounter(currentIndex, filteredData.length, peopleData.length);

  // Hide Load More Button if no more data
  if (currentIndex >= filteredData.length) {
    loadMoreButton.style.display = 'none';
  }
}

// Search Functionality
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filteredPeople = peopleData.filter((person) =>
    person.name.toLowerCase().includes(query)
  );

  peopleList.innerHTML = '';
  currentIndex = 0;
  renderPeople(filteredPeople.slice(0, itemsPerPage));
  updateCounter(Math.min(itemsPerPage, filteredPeople.length), filteredPeople.length, peopleData.length);

  // Adjust Load More Button
  loadMoreButton.style.display =
    filteredPeople.length > itemsPerPage ? 'block' : 'none';
});

// Load More Functionality
loadMoreButton.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase();
  const filteredPeople = query
    ? peopleData.filter((person) => person.name.toLowerCase().includes(query))
    : peopleData;
  loadPeople(filteredPeople);
});

// Initial Load
updateCounter(0, peopleData.length, peopleData.length);
loadPeople(peopleData);
