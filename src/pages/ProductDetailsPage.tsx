
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById, getRelatedProducts } from "../data/products";
import { useCart, ProductColor } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(Number(id));
  const { addToCart } = useCart();
  
  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    product?.colors[0] || "أسود"
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  // Get related products
  const relatedProducts = product ? getRelatedProducts(product, 3) : [];
  
  if (!product) {
    return (
      <div className="container-custom mx-auto py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">المنتج غير موجود</h1>
        <Link to="/shop" className="btn-primary">
          العودة إلى المتجر
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Get all images (main + additional)
  const allImages = [product.image, ...(product.additionalImages || [])];

  return (
    <div className="py-8">
      <div className="container-custom mx-auto">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 space-x-reverse text-sm">
            <Link to="/" className="text-gray-400 hover:text-techTheme-primary">
              الرئيسية
            </Link>
            <span className="text-gray-600">/</span>
            <Link to="/shop" className="text-gray-400 hover:text-techTheme-primary">
              المتجر
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-300">{product.name}</span>
          </div>
        </div>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div className="bg-techTheme-muted p-4 rounded-lg mb-4">
              <div className="aspect-square overflow-hidden rounded-md">
                <img 
                  src={allImages[activeImage]} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Image Gallery */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {allImages.map((img, index) => (
                  <div 
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`aspect-square bg-techTheme-muted p-2 rounded cursor-pointer ${
                      activeImage === index ? "ring-2 ring-techTheme-primary" : ""
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} صورة ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Information */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="mb-4">
              <span className="text-gray-400">{product.brand}</span>
            </div>
            
            {/* Price */}
            <div className="flex items-center mb-6">
              <span className="text-2xl md:text-3xl font-bold text-techTheme-primary">
                {product.discountPrice ? `${product.discountPrice} ج.م` : `${product.price} ج.م`}
              </span>
              
              {product.discountPrice && (
                <span className="text-gray-400 line-through mr-3 text-lg">
                  {product.price} ج.م
                </span>
              )}
            </div>
            
            {/* Availability */}
            <div className="mb-6">
              <span className={`inline-block px-3 py-1 rounded text-sm ${
                product.inStock 
                  ? "bg-green-900/30 text-green-500" 
                  : "bg-red-900/30 text-red-500"
              }`}>
                {product.inStock ? "متوفر" : "غير متوفر"}
              </span>
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">الوصف</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {product.description || product.specs}
              </p>
            </div>
            
            {/* Specs */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">المواصفات</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {product.specs}
              </p>
            </div>
            
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">اللون</h3>
              <div className="flex space-x-3 space-x-reverse">
                {product.colors.map((color, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center ${
                      selectedColor === color ? "ring-2 ring-techTheme-primary ring-offset-2 ring-offset-techTheme-background" : ""
                    }`}
                  >
                    <span 
                      className="block w-6 h-6 rounded-full"
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
                    ></span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quantity Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">الكمية</h3>
              <div className="flex items-center">
                <button 
                  onClick={decrementQuantity}
                  className="bg-techTheme-muted text-white w-10 h-10 flex items-center justify-center rounded-r-md"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input 
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 h-10 text-center bg-techTheme-muted border-x border-gray-700 text-white"
                />
                <button 
                  onClick={incrementQuantity}
                  className="bg-techTheme-muted text-white w-10 h-10 flex items-center justify-center rounded-l-md"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <div className="mb-6">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-3 rounded-md font-medium text-white ${
                  product.inStock
                    ? "bg-techTheme-primary hover:bg-opacity-90"
                    : "bg-gray-600 cursor-not-allowed"
                }`}
              >
                {product.inStock ? "أضف إلى السلة" : "غير متوفر"}
              </button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="section-title mb-8">منتجات ذات صلة</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
