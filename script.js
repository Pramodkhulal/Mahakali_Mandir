const ham = document.getElementById("hamburger");
const nav = document.getElementById("navLinks");

ham.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
  });
});

const MAX_ROWS = 8;

document.querySelectorAll(".don-table").forEach(function (table) {
  table.querySelectorAll("tbody tr").forEach(function (row, index) {
    if (index >= MAX_ROWS) {
      row.classList.add("hidden-row");
    }
  });
});

const sections = document.querySelectorAll("section[id], div[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveNav() {
  let currentSection = "";
  sections.forEach(function (section) {
    if (section.getBoundingClientRect().top <= 80) {
      currentSection = section.id;
    }
  });
  navLinks.forEach(function (link) {
    const isActive = link.getAttribute("href") === "#" + currentSection;
    link.classList.toggle("active", isActive);
  });
}

window.addEventListener("scroll", updateActiveNav);
updateActiveNav();

const translations = {
  en: {
    nav_home: "Home",
    nav_history: "History",
    nav_events: "Events",
    nav_gallery: "Gallery",
    nav_committee: "Committee",
    nav_donation: "Donation",
    hero_label: "Welcome to",
    hero_title: "Mahakali Mandir",
    hero_desc:
      "The temple located at Sunapati–1, Garati is known as a sacred religious site and a center of faith and devotion. Filled with historical and spiritual significance, devotees visit this temple to observe fasts, perform worship rituals, and make vows to express their wishes. There is a tradition of making vows here before departing on domestic or international journeys, praying for safe travel and success.",
    darshan_hours: "Daily Darshan: 6:00 AM – 4:00 PM",
    location: "Sunapati-1, Ramechhap",
    img_overlay_home: "Mahakali Mandir",
    history_title: "📜 History",
    history_subtitle: "A sacred legacy through the ages",
    history_p1:
      "It is an ancient center of religious faith and devotion. According to local folklore, many years ago an elderly Magar man from the Khulal clan was preparing farmland when his hoe struck the head of a stone resembling a deity. It is believed that a blood-like substance emerged from the stone. Considering this event a divine sign, the local people established the site as a sacred place and began worshipping it as Mahakali Mandir.",
    history_p2:
      "At that time, the village was facing a shortage of drinking water. Local belief holds that Padam Bahadur Khulal saw the location of a water source in a dream. When villagers went to the place indicated in the dream, they discovered a spring there. The water source still exists today and is regarded as a sign of the temple's divine power and blessing.",
    history_p3:
      "After the establishment of the temple, Bhadra Bahadur Asthani was recognized as the first priest. Since then, members of the Asthani clan have continued to serve as the temple's priests, preserving this tradition to the present day.",
    history_p4:
      "The local community believes that Mahakali Mandir protects the village, relieves suffering, and fulfills devotees' wishes. Before traveling abroad for employment, starting a new venture, or seeking good health and family well-being, devotees visit the temple to offer prayers and make vows. This tradition of worship, prayer, and devotion continues to this day.",
    history_img_caption: "Historical view of the Temple",
    see_more: "See More",
    see_less: "See Less",
    events_title: "🪔 Upcoming Events",
    events_subtitle: "Join us in celebration and devotion",
    event1_name: "Mangsir Purnima",
    event1_date: "Dec 24, 2026",
    event1_desc:
      "Devotees visit the temple, offer prayers, light lamps, and seek blessings for peace and prosperity.",
    event2_name: "Chandi Purnima",
    event2_date: "May 31, 2026",
    event2_desc:
      "Devotees gather at the temple to worship Goddess Chandi, offer prayers, and seek blessings for peace, prosperity, and protection.",
    event3_name: "Haribodhini Ekadashi",
    event3_date: "Nov 20, 2026",
    event3_desc:
      "Devotees visit the temple, worship Lord Vishnu, offer prayers, and seek blessings for happiness, prosperity, and spiritual well-being.",
    event4_name: "Special Puja",
    event4_date: "In Morning",
    event4_desc:
      "Prayer for Well-being, Wish-fulfilling, Problem relief & Vows offering (Bhakal).",
    gallery_title: "🖼️ Gallery",
    gallery_subtitle: "Reconstruction Phase Photos",
    gal1: "Before Reconstruction",
    gal2: "Top Roof Slab Work",
    gal3: "Slab Design Completion",
    gal4: "Completion of Temple",
    committee_title: "🏛️ Temple Reconstruction Committee",
    committee_subtitle:
      "Mandir Nirman Samiti — Dedicated members who led the reconstruction",
    th_sn: "S.N.",
    th_name: "Full Name",
    th_position: "Position",
    th_name_details: "Name / Details",
    th_amount: "Amount (Rs.) / Materials",
    pos_chair: "Chairperson",
    pos_treasurer: "Treasurer",
    pos_secretary: "Secretary",
    pos_member: "Member",
    donation_title: "🙏 Generous Donors",
    donation_subtitle:
      "Kind-hearted devotees who supported the temple's reconstruction",
    village_donors: "🏡 Donors From the Village",
    outside_donors: "🌏 Donors From Outside the Village",
    show_less: "Show Less",
    footer_tagline: "Eternal Blessings | Dharma & Devotion",
    footer_copy: "© 2026 Mahakali Mandir | Sunapati-1, Ramechhap",
  },
  ne: {
    nav_home: "गृह",
    nav_history: "इतिहास",
    nav_events: "कार्यक्रमहरू",
    nav_gallery: "ग्यालरी",
    nav_committee: "समिति",
    nav_donation: "दान",
    hero_label: "स्वागतम्",
    hero_title: "महाकाली मन्दिर",
    hero_desc:
      "सुनापती–१, गरातीमा अवस्थित यो मन्दिर एक पवित्र धार्मिक स्थल र श्रद्धा तथा भक्तिको केन्द्रको रूपमा प्रसिद्ध छ। ऐतिहासिक र आध्यात्मिक महत्त्वले भरिपूर्ण यस मन्दिरमा भक्तजनहरू व्रत बस्न, पूजा-आराधना गर्न र मनोकामना पूरा गर्न आउँछन्। देश-विदेश यात्रामा जाँदा सुरक्षित यात्रा र सफलताको कामना गर्दै यहाँ मनोकामना गर्ने परम्परा छ।",
    darshan_hours: "दैनिक दर्शन: बिहान ६:०० – दिउँसो ४:००",
    location: "सुनापती-१, रामेछाप",
    img_overlay_home: "महाकाली मन्दिर",
    history_title: "📜 इतिहास",
    history_subtitle: "युगौंदेखिको पवित्र विरासत",
    history_p1:
      "यो मन्दिर धार्मिक आस्था र भक्तिको प्राचीन केन्द्र हो। स्थानीय जनश्रुति अनुसार धेरै वर्ष पहिले खुलाल थरका एक वृद्ध मगर खेतबारी खन्ने क्रममा उनको कोदालो देवताको आकृति जस्तो देखिने ढुङ्गाको टाउकोमा ठोक्किएको थियो। त्यसपछि उक्त ढुङ्गाबाट रगत जस्तो पदार्थ निस्किएको विश्वास गरिन्छ। यस घटनालाई दैवी संकेत मानी स्थानीय बासिन्दाले उक्त स्थानलाई पवित्र स्थलको रूपमा स्थापना गरी महाकाली मन्दिरका रूपमा पूजा गर्न थाले।",
    history_p2:
      "त्यतिबेला गाउँमा खानेपानीको अभाव थियो। स्थानीय विश्वास अनुसार पदम बहादुर खुलालले सपनामा पानीको मुहान रहेको स्थान देखेका थिए। गाउँलेहरू सपनामा देखाइएको स्थानमा पुग्दा त्यहाँ पानीको मुहान फेला परेको थियो। उक्त मुहान आज पनि अस्तित्वमा रहेको छ र यसलाई मन्दिरको दैवी शक्ति तथा आशीर्वादको प्रतीक मानिन्छ।",
    history_p3:
      "मन्दिर स्थापना भएपछि भद्र बहादुर अस्थानीलाई पहिलो पुजारीको रूपमा मान्यता दिइएको थियो। त्यसयता अस्थानी वंशका सदस्यहरूले निरन्तर रूपमा मन्दिरको पुजारीको जिम्मेवारी सम्हाल्दै यो परम्परालाई आजसम्म जोगाइराखेका छन्।",
    history_p4:
      "स्थानीय समुदायको विश्वास अनुसार महाकाली मन्दिरले गाउँको रक्षा गर्छ, दुःखकष्ट हटाउँछ र भक्तजनहरूको मनोकामना पूरा गर्छ। वैदेशिक रोजगारीमा जानुअघि, नयाँ कार्य सुरु गर्नुअघि वा स्वास्थ्य तथा पारिवारिक सुख-समृद्धिको कामना गर्दा भक्तजनहरू मन्दिरमा आई पूजा गर्ने र भाकल गर्ने परम्परा आजसम्म कायम छ।",
    history_img_caption: "मन्दिरको ऐतिहासिक दृश्य",
    see_more: "थप हेर्नुहोस्",
    see_less: "कम हेर्नुहोस्",
    events_title: "🪔 आगामी कार्यक्रमहरू",
    events_subtitle: "उत्सव र भक्तिमा सहभागी हुनुहोस्",
    event1_name: "मंसिर पूर्णिमा",
    event1_date: "डिसेम्बर २४, २०२६",
    event1_desc:
      "भक्तजनहरू मन्दिरमा आएर पूजा गर्छन्, दीप बाल्छन्, र शान्ति र समृद्धिको आशीर्वाद माग्छन्।",
    event2_name: "चण्डी पूर्णिमा",
    event2_date: "मे ३१, २०२६",
    event2_desc:
      "भक्तजनहरू मन्दिरमा भेला भई देवी चण्डीको पूजा गर्छन्, र शान्ति, समृद्धि र सुरक्षाको आशीर्वाद माग्छन्।",
    event3_name: "हरिबोधिनी एकादशी",
    event3_date: "नोभेम्बर २०, २०२६",
    event3_desc:
      "भक्तजनहरू मन्दिरमा आएर भगवान विष्णुको पूजा गर्छन्, र सुख, समृद्धि र आध्यात्मिक कल्याणको आशीर्वाद माग्छन्।",
    event4_name: "विशेष पूजा",
    event4_date: "बिहानको समयमा",
    event4_desc:
      "कल्याणको लागि प्रार्थना, मनोकामना पूर्ति, समस्या निवारण र भाकल।",
    gallery_title: "🖼️ ग्यालरी",
    gallery_subtitle: "पुनर्निर्माण चरणका फोटोहरू",
    gal1: "पुनर्निर्माण अघि",
    gal2: "छानाको स्ल्याब काम",
    gal3: "स्ल्याब डिजाइन पूर्णता",
    gal4: "मन्दिरको अन्तिम निर्माण",
    committee_title: "🏛️ मन्दिर पुनर्निर्माण समिति",
    committee_subtitle:
      "मन्दिर निर्माण समिति — पुनर्निर्माणको नेतृत्व गर्ने समर्पित सदस्यहरू",
    th_sn: "क्र.सं.",
    th_name: "पूरा नाम",
    th_position: "पद",
    th_name_details: "नाम / विवरण",
    th_amount: "रकम (रु.) / सामग्री",
    pos_chair: "अध्यक्ष",
    pos_treasurer: "कोषाध्यक्ष",
    pos_secretary: "सचिव",
    pos_member: "सदस्य",
    donation_title: "🙏 उदार दानवीरहरू",
    donation_subtitle: "मन्दिरको पुनर्निर्माणमा सहयोग गर्ने दयालु भक्तजनहरू",
    village_donors: "🏡 गाउँका दानवीरहरू",
    outside_donors: "🌏 गाउँ बाहिरका दानवीरहरू",
    show_less: "कम हेर्नुहोस्",
    footer_tagline: "शाश्वत आशीर्वाद | धर्म र भक्ति",
    footer_copy: "© २०२६ महाकाली मन्दिर | सुनापती-१, रामेछाप",
  },
  ja: {
    nav_home: "ホーム",
    nav_history: "歴史",
    nav_events: "イベント",
    nav_gallery: "ギャラリー",
    nav_committee: "委員会",
    nav_donation: "寄付",
    hero_label: "ようこそ",
    hero_title: "マハカリ寺院",
    hero_desc:
      "スナパティ–1、ガラティに位置するこの寺院は、信仰と献身の中心地として知られる神聖な宗教的場所です。歴史的・精神的な意義に満ちており、信者はここを訪れて断食を守り、礼拝の儀式を行い、願いを込めて誓いを立てます。国内外への旅立ちの前に、安全な旅路と成功を祈願して誓いを立てる伝統があります。",
    darshan_hours: "毎日のダルシャン: 午前6時 – 午後4時",
    location: "スナパティ-1、ラメチャップ",
    img_overlay_home: "マハカリ寺院",
    history_title: "📜 歴史",
    history_subtitle: "時代を超えた神聖な遺産",
    history_p1:
      "この寺院は古くから信仰と献身の中心地として知られています。地域の言い伝えによると、昔、クルラル一族の高齢のマガル族の男性が農地を耕していた際、鍬が神像のような石の頭部に当たりました。その石から血のような液体が流れ出たと信じられています。この出来事を神聖な兆しと考えた人々は、その場所を聖地として定め、マハカリ寺院として崇拝し始めました。",
    history_p2:
      "当時、村は飲料水不足に悩まされていました。地元の伝承では、パダム・バハドゥル・クルラルが夢の中で水源の場所を見たとされています。村人たちがその場所を訪れたところ、実際に泉を発見しました。その水源は現在も存在し、寺院の神聖な力と祝福の象徴と考えられています。",
    history_p3:
      "寺院建立後、バドラ・バハドゥル・アスタニが最初の祭司として認められました。それ以来、アスタニ一族の人々が代々祭司を務め、この伝統を今日まで守り続けています。",
    history_p4:
      "地域の人々は、マハカリ寺院が村を守り、苦しみを取り除き、人々の願いを叶えてくれると信じています。海外就労、新しい事業の開始、健康や家族の幸福を願う際には、多くの信者が寺院を訪れて祈りや誓願を捧げます。この信仰と祈りの伝統は現在も受け継がれています。",
    history_img_caption: "寺院の歴史的な眺め",
    see_more: "もっと見る",
    see_less: "閉じる",
    events_title: "🪔 今後のイベント",
    events_subtitle: "祭りと献身にご参加ください",
    event1_name: "マンシル・プルニマ",
    event1_date: "2026年12月24日",
    event1_desc:
      "信者たちは寺院を訪れ、祈りを捧げ、灯りを灯し、平和と繁栄の祝福を求めます。",
    event2_name: "チャンディ・プルニマ",
    event2_date: "2026年5月31日",
    event2_desc:
      "信者たちは寺院に集まり、女神チャンディを崇拝し、平和、繁栄、保護の祝福を求めます。",
    event3_name: "ハリボーディニ・エカダシ",
    event3_date: "2026年11月20日",
    event3_desc:
      "信者たちは寺院を訪れ、ヴィシュヌ神を崇拝し、幸福、繁栄、精神的な安らぎの祝福を求めます。",
    event4_name: "特別なプージャ",
    event4_date: "朝の時間",
    event4_desc: "幸福の祈り、願い事成就、問題解決、誓願。",
    gallery_title: "🖼️ ギャラリー",
    gallery_subtitle: "再建フェーズの写真",
    gal1: "再建前",
    gal2: "屋根スラブ工事",
    gal3: "スラブデザイン完成",
    gal4: "寺院の最終完成",
    committee_title: "🏛️ 寺院再建委員会",
    committee_subtitle:
      "マンディル・ニルマン・サミティ — 再建を主導した献身的なメンバー",
    th_sn: "番号",
    th_name: "氏名",
    th_position: "役職",
    th_name_details: "氏名 / 詳細",
    th_amount: "金額（ルピー）/ 物資",
    pos_chair: "会長",
    pos_treasurer: "会計",
    pos_secretary: "幹事",
    pos_member: "メンバー",
    donation_title: "🙏 寛大な寄付者",
    donation_subtitle: "寺院の再建を支援してくださった親切な信者の方々",
    village_donors: "🏡 村からの寄付者",
    outside_donors: "🌏 村外からの寄付者",
    show_less: "閉じる",
    footer_tagline: "永遠の祝福 | ダルマと献身",
    footer_copy: "© 2026 マハカリ寺院 | スナパティ-1、ラメチャップ",
  },
};

