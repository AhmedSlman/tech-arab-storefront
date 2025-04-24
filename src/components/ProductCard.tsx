
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden aspect-square">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.discountPrice && (
            <span className="absolute top-2 right-2 bg-techTheme-secondary text-white text-sm font-bold px-2 py-1 rounded">
              خصم
            </span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <span className="text-white font-bold">غير متوفر</span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg truncate">{product.name}</h3>
          
          <div className="flex items-center mt-2">
            <span className="font-bold text-techTheme-primary text-lg">
              {product.discountPrice ? `${product.discountPrice} ج.م` : `${product.price} ج.م`}
            </span>
            
            {product.discountPrice && (
              <span className="text-gray-400 line-through mr-2 text-sm">
                {product.price} ج.م
              </span>
            )}
          </div>
          
          <div className="flex items-center mt-2">
            <span className="text-sm text-gray-400">
              {product.brand}
            </span>
          </div>
          
          <div className="flex items-center space-x-reverse space-x-1 mt-3">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="h-4 w-4 rounded-full inline-block border border-gray-600"
                style={{ 
                  backgroundColor: 
                    color === "أسود" ? "#000000" :
                    color === "أبيض" ? "#FFFFFF" :
                    color === "أحمر" ? "#FF0000" :
                    color === "أزرق" ? "#0000FF" :
                    color === "فضي" ? "#C0C0C0" :
                    color === "أخضر" ? "#00FF00" :
                    "#CCCCCC"
                }}
              />
            ))}
          </div>
          
          <div className="mt-4">
            <button className="w-full bg-techTheme-muted hover:bg-techTheme-primary text-white py-2 rounded transition-colors duration-300">
              عرض التفاصيل
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
