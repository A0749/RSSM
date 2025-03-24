document.addEventListener("DOMContentLoaded", function () {
  const $dynamicGallery = document.getElementById("dynamic-gallery-demo");

  const repoName = "/RSSM";
  const isGitHubPages = window.location.hostname === "a0749.github.io";

  const galleries = {
    // Front Page Galleries
    museum: [
      {
        src: "/assets/images/Front/museum/EastFacade.JPG",
        thumb: "/assets/images/Front/museum/EastFacade.JPG",
        en: "Eastern Facade Of Museum Building",
        hi: "संग्रहालय भवन का पूर्वी मुख",
      },
      {
        src: "/assets/images/Front/museum/NorthFacade.JPG",
        thumb: "/assets/images/Front/museum/NorthFacade.JPG",
        en: "Northern Facade Of Museum Building",
        hi: "संग्रहालय भवन का उत्तरी मुख",
      },
      {
        src: "/assets/images/Front/museum/SouthFacade.jpg",
        thumb: "/assets/images/Front/museum/SouthFacade.jpg",
        en: "Southern Facade Of Museum Building Along With Sarag Naseni In Front And Jail On Right",
        hi: "संग्रहालय भवन का दक्षिणी मुख, सामने सराग नसेनी और दाईं ओर जेल",
      },
      {
        src: "/assets/images/Front/museum/museum1.jpeg",
        thumb: "/assets/images/Front/museum/museum1.jpeg",
        en: "Southern Facade Of Museum Building",
        hi: "संग्रहालय भवन का दक्षिणी मुख",
      },
      {
        src: "/assets/images/Front/museum/1.JPG",
        thumb: "/assets/images/Front/museum/1.JPG",
        en: "View Of Main Museum Building",
        hi: "मुख्य संग्रहालय भवन का दृश्य",
      },
      {
        src: "/assets/images/Front/museum/4b.JPG",
        thumb: "/assets/images/Front/museum/4b.JPG",
        en: "Eastern Facade Of Museum Building",
        hi: "संग्रहालय भवन का पूर्वी मुख",
      },
    ],
    "gallery-1": [
      {
        src: "/assets/images/Front/gallery1/1.webp",
        thumb: "/assets/images/Front/gallery1/1.webp",
        en: "View Of Gallery 1 Showcasing The Artefacts Of Gond Tribe",
        hi: "गैलरी 1 का दृश्य जिसमें गोंड जनजाति की कलाकृतियां प्रदर्शित हैं",
      },
      {
        src: "/assets/images/Front/gallery1/2.webp",
        thumb: "/assets/images/Front/gallery1/2.webp",
        en: "Map Of Gondwana Kingdom On Display In Center And Museum Panels On Either Side",
        hi: "केंद्र में गोंडवाना साम्राज्य का मानचित्र और दोनों ओर संग्रहालय पैनल",
      },
      {
        src: "/assets/images/Front/gallery1/3.webp",
        thumb: "/assets/images/Front/gallery1/3.webp",
        en: "View Of Gallery 1 Showcasing Gond Painting On Top Depicting The Lifestyle Of Gond Tribe And Digna Painting On Floor",
        hi: "गैलरी 1 का दृश्य, ऊपर गोंड जनजाति की जीवनशैली दर्शाने वाली पेंटिंग और फर्श पर डिगना पेंटिंग",
      },
    ],
    "gallery-2": [
      {
        src: "/assets/images/Front/gallery2/1.webp",
        thumb: "/assets/images/Front/gallery2/1.webp",
        en: "View Of Gallery 2",
        hi: "गैलरी 2 का दृश्य",
      },
      {
        src: "/assets/images/Front/gallery2/2.webp",
        thumb: "/assets/images/Front/gallery2/2.webp",
        en: "View Of Gallery 2 Showcasing The Graphical Representation Of Freedom Struggle From 1857",
        hi: "गैलरी 2 का दृश्य, जिसमें 1857 के स्वतंत्रता संग्राम का चित्रात्मक प्रदर्शन है",
      },
    ],
    "gallery-3": [
      {
        src: "/assets/images/Front/gallery3/Gallery3a.webp",
        thumb: "/assets/images/Front/gallery3/Gallery3a.webp",
        en: "Projection Mapping On Raja And Kunwar Story In Gallery 3 Darbar Hall",
        hi: "गैलरी 3 दरबार हॉल में राजा और कंवर की कहानी पर प्रोजेक्शन मैपिंग",
      },
      {
        src: "/assets/images/Front/gallery3/Gallery3b.webp",
        thumb: "/assets/images/Front/gallery3/Gallery3b.webp",
        en: "Darbar Hall Created In Gallery 3 Using Gond Architectural Elements",
        hi: "गैलरी 3 में गोंड वास्तुकला तत्वों का उपयोग करके निर्मित दरबार हॉल",
      },
    ],
    "gallery-4": [
      {
        src: "/assets/images/Front/gallery4/1.webp",
        thumb: "/assets/images/Front/gallery4/1.webp",
        en: "View Of Gallery 4 With Restored Historic Flooring Tiles",
        hi: "गैलरी 4 का दृश्य जिसमें ऐतिहासिक फर्श टाइल्स बहाल किए गए हैं",
      },
      {
        src: "/assets/images/Front/gallery4/2.webp",
        thumb: "/assets/images/Front/gallery4/2.webp",
        en: "Names Of Freedom Fighters From Jabalpur Region Who Sacrificed Their Life In First Freedom Fight Of 1857 Displayed On Wall Above Restored Fireplace",
        hi: "1857 के प्रथम स्वतंत्रता संग्राम में बलिदान देने वाले जबलपुर क्षेत्र के स्वतंत्रता सेनानियों के नाम बहाल की गई आग्नेयस्थल की दीवार पर प्रदर्शित हैं",
      },
    ],
    "gallery-5": [
      {
        src: "/assets/images/Front/gallery5/1.webp",
        thumb: "/assets/images/Front/gallery5/1.webp",
        en: "Hologram Of Kunwar Raghunath Shah Displayed In Gallery 5",
        hi: "गैलरी 5 में कंवर रघुनाथ शाह का होलोग्राम प्रदर्शित किया गया",
      },
      {
        src: "/assets/images/Front/gallery5/3.webp",
        thumb: "/assets/images/Front/gallery5/3.webp",
        en: "A Model Of Cannon Put On Display At Exit Of Museum As A Symbol Of British Cruelty With A Backdrop Of Oppressive Tactics Employed By British To Suppress The Freedom Movement",
        hi: "संग्रहालय के निकास पर ब्रिटिश क्रूरता का प्रतीक तोप का एक मॉडल प्रदर्शित किया गया, जिसमें स्वतंत्रता आंदोलन को दबाने के लिए ब्रिटिशों द्वारा अपनाई गई दमनकारी रणनीतियों की पृष्ठभूमि है",
      },
    ],
    "gallery-6": [
      {
        src: "/assets/images/Front/gallery6/Gallery6a.webp",
        thumb: "/assets/images/Front/gallery6/Gallery6a.webp",
        en: "The Stone Jail Where Raja And Kunwar Were Held Captive For 4 Days Before Their Martyrdom",
        hi: "वह पत्थर की जेल जहां राजा और कंवर को शहादत से पहले 4 दिन तक कैद रखा गया था",
      },
      {
        src: "/assets/images/Front/gallery6/Gallery6b.webp",
        thumb: "/assets/images/Front/gallery6/Gallery6b.webp",
        en: "Memorial Of Raja Shankar Shah And Kunwar Raghunath Shah In Old Jail",
        hi: "पुरानी जेल में राजा शंकर शाह और कंवर रघुनाथ शाह का स्मारक",
      },
    ],
    // Gondwana Tribe Galleries

    "gond-tribe": [
      {
        src: "/assets/images/Tribes/gond/image-062.jpg",
        thumb: "/assets/images/Tribes/gond/image-062.jpg",
        en: "A Gond Woman in Traditional Dress",
        hi: "पारंपरिक वेशभूषा में एक गोंड महिला",
      },
      {
        src: "/assets/images/Tribes/gond/image-063.jpg",
        thumb: "/assets/images/Tribes/gond/image-063.jpg",
        en: "A Gond Man in Traditional Dress",
        hi: "पारंपरिक वेशभूषा में एक गोंड पुरुष",
      },
      {
        src: "/assets/images/Tribes/gond/image-064.jpg",
        thumb: "/assets/images/Tribes/gond/image-064.jpg",
        en: "A Gond Woman in Traditional Dress",
        hi: "पारंपरिक वेशभूषा में एक गोंड महिला",
      },
      {
        src: "/assets/images/Tribes/gond/image-065.jpg",
        thumb: "/assets/images/Tribes/gond/image-065.jpg",
        en: "Aerial View of a Gond Village",
        hi: "गोंड गांव का हवाई दृश्य",
      },
      {
        src: "/assets/images/Tribes/gond/image-066.jpg",
        thumb: "/assets/images/Tribes/gond/image-066.jpg",
        en: "Farming - Main Occupation of Gond Tribe",
        hi: "खेती - गोंड जनजाति का मुख्य व्यवसाय",
      },
      {
        src: "/assets/images/Tribes/gond/image-067.jpg",
        thumb: "/assets/images/Tribes/gond/image-067.jpg",
        en: "People From Gond Tribe Fishing",
        hi: "मछली पकड़ते गोंड जनजाति के लोग",
      },
      {
        src: "/assets/images/Tribes/gond/image-068.jpg",
        thumb: "/assets/images/Tribes/gond/image-068.jpg",
        en: "A Gond Woman Selling Jewelry in Weekly Gond Bazar",
        hi: "साप्ताहिक गोंड बाजार में गहने बेचती एक गोंड महिला",
      },
      {
        src: "/assets/images/Tribes/gond/image-069.jpg",
        thumb: "/assets/images/Tribes/gond/image-069.jpg",
        en: "Gond Tribe Performing Karma Dance",
        hi: "करमा नृत्य प्रदर्शन करते गोंड जनजाति के लोग",
      },
      {
        src: "/assets/images/tribe/social-intro.webp",
        thumb: "/assets/images/tribe/social-intro.webp",
        en: "A Marriage Ritual of Gond Tribe",
        hi: "गोंड जनजाति का विवाह संस्कार",
      },
      {
        src: "/assets/images/tribe/religious-intro.webp",
        thumb: "/assets/images/tribe/religious-intro.webp",
        en: "Panoramic View of Dev Taal, Jabalpur",
        hi: "देव ताल का पैनोरमिक दृश्य, जबलपुर",
      },
      {
        src: "/assets/images/tribe/cultural-intro.webp",
        thumb: "/assets/images/tribe/cultural-intro.webp",
        en: "Aerial View of Gond Tribe Performing Traditional Dance",
        hi: "पारंपरिक नृत्य करते गोंड जनजाति का हवाई दृश्य",
      },
      {
        src: "/assets/images/tribe/cuisine-intro.webp",
        thumb: "/assets/images/tribe/cuisine-intro.webp",
        en: "Gond Woman Picking Mahua Seeds",
        hi: "महुआ के बीज चुनती गोंड महिला",
      },
      {
        src: "/assets/images/tribe/paintings-intro.webp",
        thumb: "/assets/images/tribe/paintings-intro.webp",
        en: "Gond Woman Painting Digna in Their Courtyard",
        hi: "अपने आंगन में दिगना चित्रित करती गोंड महिला",
      },
      {
        src: "/assets/images/tribe/painting-artist-intro.webp",
        thumb: "/assets/images/tribe/painting-artist-intro.webp",
        en: "Jangarh Singh Shyam - Pioneer of Modern Gond Painting, a Pardhan Gond Artist From Madhya Pradesh",
        hi: "जनगढ़ सिंह श्याम - आधुनिक गोंड चित्रकला के अग्रणी, मध्य प्रदेश के एक परधान गोंड कलाकार",
      },
      {
        src: "/assets/images/tribe/economic-life-intro.webp",
        thumb: "/assets/images/tribe/economic-life-intro.webp",
        en: "Gond Farmers Engage in Traditional Threshing, Separating Grain From Chaff Under Open Sky",
        hi: "खुले आसमान के नीचे अनाज से भूसी अलग करते, पारंपरिक मंडाई में व्यस्त गोंड किसान",
      },
      {
        src: "/assets/images/tribe/ayurveda-intro.webp",
        thumb: "/assets/images/tribe/ayurveda-intro.webp",
        en: "Elder's Hands Passing Traditional Medicine to Younger Generation, Symbolizing Continuity of Wisdom",
        hi: "बुजुर्ग के हाथ युवा पीढ़ी को पारंपरिक औषधि सौंपते हुए, ज्ञान की निरंतरता का प्रतीक",
      },
      {
        src: "/assets/images/tribe/architectural-intro.webp",
        thumb: "/assets/images/tribe/architectural-intro.webp",
        en: "Aerial View of Madan Mahal, Jabalpur",
        hi: "मदन महल का हवाई दृश्य, जबलपुर",
      },
    ],
    "social-life": [
      {
        src: "/assets/images/tribe/social/social1.webp",
        thumb: "/assets/images/tribe/social/social1.webp",
        en: "Gond Women in Vibrant Traditional Attire Dancing to Rhythmic Beats of Dhol",
        hi: "ढोल की लयबद्ध धुन पर नृत्य करती जीवंत पारंपरिक परिधान में गोंड महिलाएं",
      },
      {
        src: "/assets/images/tribe/social/social2.webp",
        thumb: "/assets/images/tribe/social/social2.webp",
        en: "A Gond Woman Sewing Fabric With Focus and Skill",
        hi: "एकाग्रता और कौशल से कपड़ा सिलती एक गोंड महिला",
      },
      {
        src: "/assets/images/tribe/social/social3.webp",
        thumb: "/assets/images/tribe/social/social3.webp",
        en: "A Gond Couple Undergoing Traditional Haldi Ceremony Surrounded by Family",
        hi: "परिवार के सदस्यों से घिरे पारंपरिक हल्दी समारोह में एक गोंड जोड़ा",
      },
      {
        src: "/assets/images/tribe/social/social4.webp",
        thumb: "/assets/images/tribe/social/social4.webp",
        en: "A Gond Couple",
        hi: "एक गोंड जोड़ा",
      },
      {
        src: "/assets/images/tribe/social/social5.webp",
        thumb: "/assets/images/tribe/social/social5.webp",
        en: "Gond Wedding Ritual With Turmeric Application for Blessings and Purification",
        hi: "आशीर्वाद और शुद्धिकरण के लिए हल्दी लगाने का गोंड विवाह संस्कार",
      },
      {
        src: "/assets/images/tribe/social/social6.webp",
        thumb: "/assets/images/tribe/social/social6.webp",
        en: "Gond Blacksmiths Displaying Handmade Tools and Bells at Local Market",
        hi: "स्थानीय बाजार में हस्तनिर्मित उपकरण और घंटियां प्रदर्शित करते गोंड लोहार",
      },
      {
        src: "/assets/images/tribe/social/social7.webp",
        thumb: "/assets/images/tribe/social/social7.webp",
        en: "Gond Men and Women Gathered for Traditional Cultural Performance in Rural Setting",
        hi: "ग्रामीण परिवेश में पारंपरिक सांस्कृतिक प्रदर्शन के लिए एकत्रित गोंड पुरुष और महिलाएं",
      },
      {
        src: "/assets/images/tribe/social/social8.webp",
        thumb: "/assets/images/tribe/social/social8.webp",
        en: "Gond Women in Traditional Attire Showcasing Rich Cultural Heritage",
        hi: "समृद्ध सांस्कृतिक विरासत प्रदर्शित करतीं पारंपरिक वेशभूषा में गोंड महिलाएं",
      },
      {
        src: "/assets/images/tribe/social/social9.webp",
        thumb: "/assets/images/tribe/social/social9.webp",
        en: "A Gond Woman",
        hi: "एक गोंड महिला",
      },
    ],
    "religious-life": [
      {
        src: "/assets/images/tribe/religious/religious1.webp",
        thumb: "/assets/images/tribe/religious/religious1.webp",
        en: "A Gond Priest Offers Prayers With Traditional Rituals, Invoking Parsa Pen",
        hi: "एक गोंड पुजारी पारंपरिक अनुष्ठानों के साथ प्रार्थना करते हुए, परसा पेन का आह्वान करते हुए",
      },
      {
        src: "/assets/images/tribe/religious/religious2.webp",
        thumb: "/assets/images/tribe/religious/religious2.webp",
        en: "Panoramic View of Dev Taal, Jabalpur",
        hi: "देव ताल का पैनोरमिक दृश्य, जबलपुर",
      },
      {
        src: "/assets/images/tribe/religious/religious3.webp",
        thumb: "/assets/images/tribe/religious/religious3.webp",
        en: "A Gond Elder Offering Prayers",
        hi: "प्रार्थना अर्पित करते एक गोंड बुजुर्ग",
      },
      {
        src: "/assets/images/tribe/religious/religious4.webp",
        thumb: "/assets/images/tribe/religious/religious4.webp",
        en: "A Gond Priest Performs Traditional Offering at Riverbank, Seeking Divine Blessings",
        hi: "नदी तट पर पारंपरिक अर्पण करते एक गोंड पुजारी, दैवीय आशीर्वाद मांगते हुए",
      },
      {
        src: "/assets/images/tribe/religious/religious5.webp",
        thumb: "/assets/images/tribe/religious/religious5.webp",
        en: "Gond Community Members Gather Under Sacred Tree, Performing Traditional Ritual",
        hi: "पवित्र वृक्ष के नीचे एकत्रित गोंड समुदाय के सदस्य, पारंपरिक अनुष्ठान करते हुए",
      },
      {
        src: "/assets/images/tribe/religious/religious6.webp",
        thumb: "/assets/images/tribe/religious/religious6.webp",
        en: "Coconut and Smoldering Incense Marking Site of Traditional Ritual",
        hi: "पारंपरिक अनुष्ठान स्थल पर नारियल और धूमायित अगरबत्ती",
      },
      {
        src: "/assets/images/tribe/religious/religious7.webp",
        thumb: "/assets/images/tribe/religious/religious7.webp",
        en: "A Priest Performs Ritual Offering at Badapen, a Gond Shrine",
        hi: "बड़ापेन, एक गोंड मंदिर में अनुष्ठानिक अर्पण करते एक पुजारी",
      },
      {
        src: "/assets/images/tribe/religious/religious8.webp",
        thumb: "/assets/images/tribe/religious/religious8.webp",
        en: "A Sacred Gond Tribal Site With Earthen Mounds",
        hi: "मिट्टी के टीलों वाला एक पवित्र गोंड जनजातीय स्थल",
      },
      {
        src: "/assets/images/tribe/religious/religious9.webp",
        thumb: "/assets/images/tribe/religious/religious9.webp",
        en: "A Gond Woman in Prayer at Sacred Shrine Adorned With Hindu Deities",
        hi: "हिंदू देवताओं से सजे पवित्र मंदिर में प्रार्थनारत एक गोंड महिला",
      },
      {
        src: "/assets/images/tribe/religious/religious10.webp",
        thumb: "/assets/images/tribe/religious/religious10.webp",
        en: "Sacred Gond Shrine With Traditional Offerings",
        hi: "पारंपरिक चढ़ावे के साथ पवित्र गोंड मंदिर",
      },
      {
        src: "/assets/images/tribe/religious/religious11.webp",
        thumb: "/assets/images/tribe/religious/religious11.webp",
        en: "Sarag Naseni at Chougan",
        hi: "चौगान में सरग नसेनी",
      },
      {
        src: "/assets/images/tribe/religious/religious12.webp",
        thumb: "/assets/images/tribe/religious/religious12.webp",
        en: "A Gond Priest Offering Prayers to Sarag Naseni",
        hi: "सरग नसेनी को प्रार्थना अर्पित करते एक गोंड पुजारी",
      },
      {
        src: "/assets/images/tribe/religious/religious13.webp",
        thumb: "/assets/images/tribe/religious/religious13.webp",
        en: "Close-up of Sacred Iron Tridents, Spears, and Ritual Weapons",
        hi: "पवित्र लोहे के त्रिशूल, भाले और अनुष्ठानिक हथियारों का क्लोज-अप",
      },
      {
        src: "/assets/images/tribe/religious/religious14.webp",
        thumb: "/assets/images/tribe/religious/religious14.webp",
        en: "Devotee Receiving Sacred Offering From Priest at Traditional Gond Shrine",
        hi: "पारंपरिक गोंड मंदिर पर पुजारी से पवित्र प्रसाद प्राप्त करते भक्त",
      },
      {
        src: "/assets/images/tribe/religious/religious15.webp",
        thumb: "/assets/images/tribe/religious/religious15.webp",
        en: "A Gond Priest Performing Sacred Ritual, Pouring Libations Near Sacred Tree",
        hi: "पवित्र वृक्ष के पास अर्ध्य देते हुए पवित्र अनुष्ठान करते एक गोंड पुजारी",
      },
      {
        src: "/assets/images/tribe/religious/religious16.webp",
        thumb: "/assets/images/tribe/religious/religious16.webp",
        en: "Gond Women in Traditional Attire Bowing Heads in Prayer During Sacred Ritual",
        hi: "पवित्र अनुष्ठान के दौरान प्रार्थना में सिर झुकाए पारंपरिक वेशभूषा में गोंड महिलाएं",
      },
    ],
    "cultural-life": [
      {
        src: "/assets/images/tribe/cultural/cultural1.webp",
        thumb: "/assets/images/tribe/cultural/cultural1.webp",
        en: "Gond Tribal Men Performing Traditional Karpadi Dance in Vibrant Attire",
        hi: "जीवंत परिधान में पारंपरिक करपड़ी नृत्य करते गोंड जनजातीय पुरुष",
      },
      {
        src: "/assets/images/tribe/cultural/cultural2.webp",
        thumb: "/assets/images/tribe/cultural/cultural2.webp",
        en: "Gond Tribal Women Performing Energetic Sarpata Dance With Decorated Sticks",
        hi: "सजे हुए डंडों के साथ ऊर्जावान सरपटा नृत्य करती गोंड जनजातीय महिलाएं",
      },
      {
        src: "/assets/images/tribe/cultural/cultural3.webp",
        thumb: "/assets/images/tribe/cultural/cultural3.webp",
        en: "Gond Musicians Playing Traditional Drums With Rhythmic Intensity",
        hi: "लयबद्ध तीव्रता के साथ पारंपरिक ढोल बजाते गोंड संगीतकार",
      },
      {
        src: "/assets/images/tribe/cultural/cultural4.webp",
        thumb: "/assets/images/tribe/cultural/cultural4.webp",
        en: "Gond Performers Engage in Rhythmic Dance Circle, Guided by Traditional Drums",
        hi: "पारंपरिक ढोलों की थाप पर लयबद्ध नृत्य वृत्त में संलग्न गोंड कलाकार",
      },
      {
        src: "/assets/images/tribe/cultural/cultural5.webp",
        thumb: "/assets/images/tribe/cultural/cultural5.webp",
        en: "Joyful Celebration of Gond Tribal Heritage With Rhythmic Beats and Vibrant Attire",
        hi: "लयबद्ध थाप और जीवंत वेशभूषा के साथ गोंड जनजातीय विरासत का आनंदमय उत्सव",
      },
      {
        src: "/assets/images/tribe/cultural/cultural6.webp",
        thumb: "/assets/images/tribe/cultural/cultural6.webp",
        en: "Joyful Celebration of Gond Tribal Heritage With Rhythmic Beats and Vibrant Attire",
        hi: "लयबद्ध थाप और जीवंत वेशभूषा के साथ गोंड जनजातीय विरासत का आनंदमय उत्सव",
      },
      {
        src: "/assets/images/tribe/cultural/cultural7.webp",
        thumb: "/assets/images/tribe/cultural/cultural7.webp",
        en: "Joyful Celebration of Gond Tribal Heritage With Rhythmic Beats and Vibrant Attire",
        hi: "लयबद्ध थाप और जीवंत वेशभूषा के साथ गोंड जनजातीय विरासत का आनंदमय उत्सव",
      },
      {
        src: "/assets/images/tribe/cultural/cultural8.webp",
        thumb: "/assets/images/tribe/cultural/cultural8.webp",
        en: "A Gond Tribal Musician Playing the Dhol, Keeping Heritage Alive",
        hi: "ढोल बजाते एक गोंड जनजातीय संगीतकार, विरासत को जीवंत रखते हुए",
      },
      {
        src: "/assets/images/tribe/cultural/cultural9.webp",
        thumb: "/assets/images/tribe/cultural/cultural9.webp",
        en: "A Gond Tribal Musician Playing the Dhol, Keeping Heritage Alive",
        hi: "ढोल बजाते एक गोंड जनजातीय संगीतकार, विरासत को जीवंत रखते हुए",
      },
      {
        src: "/assets/images/tribe/cultural/cultural10.webp",
        thumb: "/assets/images/tribe/cultural/cultural10.webp",
        en: "Gond Women and Men Celebrating Cultural Heritage Through Rhythmic Movements",
        hi: "लयबद्ध गतिविधियों के माध्यम से सांस्कृतिक विरासत का जश्न मनाते गोंड महिलाएं और पुरुष",
      },
      {
        src: "/assets/images/tribe/cultural/cultural11.webp",
        thumb: "/assets/images/tribe/cultural/cultural11.webp",
        en: "A Gond Tribal Musician Playing the Dhol, Keeping Heritage Alive",
        hi: "ढोल बजाते एक गोंड जनजातीय संगीतकार, विरासत को जीवंत रखते हुए",
      },
      {
        src: "/assets/images/tribe/cultural/cultural12.webp",
        thumb: "/assets/images/tribe/cultural/cultural12.webp",
        en: "A Vibrant Gond Tribal Dance Performance Showcasing Deep Cultural Roots",
        hi: "गहरी सांस्कृतिक जड़ों को प्रदर्शित करता जीवंत गोंड जनजातीय नृत्य प्रदर्शन",
      },
      {
        src: "/assets/images/tribe/cultural/cultural13.webp",
        thumb: "/assets/images/tribe/cultural/cultural13.webp",
        en: "A Gond Tribal Musician Playing the Dhol, Keeping Heritage Alive",
        hi: "ढोल बजाते एक गोंड जनजातीय संगीतकार, विरासत को जीवंत रखते हुए",
      },
      {
        src: "/assets/images/tribe/cultural/cultural14.webp",
        thumb: "/assets/images/tribe/cultural/cultural14.webp",
        en: "A Gond Tribal Musician Playing the Flute",
        hi: "बांसुरी बजाते एक गोंड जनजातीय संगीतकार",
      },
      {
        src: "/assets/images/tribe/cultural/cultural15.webp",
        thumb: "/assets/images/tribe/cultural/cultural15.webp",
        en: "A Gond Tribal Musician Playing the Dhol, Keeping Heritage Alive",
        hi: "ढोल बजाते एक गोंड जनजातीय संगीतकार, विरासत को जीवंत रखते हुए",
      },
      {
        src: "/assets/images/tribe/cultural/cultural16.webp",
        thumb: "/assets/images/tribe/cultural/cultural16.webp",
        en: "Gond Performers Engage in Rhythmic Dance Circle, Guided by Traditional Drums",
        hi: "पारंपरिक ढोलों की थाप पर लयबद्ध नृत्य वृत्त में संलग्न गोंड कलाकार",
      },
      {
        src: "/assets/images/tribe/cultural/cultural17.webp",
        thumb: "/assets/images/tribe/cultural/cultural17.webp",
        en: "A Gond Tribal Musician Playing the Dhol",
        hi: "ढोल बजाते एक गोंड जनजातीय संगीतकार",
      },
      {
        src: "/assets/images/tribe/cultural/cultural18.webp",
        thumb: "/assets/images/tribe/cultural/cultural18.webp",
        en: "Gond Tribal Musicians Performing Traditional Folk Tune",
        hi: "पारंपरिक लोक धुन प्रस्तुत करते गोंड जनजातीय संगीतकार",
      },
      {
        src: "/assets/images/tribe/cultural/cultural19.webp",
        thumb: "/assets/images/tribe/cultural/cultural19.webp",
        en: "Gond Women Engaging in Gudna - Traditional Tattooing Practice",
        hi: "गुदना - पारंपरिक गोदना प्रथा में संलग्न गोंड महिलाएं",
      },
      {
        src: "/assets/images/tribe/cultural/cultural20.webp",
        thumb: "/assets/images/tribe/cultural/cultural20.webp",
        en: "Gond Women Engaging in Gudna - Traditional Tattooing Practice",
        hi: "गुदना - पारंपरिक गोदना प्रथा में संलग्न गोंड महिलाएं",
      },
      {
        src: "/assets/images/tribe/cultural/cultural21.webp",
        thumb: "/assets/images/tribe/cultural/cultural21.webp",
        en: "Gudna - Ancient Art Form Symbolizing Identity, Protection, and Cultural Heritage",
        hi: "गुदना - पहचान, सुरक्षा और सांस्कृतिक विरासत का प्रतीक, प्राचीन कला रूप",
      },
      {
        src: "/assets/images/tribe/cultural/cultural22.webp",
        thumb: "/assets/images/tribe/cultural/cultural22.webp",
        en: "Vibrant Display of Gond Tribal Heritage With Dancers Moving in Rhythmic Harmony",
        hi: "लयबद्ध सामंजस्य में नृत्य करते कलाकारों के साथ गोंड जनजातीय विरासत का जीवंत प्रदर्शन",
      },
    ],

    "cuisine-life": [
      {
        src: "/assets/images/tribe/cuisine/cuisine1.webp",
        thumb: "/assets/images/tribe/cuisine/cuisine1.webp",
        en: "A Glimpse Into the Traditional Cooking Practices of the Gond Community. The Wood-Fired Stove, a Symbol of Resilience and Sustainability, Continues to Be an Integral Part of Their Daily Lives.",
        hi: "गोंड समुदाय की पारंपरिक खाना पकाने की प्रथाओं की झलक। लकड़ी से चलने वाला चूल्हा, लचीलापन और स्थायित्व का प्रतीक, उनके दैनिक जीवन का अभिन्न हिस्सा बना हुआ है।",
      },
      {
        src: "/assets/images/tribe/cuisine/cuisine2.webp",
        thumb: "/assets/images/tribe/cuisine/cuisine2.webp",
        en: "A Glimpse Into the Traditional Kitchen of the Gond Community. Cooking Over an Open Fire Remains a Deeply Rooted Practice, Reflecting Resilience, Self-Sufficiency, and a Connection to Ancestral Ways of Life.",
        hi: "गोंड समुदाय के पारंपरिक रसोईघर की झलक। खुली आग पर खाना पकाना एक गहरी जड़ों वाली प्रथा बनी हुई है, जो लचीलापन, आत्मनिर्भरता और पूर्वजों के जीवन के तरीकों से जुड़ाव को दर्शाती है।",
      },
      {
        src: "/assets/images/tribe/cuisine/cuisine3.webp",
        thumb: "/assets/images/tribe/cuisine/cuisine3.webp",
        en: "Traditional Way of Storing Food Items in a Gond House Using Bamboo and Thatch.",
        hi: "बांस और फूस का उपयोग करके गोंड घर में खाद्य पदार्थों को संग्रहित करने का पारंपरिक तरीका।",
      },
      {
        src: "/assets/images/tribe/cuisine/cuisine4.webp",
        thumb: "/assets/images/tribe/cuisine/cuisine4.webp",
        en: "Gond Women Carefully Spreads Freshly Harvested Mahua Flowers for Drying Under the Sun.",
        hi: "गोंड महिलाएँ ताजा कटाई किए गए महुआ के फूलों को धूप में सुखाने के लिए सावधानी से फैलाती हैं।",
      },
      {
        src: "/assets/images/tribe/cuisine/cuisine5.webp",
        thumb: "/assets/images/tribe/cuisine/cuisine5.webp",
        en: "A Gond Woman Carefully Spreads Freshly Harvested Mahua Flowers for Drying Under the Sun.",
        hi: "एक गोंड महिला ताजा कटाई किए गए महुआ के फूलों को धूप में सुखाने के लिए सावधानी से फैलाती है।",
      },
      {
        src: "/assets/images/tribe/cuisine/cuisine6.webp",
        thumb: "/assets/images/tribe/cuisine/cuisine6.webp",
        en: "Mahua, a Vital Part of Tribal Culture, Is Used for Food, Traditional Medicine, and Brewing, Symbolizing Sustainability and Indigenous Knowledge.",
        hi: "महुआ, आदिवासी संस्कृति का महत्वपूर्ण हिस्सा, भोजन, पारंपरिक चिकित्सा और शराब बनाने के लिए उपयोग किया जाता है, जो स्थायित्व और स्वदेशी ज्ञान का प्रतीक है।",
      },
      {
        src: "/assets/images/tribe/cuisine/cuisine7.webp",
        thumb: "/assets/images/tribe/cuisine/cuisine7.webp",
        en: "Mahua, a Vital Part of Tribal Culture, Is Used for Food, Traditional Medicine, and Brewing, Symbolizing Sustainability and Indigenous Knowledge.",
        hi: "महुआ, आदिवासी संस्कृति का महत्वपूर्ण हिस्सा, भोजन, पारंपरिक चिकित्सा और शराब बनाने के लिए उपयोग किया जाता है, जो स्थायित्व और स्वदेशी ज्ञान का प्रतीक है।",
      },
      {
        src: "/assets/images/tribe/cuisine/cuisine8.webp",
        thumb: "/assets/images/tribe/cuisine/cuisine8.webp",
        en: "Gond Women Collecting Freshly Dried Mahua Under the Sun.",
        hi: "गोंड महिलाएँ धूप में ताजा सूखे महुआ को एकत्र करती हैं।",
      },
      {
        src: "/assets/images/tribe/cuisine/cuisine9.webp",
        thumb: "/assets/images/tribe/cuisine/cuisine9.webp",
        en: "",
        hi: "",
      },
      {
        src: "/assets/images/tribe/cuisine/cuisine10.webp",
        thumb: "/assets/images/tribe/cuisine/cuisine10.webp",
        en: "A Traditional Bamboo Container, Commonly Used by Gond and Other Indigenous Communities, Hangs Alongside a Handmade Broom.",
        hi: "एक पारंपरिक बांस का पात्र, जिसका उपयोग आमतौर पर गोंड और अन्य स्वदेशी समुदायों द्वारा किया जाता है, एक हस्तनिर्मित झाड़ू के साथ लटका हुआ है।",
      },
      {
        src: "/assets/images/tribe/cuisine/cuisine11.webp",
        thumb: "/assets/images/tribe/cuisine/cuisine11.webp",
        en: "A Gond Tribal Woman Uses a Traditional Hand-Operated Grinding Stone (Chakki) to Process Maize Into Flour.",
        hi: "एक गोंड आदिवासी महिला मक्का को आटे में प्रसंस्करित करने के लिए पारंपरिक हाथ से संचालित पीसने का पत्थर (चक्की) का उपयोग करती है।",
      },
      {
        src: "/assets/images/tribe/cuisine/cuisine12.webp",
        thumb: "/assets/images/tribe/cuisine/cuisine12.webp",
        en: "A Tribal Woman Demonstrates the Traditional Method of Pounding Grain Using a Wooden Mortar and Pestle.",
        hi: "एक आदिवासी महिला लकड़ी के ओखली और मूसल का उपयोग करके अनाज कूटने की पारंपरिक विधि का प्रदर्शन करती है।",
      },
    ],
    "paintings-life": [
      {
        src: "/assets/images/tribe/painting/painting1.webp",
        thumb: "/assets/images/tribe/painting/painting1.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting2.webp",
        thumb: "/assets/images/tribe/painting/painting2.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting3.webp",
        thumb: "/assets/images/tribe/painting/painting3.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting4.webp",
        thumb: "/assets/images/tribe/painting/painting4.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting5.webp",
        thumb: "/assets/images/tribe/painting/painting5.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting6.webp",
        thumb: "/assets/images/tribe/painting/painting6.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting7.webp",
        thumb: "/assets/images/tribe/painting/painting7.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting8.webp",
        thumb: "/assets/images/tribe/painting/painting8.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting9.webp",
        thumb: "/assets/images/tribe/painting/painting9.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting11.webp",
        thumb: "/assets/images/tribe/painting/painting11.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting12.webp",
        thumb: "/assets/images/tribe/painting/painting12.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting13.webp",
        thumb: "/assets/images/tribe/painting/painting13.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting14.webp",
        thumb: "/assets/images/tribe/painting/painting14.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting15.webp",
        thumb: "/assets/images/tribe/painting/painting15.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting16.webp",
        thumb: "/assets/images/tribe/painting/painting16.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting17.webp",
        thumb: "/assets/images/tribe/painting/painting17.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting18.webp",
        thumb: "/assets/images/tribe/painting/painting18.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting19.webp",
        thumb: "/assets/images/tribe/painting/painting19.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting20.webp",
        thumb: "/assets/images/tribe/painting/painting20.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting21.webp",
        thumb: "/assets/images/tribe/painting/painting21.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting22.webp",
        thumb: "/assets/images/tribe/painting/painting22.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting23.webp",
        thumb: "/assets/images/tribe/painting/painting23.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting24.webp",
        thumb: "/assets/images/tribe/painting/painting24.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting25.webp",
        thumb: "/assets/images/tribe/painting/painting25.webp",
        en: "Gond Paintings: A Vibrant Expression of Nature, Mythology, and Tribal Heritage.",
        hi: "गोंड चित्रकला: प्रकृति, पौराणिक कथाओं और आदिवासी विरासत की एक जीवंत अभिव्यक्ति।",
      },
      {
        src: "/assets/images/tribe/painting/painting26.webp",
        thumb: "/assets/images/tribe/painting/painting26.webp",
        en: "Gond Artist Dilip Shyam Painting Gond Art on Wall.",
        hi: "गोंड कलाकार दिलीप श्याम दीवार पर गोंड कला चित्रित करते हुए।",
      },
      {
        src: "/assets/images/tribe/painting/painting27.webp",
        thumb: "/assets/images/tribe/painting/painting27.webp",
        en: "A Gond Artist Making Traditional Paint Brushes From Crushing Tree Branches.",
        hi: "एक गोंड कलाकार पेड़ की शाखाओं को कुचलकर पारंपरिक पेंट ब्रश बनाते हुए।",
      },
      {
        src: "/assets/images/tribe/painting/painting28.webp",
        thumb: "/assets/images/tribe/painting/painting28.webp",
        en: "A Gond Artist Making Natural Colors From Tree Leaves.",
        hi: "एक गोंड कलाकार पेड़ की पत्तियों से प्राकृतिक रंग बनाते हुए।",
      },
      {
        src: "/assets/images/tribe/painting/painting29.webp",
        thumb: "/assets/images/tribe/painting/painting29.webp",
        en: "A Gond Artist Grinding Natural Colors Using Traditional Methods.",
        hi: "एक गोंड कलाकार पारंपरिक तरीकों का उपयोग करके प्राकृतिक रंगों को पीसते हुए।",
      },
      {
        src: "/assets/images/tribe/painting/painting30.webp",
        thumb: "/assets/images/tribe/painting/painting30.webp",
        en: "Gond Artist Dilip Shyam Along With His Family Painting Gond Art on Wall.",
        hi: "गोंड कलाकार दिलीप श्याम अपने परिवार के साथ दीवार पर गोंड कला चित्रित करते हुए।",
      },
      {
        src: "/assets/images/tribe/painting/painting31.webp",
        thumb: "/assets/images/tribe/painting/painting31.webp",
        en: "Vibrant Gond Art Adorns the Wall of a House, Bringing Traditional Stories to Life With Intricate Patterns and Bold Colors.",
        hi: "जीवंत गोंड कला एक घर की दीवार को सजाती है, जटिल पैटर्न और बोल्ड रंगों के साथ पारंपरिक कहानियों को जीवंत करती है।",
      },
      {
        src: "/assets/images/tribe/painting/painting32.webp",
        thumb: "/assets/images/tribe/painting/painting32.webp",
        en: "Gond Women Creating Digna in the Courtyard of a Traditional Tribal House.",
        hi: "गोंड महिलाएँ एक पारंपरिक आदिवासी घर के आँगन में दिगना बनाती हुई।",
      },
      {
        src: "/assets/images/tribe/painting/painting33.webp",
        thumb: "/assets/images/tribe/painting/painting33.webp",
        en: "Gond Women Creating Digna in the Courtyard of a Traditional Tribal House, Preserving Their Rich Artistic Heritage Through Intricate Patterns.",
        hi: "गोंड महिलाएँ एक पारंपरिक आदिवासी घर के आँगन में दिगना बनाती हुई, जटिल पैटर्न के माध्यम से अपनी समृद्ध कलात्मक विरासत को संरक्षित करती हुई।",
      },
      {
        src: "/assets/images/tribe/painting/painting34.webp",
        thumb: "/assets/images/tribe/painting/painting34.webp",
        en: "Gond Painting Adorning the Border of a House Gate, Showcasing Traditional Tribal Artistry and Cultural Heritage.",
        hi: "एक घर के द्वार की सीमा को सुशोभित करती गोंड चित्रकला, पारंपरिक आदिवासी कला और सांस्कृतिक विरासत को प्रदर्शित करती हुई।",
      },
      {
        src: "/assets/images/tribe/painting/painting35.webp",
        thumb: "/assets/images/tribe/painting/painting35.webp",
        en: "Gond Artist Dilip Shyam Painting Gond Art on the Wall, Preserving and Celebrating Their Traditional Heritage.",
        hi: "गोंड कलाकार दिलीप श्याम दीवार पर गोंड कला चित्रित करते हुए, अपनी पारंपरिक विरासत को संरक्षित और सम्मानित करते हुए।",
      },
      {
        src: "/assets/images/tribe/painting/painting36.webp",
        thumb: "/assets/images/tribe/painting/painting36.webp",
        en: "Gond Artist Painting Gond Art on the Wall, Bringing Traditional Stories to Life With Intricate Patterns and Bold Colors.",
        hi: "गोंड कलाकार दीवार पर गोंड कला चित्रित करते हुए, जटिल पैटर्न और बोल्ड रंगों के साथ पारंपरिक कहानियों को जीवंत करते हुए।",
      },
      {
        src: "/assets/images/tribe/painting/painting37.webp",
        thumb: "/assets/images/tribe/painting/painting37.webp",
        en: "Gond Artist Painting Gond Art on Canvas.",
        hi: "गोंड कलाकार कैनवास पर गोंड कला चित्रित करते हुए।",
      },
      {
        src: "/assets/images/tribe/painting/painting38.webp",
        thumb: "/assets/images/tribe/painting/painting38.webp",
        en: "Gond Artist Painting Gond Art on Canvas.",
        hi: "गोंड कलाकार कैनवास पर गोंड कला चित्रित करते हुए।",
      },
    ],
    "jangarh": [
      {
        src: "/assets/images/tribe/painting/jangadKalam/jangadKalam10.webp",
        thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam10.webp",
        en: "Jangarh Singh Shyam, the Pioneering Gond Artist, Whose Visionary Work Brought Gond Art to the Global Stage.",
        hi: "जनगढ़ सिंह श्याम, अग्रणी गोंड कलाकार, जिनके दूरदर्शी कार्य ने गोंड कला को वैश्विक मंच पर पहुंचाया।",
      },
      {
        src: "/assets/images/tribe/painting/jangadKalam/jangadKalam9.webp",
        thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam9.webp",
        en: "Jangarh Singh Shyam Along With His Family, the Pioneering Gond Artist, Whose Visionary Work Brought Gond Art to the Global Stage.",
        hi: "जनगढ़ सिंह श्याम अपने परिवार के साथ, अग्रणी गोंड कलाकार, जिनके दूरदर्शी कार्य ने गोंड कला को वैश्विक मंच पर पहुंचाया।",
      },
      {
        src: "/assets/images/tribe/painting/jangadKalam/jangadKalam1.webp",
        thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam1.webp",
        en: "Painting by Jangarh Singh Shyam.",
        hi: "जनगढ़ सिंह श्याम द्वारा चित्रकला।",
      },
      {
        src: "/assets/images/tribe/painting/jangadKalam/jangadKalam2.webp",
        thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam2.webp",
        en: "Painting by Jangarh Singh Shyam.",
        hi: "जनगढ़ सिंह श्याम द्वारा चित्रकला।",
      },
      {
        src: "/assets/images/tribe/painting/jangadKalam/jangadKalam3.webp",
        thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam3.webp",
        en: "Painting by Jangarh Singh Shyam.",
        hi: "जनगढ़ सिंह श्याम द्वारा चित्रकला।",
      },
      {
        src: "/assets/images/tribe/painting/jangadKalam/jangadKalam4.webp",
        thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam4.webp",
        en: "Painting by Jangarh Singh Shyam.",
        hi: "जनगढ़ सिंह श्याम द्वारा चित्रकला।",
      },
      {
        src: "/assets/images/tribe/painting/jangadKalam/jangadKalam5.webp",
        thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam5.webp",
        en: "Painting by Jangarh Singh Shyam.",
        hi: "जनगढ़ सिंह श्याम द्वारा चित्रकला।",
      },
      {
        src: "/assets/images/tribe/painting/jangadKalam/jangadKalam6.webp",
        thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam6.webp",
        en: "Painting by Jangarh Singh Shyam.",
        hi: "जनगढ़ सिंह श्याम द्वारा चित्रकला।",
      },
      {
        src: "/assets/images/tribe/painting/jangadKalam/jangadKalam7.webp",
        thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam7.webp",
        en: "Painting by Jangarh Singh Shyam.",
        hi: "जनगढ़ सिंह श्याम द्वारा चित्रकला।",
      },
      {
        src: "/assets/images/tribe/painting/jangadKalam/jangadKalam8.webp",
        thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam8.webp",
        en: "Painting by Jangarh Singh Shyam.",
        hi: "जनगढ़ सिंह श्याम द्वारा चित्रकला।",
      },
      {
        src: "/assets/images/tribe/painting/jangadKalam/jangadKalam11.webp",
        thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam11.webp",
        en: "Jangarh Singh Shyam, the Legendary Gond Artist Who Revolutionized Tribal Art With His Unique Style and Storytelling.",
        hi: "जनगढ़ सिंह श्याम, महान गोंड कलाकार जिन्होंने अपनी अनूठी शैली और कथा-कहानी के साथ आदिवासी कला में क्रांति लाई।",
      },
      {
        src: "/assets/images/tribe/painting/jangadKalam/jangadKalam12.webp",
        thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam12.webp",
        en: "Painting by Jangarh Singh Shyam.",
        hi: "जनगढ़ सिंह श्याम द्वारा चित्रकला।",
      },
      {
        src: "/assets/images/tribe/painting/jangadKalam/jangadKalam13.webp",
        thumb: "/assets/images/tribe/painting/jangadKalam/jangadKalam13.webp",
        en: "Painting by Jangarh Singh Shyam.",
        hi: "जनगढ़ सिंह श्याम द्वारा चित्रकला।",
      },
    ],
    "aayurveda-life": [
      {
        src: "/assets/images/tribe/aayurveda/aayurveda1.webp",
        thumb: "/assets/images/tribe/aayurveda/aayurveda1.webp",
        en: "Gond Vedh Checking a Child's Well-Being Through Ancient Indigenous Practices.",
        hi: "गोंड वैध प्राचीन स्वदेशी प्रथाओं के माध्यम से एक बच्चे के स्वास्थ्य की जांच कर रहे हैं।",
      },
      {
        src: "/assets/images/tribe/aayurveda/aayurveda2.webp",
        thumb: "/assets/images/tribe/aayurveda/aayurveda2.webp",
        en: "Gond Vedh Preparing Traditional Herbal Medicine While a Woman Patiently Waits, Showcasing the Rich Indigenous Healing Practices of the Community.",
        hi: "गोंड वैध पारंपरिक जड़ी-बूटी दवा तैयार कर रहे हैं जबकि एक महिला धैर्यपूर्वक इंतजार कर रही है, समुदाय की समृद्ध स्वदेशी चिकित्सा प्रथाओं को प्रदर्शित करते हुए।",
      },
      {
        src: "/assets/images/tribe/aayurveda/aayurveda3.webp",
        thumb: "/assets/images/tribe/aayurveda/aayurveda3.webp",
        en: "Gond Vedh Preparing Traditional Herbal Medicine.",
        hi: "गोंड वैध पारंपरिक जड़ी-बूटी दवा तैयार कर रहे हैं।",
      },
      {
        src: "/assets/images/tribe/aayurveda/aayurveda4.webp",
        thumb: "/assets/images/tribe/aayurveda/aayurveda4.webp",
        en: "Gond Vedh Handing Over a Sacred Herbal Remedy to a Child, Symbolizing the Transfer of Traditional Healing Wisdom.",
        hi: "गोंड वैध एक बच्चे को पवित्र जड़ी-बूटी उपचार सौंप रहे हैं, जो पारंपरिक चिकित्सा ज्ञान के हस्तांतरण का प्रतीक है।",
      },
      {
        src: "/assets/images/tribe/aayurveda/aayurveda6.webp",
        thumb: "/assets/images/tribe/aayurveda/aayurveda6.webp",
        en: "A Traditional Gond Healer (Vedh) Sitting Outside His Home, Preparing Herbal Medicines While a Father and Child Seek His Wisdom.",
        hi: "एक पारंपरिक गोंड चिकित्सक (वैध) अपने घर के बाहर बैठे हुए, जड़ी-बूटी की दवाएं तैयार कर रहे हैं जबकि एक पिता और बच्चा उनके ज्ञान की तलाश कर रहे हैं।",
      },
      {
        src: "/assets/images/tribe/aayurveda/aayurveda7.webp",
        thumb: "/assets/images/tribe/aayurveda/aayurveda7.webp",
        en: "Gond Vedh Preparing Traditional Herbal Medicine.",
        hi: "गोंड वैध पारंपरिक जड़ी-बूटी दवा तैयार कर रहे हैं।",
      },
    ],
    "economic-life": [
      {
        src: "/assets/images/tribe/economic/economic1.webp",
        thumb: "/assets/images/tribe/economic/economic1.webp",
        en: "Gond tribal farmers working in harmony with nature, plowing the land with traditional methods to ensure a bountiful harvest.",
        hi: "गोंड जनजाति के किसान प्रकृति के साथ तालमेल में काम करते हुए, पारंपरिक तरीकों से भूमि को जोतकर समृद्ध फसल सुनिश्चित करते हैं।",
      },
      {
        src: "/assets/images/tribe/economic/economic2.webp",
        thumb: "/assets/images/tribe/economic/economic2.webp",
        en: "A Gond farmer working in harmony with nature, showcasing the deep-rooted connection between the tribe and their land.",
        hi: "एक गोंड किसान प्रकृति के साथ तालमेल में काम करते हुए, जनजाति और उनकी भूमि के बीच गहरे जुड़ाव को प्रदर्शित करता है।",
      },
      {
        src: "/assets/images/tribe/economic/economic3.webp",
        thumb: "/assets/images/tribe/economic/economic3.webp",
        en: "Hardworking Gond women engaged in farming, embodying resilience and self-sufficiency in their agricultural heritage.",
        hi: "खेती में लगी मेहनती गोंड महिलाएँ, अपनी कृषि विरासत में लचीलापन और आत्मनिर्भरता का प्रतीक हैं।",
      },
      {
        src: "/assets/images/tribe/economic/economic4.webp",
        thumb: "/assets/images/tribe/economic/economic4.webp",
        en: "The spirit of sustainable farming—Gond tribals cultivating crops using age-old techniques that respect the land and environment.",
        hi: "सतत खेती की भावना—गोंड जनजाति पुरानी तकनीकों का उपयोग करके फसलों की खेती करते हैं जो भूमि और पर्यावरण का सम्मान करती हैं।",
      },
      {
        src: "/assets/images/tribe/economic/economic5.webp",
        thumb: "/assets/images/tribe/economic/economic5.webp",
        en: "Gond tribal farmers skillfully sowing seeds, ensuring the continuity of their agricultural heritage and food security.",
        hi: "गोंड जनजाति के किसान कुशलतापूर्वक बीज बोते हुए, अपनी कृषि विरासत और खाद्य सुरक्षा की निरंतरता सुनिश्चित करते हैं।",
      },
      {
        src: "/assets/images/tribe/economic/economic6.webp",
        thumb: "/assets/images/tribe/economic/economic6.webp",
        en: "A serene moment in the fields as Gond farmers nurture their crops, symbolizing the deep-rooted connection between tribal communities and nature.",
        hi: "खेतों में एक शांत क्षण जैसे गोंड किसान अपनी फसलों का पोषण करते हैं, जो जनजातीय समुदायों और प्रकृति के बीच गहरे जुड़ाव का प्रतीक है।",
      },
      {
        src: "/assets/images/tribe/economic/economic7.webp",
        thumb: "/assets/images/tribe/economic/economic7.webp",
        en: "Using time-honored techniques, Gond farmers cultivate the land, keeping alive the legacy of their ancestors",
        hi: "समय-सम्मानित तकनीकों का उपयोग करके, गोंड किसान भूमि की खेती करते हैं, अपने पूर्वजों की विरासत को जीवित रखते हैं।",
      },
      {
        src: "/assets/images/tribe/economic/economic8.webp",
        thumb: "/assets/images/tribe/economic/economic8.webp",
        en: "The hard work of Gond tribal farmers in the fields reflects their unwavering spirit and commitment to sustainable living.",
        hi: "खेतों में गोंड जनजाति के किसानों की कड़ी मेहनत उनकी अडिग भावना और सतत जीवन के प्रति प्रतिबद्धता को दर्शाती है।",
      },
    ],
    "architectural-legacy": [
      {
        src: "/assets/images/tribe/architectural/architectural1.webp",
        thumb: "/assets/images/tribe/architectural/architectural1.webp",
        en: "Moti mahal, Mandla",
        hi: "मोती महल, मंडला",
      },
      {
        src: "/assets/images/tribe/architectural/architectural2.webp",
        thumb: "/assets/images/tribe/architectural/architectural2.webp",
        en: "Madan Mahal Fort, Jabalpur",
        hi: "मदन महल किला, जबलपुर",
      },
      {
        src: "/assets/images/tribe/architectural/architectural3.webp",
        thumb: "/assets/images/tribe/architectural/architectural3.webp",
        en: "Ruins of Gond Fort, Madhya Pradesh",
        hi: "गोंड किले के खंडहर, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural4.webp",
        thumb: "/assets/images/tribe/architectural/architectural4.webp",
        en: "Ruins of Gond Fort, Madhya Pradesh",
        hi: "गोंड किले के खंडहर, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural5.webp",
        thumb: "/assets/images/tribe/architectural/architectural5.webp",
        en: "Entrance to Ginnorgarh Fort, Ratapani",
        hi: "गिन्नोरगढ़ किले का प्रवेश द्वार, रतापानी",
      },
      {
        src: "/assets/images/tribe/architectural/architectural6.webp",
        thumb: "/assets/images/tribe/architectural/architectural6.webp",
        en: "Ruins of Gond Fort, Madhya Pradesh",
        hi: "गोंड किले के खंडहर, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural7.webp",
        thumb: "/assets/images/tribe/architectural/architectural7.webp",
        en: "Ruins of Gond Fort, Madhya Pradesh",
        hi: "गोंड किले के खंडहर, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural8.webp",
        thumb: "/assets/images/tribe/architectural/architectural8.webp",
        en: "Ruins of Gond Fort, Madhya Pradesh",
        hi: "गोंड किले के खंडहर, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural9.webp",
        thumb: "/assets/images/tribe/architectural/architectural9.webp",
        en: "Ruins of Gond Fort, Madhya Pradesh",
        hi: "गोंड किले के खंडहर, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural10.webp",
        thumb: "/assets/images/tribe/architectural/architectural10.webp",
        en: "Ruins of Gond Fort, Madhya Pradesh",
        hi: "गोंड किले के खंडहर, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural11.webp",
        thumb: "/assets/images/tribe/architectural/architectural11.webp",
        en: "Ruins of Gond Fort, Madhya Pradesh",
        hi: "गोंड किले के खंडहर, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural12.webp",
        thumb: "/assets/images/tribe/architectural/architectural12.webp",
        en: "Ruins of Gond Fort, Madhya Pradesh",
        hi: "गोंड किले के खंडहर, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural13.webp",
        thumb: "/assets/images/tribe/architectural/architectural13.webp",
        en: "Ruins of Gond Fort, Madhya Pradesh",
        hi: "गोंड किले के खंडहर, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural14.webp",
        thumb: "/assets/images/tribe/architectural/architectural14.webp",
        en: "Ruins of Gond Fort, Madhya Pradesh",
        hi: "गोंड किले के खंडहर, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural15.webp",
        thumb: "/assets/images/tribe/architectural/architectural15.webp",
        en: "Narendra Shah gate, Mandla",
        hi: "नरेंद्र शाह द्वार, मंडला",
      },
      {
        src: "/assets/images/tribe/architectural/architectural16.webp",
        thumb: "/assets/images/tribe/architectural/architectural16.webp",
        en: "Madan Mahal Fort, Jabalpur",
        hi: "मदन महल किला, जबलपुर",
      },
      {
        src: "/assets/images/tribe/architectural/architectural17.webp",
        thumb: "/assets/images/tribe/architectural/architectural17.webp",
        en: "Panoramic view of Madan Mahal Fort Complex, Jabalpur",
        hi: "मदन महल किला परिसर का पैनोरमिक दृश्य, जबलपुर",
      },
      {
        src: "/assets/images/tribe/architectural/architectural18.webp",
        thumb: "/assets/images/tribe/architectural/architectural18.webp",
        en: "Narendra Shah Gate, Mandla, Madhya Pradesh",
        hi: "नरेंद्र शाह द्वार, मंडला, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural19.webp",
        thumb: "/assets/images/tribe/architectural/architectural19.webp",
        en: "Moti Mahal, Mandla, Madhya Pradesh",
        hi: "मोती महल, मंडला, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural20.webp",
        thumb: "/assets/images/tribe/architectural/architectural20.webp",
        en: "Ruins of Madan Mahal Fort Complex, Jabalpur",
        hi: "मदन महल किला परिसर के खंडहर, जबलपुर",
      },
      {
        src: "/assets/images/tribe/architectural/architectural21.webp",
        thumb: "/assets/images/tribe/architectural/architectural21.webp",
        en: "Madan Mahal fort, Jabalpur",
        hi: "मदन महल किला, जबलपुर",
      },
      {
        src: "/assets/images/tribe/architectural/architectural22.webp",
        thumb: "/assets/images/tribe/architectural/architectural22.webp",
        en: "Ruins of Gond Fort, Madhya Pradesh",
        hi: "गोंड किले के खंडहर, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural23.webp",
        thumb: "/assets/images/tribe/architectural/architectural23.webp",
        en: "Ruins of Gond Fort, Madhya Pradesh",
        hi: "गोंड किले के खंडहर, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural24.webp",
        thumb: "/assets/images/tribe/architectural/architectural24.webp",
        en: "Rani Mahal, Ramnagar, Madhya Pradesh",
        hi: "रानी महल, रामनगर, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural25.webp",
        thumb: "/assets/images/tribe/architectural/architectural25.webp",
        en: "Moti Mahal, Mandla, Madhya Pradesh",
        hi: "मोती महल, मंडला, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural26.webp",
        thumb: "/assets/images/tribe/architectural/architectural26.webp",
        en: "Moti Mahal, Mandla, Madhya Pradesh",
        hi: "मोती महल, मंडला, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural27.webp",
        thumb: "/assets/images/tribe/architectural/architectural27.webp",
        en: "Moti Mahal, Mandla, Madhya Pradesh",
        hi: "मोती महल, मंडला, मध्य प्रदेश",
      },
      {
        src: "/assets/images/tribe/architectural/architectural28.webp",
        thumb: "/assets/images/tribe/architectural/architectural28.webp",
        en: "Moti Mahal, Mandla, Madhya Pradesh",
        hi: "मोती महल, मंडला, मध्य प्रदेश",
      },
    ],
    "conservation-compare": [
      {
        src: "/assets/images/conservation/slider/slider1.png",
        thumb: "/assets/images/conservation/slider/slider1.png",
        en: "Main Museum Building, Jabalpur",
        hi: "मुख्य संग्रहालय भवन, जबलपुर",
      },
      {
        src: "/assets/images/conservation/slider/slider2.png",
        thumb: "/assets/images/conservation/slider/slider2.png",
        en: "West Facade of main building",
        hi: "मुख्य भवन का पश्चिमी मुखौटा",
      },
      {
        src: "/assets/images/conservation/slider/slider3.png",
        thumb: "/assets/images/conservation/slider/slider3.png",
        en: "East Facade of main Building",
        hi: "मुख्य भवन का पूर्वी मुखौटा",
      },
      {
        src: "/assets/images/conservation/slider/slider4.png",
        thumb: "/assets/images/conservation/slider/slider4.png",
        en: "Removal of later additions on south side of main building",
        hi: "मुख्य भवन के दक्षिणी भाग में बाद में जोड़े गए हिस्सों को हटाना",
      },
      {
        src: "/assets/images/conservation/slider/slider5.png",
        thumb: "/assets/images/conservation/slider/slider5.png",
        en: "Removal of later additions on south side of main building",
        hi: "मुख्य भवन के दक्षिणी भाग में बाद में जोड़े गए हिस्सों को हटाना",
      },
      {
        src: "/assets/images/conservation/slider/slider6.png",
        thumb: "/assets/images/conservation/slider/slider6.png",
        en: "Later added portion were demolished and restored as original",
        hi: "बाद में जोड़े गए हिस्सों को गिराकर मूल रूप में पुनर्स्थापित किया गया",
      },
      {
        src: "/assets/images/conservation/slider/slider7.png",
        thumb: "/assets/images/conservation/slider/slider7.png",
        en: "Sarag Naseni added after removal of later added building",
        hi: "बाद में जोड़े गए भवन को हटाने के बाद सराग नसैनी जोड़ा गया",
      },
      {
        src: "/assets/images/conservation/slider/slider8.png",
        thumb: "/assets/images/conservation/slider/slider8.png",
        en: "Before after of south side after removal of later addition",
        hi: "दक्षिणी भाग का पहले और बाद का दृश्य, बाद में जोड़े गए हिस्सों को हटाने के बाद",
      },
      {
        src: "/assets/images/conservation/slider/slider9.png",
        thumb: "/assets/images/conservation/slider/slider9.png",
        en: "Corridor in front of jail Building",
        hi: "जेल भवन के सामने गलियारा",
      },
      {
        src: "/assets/images/conservation/slider/slider10.png",
        thumb: "/assets/images/conservation/slider/slider10.png",
        en: "Removal of blockage in arch of jail entrance",
        hi: "जेल प्रवेश द्वार के मेहराब में अवरोध को हटाना",
      },
      {
        src: "/assets/images/conservation/slider/slider11.png",
        thumb: "/assets/images/conservation/slider/slider11.png",
        en: "Paint removal from jail building",
        hi: "जेल भवन से पेंट हटाना",
      },
      {
        src: "/assets/images/conservation/slider/slider12.png",
        thumb: "/assets/images/conservation/slider/slider12.png",
        en: "Removal of paint from Jail building",
        hi: "जेल भवन से पेंट हटाना",
      },
      {
        src: "/assets/images/conservation/slider/slider13.png",
        thumb: "/assets/images/conservation/slider/slider13.png",
        en: "Jail Building after restoration",
        hi: "पुनर्स्थापना के बाद जेल भवन",
      },
    ],
  };

  function fixImagePaths() {
    if (isGitHubPages) {
      Object.keys(galleries).forEach((key) => {
        galleries[key] = galleries[key].map((item) => ({
          ...item,
          src: repoName + "/" + item.src,
          thumb: repoName + "/" + item.thumb,
        }));
      });
    }
  }

  fixImagePaths();

  function detectLanguage() {
    return window.location.pathname.includes("/hi/") ? "hi" : "en";
  }

  function initializeGallery(buttonId) {
    const lang = detectLanguage();
    const galleryData = galleries[buttonId].map((item) => ({
      src: item.src,
      thumb: item.thumb,
      subHtml: item[lang],
    }));

    const dynamicGallery = window.lightGallery($dynamicGallery, {
      dynamic: true,
      plugins: [lgZoom, lgVideo, lgThumbnail],
      showDownload: false,
      dynamicEl: galleryData,
    });
    dynamicGallery.openGallery(0);
  }

  document.querySelectorAll("[data-gallery]").forEach((button) => {
    button.addEventListener("click", () => {
      initializeGallery(button.dataset.gallery);
    });
  });
});
