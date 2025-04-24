
import { Product } from "../context/CartContext";

const products: Product[] = [
  {
    id: 1,
    name: "لابتوب آسوس روج ستريكس G15",
    category: "لابتوب",
    brand: "ASUS",
    colors: ["أسود", "أحمر"],
    price: 25990,
    discountPrice: 24500,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWluZyUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    additionalImages: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWluZyUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ],
    specs: "AMD Ryzen 9 5900HX، RTX 3070، 16GB RAM، 1TB SSD، شاشة 15.6 بوصة 300Hz",
    description: "لابتوب مثالي للألعاب مع أداء استثنائي وتبريد متميز، مع شاشة عالية التحديث ولوحة مفاتيح RGB.",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "سماعة ريزر كراكن",
    category: "إكسسوارات",
    brand: "Razer",
    colors: ["أسود", "أخضر"],
    price: 1200,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    additionalImages: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    ],
    specs: "صوت محيطي 7.1، ميكروفون قابل للطي، راحة فائقة لفترات الاستخدام الطويلة",
    description: "سماعة ألعاب احترافية مع صوت محيطي مذهل وميكروفون عالي الجودة لتجربة لعب استثنائية.",
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "ماك بوك برو M2",
    category: "لابتوب",
    brand: "Apple",
    colors: ["فضي", "رمادي"],
    price: 35990,
    discountPrice: 34500,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    additionalImages: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    ],
    specs: "Apple M2، 16GB RAM، 512GB SSD، شاشة 14 بوصة Retina",
    description: "لابتوب احترافي فائق الأداء مع شريحة M2 المتطورة، عمر بطارية طويل وشاشة Retina عالية الدقة.",
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "لوحة مفاتيح لوجيتك G915",
    category: "إكسسوارات",
    brand: "Logitech",
    colors: ["أسود"],
    price: 2500,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZyUyMGtleWJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    specs: "ميكانيكية لاسلكية، إضاءة RGB، مفاتيح منخفضة",
    description: "لوحة مفاتيح ميكانيكية لاسلكية احترافية مع إضاءة RGB قابلة للتخصيص وتصميم رفيع وأنيق.",
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "كمبيوتر مكتبي للألعاب",
    category: "كمبيوتر",
    brand: "Custom",
    colors: ["أسود", "أبيض"],
    price: 18990,
    discountPrice: 17500,
    image: "https://images.unsplash.com/photo-1593640408182-31c2bd3f87d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMHBjfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    specs: "AMD Ryzen 7 5800X، RTX 3080، 32GB RAM، 2TB NVMe SSD، تبريد مائي",
    description: "كمبيوتر مكتبي قوي للألعاب مع مكونات عالية الأداء وإضاءة RGB مخصصة ونظام تبريد متطور.",
    inStock: true
  },
  {
    id: 6,
    name: "فأرة ريزر ديث أدر V2",
    category: "إكسسوارات",
    brand: "Razer",
    colors: ["أسود"],
    price: 990,
    image: "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWluZyUyMG1vdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    specs: "مستشعر بصري 20000DPI، 8 أزرار قابلة للبرمجة، إضاءة RGB",
    description: "فأرة ألعاب احترافية مع مستشعر عالي الدقة وتصميم مريح للاستخدام المطول وأزرار قابلة للتخصيص.",
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: "شاشة إل جي أولترا جير",
    category: "شاشات",
    brand: "LG",
    colors: ["أسود"],
    price: 7990,
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    specs: "27 بوصة، 4K، IPS، 144Hz، 1ms، G-Sync",
    description: "شاشة ألعاب فائقة الجودة مع ألوان دقيقة وتردد تحديث عالي ودعم لتقنيات المزامنة المتقدمة.",
    inStock: false
  },
  {
    id: 8,
    name: "سماعة آبل إيربودز برو",
    category: "إكسسوارات",
    brand: "Apple",
    colors: ["أبيض"],
    price: 4500,
    discountPrice: 3990,
    image: "https://images.unsplash.com/photo-1588156979401-db3aacbfa12c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWlycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    specs: "إلغاء الضوضاء النشط، وضع الشفافية، مقاومة للماء والعرق",
    description: "سماعات لاسلكية ممتازة مع تقنية إلغاء الضوضاء وجودة صوت استثنائية ومدة بطارية طويلة.",
    inStock: true,
    featured: true
  },
  {
    id: 9,
    name: "هارد اس اس دي سامسونج 970 إيفو",
    category: "إكسسوارات",
    brand: "Samsung",
    colors: ["أسود"],
    price: 1500,
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3NkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    specs: "1TB، NVMe، سرعة قراءة 3500MB/s، سرعة كتابة 3300MB/s",
    description: "قرص تخزين سريع للغاية يوفر أداءً استثنائيًا للألعاب والتطبيقات المتطلبة مع موثوقية عالية.",
    inStock: true
  },
  {
    id: 10,
    name: "باور بانك أنكر",
    category: "إكسسوارات",
    brand: "Anker",
    colors: ["أسود", "أبيض"],
    price: 850,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG93ZXJiYW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    specs: "20000mAh، شحن سريع، منفذين USB، شحن لاسلكي",
    description: "بطارية خارجية عالية السعة مع دعم للشحن السريع وإمكانية شحن عدة أجهزة في وقت واحد.",
    inStock: true
  },
  {
    id: 11,
    name: "كيبل USB-C إلى Lightning",
    category: "إكسسوارات",
    brand: "Anker",
    colors: ["أسود", "أبيض"],
    price: 199,
    image: "https://images.unsplash.com/photo-1619816284075-e261651346b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNiJTIwY2FibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    specs: "طول 2 متر، شحن سريع، نايلون مضفر",
    description: "كيبل متين عالي الجودة لشحن أجهزة آبل بسرعة عالية مع عمر افتراضي طويل.",
    inStock: true
  },
  {
    id: 12,
    name: "سبيكر بلوتوث JBL Flip 5",
    category: "إكسسوارات",
    brand: "JBL",
    colors: ["أسود", "أزرق", "أحمر"],
    price: 1990,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    specs: "مقاوم للماء، بطارية تدوم 12 ساعة، صوت استيريو",
    description: "مكبر صوت محمول مقاوم للماء مع صوت قوي وجودة عالية وإمكانية ربط عدة سماعات معًا.",
    inStock: true
  }
];

export default products;

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product, count: number = 4): Product[] => {
  return products
    .filter(p => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, count);
};

export const getFeaturedProducts = (count: number = 6): Product[] => {
  return products.filter(p => p.featured).slice(0, count);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductsByBrand = (brand: string): Product[] => {
  return products.filter(p => p.brand === brand);
};

export const getCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))];
};

export const getBrands = (): string[] => {
  return [...new Set(products.map(product => product.brand))];
};

export const getColors = (): string[] => {
  const allColors = products.flatMap(product => product.colors);
  return [...new Set(allColors)];
};
