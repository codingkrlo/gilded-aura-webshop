import Header from "@/components/Header";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, getCartCount, getCartTotal } = useCart();

  return (
    <div className="min-h-screen bg-jetblack-200 relative overflow-hidden">
      {/* Animated Gold Blur Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-gold-500/20 via-gold-400/30 to-gold-300/20 rounded-full blur-3xl animate-pulse opacity-60 -top-20 -left-20"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-l from-gold-600/25 via-gold-500/35 to-gold-400/25 rounded-full blur-2xl animate-float opacity-50 top-1/2 right-10 transform -translate-y-1/2"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-t from-gold-400/20 via-gold-300/30 to-gold-500/20 rounded-full blur-3xl animate-pulse opacity-40 bottom-20 left-1/3"></div>
      </div>
      
      <Header cartCount={getCartCount()} onLoginClick={() => {}} showBackButton={true} />
      
      <div className="relative z-10 pt-24">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Shopping Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12 text-jetblack-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Your cart is empty</h3>
              <p className="text-silver-400 mb-6">Add some beautiful jewelry to get started!</p>
              <Link to="/collections">
                <Button className="bg-gradient-gold hover:from-gold-500 hover:to-gold-600 text-jetblack-500 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                  Browse Collections
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-jetblack-100 rounded-xl p-6 shadow-xl border border-gold-500/20 sticky top-24">
                  <h3 className="text-2xl font-bold text-white mb-6">Order Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-silver-300">
                      <span>Items ({getCartCount()})</span>
                      <span>${getCartTotal().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-silver-300">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between text-silver-300">
                      <span>Tax</span>
                      <span>${(getCartTotal() * 0.08).toLocaleString()}</span>
                    </div>
                    <div className="border-t border-silver-600 pt-4">
                      <div className="flex justify-between text-xl font-bold text-gold-500">
                        <span>Total</span>
                        <span>${(getCartTotal() * 1.08).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-gold hover:from-gold-500 hover:to-gold-600 text-jetblack-500 font-semibold py-3 text-lg">
                      Proceed to Checkout
                    </Button>
                    
                    <Link to="/collections">
                      <Button variant="outline" className="w-full border-gold-500/30 text-gold-400 hover:bg-gold-500/10">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Continue Shopping
                      </Button>
                    </Link>
                    
                    <Button
                      variant="outline"
                      onClick={clearCart}
                      className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10"
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
