// Simulated JSON data
const peopleData = 
[
  
  {
    "name": "Anant Singh",
    "origin": "Banpur State",
    "description": "Belonged to Banpur State, Madhya Pradesh; organized the rebel troops of thousands and took a leading role in the Uprising of 1857 against the British forces; confronted the British army under Hugh Rose (who defeated Rani Lakshmi Bai) at Barodia on 31 January 1858; valorously sacrificed his life along with a large number of his soldiers in this battle.",
    "sources": [
      "Mutiny Papers, I, NAIB; Poll Deptt, Vol. No.46 (III) (1858), MSAB; WWIM, III, p.10"
    ]
  },
  {
    "name": "Arjunsingh Dangi",
    "origin": "Saugar (Sagar)",
    "description": "Resident of Saugar (Sagar), Madhya Pradesh; he took part in the Uprising of 1857 and fought the British forces in his area; he was caught by the British during an engagement and executed by hanging on 14 July 1857.",
    "sources": [
      "Mutiny Records, Poll. Deptt. F. No. 16 (1857), MPSAB"
    ]
  },
  {
    "name": "Badan Rai",
    "origin": "the Achalpur region",
    "description": "Belonged to the Achalpur region, Madhya Pradesh; he took part in the Uprising of 1857 and fought the British forces at several places in his area; he was caught by the British during their attack on the rebels and executed by hanging on 5 April 1858.",
    "sources": [
      "Mutiny Records, Poll. Deptt., Vol. No. 56 (1859), MSAB"
    ]
  },
  {
    "name": "Baddu Mahajan",
    "origin": "Jahanabad",
    "description": "Born in Jahanabad, Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857; he also provided financial support to the rebel forces in his locality and encouraged them to attack the British establishments; he was caught by the advancing British army and hanged in 1858.",
    "sources": [
      "Mutiny Records, Poll. Deptt. Vol. No. 106 (1859), MSAB"
    ]
  },
  {
    "name": "Bahadoor Ally",
    "origin": "Saugar (Sagar)",
    "description": "Resident of Saugar (Sagar), Madhya Pradesh; he fought against the British forces during the Uprising of 1857; caught by the British at the time of their counterattacks on the rebels, he was executed by hanging on 19 February 1858.",
    "sources": [
      "Mutiny Records, Poll. Deptt. Vol. III, No. 43D, MSAB"
    ]
  },
  {
    "name": "Bahadur Singh",
    "origin": "Nimar",
    "description": "Hailed from Nimar, the Central India Agency (now Madhya Pradesh); joined the anti-British rebel forces of the Uprising of 1857; played a decisive role in fighting the British forces at Mandleshwar Battle in 1857; captured and sentenced to transportation for life, he died in detention.",
    "sources": [
      "Mutiny Papers, V, III, NAIB; Poll Deptt, Vol. No.52 (IX) (1858), MSAB; WWIM, III, p.15"
    ]
  },
  {
    "name": "Bahadur Singh",
    "origin": "the Central Provinces and Berar (now Madhya Pradesh)",
    "description": "Resident of the Central Provinces and Berar (now Madhya Pradesh); took a leading role in the anti-British Uprising of 1857 in the southern part of the Central Provinces and Berar (Mandla and Seoni districts); in the course of the tumult, he was caught by the British forces and awarded capital punishment by hanging.",
    "sources": [
      "Mutiny Papers, III, NAIB; Poll Deptt, Vol. No.52 (IX) (1858), MSAB; WWIM, V, III, p.15"
    ]
  },
  {
    "name": "Bajeer Beg",
    "origin": "Rahatgarh",
    "description": "Resident of Rahatgarh, distt. Sagar, (now Madhya Pradesh); served as constable in the State Police before joining the anti-British rebel forces during the Uprising of 1857; associated himself with the forces of Nawab Fazil Mohammad Khan of Ambapani, he participated in the overrunning of the British settlement at Rahatgarh Fort in October 1857; later, between 24 and 28 January 1858 he confronted the reinforced British offensive under Hugh Rose at Rahatgarh fort; following reverses, the rebels decided to leave the fort; while leaving, he and some others were rounded up at Narsingpur Marg by Captain Suley of the British army; sentenced to death on the charges of sedition, aiding and abetting the rebellion,  Bajeer was executed in 1858.",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB"
    ]
  },
  {
    "name": "Bajmi Khan",
    "origin": "Rahatgarh",
    "description": "Hailing from Rahatgarh, distt. Saugor, (Sagar, now Madhya Pradesh); took part in the Uprising of 1857 against the British in the Saugor region; he joined the rebellion under Nawab Fazil Mohammad Khan of Ambapani and took part in riving the British away from  Rahatgarh Fort in October 1857; again he fought against the British troops during their re-occupation of Rahatgarh fort between 24 and 28 January 1858; when the rebel forces faced reverses and decided to leave the fort, Bajmi Khan and his fellow rebels were rounded up at Narsingpur Marg by Captain Suley of the British army; sentenced to death on the charges of treason, murder and rebellion against the British, he was executed soon thereafter.",
    "sources": [
      "Mutiny Papers, Vol. V, NAIB; Poll Deptt, Vol. No.52 (IX) (1858), MSAB"
    ]
  },
  {
    "name": "Bakhtawar Pande alias Fukur Nayak",
    "origin": "Kanau",
    "description": "Belonged to Kanau, Jabalpur Division (now Madhya Pradesh); he participated in the Uprising of 1857 and fought against the British forces on several occasions in Jabalpur; he was caught by the British in the course of an encounter and hanged in 1858; his property was also confiscated.",
    "sources": [
      "Mutiny Records, Poll. Deptt. F. No. 31 (1858), MPSAB"
    ]
  },
  {
    "name": "Bapu Rao",
    "origin": "Molampally",
    "description": "Resident of Molampally, Chanda, Madhya Pradesh; powerful Zamindar; in the Uprising of 1857, he played a leader’s role by assembling tribal (Gond and Maria) and nontribal (Rohilla) communities for fighting against the oppressive British intrusions into their habitations; before the rebellion could take off the ground, Bapu Rao was betrayed by the Rani of Aheri to the British authorities; captured, imprisoned and tortured, Bapu Rao was executed in the Chanda jail premises in 1857.",
    "sources": [
      "Mutiny Papers, Vol. I, NAIB; Poll Deptt, Vol. No.52 (IX) (1858), MSAB; WWIM, III, pp. 16-17"
    ]
  },
  {
    "name": "Bashirullah Khan",
    "origin": "Amjhera State",
    "description": "Hailed from Amjhera State, Central India Agency (now in Madhya Pradesh). Held the post Chief Minister of Amjhera and was involved in the revolt of 1857 under the leadership of his king Raja Bakhtawar Singh, he was captured and executed in 1858.",
    "sources": [
      "Mutiny Papers, Vol. VI, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB"
    ]
  },
  {
    "name": "Beehary Gond",
    "origin": "Khamaria",
    "description": "Born in Khamaria, Jabalpur, Madhya Pradesh; s/o Saturam Gond; he joined\n                                 hands with the rebels of his locality during the Uprising of 1857 and fought against the\n                                 British forces on several occasions; caught by the advancing British army in Jabalpur, he was\n                                 sentenced to death on 17 February 1858. [Mutiny Records, Poll. Deptt. F. No. 3 (1858),\n                                 MPSAB]",
    "sources": []
  },
  {
    "name": "Bhagirath Silawat",
    "origin": "Indore",
    "description": "Resident of Indore, Madhya Pradesh; he was an Infantry Officer in the Holkar’s Indore army but left the service during the Uprising of 1857 and led a group of rebels in fighting the British in Indore; with his followers he proceeded to Delhi to meet Emperor Bahadur Shah Zafarí; he was given some letters of the Emperor for delivery to the Holkar ruler; while on his return journey to Indore, he was intercepted by the Holker’s troops; he, however, managed to escape to Dipalpur, where he was arrested by the British and executed in November 1857.",
    "sources": [
      "Mutiny Records, Poll. Deptt. Vol. No. 60 (1859), MSAB; WWIM, III, p. 20"
    ]
  },
  {
    "name": "Bharat Dheemar",
    "origin": "Saugor (Sagar)",
    "description": "Resident of Saugor (Sagar), Madhya Pradesh; he participated in the Uprising of 1857 and fought against the British forces in the Sagar region; captured by the advancing British forces, he was executed by hanging in 1858.",
    "sources": [
      "Mutiny Records, Poll. Deptt. Vol. II, No. 43C (1859), MSAB"
    ]
  },
  {
    "name": "Bhau Chitnis",
    "origin": "Mahidpur",
    "description": "Belonged to Mahidpur, Madhya Pradesh; Amaldar; he joined the struggle against the British in 1857 and provided financial support to the rebels of his locality; he also participated in rebel forces’ confrontations with the British army; caught by the British during an engagement in Mahidpur, he was blown away with a cannon on 8 January 1858.",
    "sources": [
      "Mutiny Records, Poll Deptt. Vol. II, No.43C (1859), MSAB"
    ]
  },
  {
    "name": "Bhawani Prasad",
    "origin": "Sagar",
    "description": "Hailed from Sagar, the Central Provinces and Berar (now Madhya Pradesh); he joined the anti- British rebel forces in the Sagar area during the Uprising of 1857; his troops kept attacking the British outposts; he was caught eventually by the British force and sent on the gallows on 20 July 1857.",
    "sources": [
      "Mutiny Papers, Vol. I, NAIB; WWIM, III, pp. 16-17"
    ]
  },
  {
    "name": "Bhawani Singh",
    "origin": "Bhaopawar",
    "description": "Resident of Bhaopawar, Malwa region, the Central India Agency (now Madhya Pradesh); Thakur (landlord) of Sandal; enlisted on the rebel side by Raja Bakhat Bali (ruler of Amjhera) during the Uprising of 1857 for resisting unwanted British intrusions in the tribal region; he took part in the tribal attack on the Bhopawar Political Agency on 3 July 1857; he was captured by the British forces in the course of the encounter and hanged till death on 20 July 1857.",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB; WWIM, III, pp. 16-17"
    ]
  },
  {
    "name": "Bhijania",
    "origin": "Nimar",
    "description": "Resident of Nimar, Central India Agency (now Madhya Pradesh); a trusted lieutenant of Tantia Bhil, took part in the Bhil tribes’ armed resistance against British encroachments into their territories, as well as against the subjection of its people to economic deprivation in the late 1870s in Nimar, Dhar, Jhabua, Hosangabad and Malwa region; he had been arrested by the British in 1880 and dragged to the gallows in the same year.",
    "sources": [
      "H/Poll, F.No.28/08/1880, NAI; MPDGN, p.122; TCIAI, p. 18"
    ]
  },
  {
    "name": "Bhikam Khan",
    "origin": "Dhar",
    "description": "Belonged to Dhar, Madhya Pradesh; s/o Peer Mohammad; he took part in the Uprising of 1857 and fought against the British forces at several places in the Dhar region; caught by the British during an engagement, he was executed on 11 January 1857.",
    "sources": [
      " Mutiny Records, Poll. Deptt. Vol. No. 56 (1859), MSAB; WWIM, III, p.23"
    ]
  },
  {
    "name": "Bhima Naik",
    "origin": "Dholi Bhowlee",
    "description": "Resident of Dholi Bhowlee, Barwani State, Madhya Pradesh; a prominent leader of the Bhils of Nimar; took part in the Uprising of 1857 against the British raj; he raised an anti-British force by bringing in men from Bhil, Bhilala, Mandoi and Naik tribes, and collaborated with Tantia Tope; he deployed his troops on the Bhil-populated Bombay  ñ Agra Highway, where they constantly disturbed the British troop movements; the British authorities tried hard to corner and capture Bhima since 1859, but succeeded in arresting him only in 1861 from his jungle hideout; he was found guilty, sentenced to transportation for life, and sent to Cellular Jail of the Andaman Islands, where he died in detention.",
    "sources": [
      "Mumbai",
      "Mutiny Papers, I, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB; WWIM, III, pp. 103-104"
    ]
  },
  {
    "name": "Bhola Singh",
    "origin": "Madhya Pradesh",
    "description": "Resident of Madhya Pradesh; previously served as a Sepoy in the 52nd Native Infantry of the British-Indian Army; during his posting at Jabalpur, he decided to join the rebel forces led by Baldev Shukul at Katangi (in Jabalpur), and took part in the Uprising of 1857 against the British; in the course of fighting he was wounded seriously, captured by the British and executed in 1857.",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB; Poll Deptt, Vol. No. 50 (VII) (1858), MSAB; WWIM, III, p. 24"
    ]
  },
  {
    "name": "Bhugga",
    "origin": "Nimar",
    "description": "Resident of Nimar, Central India Agency, Indore, (now Madhya Pradesh); took a leading part in organizing the rebel forces to fight the British during the Uprising of 1857 at Mandleshwar; while fighting he was captured by the British and executed in 1858.",
    "sources": [
      "Mutiny Papers, VI, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB; WWIM, III, p. 24"
    ]
  },
  {
    "name": "Bhumani Prasad",
    "origin": "Sagour",
    "description": "Resident of Sagour , Jubbulpore Division, the Central Provinces and Berar (now Madhya Pradesh); previously served in the State police force as a constable; joined the anti-British rebel forces led by Adil Mohammad Khan in Sagour area during the Uprising of 1857; he took part in attacking and plundering the British outposts at Rahatgarh; when the British succeeded in retrieving position in this area, they managed to catch Bhumani from his native village; on the charges of aiding and abetting the rebellion, he was sentenced to death by hanging on 25 March 1858",
    "sources": [
      "Sagar",
      "NAI, Poll Proc., file No. 134, Letters by and to the Governor General, Bundle 98, dated 9 March 1858; 1857KAVRB, p. 139"
    ]
  },
  {
    "name": "Bhurjarai Singh",
    "origin": "Bhopal State (Madhya Pradesh)",
    "description": "Resident of Bhopal State (Madhya Pradesh); he was a prominent rebel leader during the Uprising of 1857 in Jhansi; joined the rebel forces and fought against the British troops in the Jhansi region in 1857-58; he was caught by the British troops during their re-occupation of Jhansi and charged with rebellion against the British and aiding the rebellion, Singh was sentenced to death in 1858 and executed soon thereafter.",
    "sources": [
      "Mutiny Records, Jhansi Mutiny Basta, UPRAA; Poll Deptt, Vol. No.52 (IX) (1858), MSAB"
    ]
  },
  {
    "name": "Bijnya Bheel",
    "origin": "Khargone",
    "description": "Resident of Khargone, Jabalpour division, the Central Provinces and Berar (now Madhya Pradesh); joined the anti-British rebel forces during the Uprising of 1857; while fighting against the enemy, he was caught, imprisoned in Jabalpur Central jail, and sentenced to death by hanging in the jail premises.",
    "sources": [
      "Mutiny Papers, VI, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB; WWIM, III, p. 24"
    ]
  },
  {
    "name": "Bukru Bhoi",
    "origin": "Ramgarh",
    "description": "Resident of Ramgarh, Mandla, Madhya Pradesh; he joined hands with the rebel forces of the Rani of Ramgarh during the Uprising of 1857 and fought the British at several places in Ramgarh; he was captured by the British army at the time of its counterattacks on the rebels; he was executed by hanging on 21 January 1858.",
    "sources": [
      "Mutiny Records, Judl Deptt. F. No. 12 (1858), MPSAB"
    ]
  },
  {
    "name": "Bhagwan Singh Gond",
    "origin": "Unknown",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, repudiandae!",
    "sources": []
  },
  {
    "name": "Bhoj Singh Gond",
    "origin": "Unknown",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, in?",
    "sources": []
  },
  {
    "name": "Chand Khan",
    "origin": "Madhya Pradesh",
    "description": "Belonged to Madhya Pradesh; s/o Chhote Khan; he joined hands with the rebel forces in the Gwalior region during the Uprising of 1857 and fought against the British and the allied forces; captured by the British in an encounter, he was executed by hanging in 1858.",
    "sources": [
      "Mutiny Records, Poll. Deptt. Vol. No. 56 (1859), MSAB"
    ]
  },
  {
    "name": "Chittu",
    "origin": "Mandleshwar",
    "description": "Resident of Mandleshwar, Malwa region, Central India Agency (now Madhya Pradesh); s/o Madar Baksh; joined the anti-British rebel forces during the Uprising of 1857 in the Malwa region; with the British retrieval of the area and the defeat of the rebels, Chittu was captured at his home and hanged on 23 December 1857.",
    "sources": [
      "Mutiny Papers, Vol. V, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB; WWIM, III, p. 30"
    ]
  },
  {
    "name": "Chuni Lal",
    "origin": "Amjhera State",
    "description": "Resident of Amjhera State, Malwa region, the Central India Agency (now Madhya Pradesh); when the whole of Malwa was aroused by the Uprising of 1857, he joined the anti-British rebel forces and participated in their raids on Bhopawar (Political) Agency in the first week of July 1857; the Indore State troops, assisting the British in subduing the rebel forces, defeated Chuni Lal’s men; they captured and handed him over to the British; later he was executed in Indore",
    "sources": [
      "Mutiny Papers, V, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB; WWIM, III, p.30"
    ]
  },
  {
    "name": "Dalganjan Singh",
    "origin": "Singpur",
    "description": "Hailed from Singpur, distt. Saugor (now Sagar), the Central Provinces and Berar (now Madhya Pradesh); joined the rebel forces and became prominent in leading the Uprising of 1857 in the valley of Narmada River; in the course of fighting against the British he collaborated with such other rebel leaders as Dhillain Shah and Narvar Shah; he was defeated by the British on 23 November 1857, captured, tried and hanged along with a number of his followers.",
    "sources": [
      "Mutiny Papers, Vol. IV, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB; WWIM, III, p.31"
    ]
  },
  {
    "name": "Dalganjan Singh",
    "origin": "Singpur",
    "description": "Hailed from Singpur, distt. Saugor (now Sagar), the Central Provinces and Berar (now Madhya Pradesh); joined the rebel forces and became prominent in leading the Uprising of 1857 in the valley of Narmada River; in the course of fighting against the British he collaborated with such other rebel leaders as Dhillain Shah and Narvar Shah; he was defeated by the British on 23 November 1857, captured, tried and hanged along with a number of his followers.",
    "sources": [
      "Mutiny Papers, Vol. IV, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB; WWIM, III, p.31"
    ]
  },
  {
    "name": "Daulat Rajput",
    "origin": "Saugor (now Sagar)",
    "description": "Resident of Saugor (now Sagar), the Central Province and Berar (now Madhya Pradesh); he organised a small band of anti-British rebels at the height of the 1857 Uprising; he led his associates in a series of attacks on the British troops stationed in Bushari village of Saugor; in this process of attacks and counterattacks he was captured by the enemy and executed in July 1857.",
    "sources": [
      "Mutiny Papers, VI, NAIB; Poll Deptt, Vol. No.52 (IX) (1858), MSAB; WWIM, III, p.32"
    ]
  },
  {
    "name": "Daulat Singh",
    "origin": "Hosangabad",
    "description": "Hailed from Hosangabad, Central Province and Berar (now Madhya Pradesh); with outbreak of Uprising in northern India in 1857 he organised an armed rebel force in Hosangabad and joined the fighting against the British; his force pushed the British army from Nimar to Harda in October 1857, and reached Handia; he confronted the British reinforcement under Major Orr at Piplia on 28 October 1857; in the battle that ensued there, Daulat Singh not only lost most of his soldiers, but he himself fell into the British hands, leading to his execution by hanging.",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB; Poll Deptt, Vol. No.52 (IX) (1858), MSAB; WWIM, III, p.32"
    ]
  },
  {
    "name": "Despat Bundela",
    "origin": "Chhatarpur",
    "description": "Resident of Chhatarpur, Madhya Pradesh; he joined the Uprising of 1857 and played a leading part in organizing the rebel forces in the Bundelkhund region; he also fought against the British in association with the Rani of Jhansi and other rebel leaders; he was killed by a British agent soon after the suppression of the Uprising.",
    "sources": [
      "Mutiny Records, F/ Poll. Consultation no. 75/80 (1868), NAI; Hamirpur Mutiny Basta, UPRAA"
    ]
  },
  {
    "name": "Dev Karan",
    "origin": "Sehore",
    "description": "Belonged to Sehore, Madhya Pradesh; Chaprasi; with his associates, he joined the rebel forces under Fazil Mohammad Kahn of Ambapani and fought against the British forces; given away by a British agent after the fall of the Rahatgarh fort, he was handed over to the British; he was executed by hanging on 25 March 1858.",
    "sources": [
      "Mutiny Papers, Vol. No. II, NAIB"
    ]
  },
  {
    "name": "Devee Gontia",
    "origin": "the Jabalpur region",
    "description": "Belonged to the Jabalpur region, Madhya Pradesh; he joined hands with the rebels of his region during the Uprising of 1857 and fought against the British forces; caught by the British in the midst of an engagement, he was executed by hanging on 15 December 1857.",
    "sources": [
      "Mutiny Records, Poll Deptt. F. No. 10 (1858), MPSAB; TFWI, I, p. 144"
    ]
  },
  {
    "name": "Devi Singh",
    "origin": "Seoni",
    "description": "Resident of Seoni, Jubbulpore Division, the Central Provinces and Berar (now Madhya Pradesh); took a prominent role in spreading the Uprising of 1857 in the southern part of C.P. and Berar; organised an anti-British rebel force and challenged the Britishers in Seoni district; in the course of fighting he was defeated, captured, sentenced to capital punishment and hanged.",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB; Poll Deptt, Vol. No.52 (IX) (1858), MSAB; WWIM, III, p. 35"
    ]
  },
  {
    "name": "Devi",
    "origin": "Nimar",
    "description": "Resident of Nimar, Malwa region, Central India Agency, Indore, (now Madhya Pradesh); took part in the Uprising of 1857 at Mandleshwar against the oppressive British policies of public health, forest and land revenues. He and his associates tried hard to retain their position in Mandleshwar and Dhar but failed against the superior British forces. Captured and sentenced to transportation for life, Devi breathed his last in an overseas jail.",
    "sources": [
      "Mutiny Papers, Vol. III, NAIB; Poll Deptt, Vol. No.48 (V) (1858), MSAB; WWIM, III, p.34"
    ]
  },
  {
    "name": "Dhankuji",
    "origin": "Gwalior State (now Madhya Pradesh)",
    "description": "Resident of Gwalior State (now Madhya Pradesh); Thakur; organized the rebel troops and played a leading role in the Uprising of 1857 against the British forces in Jhansi; while encountering the British attempts at re-occupying Jhansi in 1858, he was caught by the enemy; sentenced to death on charges of rebellion against the British, he was executed in 1858.",
    "sources": [
      "Mutiny Records, Jhansi Mutiny Basta, UPRAA; Poll Deptt, Vol. No.52 (IX) (1858), MSAB"
    ]
  },
  {
    "name": "Dhansingh",
    "origin": "Patan",
    "description": "Resident of Patan, Madhya Pradesh; he took part in the Uprising of 1857 and fought the British forces in the Patan region; he was caught by the British forces during their raids on the rebel camps and was executed by hanging in 1858.",
    "sources": [
      "Mutiny Papers, Vol. No. II, NAIB"
    ]
  },
  {
    "name": "Dhian Singh",
    "origin": "v. Tendukhera",
    "description": "Hailed from v. Tendukhera, Gaddawara, distt. Narshingpur, Nerbudda Division, the Central Provinces and Berar (now Madhya Pradesh); s/o Bishram Singh; chief of Gond tribes of Madanpur; previously he fought against the British expansion in the Bundela region in 1842, lost and was deprived of his traditional rights; taking advantage of the outbreak of 1857 and its effects on the Central India, Dhyan Singh organised an anti- British rebel force, re-occupied Deori, Chawarpatha and Tendukhera from the British in 1857 and challenged the authorities in the Bhilinhabited areas by using guerrilla tactics; he was captured during an engagement with Captain Termanled British troops; executed by hanging from a mango tree in May 1858.",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB; WWIM, III, p. 36"
    ]
  },
  {
    "name": "Dhillanshah Gond",
    "origin": "Madanpur",
    "description": "Resident of Madanpur, Narsinghpur, Madhya Pradesh: he led a group of rebels of his area during the Uprising of 1857 and fought the British and the allied forces at several places; he was caught by the British police and executed by hanging on 23 May 1858.",
    "sources": [
      "Mutiny Records, Narrative of Events, Narsinghpur Collectorate 16- 22 November 1858, MPSAB"
    ]
  },
  {
    "name": "Dhoka Singh",
    "origin": "Western Malwa region",
    "description": "Belonged to Western Malwa region, Central India Agency, Indore, (now Madhya Pradesh); he raised an anti-British local force, when the wave of the 1857 Rising reached the area; he and his troops confronted the British troops in a number of battlefields in the hope of dealing the British authorities a heavy blow; he died while fighting against British troops at Sitamau.",
    "sources": [
      "Mutiny Papers, Vol. I, NAIB; Poll Deptt, Vol. No.48 (V) (1858), MSAB; WWIM, III, p.36"
    ]
  },
  {
    "name": "Dhotal",
    "origin": "Imlea",
    "description": "Resident of Imlea, Rewa, the North-Western Provinces (now in Madhya Pradesh) Bhoonhar; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces on several occasions; he was caught by the British in the course of an engagement and hanged.",
    "sources": [
      "Mutiny Records, NWP, Fatehpur Mutiny Basta (Ur./Per. Srs.), UPRAA"
    ]
  },
  {
    "name": "Dilsher Khan",
    "origin": "Nimar",
    "description": "Resident of Nimar, Madhya Pradesh; he led a group of local rebels during the Uprising of 1857 and fought against the British troops at Mandaleshwar; he was caught by the advancing British forces in Nimar and charged with leading the rebellion against the British; sentenced to death and executed in 1859.",
    "sources": [
      "Mutiny Records, Judl Deptt. Vol. No. 32 (1859), MSAB; WWIM, III, p. 37"
    ]
  },
  {
    "name": "Doodil",
    "origin": "Imlea",
    "description": "Resident of Imlea, Rewa, the North-Western Provinces (now in Madhya Pradesh); Lohar; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces on several occasions; he was caught by the British in the course of an engagement, and hanged in 1858.",
    "sources": [
      "Mutiny Records, Jhansi Mutiny Basta, UPRAA; Poll Deptt, Vol. II, No.43C (1859), MSAB"
    ]
  },
  {
    "name": "Doojan",
    "origin": "Saugor (Sagar)",
    "description": "Resident of Saugor (Sagar), Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought against the British forces in the Sagar region; he was caught by the British in the midst of an engagement and hanged in 1858.",
    "sources": [
      "Mutiny Records, Poll Deptt. Vol. No. 60 (1859), MSAB"
    ]
  },
  {
    "name": "Drogoo",
    "origin": "Nimar",
    "description": "Resident of Nimar, Madhya Pradesh; s/o Madar Bux; he fought against the British forces at several places in the Nimar region during the Uprising of 1857; he was caught by the British army in the course of an engagement at Mandleshwar and executed by hanging in December 1857.",
    "sources": [
      "Mutiny Records, Poll. Deptt. Vol. No. 60 (1859), MSAB; WWIM, III, p. 37"
    ]
  },
  {
    "name": "Dulare Gond",
    "origin": "Nimar",
    "description": "Resident of Nimar, Madhya Pradesh; he participated in the Uprising of 1857 and fought against the British forces on several occasions; he was caught and hanged by the British army in 1858.",
    "sources": [
      "Mutiny Records, Poll Deptt. Vol. No. 60 (1859), MSAB"
    ]
  },
  {
    "name": "Fateh Singh alias Futty",
    "origin": "Nimar",
    "description": "Resident of Nimar, the Central India Agency, Indore, (now Madhya Pradesh); s/o Kesari Singh; joined the anti-British rebel forces during the Uprising of 1857 in Malwa region; under the leadership of Sita Ram, he took part in a number of encounters against the British; in the course of fighting at Nimar he was caught and executed by hanging.",
    "sources": [
      "Mutiny Papers, I, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB; WWIM, III, p.40"
    ]
  },
  {
    "name": "Funda Singh",
    "origin": "the Saugor (Sagar) region",
    "description": "Belonged to the Saugor (Sagar) region, Madhya Pradesh; he participated in the Uprising of 1857 and fought the British forces in his area; caught by the British during an encounter in the Sagar region; he was executed by hanging in 1857.",
    "sources": [
      "Mutiny Records, Poll Deptt. Vol. No. 60 (1859), MSAB"
    ]
  },
  {
    "name": "Futta",
    "origin": "Nimar",
    "description": "Resident of Nimar, the Central India Agency, Indore, (now Madhya Pradesh); joined the rebel forces during the Uprising of 1857; while fighting against the British forces at Mandleshwar in 1857, he was captured by the enemy and sentenced to transportation for life. Futta passed away as a captive in an overseas jail.",
    "sources": [
      "Mutiny Papers, Vol. I, NAIB; Poll Deptt, Vol. No.48 (V) (1858), MSAB; WWIM, III, p.42"
    ]
  },
  {
    "name": "Gadadhar Tiwari",
    "origin": "Jubbulpore (Jabalpur)",
    "description": "Resident of Jubbulpore (Jabalpur), Saugor and Nerbudda Division, the Central Provinces and Berar (now Madhya Pradesh); served as a Sepoy in the British- Indian army; unable to put up with the ill-treatment of his senior British officers, he attacked his company’s Adjutant, Mr. Miller, with his musket on 16 June 1857; overpowered by the other soldiers and detained in their custody, he was blown off in public by a canon despite the medical officer’s declaring him as mentally unstable.",
    "sources": [
      "Mutiny Papers, III, NAIB; MPGJ, p.84"
    ]
  },
  {
    "name": "Gandhurva Singh",
    "origin": "v. Pindara",
    "description": "Resident of v. Pindara, Pargana-Malthaun of Saugor (Sagar), Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Sagar region; he was captured by the British in the course of an engagement and hanged on 20 March 1858.",
    "sources": [
      "F/ Poll (Sup. Proc), S. No. 1351, 30 Dec (1859)"
    ]
  },
  {
    "name": "Ganesh Khangur",
    "origin": "the Saugor (Sagar) region",
    "description": "Resident of the Saugor (Sagar) region, Madhya Pradesh; he fought the British forces at several places in the Sagar region during the Uprising of 1857; caught by the British troops in the midst of their operations against the rebels, he was executed by hanging in 1857.",
    "sources": [
      "Mutiny Records, F/ Poll, Consultations nos. 581-92, 30 Oct [1857, NAI"
    ]
  },
  {
    "name": "Ganjam Singh",
    "origin": "distt. Narsinghpur",
    "description": "Hailed from distt. Narsinghpur, Nerbudda Division, the Central Provinces and Berar (now Madhya Pradesh); rich landlord; joined the anti-British rebel forces during the Uprising of 1857 in Narsinghpur district and continuously fought for regaining the power and position he lost to the British; he was killed in an ambush by the British troops.",
    "sources": [
      "Mutiny Papers, II, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB; WWIM, III, p.43"
    ]
  },
  {
    "name": "Ganput",
    "origin": "Garhakota",
    "description": "Belonged to Garhakota, Saugor (Sagar), Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought against the British at several places in the Sagar region; he was caught by the advancing British army and executed by hanging on 5 March 1858.",
    "sources": [
      "Mutiny Records, Poll Deptt. Vol. I, No. 43B (1859), MSAB"
    ]
  },
  {
    "name": "Girwar Singh",
    "origin": "1831",
    "description": "Born in 1831, Rahatgarh, Saugor (now Madhya Pradesh); s/o Dev Singh; during the Uprising of 1857, joined the rebel forces under the leadership of Nawab Fazil Ali Mohammad Khan at Rahatgarh; fought against Hugh Rose’s British force who came to re-occupy the Rahatgarh fort in January 1858; captured in the encounter and tried for anti-British role, Girwar Singh was executed by hanging in the front gate of Rahatgarh fort on 29 January 1858.",
    "sources": [
      "Mutiny Papers, Vol. III, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB"
    ]
  },
  {
    "name": "Golam Sufder Khan",
    "origin": "Gwalior",
    "description": "Belonged to Gwalior, (now in Madhya Pradesh); Mughal; he went to Delhi and took part in fighting against the British at the time of the Uprising of 1857; he was caught by the British during their re-occupation of Delhi in September 1857, charged with rebellion against the British; he was sentenced to death and executed by hanging on 8 January 1858.",
    "sources": [
      "Mutiny Records, Judl. Deptt. (Delhi Div.), F.No.3 (1858), HSAP"
    ]
  },
  {
    "name": "Goolab Khan",
    "origin": "the Nimar region",
    "description": "Resident of the Nimar region, Madhya Pradesh; he fought against the British forces at several places during the Uprising of 1857; he was caught by the British in one of their raids on the rebel forces in the Nimar region, accused of murder and rebellion; he was sentenced to transportation for life in 1858; he died in captivity in 1859.",
    "sources": [
      "Mutiny Records, Judl Deptt. Vol. 32 (1860), MSAB; WWIM, III, p. 43"
    ]
  },
  {
    "name": "Goolab Shah",
    "origin": "Bhopal",
    "description": "Resident of Bhopal, Madhya Pradesh; he joined hands with the rebels during the Uprising of 1857 and fought the British and the allied forces at several places in Bhopal; he also took part in the defence of the Rahatgarh fort against the British army; he was caught by the British after the fall of the fort and executed by hanging on 25 February 1858.",
    "sources": [
      "Mutiny papers, Vol. II, NAIB"
    ]
  },
  {
    "name": "Goolab",
    "origin": "Garhakota",
    "description": "Resident of Garhakota, Saugor (Sagar), Madhya Pradesh; he fought against the British forces at several places during the Uprising of 1857; he also supplied arms to the local rebels to fight the British rule; he was caught in the midst of an engagement by the British and executed by hanging on 5 March 1858.",
    "sources": [
      "Mutiny Records, Poll Deptt. Vol. I, No. 43 B (1859), MSAB"
    ]
  },
  {
    "name": "Gujandhur Teewary",
    "origin": "the Narsinghpur",
    "description": "Belonged to the Narsinghpur, Madhya Pradesh; he was a Sepoy in the 52nd Native Infantry of the British-Indian army but left his service during the Uprising of 1857 and joined hands with the rebels of his area; he was caught by the British in the course of an engagement; he was blown away with a cannon on 10 October 1857 at Narsinghpur.",
    "sources": [
      "Mutiny Records, narrative of Events, 5-11 October 1857, Narsinghpur Collectorate, MPSAB"
    ]
  },
  {
    "name": "Gulab Rai",
    "origin": "Amjhera State Malwa region",
    "description": "Resident of Amjhera State Malwa region, the Central India Agency, Indore, (now Madhya Pradesh); Dewan of Amjhera State; he succeeded in organising a rebel force by assembling mercenaries, patriots and deserters of the British-Indian Army and the State-owned armies in July 1857 for throwing the British out from the State; with permission of his Highness Raja Bakhtawar Singh (ruler of Amjhera), he invaded and occupied the Bhopawar Political Agency (British Residency of Amjhera State) on 3 July 1857; however, continuous political and military pressures from the powerful pro-British Indore State of Holkar and Captain Hutchinson of the British troops, resulted in Raja Bakhtawar Singh’s losing his nerves and surrendering his Dewan, Gulab Rai, to the British as the rebel leader responsible for plundering and devastating the British Residency properties at Bhopawar; the hero of Amjhera State became overnight a political victim of his weak ruler; he was hanged till death on 11 July 1857.",
    "sources": [
      "Mutiny Papers, II, NAIB; WWIM, III, p.43; ROCIM, pp. 141-42"
    ]
  },
  {
    "name": "Gulab Shah",
    "origin": "1798",
    "description": "Born in 1798, Bhopal State (now Madhya Pradesh); s/o Sheith Shah; joined the anti-British rebel forces of the Nawab of Ambapani; participated in attacking and throwing out the Britishers from Ambapani, Sehore and Rahatgarh areas in 1857; when the British reinforcement under Hugh Rose came to re-occupy the Rahatgarh fort on 24 January 1858, Gulab Shah fought furiously against it for four days; caught by the enemy on 28 January 1858 and charged with rebellion against the British, he was executed by hanging at the Rahatgarh Fort on 29 January 1858.",
    "sources": [
      "Mutiny Papers, Vol. IV, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB"
    ]
  },
  {
    "name": "Gungadhur",
    "origin": "Murahi- Churdha",
    "description": "Resident of Murahi- Churdha, the Saugor (Sagar) region, Madhya Pradesh; Lambardar; he led a group of rebels during the Uprising of 1857 and fought the British forces; he was caught by the British troops in the course of an encounter and executed by hanging in 1857.",
    "sources": [
      "Mutiny Records, F/Poll. Consutations nos. 581-92, 30 Oct (1857), NAI"
    ]
  },
  {
    "name": "Gunjan Singh",
    "origin": "the Narsinghpur region",
    "description": "Belonged to the Narsinghpur region, Madhya Pradesh; he joined the Uprising of 1857 and fought the British forces on several occasions; caught by the British troops during an engagement, he was executed by hanging on 23 November 1857.",
    "sources": [
      "Mutiny Records, Poll Deptt. F.No. 10B (1857), MPSAB; TFWI, I, p. 127"
    ]
  },
  {
    "name": "Gunni",
    "origin": "v. Kunsiya",
    "description": "resident of v. Kunsiya, Jabalpur, Madhya Pradesh; s/o Mohan Gond; he participated in the Uprising of 1857 and fought against the British in the Jabalpur region; he was caught by the British in the course of an encounter and sentenced to death on17 February 1858 on the charge of rebellion against the British.",
    "sources": [
      "Mutiny Records, Poll F.No.3 (1858), MPSAB"
    ]
  },
  {
    "name": "Haji Amin",
    "origin": "Nimar",
    "description": "Resident of Nimar, the Central India Agency, Indore (now Madhya Pradesh); a popular leader, he organized the anti-British rebel forces and led an armed revolt against the pro-British ruler in Mandleshwar during the Uprising of 1857; in course of the fighting, he was captured by the British army and executed in 1859.",
    "sources": [
      "Mutiny Papers, IV, NAIB; WWIM, III, p.50"
    ]
  },
  {
    "name": "Hari Singh Dimar",
    "origin": "Saugor (Sagar)",
    "description": "Resident of Saugor (Sagar), Jubbulpore (Jabalpur) Division, the Central Provinces and Berar (now Madhya Pradesh); joined the rebel forces fighting against the British rule in the Uprising of 1857 in the Jabalpur region; under his leadership many British outposts were continuously attacked and plundered; later the British troops captured him and sentenced him to capital punishment. He was executed on 14 July 1857.",
    "sources": [
      "Mutiny Papers, IV, NAIB; WWIM, III, p.52"
    ]
  },
  {
    "name": "Himmat Singh Patel",
    "origin": "Narsinghpur",
    "description": "Resident of Narsinghpur, Madhya Pradesh; he fought the British forces at several places in the Narsinghpur region during the Uprising of 1857; he was caught by the British troops during an engagement in 1857; he was executed by hanging.",
    "sources": [
      "Mutiny Records, Poll. F. No. 10B (1857), MPSAB; TFWI, I p.61"
    ]
  },
  {
    "name": "Hira Singh:",
    "origin": "Mandsaur town",
    "description": "Resident of Mandsaur town, Malwa region, the Central India Agency, Indore (now Madhya Pradesh); staunch follower of Shahzada Firuz, a charismatic Muslim Haji, leader of the 1857 Rising, who drove the British out from Mandsaur with the help of hundreds of his rebel followers in August 1857; he also played a prominent role in leading Shahzad’s rebel forces in attacking the British Cantonment at Mahidpur on 8 November 1857 and in resisting the British reinforcement near Khichipura; in the battle of Gauria on 23 November 1857, he died fighting against the British troops.",
    "sources": [
      "Mutiny Papers, IV, NAIB; WWIM, III, pp.55- 56"
    ]
  },
  {
    "name": "Hriday Shah",
    "origin": "Madhya Pradesh",
    "description": "Belonged to Madhya Pradesh; he was in the service of the British-Indian army but left it during the Uprising of 1857; he fought against the British forces in the Mandla region; he was caught by the British troops during an encounter and charged with desertion and mutiny; he was sentenced to death and executed by hanging on 25 July 1857.",
    "sources": [
      "Mutiny Records, Poll. Deptt. Vol. I, No. 43 B (1859), MSAB"
    ]
  },
  {
    "name": "Hulli Bhoi",
    "origin": "Harrakot",
    "description": "Resident of Harrakot, Panchmarhi, Madhya Pradesh; joined the anti-British rebel forces of Jagirdar Vibhuti Singh and acted as the commander of the fight against the British troops during the Uprising of 1857; he fought continuously from 1859 till his capture by the British forces in January 1860, imprisoned for long in the Jabalpur Central jail, he was put on the gallows in 1862.",
    "sources": [
      "Mutiny Papers, III, NAIB; WWIM, III, p.57"
    ]
  },
  {
    "name": "Imam Ali",
    "origin": "1788",
    "description": "born in 1788, distt. Saugor, Jubbulpore Division (now Madhya Pradesh); s/o Meer Sultan Ali; served as British authority’s security guard at Rahatgarh fort; he deserted it and joined Nawab Fazil Mohammad Khan’s anti-British rebel troops during their occupation of Rahatgarh in October 1857; he fought from 24 to 28 January 1858 against the British troops who came to re-occupy Rahatgarh Fort under Sir Hugh Rose; in the course of the fighting he was captured and charged with sedition and rebellion against the British; he was executed by hanging at Rahatgarh Fort on 29 January 1858 along with thirty rebels (approximately).",
    "sources": [
      "Mutiny Papers, Vol. VI, NAIB; Poll Deptt, Vol. No.52 (IX) (1858), MSAB"
    ]
  },
  {
    "name": "Imam Allee",
    "origin": "Saugor (Sagar)",
    "description": "Resident of Saugor (Sagar), Madhya Pradesh; s/o Mir Sooltan Allee; he joined hands with the rebels during the Uprising of 1857 and fought against the British and the loyalist forces in the Sagar region; he took part in the defence of the Rahatgarh fort against the British onslaught; caught after the fall of the fort, he was executed by the British army on 25 February 1858.",
    "sources": [
      "Mutiny Papers, Vol. No. II, NAIB"
    ]
  },
  {
    "name": "Imam Bux",
    "origin": "Bengal but resided in the Saugor (Sagar)",
    "description": "Born in Bengal but resided in the Saugor (Sagar), Madhya Pradesh; s/o Sheikh Nabi; he participated in the defence of the Rahatgarh fort against the British army during the Uprising of 1857; he was caught after the fall of the fort and executed by the British at Rahatgarh on 25 February 1858.",
    "sources": [
      "Mutiny Papers, Vol. No. II, NAIB"
    ]
  },
  {
    "name": "Imam Khan",
    "origin": "Malwa",
    "description": "Resident of Malwa, the Central India Agency, Indore (now Madhya Pradesh); served as Risaldar in the Native Infantry of the British- Indian Army till he deserted it in 1857; he joined the rebel forces and took part in fighting against the British forces in the Malwa region during the Uprising of 1857; was captured by the enemy from the front and executed at Shahjahanpur in 1857.",
    "sources": [
      "Mutiny Papers, III, NAIB; WWIM, III, p.59"
    ]
  },
  {
    "name": "Inyat Hussain",
    "origin": "Bhopal State",
    "description": "Hailed from Bhopal State, the Central India Agency (Now Madhya Pradesh); served as Jamadar in the Cavalry Regiment of the Bhopal State Army; the outbreak of the Uprising of 1857 in northern and central regions of India inspired him and his comrades to rise against the British Residency; he played a prominent role in the attacks on the British forces at Sehore in 1857; in the course of fighting he was captured by the enemy along with hundreds of rebels; tied onto the canon of a field gun, he was blown to death on 13 January 1858.",
    "sources": [
      "Mutiny Papers, V, NAIB; WWIM, III, pp. 59-60"
    ]
  },
  {
    "name": "Jahangeer Khan",
    "origin": "the Saugor (Sagar) region",
    "description": "Belonged to the Saugor (Sagar) region, Madhya Pradesh; he fought against the British forces in the Sagar region during the Uprising of 1857; he was caught by the British troops in the course of an engagement and executed by hanging in 1857.",
    "sources": [
      "Mutiny Records, Poll Deptt. Vol. III, No. 43D (1859), MSAB"
    ]
  },
  {
    "name": "Jahangir Khan",
    "origin": "Bhopal State (now Madhya Pradesh)",
    "description": "Resident of Bhopal State (now Madhya Pradesh); s/o Namdar Khan, took part in the Uprising of 1857 against the British in Saugor district; joined the rebels under the leadership of Nawab Fazil Mohammad Khan of Ambapani and participated in attacking and plundering the British establishments at Ambapani, Sehore and Rahatgarh in 1857; during the last week of January 1858, he fought against the British troops who came to re-occupy Rahatgarh Fort under Hugh Rose; in the course of the fighting he was captured by the enemy and sent on the gallows on 29 January 1858.",
    "sources": [
      "Mutiny Papers, Vol. IV, NAIB; Poll Deptt, Vol. No.52 (IX) (1858), MSAB"
    ]
  },
  {
    "name": "Jalleem",
    "origin": "Garhakota",
    "description": "Resident of Garhakota, Saugor (Sagar), Madhya Pradesh; he joined the Uprising of 1857 and fought the British at several places in the Sagar region; he was caught by the British troops during an engagement and executed by hanging on 5 March 1858.",
    "sources": [
      "Mutiny Records, Vol. No. 56 (1859), MSAB"
    ]
  },
  {
    "name": "Janba",
    "origin": "Nimar",
    "description": "Resident of Nimar, Malwa region, the Central India Agency (now Madhya Pradesh); played a leading role in organizing the rebel forces in the Nimar area against the British during the Uprising of 1857; while confronting the British troops led by Captain Keating at Beejgarh on 9 October 1858, along with 19 brave rebels, he laid down his life for the cause of freedom of Bhopal.",
    "sources": [
      "Mutiny Papers, V, NAIB; WWIM, III, p. 65"
    ]
  },
  {
    "name": "Jawahar Rajput",
    "origin": "Saugar  Jubbulpore Division",
    "description": "Belonged to Saugar  Jubbulpore Division, the Central Provinces and Berar (now Madhya Pradesh); joined the anti-British rebel forces during the Uprising of 1857 in Saugor district; he took part in raiding and ransacking the British outposts; later he was captured by the enemy and awarded capital punishment on 14 July 1857.",
    "sources": [
      "now Sagar",
      "Mutiny Papers, V, NAIB; WWIM, III, p.66"
    ]
  },
  {
    "name": "Jawahar Singh",
    "origin": "Jubbulpore (Jabalpur)",
    "description": "Resident of Jubbulpore (Jabalpur), Central Provinces and Berar (now Madhya Pradesh); he organized a rebel force by collecting the local anti-British elements and joined the Uprising of 1857 in the Jubbulpore region; he fought against the British forces at Gadaghat on 23 October 1857 and died in the battlefield.",
    "sources": [
      "Mutiny Papers, VI, NAIB; WWIM, III, p.66"
    ]
  },
  {
    "name": "Jawahar Singh",
    "origin": "Nimar",
    "description": "Resident of Nimar, Malwa region, the Central India Agency (now Madhya Pradesh); joined the anti-British rebel forces during the Uprising of 1857; played a leading role in fighting against the British troops at Mandleshwar in 1857; he was captured, sentenced to transportation for life and died in detention in the Andamans.",
    "sources": [
      "Mutiny Papers, VI, NAIB; WWIM, III, p.66"
    ]
  },
  {
    "name": "Jhulkan Lodhi",
    "origin": "Madhya Pradesh",
    "description": "Belonged to Madhya Pradesh; he took part in the Uprising of 1857 and fought against the British forces in the Mandla region; he was caught by the British troops during an engagement and charged with desertion and mutiny; he was sentenced to death and executed by hanging on 25 July 1857.",
    "sources": [
      "Mutiny Records, Poll. Deptt. Vol. I, No. 43 B (1859), MSAB"
    ]
  },
  {
    "name": "Jugat",
    "origin": "the Jabalpur region",
    "description": "Resident of the Jabalpur region, Madhya Pradesh; s/o Devee Gontia; he took part in the Uprising of 1857 and fought against the British forces at several places in the Jabalpur region; he was caught by the British troops during an engagement and executed by hanging on 15 December 1857.",
    "sources": [
      "Mutiny Records, Poll Deptt. F. No. 10 (1858), MPSAB; TFWI, p. 144"
    ]
  },
  {
    "name": "Kabardi Khan",
    "origin": "Madhya Pradesh",
    "description": "Resident of Madhya Pradesh; served as Jamadar in the Native Infantry of the British-Indian Army, left it in 1857 when he was posted in Barwani region, coinciding with the mutinies breaking out in different British cantonments in Northern and Central India in 1857; he organized an anti-British rebel force and led it in several raids on the British positions in Barwani; he was killed in an ambush laid by Captain Keatings of the British army in 1858.",
    "sources": [
      "Mutiny Papers, VI, NAIB; WWIM, III, p.68"
    ]
  },
  {
    "name": "Kaeem Khan",
    "origin": "Nimar",
    "description": "Resident of Nimar, Madhya Pradesh; he fought against the British forces during the Uprising of 1857; caught by the British troops in midst of an engagement in the Nimar region in 1857, he was sentenced to death.",
    "sources": [
      "Mutiny Records, Poll Deptt. Vol. No. 106 (1859), MSAB"
    ]
  },
  {
    "name": "Kalla",
    "origin": "1828",
    "description": "Born in 1828, v. Mohammadgarh, Bashoda, Bhopal State (now Madhya Pradesh); s/o Nathhe Khan Pathan; follower of Nawab Fazil Mohammad Khan; took part in the Uprising of 1857 against the British in Saugor  district; while confronting the British reinforcement under Hugh Rose at Rahatgarh fort from 24 to 28 January 1858, he was caught by the enemy troops; charged with rebellion against the British, Kalla was executed by hanging at the entrance of the Rahatgarh fort on 29 January 1858.",
    "sources": [
      "now Sagar",
      "Mutiny Papers, Vol. III, NAIB; Poll Deptt, Vol. No.53 (X) (1858), MSAB"
    ]
  },
  {
    "name": "Kaluram",
    "origin": "Patharia",
    "description": "Resident of Patharia; distt. Saugor , Jubbulpore Division, the Central Provinces and Berar ; employee of Nawab of Kamdar; joined the anti-British rebel forces during the Uprising of 1857 in the Saugor region and took part in the destruction of British settlements and outposts at Ambapani, Sehore and Rahatgarh; they also succeeded in driving the British away from Rahatgarh Fort in October 1857; when the reinforcement under Hugh Rose came to re-occupy the fort on 24 January 1858, Kaluram was captured by the British troops and charged with, plundering and rebellion against the British authority, Kaluram was executed by hanging at the entrance of the Rahatgarh Fort on 29 January 1858.",
    "sources": [
      "now Sagar",
      "now Madhya Pradesh",
      "Mutiny Papers, Vol. II, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB"
    ]
  },
  {
    "name": "Kamdar Khan",
    "origin": "1823 at Berchha",
    "description": "Born in 1823 at Berchha, Bhopal State, the Central India Agency (now Madhya Pradesh); s/o Namdar Khan Pindari; pensioner of Bhopal State; participated in attacking and pushing back the Britishers from Ambapani, Sehore and Rahatgarh areas during the Uprising of 1857; when the British reinforcement under Hugh Rose came to re-occupy the fort on 24 January 1858, Kamdar Khan was caught by the British troops and executed by hanging at the Rahatgarh Fort on 29 January 1858.",
    "sources": [
      "Mutiny Papers, Vol. VI, NAIB; WWIM, III, p.70"
    ]
  },
  {
    "name": "Bhurjarai Singh",
    "origin": "Bhopal State (Madhya Pradesh)",
    "description": "Resident of Bhopal State (Madhya Pradesh); he was a prominent rebel leader during the Uprising of 1857 in Jhansi; joined the rebel forces and fought against the British troops in the Jhansi region in 1857-58; he was caught by the British troops during their re-occupation of Jhansi and charged with rebellion against the British and aiding the rebellion, Singh was sentenced to death in 1858 and executed soon thereafter.",
    "sources": [
      "Mutiny Records, Jhansi Mutiny Basta, UPRAA; Poll Deptt, Vol. No.52 (IX) (1858), MSAB"
    ]
  },
  {
    "name": "Kamdar Khan",
    "origin": "1823",
    "description": "Born in 1823, distt. Saugor  (now Madhya Pradesh); joined the anti-British rebel forces during the Uprising of 1857 in Rahatgarh and its neighbouring areas; took part in attacking and plundering the British establishments and occupying the Rahatgarh Fort from them in October 1857; Kamdhar was arrested by the British troops during their recovery of Rahatgarh Fort in January 1858 and sentenced to death on the charges of treason, murder and rebellion against the British, he was executed by hanging at Rahatgarh Fort on 29 January 1858.",
    "sources": [
      "Sagar",
      "Mutiny Papers, Vol. VI, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB"
    ]
  },
  {
    "name": "Khairati Khan",
    "origin": "Bhopawar",
    "description": "Resident of Bhopawar, Amjhera State, Malwa region, the Central India Agency (now Madhya Pradesh); employed as a peon of the Political Agency in the Bhopawar British Residency (Amjhera State); he left his job during the Uprising of 1857, joined the rebel forces and accompanied them against the pro-British ruler at Dhar in 1857; in the course of fighting he was captured by the British troops and executed in 1858",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB; WWIM, III, p. 73"
    ]
  },
  {
    "name": "Khajab Bundish",
    "origin": "Nimar",
    "description": "Resident of Nimar, Malwa region, the Central India Agency (now Madhya Pradesh); inspired by the Uprising of 1857 he took upon himself the important task of organizing the anti-British rebel force in Nimar in 1859. Following his rebel forces raids on the British positions at Mandaleshwar, he was captured and executed in 1859.",
    "sources": [
      "Mutiny Papers, Vol. VI, NAIB; WWIM, II, p.73"
    ]
  },
  {
    "name": "Khaju Singh",
    "origin": "Nimar",
    "description": "Resident of Nimar, Malwa region, Central India Agency (now Madhya Pradesh); joined the Bhima Naik’s rebel forces, took part in organizing the rebel forces’ raiding the British positions in the Nimar region during the Uprising of 1857; he was captured by the British troops in 1859, sentenced to rigorous imprisonment and died in detention.",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB; WWIM,III, p. 75"
    ]
  },
  {
    "name": "Khajya Nayak",
    "origin": "the Central Indian Agency (now Madhya Pradesh)",
    "description": "Resident of the Central Indian Agency (now Madhya Pradesh); a Bhil; one of the prominent Adivasi leaders who led the armed revolt in 1857 against the Company raj; his army was of 800 to 1000 strong, and all of them belonged to indigenous Bhil tribes; his main targets were the rich local Zamindars and the British officialdom; his militancy continued even after 1857 and his troops troubled the British movements along the Ghats by attacking and looting their belongings; he was killed by a conspirator from the British side in 1858.",
    "sources": [
      "Mutiny Papers, Vol.II, NAIB; IVR, 2004, pp.65-66"
    ]
  },
  {
    "name": "Khejar Khan",
    "origin": "distt. Saugor",
    "description": "Belonged to distt. Saugor , (now Madhya Pradesh); took part in the Uprising of 1857 against the British in Saugor region under the command of Nawab Fazil Mohammad Khan of Ambapani; he participated in the overrunning of the British settlement at Rahatgarh Fort in October 1857; between 24 and 28 January 1858 he fought against the British troops during their reoccupation of Rahatgarh fort; while fighting the enemy forces and facing reverses, he and fellow rebels decided to leave the fort; soon after leaving it, Khejar Khan and others were nabbed at Narsinghpur Marg by Captain Sulley of the British army, sentenced to death on the charges of treason, murder and rebellion against the British,í he was executed in 1858.",
    "sources": [
      "Sagar",
      "Mutiny Papers, Vol. II, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB"
    ]
  },
  {
    "name": "Khwaja Baksh",
    "origin": "Bhopal State (now Madhya Pradesh)",
    "description": "Hailed from Bhopal State (now Madhya Pradesh); s/o Namdar Khan, joined the rebel forces during the Revolt of 1857 against the British in Saugor  district; involved in attacking and plundering the British settlements at Ambapani, Sehore and Rahatgarh under the command of Nawab Fazil Mohammad Khan of Ambapani; he fought from 24 to 28 January 1858 against the British troops who came to re-occupy Rahatgarh Fort under Hugh Rose; in the course of the fighting he was caught by the enemy and executed by hanging on 29 January 1858.",
    "sources": [
      "Sagar",
      "Mutiny Papers, Vol. I, NAIB; Poll Deptt, Vol. No.53 (X) (1858), MSAB"
    ]
  },
  {
    "name": "Kishan Ram",
    "origin": "1806",
    "description": "Born in 1806, resident of Ambapani, Bhopal State, the Central India Agency (now Madhya Pradesh); employee of Jagirdar Nawab Fazil Mohammad Khan of Ambapani; he joined the anti-British rebel forces led by his employer during the Uprising of 1857; participated in attacking the British outposts at Ambapani, Sehore and Rahatgarh; confronted the British reinforcements under General Hugh Rose at Rahatgarh fort between 24 and 28 January 1858; captured by the enemy on 29 January 1858 and sentenced to death, Kishan Ram was hanged on 30 January 1858.",
    "sources": [
      "Mutiny Papers, Vol. V, NAIB; WWIM, III, pp.76-77"
    ]
  },
  {
    "name": "Kishan Ram",
    "origin": "Ambapani",
    "description": "Hailed from Ambapani, Madhya Pradesh; worked as Secretary of Nawab Fazil Mohammad (Jagirdar of Ambapani); along with his employer, he joined the anti-British rebel forces during the uprising of 1857í in the Ambapani area; took a prominent part in fighting the British troops in several places; while confronting the British troops at Rahatgarh fort on 30 January 1858, his rebel force lost to the enemy; and on being captured along with other rebels, he was executed on 30 January 1858 at Rahatgarh fort; 17 arrested rebels were also killed on the spot on the same day.",
    "sources": [
      "Mutiny Papers, II, NAIB; WWIM, III, pp. 76-77"
    ]
  },
  {
    "name": "Koondun Singh",
    "origin": "Madhya Pradesh",
    "description": "Belonged to Madhya Pradesh; he fought against the British forces during the Uprising of 1857; he was caught by the British in the course of an engagement in 1857 and executed by hanging.",
    "sources": [
      "Mutiny Records, Rev. Deptt. F. No. 19 (1857), MPSAB"
    ]
  },
  {
    "name": "Koram Brahmin",
    "origin": "Jabalpur",
    "description": "Belonged to Jabalpur, Madhya Pradesh; s/o Thakal Brahmin; he took part in the fighting against the British during the Uprising of 1857; he was caught by the British forces and charged with rebellion against the British, he was sentenced to death on 17 February 1858.",
    "sources": [
      "Mutiny Records, Poll Deptt. F. No. 3 (1858), MPSAB"
    ]
  },
  {
    "name": "Kulyan",
    "origin": "the Hoshangabad region",
    "description": "Belonged to the Hoshangabad region, Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought against the British at several places; he was caught by the British army in the course of an engagement in 1857 he was executed by hanging on 17 October 1857.",
    "sources": [
      "Mutiny Records, Poll Deptt. Vol. No. 106 [1859, MSAB"
    ]
  },
  {
    "name": "Kunwar Daleep Singh",
    "origin": "the Bundelkhand region",
    "description": "Resident of the Bundelkhand region, Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Bundelkhand region; he was killed by the British in the course of an engagement in 1857.",
    "sources": [
      "Mutiny Records, Poll Deptt, Vol. No. 50 (VII) (1858), MSAB; TFWI, II, p.71"
    ]
  },
  {
    "name": "Kunwarsingh",
    "origin": "Madhya Pradesh",
    "description": "Belonged to Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces; he was captured by the British in the course of an engagement and executed by hanging in 1858.",
    "sources": [
      "Mutiny Records, Poll Deptt, Vol. No. 50 (VII) (1858), MSAB; TFWI, II, p.94"
    ]
  },
  {
    "name": "Kusru Gond",
    "origin": "Madhya Pradesh",
    "description": "Resident of Madhya Pradesh; he joined the rebels of his area during the Uprising of 1857 and fought the British forces; he was caught by the British in the course of an encounter and executed by hanging in 1857.",
    "sources": [
      "Mutiny Records, Poll Deptt, Vol. No. 52 (IX) (1858), MSAB"
    ]
  },
  {
    "name": "Lal Ajit Singh",
    "origin": "Baghelkhand",
    "description": "Hailed from Baghelkhand, Madhya Pradesh; he joined the rebel forces led by his uncle Lal Ranmat Singh in the Baghelkhand area during the Uprising of 1857; took part in several raids against the British and the allied forces in the Baghelkhand and Bundelkhand areas; during the fighting he was hacked to death by the Ajaigarh State forces at Bhilsail in 1858.",
    "sources": [
      "Mutiny Papers, I, NAIB; WWIM, III, p.6"
    ]
  },
  {
    "name": "Lal Dularelal Kayath",
    "origin": "Banpur",
    "description": "Resident of Banpur, Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Banpur region; captured by the British in the course of an engagement and sentenced to death, he was executed by hanging on 25 July 1857.",
    "sources": [
      "Mutiny Records, Poll Deptt, Vol. No. 52 (IX) (1858), MSAB; F/ Poll Supp. No. 355 (1858), NAI"
    ]
  },
  {
    "name": "Lal Khan",
    "origin": "distt. Hosangabad",
    "description": "Resident of distt. Hosangabad, Nerbudda Division, the Central Provinces and Berar (now Madhya Pradesh); local leader of the Mewatis; he joined the Uprising of 1857 and fought continuously against the British forces in the Nerbudda region by organizing Mewati rebel elements; while fighting against the British troops at Satwas, he was caught by the enemy and hanged in May 1857.",
    "sources": [
      "Mutiny Papers, I, NAIB; WWIM, III, p. 81"
    ]
  },
  {
    "name": "Lalkhan",
    "origin": "Raghogarh",
    "description": "Resident of Raghogarh, Madhya Pradesh; he participated in the Uprising of 1857 and fought the British forces in his region; he was captured by the British in the course of an engagement and executed by hanging on 17 October 1857.",
    "sources": [
      "Mutiny Records, F/ Poll Consut Nos. 581-92 (1857), NAI"
    ]
  },
  {
    "name": "Lalla Shah",
    "origin": "Dilahri Hirdaypur",
    "description": "Resident of Dilahri Hirdaypur, distt. Narsinghpur, Nerbudda Division, the Central Provinces and Berar (now Madhya Pradesh); prince of Dilahri Hirdaypur; joined the Uprising of 1857 by organizing the rebels locally; played a prominent role in attacking the British occupied places in Narsinghpur district in 1857; in the course of fighting, he was caught by the British and executed by hanging in May 1858.",
    "sources": [
      "Mutiny Papers, Vol. I, NAIB; WWIM, III, p. 185"
    ]
  },
  {
    "name": "Madari Patel",
    "origin": "the Jabalpur region",
    "description": "Resident of the Jabalpur region, Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces at several places in the Sagar region; captured by the British in the course of an engagement, he was executed by hanging on 14 December 1857.",
    "sources": [
      "Mutiny Records, Poll Deptt, F. No. 10 (1857), MPSAB"
    ]
  },
  {
    "name": "Madho Lalla",
    "origin": "Narsinghpur",
    "description": "Resident of Narsinghpur, Madhya Pradesh; Patwari; he joined the rebel force of his area during the Uprising of 1857 and fought the British on several occasions in the Sagar region; he was captured by the British in the course of an engagement in 1857 and executed by hanging.",
    "sources": [
      "Mutiny Records, Poll Deptt, F. No. 10 B. No. 44 (1857), MPSAB; TFWI, p. 61"
    ]
  },
  {
    "name": "Mahadev Shashtri",
    "origin": "Gwalior",
    "description": "Resident of Gwalior, Madhya Pradesh; he joined hands with the rebels of his region during the Uprising of 1857 and fought the British forces in the Gwalior region; he was captured by the British during their attacks on the rebels and executed by hanging on 6 March1858.",
    "sources": [
      "Mutiny Records, Poll Deptt, Vol. No. 56 (1859), MSAB; F/ Poll. Consut No. 177 (1858), NAI"
    ]
  },
  {
    "name": "Mahibullah",
    "origin": "Nimar",
    "description": "Resident of Nimar, Central India Agency, Indore, (now Madhya Pradesh); joined the armed rebel forces of the Uprising of 1857 against the British rule in the Nimar region in 1857; while fighting against the British ruler at Mandleshwar, he was caught by the British troops and transported for life in a penal colony where he died in detention.",
    "sources": [
      "Mutiny Papers, I, NAIB; WWIM, III, pp. 85- 86"
    ]
  },
  {
    "name": "Mandhata",
    "origin": "Barkhedi",
    "description": "Resident of Barkhedi, Saugor (Sagar), Madhya Pradesh; he joined the rebel force of his area during the Uprising of 1857 and fought the British armies in the Sagar region; he was captured by the British in the course of an encounter and executed by hanging on 18 February 1858.",
    "sources": [
      "Mutiny Records, F/ Poll Supp. Proc. No. 1351 (1859), NAI"
    ]
  },
  {
    "name": "Manju Shah",
    "origin": "Nimar",
    "description": "Resident of Nimar, the Central India Agency, Indore, (now Madhya Pradesh); took part in the Uprising of 1857 against the British in the Nimar region; he was caught by the British forces during an engagement at Mandaleshwar in 1857 and transported for life; died in detention in a British overseas colonial jail.",
    "sources": [
      "Mutiny Papers, I, NAIB; WWIM, III, p.88"
    ]
  },
  {
    "name": "Manjushah",
    "origin": "Mandleshwar",
    "description": "Resident of Mandleshwar, Madhya Pradesh; he joined the rebels of his area during the Uprising of 1857 and fought the British forces in the Nimar region; he was captured by the British in the course of an engagement and sentenced to death in 1858.",
    "sources": [
      "Mutiny Records, Poll Deptt, Vol. No. 60 (1859), MSAB"
    ]
  },
  {
    "name": "Mardan Singh",
    "origin": "Madhya Pradesh",
    "description": "Resident of Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Sagar region; he was captured by the British in the course of an engagement. He was executed by hanging on 5 April 1858.",
    "sources": [
      "Mutiny Records, Rev. Deptt, F. No. 19 (1859), MPSAB"
    ]
  },
  {
    "name": "Maya Ram",
    "origin": "Mandaleshwar",
    "description": "Belonged to Mandaleshwar, Central India Agency, Indore, (now Madhya Pradesh); joined the anti- British rebel forces and took part in fighting the British in the Nimar region during the Uprising of 1857; he was captured by the enemy in 1859 and on the charges of sedition and rebellion against the British, he was transported for life in a penal colony; died in detention.",
    "sources": [
      "Mutiny Papers, Vol. III, NAIB; WWIM, III, p.90"
    ]
  },
  {
    "name": "Meena",
    "origin": "Imlea",
    "description": "Resident of Imlea, Rewa, the North-Western Provinces (now Madhya Pradesh); Bhoonhar; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces on several occasions; caught by the British during an engagement, he was accused of plundering the British property and rebellion against the British, sentenced to death and hanged in 1858.",
    "sources": [
      "Mutiny Records, NWP, Fatehpur Mutiny Basta (Ur./ Per. Srs.), UPRAA"
    ]
  },
  {
    "name": "Meharban Singh alias Jangi Raja",
    "origin": "Hirapur",
    "description": "Resident of Hirapur, distt. Narsinghpur, Nerbudda Division, Central Provinces, and Berar (Madhya Pradesh); s/o Raja Hariday Shah; took part in the revolt of 1857 against the British authority; he raised an anti-British rebel force and led it to fight against the British troops in Narsinghpur, Damoh and Jubbulpore districts; later his troops were defeated by the British reinforcement under Captain Ternan and Captain Woolley in a battle; Jangi Raja died in action.",
    "sources": [
      "Mutiny Papers, III, NAIB; WWIM, III, pp. 90-91"
    ]
  },
  {
    "name": "Mohammad Rajab",
    "origin": "Mahidpur",
    "description": "Resident of Mahidpur, Madhya Pradesh; he took part in the Uprising of 1857 and fought the British forces in the Mahidpur region; he was caught by the British troops during an engagement in 1857 and hanged.",
    "sources": [
      "Mutiny Records, Poll Deptt, Vol. No. 44 (I) (1858), MSAB; WWIM, III, p.97"
    ]
  },
  {
    "name": "Mohammad Rajah",
    "origin": "Mahidpur State",
    "description": "Hailed from Mahidpur State, Madhya Pradesh; he took part in the Uprising of 1857 by joining the newly organized rebel forces of Mahidpur and fought against the British in the Mahidpur area; captured by the British in November 1857, he was hanged in Mahidpur State.",
    "sources": [
      "Mutiny Papers, Vol. III, NAIB; WWIM, III, p.97"
    ]
  },
  {
    "name": "Mohammad Saleem",
    "origin": "Dhar",
    "description": "Belonged to Dhar, Madhya Pradesh; s/o Mohammad Azeem; he joined hands with the rebels of the Dhar region during the Uprising of 1857 and fought the British on several occasions; he was caught by the British during an encounter and executed on 11 January 1858 at Mandaleshwar.",
    "sources": [
      "Mutiny Records, Poll Deptt, Vol. No. 44 (I) (1858), MSAB; WWIM, III, p.90"
    ]
  },
  {
    "name": "Mohammad Shah",
    "origin": "1818",
    "description": "Born in 1818, Kurwai Bheirasa, Malwa region (now Madhya Pradesh); joined the anti- British forces during the Uprising of 1857 and took part in the rebel activities at Ambapani, Sehore and Rahatgarh; participated in Nawab Fazil Mohammad Khan’s occupation of Rahatgarh Fort from the British hands in October 1857; fought against Hugh Rose’s British force that came to re-occupy the fort; captured in the encounter and tried for his anti- British role, Mohammad Shah was hanged in the front gate of Rahatgarh fort on 29 January 1858.",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB"
    ]
  },
  {
    "name": "Mohan Lal",
    "origin": "Amjhera State (Indore State)",
    "description": "Resident of Amjhera State (Indore State), the Central India Agency of Holkar State (now Madhya Pradesh); Cavalry Officer of Amjhera State; he joined the rebel forces and played an important role in raiding the British Residency at Bhopawar in October 1857, and also plundered the British riches from the run-away troops of Hutchinson; he, however, surrendered the looted wealth from the Britishers to the Amjhera State treasury; captured by the pro-British Holkar Indore State troops and handed over to the British, he was executed at Indore in 1857.",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB; WWIM, III, p.98"
    ]
  },
  {
    "name": "Mohun",
    "origin": "Imlea",
    "description": "Resident of Imlea, Rewa, the North-Western Provinces (now in Madhya Pradesh); Lohar; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces on several occasions; caught by the British during an engagement, he was hanged in 1858.",
    "sources": [
      "Mutiny Records, Jhansi Mutiny Basta, UPRAA"
    ]
  },
  {
    "name": "Molvi Saadat Ali Khan",
    "origin": "Indore",
    "description": "Resident of Indore, Madhya Pradesh; he joined hands with the rebel forces of the Indore region during the Uprising of 1858; and fought the British-loyal forces on several occasions; he was killed by the Holkar army in the course of an engagement in 1857.",
    "sources": [
      "Mutiny Records, Poll Deptt. Part-I, Vol. No. 44 (1858), MSAB"
    ]
  },
  {
    "name": "Mowassa Naik",
    "origin": "Barwani",
    "description": "Resident of Barwani, Madhya Pradesh; Chieftain of the Khetia (tribe); joined the rebel forces led by his nephew Bhima Naik in 1857; the group of rebels he led had taken part in several raids against the British troops on the Bombay-Agra Highway; he laid down his life in an encounter with the British forces.",
    "sources": [
      "Mutiny Papers, Vol. I, NAIB; WWIM, III, p.105"
    ]
  },
  {
    "name": "Muheeoodeen",
    "origin": "of Jubulpoor",
    "description": "Belonged to of Jubulpoor, , (now in Madhya Pradesh); Shaikh; he was a Duffadar  in the Contingent Guards of the Agra Central Prison under the British Government; he left the British employment during the Uprising of 1857 and joined hands with the rebels for fighting against the British rule; he died in 1858 while confronting the advancing British army.",
    "sources": [
      "Jabalpur",
      "Dafadar",
      "Mutiny Records, Agra Mutiny Basta, UPRAA; Poll Deptt, Vol. No.53 (X) (1858), MSAB"
    ]
  },
  {
    "name": "Mukund Singh",
    "origin": "Sunoti Chandpura",
    "description": "Resident of Sunoti Chandpura, Madhya Pradesh; s/o Chamundrai; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces; captured by the advancing British army in 1858 in the course of an engagement, he was shot dead.",
    "sources": [
      "Mutiny Records, F/ Poll Proc. No. 357 (3) (1859), NAI"
    ]
  },
  {
    "name": "Mundi",
    "origin": "Sihora",
    "description": "Resident of Sihora, Madhya Pradesh; he participated in the Uprising of 1857 and fought the British forces at several places in the Jabalpur region; he was caught by the British during an engagement and sentenced to death in 1858.",
    "sources": [
      "Mutiny Records, Poll Deptt, F. No. 3 (1858), MPSAB"
    ]
  },
  {
    "name": "Nabi Baksh Kashmiri",
    "origin": "Saugar",
    "description": "Resident of Saugar , Jubbulpore Division, the Central Provinces and Berar (now Madhya Pradesh); served as Deputy Post-Master at Sagar District Post Office; he had been providing the valuable services to the rebel leaders by breaking the seals of confidential letters of the British authorities and providing secret information as to the British troop movements and manoeuvres; he was arrested, found guilty and executed by hanging in front of the Saugor fort.",
    "sources": [
      "Sagar",
      "Mutiny Papers, Vol. III, NAIB; WWIM, III, p. 103"
    ]
  },
  {
    "name": "Namdar Khan",
    "origin": "the Saugor Sagar) region",
    "description": "Resident of the Saugor Sagar) region, Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Sagar region; he took part in the defence of the Rahatgarh fort; after the fall of the fort, he was executed by hanging on 25 February 1858.",
    "sources": [
      "Mutiny Records, F/ Poll Supp. Proc. No. 1493 (1859), NAI"
    ]
  },
  {
    "name": "Namdhar Khan",
    "origin": "Jubbulpore (now Madhya Pradesh)",
    "description": "Resident of Jubbulpore (now Madhya Pradesh); he took part in the Uprising of 1857 against the British in the Saugor (Sagor) region; joined the anti-British rebel forces of Nawab Fazil Mohammad Khan in occupying the Rahatgarh fort in October 1857; he fought against Hugh Rose’s British force who came to reoccupy the Rahatgarh fort in January 1958; captured in the encounter and tried for his anti-British role, he was executed by hanging at Rahatgarh fort on 29 January 1858.",
    "sources": [
      "Mutiny Papers, Vol. IV, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB"
    ]
  },
  {
    "name": "Nana Jagtap",
    "origin": "Nimar",
    "description": "Resident of Nimar, the Central India Agency (now Madhya Pradesh); a prominent leader of the Bhil tribe, he took part in the Uprising of 1857 against the British; he raised an anti-British rebel force and joined the Battle of Beejagarh against the British, defeated and captured from the battlefield, he and some of his followers were hanged at Khargone by the British force in 1857.",
    "sources": [
      "Mutiny Papers, Vol. VI, NAIB; WWIM, III, p.105"
    ]
  },
  {
    "name": "Nanhe Gond",
    "origin": "Sumanipur",
    "description": "Resident of Sumanipur, Saugor (Sagar), Madhya Pradesh; he joined hands with the rebel forces of his area during the Uprising of 1857 and fought the British in the Sagar region; he was caught by the British in the course of an engagement; he was executed by hanging in July 1857.",
    "sources": [
      "Mutiny Records, F/ Poll, Const. Nos. 581-92 (1857), NAI"
    ]
  },
  {
    "name": "Nanhen Khan",
    "origin": "Madhya Pradesh",
    "description": "Resident of Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces on several occasions; he was caught by the British in the course of an encounter and executed by hanging on 28 July 1857.",
    "sources": [
      "Mutiny Records, F/ Poll, Const. nos. 559-73 (1857), NAI"
    ]
  },
  {
    "name": "Nanhen Rajput",
    "origin": "Madhya Pradesh",
    "description": "Resident of Madhya Pradesh; he provided financial support to the rebels of his area during the Uprising of 1857 and also fought the British forces in the Sagar region; captured by the British in the course of an encounter, he was executed by hanging on 14 July 1857.",
    "sources": [
      "Mutiny Records, Poll Deptt, F. No. 16 (1857), MPSAB"
    ]
  },
  {
    "name": "Nannhey Rajput",
    "origin": "distt. Saugor (Sagar)",
    "description": "Resident of distt. Saugor (Sagar), Jubbulpore (Jabalpur), the Central Provinces and Berar (now Madhya Pradesh); he organized the rebel force in Saugor and fought against the British during the Uprising of 1857; he continuously thwarted the British troop movements in Saugor district; he and his rebel followers were arrested by the reinforced British troops and executed on 14 July 1857.",
    "sources": [
      "Mutiny Papers, Vol. VI, NAIB; WWIM, III, p. 106"
    ]
  },
  {
    "name": "Narayan Suryavanshi",
    "origin": "Punasa",
    "description": "Resident of Punasa, Nimar, Madhya Pradesh; he joined hands with the rebel force of his area during the Uprising of 1857 and fought the British in the Nimar region; he was captured by the British troops in the course of an engagement; he was executed by hanging on 6 March 1858.",
    "sources": [
      "Mutiny Records, F/ Poll. Const. No. 177 (1858), NAI"
    ]
  },
  {
    "name": "Narsingh",
    "origin": "Nimar",
    "description": "Resident of Nimar, the Central India Agency, Madhya Pradesh; participated in the Uprising of 1857; he was one of the prominent organizers of anti-British rebel forces in the Nimar region; he fought against the British at Mandaleshwar in August 1859; he was caught and executed.",
    "sources": [
      "Mutiny Papers, Vol. I, NAIB; WWIM, III, p.107"
    ]
  },
  {
    "name": "Narwar Shah",
    "origin": "Dhilwar",
    "description": "Resident of Dhilwar, distt. Narsinghpur, Nerbudda Division, the Central Provinces and Berar (now Madhya Pradesh); took part in the Uprising of 1857; on charges of his role in the Bundella Rebellion (1842) he was imprisoned by the British for 13 years and released in 1855; when Narsinghpur rose in revolt he joined the rebel forces and participated in raiding the British outpost at Tendulheda; in the course of fighting he was captured and executed by the British troops.",
    "sources": [
      "Mutiny Papers, Vol. V, NAIB; WWIM, III, p. 108"
    ]
  },
  {
    "name": "Nasir Khan",
    "origin": "1806",
    "description": "Born in 1806, v. Mohammadgarh, Bashoda, Bhopal State (now Madhya Pradesh); s/o Nazib Khan Afghani; joined the anti-British rebel forces during the Uprising of 1857 in Ambapani under the leadership of Nawab Fazil Mohammad Khan; took part in the rebel activities in the Bundelkhand region; participated in a series of attacks on British troops stationed in Sehore and Rahatgarh in 1857; he fought against Hugh Rose’s British force who came to re-occupy the fort; captured and tried for anti-British role, he was executed by hanging near the front gate of Rahatgarh fort on 29 January 1858.",
    "sources": [
      "Mutiny Papers, Vol. IV, NAIB"
    ]
  },
  {
    "name": "Nawab Fazil Mohammad Khan",
    "origin": "1823",
    "description": "Born in 1823, resident of Ambapani, Bhopal State, the Central India Agency (now Madhya Pradesh); Jagirdar; s/o Wahi Mohammad Khan; raised a strong anti-British rebel force during the Uprising of 1857; leading attacks on the British settlements at Ambapani and Sehore, he occupied the Rahatgarh fort in October 1857. His army awaited the arrival of British reinforcement at Rahatgarh and it did reach the place under the command of Sir Hugh Rose on 24 January 1858. In the battle that began on 24 January and lasted for 4 days, the Nawab faced reverses and decided to leave for the jungles. While leaving he and his close followers were rounded up by the British troops. The arrested Nawab was hung at the entrance of the Rahatgarh fort on 29 January 1858; twenty-four his followers were also executed by hanging.",
    "sources": [
      "Mutiny Papers, Vol. I, NAIB; WWIM,III,p.41"
    ]
  },
  {
    "name": "Nihal",
    "origin": "Nimar",
    "description": "Resident of Nimar, the Central India Agency (now Madhya Pradesh); he organized an anti-British rebel force and joined the Uprising of 1857 by attacking the British at Mandaleshwar in August 1859; while fighting, he was captured by the British troops from the battle front and executed.",
    "sources": [
      "Mutiny Papers, Vol. IV, NAIB; WWIM, III, p. 110"
    ]
  },
  {
    "name": "Noor Khan",
    "origin": "Saugor",
    "description": "Hailed from Saugor, Jubbulpore Division, the Central Provinces and Berar (now Madhya Pradesh); took part in the Revolt of 1857 against the British rule in Saugor district; while attacking the British outposts in Nerbudda Division he and his followers were overpowered by the British troops; captured from the battlefield, he was executed on 20 July 1857.",
    "sources": [
      "Mutiny Papers, Vol. I, NAIB; WWIM, III, p. 111"
    ]
  },
  {
    "name": "Noora",
    "origin": "Nimar",
    "description": "Resident of Nimar, the Central India Agency (now Madhya Pradesh); he joined the rebel forces during the Uprising of 1857 and took part in confronting the British at Mandaleshwar; in the course of fighting, he was captured by the British troops and sentenced to transportation for life; he expired in an overseas jail.",
    "sources": [
      "Mutiny Papers, Vol. III, NAIB; WWIM, III, p. 111"
    ]
  },
  {
    "name": "Padam",
    "origin": "Shahgarh",
    "description": "Resident of Shahgarh, Madhya Pradesh; he joined hands with the rebels during the Uprising of 1857 and fought the British forces in the Shahgarh region; he was captured by the advancing British army in the course of an engagement and executed by hanging on 9 April 1858.",
    "sources": [
      "Mutiny Records, Rev. Deptt, F. No. 19 (1858), MPSAB"
    ]
  },
  {
    "name": "Paharsingh",
    "origin": "Garhakota",
    "description": "Resident of Garhakota, Saugor (Sagar), Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Sagar region; he was captured by the British in the course of an engagement and executed by hanging on 5 March 1858.",
    "sources": [
      "Mutiny Records, F/ Poll Proc. No.1493 (1859), NAI"
    ]
  },
  {
    "name": "Pancham",
    "origin": "1807",
    "description": "Born in 1807, Guzli, distt. Saugor , Jubbulpore Division, the Central Provinces and Berar (now Madhya Pradesh); s/o Kulla Sangar; joined the anti-British rebel forces during the Great Revolt of 1857 in Saugor district under the leadership of Nawab Fazil Mohammad Khan of Ambapani; he fought from 24 to 28 January 1858 against the British troops who came to re-occupy Rahatgarh Fort under Hugh Rose; in the course of the fighting he was caught by the enemy and executed by hanging on 29 January 1858.",
    "sources": [
      "Sagar",
      "Mutiny Papers, Vol. III, NAIB; Poll Deptt, Vol. No.52 (IX) (1858), MSAB"
    ]
  },
  {
    "name": "Pancham",
    "origin": "Mooli",
    "description": "Resident of Mooli, Saugor (Sagar), Madhya Pradesh; s/o Kalla Khangar; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces at several places in the Sagar region; he was caught by the British in the midst of an engagement in 1857 and summarily executed by hanging.",
    "sources": [
      "Mutiny Records, Rev. Deptt, F. No. 19 (1857), MPSAB"
    ]
  },
  {
    "name": "Param Shukh",
    "origin": "1808",
    "description": "Born in 1808, Rahatgarh, Saugor (now Sgaor, Madhya Pradesh); s/o Balkishan; Washerman; took part in the Uprising of 1857 against the British in the Saugor area; he joined Nawab Fazil Mohammad Khan’s anti-British rebel troops in taking the Rahatgarh fort away from the British in October 1857; he encountered the British  reinforcement under Hugh Rose at the Rahatgarh Fort in January 1858; captured by the enemy and charged with aiding the rebellion and rebellion against the British authority, Param was executed by hanging at Rahatgarh Fort on 29 January 1858; along with twenty four other rebels.",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB"
    ]
  },
  {
    "name": "Peer Khan",
    "origin": "Patan",
    "description": "Resident of Patan, Madhya Pradesh; he joined hands with the rebel forces of his area during the Uprising of 1857 and fought the British in his region; captured by the British in the course of an engagement, he was executed by hanging in 1857.",
    "sources": [
      "Mutiny Records, Poll Deptt, Vol. No. 44 (I) (1858), MSAB"
    ]
  },
  {
    "name": "Piare",
    "origin": "Narsinghpur",
    "description": "Resident of Narsinghpur, Madhya Pradesh; he joined the Uprising of 1857 and fought the British forces at several places of his region; he was captured by the British during an encounter and executed by hanging in 1857.",
    "sources": [
      "Mutiny Records, Poll. Deptt, F. No. 10, B. No. 44 (1857), MPSAB; TFWI, I, p. 61"
    ]
  },
  {
    "name": "Pooran",
    "origin": "Saugor (Sagar)",
    "description": "Resident of Saugor (Sagar), Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Sagar region; captured by the British in the course of an engagement, he was executed by hanging on 19 April 1858.",
    "sources": [
      "Mutiny Records, F/ Poll. Supp Proc. No. 1493 (1859), NAI"
    ]
  },
  {
    "name": "Poorun",
    "origin": "Imlea",
    "description": "Resident of Imlea, Rewa, the North-Western Provinces (now in Madhya Pradesh); he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces on several occasions; he was caught by the British in the midst of an engagement, accused of plundering the British property and rebellion against the British, and hanged in 1860.",
    "sources": [
      "Mutiny Records, Jhansi Mutiny Basta, UPRAA"
    ]
  },
  {
    "name": "Puhang Shah",
    "origin": "Pathari",
    "description": "Resident of Pathari, Rahatgarh, distt. Saugor (now Sagor, Madhya Pradesh); joined the anti-British rebel forces during the Uprising of 1857 in Rahatgarh; arrested by the British troops at the time their recovery of Rahatgarh Fort and charged with rebellion against the British, Puhang Shah was executed by hanging at Rahatgarh Fort on 29 January 1858.",
    "sources": [
      "Mutiny Papers, Vol. IV, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB"
    ]
  },
  {
    "name": "Puttasingh",
    "origin": "Madhya Pradesh",
    "description": "Resident of Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Sagar region; he was caught by the British in the course of an encounter in 1857 and executed by hanging.",
    "sources": [
      "Mutiny Records, F/ Poll. Const. No. 2563 (1858), NAI"
    ]
  },
  {
    "name": "Qadir Khan",
    "origin": "v. Katangi",
    "description": "Resident of v. Katangi, Madhya Pradesh; he joined an anti-British rebel force and participated in the Uprising of 1857. He was killed while fighting against the British troops in 1857.",
    "sources": [
      "Mutiny Papers, Vol. I, NAIB; WWIM, III, p. 116"
    ]
  },
  {
    "name": "Qaim Khan",
    "origin": "Nimar",
    "description": "Resident of Nimar, the Central India Agency (now Madhya Pradesh); he joined a rebel group and took part in the Uprising of 1857 at Mandaleshwar; he was captured by the British forces in the course of the fighting and sentenced to transportation for life; passed away in an overseas jail.",
    "sources": [
      "Mutiny Papers, Vol. I, NAIB; WWIM, III, p.116"
    ]
  },
  {
    "name": "Radha Govind",
    "origin": "the Bundelkhand region",
    "description": "Belonged to the Bundelkhand region, Madhya Pradesh; he led a group of rebels during the Uprising of 1857 and fought the British forces at several places in the Bundelkhand region; he was killed by the British army in the course of an encounter in December 1857.",
    "sources": [
      "Mutiny Records, Poll Deptt, Vol. No. 44 (I) (1858), MSAB; WWIM, III, p.117"
    ]
  },
  {
    "name": "Raghunath Shah alias Lal Shah",
    "origin": "Madanpur",
    "description": "Resident of Madanpur, Narsinghpur, Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces at several places in the Madanpur region; he was captured by the British in the course of an engagement and executed by hanging on 17 January 1858.",
    "sources": [
      "Mutiny Records, Poll. Deptt. F. No. 1 (1858), MPSAB"
    ]
  },
  {
    "name": "Ragunathsahi",
    "origin": "Jubbulpore (Jabalpur)",
    "description": "Resident of Jubbulpore (Jabalpur), Saugor and Nerbudda Division, the Central Provinces and Berar (now Madhya Pradesh); a prince of the ruling Gond clan of Jubbulpore; s/o Shankarsahi (king of Jubbulpore). Along with his father he fought in 1857 for freeing their kingdom from the British occupation; continued the struggle for about three months. He inspired the 52nd Native Infantry soldiers of the British-Indian Army to shift their loyalty and join the rebels in 1857 against the British; for this act of incitement, being captured by the British and detained in a jail; along with his father, Shankarsahi, he was blown off by cannon on 18 September 1857.",
    "sources": [
      "Mutiny Papers, Vol. V, NAIB; MPGJ,p.82"
    ]
  },
  {
    "name": "Raja Bakhat Bali",
    "origin": "Amjhera State (now in Indore)",
    "description": "Resident of Amjhera State (now in Indore), the Central India Agency of Holkar State (now Madhya Pradesh); the ruler of Amjhera; he joined hands with the rebels rallying themselves against the British forces in Indore and Dhar areas during the Uprising of 1857; his troops captured the fortress of Dhar in the second week of October 1857 from British occupation but could not retain it for long against British reinforcement and their use of heavy artillery. He did not, however, give up and readied his followers at Lalgarh fort of Amjhera state and enlisted hundreds of local tribesmen. Before the confrontation could actually take place, the Raja was persuaded to go out of the fort for taking port in some negotiation started by his chief minister, Gulab Rao. When he was on the way, the British attacked and occupied the fort. Raja Bakhat was waylaid, captured, tried, sentenced to death and hanged on 10 February 1858.",
    "sources": [
      "Mutiny Papers, II, NAIB; WWIM, III, pp. 16-17"
    ]
  },
  {
    "name": "Raja Bakhtuwar Singh",
    "origin": "Amjhera State of Malwa (now in distt Indore)",
    "description": "Ruler of Amjhera State of Malwa (now in distt Indore), Madhya Pradesh; s/o Rao Ajit Singh; he participated in the Uprising of 1857 and mobilised all his armymen and resources in attacking the British forces; initially he succeeded in capturing some regions in Malwa but repulsed later by the British; his rebel army then reached Mandsaur to join the forces of Shahzada Firozshah (a rebel leader). Their combined forces in the Lalgarh Fort resisted the British with the support of the local tribes. Thereafter, however, the British succeeded in capturing the Raja when he was on his way to Indore on 11 November 1857; he was executed by hanging on 10 February 1858.",
    "sources": [
      "Mutiny Records, Poll. Deptt. Vol. No. 60 (1859), MSAB; WWIM III. P. 16"
    ]
  },
  {
    "name": "Raja Gangadhar",
    "origin": "v. Mangar",
    "description": "Resident of v. Mangar, distt. Damoh, Jubbulpore Division, the Central Provinces and Berar (now Madhya Pradesh); Raja of Mangarh State; in collaboration with the patriotic leaders of this region, he rose against the British during the Uprising of 1857, and had put them into difficulty in the areas adjoining his State. Later, the British forces nabbed him with the help of the pro-British neighbouring Panna State’s king; the Raja Gangadhar was executed by the British soon after his capture.",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB; WWIM, III, p.43"
    ]
  },
  {
    "name": "Raja Kishore Singh Lodhi",
    "origin": "Hindoria",
    "description": "Resident of Hindoria, distt. Damoh, Jubbulpore Division, the Central Provinces and Berar (now Madhya Pradesh); ruler of Hindoria; he organized during the Uprising of 1857 an armed rebel force with the help of local patriots, and led them in attacking the British position at Damoh and capturing it; humiliated, the British took the help of Panna State and their joint forces, led by General Whitlock, tried to reoccupy Damoh from Raja Kishore Singh; in the furiously fought battle, the British succeeded in forcing the rebels to evacuate the Damoh fort; the Raja managed to escape into the jungle, but died of injuries he already suffered.",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB; WWIM, III, p. 77"
    ]
  },
  {
    "name": "Raja Mardan Singh",
    "origin": "Chanderi State",
    "description": "Resident of Chanderi State, (now Madhya Pradesh); s/o king Morpahlad of Banpur Jagir (Chanderi State); riding on the wave of anti-British sentiments in his part of India in 1857, he built up a strong rebel force with the aim of putting an end to British dominance permanently from Chanderi State; his troops drove away the British from Lalitpur, Chanderi, Malthone, Khurai, Khaimlasa and Natiaoli; raided the British Cantonment of Sagar on 5 July 1857 and Rahatgarh on 17 September 1857, respectively. When the British had started striking back in 1858, he was forced to withdraw from Rahatgarh, Chanderi, and Banpur; compelled to surrender to Colonel Thornton on 5 July 1858; put behind the bars at Meerut and later transferred to Mathura jail, he died in detention on 22 July 1879; Chanderi State was merged with the British territories.",
    "sources": [
      "Mutiny Papers, I, NAIB; WWIM, III, p.89"
    ]
  },
  {
    "name": "Raja Sarjuprasad",
    "origin": "Vijayraghavgar",
    "description": "Ruler of Vijayraghavgar, Madhya Pradesh; he led the rebel forces of his area during the Uprising of 1857 and fought the British forces at several places; he was captured by the British in the course of an engagement and sentenced to transportation for life; he committed suicide at the time of his being transported to Rangoon in 1858.",
    "sources": [
      "Mutiny Records, F/ Poll, Const nos. 97-100 (1858), NAI"
    ]
  },
  {
    "name": "Raja Shankar Shah",
    "origin": "Jubbulpore(now Jabalpur)",
    "description": "Resident Jubbulpore (now Jabalpur), the Central provinces and Berar (now Madhya Pradesh); Prince of Garhmandala family of the Gond tribe; took part in the Uprising of 1857 against the British rule; he became the leader of the rebellious sepoys of the 52nd Native Infantry of the British-Indian Army in Jubbulpore in 1857; his plan to surreptitiously overpower the British Cantonment of Jubbulpore with his followers leaked out before it could be executed; hunted as the most wanted rebel leader, he was eventually caught by the British troops on 14 September 1857; accused of plundering, conspiring and rebellion against the British he was blown to death by canon on 18 September 1857 at Jabalpur.",
    "sources": [
      "Mutiny Papers, Vol. IV, NAIB; WWIM, III, p. 134"
    ]
  },
  {
    "name": "Rakshapal Srivastava",
    "origin": "Sohagpur",
    "description": "Resident of Sohagpur, distt. Shahdol, Bagelkhand Residency, the Central India Agency, Indore (now Madhya Pradesh); joined the rebel forces during the Great Revolt of 1857 against the Company raj in his locality in 1857; while fighting against the British troops he was knocked down and killed on the spot.",
    "sources": [
      "GA, MPSAB, Mutiny Papers, Vol. IV, NAIB; WWIM, III, p.141"
    ]
  },
  {
    "name": "Ram Kishan",
    "origin": "Hosangabad",
    "description": "Resident of Hosangabad, Nerbudda Division, the Central Provinces and Berar (now Madhya Pradesh); joined the anti-British rebel forces during the Uprising of 1857 in the Nerbudda region; became a big threat to British; the British took the assistance Daulat Rao of Raghogarh in cornering Ram Kishan, he was captured in Hosangabad district and executed.",
    "sources": [
      "GA, MPSAB, Mutiny Papers, Vol-I; WWIM, III, p. 121"
    ]
  },
  {
    "name": "Ram Nivas Chaube",
    "origin": "Jubbulpore",
    "description": "Resident of Jubbulpore, the Central Provinces and Berar (now Madhya Pradesh); took part in the Revolt of 1857 in Jubbulpore area by organizing an armed rebel force against the British rule; in a fierce battle fought between his men and the British troops he received a grievous wound and before could escape from the scene, he was arrested by the enemy and, put behind the bars in Jabalpur Central jail; died in detention there.",
    "sources": [
      "GA, MPSAB, Mutiny Papers, Vol. I; WWIM, III, p. 122"
    ]
  },
  {
    "name": "Ram",
    "origin": "Mahidpur",
    "description": "Resident of Mahidpur, Malwa, the Central Indian Agency (now in Madhya Pradesh); Tehsildar of Mahidpur. Joined the rebel sepoys of the Malwa contingent and took part in November 1857 in fighting the British, at Rawal near Jaora. After reestablishing the authority in the region, the British army arrested and hanged him for his involvement in the rising.",
    "sources": [
      "Mutiny Papers, Vol. VI, NAIB; FMM, p.8"
    ]
  },
  {
    "name": "Rama",
    "origin": "Nimar",
    "description": "Resident of Nimar, Malwa region, the Central India Agency, Indore, (now Madhya Pradesh); during the Uprising of 1857 he organized a rebel force of about 3000 Bhils, and attacked the British outposts situated in this region; later, his Bhil troops in collaboration with Thakur Daulat Ram of Reghogarh (in Guna district), occupied Satwas; he also instigated the Mewatis to rebel against the British; he fought a grim battle against the British force led by Captain Wood at Handia in October 1858; being defeated and captured by the British troops, he was executed in October 1858.",
    "sources": [
      "GA, MPSAB, Mutiny Papers, Vol-II; WWIM, III, p. 123"
    ]
  },
  {
    "name": "Ramkrishn",
    "origin": "Nemawar",
    "description": "Resident of Nemawar, Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Nemawar region; captured by the British in the course of an engagement, he was executed by hanging on 13 October 1857.",
    "sources": [
      "Mutiny Records, Poll Deptt, Vol. No. 56(1859), MSAB"
    ]
  },
  {
    "name": "Rani Avantibai Lodhi",
    "origin": "Ramgarh",
    "description": "Married to Vikramjit, Raja of Ramgarh in Mandla district, (Madhya Pradesh). Rani Avanti Bai Lodhi took up the reins of administration of the State in her hands (on behalf of the minor son, Amar Singh), following the Raja’s falling into mental illness. When the Raja died in 1851, the British authorities decided to pass over Ramgarh’s administration to a Court of Ward in total disregard of the Rani. She strongly resented the British action and remained aggrieved throughout till her opportunity to retaliate came in 1857 ñ the year the Great Revolt engulfed the Jabalpur-Mandla area. The Rani joined the rebel forces by commandeering the Ramgarh troops on horse-back and confronting the British in Sohagpur. Her heroism against Captain Washington’s British contingent at Shahpura drew admiration even from his enemies. Forcing the British to retreat from Shahpura, she joined other chieftains of Mandla later on for a decisive battle in the hilly region of Devhargarh. Defeated in the battle of Devhargarh on 1 April 1858, the Rani retreated to Ramgarh where she and her followers were encircled and defeated by the British. Captured by them and imprisoned, the Rani appeared to have died in captivity in August 1858.",
    "sources": [
      "JDR, Bundle Correspondence, Section ñ Political, F.No. 12 of 1857-58, B No 44, SAAMPB; MBM 1857, pp186-194 WWIM, III, pp 11-12; TFWI 1857, I, pp.166-67, 177-78, 180-81, 186-89, 214- 15, 244-45, 253-60"
    ]
  },
  {
    "name": "Ranjit Gond",
    "origin": "Saugor (Sagar)",
    "description": "Resident of Saugor (Sagar), Jubbulpore Division, the Central Provinces and Berar (now Madhya Pradesh); joined the revolt of 1857 against the British administration in the Saugor region; took a leading role in attacking the British outposts; while pursuing his rebellious activities, he was caught by the British troops and executed by them on 20 July 1857.",
    "sources": [
      "Mutiny Papers, VI, NAIB; WWIM, III, p. 124"
    ]
  },
  {
    "name": "Ranjit Rai Dikshit",
    "origin": "Dabhaura",
    "description": "Resident of Dabhaura, Satna, Jubbulpore Division, the Central Provinces and Berar (now Madhya Pradesh); Zamindar; raised a rebel force locally in the wake of the Uprising of 1857; in collaboration with Lal Ranmat Singh, prominent rebel leader of Baghelkhand region, he fought the British troops in Jubbulpore and Baghelkhand areas, and while confronting the pro-British Rewa State forces at Dabhaura, Ranjit Rai Dikshit laid down his life in the battlefield.",
    "sources": [
      "Mutiny Papers, II, NAIB; WWIM, III, p.36"
    ]
  },
  {
    "name": "Ranjitsingh",
    "origin": "Madhya Pradesh",
    "description": "Resident of Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces; he was killed by the British in the course of an engagement on 24 March 1858.",
    "sources": [
      "Mutiny Records, Rev Deptt, F. No. 19 (1857), MPSAB"
    ]
  },
  {
    "name": "Ranjorsingh",
    "origin": "Saurara",
    "description": "Resident of Saurara, Madhya Pradesh; Thanedar; he left the service and joined hands with the rebels of his area during the Uprising of 1857; he fought the British forces and was captured by the British in the course of an engagement; he was executed by hanging on 3 March 1858.",
    "sources": [
      "Mutiny Records, F/ Poll Supp. Proc. No. 135 (1859), NAI"
    ]
  },
  {
    "name": "Ranmat Singh",
    "origin": "1825",
    "description": "Born in 1825, resident of Rewa State, (now Madhya Pradesh); high ranked army officer of Rewa State. During the Uprising of 1857, he revolted against the colonial-British agency and forced the British Political Agent of Rewa State, Mr. Oswan, to flee; he also launched an attack on the British Resident of Nagod State. While in Ajaigarh State territories, he and his followers killed Keshri Singh, the General of Ajaigarh State force and invaded the British cantonment at Nowgaon (Bundelkhand). The British encountered serious challenges from Ranmat Singh and his men at the time of their regaining Bundelkhand and Baghelkhand. Their forces overpowered Ranmat when he took shelter at Jalpa Devi temple, brought him to the United Provinces, put him for the time being in the Agra Jail and hanged him on the auspicious day of Anant Chaturadashi in 1859.",
    "sources": [
      "Mutiny Papers, Vol. VI, NAIB; IR, I, pp.231- 32"
    ]
  },
  {
    "name": "Roshan Khan",
    "origin": "1818",
    "description": "Born in 1818, Bhopal State (now Madhya Pradesh); s/o Murad Khan; he enlisted himself in Nawab Fazil Mohammad Khan’s anti-British rebel forces; participated in attacking and throwing out the Britishers from Ambapani, Sehore and Rahatgarh areas during the Uprising of 1857; when the British reinforcement under Hugh Rose came to re-occupy the fort on 24 January 1858, Roshan Khan was captured by the troops and tried for plundering and rebellion against the British authority, Roshan was executed by hanging at the entrance of the Rahatgarh Fort on 29 January 1858.",
    "sources": [
      "Mutiny Papers, Vol. III, NAIB"
    ]
  },
  {
    "name": "Rughunundun",
    "origin": "Torekapoora",
    "description": "Resident of Torekapoora, Gwalior, (now Madhya Pradesh); Brahmin; he was a Sepoy in the A. Company of the British-Indian army; he left the British service during the Uprising of 1857 and fought against the British at several places; he died in 1858 while resisting the advancing British forces",
    "sources": [
      "Mutiny Records, NWP, Agra Mutiny Basta, UPRAA; Mil. Abst. Proc. NWP (1858-59), UPSAL"
    ]
  },
  {
    "name": "Rutari",
    "origin": "Mankehri",
    "description": "Resident of Mankehri, Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought and the British and the forces loyal to them; captured by the advancing British army in the course of an engagement, he was executed by hanging in 1859.",
    "sources": [
      "Mutiny Records, Poll Deptt, Vol. III, No. 43D (1859), MSAB"
    ]
  },
  {
    "name": "Sadaat Khan",
    "origin": "Indore",
    "description": "Resident of Indore, Holkar State, the Central India Agency (now Madhya Pradesh); served as a Cavalry Officer in the Holkar Indore Army; he was inspired in 1857 by the outbreak of Mutiny in the Northern Indian region, as well as by the Sepoy risings at Neemuch fort on 3 June and at Mahidpur on 9 or 10 June 1857. Taking the name of the Raja of Holkar State, he and his associates ñ Ban Gopal, Warlia Ali, etc. had attacked the British Residency at Indore around 8:40 a.m. on 1 July 1857; they had also been supported in this by the Mahidpur Contingent Infantry and the Bhil Corps of the British Indian Army. His troops defeated and captured the Residency and he proclaimed himself as the future Raja of Indore. The troops moved towards Delhi with the hope to join the larger force of the rebels, under the command of Emperor Bahadur Shah; on the way his troops were stopped and attacked by the British forces near Agra on 10 October 1857; Sadaat’s men suffered a setback and he had to withdraw on account of serious injuries; tried to regain the past momentum but failed. Passing thereafter through various ups and downs in life, mostly incognito and under a pseudonym (Akbar Khan), Sadaat was eventually given away in Banswara State by an old acquaintance in December 1873. Following the verification of his identity, Sadaat was executed at Indore in 1875.",
    "sources": [
      "Mutiny Papers, Vol. VI, NAIB; S.No.150, F.No.2, RAR, NAI; AIR, p.842; MPDGI, pp.100-02"
    ]
  },
  {
    "name": "Sadar Khan",
    "origin": "Indore",
    "description": "Resident of Indore, Holkar State, Central India Agency (now Madhya Pradesh); Risaldar in the Indore State Army. Under the leadership of his brother Sadaat Khan, Sadar took part in the rising against the British Residency at Indore on 1 July 1857; after defeating the British there, he and his followers moved towards Delhi with the hope to join the larger force of the Revolt of 1857 against British imperialism; before they could reach the destination, Delhi was re-occupied by the British forces; pushed back also from Agra, the British defeated his army and captured and executed Sadar Khan.",
    "sources": [
      "Mutiny Papers, Vol. V, NAIB; FMIM, p.131"
    ]
  },
  {
    "name": "Sadashiv Rao Govind",
    "origin": "Mahidpur",
    "description": "Resident of Mahidpur, Malwa region, Central India Agency, Indore, (now Madhya Pradesh); Amin by profession; played a prominent role in organizing the rebel troops, consisting of the Mewatis and the Walayatis, for taking part in the Uprising of 1857 in the Malwa region; his troops attacked the British cantonments and raided their outposts situated in the Mahidpur area; he was captured by the British in one of the clashes and sent on the gallows in 1857.",
    "sources": [
      "GA, MPSAB, Mutiny Papers, Vol. III; WWIM, III, p. 128"
    ]
  },
  {
    "name": "Sahe Ali",
    "origin": "Samitra",
    "description": "Resident of Samitra, Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces; he was captured by the British in the course of an engagement executed by hanging at Harda, Hoshangabad in 1858.",
    "sources": [
      "Mutiny Records, Judl Deptt, F. No. 31 (1858), MPSAB"
    ]
  },
  {
    "name": "Salukya Raya",
    "origin": "Malwa region",
    "description": "Resident of Malwa region, the Central India Agency, Indore, (now Madhya Pradesh); took part in the Revolt of 1857 against the British administration in the Malwa region; he fought under the leadership Raja Bakhtawar Singh of Amjhera and also participated in attacking the British Residency (of Amjhera) at Bhopawar in October 1857; captured in the course of the fighting by the pro-British Holkar-Indore State troops, he was executed by the British administrators at Indore.",
    "sources": [
      "Mutiny Papers, Vol. IV, NAIB; WWIM, III, pp. 130-31"
    ]
  },
  {
    "name": "Sarfaraz Khan",
    "origin": "Bhopal State",
    "description": "Resident of Bhopal State, the Central India Agency (now Madhya Pradesh); raised an anti-British rebel force at Sehore (near Bhopal), coinciding with the outbreak of revolt against the British rule in the northern parts of Central India in 1857; took part in attacking, destroying and plundering the British properties at Bhopal; closely associated with Nawab Adil Mohammad Khan of Bhopal and Shujat Khan Pindari; he was suddenly attacked near Mohammagarh (Vidisha district) by the pro-British Nawab of Basoda, Asaf Ali Khan. Taken aback, he suffered a setback in the battle, but before the enemy could arrest him, he committed suicide on 20 July 1859.",
    "sources": [
      "GA, MPSAB, Mutiny Papers, Vol. VI, NAIB; WWIM, III, p. 132"
    ]
  },
  {
    "name": "Shaikh Imam",
    "origin": "Jubbulpoor",
    "description": "Resident of Jubbulpoor, , (now in Madhya Pradesh); he was a Duffadar  with the Contingent Guards of the Agra Central Prison under the British Government; he left the British service during the Uprising of 1857 and joined the rebels; he fought the British at several places; he was killed in 1858 in the course of a British attack on the rebel position.",
    "sources": [
      "Jabalpur",
      "Dafadar",
      "Mutiny Records, Agra Mutiny Basta, UPRAA"
    ]
  },
  {
    "name": "Shaikh Mohammad",
    "origin": "Nimar",
    "description": "Belonged to Nimar, the Central India Agency (now Madhya Pradesh); joined the rebel forces during the Uprising of 1857; he was one among those who assembled the patriots of Nimar and fought jointly against the British at Mandleshwar (headquarters of Nimar) in 1859; in the course of the fighting he was captured by the British troops and executed in 1859",
    "sources": [
      "GA, MPSAB, Mutiny Papers, Vol. IV; WWIM, III, p.15"
    ]
  },
  {
    "name": "Shaikh Mohammad",
    "origin": "Nimar",
    "description": "Resident of Nimar, the Central India Agency (now Madhya Pradesh); joined the rebel forces during the Uprising of 1857; he also encouraged many others in Nimar to take part in the fight against the British rule at Mandleshwar (headquarters of Nimar) in 1859; in the course of an encounter, he was captured by the British troops and executed in 1859.",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB; WWIM, III, p.15"
    ]
  },
  {
    "name": "Shakti Singh",
    "origin": "Saugor (Sagar)",
    "description": "Resident of Saugor (Sagar), Madhya Pradesh; he organized a group of rebels during the Uprising of 1857 and fought the British forces in the Sagar region; captured by the British in the course of an engagement, he was executed by hanging on 9 April 1858.",
    "sources": [
      "Mutiny Records, F/ Poll, Const. Nos. 1493-8 (1859), NAI"
    ]
  },
  {
    "name": "Shankarsahi",
    "origin": "Jubbulpore (Jabalpur)",
    "description": "Resident of Jubbulpore (Jabalpur), Saugor and Nerbudda Division, the Central Provinces and Berar (now Madhya Pradesh); the Gond Raja, he played a leading role in the uprising of 1857 in Jubbulpore against the British, along with his son, Yuvaraj Ragunath Sahi; it (the uprising of Jabalpur) was the continuation of the outbreak of mutiny in Jabalpur Cantonment, following Sepoy Gadadhar Tiwari’s assault on the European officers on 16 June 1857; he encountered the British determinedly for about three months before he was captured with his son and blown off by a cannon on 18 September 1857.",
    "sources": [
      "Mutiny Papers, Vol. VI, NAIB; MPGJ, p.74"
    ]
  },
  {
    "name": "Sheikh Brunda",
    "origin": "1833",
    "description": "Born in 1833, Bhilsa (now Vidisha), Malwa region, the Central India Agency, Indore (now Madhya Pradesh); brother-in-law of Nawab Fazil Mohammad Khan; took part in the Uprising of 1857 against the British in Saugor district; inspired by his brother-in-law’s aim of driving the British out from Central India, he went to Rahatgarh and joined the rebel forces there; participated in confronting the British reinforcement under Hugh Rose at Rahatgarh fort from 24 to 28 January 1858; he fell into the British hands while fighting and executed by hanging on 29 January 1858.",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB; Poll Deptt, Vol. No.50 (VII) (1858), MSAB"
    ]
  },
  {
    "name": "Sheikh Mohammad",
    "origin": "Nimar",
    "description": "Hailed from Nimar, Holkar Indore, the Central India Agency (now in Madhya Pradesh). He, along with Dilsshev Khan, inspired and organized the State-owned army to revolt against the British authorities in Indore; the rebel force under Sheikh Mohammad attacked the Mandleshwar Cantonment in 1859 but was defeated; captured by the British, he was sentenced to death and executed in 1859.",
    "sources": [
      "Mutiny Papers, Vol. VI, NAIB; FMIM, p.133"
    ]
  },
  {
    "name": "Sheikh Najim",
    "origin": "Sewas (Begamganj)",
    "description": "Resident of Sewas (Begamganj), Madhya Pradesh; s/o Sheikh Ibrahim; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Sagar region; he also took part in the defence of the Rahatgarh fort and was captured by the British after the fall of the fort; he was executed by hanging on 25 February 1858.",
    "sources": [
      "Mutiny Records, F/ Poll, Supp. Proc. No. 1493 (1859), NAI"
    ]
  },
  {
    "name": "Sheikh Nazm",
    "origin": "Sewaj",
    "description": "Hailing from Sewaj, Begumganj, Bhopal, (Madhya Pradesh); s/o Sheikh Ibrahim; he joined the rebels in fighting against the British forces during the Uprising of 1857; he also participated in attacking and plundering the British establishments at Sehore and Rahatgarh areas under the leadership of Nawab Fazil Mohammad Khan of Ambapani; he was caught by the British troops at the time of their reoccupation of Rahatgarh fort in January 1858; on charges of treason and rebellion against the British, he was sentenced to death in 1858.",
    "sources": [
      "Mutiny Papers, Vol. III, NAIB; Poll Deptt, Vol. No.48 (V) (1858), MSAB"
    ]
  },
  {
    "name": "Sheikh Noor Khan",
    "origin": "Rahatgarh",
    "description": "Resident of Rahatgarh, distt. Saugor, (now Sagar, Madhya Pradesh); participated in the Uprising of 1857 against the British in Saugor district under the leadership of Nawab Fazil Mohammad Khan of Ambapani, participated in the overrunning of the British position at Rahatgarh Fort in October 1857; later in January 1858 he fought against the British offensive on Rahatgarh, and when faced with reverses, the rebels decided to leave the fort; while fleeing from the fort he and his fellow rebels were nabbed at Narsinghpur Marg by the British troops; charged with abetting war against the British, sentenced to be executed in 1858.",
    "sources": [
      "Mutiny Papers, Vol. III, NAIB; Poll Deptt, Vol. No.48 (V) (1858), MSAB"
    ]
  },
  {
    "name": "Sheikh Vrinda",
    "origin": "Bhilsa",
    "description": "Resident of Bhilsa, Madhya Pradesh; s/o Sheikh Vazir; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Bhilsa region; he also took part in the defence of the Rahatgarh fort and was captured by the British after the fall of the fort; he was executed by hanging on 25 February 1858.",
    "sources": [
      "Mutiny Records, F/ Poll, Supp. Proc. No. 1493 (1859), NAI"
    ]
  },
  {
    "name": "Shekh Muhammad",
    "origin": "Mandleshwar",
    "description": "Resident of Mandleshwar, Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Mandleshwar region; he was captured by the British in the course of an engagement and sentenced to death in 1858.",
    "sources": [
      "Mutiny Records, Poll Deptt, Vol. II, No. 3C (1859), MPSAB"
    ]
  },
  {
    "name": "Shekhlal Barkandaz",
    "origin": "Sohagpur",
    "description": "Resident of Sohagpur, Hoshangabad, Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in his region; captured by the British in the course of an engagement, he was sentenced to death in 1858.",
    "sources": [
      "Mutiny Records, Judl Deptt, F. No. 31 (1858), MPSAB"
    ]
  },
  {
    "name": "Shiv Din Patel alias Shiv Baksh Singh",
    "origin": "Betul",
    "description": "Resident of Betul, Nerbudda Division, the Central Provinces and Berar (now Madhya Pradesh); while participating in the Uprising of 1857 against the British rule in Nerbudda region, he was arrested along with his family members and servants by the British forces; sentenced to rigorous imprisonment in the Nagpur District Jail, he died in detention there.",
    "sources": [
      "Mutiny Papers, Vol. V, NAIB; WWIM, III, p.137"
    ]
  },
  {
    "name": "Shiva Lal",
    "origin": "1830",
    "description": "Born in 1830, Gans-Bashoda, the Central Provinces and Berar (now Madhya Pradesh); s/o Naubatrai Kaisht; took part in the Uprising of 1857 in Saugor region; he joined Nawab Fazil Mohammad Khan’s anti-British rebel troops during their freeing Rahatgarh Fort from British occupation in October 1857; while encountering the British attempts at re-occupying the Rahatgarh fort in January 1858, he was captured by the enemy; sentenced to death on charges of rebellion against the British, Shiv Lal was executed by hanging at Rahatgarh Fort on 29 January 1858 along with thirty rebels (approximately).",
    "sources": [
      "Mutiny Papers, Vol. I, NAIB"
    ]
  },
  {
    "name": "Shivpal",
    "origin": "Ganjbasanda",
    "description": "Resident of Ganjbasanda, Madhya Pradesh; s/o Naubatrai Kayasth; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Ganjbasanda region; he also took part in the defence of the Rahatgarh fort and was captured by the British after the fall of the fort; he was executed by hanging on 25 February 1858.",
    "sources": [
      "Mutiny Records, F/ Poll, Supp. Proc. No. 1493 (1859), NAI"
    ]
  },
  {
    "name": "Shujjat Khan",
    "origin": "Berchha",
    "description": "Hailed from Berchha, Bhopal State, the Central India Agency (now Madhya Pradesh); Pindari tribal chief; pensioner of Bhopal State Durbar; joined the anti-British rebel forces during the Revolt of 1857; he led his followers in the plundering and destroying of British properties at Berchha and also in driving the British out of Sehore in 1857; declaring himself as the Nawab of Berchha, he also collaborated with Adil Mohammad Khan (Jagirdar of Ambapani) for inflicting further blows on the British; later however, the British reinforcement succeeded in meeting his challenge and dragged him on the gallows on 1 January 1858 at Sehore; they also confiscated his properties by killing the heirs.",
    "sources": [
      "GA, MPSAB, Mutiny Papers, Vol. I; WWIM, III, pp. 138-139"
    ]
  },
  {
    "name": "Sirajuddin Khan",
    "origin": "Nimar",
    "description": "Resident of Nimar, the Central India Agency, Indore, (now Madhya Pradesh); joined and led the rebel forces in the Uprising of 1857 against the British at Mandleshwar; captured by the British troops at the time of their counterattack in 1859; he was sentenced to transportation for life; died in detention in the British overseas colonial jail.",
    "sources": [
      "GA, MPSAB, Mutiny Papers, Vol. I; WWIM, III, p. 24"
    ]
  },
  {
    "name": "Sita Ram",
    "origin": "Mandaleshwar",
    "description": "Belonged to Mandaleshwar, Nimar State, the Central India Agency, Indore, (now Madhya Pradesh); raised an independent rebel force by bringing in men from the Bheel and Bhilala tribes, and also persuaded the enraged soldiers from the Holkar State forces to join him in the Uprising of 1857 against the British rule; established contact with Bima Naik, a popular tribal rebel leader, as well as a close associate of Tatia Tope; Sitaramís followers took to attacking and plundering the British establishments in the Mandleshwar and Khargone areas in October 1857; he proved himself to be a serious threat to the British and Holkar-Indore State in Nimar and Narmada valley in 1857-58; defeated in a battle fought near Beejagarh Fort by the British troops during their reoccupation of this area on 9 October 1858, he died in action. His 78 rebel followers were captured and punished by the British administrators.",
    "sources": [
      "Mutiny Papers, Vol. III, NAIB; WWIM, III, p. 141"
    ]
  },
  {
    "name": "Sitaram Kanwar Bhilala",
    "origin": "Barwani",
    "description": "Resident of Barwani, Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Sagar region; he was shot dead by the British in the course of an encounter on 10 October 1858.",
    "sources": [
      "Mutiny Records, F/ Poll, Const. No. 2563 (1858), NAI"
    ]
  },
  {
    "name": "Sursee",
    "origin": "Dholi Bhowlee",
    "description": "Resident of Dholi Bhowlee, Barwani State, the Central India Agency (now Madhya Pradesh); mother of Bhim Naik, a prominent Bhil leader of Nimar; took part in the Uprising of 1857 against the British raj; supported her son’s resistance against foreign intrusion in the tribal inhabited areas; she was captured by the British troops near Saloda on 8 February 1859, following a serious encounter with troops at her command; she was imprisoned and tortured physically and mentally at Mandleshewar Fort, died in detention on 28 February 1859.",
    "sources": [
      "Mutiny Papers, Vol. II, NAIB; WWIM, III, pp.141-142"
    ]
  },
  {
    "name": "Sutee Purshad",
    "origin": "distt. Sheopur (now Madhya Pradesh)",
    "description": "Resident of distt. Sheopur (now Madhya Pradesh); ex-Raja; organized the anti-British rebel forces during the Uprising of 1857 and participated in attacking the British Residency and other outposts in Kanpur and its surrounding areas; caught at the time the British raids on the region in July 1857, sentenced to death on charges of rebellion, against the British in December 1857 and executed soon thereafter.",
    "sources": [
      "Mutiny Records, Kanpur Mutiny Basta, 1857, UPRAA"
    ]
  },
  {
    "name": "Tantya Bhil alias Mama",
    "origin": "v.Badada",
    "description": "Resident of v.Badada, the. Pandhana, Nimar, the Central India Agency (now Madhya Pradesh); a charismatic Bhil who led his tribe’s opposition to the British encroachment into its territories, as well as the subjection of its people to economic deprivation. He organised his men, armed with bows, arrows and spears, to launch an anti-British rising in Nimar, Dhar, Jhabua, Hosangabad and Malwa region. The insurgents’ adoption of guerrilla tactics had put the British into quite some difficulty. Though a number of his trusted lieutenants had either been killed or caught and hanged, Tantiya managed to continue the fight with his depleted following till 1889 when he was captured by the British in consequence of his brother-in-law’s treachery. Kept in Indore jail for some time and shifted to Jabalpur Central Jail, Tantiya was secretly hanged to avoid widespread Tribal commotion. His probable death by hanging was 19 October 1889.",
    "sources": [
      "H/ Poll, F.No.18/12/1889, NAI; MPDGN, p.121; TCIAI, p.18"
    ]
  },
  {
    "name": "Thakur Devi Singh Guntia",
    "origin": "Bargi",
    "description": "Resident of Bargi, Jubbulpore Division, the Central Provinces and Berar (now Madhya Pradesh); Zamindar; participated in the Uprising of 1857; took a leading role in attacking and burning down the Shahpur British establishment on 30 November 1857; fought continuously against the Britishers in Jubbulpore, Seoni and Narshingpur districts; his most remarkable encounter took place on 7 December 1857 when his 1,500 strong rebel troops faced the powerful British forces under Captain Woolen; defeated in the battle, he was captured by the British troops; tried later, sentenced to death and died on the gallows on 14 December 1857.",
    "sources": [
      "Mutiny Papers, Vol. VI, NAIB; WWIM, III, p. 35"
    ]
  },
  {
    "name": "Thakur Durjan Singh",
    "origin": "Dongar Salaiya",
    "description": "Resident of Dongar Salaiya, distt. Saugor (now Sagar), Jubbulpore (now Jabalpur); Central Provinces and Berar (now Madhya Pradesh); wealthy Zamindar; joined the rebel forces established by Dalganjan Singh of Singpur and actively took part in the Uprising of 1857 in Saugor Division against the British authorities; he was captured from the battlefield by the British troops, hurriedly brought to Deori temple compound and was hanged from a mango tree; confiscated all his movable and immovable properties.",
    "sources": [
      "Mutiny Papers, Vol. I, NAIB; WWIM, III, pp. 38-39"
    ]
  },
  {
    "name": "Thakur Ranmat Singh",
    "origin": "1814 resident of v. Kumhar",
    "description": "Born in 1814 resident of v. Kumhar, Rewa, Baghelkhand Residency, the Central India Agency (now Madhya Pradesh); s/o Mahip Singh; wealthy Zamindar; established a sizeable rebel force of 2500 (approximately) and divided it into groups, started attacking on the British outposts at Chandia, Kevati and Kanti from different directions during 1857-58; he built-up a close connection with other rebel leaders like Tatya Tope and also came under the influence of the Maharaja of Rewa; it was under the heavy pressure from the Maharaja of Rewa that he eventually surrendered to the British administration; tried on various charges, the Thakur was executed by the British at Surat (Gujarat).",
    "sources": [
      "GA, MPSAB, Mutiny Papers, Vol. III; WWIM, III, p. 125"
    ]
  },
  {
    "name": "Thakur Umrao Singh Lodhi",
    "origin": "distt. Mandla",
    "description": "Belonged to distt. Mandla, Jubbulpore Division, the Central Provinces and Berar (now Madhya Pradesh); wealthy Jagirdar; during the outbreak of the Great Revolt of 1857, he raised an armed following of 500, attacked the British establishments at Mandla and succeeded in ambushing by the British troops near Kheri; caught by the British troops later from the Bera forest areas, Lodhi was executed by hanging.",
    "sources": [
      "GA, MPSAB, Mutiny Papers, Vol. II; WWIM, III, p.149"
    ]
  },
  {
    "name": "Tulsiram",
    "origin": "Madhya Pradesh",
    "description": "Resident of Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Sagar region; he was captured by the British in the course of an engagement, he was executed by hanging in 1858.",
    "sources": [
      "Mutiny Records, Poll Deptt, Vol. No. 44 (I), (1858), MSAB"
    ]
  },
  {
    "name": "Udetsingh Dangi",
    "origin": "Madhya Pradesh",
    "description": "Resident of Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Sagar region; he was captured by the British in the course of an engagement and executed by hanging in 1857.",
    "sources": [
      "Mutiny Records, Poll Deptt, Vol. No. 44 (I), (1858), MSAB"
    ]
  },
  {
    "name": "Udit Dangi",
    "origin": "Saugor (now Sagar)",
    "description": "Hailed from Saugor (now Sagar), Jubbulpore Division, the Central Province and Berar (now Madhya Pradesh); joined the anti-British rebel forces during the Uprising of 1857; participated in raiding and plundering the British outposts in Saugor district in 1857; he was captured by the British troops at the time of their reoccupation of this area, they executed him on 20 July 1857. ]",
    "sources": [
      "GA, MPSAB, Mutiny Papers, Vol. II; WWIM, III, p. 149"
    ]
  },
  {
    "name": "Umraosingh Gontia",
    "origin": "Bargi",
    "description": "Resident of Bargi, Jabalpur, Madhya Pradesh; s/o Devisingh Gontia; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces; he was captured by the British in the course of an engagement and executed by hanging in 1857.",
    "sources": [
      "Mutiny Records, F/ Poll, Supp. Proc. No. 375 (1859), NAI"
    ]
  },
  {
    "name": "Vazir Beg",
    "origin": "Madhya Pradesh",
    "description": "Resident of Madhya Pradesh; he joined hands with the rebels of his area during the Uprising of 1857 and fought the British forces in the Bhilsa region; he also took part in the defence of the Rahatgarh fort and was captured by the British after the fall of the fort; he was executed by hanging on 25 February 1858.",
    "sources": [
      "Mutiny Records, F/ Poll, Supp. Proc. No. 1493 (1859), NAI"
    ]
  },
  {
    "name": "Vibhuti Singh alias Bhabhut Singh",
    "origin": "Harrakot",
    "description": "Resident of Harrakot, Jubbulpore Division, the Central Provinces and Berar (now Madhya Pradesh); Jagirdar; fought against the British during the Uprising of 1857; while leading an armed attack against the British at Sohagpur, he was captured by the enemy, imprisoned and sentenced to death, he was hanged in 1862 in the Jubbulpore District Jail.",
    "sources": [
      "GA, MPSAB, Mutiny Papers, Vol-IV; WWIM, III, p.151"
    ]
  },
  {
    "name": "Waris Mohammad Khan",
    "origin": "Ambapani",
    "description": "Ruler of Ambapani, Madhya Pradesh; he took a leading part in the Uprising of 1857 at Ambapani and attacked the British and allied forces; he also incited his neighborhood to raise its arms against the British rule, and even tried to persuade unsuccessfully the ruler of Bhopal (Sikandar Begam) to join the struggle against the British; he was caught by the British and was executed in December 1857.",
    "sources": [
      "Mutiny Records, Vol. II, Mutiny Papers, NAIB; WWIM, III, p.152"
    ]
  },
  {
    "name": "Warsi Ali",
    "origin": "Indore",
    "description": "Resident of Indore, Holkar State, the Central India Agency, Madhya Pradesh; served as Sepoy in the Native Infantry of the British-Indian Army, posted in the British Residency of Indore; he left the British employment during the Great Revolt and joined anti-British rebel forces led by Saadat Khan in Indore in July 1857; participated in the raiding and plundering of the Residency in July 1857; with their steady regaining of power, the British troops managed to catch him after four months and sentenced him to death by hanging.",
    "sources": [
      "Mutiny Papers, MPSAB, Vol. II, NAIB; WWIM, III, p. 152"
    ]
  },
  {
    "name": "Yacob alias Yanus Beg",
    "origin": "Bhopal State",
    "description": "Resident of Bhopal State, the Central India Agency (Madhya Pradesh); s/o Yacob; participated in the Uprising of 1857 in Jhansi; he joined the rebel forces and fought against the British troops in the Jhansi region in 1857-58; caught by the British troops during their re-occupation of Jhansi and charged with looting, rebellion against the British and aiding the rebellion, Yacob was sentenced to death in April 1858.",
    "sources": [
      "Mutiny papers, Jhansi Mutiny Basta, UPRAA"
    ]
  },
  {
    "name": "Zahoor Alley",
    "origin": "the Malwa region",
    "description": "Belonged to the Malwa region, Madhya Pradesh; he was Chief-Lieutenant of the rebel forces of the Malwa region during the Uprising of 1857; he led the rebels on several occasions for attacking the British strongholds in Malwa; he was killed by the British in the battle of Ramod on 17 December 1858.",
    "sources": [
      "Mutiny Records, Poll. Deptt. Vol. No. 60 (1859), MSAB; WWIM, III, p. 41"
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
          <span class="origin"> ${person.origin}</span>
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
