export interface MenuItem {
  id?: string;
  name: string;
  price: number;
  desc: string;
  image: string;
  isVeg: boolean;
  spicyLevel: number;
  chefRecommended: boolean;
  isPopular: boolean;
  ingredients?: string[];
  tasteProfile?: string;
  servingSize?: string;
}

export const menuData: Record<string, MenuItem[]> = {
  "SIGNATURE SEAFOOD": [
    { 
      id: "fish-thali",
      name: "Fish Thali", 
      price: 450, 
      desc: "Authentic Kokan style complete meal featuring fresh catch, solkadhi, and bhakri.",
      image: "/src/assets/fish-thali.png",
      isVeg: false, spicyLevel: 2, chefRecommended: true, isPopular: true,
      ingredients: ["Fresh Fish", "Malvani Masala", "Solkadhi", "Bhakri", "Rice"],
      tasteProfile: "Spicy & Tangy",
      servingSize: "Serves 1",
    },
    { 
      id: "special-fish-thali",
      name: "Special Fish Thali", 
      price: 550, 
      desc: "Premium Konkan thali with Bombil Fry, Surmai Curry, Prawns Sukka, and unlimited Solkadhi.",
      image: "/src/assets/fish-thali.png",
      isVeg: false, spicyLevel: 2, chefRecommended: true, isPopular: false,
    },
    { 
      id: "prawns-crispy",
      name: "Prawns Crispy", 
      price: 380, 
      desc: "Golden fried juicy prawns coated with our signature coastal spice blend.",
      image: "/src/assets/dish1.jpg",
      isVeg: false, spicyLevel: 1, chefRecommended: false, isPopular: true,
    }
  ],
  "POMFRET & SURMAI": [
    { name: "Pomfret Fry", price: 550, desc: "Classic Malvani style shallow fried whole Pomfret", image: "/src/assets/pomfret-fry.png", isVeg: false, spicyLevel: 2, chefRecommended: true, isPopular: true },
    { name: "Pomfret Tawa", price: 560, desc: "Pomfret marinated in fiery red spices and seared on tawa", image: "/src/assets/pomfret-fry.png", isVeg: false, spicyLevel: 3, chefRecommended: false, isPopular: false },
    { name: "Pomfret Curry", price: 580, desc: "Whole pomfret simmered in a light, flavorful coastal coconut curry", image: "/src/assets/seafood-curry.png", isVeg: false, spicyLevel: 1, chefRecommended: true, isPopular: false },
    { name: "Surmai Fry", price: 450, desc: "Shallow fried fresh Kingfish slice marinated in traditional spices", image: "/src/assets/pomfret-fry.png", isVeg: false, spicyLevel: 2, chefRecommended: false, isPopular: true },
    { name: "Surmai Curry", price: 470, desc: "Kingfish in spicy tangy kokum base", image: "/src/assets/seafood-curry.png", isVeg: false, spicyLevel: 2, chefRecommended: false, isPopular: false },
  ],
  "BOMBIL & RAWAS": [
    { name: "Bombil Fry", price: 280, desc: "Crispy fried Bombay Duck in rava coating", image: "/src/assets/pomfret-fry.png", isVeg: false, spicyLevel: 1, chefRecommended: false, isPopular: true },
    { name: "Bombil Masala", price: 320, desc: "Bombay Duck in rich thick semi-gravy", image: "/src/assets/dish2.jpg", isVeg: false, spicyLevel: 3, chefRecommended: false, isPopular: false },
    { name: "Rawas Fry", price: 420, desc: "Indian Salmon coated in Malvani masala and shallow fried", image: "/src/assets/pomfret-fry.png", isVeg: false, spicyLevel: 2, chefRecommended: true, isPopular: false },
    { name: "Rawas Curry", price: 450, desc: "Fresh Indian Salmon cooked in rich coconut coastal gravy", image: "/src/assets/seafood-curry.png", isVeg: false, spicyLevel: 2, chefRecommended: false, isPopular: false },
    { name: "Bangda Fry", price: 250, desc: "Crispy Mackerel stuffed with green fiery chutney", image: "/src/assets/pomfret-fry.png", isVeg: false, spicyLevel: 3, chefRecommended: false, isPopular: true },
  ],
  "PRAWNS & CRAB": [
    { name: "Prawns Fry", price: 350, desc: "Rava fried juicy prawns", image: "/src/assets/dish1.jpg", isVeg: false, spicyLevel: 1, chefRecommended: false, isPopular: true },
    { name: "Prawns Curry", price: 420, desc: "Coastal style prawns in a tangy kokum and coconut base", image: "/src/assets/seafood-curry.png", isVeg: false, spicyLevel: 2, chefRecommended: true, isPopular: false },
    { name: "Prawns Masala", price: 450, desc: "Prawns cooked in thick spicy onion-tomato gravy", image: "/src/assets/dish2.jpg", isVeg: false, spicyLevel: 3, chefRecommended: false, isPopular: false },
    { name: "Crab Masala", price: 480, desc: "Fresh crab cooked in a rich, spicy coconut gravy", image: "/src/assets/seafood-curry.png", isVeg: false, spicyLevel: 3, chefRecommended: false, isPopular: true },
    { name: "Crab Butter Garlic", price: 520, desc: "Crabs tossed in rich butter and burnt garlic", image: "/src/assets/table2.png", isVeg: false, spicyLevel: 0, chefRecommended: true, isPopular: true },
  ],
  "CHICKEN & MUTTON": [
    { name: "Chicken Thali", price: 350, desc: "Chicken curry, sukka, rice, bhakri/chapati, solkadhi", image: "/src/assets/chicken-thali.png", isVeg: false, spicyLevel: 2, chefRecommended: false, isPopular: true },
    { name: "Chicken Sukka", price: 320, desc: "Dry spicy chicken cooked with roasted coconut", image: "/src/assets/dish2.jpg", isVeg: false, spicyLevel: 3, chefRecommended: false, isPopular: false },
    { name: "Chicken Curry", price: 280, desc: "Home-style chicken curry in traditional spices", image: "/src/assets/dish2.jpg", isVeg: false, spicyLevel: 2, chefRecommended: false, isPopular: false },
    { name: "Chicken Kolhapuri", price: 340, desc: "Fiery hot chicken gravy", image: "/src/assets/dish2.jpg", isVeg: false, spicyLevel: 3, chefRecommended: true, isPopular: false },
    { name: "Chicken Handi", price: 550, desc: "Chicken slow-cooked in handi (Serves 3-4)", image: "/src/assets/dish1.jpg", isVeg: false, spicyLevel: 2, chefRecommended: false, isPopular: false },
    { name: "Chicken Biryani", price: 320, desc: "Aromatic basmati rice cooked with tender chicken", image: "/src/assets/feature-menu.jpg", isVeg: false, spicyLevel: 2, chefRecommended: false, isPopular: true },
    { name: "Mutton Thali", price: 450, desc: "Mutton curry, sukka, rice, bhakri/chapati, solkadhi", image: "/src/assets/chicken-thali.png", isVeg: false, spicyLevel: 3, chefRecommended: true, isPopular: false },
    { name: "Mutton Curry", price: 420, desc: "Tender mutton cooked in authentic Konkani spices", image: "/src/assets/dish2.jpg", isVeg: false, spicyLevel: 3, chefRecommended: false, isPopular: false },
    { name: "Mutton Sukka", price: 450, desc: "Dry roasted mutton pieces with rich spices", image: "/src/assets/dish2.jpg", isVeg: false, spicyLevel: 3, chefRecommended: true, isPopular: false },
  ],
  "EGG & VEG": [
    { name: "Egg Curry", price: 220, desc: "Boiled eggs in spicy coastal gravy", image: "/src/assets/dish3.jpg", isVeg: false, spicyLevel: 2, chefRecommended: false, isPopular: false },
    { name: "Egg Masala", price: 240, desc: "Thick egg gravy with onions and tomatoes", image: "/src/assets/dish3.jpg", isVeg: false, spicyLevel: 2, chefRecommended: false, isPopular: false },
    { name: "Veg Thali", price: 250, desc: "2 Veggies, dal, rice, chapati, sweet, papad", image: "/src/assets/dish3.jpg", isVeg: true, spicyLevel: 1, chefRecommended: false, isPopular: true },
    { name: "Paneer Tikka", price: 320, desc: "Tandoori grilled paneer chunks", image: "/src/assets/dish1.jpg", isVeg: true, spicyLevel: 2, chefRecommended: false, isPopular: false },
    { name: "Veg Kolhapuri", price: 280, desc: "Mixed veg in spicy red gravy", image: "/src/assets/dish2.jpg", isVeg: true, spicyLevel: 3, chefRecommended: true, isPopular: false },
    { name: "Dal Fry", price: 180, desc: "Tempered yellow lentils", image: "/src/assets/dish3.jpg", isVeg: true, spicyLevel: 1, chefRecommended: false, isPopular: false },
  ],
  "RICE, BREADS & SOUPS": [
    { name: "Jeera Rice", price: 150, desc: "Cumin tempered basmati rice", image: "/src/assets/feature-menu.jpg", isVeg: true, spicyLevel: 0, chefRecommended: false, isPopular: false },
    { name: "Steam Rice", price: 120, desc: "Plain basmati rice", image: "/src/assets/feature-menu.jpg", isVeg: true, spicyLevel: 0, chefRecommended: false, isPopular: false },
    { name: "Bhakri", price: 35, desc: "Traditional rice or jowar flatbread", image: "/src/assets/dish3.jpg", isVeg: true, spicyLevel: 0, chefRecommended: false, isPopular: true },
    { name: "Chapati", price: 20, desc: "Wheat flatbread", image: "/src/assets/dish3.jpg", isVeg: true, spicyLevel: 0, chefRecommended: false, isPopular: false },
    { name: "Seafood Soup", price: 180, desc: "Warm clear soup with mixed seafood bits", image: "/src/assets/seafood-curry.png", isVeg: false, spicyLevel: 1, chefRecommended: true, isPopular: false },
    { name: "Chicken Soup", price: 160, desc: "Clear chicken broth with spices", image: "/src/assets/dish1.jpg", isVeg: false, spicyLevel: 1, chefRecommended: false, isPopular: false },
  ],
  "DESSERTS & BEVERAGES": [
    { name: "Solkadhi", price: 70, desc: "Digestive kokum and coconut milk drink", image: "/src/assets/solkadhi.png", isVeg: true, spicyLevel: 0, chefRecommended: true, isPopular: true },
    { name: "Kokum Sharbat", price: 60, desc: "Sweet and tangy refreshing drink", image: "/src/assets/solkadhi.png", isVeg: true, spicyLevel: 0, chefRecommended: false, isPopular: false },
    { name: "Buttermilk", price: 50, desc: "Spiced cooling drink", image: "/src/assets/solkadhi.png", isVeg: true, spicyLevel: 0, chefRecommended: false, isPopular: false },
    { name: "Gulab Jamun", price: 80, desc: "Sweet milk dumplings in syrup", image: "/src/assets/dish1.jpg", isVeg: true, spicyLevel: 0, chefRecommended: false, isPopular: true },
    { name: "Ice Cream", price: 90, desc: "Vanilla, Chocolate, or Strawberry", image: "/src/assets/dish1.jpg", isVeg: true, spicyLevel: 0, chefRecommended: false, isPopular: false },
  ]
};
