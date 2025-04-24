
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

// Define Product and CartItem types
export type ProductColor = "أسود" | "أبيض" | "أحمر" | "أزرق" | "فضي" | string;

export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  colors: ProductColor[];
  price: number;
  discountPrice?: number;
  image: string;
  additionalImages?: string[];
  specs: string;
  description?: string;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: ProductColor;
}

// Define context type
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, selectedColor: ProductColor) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(0);

  // Load cart from local storage when component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Update local storage when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    calculateTotals();
  }, [cart]);

  const calculateTotals = () => {
    const total = cart.reduce((sum, item) => {
      const price = item.product.discountPrice || item.product.price;
      return sum + (price * item.quantity);
    }, 0);
    
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    setCartTotal(total);
    setCartCount(count);
  };

  const addToCart = (product: Product, quantity: number, selectedColor: ProductColor) => {
    // Check if product is already in cart
    const existingItemIndex = cart.findIndex(item => 
      item.product.id === product.id && item.selectedColor === selectedColor
    );

    if (existingItemIndex > -1) {
      // Update quantity if product exists
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
      toast({
        title: "تم تحديث السلة",
        description: `تم زيادة كمية ${product.name}`,
      });
    } else {
      // Add new item if product does not exist
      setCart([...cart, { product, quantity, selectedColor }]);
      toast({
        title: "تمت الإضافة بنجاح",
        description: `تم إضافة ${product.name} إلى سلة التسوق`,
      });
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.product.id !== productId));
    toast({
      title: "تم الحذف",
      description: "تم حذف المنتج من سلة التسوق",
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    
    const updatedCart = cart.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    );
    
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "تم تفريغ السلة",
      description: "تم حذف جميع المنتجات من سلة التسوق",
    });
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
