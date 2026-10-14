export const BRAND = {
  name: 'MTON',
  trademark: 'TM',
  tagline: 'For the Love of Mutton.',
  heroLine: 'NOT JUST A MEAL. A MUTTON OBSESSION.',
  subHeroLine: 'Every cut. Every spice. Every bite — crafted for those who truly love mutton.',
  statement: 'NOT FOR EVERY CRAVING. FOR THE MUTTON CRAVING.',
  statementSubtitle: 'MTON is where mutton lovers find a menu that speaks their language.',
  pureMutton: 'PURE MUTTON.',
  pureTaste: 'PURE TASTE.',
  logo: '/logo-main.jpeg',
  phone: '+91 XXXXX 43210',
  whatsappUrl: 'https://wa.me/919876543210?text=Hello%20MTON!%20I%20would%20like%20to%20order%20from%20your%20mutton%20specialty%20menu.',
  address: 'Plot 14, Royal Gourmet Lane, South Extension Part 2, New Delhi - 110049',
  landmark: 'Near South City Club & Metro Gate 3',
  googleMapsUrl: 'https://maps.google.com/?q=South+Extension+New+Delhi',
  openingHours: '12:00 PM – 11:30 PM (Daily)',
  dineIn: 'Available with Group Seating',
  takeaway: 'Quick Takeaway & 45-Min Express Delivery Available',
  instagram: '@mton.official',
  instagramUrl: 'https://instagram.com',
  facebookUrl: 'https://facebook.com',
};

// Section 3: Signature Specialties
export const SIGNATURE_SPECIALTIES = [
  {
    num: '01',
    name: 'Handi Mutton',
    tagline: 'Slow-cooked comfort. Deep, rich gravy. A satisfying taste of traditional Indian cooking.',
    description: 'Prepared in earthen clay pots over slow charcoal embers. Meat so tender it slips effortlessly from the bone, infused with whole spices and artisanal mustard oil.',
    audience: 'For those who love bold, hearty flavours.',
    image: '/images/dish-handi.jpg',
    badge: 'Signature Legend',
    spiceLevel: 'Bold & Hearty',
  },
  {
    num: '02',
    name: 'Mutton Biryani',
    tagline: 'Fragrant rice, aromatic spices and tender mutton come together in a biryani made to satisfy.',
    description: 'Long-grain royal basmati layered with succulent mutton marinated in aged spices, saffron-infused milk, and golden caramelized onions. Sealed with dough for authentic dum.',
    audience: 'The aroma gets you. The flavour brings you back.',
    image: '/images/dish-biryani.jpg',
    badge: 'Royal Dum',
    spiceLevel: 'Aromatic & Rich',
  },
  {
    num: '03',
    name: 'Mutton Soup',
    tagline: 'Warm, savoury and full of character — a comforting choice for mutton lovers.',
    description: 'A slow-simmered bone marrow broth, gently reduced over hours with crushed black peppercorns, fresh coriander, ginger, and garlic. Pure warmth in a bowl.',
    audience: 'A bowl full of warmth and flavour.',
    image: '/images/dish-soup.jpg',
    badge: 'Soul Comfort',
    spiceLevel: 'Mild & Peppery',
  },
  {
    num: '04',
    name: 'MTON Mutton Specials',
    tagline: 'Explore more mutton favourites, prepared for people who believe a great meal begins with great flavour.',
    description: 'From charcoal-smoked Tandoori Chaap to velvety Keema and Kashmiri Rogan Josh. Curated for the genuine mutton aficionado.',
    audience: 'Your next favourite might be waiting here.',
    image: '/images/dish-chef.jpg',
    badge: 'Chef Curated',
    spiceLevel: 'Gourmet Selection',
  },
];

