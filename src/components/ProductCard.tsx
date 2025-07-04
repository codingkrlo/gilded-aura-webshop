
import { useState } from "react";
import { JewelryItem } from "@/data/jewelry";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";

interface ProductCardProps {
  item: JewelryItem;
  onAddToCart: (item: JewelryItem) => void;
}

const ProductCard = ({ item, onAddToCart }: ProductCardProps) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      onAddToCart(item);
      setIsLoading(false);
      setIsAdded(true);
      
      // Reset the added state after 2 seconds
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    }, 300);
  };

  return (
    <div className="group bg-jetblack-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gold-500/10 hover:border-gold-500/30">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
          {item.name}
        </h3>
        <p className="text-silver-400 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-gold-500">
            ${item.price.toLocaleString()}
          </span>
          <span className="text-sm text-silver-400 bg-jetblack-200 px-2 py-1 rounded">
            {item.material}
          </span>
        </div>
        
        <Button
          onClick={handleAddToCart}
          disabled={isLoading || !item.inStock}
          className={`w-full font-semibold py-3 text-base transition-all duration-300 ${
            isAdded
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-gradient-gold hover:from-gold-500 hover:to-gold-600 text-jetblack-500 hover:scale-105'
          } ${!item.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-jetblack-500 border-t-transparent rounded-full animate-spin"></div>
              <span>Adding...</span>
            </div>
          ) : isAdded ? (
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5" />
              <span>Added to Cart!</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <span>{item.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
