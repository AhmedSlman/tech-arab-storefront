
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import products, { getCategories } from "../data/products";
import { Product } from "../context/CartContext";

interface FilterState {
  categories: string[];
  brands: string[];
  colors: string[];
  priceRange: [number, number];
  inStock: boolean;
}

const ShopPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
  // Initialize filter state based on URL parameters
  const initialCategories = categoryParam ? [categoryParam] : [];
  
  // Filter products based on current filters
  const handleFilterChange = (filters: FilterState) => {
    let result = [...products];
    
    // Filter by categories
    if (filters.categories.length > 0) {
      result = result.filter(product => 
        filters.categories.includes(product.category)
      );
    }
    
    // Filter by brands
    if (filters.brands.length > 0) {
      result = result.filter(product => 
        filters.brands.includes(product.brand)
      );
    }
    
    // Filter by colors
    if (filters.colors.length > 0) {
      result = result.filter(product => 
        product.colors.some(color => filters.colors.includes(color))
      );
    }
    
    // Filter by price range
    result = result.filter(product => {
      const price = product.discountPrice || product.price;
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });
    
    // Filter by availability
    if (filters.inStock) {
      result = result.filter(product => product.inStock);
    }
    
    // Apply search filter if there is a search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.category.toLowerCase().includes(term) ||
        product.brand.toLowerCase().includes(term)
      );
    }
    
    setFilteredProducts(result);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Apply search filter when search term changes
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleFilterChange({
        categories: initialCategories,
        brands: [],
        colors: [],
        priceRange: [0, 100000],
        inStock: false,
      });
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  // Apply initial filter if category is specified in URL
  useEffect(() => {
    if (categoryParam) {
      handleFilterChange({
        categories: [categoryParam],
        brands: [],
        colors: [],
        priceRange: [0, 100000],
        inStock: false,
      });
    } else {
      setFilteredProducts(products);
    }
  }, [categoryParam]);

  return (
    <div className="py-8">
      <div className="container-custom mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">المتجر</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full py-2 px-4 bg-techTheme-muted text-white rounded-md flex justify-center items-center"
            >
              {showFilters ? "إخفاء الفلاتر" : "إظهار الفلاتر"}
            </button>
          </div>
          
          {/* Filters (Sidebar) */}
          <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <ProductFilter 
              onFilterChange={handleFilterChange}
              className="sticky top-24"
            />
          </div>
          
          {/* Products Grid */}
          <div className="md:w-3/4">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن منتج..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full bg-techTheme-muted border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-techTheme-primary"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>
            </div>
            
            {/* Category Pills */}
            <div className="mb-6 flex flex-wrap gap-2">
              {getCategories().map(category => (
                <button
                  key={category}
                  className={`px-3 py-1 rounded-full text-sm ${
                    categoryParam === category
                      ? "bg-techTheme-primary text-white"
                      : "bg-techTheme-muted text-white hover:bg-techTheme-primary/50"
                  }`}
                  onClick={() => {
                    // Update URL with category parameter
                    const params = new URLSearchParams(window.location.search);
                    if (categoryParam === category) {
                      params.delete("category");
                    } else {
                      params.set("category", category);
                    }
                    window.history.pushState({}, "", `?${params.toString()}`);
                    // Trigger filter update
                    handleFilterChange({
                      categories: categoryParam === category ? [] : [category],
                      brands: [],
                      colors: [],
                      priceRange: [0, 100000],
                      inStock: false,
                    });
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Results Count */}
            <div className="mb-4">
              <p className="text-gray-300">
                {filteredProducts.length} منتج
              </p>
            </div>
            
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-400">لا توجد منتجات تطابق معايير البحث</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
