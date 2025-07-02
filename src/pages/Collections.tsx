import { useState } from "react";
import { jewelryItems } from "@/data/jewelry";
import ProductCard from "@/components/ProductCard";
import { JewelryItem } from "@/data/jewelry";
import Header from "@/components/Header";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  
  const { addToCart, getCartCount } = useCart();
  const { toast } = useToast();

  const categories = ["all", "rings", "necklaces", "earrings", "bracelets", "watches"];
  const materials = ["all", "gold", "silver", "platinum", "diamond"];

  const filteredItems = jewelryItems
    .filter(item => selectedCategory === "all" || item.category === selectedCategory)
    .filter(item => selectedMaterial === "all" || item.material === selectedMaterial)
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "name": return a.name.localeCompare(b.name);
        case "featured": return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        default: return 0;
      }
    });

  const handleAddToCart = (item: JewelryItem) => {
    addToCart(item);
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-jetblack-200 relative overflow-hidden">
      {/* Animated Gold Blur Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-gold-500/20 via-gold-400/30 to-gold-300/20 rounded-full blur-3xl animate-pulse opacity-60 -top-20 -left-20"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-l from-gold-600/25 via-gold-500/35 to-gold-400/25 rounded-full blur-2xl animate-float opacity-50 top-1/2 right-10 transform -translate-y-1/2"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-t from-gold-400/20 via-gold-300/30 to-gold-500/20 rounded-full blur-3xl animate-pulse opacity-40 bottom-20 left-1/3"></div>
      </div>
      
      <Header cartCount={getCartCount()} onLoginClick={() => {}} showBackButton={true} />
      
      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Our Collections</h1>
            <p className="text-silver-400 text-lg max-w-2xl mx-auto">
              Discover our carefully curated selection of luxury jewelry, 
              crafted with the finest materials and attention to detail.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-jetblack-100 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-silver-300 font-medium mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-jetblack-200 border border-silver-600 text-white rounded-lg px-3 py-2 focus:border-gold-500 focus:outline-none hover:border-gold-500 transition-colors duration-300"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Material Filter */}
              <div>
                <label className="block text-silver-300 font-medium mb-2">Material</label>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full bg-jetblack-200 border border-silver-600 text-white rounded-lg px-3 py-2 focus:border-gold-500 focus:outline-none hover:border-gold-500 transition-colors duration-300"
                >
                  {materials.map(material => (
                    <option key={material} value={material}>
                      {material === "all" ? "All Materials" : material.charAt(0).toUpperCase() + material.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <div>
                <label className="block text-silver-300 font-medium mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-jetblack-200 border border-silver-600 text-white rounded-lg px-3 py-2 focus:border-gold-500 focus:outline-none hover:border-gold-500 transition-colors duration-300"
                >
                  <option value="featured">Featured</option>
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <div className="text-silver-400">
                  {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <ProductCard key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 bg-jetblack-200 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No items found</h3>
              <p className="text-silver-400 mb-6">
                Try adjusting your filters to see more results
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedMaterial("all");
                  setSortBy("featured");
                }}
                className="bg-gradient-gold hover:from-gold-500 hover:to-gold-600 text-jetblack-500 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collections;
