
import Header from "@/components/Header";

const Cart = () => {
  return (
    <div className="min-h-screen bg-jetblack-200 relative overflow-hidden">
      {/* Animated Gold Blur Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-gold-500/20 via-gold-400/30 to-gold-300/20 rounded-full blur-3xl animate-pulse opacity-60 -top-20 -left-20"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-l from-gold-600/25 via-gold-500/35 to-gold-400/25 rounded-full blur-2xl animate-float opacity-50 top-1/2 right-10 transform -translate-y-1/2"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-t from-gold-400/20 via-gold-300/30 to-gold-500/20 rounded-full blur-3xl animate-pulse opacity-40 bottom-20 left-1/3"></div>
      </div>
      
      <Header cartCount={0} onLoginClick={() => {}} showBackButton={true} />
      
      <div className="relative z-10 pt-24">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Shopping Cart</h1>
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 bg-jetblack-200 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Your cart is empty</h3>
            <p className="text-silver-400 mb-6">Add some beautiful jewelry to get started!</p>
            <button
              onClick={() => window.location.href = '/collections'}
              className="bg-gradient-gold hover:from-gold-500 hover:to-gold-600 text-jetblack-500 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Browse Collections
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
