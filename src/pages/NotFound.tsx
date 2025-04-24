
import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="py-16 container-custom mx-auto">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-techTheme-primary">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">الصفحة غير موجودة</h2>
        <p className="text-gray-300 mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.
        </p>
        <Link
          to="/"
          className="btn-primary inline-block px-8 py-3"
        >
          العودة إلى الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
