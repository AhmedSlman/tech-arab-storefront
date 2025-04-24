
import React, { useState } from "react";
import { getCategories, getBrands, getColors } from "../data/products";

interface FilterState {
  categories: string[];
  brands: string[];
  colors: string[];
  priceRange: [number, number];
  inStock: boolean;
}

interface ProductFilterProps {
  onFilterChange: (filters: FilterState) => void;
  className?: string;
}

const priceRanges = [
  { min: 0, max: 1000, label: "أقل من 1000 ج.م" },
  { min: 1000, max: 5000, label: "1000 - 5000 ج.م" },
  { min: 5000, max: 15000, label: "5000 - 15000 ج.م" },
  { min: 15000, max: 30000, label: "15000 - 30000 ج.م" },
  { min: 30000, max: 100000, label: "أكثر من 30000 ج.م" }
];

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange, className }) => {
  const categories = getCategories();
  const brands = getBrands();
  const colors = getColors();
  
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    colors: [],
    priceRange: [0, 100000],
    inStock: false,
  });

  const handleCategoryChange = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
      
    const newFilters = { ...filters, categories: newCategories };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleBrandChange = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
      
    const newFilters = { ...filters, brands: newBrands };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleColorChange = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color];
      
    const newFilters = { ...filters, colors: newColors };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    const newFilters = { ...filters, priceRange: [min, max] as [number, number] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleInStockChange = () => {
    const newFilters = { ...filters, inStock: !filters.inStock };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const resetState: FilterState = {
      categories: [],
      brands: [],
      colors: [],
      priceRange: [0, 100000],
      inStock: false,
    };
    setFilters(resetState);
    onFilterChange(resetState);
  };

  return (
    <div className={`bg-techTheme-muted p-5 rounded-lg ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">الفلاتر</h3>
        <button
          onClick={resetFilters}
          className="text-sm text-techTheme-primary hover:underline"
        >
          إعادة ضبط
        </button>
      </div>

      {/* Categories Filter */}
      <div className="mb-6">
        <h4 className="font-bold mb-3">الفئات</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="sr-only peer"
              />
              <span className="w-4 h-4 border border-gray-500 rounded mr-2 peer-checked:bg-techTheme-primary peer-checked:border-techTheme-primary flex-shrink-0"></span>
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brands Filter */}
      <div className="mb-6">
        <h4 className="font-bold mb-3">العلامات التجارية</h4>
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="sr-only peer"
              />
              <span className="w-4 h-4 border border-gray-500 rounded mr-2 peer-checked:bg-techTheme-primary peer-checked:border-techTheme-primary flex-shrink-0"></span>
              <span className="text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h4 className="font-bold mb-3">نطاق السعر</h4>
        <div className="space-y-2">
          {priceRanges.map((range, index) => (
            <label key={index} className="flex items-center cursor-pointer">
              <input
                type="radio"
                checked={filters.priceRange[0] === range.min && filters.priceRange[1] === range.max}
                onChange={() => handlePriceRangeChange(range.min, range.max)}
                name="priceRange"
                className="sr-only peer"
              />
              <span className="w-4 h-4 border border-gray-500 rounded-full mr-2 peer-checked:border-2 peer-checked:border-techTheme-primary flex-shrink-0"></span>
              <span className="text-sm">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Colors Filter */}
      <div className="mb-6">
        <h4 className="font-bold mb-3">الألوان</h4>
        <div className="flex flex-wrap gap-2">
          {colors.map(color => (
            <div 
              key={color} 
              onClick={() => handleColorChange(color)}
              className={`w-6 h-6 rounded-full cursor-pointer border ${
                filters.colors.includes(color) ? "border-2 border-techTheme-primary" : "border-gray-500"
              }`}
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
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={handleInStockChange}
            className="sr-only peer"
          />
          <span className="w-4 h-4 border border-gray-500 rounded mr-2 peer-checked:bg-techTheme-primary peer-checked:border-techTheme-primary flex-shrink-0"></span>
          <span className="text-sm">متوفر فقط</span>
        </label>
      </div>
    </div>
  );
};

export default ProductFilter;
