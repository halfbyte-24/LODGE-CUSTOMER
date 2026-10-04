// AMONTRON HOTEL & RESTAURANT - Primary Data Models

// 1. HERO SLIDES (Curated with Day and Night specific visuals)
export const HERO_SLIDES = [
  {
    id: "exterior",
    title: "AMONTRON HOTEL & RESTAURANT",
    subtitle: "Comfort, hospitality and memorable moments in the heart of Midnapore",
    tagline: "WELCOME TO",
    dayImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85",
    nightImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85",
    alt: "Amontron Hotel & Restaurant Exterior"
  },
  {
    id: "deluxe-room",
    title: "ELEGANT ACCOMMODATIONS",
    subtitle: "Spacious air-conditioned rooms tailored for leisure and business travelers",
    tagline: "ROOMS & SUITES",
    dayImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85",
    nightImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85",
    alt: "Deluxe King Bedroom with Warm Lighting"
  },
  {
    id: "restaurant",
    title: "FINE DINING RESTAURANT",
    subtitle: "Authentic multi-cuisine delicacies, clay oven specialties, and warm service",
    tagline: "CULINARY EXCELLENCE",
    dayImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85",
    nightImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=85",
    alt: "Amontron Restaurant Interior"
  },
  {
    id: "executive-suite",
    title: "EXECUTIVE LUXURY SUITES",
    subtitle: "Plush bedding, modern work desks, and tranquil ambiance for ultimate relaxation",
    tagline: "PREMIUM COMFORT",
    dayImage: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=85",
    nightImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=2000&q=85",
    alt: "Executive Suite Living Area"
  },
  {
    id: "banquet",
    title: "BANQUETS & CELEBRATIONS",
    subtitle: "Host memorable wedding receptions, social gatherings, and conferences",
    tagline: "EVENTS & FUNCTIONS",
    dayImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85",
    nightImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=85",
    alt: "Amontron Banquet and Conference Hall"
  },
  {
    id: "hospitality",
    title: "WARM WELCOME EVERY TIME",
    subtitle: "24-hour reception, attentive room service, and personal hospitality",
    tagline: "ROUND-THE-CLOCK SERVICE",
    dayImage: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2000&q=85",
    nightImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=2000&q=85",
    alt: "Amontron Reception and Lobby Lounge"
  }
];

