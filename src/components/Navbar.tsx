
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        scrolled 
          ? "bg-techTheme-background/95 backdrop-blur-sm shadow-md" 
          : "bg-techTheme-background"
      )}
    >
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-techTheme-primary">
              تك عرب
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse mr-4">
            <Link to="/" className="text-white hover:text-techTheme-primary transition-colors py-2">
              الرئيسية
            </Link>
            <Link to="/shop" className="text-white hover:text-techTheme-primary transition-colors py-2">
              المتجر
            </Link>
            <Link to="/about" className="text-white hover:text-techTheme-primary transition-colors py-2">
              من نحن
            </Link>
            <Link to="/contact" className="text-white hover:text-techTheme-primary transition-colors py-2">
              تواصل معنا
            </Link>
          </nav>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-techTheme-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/account" className="text-white hover:text-techTheme-primary transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <div className="relative">
              <Link to="/cart" className="text-white hover:text-techTheme-primary transition-colors">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-techTheme-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
            <button 
              className="md:hidden text-white hover:text-techTheme-primary transition-colors"
              onClick={onMenuToggle}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
