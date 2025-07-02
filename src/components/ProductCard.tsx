
import { useState } from "react";
import { JewelryItem } from "@/data/jewelry";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  item: JewelryItem;
  onAddToCart: (item: JewelryItem) => void;
}

const ProductCard = ({ item, onAddToCart }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const getMaterialColor = (material: string) => {
    switch (material) {
      case "gold": return "text-gold-500";
      case "silver": return "text-silver-500";
      case "platinum": return "text-silver-400";
      case "diamond": return "text-white";
      default: return "text-gold-500";
    }
  };

  const getMaterialBg = (material: string) => {
    switch (material) {
      case "gold": return "bg-gold-500";
      case "silver": return "bg-silver-500";
      case "platinum": return "bg-silver-400";
      case "diamond": return "bg-white";
      default: return "bg-gold-500";
    }
  };

  return (
    <div 
      className="group relative bg-jetblack-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-jetblack-500/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Featured badge */}
        {item.featured && (
          <div className="absolute top-4 left-4 bg-gradient-gold text-jetblack-500 px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        
        {/* Wishlist button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full glass-effect flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <Heart className={`w-5 h-5 transition-all duration-300 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
        </button>

        {/* Quick add to cart */}
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <Button 
            onClick={() => onAddToCart(item)}
            className="w-full bg-gradient-gold hover:from-gold-500 hover:to-gold-600 text-jetblack-500 font-semibold transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase tracking-wider text-silver-400 font-medium">
            {item.category}
          </span>
          <div className={`w-3 h-3 rounded-full ${getMaterialBg(item.material)}`}></div>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
          {item.name}
        </h3>
        
        <p className="text-silver-300 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gold-500">
              ${item.price.toLocaleString()}
            </span>
            {item.originalPrice && (
              <span className="text-sm text-silver-500 line-through">
                ${item.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <span className={`text-xs px-2 py-1 rounded-full ${getMaterialColor(item.material)} bg-opacity-20 ${getMaterialBg(item.material).replace('bg-', 'bg-opacity-20 bg-')}`}>
            {item.material.toUpperCase()}
          </span>
        </div>

        {!item.inStock && (
          <div className="mt-4 text-center">
            <span className="text-red-400 text-sm font-medium">Out of Stock</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
