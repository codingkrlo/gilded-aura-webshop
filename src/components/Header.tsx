
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, X, Search, ChevronDown, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  cartCount: number;
  onLoginClick: () => void;
  showBackButton?: boolean;
}

const Header = ({ cartCount, onLoginClick, showBackButton = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const productCategories = [
    "Rings",
    "Necklaces", 
    "Earrings",
    "Bracelets",
    "Watches",
    "Pendants"
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gold-500/20 backdrop-blur-md bg-jetblack-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Back button and Logo */}
          <div className="flex items-center space-x-4">
            {/* Back Button */}
            {showBackButton && (
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-silver-400 hover:text-gold-500 transition-colors duration-300 bg-jetblack-100/50 hover:bg-jetblack-100/70 px-3 py-2 rounded-lg backdrop-blur-sm border border-silver-600/30 hover:border-gold-500/30"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="font-medium text-sm">Back</span>
              </button>
            )}
            
            {/* Logo with Three Intertwined Rings */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10">
                {/* Three intertwined rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="group-hover:scale-110 transition-transform duration-300">
                    {/* Ring 1 */}
                    <circle
                      cx="16"
                      cy="18"
                      r="8"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      className="opacity-90"
                    />
                    {/* Ring 2 */}
                    <circle
                      cx="24"
                      cy="18"
                      r="8"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      className="opacity-90"
                    />
                    {/* Ring 3 */}
                    <circle
                      cx="20"
                      cy="22"
                      r="8"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      className="opacity-90"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-xl font-bold text-white font-serif group-hover:text-gold-500 transition-colors duration-300">IIRA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-silver-400 hover:text-gold-500 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Actions - Dropdown Menu */}
          <div className="flex items-center space-x-4">
            {/* Main Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:text-gold-500 hover:bg-gold-500/10 backdrop-blur-sm bg-white/10 border border-white/20 hover:border-gold-500/30 transition-all duration-300"
                >
                  Menu
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-56 backdrop-blur-md bg-jetblack-200/90 border-gold-500/20 text-white z-50"
                align="end"
              >
                {/* Search Section */}
                <div className="p-2">
                  <div className="flex items-center space-x-2 text-sm text-silver-400 mb-2">
                    <Search className="h-4 w-4" />
                    <span>Search Products</span>
                  </div>
                  {productCategories.map((category) => (
                    <DropdownMenuItem 
                      key={category}
                      className="text-silver-300 hover:text-black hover:bg-gold-500/90 cursor-pointer transition-colors duration-300"
                      onClick={() => navigate(`/collections?category=${category.toLowerCase()}`)}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </div>
                
                <DropdownMenuSeparator className="bg-gold-500/20" />
                
                {/* User Actions */}
                <DropdownMenuItem 
                  className="text-silver-300 hover:text-black hover:bg-gold-500/90 cursor-pointer transition-colors duration-300"
                  onClick={onLoginClick}
                >
                  <User className="mr-2 h-4 w-4" />
                  Login / Register
                </DropdownMenuItem>
                
                <DropdownMenuItem 
                  className="text-silver-300 hover:text-black hover:bg-gold-500/90 cursor-pointer transition-colors duration-300"
                  onClick={() => navigate("/cart")}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart ({cartCount})
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-silver-400 hover:text-gold-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-md bg-jetblack-200/90 border-t border-gold-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-silver-400 hover:text-gold-500 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gold-500/20 pt-2 mt-2">
                {productCategories.map((category) => (
                  <Link
                    key={category}
                    to={`/collections?category=${category.toLowerCase()}`}
                    className="block px-3 py-2 text-silver-300 hover:text-gold-500 transition-colors duration-300 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
