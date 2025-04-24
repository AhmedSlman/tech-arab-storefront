
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-techTheme-background/95 backdrop-blur-sm">
      <div className="flex items-center justify-end p-4">
        <button
          onClick={onClose}
          className="text-white hover:text-techTheme-primary transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <nav className="flex flex-col items-center justify-center h-full space-y-8 -mt-16">
        <Link 
          to="/" 
          className="text-2xl font-tajawal text-white hover:text-techTheme-primary transition-colors"
          onClick={onClose}
        >
          الرئيسية
        </Link>
        <Link 
          to="/shop" 
          className="text-2xl font-tajawal text-white hover:text-techTheme-primary transition-colors"
          onClick={onClose}
        >
          المتجر
        </Link>
        <Link 
          to="/about" 
          className="text-2xl font-tajawal text-white hover:text-techTheme-primary transition-colors"
          onClick={onClose}
        >
          من نحن
        </Link>
        <Link 
          to="/contact" 
          className="text-2xl font-tajawal text-white hover:text-techTheme-primary transition-colors"
          onClick={onClose}
        >
          تواصل معنا
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
