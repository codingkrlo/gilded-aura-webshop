
import { CartItem as CartItemType } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  return (
    <div className="bg-jetblack-100 rounded-xl p-6 shadow-xl border border-gold-500/20">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-32 h-32 rounded-lg overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-white">{item.name}</h3>
            <button
              onClick={() => onRemove(item.id)}
              className="text-silver-400 hover:text-red-400 transition-colors duration-300"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

          <p className="text-silver-300 text-sm mb-4 line-clamp-2">
            {item.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 p-0 border-gold-500/30 hover:border-gold-500 hover:bg-gold-500/10"
              >
                <Minus className="w-4 h-4" />
              </Button>
              
              <span className="text-white font-medium w-8 text-center">
                {item.quantity}
              </span>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 p-0 border-gold-500/30 hover:border-gold-500 hover:bg-gold-500/10"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <div className="text-right">
              <p className="text-2xl font-bold text-gold-500">
                ${(item.price * item.quantity).toLocaleString()}
              </p>
              <p className="text-sm text-silver-400">
                ${item.price.toLocaleString()} each
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