function updateHistoryButtonText() {
  const historyBtn = document.getElementById("historyToggleBtn");
  const historyExtra = document.getElementById("historyExtra");
  const currentLang = document.documentElement.lang || "en";
  const t = translations[currentLang];

  if (historyBtn && historyExtra) {
    const isExpanded = historyExtra.classList.contains("expanded");
    if (isExpanded) {
      historyBtn.textContent = t.see_less || "See Less";
    } else {
      historyBtn.textContent = t.see_more || "See More";
    }
  }
}

(function () {
  var btn = document.getElementById("historyToggleBtn");
  var extra = document.getElementById("historyExtra");
  if (!btn || !extra) return;

  btn.addEventListener("click", function () {
    var isExpanded = extra.classList.toggle("expanded");
    btn.textContent = isExpanded ? "See Less" : "See More";
    btn.setAttribute("aria-expanded", isExpanded);
    extra.setAttribute("aria-hidden", !isExpanded);

    const currentLang = document.documentElement.lang || "en";
    const t = translations[currentLang];
    btn.textContent = isExpanded
      ? t.see_less || "See Less"
      : t.see_more || "See More";
  });
})();

document.querySelectorAll(".see-more-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const table = document.getElementById(this.dataset.table);
    const hiddenRows = table.querySelectorAll(".hidden-row");
    const currentLang = document.documentElement.lang || "en";
    const t = translations[currentLang];

    if (hiddenRows.length > 0) {
      hiddenRows.forEach(function (row) {
        row.classList.remove("hidden-row");
      });
      this.textContent = t.show_less || "Show Less";
    } else {
      table.querySelectorAll("tbody tr").forEach(function (row, index) {
        if (index >= MAX_ROWS) {
          row.classList.add("hidden-row");
        }
      });
      this.textContent = t.see_more || "See More";
      table
        .closest(".donor-block")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const langBtn = document.getElementById("langBtn");
const langDropdown = document.getElementById("langDropdown");
const currentFlag = document.getElementById("currentFlag");
const currentLangLabel = document.getElementById("currentLang");

const langMeta = {
  en: { flag: "🇬🇧", label: "EN" },
  ne: { flag: "🇳🇵", label: "नेपाली" },
  ja: { flag: "🇯🇵", label: "日本語" },
};

function updateLanguage(selectedLang) {
  const t = translations[selectedLang];

  currentFlag.textContent = langMeta[selectedLang].flag;
  currentLangLabel.textContent = langMeta[selectedLang].label;

  document.documentElement.lang = selectedLang;

  const allKeys = Object.keys(t);

  allKeys.forEach(function (key) {
    const elements = document.querySelectorAll('[id="' + key + '"]');
    elements.forEach(function (element) {
      if (element && t[key] !== undefined) {
        if (element.children.length === 0) {
          element.textContent = t[key];
        } else {
          element.textContent = t[key];
        }
      }
    });
  });

  updateHistoryButtonText();

  document.querySelectorAll(".see-more-btn").forEach(function (btn) {
    const table = document.getElementById(btn.dataset.table);
    if (table) {
      const hiddenCount = table.querySelectorAll(".hidden-row").length;
      if (hiddenCount > 0) {
        btn.textContent = t.see_more || "See More";
      } else {
        btn.textContent = t.show_less || "Show Less";
      }
    }
  });

  localStorage.setItem("preferred_language", selectedLang);
}

if (langBtn) {
  langBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    langBtn.classList.toggle("open");
    if (langDropdown) langDropdown.classList.toggle("open");
  });
}