// Section 4: Why MTON?
export const WHY_MTON = [
  {
    icon: 'Flame',
    title: 'Mutton-Focused Menu',
    subtitle: 'A Clear Speciality',
    description: 'Not a generic multi-cuisine eatery. Our entire kitchen, mastery, and craft are dedicated 100% to mutton.',
  },
  {
    icon: 'Sparkles',
    title: 'Bold, Rich Flavours',
    subtitle: 'Flavour-First Experience',
    description: 'Inspired by traditional Indian slow-fire techniques, clay handis, and hand-ground unadulterated spices.',
  },
  {
    icon: 'Users',
    title: 'Food Worth Sharing',
    subtitle: 'Feasts Built for Gathering',
    description: 'Generous handis, fragrant biryani platters, and hearty bowls designed to bring friends and family together.',
  },
  {
    icon: 'Award',
    title: 'A Memorable Meal',
    subtitle: 'Simple Joy of Good Food',
    description: 'Every recipe is perfected to deliver that irresistible satisfaction that stays with you long after the meal.',
  },
];

// Section 6: Full Menu Dishes
export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Dishes' },
  { id: 'handi', name: 'Handi Specials' },
  { id: 'biryani', name: 'Dum Biryani' },
  { id: 'soup', name: 'Soups & Starters' },
  { id: 'curry', name: 'Rich Curries' },
];

export const MENU_ITEMS = [
  {
    id: 'h1',
    name: 'Traditional Champaran Handi Mutton',
    category: 'handi',
    description: 'Slow-cooked in sealed clay handi over wood charcoal embers with whole pods of garlic and pure mustard oil.',
    price: '₹540',
    fullPrice: '₹980',
    portions: 'Half (500g) / Full (1kg)',
    image: '/images/dish-handi.jpg',
    badge: 'Bestseller',
    recommended: 'Best with Tawa Roti & Ghee Rice',
  },
  {
    id: 'b1',
    name: 'Royal Awadhi Mutton Dum Biryani',
    category: 'biryani',
    description: 'Fragrant aged long-grain basmati layered with tender saffron-marinated mutton cuts and caramelized birista.',
    price: '₹480',
    fullPrice: '₹890',
    portions: 'Regular / Jumbo Handi',
    image: '/images/dish-biryani.jpg',
    badge: 'Chef Favorite',
    recommended: 'Served with Burani Raita & Salan',
  },
  {
    id: 's1',
    name: 'Signature MTON Mutton Pepper Soup',
    category: 'soup',
    description: 'Simmered bone marrow broth infused with Malabar black pepper, garlic, and fresh green coriander.',
    price: '₹240',
    fullPrice: '₹420',
    portions: 'Single Bowl / Sharing Tureen',
    image: '/images/dish-soup.jpg',
    badge: 'Soul Warmer',
    recommended: 'Warm comfort starter before the main feast',
  },
  {
    id: 'c1',
    name: 'Kashmiri Mutton Rogan Josh',
    category: 'curry',
    description: 'Slow-braised succulent mutton shanks in an aromatic yogurt and Kashmiri red chili gravy scented with mace.',
    price: '₹550',
    fullPrice: '₹990',
    portions: 'Half / Full Pot',
    image: '/images/curry-cut.jpg',
    badge: 'Royal Classic',
    recommended: 'Pairs wonderfully with Khamiri Roti',
  },
  {
    id: 'h2',
    name: 'MTON Tandoori Chaap (Grilled Ribs)',
    category: 'soup',
    description: 'Prime mutton ribs steeped in spiced hung curd marinade and roasted to smokey perfection in a clay tandoor.',
    price: '₹520',
    fullPrice: '₹950',
    portions: '6 pcs / 12 pcs',
    image: '/images/lamb-chops.jpg',
    badge: 'Charcoal Smoked',
    recommended: 'Garnished with mint chutney & pickled onions',
  },
  {
    id: 'c2',
    name: 'Artisanal Spiced Mutton Keema Matar',
    category: 'curry',
    description: 'Double-ground lean mutton shoulder slow-sautéed with tender green peas, roasted cumin, and pure desi ghee.',
    price: '₹460',
    fullPrice: '₹820',
    portions: 'Regular / Large Bowl',
    image: '/images/keema.jpg',
    badge: 'Homestyle Rich',
    recommended: 'Irresistible with butter toasted pav',
  },
];