// 2. ROOMS & SUITES
export const ROOMS = [
  {
    id: "deluxe-ac-room",
    name: "Deluxe AC Room",
    type: "Deluxe Room",
    price: 2499,
    originalPrice: 2899,
    description: "Well-appointed air-conditioned room featuring comfortable king-size bedding, modern ensuite bathroom, high-speed Wi-Fi, and flat-screen TV. Perfect for both business travelers and couples.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85"
    ],
    capacity: "2 Adults + 1 Child",
    maxAdults: 2,
    bedType: "1 King Bed",
    size: "260 sq. ft.",
    amenities: [
      "Split Air Conditioning",
      "Complimentary High-Speed Wi-Fi",
      "32\" LED Smart TV",
      "24-Hour Hot & Cold Water",
      "Complimentary Bottled Water",
      "Electric Kettle & Tea Kit",
      "Daily Housekeeping",
      "Intercom & Room Service"
    ]
  },
  {
    id: "executive-king-suite",
    name: "Executive King Suite",
    type: "Executive Suite",
    price: 3499,
    originalPrice: 3999,
    description: "Generously sized suite with an expansive bedroom and dedicated seating lounge. Ideal for corporate executives and guests seeking elevated comfort and privacy.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85"
    ],
    capacity: "3 Adults or 2 Adults + 2 Children",
    maxAdults: 3,
    bedType: "1 Super King Bed + Sofa Seating",
    size: "380 sq. ft.",
    amenities: [
      "Premium Split AC",
      "Separate Living Lounge Area",
      "43\" 4K Smart TV",
      "Mini Refrigerator",
      "Executive Work Desk & Chair",
      "Complimentary High-Speed Wi-Fi",
      "Premium Bathroom Toiletries",
      "24-Hour Hot & Cold Water",
      "Express Room Service"
    ]
  },
  {
    id: "royal-family-suite",
    name: "Royal Family Suite",
    type: "Family Suite",
    price: 4499,
    originalPrice: 5199,
    description: "Designed for families and groups traveling together. Features dual sleeping configurations, plush sofa lounge, spacious wardrobe storage, and deluxe amenities.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85"
    ],
    capacity: "4 Adults + 2 Children",
    maxAdults: 4,
    bedType: "2 Queen Beds or 1 King + 2 Twin",
    size: "520 sq. ft.",
    amenities: [
      "Dual Air Conditioning Units",
      "Two Double Queen Beds",
      "50\" Smart TV with Cable",
      "Comfortable Dining / Seating Area",
      "Mini Refrigerator",
      "Complimentary High-Speed Wi-Fi",
      "Tea & Coffee Maker",
      "Spacious Wardrobes with Locker",
      "24-Hour Hot Water & Room Service"
    ]
  },
  {
    id: "standard-ac-room",
    name: "Premium Standard AC Room",
    type: "Standard Room",
    price: 1899,
    originalPrice: 2199,
    description: "Cozy and budget-friendly air-conditioned room offering complete privacy, comfortable double bedding, clean linen, and essential modern conveniences.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85"
    ],
    capacity: "2 Adults",
    maxAdults: 2,
    bedType: "1 Queen Bed",
    size: "200 sq. ft.",
    amenities: [
      "Efficient Air Conditioning",
      "Free High-Speed Wi-Fi",
      "32\" LED TV",
      "Attached Clean Bathroom",
      "Geyser / Hot Water",
      "Daily Housekeeping",
      "24-Hour Front Desk Support"
    ]
  }
];

// 3. FACILITIES & SERVICES
export const FACILITIES = [
  {
    id: "ac-rooms",
    name: "Air-Conditioned Rooms",
    description: "Individually controlled climate cooling in all guest rooms and banquet halls.",
    icon: "Wind"
  },
  {
    id: "wifi",
    name: "High-Speed Wi-Fi",
    description: "Seamless wireless internet connectivity across rooms, lobby, and dining areas.",
    icon: "Wifi"
  },
  {
    id: "restaurant",
    name: "Multi-Cuisine Restaurant",
    description: "Delightful Indian, Tandoor, Chinese, and regional Bengal culinary preparations.",
    icon: "UtensilsCrossed"
  },
  {
    id: "room-service",
    name: "Prompt Room Service",
    description: "Enjoy hot and freshly prepared meals delivered directly to your bedside.",
    icon: "Clock"
  },
  {
    id: "housekeeping",
    name: "Daily Housekeeping",
    description: "Thorough cleaning, sanitized linen, and immaculate hygiene standards every day.",
    icon: "Sparkles"
  },
  {
    id: "parking",
    name: "Secure On-Site Parking",
    description: "Dedicated safe parking space for guest vehicles with 24-hour security.",
    icon: "Car"
  },
  {
    id: "power-backup",
    name: "24/7 Power Backup",
    description: "Heavy-duty generator backup ensuring uninterrupted lighting and cooling.",
    icon: "Zap"
  },
  {
    id: "banquet",
    name: "Banquet & Conference",
    description: "Spacious hall equipped with audio-visual setups for weddings and meetings.",
    icon: "Users"
  },
  {
    id: "front-desk",
    name: "24/7 Front Desk",
    description: "Courteous staff available round the clock for check-in, queries, and travel help.",
    icon: "ShieldCheck"
  },
  {
    id: "hot-water",
    name: "Geyser & Hot Water",
    description: "Constant supply of hot running water for revitalizing morning and evening baths.",
    icon: "Droplets"
  }
];

// 4. RESTAURANT & FOOD MENU (Categorized dynamically)
export const MENU_CATEGORIES = [
  "All",
  "Breakfast",
  "Starters",
  "Main Course",
  "Biryani & Rice",
  "Chinese",
  "Desserts",
  "Beverages"
];

