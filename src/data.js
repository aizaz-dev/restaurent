const products = [
  {
    id: 1,
    title: "ترفل وبيض",
    price: "SAR 48.00",
    calories: "788 سعرة حرارية",
    description:
      "بيض مقلي مع الفطر بصوص الكمأة\nيعلوه البطاطا الحلوة المقرمشة\n-يُقدم مع البطاطا المحمرة",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/truffle__eggs_16547256375645650.jpg.64x64_q100_crop.jpg",
    category: "الفطور",
    subCategoryTitle: "الرئيسية",
    subcategory: "الرئيسية",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/main_16813027723124350.jpeg",
  },
  {
    id: 2,
    title: "سبانخ وبيض",
    price: "SAR 49.00",
    calories: "655 سعرة حرارية",
    description:
      "الفطر البري. السبانخ. البيض .جبن بارميزان. الاعشاب الايطالية و كريمة غنية\n-يُقدم مع خبز فرنسي",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/green__eggs_16547256596543226.jpeg.64x64_q100_crop.jpg",
    category: "الفطور",
    subcategory: "الرئيسية",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/main_16813027723124350.jpeg",
  },
  {
    id: 3,
    title: "البيض الإيطالي",
    price: "SAR 41.00",
    calories: "550 سعرة حرارية",
    description:
      "البيض  مع الأعشاب الإيطالية ( الزعتر البري وإكليل الجبل ) بصلصة طماطم غنية\n-يُقدم مع البطاطا المحمرة",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/italian_eggs_16547257102621288.jpg.64x64_q100_crop.jpg",
    category: "الفطور",
    subcategory: "الرئيسية",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/main_16813027723124350.jpeg",
  },
  {
    id: 4,
    title: "شكشوكة",
    price: "SAR 38.00",
    calories: "629 سعرة حرارية",
    description:
      "بيض في صلصة طماطم غنية ، يعلوه جبن تشدر و زبادي يوناني\n-يُقدم مع خبز البراتا",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/shakshuka_16547257269572046.jpeg.64x64_q100_crop.jpg",
    category: "الفطور",
    subcategory: "الرئيسية",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/main_16813027723124350.jpeg",
  },
  {
    id: 5,
    title: "كروك مسيو",
    price: "SAR 52.00",
    calories: "1355 سعرة حرارية",
    description:
      "خبز بريوش فرنسي محشو باللحم المفروم وجبن موتزاريلا و صلصة البيض اللذيذة\n-يُقدم مع الخضروات الطازجة و البطاطا المقلية",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/croque_monsieur_16547257432701726.jpeg.64x64_q100_crop.jpg",
    category: "الفطور",
    subcategory: "الرئيسية",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/main_16813027723124350.jpeg",
  },
  {
    id: 6,
    title: "فطائر الجبنة",
    price: "SAR 37.00",
    calories: "672 سعرة حرارية",
    description:
      "عجينة الفطيرة المحشوة بالجبنة مع رشة من الزبيب\n-يُقدم مع صلصة التفاح",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/cheese_tart_16547257723418738.jpeg.64x64_q100_crop.jpg",
    category: "الفطور",
    subcategory: "الرئيسية",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/main_16813027723124350.jpeg",
  },
  {
    id: 7,
    title: "فطائر السبانخ",
    price: "SAR 39.00",
    calories: "688 سعرة حرارية",
    description:
      "عجينة الفطيرة المحشوة بالسبانخ والجبنة مع طبقة من البيض اللين على القمة\n-يُقدم مع صلصة التفاح",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/spinach_tart_16547257916716010.jpeg.64x64_q100_crop.jpg",
    category: "الفطور",
    subcategory: "الرئيسية",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/main_16813027723124350.jpeg",
  },
  {
    id: 8,
    title: "بانكيك",
    price: "SAR 32.00",
    calories: "876 سعرة حرارية",
    description:
      "البانكيك الكلاسيكي مع شراب القيقب وشراب العسل والزبدة\n-يُقدم مع الفواكه الطازجة",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/pancakes_16547258100429227.jpeg.64x64_q100_crop.jpg",
    category: "الفطور",
    subcategory: "الرئيسية",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/main_16813027723124350.jpeg",
  },
  {
    id: 9,
    title: "جبن البارميزان المقلي",
    price: "SAR 26.00",
    calories: "537 سعرة حرارية",
    description:
      "قطع جبن البارميزان المقلية على الطريقة الإيطالية الكلاسيكية\n-يُقدم مع الجرجير الطازج وزيت الزيتون",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/fried_parmesan_cheese_16547258284271355.jpeg.64x64_q100_crop.jpg",
    category: "الفطور",
    subcategory: "الرئيسية",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/main_16813027723124350.jpeg",
  },
  {
    id: 88,
    title: "‎غراين وتونا",
    price: "SAR 45.00",
    calories: "479 سعرة حرارية",
    description:
      "‎خبز الغرين الاسمر بالحبوب محشي تونا . خس . طماطم و مخلل -‎يُقدم مع بطاطا مقلية",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/gain__tuna_16547260749084988.jpeg.64x64_q100_crop.jpg",
    category: "الفطور",
    subcategory: "ساندويتشات",
    subCategoryTitle: "ساندويتشات",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/sandwiches_16813029051472938.jpeg",
  },
  {
    id: 89,
    title: "ستيك وجبن",
    price: "SAR 67.00",
    calories: "569 سعرة حرارية",
    description:
      "جبنة فيتا، لبنة، متبل، فلافل، باذنجان، بيض، زيتون، خيار شيري توماتو، جرجير، نعناع، زعتر وزيت زيتون، -يقدم مع خبز بوراتا",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/steak__cheese_16547260947675770.jpeg.64x64_q100_crop.jpg",
    category: "الفطور",
    subcategory: "ساندويتشات",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/sandwiches_16813029051472938.jpeg",
  },
  {
    id: 90,
    title: "‎حلومي وفوكاشيا",
    price: "SAR 52.00",
    calories: "412 سعرة حرارية",
    description:
      "‎خبز الفوكاشيا محشي حلوم مشوي و طماطم مجففة مع صلصة البيستو والريحان والزعتر البري -‎يُقدم مع البطاطا المقلية",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/halloumi__focaccia_16547261109793050.jpeg.64x64_q100_crop.jpg",
    category: "الفطور",
    subcategory: "ساندويتشات",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/sandwiches_16813029051472938.jpeg",
  },
  {
    id: 112,
    title: "‎دجاج وبانيني",
    price: "SAR 59.00",
    calories: "508 سعرة حرارية",
    description: "‎خيز بانيني ايطالي . دجاج مشوي . افوكادو و طماطم",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/chicken__panini_16547261292499502.jpeg.64x64_q100_crop.jpg",
    category: "الفطور",
    subcategory: "ساندويتشات",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/sandwiches_16813029051472938.jpeg",
  },
  {
    id: 127,
    title: "‎جبن وتركي",
    price: "SAR 57.00",
    calories: "520 سعرة حرارية",
    description:
      "‎خبز السبيل مع جبنة اومليت . كاشير . صدور الديك الرومي المشوية و طماطم",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/cheese__turkey_16547261431452010.jpeg.64x64_q100_crop.jpg",
    category: "الفطور",
    subcategory: "ساندويتشات",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/sandwiches_16813029051472938.jpeg",
  },
  {
    id: "11375924",
    title: "كروسان الزبدة",
    price: "SAR 20.00",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/butter_croissant_16820408359386638.jpg.64x64_q100_crop.jpg",
    calories: "250",
    description: "كروسان الزبدة اللذيذ والهش مع مذاق الزبدة الغنية.",
    subcategory: "كروسان",
    subCategoryTitle: "كروسان",
    category: "الفطور",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/croissant_16813031769035148.jpeg",
  },
  {
    id: "12954678",
    title: "كروسان الشوكولاتة",
    price: "SAR 22.00",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/chocolate_croissant_16820408555315922.jpg.64x64_q100_crop.jpg",
    calories: "300",
    description: "كروسان الشوكولاتة اللذيذ المحشو بالشوكولاتة الغنية.",
    subcategory: "كروسان",
    category: "الفطور",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/croissant_16813031769035148.jpeg",
  },
  {
    id: "13045327",
    title: "كروسان البيستاشيو",
    price: "SAR 22.00",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/pistachio_croissant_16820408711197322.jpg.64x64_q100_crop.jpg",
    calories: "280",
    description: "كروسان البيستاشيو المميز بحشوة البيستاشيو اللذيذة.",
    subcategory: "كروسان",
    category: "الفطور",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/croissant_16813031769035148.jpeg",
  },
  {
    id: "13278956",
    title: "كروسان الجبنة",
    price: "SAR 23.00",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/cheese_croissant_16820408885997084.jpg.64x64_q100_crop.jpg",
    calories: "320",
    description: "كروسان الجبنة المقرمش محشوة بالجبنة اللذيذة.",
    subcategory: "كروسان",
    category: "الفطور",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/croissant_16813031769035148.jpeg",
  },
  {
    id: "13312456",
    title: "كروسان اللوز",
    price: "SAR 22.00",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/almond_croissant_16820409046448448.jpg.64x64_q100_crop.jpg",
    calories: "270",
    description: "كروسان اللوز الرائع المحشو بحبات اللوز الطيبة.",
    subcategory: "كروسان",
    category: "الفطور",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/croissant_16813031769035148.jpeg",
  },
  {
    id: "83672501",
    title: "كلاسيك بانكيك",
    price: "SAR 46.00",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/pancake_classic_16547266831302092.jpg.64x64_q100_crop.jpg",
    calories: "329 سعرة حرارية",
    description:
      "‎فطائر البانكيك الكلاسيكية مع الفراولة والتوت البري  تُقدم مع صوص القيقب",
    subcategory: "محطة الحلويات",
    subCategoryTitle: "محطة الحلويات",
    category: "الفطور",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/sweet_station_16813032737540398.jpeg",
  },
  {
    id: "83672502",
    title: "شوكو بانكيك",
    price: "SAR 49.00",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/choco_pancake_16547267051893964.jpg.64x64_q100_crop.jpg",
    calories: "402 سعرة حرارية",
    description:
      "‎فطائر البان كيك المحشوة بكريمة البندق بالشوكولا ‎تُقدم مع صوص الشوكولا والبندق المحمص",
    subcategory: "محطة الحلويات",
    category: "الفطور",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/sweet_station_16813032737540398.jpeg",
  },
  {
    id: "83672503",
    title: "فرنش توست",
    price: "SAR 39.00",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/french_toast_16547267182369044.jpg.64x64_q100_crop.jpg",
    calories: "418 سعرة حرارية",
    description:
      "‎خبز بريوش فرنسي كلاسيكي مع التوت البري والفراولة ‎يُقدم مع صوص القيقب",
    subcategory: "محطة الحلويات",
    category: "الفطور",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/sweet_station_16813032737540398.jpeg",
  },
  {
    id: "83672504",
    title: "وافل",
    price: "SAR 42.00",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/classic_waffle_16547268452861910.jpg.64x64_q100_crop.jpg",
    calories: "309 سعرة حرارية",
    description: "‎وافل كلاسيكي مع الفراولة والتوت البري ‎ يُقدم مع صوص القيقب",
    subcategory: "محطة الحلويات",
    category: "الفطور",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/sweet_station_16813032737540398.jpeg",
  },
  {
    id: "1234567842",
    category: "الغداء والعشاء",
    subcategory: "الشوربة",
    subCategoryTitle: "الشوربة",
    title: "شوربة الفطر بالكمأة",
    price: "SAR 42.00",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/wild_mushroom_16541957084085304.jpeg.64x64_q100_crop.jpg",
    calories: "220 سعرة حرارية",
    description: "شوربة الفطر بالكريمة مع زيت الكمأة",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/soups_16813034618106546.jpeg",
  },
  {
    id: "87654321",
    category: "الغداء والعشاء",
    subcategory: "الشوربة",
    title: "إيتاليان سي فود",
    price: "SAR 51.00",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/italian_seafood_16541957376288012.jpeg.64x64_q100_crop.jpg",
    calories: "195 سعرة حرارية",
    description:
      "خليط من الروبيان، المحار وسرطان البحر بكريمة غنية بالأعشاب الإيطالية",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/soups_16813034618106546.jpeg",
  },
  {
    id: "12345678",
    title: "سلطة جبنة الماعز",
    price: "SAR 52.00",
    calories: "329 سعرة حرارية",
    description:
      "الخس الأمريكي، أوراق السبانخ، الأفوكادو، بلاك بيري مع الجبنة الماعز والجوز المكرمل وتقدم مع صلصة التوت البري",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/goat_cheese_salad_16541959656972184.jpg.64x64_q100_crop.jpg",
    category: "الغداء والعشاء",
    subcategory: "السلطات",
    subCategoryTitle: "السلطات",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/salads_16813035945444742.jpeg",
  },
  {
    id: "234567893",
    title: "سلطة الكينوا",
    price: "SAR 45.00",
    calories: "241 سعرة حرارية",
    description: "كينوا . رومان . باذنجان . جبن فيتا . زيتون",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/quinoa_salad_16817764496782656.jpg.64x64_q100_crop.jpg",
    category: "الغداء والعشاء",
    subcategory: "السلطات",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/salads_16813035945444742.jpeg",
  },
  {
    id: "3456789022",
    title: "سلطة السلطون",
    price: "SAR 49.00",
    calories: "310 سعرة حرارية",
    description: "لحم السلطون . افوكادو . مانغو . زبادي يوناني",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/crab_salad_16817764821373976.jpg.64x64_q100_crop.jpg",
    category: "الغداء والعشاء",
    subcategory: "السلطات",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/salads_16813035945444742.jpeg",
  },
  {
    id: "4567890154",
    title: "سلطة القيصر",
    price: "SAR 43.00",
    calories: "210 سعرة حرارية",
    description: "خس روماني . دجاج مشوي . جبن برميزان",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/caesar_salad_16817765257334488.jpg.64x64_q100_crop.jpg",
    category: "الغداء والعشاء",
    subcategory: "السلطات",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/salads_16813035945444742.jpeg",
  },
  {
    id: "56789012",
    title: "بوراتا",
    price: "SAR 65.00",
    calories: "",
    description: "سلطة البوراتا مع الخوخ المشوي والصوص الايطالي",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/burrata_16823622317460992.jpg.64x64_q100_crop.jpg",
    category: "الغداء والعشاء",
    subcategory: "السلطات",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/salads_16813035945444742.jpeg",
  },
  {
    id: "1234567812",
    title: "ماما ميا",
    price: "SAR 41.00",
    calories: "399 سعرة حرارية",
    description: "بطاطا مقلية بالبرميزان مع زيت الكمأة وصوص الكمأة",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/mama_mia_16817495187160298.jpg.64x64_q100_crop.jpg",
    subcategory: "المقبلات",
    subCategoryTitle: "المقبلات",
    category: "الغداء والعشاء",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/appetizers_16813042596333216.jpeg",
  },
  {
    id: "2345678946",
    title: "روبيان البرميزان",
    price: "SAR 58.00",
    calories: "310 سعرة حرارية",
    description: "روبيان مطهو بكريمة البرميزان",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/parmesan_shrimp_16817497036685958.jpg.64x64_q100_crop.jpg",
    subcategory: "المقبلات",
    category: "الغداء والعشاء",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/appetizers_16813042596333216.jpeg",
  },
  {
    id: "34567890",
    title: "مقرمشات السلطون",
    price: "SAR 48.00",
    calories: "205 سعرة حرارية",
    description: "رز جاسمين مقلي مع السلطون والافكادو والمانجو",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/crab_bites_16817498284125784.jpg.64x64_q100_crop.jpg",
    subcategory: "المقبلات",
    category: "الغداء والعشاء",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/appetizers_16813042596333216.jpeg",
  },
  {
    id: "45678901",
    title: "كلاماري",
    price: "SAR 53.00",
    calories: "348 سعرة حرارية",
    description: "كلاماري مقلي مع صوص التارتار",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/calamari_16817668373911694.jpg.64x64_q100_crop.jpg",
    subcategory: "المقبلات",
    category: "الغداء والعشاء",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/appetizers_16813042596333216.jpeg",
  },
  {
    id: "5678901293",
    title: "ميلانزانا",
    price: "SAR 42.00",
    calories: "371 سعرة حرارية",
    description:
      "خبز بيتا مقلي مع الباذنجان مع الحمص والرومان بصوص الطحينية و دبس التمر",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/melanzana_16817502165048404.jpeg.64x64_q100_crop.jpg",
    subcategory: "المقبلات",
    category: "الغداء والعشاء",
    subcategoryImage:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/categories/appetizers_16813042596333216.jpeg",
  },
  //
  {
    id: 17,
    category: "الغداء والعشاء",
    subCategoryTitle: "الباستا",
    subcategory: "الباستا",
    title: "ترفل رافيولي",
    price: "SAR 81.00",
    calories: "697 سعرة حرارية",
    description:
      "رافيولي إيطالية مصنوعة في مطبخنا محشوة بجبنة الريكوتا الإيطالية مع الفطر بكريمة الكمأة والجوز المحمص",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/truffle_ravioli_16817768742569490.jpg.64x64_q100_crop.jpg",
  },
  {
    id: 18,
    category: "الغداء والعشاء",
    subcategory: "الباستا",
    title: "ألفريدو",
    price: "SAR 69.00",
    calories: "651 سعرة حرارية",
    description:
      "فيتوشيني مع شرائح الدجاج المشوية وسوتيه الفطر بكريمة ألفريدو الغنية",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/alfredo_16817769215179030.jpg.64x64_q100_crop.jpg",
  },
  {
    id: 19,
    category: "الغداء والعشاء",
    subcategory: "الباستا",
    title: "سي فود سباغتي",
    price: "SAR 79.00",
    calories: "699 سعرة حرارية",
    description:
      "مزيج من الماكولات البحرية في صلصة نبيذ ابيض غير كحولي مع باستا السباغيتي",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/seafood_spaghetti_16817772108922474.jpeg.64x64_q100_crop.jpg",
  },
  {
    id: 195,
    category: "الغداء والعشاء",
    subcategory: "الباستا",
    title: "كانيلوني",
    price: "SAR 72.00",
    calories: "540 سعرة حرارية",
    description:
      "باستا محشية بلحم البقر المفروم مع صلصة اربياتا و كريمة البشاميل",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/cannelloni_16817774125392336.jpg.64x64_q100_crop.jpg",
  },
  {
    id: 230,
    category: "الغداء والعشاء",
    subcategory: "الباستا",
    title: "بيستو باستا",
    price: "",
    calories: "",
    description: "باستا مع البيستو والدجاج",
    image: "",
  },
  //
  {
    id: 33,
    category: "الغداء والعشاء",
    subcategory: "الأطباق الرئيسية",
    subCategoryTitle: "الأطباق الرئيسية",
    title: "افيرسا",
    price: "SAR 79.00",
    calories: "1300 سعرة حرارية",
    description:
      "الريزوتو الايطالي بالقطر وزيت الكمأة في صلصة كريمية مع الروبيان",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/averse_16817776698644866.jpeg.64x64_q100_crop.jpg",
  },
  {
    id: 136,
    category: "الغداء والعشاء",
    subcategory: "الأطباق الرئيسية",
    title: "سيجولا",
    price: "SAR 105.00",
    calories: "867 سعرة حرارية",
    description:
      "فيله سمك السي باس مع صلصة الليمون والزبدة مطهو بنبيذ ابيض غير كحولي",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/spigola_16817778863680342.jpg.64x64_q100_crop.jpg",
  },
  {
    id: 196,
    category: "الغداء والعشاء",
    subcategory: "الأطباق الرئيسية",
    title: "صوفيو",
    price: "SAR 79.00",
    calories: "560 سعرة حرارية",
    description: "عجينة البف باستري محشوة بالدجاج والفطر مع كريمة الباشميل",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/soffio_16817780371509940.jpg.64x64_q100_crop.jpg",
  },
  {
    id: 197,
    category: "الغداء والعشاء",
    subcategory: "الأطباق الرئيسية",
    title: "بيستيكا",
    price: "SAR 185.00",
    calories: "789 سعرة حرارية",
    description:
      "ستيك الواغيو ( الريب اي ) المشوي يقدم مع البطاطا المخبوزة بالزبدة تعلوها الكريمة الحامضة وصلصة الفطر",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/bistecca_16817782952984280.jpg.64x64_q100_crop.jpg",
  },
  //
  {
    id: 35,
    title: "إيتاليانو",
    price: "SAR 70.00",
    calories: "678 سعرة حرارية",
    description: "زيت الكمأة، مشروم، زعتر بري، موزاريلا، جبنة البرميزان",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/italiano_16541981017498634.jpeg.64x64_q100_crop.jpg",
    subcategory: "الخبز المسطح",
    subCategoryTitle: "الخبز المسطح",
    category: "الغداء والعشاء",
  },
  {
    id: 36,
    title: "مارغريتا",
    price: "SAR 78.00",
    calories: "622 سعرة حرارية",
    description: "صلصة الطماطم، الريحان، الزعترالبري وموزاريلا",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/portofino_16541981276726560.jpeg.64x64_q100_crop.jpg",
    subcategory: "الخبز المسطح",
    category: "الغداء والعشاء",
  },
  {
    id: 229,
    title: "بيانكا",
    price: "SAR 86.00",
    calories: "",
    description: "صوص الفريدو . موزاريلا. ريكوتا . لحم برزولا الايطالي",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/bianca_16820413827379144.jpg.64x64_q100_crop.jpg",
    subcategory: "الخبز المسطح",
    category: "الغداء والعشاء",
  },
  {
    id: 231,
    title: "Steak caramelized onion",
    price: "",
    calories: "",
    description: "عجينة ايطالية رقيقة مع لحم الواغيو البقري والبصل المكرمل",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/%D8%B3%D8%AA%D9%8A%D9%83_%D9%81%D9%84%D8%A7%D8%AA_%D8%A8%D8%B1%D8%AF_16820416722139692.jpg.64x64_q100_crop.jpg",
    subcategory: "الخبز المسطح",
    category: "الغداء والعشاء",
  },
  //
  {
    id: 38,
    title: "غراين وتونة",
    price: "SAR 48.00",
    calories: "479 سعرة حرارية",
    description:
      "خبز الغرين الأسمر بالحبوب محشي تونا، خس، طماطم ومخلل يقدم مع بطاطا مقلية",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/gain__tuna_16541983196268192.jpeg.64x64_q100_crop.jpg",
    subcategory: "الساندوتشات",
    subCategoryTitle: "الساندوتشات",
    category: "الغداء والعشاء",
  },
  {
    id: 39,
    title: "حلومي & فوكاشيا",
    price: "SAR 52.00",
    calories: "412 سعرة حرارية",
    description:
      "خبز الفوكاشيا محشي حلوم مشوي وطماطم مجففة مع صلصة البيستو والريحان والزعتر البري يقدم مع البطاطا المقلية",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/halloumi__focaccia_16539152043326602.jpg.64x64_q100_crop.jpg",
    subcategory: "الساندوتشات",
    category: "الغداء والعشاء",
  },
  {
    id: 40,
    title: "ستيك وجبن",
    price: "SAR 63.00",
    calories: "569 سعرة حرارية",
    description:
      "خبز بالحليب محشي لحم تندرليون البقري المشوي وجبن موزاريلا يقدم مع بطاطا مقلية",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/steak__cheese_16541983766708264.jpeg.64x64_q100_crop.jpg",
    subcategory: "الساندوتشات",
    category: "الغداء والعشاء",
  },
  {
    id: 41,
    title: "دجاج & بانيني",
    price: "SAR 59.00",
    calories: "508 سعرة حرارية",
    description: "خبز بانيني إيطالي، دجاج مشوي، أفوكادو، بيكون وطماطم",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/chicken__panini_16539158448161698.jpg.64x64_q100_crop.jpg",
    subcategory: "الساندوتشات",
    category: "الغداء والعشاء",
  },
  {
    id: 42,
    title: "تركي أند تشيز",
    price: "SAR 44.00",
    calories: "410 سعرة حرارية",
    description:
      "خبز بريوش محشي مرتديلا تركي وجبن سويسري مع الطماطم يقدم مع البطاطا المقلية",
    image: null,
    subcategory: "الساندوتشات",
    category: "الغداء والعشاء",
  },
  //
  {
    id: "2371",
    title: "بيناكولادا",
    price: "SAR 39.00",
    description: "أناناس . كريمة جوز الهند . شراب جوز الهند",
    image: null,
    subcategory: "سجنتشر موكتيل",
    subCategoryTitle: "سجنتشر موكتيل",
    category: "المشروبات",
  },
  {
    id: "3548",
    title: "مارغريتا",
    price: "SAR 34.00",
    description: "بيبر مينت . ليمون . ريحان",
    image: null,
    subcategory: "سجنتشر موكتيل",
    category: "المشروبات",
  },
  {
    id: "4962",
    title: "بلوبري لوميناد",
    price: "SAR 37.00",
    description: "توت ازرق . ليمون . نعناع كلوب صودا",
    image: null,
    subcategory: "سجنتشر موكتيل",
    category: "المشروبات",
  },
  {
    id: "8273",
    title: "نجيتو",
    price: "SAR 34.00",
    description: "مشروب مهيتو منعش بالليمون الاخضر",
    image: null,
    subcategory: "سجنتشر موكتيل",
    category: "المشروبات",
  },
  {
    id: "9045",
    title: "ايس تي",
    price: "SAR 32.00",
    description: "خوخ . شاي . ثلج . نعناع .",
    image: null,
    subcategory: "سجنتشر موكتيل",
    category: "المشروبات",
  },
  {
    id: "1479",
    title: "ميهتو الرومان والزنجبيل",
    price: "SAR 35.00",
    description: "",
    image: null,
    subcategory: "سجنتشر موكتيل",
    category: "المشروبات",
  },
  //
  {
    id: "53",
    title: "عصير برتقال طازج",
    price: "SAR 22.00",
    description: "",
    image: null,
    subcategory: "عصائر فريش",
    subCategoryTitle: "عصائر فريش",
    category: "المشروبات",
  },
  {
    id: "55",
    title: "عصير افوكادو طازج",
    price: "SAR 39.00",
    description: "",
    image: null,
    subcategory: "عصائر فريش",
    category: "المشروبات",
  },
  {
    id: "57",
    title: "عصير ليمون اخضر",
    price: "SAR 17.00",
    description: "",
    image: null,
    subcategory: "عصائر فريش",
    category: "المشروبات",
  },
  //
  {
    id: "58",
    title: "شاهي انكليزي",
    price: "SAR 22.00",
    description: "",
    image: null,
    subcategory: "أفضل أختيار للشاهي",
    subCategoryTitle: "أفضل أختيار للشاهي",
    category: "المشروبات",
  },
  {
    id: "59",
    title: "شاهي ايرل غراي",
    price: "SAR 23.00",
    description: "",
    image: null,
    subcategory: "أفضل أختيار للشاهي",
    category: "المشروبات",
  },
  {
    id: "61",
    title: "شاهي أخضر",
    price: "SAR 18.00",
    description: "",
    image: null,
    subcategory: "أفضل أختيار للشاهي",
    category: "المشروبات",
  },
  {
    id: "62",
    title: "شاهي أخضر مع نعناع",
    price: "SAR 19.00",
    description: "",
    image: null,
    subcategory: "أفضل أختيار للشاهي",
    category: "المشروبات",
  },
  {
    id: "63",
    title: "كرك",
    price: "SAR 22.00",
    description: "",
    image: null,
    subcategory: "أفضل أختيار للشاهي",
    category: "المشروبات",
  },
  {
    id: "64",
    title: "شاهي اسود",
    price: "SAR 19.00",
    description: "",
    image: null,
    subcategory: "أفضل أختيار للشاهي",
    category: "المشروبات",
  },
  //
  {
    id: 65,
    title: "اسبريسو",
    price: "SAR 16.00",
    description: null,
    image: null,
    subcategory: "القهوة",
    subCategoryTitle: "القهوة",
    category: "المشروبات",
  },
  {
    id: 66,
    title: "‎دوبل شوت اسبريسو",
    price: "SAR 20.00",
    description: null,
    image: null,
    subcategory: "القهوة",
    category: "المشروبات",
  },
  {
    id: 67,
    title: "أمريكانو",
    price: "SAR 18.00",
    description: null,
    image: null,
    subcategory: "القهوة",
    category: "المشروبات",
  },
  {
    id: 68,
    title: "لاتيه",
    price: "SAR 21.00",
    description: null,
    image: null,
    subcategory: "القهوة",
    category: "المشروبات",
  },
  {
    id: 69,
    title: "كابتشينو",
    price: "SAR 21.00",
    description: null,
    image: null,
    subcategory: "القهوة",
    category: "المشروبات",
  },
  {
    id: 70,
    title: "قهوة فرنسية بالبندق",
    price: "SAR 20.00",
    description: null,
    image: null,
    subcategory: "القهوة",
    category: "المشروبات",
  },
  {
    id: 71,
    title: "قهوة تركية",
    price: "SAR 18.00",
    description: null,
    image: null,
    subcategory: "القهوة",
    category: "المشروبات",
  },
  {
    id: 72,
    title: "فلات وايت",
    price: "SAR 18.00",
    description: null,
    image: null,
    subcategory: "القهوة",
    category: "المشروبات",
  },
  {
    id: 73,
    title: "كراميل لاتيه",
    price: "SAR 25.00",
    description: null,
    image: null,
    subcategory: "القهوة",
    category: "المشروبات",
  },
  {
    id: 74,
    title: "‎ماكياتو",
    price: "SAR 19.00",
    description: null,
    image: null,
    subcategory: "القهوة",
    category: "المشروبات",
  },
  {
    id: 75,
    title: "‎سبانيش لاتيه",
    price: "SAR 24.00",
    description: null,
    image: null,
    subcategory: "القهوة",
    category: "المشروبات",
  },
  {
    id: 76,
    title: "وايت موكا",
    price: "SAR 24.00",
    description: null,
    image: null,
    subcategory: "القهوة",
    category: "المشروبات",
  },
  {
    id: 77,
    title: "كورتادو",
    price: "SAR 22.00",
    description: null,
    image: null,
    subcategory: "القهوة",
    category: "المشروبات",
  },
  {
    id: 233,
    title: "اسبريسو ايسكريم",
    price: "SAR 31.00",
    description: null,
    image: null,
    subcategory: "القهوة",
    category: "المشروبات",
  },
  //
  {
    id: 78,
    title: "سبانيش لاتيه",
    price: "SAR 23.00",
    description: null,
    image: null,
    subcategory: "محطة القهوة الباردة",
    subCategoryTitle: "محطة القهوة الباردة",
    category: "المشروبات",
  },
  {
    id: 79,
    title: "آيس كراميل لاتيه",
    price: "SAR 24.00",
    description: null,
    image: null,
    subcategory: "محطة القهوة الباردة",
    category: "المشروبات",
  },
  {
    id: 80,
    title: "كولد أمريكانوا",
    price: "SAR 18.00",
    description: null,
    image: null,
    subcategory: "محطة القهوة الباردة",
    category: "المشروبات",
  },
  //
  {
    id: 81,
    title: "مياه غازية",
    price: null,
    description: null,
    image: null,
    subCategoryTitle: "مياه",
    subcategory: "مياه",
    category: "المشروبات",
  },
  {
    id: 82,
    title: "ستيل",
    price: null,
    description: null,
    image: null,
    subcategory: "مياه",
    category: "المشروبات",
  },
  //
  {
    id: 239,
    title: "كولا",
    price: "SAR 11.00",
    description: null,
    image: null,
    subcategory: "مشروبات غازية",
    subCategoryTitle: "مشروبات غازية",
    category: "المشروبات",
  },
  {
    id: 240,
    title: "دايت كولا",
    price: "SAR 11.00",
    description: null,
    image: null,
    subcategory: "مشروبات غازية",
    category: "المشروبات",
  },
  {
    id: 241,
    title: "سفن اب",
    price: "SAR 11.00",
    description: null,
    image: null,
    subcategory: "مشروبات غازية",
    category: "المشروبات",
  },
  {
    id: 242,
    title: "دايت سفن اب",
    price: "SAR 11.00",
    description: null,
    image: null,
    subcategory: "مشروبات غازية",
    category: "المشروبات",
  },
  {
    id: 243,
    title: "ريد بول",
    price: "SAR 25.00",
    description: null,
    image: null,
    subcategory: "مشروبات غازية",
    category: "المشروبات",
  },
  //
  {
    title: "ابل تارت",
    price: "SAR 49.00",
    description:
      "فطيرة التفاح الساخنة بالكراميل ،  قرفة الكرمبل . جوز ايسكريم الفانيلا يستغرق ١٥ دقيقة لتقديمها",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/apple_tart_16551123781612412.jpeg.64x64_q100_crop.jpg",
    subcategory: "الحلا",
    subCategoryTitle: "الحلا",
    category: "الحلويات",
  },
  {
    title: "ميد نايت",
    price: "SAR 52.00",
    description:
      "كوكي الفدج بالشوكولا . الشوكولا شيبس . ايسكريم الفانيلا يستغرق ١٥ دقيقة لتقديمها",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/midnight_16551124497320370.jpeg.64x64_q100_crop.jpg",
    subcategory: "الحلا",
    category: "الحلويات",
  },
  {
    title: "هيفن",
    price: "SAR 51.00",
    description: "كوكي الشوكولا شيبس المخبوز يُقدم ساخناً مع ايسكريم الفانيلا",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/heaven_16551125319784364.jpeg.64x64_q100_crop.jpg",
    subcategory: "الحلا",
    category: "الحلويات",
  },
  {
    title: "بلوبري كيك",
    price: "SAR 49.00",
    description: "",
    image:
      "https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1653895460_afnahg/items/blueberry_cake_16551125649511978.jpeg.64x64_q100_crop.jpg",
    subcategory: "الحلا",
    category: "الحلويات",
  },
  {
    title: "كاروت كيك",
    price: "SAR 49.00",
    description: "",
    image: "",
    subcategory: "الحلا",
    category: "الحلويات",
  },
  {
    title: "تشوكولات رازبري كيك",
    price: "SAR 49.00",
    description: "",
    image: "",
    subcategory: "الحلا",
    category: "الحلويات",
  },
  {
    title: "سالتد كراميل تشوكولات كبكً",
    price: "SAR 49.00",
    description: "",
    image: "",
    subcategory: "الحلا",
    category: "الحلويات",
  },
  {
    title: "تيراميسو",
    price: "SAR 49.00",
    description: "",
    image: "",
    subcategory: "الحلا",
    category: "الحلويات",
  },
  {
    title: "بيكان شيز كيك",
    price: "SAR 49.00",
    description: "",
    image: "",
    subcategory: "الحلا",
    category: "الحلويات",
  },
  //

  {
    id: "1234567",
    title: "معسل تفاحتين الفاخر",
    price: "SAR 65.00",
    description: "",
    image: "",
    subcategory: "الحلا",
    subCategoryTitle: "الأرقيلة",
    category: "الأرقيلة",
  },
  {
    id: "2345678",
    title: "تفاحتين النخلة",
    price: "SAR 65.00",
    description: "",
    image: "",
    subcategory: "الأرقيلة",
    category: "الأرقيلة",
  },
  {
    id: "3456789",
    title: "نعناع الفاخر",
    price: "SAR 65.00",
    description: "",
    image: "",
    subcategory: "الأرقيلة",
    category: "الأرقيلة",
  },
  {
    id: "4567890",
    title: "العنب الفاخر",
    price: "SAR 65.00",
    description: "",
    image: "",
    subcategory: "الأرقيلة",
    category: "الأرقيلة",
  },
  {
    id: "5678901",
    title: "عنب توت الفاخر",
    price: "SAR 65.00",
    description: "",
    image: "",
    subcategory: "الأرقيلة",
    category: "الأرقيلة",
  },
  {
    id: "6789012",
    title: "عنب نعناع الفاخر",
    price: "SAR 65.00",
    description: "",
    image: "",
    subcategory: "الأرقيلة",
    category: "الأرقيلة",
  },
  {
    id: "7890123",
    title: "توت الفاخر",
    price: "SAR 65.00",
    description: "",
    image: "",
    subcategory: "الأرقيلة",
    category: "الأرقيلة",
  },
  {
    id: "8901234",
    title: "علكة مستكة الفاخر",
    price: "SAR 65.00",
    description: "",
    image: "",
    subcategory: "الأرقيلة",
    category: "الأرقيلة",
  },
];
export default products;