// Section 7: Kitchen to Table
export const KITCHEN_TO_TABLE = [
  {
    step: '01',
    title: 'The Ingredients',
    subtitle: 'Thoughtful Selection',
    description: 'Great cooking starts with ethical, pasture-fed young goat and lamb, hand-picked whole spices, and cold-pressed oils. No compromises, ever.',
  },
  {
    step: '02',
    title: 'The Cooking',
    subtitle: 'Patience & Pure Technique',
    description: 'Patience over shortcuts. Traditional clay handis, slow dum seals, and hours of gentle simmer that allow flavours to permeate deep into the marrow.',
  },
  {
    step: '03',
    title: 'The Experience',
    subtitle: 'Served at Peak Warmth',
    description: 'Presented steaming hot in artisanal earthen and copper wares, accompanied by fragrant accompaniments that elevate every single bite.',
  },
];

// Section 9: Made for Every Occasion
export const OCCASIONS = [
  {
    title: 'Friends & Food',
    tagline: 'Catch up over the dishes everyone wants to try.',
    description: 'Nothing bonds people faster than a bubbling handi of mutton and hot rotis passed across the table.',
    highlight: 'Sharing Handis',
  },
  {
    title: 'Family Meals',
    tagline: 'Bring everyone together around a satisfying spread.',
    description: 'Sunday feasts and celebratory dinners crafted with comfort, authentic taste, and generous portions.',
    highlight: 'Sunday Feasts',
  },
  {
    title: 'Solo Cravings',
    tagline: 'Because a great mutton meal doesn\'t need a special occasion.',
    description: 'Craving an aromatic bowl of biryani or comforting mutton soup after a long day? We have got you covered.',
    highlight: 'Personal Portions',
  },
  {
    title: 'Meals at Home',
    tagline: 'Enjoy your favourites at home with express takeaway or delivery.',
    description: 'Packed hot in insulated, spill-proof thermal earthen containers preserving authentic clay pot aroma.',
    highlight: 'Hot Doorstep Delivery',
  },
];

// Section 11: Food Gallery
export const FOOD_GALLERY = [
  {
    title: 'Traditional Champaran Handi Mutton',
    tag: 'Slow Charcoal Simmer',
    subtitle: 'Simmered in sealed earthen pots for 4+ hours',
    image: '/images/dish-handi.jpg',
    span: 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 min-h-[380px]',
  },
  {
    title: 'Awadhi Mutton Dum Biryani',
    tag: 'Saffron & Aged Basmati',
    subtitle: 'Slow dum-cooked with fragrant whole spices',
    image: '/images/dish-biryani.jpg',
    span: 'col-span-1 min-h-[220px]',
  },
  {
    title: 'Aromatic Mutton Bone Soup',
    tag: 'Cracked Pepper & Herbs',
    subtitle: 'Nourishing bone broth with roasted cumin',
    image: '/images/dish-soup.jpg',
    span: 'col-span-1 min-h-[220px]',
  },
  {
    title: 'Royal Mutton Nalli Nihari',
    tag: 'Shank Marrow & Rogan',
    subtitle: 'Slow-braised tender shanks in rich spiced gravy',
    image: '/images/dish-nihari.jpg',
    span: 'col-span-1 min-h-[220px]',
  },
  {
    title: 'Charcoal Smoked Seekh Kebab',
    tag: 'Live Sigdi Grilled',
    subtitle: 'Double minced shoulder kebabs with spiced butter',
    image: '/images/dish-kebab.jpg',
    span: 'col-span-1 min-h-[220px]',
  },
  {
    title: 'Prime French Trimmed Chaap',
    tag: 'Tandoori Smoked',
    subtitle: 'Glazed ribs with mint yogurt marinade',
    image: '/images/lamb-chops.jpg',
    span: 'col-span-1 min-h-[220px]',
  },
  {
    title: 'Artisanal Double Minced Keema',
    tag: 'Pure Desi Ghee',
    subtitle: 'Slow bhuna mince with green peas & spices',
    image: '/images/keema.jpg',
    span: 'col-span-1 min-h-[220px]',
  },
  {
    title: 'Chef Serving Pure Handi Mutton',
    tag: 'Artisanal Table Experience',
    subtitle: 'Cracking open the dough seal fresh at your table',
    image: '/images/dish-chef.jpg',
    span: 'col-span-1 sm:col-span-2 lg:col-span-2 min-h-[220px]',
  },
];