export const MENU_ITEMS = [
  {
    id: "bf-1",
    name: "Amontron Special Breakfast Thali",
    category: "Breakfast",
    price: 180,
    description: "Crispy luchi or parathas served with spiced aloo dum, sweet boondi/halwa, and hot masala chai.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: true
  },
  {
    id: "bf-2",
    name: "Crispy Masala Dosa",
    category: "Breakfast",
    price: 140,
    description: "Golden rice crepe stuffed with tempered potato masala, served with coconut chutney and piping hot sambar.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: true
  },
  {
    id: "bf-3",
    name: "Farm Fresh Masala Omelette",
    category: "Breakfast",
    price: 110,
    description: "Two-egg fluffy omelette with onions, tomatoes, and green chillies, served with buttered toasted bread.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: false
  },
  {
    id: "st-1",
    name: "Tandoori Murgh (Half / Full)",
    category: "Starters",
    price: 290,
    description: "Tender chicken marinated in roasted spices and hung curd, charred to perfection in clay tandoor.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: false
  },
  {
    id: "st-2",
    name: "Paneer Tikka Shashlik",
    category: "Starters",
    price: 240,
    description: "Succulent cottage cheese cubes marinated in aromatic spices with bell peppers and onions.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: true
  },
  {
    id: "st-3",
    name: "Crispy Chilli Baby Corn",
    category: "Starters",
    price: 210,
    description: "Golden fried tender baby corn tossed in spicy garlic soy sauce with spring onions.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: true
  },
  {
    id: "st-4",
    name: "Golden Fried Butterfly Prawns",
    category: "Starters",
    price: 360,
    description: "Crispy batter-coated fresh prawns served with hot garlic dipping sauce.",
    image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=600&q=80",
    available: false, // demonstrates unavailable state cleanly
    isVeg: false
  },
  {
    id: "mc-1",
    name: "Classic Murgh Makhani (Butter Chicken)",
    category: "Main Course",
    price: 340,
    description: "Charcoal-grilled chicken simmered in rich creamy tomato and butter gravy finished with kasoori methi.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: false
  },
  {
    id: "mc-2",
    name: "Traditional Mutton Kasha",
    category: "Main Course",
    price: 390,
    description: "Slow-cooked tender mutton prepared in authentic Bengali style rich brown onion and mustard-spice gravy.",
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: false
  },
  {
    id: "mc-3",
    name: "Paneer Butter Masala",
    category: "Main Course",
    price: 260,
    description: "Soft cottage cheese chunks folded into a velvety cashew-tomato sauce with fresh cream.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: true
  },
  {
    id: "mc-4",
    name: "Dal Makhani Amritsari",
    category: "Main Course",
    price: 210,
    description: "Black lentils slow-simmered overnight over gentle embers, enriched with fresh cream and butter.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: true
  },
  {
    id: "br-1",
    name: "Kolkata Special Chicken Dum Biryani",
    category: "Biryani & Rice",
    price: 280,
    description: "Fragrant long-grain basmati rice cooked on dum with tender spiced chicken, boiled egg, and soft aloo.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: false
  },
  {
    id: "br-2",
    name: "Special Mutton Dum Biryani",
    category: "Biryani & Rice",
    price: 360,
    description: "Aromatic dum biryani prepared with succulent mutton shank, saffron, cardamom, and caramelized onions.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: false
  },
  {
    id: "ch-1",
    name: "Chicken Hakka Noodles",
    category: "Chinese",
    price: 220,
    description: "Wok-tossed noodles with shredded chicken, crunchy cabbage, carrots, and light soya seasoning.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: false
  },
  {
    id: "ch-2",
    name: "Chilli Chicken Gravy",
    category: "Chinese",
    price: 260,
    description: "Diced chicken tossed with capsicum, slit chillies, and garlic in classic Indo-Chinese dark sauce.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: false
  },
  {
    id: "ds-1",
    name: "Warm Gulab Jamun with Vanilla Ice Cream",
    category: "Desserts",
    price: 110,
    description: "Two freshly fried khoya dumplings steeped in rose cardamom syrup, served with creamy ice cream.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: true
  },
  {
    id: "ds-2",
    name: "Baked Rosogolla (2 Pcs)",
    category: "Desserts",
    price: 120,
    description: "Traditional soft chhena rosogollas baked with thickened condensed milk and saffron pistachio crust.",
    image: "https://images.unsplash.com/photo-1505253758473-96b3d5ebcd94?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: true
  },
  {
    id: "bv-1",
    name: "Special Masala Chai (Kulhad)",
    category: "Beverages",
    price: 40,
    description: "Freshly brewed Assam tea infused with crushed ginger, green cardamom, and cloves.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: true
  },
  {
    id: "bv-2",
    name: "Fresh Mint Lemonade Soda",
    category: "Beverages",
    price: 70,
    description: "Refreshing fizzy soda with fresh squeezed lemon juice, crushed garden mint, and black salt.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    available: true,
    isVeg: true
  }
];