document.addEventListener("click", function () {
  if (langBtn) langBtn.classList.remove("open");
  if (langDropdown) langDropdown.classList.remove("open");
});

if (langDropdown) {
  langDropdown.querySelectorAll(".lang-option").forEach(function (option) {
    option.addEventListener("click", function (e) {
      e.stopPropagation();

      const selectedLang = this.dataset.lang;

      langDropdown.querySelectorAll(".lang-option").forEach(function (opt) {
        opt.classList.remove("active-lang");
      });
      this.classList.add("active-lang");

      updateLanguage(selectedLang);

      if (langBtn) langBtn.classList.remove("open");
      if (langDropdown) langDropdown.classList.remove("open");
    });
  });
}

const savedLang = localStorage.getItem("preferred_language");
if (savedLang && translations[savedLang]) {
  updateLanguage(savedLang);
  if (langDropdown) {
    langDropdown.querySelectorAll(".lang-option").forEach(function (opt) {
      if (opt.dataset.lang === savedLang) {
        opt.classList.add("active-lang");
      } else {
        opt.classList.remove("active-lang");
      }
    });
  }
} else {
  updateLanguage("en");
  if (langDropdown) {
    const enOption = langDropdown.querySelector('.lang-option[data-lang="en"]');
    if (enOption) enOption.classList.add("active-lang");
  }
}
