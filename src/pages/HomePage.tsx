
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getFeaturedProducts } from "../data/products";

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts(6);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[80vh] bg-gradient-to-r from-techTheme-background to-techTheme-muted overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3" 
            alt="خلفية" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom mx-auto relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight animate-fade-in">
              أفضل <span className="text-techTheme-primary">الإلكترونيات</span> والإكسسوارات بأسعار تنافسية
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              اكتشف تشكيلتنا الواسعة من اللابتوبات وأجهزة الكمبيوتر والإكسسوارات من أفضل العلامات التجارية العالمية.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link 
                to="/shop" 
                className="btn-primary text-center px-8 py-3 text-lg"
              >
                تسوق الآن
              </Link>
              <Link 
                to="/about" 
                className="border border-techTheme-primary text-techTheme-primary hover:bg-techTheme-primary hover:text-white transition-colors px-8 py-3 rounded-md text-lg text-center"
              >
                اعرف المزيد
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-techTheme-muted/30">
        <div className="container-custom mx-auto">
          <h2 className="section-title text-center mb-12">تسوق حسب الفئة</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Link to="/shop?category=لابتوب" className="relative rounded-lg overflow-hidden group aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3" 
                alt="لابتوب" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 right-0 p-4 z-20">
                <h3 className="text-xl font-bold text-white">لابتوب</h3>
              </div>
            </Link>
            
            <Link to="/shop?category=كمبيوتر" className="relative rounded-lg overflow-hidden group aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1593640408182-31c2bd3f87d0?ixlib=rb-4.0.3" 
                alt="كمبيوتر" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 right-0 p-4 z-20">
                <h3 className="text-xl font-bold text-white">كمبيوتر</h3>
              </div>
            </Link>
            
            <Link to="/shop?category=إكسسوارات" className="relative rounded-lg overflow-hidden group aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3" 
                alt="إكسسوارات" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 right-0 p-4 z-20">
                <h3 className="text-xl font-bold text-white">إكسسوارات</h3>
              </div>
            </Link>
            
            <Link to="/shop?category=شاشات" className="relative rounded-lg overflow-hidden group aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-4.0.3" 
                alt="شاشات" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 right-0 p-4 z-20">
                <h3 className="text-xl font-bold text-white">شاشات</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container-custom mx-auto">
          <h2 className="section-title text-center mb-12">منتجات مميزة</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <div key={product.id} className="animate-scale-in">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/shop" className="btn-secondary inline-block px-8 py-3">
              عرض جميع المنتجات
            </Link>
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="py-16 bg-techTheme-muted/30">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden group h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-techTheme-primary/80 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3" 
                alt="إكسسوارات الألعاب" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-0 right-0 p-8 z-20 max-w-xs">
                <h3 className="text-2xl font-bold text-white mb-2">خصم 15% على إكسسوارات الألعاب</h3>
                <p className="text-white/80 mb-4">استمتع بخصم 15% على جميع إكسسوارات الألعاب لفترة محدودة</p>
                <Link to="/shop" className="btn-primary inline-block">
                  تسوق الآن
                </Link>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden group h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-techTheme-secondary/80 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3" 
                alt="لابتوبات الألعاب" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-0 right-0 p-8 z-20 max-w-xs">
                <h3 className="text-2xl font-bold text-white mb-2">لابتوبات الألعاب الجديدة</h3>
                <p className="text-white/80 mb-4">اكتشف أحدث لابتوبات الألعاب بمواصفات قوية ومتطورة</p>
                <Link to="/shop" className="btn-secondary inline-block">
                  اكتشف الآن
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16">
        <div className="container-custom mx-auto">
          <h2 className="section-title text-center mb-12">علامات تجارية مميزة</h2>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="w-24 h-24 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-bold text-gray-300">Apple</span>
            </div>
            <div className="w-24 h-24 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-bold text-gray-300">ASUS</span>
            </div>
            <div className="w-24 h-24 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-bold text-gray-300">Dell</span>
            </div>
            <div className="w-24 h-24 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-bold text-gray-300">Razer</span>
            </div>
            <div className="w-24 h-24 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-bold text-gray-300">Logitech</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