// 5. GALLERY IMAGES (Categorized for filterable masonry)
export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Amontron Hotel Facade",
    category: "Hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "gal-2",
    title: "Deluxe King Bedroom",
    category: "Rooms",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "gal-3",
    title: "Fine Dining Restaurant Hall",
    category: "Restaurant",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "gal-4",
    title: "Executive Suite Lounge",
    category: "Rooms",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "gal-5",
    title: "Grand Banquet Setup",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "gal-6",
    title: "Tandoori Culinary Delights",
    category: "Restaurant",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "gal-7",
    title: "Front Desk & Welcome Lobby",
    category: "Hotel",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "gal-8",
    title: "Royal Suite Bedroom",
    category: "Rooms",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "gal-9",
    title: "Evening Lighting & Ambiance",
    category: "Hotel",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85"
  }
];

// 6. EVENTS & OFFERS
export const EVENTS_AND_OFFERS = [
  {
    id: "banquet-weddings",
    title: "Weddings & Social Receptions",
    subtitle: "Air-conditioned banquet accommodating up to 300 guests with custom catering.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
    features: ["Capacity up to 300 guests", "Full in-house multi-cuisine buffet", "Audio & stage setup available", "Bridal room support"]
  },
  {
    id: "corporate-meetings",
    title: "Corporate Conferences & Seminars",
    subtitle: "Professional meeting space with high-speed Wi-Fi, projector setup, and executive lunch.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    features: ["U-Shape & Theater seating", "Projector & PA sound system", "Tea/Coffee break packages", "High-speed internet"]
  },
  {
    id: "weekend-package",
    title: "Weekend Getaway Privilege",
    subtitle: "Special package for family stays including complimentary breakfast and late check-out.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    features: ["Complimentary breakfast", "Priority room upgrade (subject to availability)", "Flexible check-out", "Free on-site parking"]
  }
];

// 7. REAL TESTIMONIALS (Realistic guest feedback)
export const TESTIMONIALS = [
  {
    id: "t-1",
    guestName: "Debashis Mukherjee",
    location: "Kolkata",
    roomStayed: "Executive King Suite",
    quote: "Our family had a wonderful stay at Amontron. The rooms are clean, AC works smoothly, and the staff is exceptionally cooperative. The food at the restaurant was hot, fresh, and flavorful.",
    rating: 5,
    date: "February 2026"
  },
  {
    id: "t-2",
    guestName: "Priyanka Roy",
    location: "Durgapur",
    roomStayed: "Deluxe AC Room",
    quote: "Very convenient location near the station with secure parking. The room service was prompt and the Biryani was truly delicious. Definitely staying here on my next business visit.",
    rating: 5,
    date: "January 2026"
  },
  {
    id: "t-3",
    guestName: "Anirban Sen",
    location: "Bhubaneswar",
    roomStayed: "Royal Family Suite",
    quote: "We hosted an intimate family function in their banquet hall and booked suites for outstation relatives. Seamless arrangement and very attentive staff. Highly recommended!",
    rating: 5,
    date: "March 2026"
  }
];
