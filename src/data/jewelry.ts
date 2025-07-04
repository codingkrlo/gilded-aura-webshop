
export interface JewelryItem {
  id: number;
  name: string;
  category: "rings" | "necklaces" | "earrings" | "bracelets" | "watches";
  price: number;
  originalPrice?: number;
  material: "gold" | "silver" | "platinum" | "diamond";
  image: string;
  description: string;
  inStock: boolean;
  featured?: boolean;
}

export const jewelryItems: JewelryItem[] = [
  {
    id: 1,
    name: "Diamond Rose Ring",
    price: 2899,
    material: "gold",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "Elegant rose gold ring featuring a brilliant cut diamond center stone surrounded by smaller diamonds.",
    category: "rings",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Sapphire Vintage Necklace",
    price: 4299,
    material: "silver",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    description: "Vintage-inspired necklace with deep blue sapphires set in white gold with intricate filigree work.",
    category: "necklaces",
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Pearl Drop Earrings",
    price: 1899,
    material: "platinum",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "Classic pearl drop earrings with Tahitian pearls and diamond accents in platinum setting.",
    category: "earrings",
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Tennis Bracelet Supreme",
    price: 5999,
    material: "diamond",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
    description: "Classic tennis bracelet featuring 50 perfectly matched diamonds in 18k white gold setting.",
    category: "bracelets",
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "Emerald Crown Ring",
    price: 7899,
    material: "gold",
    image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=800&q=80",
    description: "Majestic emerald center stone surrounded by brilliant diamonds in a crown-like setting.",
    category: "rings",
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: "Infinity Diamond Necklace",
    price: 3299,
    material: "diamond",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
    description: "Delicate infinity pendant with pave diamonds, symbolizing eternal love and commitment.",
    category: "necklaces",
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: "Ruby Chandelier Earrings",
    price: 6799,
    material: "gold",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=800&q=80",
    description: "Dramatic chandelier earrings featuring cascading rubies and diamonds in rose gold.",
    category: "earrings",
    inStock: true,
    featured: true
  },
  {
    id: 8,
    name: "Platinum Mesh Bracelet",
    price: 4599,
    material: "platinum",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    description: "Sophisticated platinum mesh bracelet with diamond-set clasp, perfect for any occasion.",
    category: "bracelets",
    inStock: true,
    featured: true
  },
  {
    id: 9,
    name: "Art Deco Diamond Ring",
    price: 8999,
    material: "diamond",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
    description: "Vintage Art Deco style ring with geometric patterns and brilliant diamonds.",
    category: "rings",
    inStock: false,
    featured: false
  },
  {
    id: 10,
    name: "Golden Coral Necklace",
    price: 2199,
    material: "gold",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80",
    description: "Elegant coral necklace with gold beads and natural coral formations.",
    category: "necklaces",
    inStock: true,
    featured: false
  },
  {
    id: 11,
    name: "Crystal Stud Earrings",
    price: 899,
    material: "silver",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
    description: "Sparkling crystal studs perfect for everyday elegance.",
    category: "earrings",
    inStock: true,
    featured: false
  },
  {
    id: 12,
    name: "Silver Link Bracelet",
    price: 1299,
    material: "silver",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    description: "Classic silver link bracelet with polished finish.",
    category: "bracelets",
    inStock: true,
    featured: false
  },
  {
    id: 13,
    name: "Moonstone Engagement Ring",
    price: 3599,
    material: "silver",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "Romantic moonstone ring with ethereal blue flash and diamond halo.",
    category: "rings",
    inStock: true,
    featured: false
  },
  {
    id: 14,
    name: "Vintage Pearl Choker",
    price: 1799,
    material: "gold",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
    description: "Classic pearl choker with vintage-inspired clasp.",
    category: "necklaces",
    inStock: true,
    featured: false
  },
  {
    id: 15,
    name: "Diamond Hoop Earrings",
    price: 2499,
    material: "diamond",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "Timeless diamond hoops with inside-out diamond setting.",
    category: "earrings",
    inStock: true,
    featured: false
  },
  {
    id: 16,
    name: "Rose Gold Cuff",
    price: 1699,
    material: "gold",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
    description: "Bold rose gold cuff with hammered texture finish.",
    category: "bracelets",
    inStock: true,
    featured: false
  },
  {
    id: 17,
    name: "Aquamarine Cocktail Ring",
    price: 4899,
    material: "platinum",
    image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=800&q=80",
    description: "Statement aquamarine ring perfect for special occasions.",
    category: "rings",
    inStock: false,
    featured: false
  },
  {
    id: 18,
    name: "Byzantine Chain Necklace",
    price: 3799,
    material: "gold",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    description: "Intricate Byzantine chain in 18k gold with antique finish.",
    category: "necklaces",
    inStock: true,
    featured: false
  },
  {
    id: 19,
    name: "Tanzanite Stud Earrings",
    price: 3299,
    material: "platinum",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=800&q=80",
    description: "Rare tanzanite studs with brilliant blue-purple hue.",
    category: "earrings",
    inStock: true,
    featured: false
  },
  {
    id: 20,
    name: "Charm Bracelet Deluxe",
    price: 2299,
    material: "silver",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    description: "Customizable charm bracelet with starter charms included.",
    category: "bracelets",
    inStock: true,
    featured: false
  },
  {
    id: 21,
    name: "Opal Fire Ring",
    price: 2799,
    material: "gold",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
    description: "Australian fire opal with spectacular color play.",
    category: "rings",
    inStock: true,
    featured: false
  },
  {
    id: 22,
    name: "Lariat Diamond Necklace",
    price: 4599,
    material: "diamond",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80",
    description: "Modern lariat style with cascading diamonds.",
    category: "necklaces",
    inStock: true,
    featured: false
  },
  {
    id: 23,
    name: "Garnet Drop Earrings",
    price: 1499,
    material: "silver",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
    description: "Deep red garnet drops with vintage appeal.",
    category: "earrings",
    inStock: true,
    featured: false
  },
  {
    id: 24,
    name: "White Gold Bangle Set",
    price: 1899,
    material: "gold",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    description: "Set of three stackable white gold bangles.",
    category: "bracelets",
    inStock: true,
    featured: false
  },
  {
    id: 25,
    name: "Citrine Cocktail Ring",
    price: 1999,
    material: "silver",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "Sunny citrine in a bold cocktail ring setting.",
    category: "rings",
    inStock: true,
    featured: false
  },
  {
    id: 26,
    name: "Statement Pearl Necklace",
    price: 5299,
    material: "platinum",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
    description: "Multi-strand baroque pearl necklace with gold accents.",
    category: "necklaces",
    inStock: false,
    featured: false
  },
  {
    id: 27,
    name: "Amethyst Cluster Earrings",
    price: 1799,
    material: "silver",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "Cluster earrings featuring multiple amethyst stones.",
    category: "earrings",
    inStock: true,
    featured: false
  },
  {
    id: 28,
    name: "Herringbone Gold Bracelet",
    price: 2699,
    material: "gold",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
    description: "Classic herringbone pattern in 14k gold.",
    category: "bracelets",
    inStock: true,
    featured: false
  },
  {
    id: 29,
    name: "Tourmaline Trilogy Ring",
    price: 3899,
    material: "gold",
    image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=800&q=80",
    description: "Three-stone ring with pink, green, and blue tourmalines.",
    category: "rings",
    inStock: true,
    featured: false
  },
  {
    id: 30,
    name: "Opera Length Pearl Strand",
    price: 6799,
    material: "platinum",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    description: "Long opera-length strand of cultured pearls.",
    category: "necklaces",
    inStock: true,
    featured: false
  },
  {
    id: 31,
    name: "Peridot Dangle Earrings",
    price: 1399,
    material: "silver",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=800&q=80",
    description: "Fresh green peridot in elegant dangle style.",
    category: "earrings",
    inStock: true,
    featured: false
  },
  {
    id: 32,
    name: "Twisted Rope Bracelet",
    price: 999,
    material: "silver",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    description: "Twisted rope design in sterling silver.",
    category: "bracelets",
    inStock: true,
    featured: false
  },
  {
    id: 33,
    name: "Morganite Halo Ring",
    price: 2899,
    material: "gold",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
    description: "Soft pink morganite with diamond halo setting.",
    category: "rings",
    inStock: true,
    featured: false
  },
  {
    id: 34,
    name: "Turquoise Station Necklace",
    price: 1699,
    material: "gold",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80",
    description: "Turquoise stones spaced along a delicate gold chain.",
    category: "necklaces",
    inStock: true,
    featured: false
  },
  {
    id: 35,
    name: "Topaz Teardrop Earrings",
    price: 2199,
    material: "silver",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
    description: "Blue topaz in elegant teardrop shape.",
    category: "earrings",
    inStock: true,
    featured: false
  },
  {
    id: 36,
    name: "Gemstone Tennis Bracelet",
    price: 4299,
    material: "platinum",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    description: "Multi-colored gemstone tennis bracelet.",
    category: "bracelets",
    inStock: false,
    featured: false
  },
  {
    id: 37,
    name: "Spinel Solitaire Ring",
    price: 3499,
    material: "platinum",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "Rare red spinel in classic solitaire setting.",
    category: "rings",
    inStock: true,
    featured: false
  },
  {
    id: 38,
    name: "Labradorite Pendant",
    price: 899,
    material: "silver",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
    description: "Mystical labradorite with blue flash pendant.",
    category: "necklaces",
    inStock: true,
    featured: false
  },
  {
    id: 39,
    name: "Iolite Cluster Studs",
    price: 1199,
    material: "silver",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "Violet-blue iolite in cluster stud design.",
    category: "earrings",
    inStock: true,
    featured: false
  },
  {
    id: 40,
    name: "Beaded Gold Bracelet",
    price: 1599,
    material: "gold",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
    description: "Elegant beaded bracelet in 18k gold.",
    category: "bracelets",
    inStock: true,
    featured: false
  },
  {
    id: 41,
    name: "Alexandrite Color-Change Ring",
    price: 9999,
    material: "diamond",
    image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=800&q=80",
    description: "Rare alexandrite that changes color in different light.",
    category: "rings",
    inStock: false,
    featured: false
  },
  {
    id: 42,
    name: "Freshwater Pearl Strand",
    price: 799,
    material: "silver",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    description: "Classic freshwater pearl strand necklace.",
    category: "necklaces",
    inStock: true,
    featured: false
  },
  {
    id: 43,
    name: "Kunzite Drop Earrings",
    price: 2799,
    material: "gold",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=800&q=80",
    description: "Soft pink kunzite in graceful drop style.",
    category: "earrings",
    inStock: true,
    featured: false
  },
  {
    id: 44,
    name: "Snake Chain Bracelet",
    price: 1299,
    material: "silver",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    description: "Flexible snake chain in sterling silver.",
    category: "bracelets",
    inStock: true,
    featured: false
  },
  {
    id: 45,
    name: "Paraiba Tourmaline Ring",
    price: 12999,
    material: "platinum",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
    description: "Extremely rare Paraiba tourmaline with neon blue glow.",
    category: "rings",
    inStock: false,
    featured: false
  },
  {
    id: 46,
    name: "Jade Cabochon Necklace",
    price: 1999,
    material: "gold",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80",
    description: "Imperial jade cabochon on silk cord.",
    category: "necklaces",
    inStock: true,
    featured: false
  },
  {
    id: 47,
    name: "Zircon Brilliant Studs",
    price: 1699,
    material: "platinum",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
    description: "Brilliant blue zircon stud earrings.",
    category: "earrings",
    inStock: true,
    featured: false
  },
  {
    id: 48,
    name: "Mesh Gold Bracelet",
    price: 3299,
    material: "gold",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    description: "Sophisticated mesh bracelet in 14k gold.",
    category: "bracelets",
    inStock: true,
    featured: false
  },
  {
    id: 49,
    name: "Padparadscha Sapphire Ring",
    price: 8499,
    material: "gold",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "Rare padparadscha sapphire with peachy-pink color.",
    category: "rings",
    inStock: true,
    featured: false
  },
  {
    id: 50,
    name: "Vintage Cameo Necklace",
    price: 1299,
    material: "silver",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
    description: "Antique-style cameo pendant on vintage chain.",
    category: "necklaces",
    inStock: true,
    featured: false
  }
];
