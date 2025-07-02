
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { JewelryItem } from "@/data/jewelry";

interface CartItem extends JewelryItem {
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Eternal Diamond Ring",
      category: "rings",
      price: 2499,
      material: "gold",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500",
      description: "Stunning solitaire diamond ring in 18k gold",
      inStock: true,
      quantity: 1,
    },
    {
      id: 6,
      name: "Diamond Tennis Necklace",
      category: "necklaces",
      price: 4999,
      material: "diamond",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
      description: "Exquisite diamond tennis necklace",
      inStock: true,
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-jetblack-200 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 bg-jetblack-200 rounded-full"></div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h1>
            <p className="text-silver-400 text-lg">Discover our exquisite collection of luxury jewelry</p>
          </div>
          
          <Link to="/">
            <Button className="bg-gradient-gold hover:from-gold-500 hover:to-gold-600 text-jetblack-500 font-semibold px-8 py-3">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-jetblack-200 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-silver-400 hover:text-gold-500 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
          </div>
          <div className="text-silver-400">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-jetblack-100 rounded-xl p-6 flex items-center space-x-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                  <p className="text-silver-400 text-sm mb-2">{item.description}</p>
                  <p className="text-gold-500 font-semibold">${item.price.toLocaleString()}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="border-silver-600 text-silver-400 hover:bg-gold-500 hover:text-jetblack-500 hover:border-gold-500"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  
                  <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="border-silver-600 text-silver-400 hover:bg-gold-500 hover:text-jetblack-500 hover:border-gold-500"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                  className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                >
                  <Trash2 className="w-5 h-5" />
                </Button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-jetblack-100 rounded-xl p-6 h-fit">
            <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-silver-300">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-silver-300">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-silver-600 pt-4">
                <div className="flex justify-between text-white font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <Button className="w-full bg-gradient-gold hover:from-gold-500 hover:to-gold-600 text-jetblack-500 font-semibold py-3 mb-4">
              Proceed to Checkout
            </Button>

            <div className="text-center">
              <Link to="/" className="text-gold-500 hover:text-gold-400 text-sm transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