// Section 12: What Makes a Great Mutton Meal?
export const GREAT_MEAL_PILLARS = [
  {
    title: 'The Aroma',
    description: 'The irresistible fragrance of roasted whole cardamom, cloves, and mutton ghee that builds anticipation before your first bite.',
  },
  {
    title: 'The Texture',
    description: 'Meat so tender it yields gently under a spoon, with succulent juices locked into every single fibrous strand.',
  },
  {
    title: 'The Flavour',
    description: 'A layered symphony of heat, warmth, and depth where spices enhance the natural sweetness of pasture-fed mutton.',
  },
  {
    title: 'The Company',
    description: 'Good food becomes extraordinary when experienced together. Meals designed to be remembered and shared.',
  },
];

// Section 13: Customer Reviews
export const REVIEWS = [
  {
    id: 1,
    name: 'Suhail Qureshi',
    role: 'Food Critic & Mughlai Connoisseur',
    comment: 'MTON does not play around with artificial colors or heavy creams. The Handi Mutton reminds me of the authentic slow-cooked champaran style with genuine mustard oil fragrance. Unmatched.',
    rating: 5,
    dish: 'Handi Mutton',
  },
  {
    id: 2,
    name: 'Ritu & Manav Sen',
    role: 'Weekend Diners',
    comment: 'The Mutton Biryani aroma filled our car during takeaway! Long grains, zero greasiness, and pieces so soft our kids finished the entire platter. This is now our Sunday ritual.',
    rating: 5,
    dish: 'Awadhi Mutton Biryani',
  },
  {
    id: 3,
    name: 'Farhan Zaidi',
    role: 'Hospitality Professional',
    comment: 'The Mutton Soup is life-affirming. Rich, peppery, with pure bone marrow depth. You can tell they simmer this for hours. Pure dedication to mutton.',
    rating: 5,
    dish: 'MTON Mutton Soup',
  },
];

// Section 14: Frequently Asked Questions
export const FAQS = [
  {
    q: 'What kind of food does MTON specialise in?',
    a: 'MTON focuses exclusively on mutton-based culinary specialities, including our signature Handi Mutton, Royal Awadhi Mutton Biryani, Mutton Pepper Soup, Tandoori Chaap, and rich traditional curries. Check our full menu above for our daily selections.',
  },
  {
    q: 'Can I view the menu and prices online?',
    a: 'Yes! The entire MTON menu with dish descriptions, portion options (Half/Full), recommended pairings, and prices is displayed directly on this website. You can also request a digital menu card on WhatsApp.',
  },
  {
    q: 'Can I order food online or for takeaway?',
    a: 'Yes, MTON offers takeaway and express delivery. You can click on our "Order on WhatsApp" or "Call MTON" buttons on this website to directly place your order with our master kitchen.',
  },
  {
    q: 'Where is MTON located?',
    a: 'MTON is located at Plot 14, Royal Gourmet Lane, South Extension Part 2, New Delhi - 110049 (Near South City Club & Metro Gate 3). Click on "Get Directions" on this page to navigate via Google Maps.',
  },
  {
    q: 'Can I book a table for a group or family gathering?',
    a: 'Yes, we welcome group reservations and family feasts! Please contact us via phone (+91 XXXXX 43210) or WhatsApp at least 2 hours in advance to reserve your table.',
  },
  {
    q: 'Does MTON offer takeaway with traditional handi packaging?',
    a: 'Yes! Our Handi Mutton can be ordered in traditional sealed clay handis for takeaway, keeping the mutton piping hot and infused with authentic earthen aroma all the way to your dining table.',
  },
];
