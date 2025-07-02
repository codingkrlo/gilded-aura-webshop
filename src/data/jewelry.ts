
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
  // Rings
  { id: 1, name: "Eternal Diamond Ring", category: "rings", price: 2499, material: "gold", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500", description: "Stunning solitaire diamond ring in 18k gold", inStock: true, featured: true },
  { id: 2, name: "Classic Wedding Band", category: "rings", price: 899, material: "platinum", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500", description: "Timeless platinum wedding band", inStock: true },
  { id: 3, name: "Vintage Rose Gold Ring", category: "rings", price: 1299, material: "gold", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", description: "Elegant vintage-inspired rose gold ring", inStock: true },
  { id: 4, name: "Silver Statement Ring", category: "rings", price: 399, material: "silver", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500", description: "Bold sterling silver statement piece", inStock: true },
  { id: 5, name: "Emerald Halo Ring", category: "rings", price: 3299, material: "gold", image: "https://images.unsplash.com/photo-1594736797933-d0d00bb34076?w=500", description: "Luxurious emerald with diamond halo", inStock: true, featured: true },
  
  // Necklaces
  { id: 6, name: "Diamond Tennis Necklace", category: "necklaces", price: 4999, material: "diamond", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500", description: "Exquisite diamond tennis necklace", inStock: true, featured: true },
  { id: 7, name: "Pearl Strand Necklace", category: "necklaces", price: 1599, material: "silver", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", description: "Classic freshwater pearl necklace", inStock: true },
  { id: 8, name: "Gold Chain Necklace", category: "necklaces", price: 799, material: "gold", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500", description: "Elegant 14k gold chain necklace", inStock: true },
  { id: 9, name: "Sapphire Pendant", category: "necklaces", price: 2199, material: "gold", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500", description: "Blue sapphire pendant in white gold", inStock: true },
  { id: 10, name: "Silver Locket", category: "necklaces", price: 499, material: "silver", image: "https://images.unsplash.com/photo-1594736797933-d0d00bb34076?w=500", description: "Vintage sterling silver locket", inStock: true },
  
  // Earrings
  { id: 11, name: "Diamond Stud Earrings", category: "earrings", price: 1899, material: "diamond", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500", description: "Classic diamond stud earrings", inStock: true, featured: true },
  { id: 12, name: "Gold Hoop Earrings", category: "earrings", price: 699, material: "gold", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", description: "Medium-sized gold hoop earrings", inStock: true },
  { id: 13, name: "Pearl Drop Earrings", category: "earrings", price: 899, material: "silver", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500", description: "Elegant pearl drop earrings", inStock: true },
  { id: 14, name: "Silver Chandelier Earrings", category: "earrings", price: 599, material: "silver", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500", description: "Statement chandelier earrings", inStock: true },
  { id: 15, name: "Ruby Stud Earrings", category: "earrings", price: 1499, material: "gold", image: "https://images.unsplash.com/photo-1594736797933-d0d00bb34076?w=500", description: "Brilliant ruby stud earrings", inStock: true },
  
  // Bracelets
  { id: 16, name: "Tennis Bracelet", category: "bracelets", price: 2999, material: "diamond", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500", description: "Classic diamond tennis bracelet", inStock: true, featured: true },
  { id: 17, name: "Gold Chain Bracelet", category: "bracelets", price: 599, material: "gold", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", description: "Delicate gold chain bracelet", inStock: true },
  { id: 18, name: "Silver Charm Bracelet", category: "bracelets", price: 399, material: "silver", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500", description: "Sterling silver charm bracelet", inStock: true },
  { id: 19, name: "Platinum Bangle", category: "bracelets", price: 1299, material: "platinum", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500", description: "Sleek platinum bangle", inStock: true },
  { id: 20, name: "Gemstone Bracelet", category: "bracelets", price: 799, material: "gold", image: "https://images.unsplash.com/photo-1594736797933-d0d00bb34076?w=500", description: "Multi-gemstone gold bracelet", inStock: true },
  
  // Watches
  { id: 21, name: "Luxury Gold Watch", category: "watches", price: 5999, material: "gold", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500", description: "Swiss-made luxury gold watch", inStock: true, featured: true },
  { id: 22, name: "Silver Dress Watch", category: "watches", price: 1999, material: "silver", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", description: "Elegant silver dress watch", inStock: true },
  { id: 23, name: "Diamond Watch", category: "watches", price: 8999, material: "diamond", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500", description: "Diamond-encrusted luxury watch", inStock: true },
  { id: 24, name: "Platinum Chronograph", category: "watches", price: 4999, material: "platinum", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500", description: "Precision platinum chronograph", inStock: true },
  { id: 25, name: "Classic Gold Watch", category: "watches", price: 2999, material: "gold", image: "https://images.unsplash.com/photo-1594736797933-d0d00bb34076?w=500", description: "Timeless gold timepiece", inStock: true },
  
  // Additional items to reach 50
  { id: 26, name: "Art Deco Ring", category: "rings", price: 1799, material: "platinum", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500", description: "Vintage Art Deco inspired ring", inStock: true },
  { id: 27, name: "Infinity Necklace", category: "necklaces", price: 899, material: "gold", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", description: "Gold infinity symbol necklace", inStock: true },
  { id: 28, name: "Crystal Earrings", category: "earrings", price: 399, material: "silver", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500", description: "Sparkling crystal earrings", inStock: true },
  { id: 29, name: "Leather Watch Band", category: "watches", price: 199, material: "silver", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500", description: "Premium leather watch band", inStock: true },
  { id: 30, name: "Gemstone Ring", category: "rings", price: 999, material: "gold", image: "https://images.unsplash.com/photo-1594736797933-d0d00bb34076?w=500", description: "Multi-gemstone cocktail ring", inStock: true },
  
  { id: 31, name: "Chain Link Bracelet", category: "bracelets", price: 699, material: "silver", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500", description: "Heavy chain link bracelet", inStock: true },
  { id: 32, name: "Pendant Necklace", category: "necklaces", price: 599, material: "gold", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", description: "Delicate gold pendant", inStock: true },
  { id: 33, name: "Statement Earrings", category: "earrings", price: 799, material: "gold", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500", description: "Bold statement earrings", inStock: true },
  { id: 34, name: "Vintage Brooch", category: "rings", price: 399, material: "silver", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500", description: "Antique silver brooch", inStock: true },
  { id: 35, name: "Sports Watch", category: "watches", price: 1299, material: "silver", image: "https://images.unsplash.com/photo-1594736797933-d0d00bb34076?w=500", description: "Professional sports watch", inStock: true },
  
  { id: 36, name: "Eternity Ring", category: "rings", price: 2199, material: "platinum", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500", description: "Diamond eternity band", inStock: true },
  { id: 37, name: "Choker Necklace", category: "necklaces", price: 499, material: "gold", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", description: "Modern gold choker", inStock: true },
  { id: 38, name: "Threader Earrings", category: "earrings", price: 299, material: "silver", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500", description: "Delicate threader earrings", inStock: true },
  { id: 39, name: "Cuff Bracelet", category: "bracelets", price: 899, material: "gold", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500", description: "Wide gold cuff bracelet", inStock: true },
  { id: 40, name: "Pocket Watch", category: "watches", price: 799, material: "gold", image: "https://images.unsplash.com/photo-1594736797933-d0d00bb34076?w=500", description: "Classic gold pocket watch", inStock: true },
  
  { id: 41, name: "Stackable Rings", category: "rings", price: 599, material: "gold", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500", description: "Set of stackable gold rings", inStock: true },
  { id: 42, name: "Layered Necklace", category: "necklaces", price: 799, material: "silver", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", description: "Multi-layer silver necklace", inStock: true },
  { id: 43, name: "Ear Cuffs", category: "earrings", price: 199, material: "gold", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500", description: "Trendy gold ear cuffs", inStock: true },
  { id: 44, name: "Ankle Bracelet", category: "bracelets", price: 299, material: "silver", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500", description: "Delicate silver anklet", inStock: true },
  { id: 45, name: "Smart Watch", category: "watches", price: 3999, material: "gold", image: "https://images.unsplash.com/photo-1594736797933-d0d00bb34076?w=500", description: "Luxury smart watch", inStock: true },
  
  { id: 46, name: "Signet Ring", category: "rings", price: 1099, material: "gold", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500", description: "Classic gold signet ring", inStock: true },
  { id: 47, name: "Bar Necklace", category: "necklaces", price: 399, material: "gold", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", description: "Minimalist gold bar necklace", inStock: true },
  { id: 48, name: "Huggie Earrings", category: "earrings", price: 499, material: "gold", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500", description: "Small gold huggie hoops", inStock: true },
  { id: 49, name: "Tennis Anklet", category: "bracelets", price: 1299, material: "platinum", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500", description: "Diamond tennis anklet", inStock: true },
  { id: 50, name: "Skeleton Watch", category: "watches", price: 2599, material: "silver", image: "https://images.unsplash.com/photo-1594736797933-d0d00bb34076?w=500", description: "Mechanical skeleton watch", inStock: true },
];
