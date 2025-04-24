
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-techTheme-muted py-10 mt-20">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-techTheme-primary mb-4">تك عرب</h3>
            <p className="text-gray-300 mb-4">
              نحن متجرك الموثوق للالكترونيات والإكسسوارات بأفضل الأسعار وأعلى جودة.
            </p>
            <p className="text-gray-300">
              © {year} تك عرب. جميع الحقوق محفوظة
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-techTheme-primary mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-techTheme-primary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-techTheme-primary transition-colors">
                  المتجر
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-techTheme-primary transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-techTheme-primary transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-techTheme-primary mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">العنوان:</span>
                <span className="block text-sm">شارع التحرير، القاهرة، مصر</span>
              </li>
              <li className="text-gray-300">
                <span className="block">البريد الإلكتروني:</span>
                <a 
                  href="mailto:info@tech-arab.com" 
                  className="text-sm hover:text-techTheme-primary transition-colors"
                >
                  info@tech-arab.com
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block">الهاتف:</span>
                <a 
                  href="tel:+201234567890" 
                  className="text-sm hover:text-techTheme-primary transition-colors"
                >
                  +20 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
