import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import LoginModal from "@/components/LoginModal";
import ContactCard from "@/components/ContactCard";
import { jewelryItems, JewelryItem } from "@/data/jewelry";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { addToCart, getCartCount } = useCart();
  const { toast } = useToast();

  const featuredItems = jewelryItems.filter(item => item.featured).slice(0, 8);

  const handleAddToCart = (item: JewelryItem) => {
    addToCart(item);
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-jetblack-200">
      <Header 
        cartCount={getCartCount()} 
        onLoginClick={() => setIsLoginModalOpen(true)} 
      />
      
      <HeroSection />

      {/* Featured Collections Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Collections</h2>
            <p className="text-silver-400 text-lg max-w-2xl mx-auto">
              Handpicked pieces that represent the pinnacle of luxury and craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredItems.map((item) => (
              <ProductCard key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/collections">
              <Button className="bg-gradient-gold hover:from-gold-500 hover:to-gold-600 text-jetblack-500 font-semibold px-8 py-4 text-lg">
                View All Collections
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-jetblack-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-jetblack-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Premium Quality</h3>
              <p className="text-silver-400">
                Each piece is crafted with the finest materials and meticulous attention to detail
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-silver rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-jetblack-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lifetime Warranty</h3>
              <p className="text-silver-400">
                We stand behind our craftsmanship with comprehensive warranty coverage
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-jetblack-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Free Shipping</h3>
              <p className="text-silver-400">
                Complimentary shipping and secure packaging for all orders worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-jetblack-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-silver-400 text-lg">
              Click our business card to reveal our contact information
            </p>
          </div>
          <ContactCard />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-jetblack-200 to-jetblack-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-silver-400 text-lg mb-8">
            Be the first to know about new collections, exclusive offers, and luxury jewelry insights
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-jetblack-200 border border-silver-600 text-white px-4 py-3 rounded-lg focus:border-gold-500 focus:outline-none"
            />
            <Button className="bg-gradient-gold hover:from-gold-500 hover:to-gold-600 text-jetblack-500 font-semibold px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-jetblack-500 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-jetblack-500 font-bold text-sm">I</span>
                </div>
                <span className="text-xl font-bold text-gold-500 font-serif">IIRA</span>
              </div>
              <p className="text-silver-400">
                Luxury jewelry crafted with passion and precision since 1895.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Collections</h4>
              <ul className="space-y-2 text-silver-400">
                <li><a href="#" className="hover:text-gold-500 transition-colors">Rings</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">Necklaces</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">Earrings</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">Bracelets</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Customer Care</h4>
              <ul className="space-y-2 text-silver-400">
                <li><a href="#" className="hover:text-gold-500 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">Care Instructions</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">Returns</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-silver-400">
                <li><a href="#" className="hover:text-gold-500 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-silver-700 pt-8 text-center text-silver-500">
            <p>&copy; 2024 IIRA Jewelry. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
