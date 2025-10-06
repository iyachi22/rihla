
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    rentals: 'العقارات',
    addProperty: 'أضف عقار',
    login: 'تسجيل الدخول',
    signup: 'إنشاء حساب',
    dashboard: 'لوحة التحكم',
    
    // Hero Section
    heroTitle: 'اكتشف أفضل أماكن الإقامة في الجزائر',
    heroSubtitle: 'احجز شقتك أو فيلتك المثالية بكل سهولة وأمان',
    searchPlaceholder: 'ابحث عن وجهة، مدينة، أو اسم العقار',
    searchButton: 'البحث',
    
    // Property Types
    apartments: 'شقق',
    villas: 'فيلات',
    chalets: 'شاليهات',
    countryHouses: 'منازل ريفية',
    hotelApartments: 'شقق فندقية',
    
    // Common
    perNight: 'لليلة الواحدة',
    rating: 'التقييم',
    reviews: 'تقييم',
    book: 'احجز الآن',
    details: 'التفاصيل',
    amenities: 'المرافق',
    location: 'الموقع',
    price: 'السعر',
    guests: 'الضيوف',
    checkIn: 'تاريخ الوصول',
    checkOut: 'تاريخ المغادرة',
    
    // Amenities
    wifi: 'واي فاي مجاني',
    airConditioning: 'تكييف',
    parking: 'موقف سيارات',
    pool: 'مسبح',
    kitchen: 'مطبخ مجهز',
    tv: 'تلفزيون',
    heating: 'تدفئة',
    washingMachine: 'غسالة ملابس',
    privateEntrance: 'مدخل خاص',
    
    // How it works
    howItWorks: 'كيف يعمل فتح',
    step1Title: 'ابحث واختر',
    step1Description: 'ابحث عن العقار المثالي من بين آلاف الخيارات المتاحة',
    step2Title: 'احجز بأمان',
    step2Description: 'احجز عقارك بكل سهولة وأمان من خلال منصتنا الآمنة',
    step3Title: 'استمتع بإقامتك',
    step3Description: 'استمتع بتجربة إقامة مميزة مع أفضل الخدمات',
    
    // Features
    featuredProperties: 'العقارات المميزة',
    viewAll: 'عرض الكل',
    
    // Footer
    aboutUs: 'من نحن',
    contactUs: 'اتصل بنا',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
    
    // Property Details
    bedrooms: 'غرف النوم',
    bathrooms: 'دورات المياه',
    area: 'المساحة',
    sqm: 'متر مربع',
    host: 'المضيف',
    verified: 'موثق',
    instantBook: 'حجز فوري',
    
    // Booking
    totalPrice: 'السعر الإجمالي',
    serviceFee: 'رسوم الخدمة',
    taxes: 'الضرائب',
    total: 'الإجمالي'
  },
  en: {
    // Navigation
    home: 'Home',
    rentals: 'Rentals',
    addProperty: 'Add Property',
    login: 'Login',
    signup: 'Sign Up',
    dashboard: 'Dashboard',
    
    // Hero Section
    heroTitle: 'Discover the Best Accommodations in Algeria',
    heroSubtitle: 'Book your perfect apartment or villa with ease and security',
    searchPlaceholder: 'Search for destination, city, or property name',
    searchButton: 'Search',
    
    // Property Types
    apartments: 'Apartments',
    villas: 'Villas',
    chalets: 'Chalets',
    countryHouses: 'Country Houses',
    hotelApartments: 'Hotel Apartments',
    
    // Common
    perNight: 'per night',
    rating: 'Rating',
    reviews: 'reviews',
    book: 'Book Now',
    details: 'Details',
    amenities: 'Amenities',
    location: 'Location',
    price: 'Price',
    guests: 'Guests',
    checkIn: 'Check-in',
    checkOut: 'Check-out',
    
    // Amenities
    wifi: 'Free WiFi',
    airConditioning: 'Air Conditioning',
    parking: 'Parking',
    pool: 'Pool',
    kitchen: 'Equipped Kitchen',
    tv: 'Television',
    heating: 'Heating',
    washingMachine: 'Washing Machine',
    privateEntrance: 'Private Entrance',
    
    // How it works
    howItWorks: 'How Fath Works',
    step1Title: 'Search & Choose',
    step1Description: 'Find the perfect property from thousands of available options',
    step2Title: 'Book Safely',
    step2Description: 'Book your property easily and safely through our secure platform',
    step3Title: 'Enjoy Your Stay',
    step3Description: 'Enjoy a unique accommodation experience with the best services',
    
    // Features
    featuredProperties: 'Featured Properties',
    viewAll: 'View All',
    
    // Footer
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    
    // Property Details
    bedrooms: 'Bedrooms',
    bathrooms: 'Bathrooms',
    area: 'Area',
    sqm: 'sqm',
    host: 'Host',
    verified: 'Verified',
    instantBook: 'Instant Book',
    
    // Booking
    totalPrice: 'Total Price',
    serviceFee: 'Service Fee',
    taxes: 'Taxes',
    total: 'Total'
  },
  fr: {
    // Navigation
    home: 'Accueil',
    rentals: 'Locations',
    addProperty: 'Ajouter Propriété',
    login: 'Connexion',
    signup: 'S\'inscrire',
    dashboard: 'Tableau de bord',
    
    // Hero Section
    heroTitle: 'Découvrez les Meilleurs Hébergements en Algérie',
    heroSubtitle: 'Réservez votre appartement ou villa parfait en toute simplicité et sécurité',
    searchPlaceholder: 'Rechercher une destination, ville ou nom de propriété',
    searchButton: 'Rechercher',
    
    // Property Types
    apartments: 'Appartements',
    villas: 'Villas',
    chalets: 'Chalets',
    countryHouses: 'Maisons de Campagne',
    hotelApartments: 'Appartements Hôtel',
    
    // Common
    perNight: 'par nuit',
    rating: 'Note',
    reviews: 'avis',
    book: 'Réserver',
    details: 'Détails',
    amenities: 'Équipements',
    location: 'Localisation',
    price: 'Prix',
    guests: 'Invités',
    checkIn: 'Arrivée',
    checkOut: 'Départ',
    
    // Amenities
    wifi: 'WiFi Gratuit',
    airConditioning: 'Climatisation',
    parking: 'Parking',
    pool: 'Piscine',
    kitchen: 'Cuisine Équipée',
    tv: 'Télévision',
    heating: 'Chauffage',
    washingMachine: 'Machine à Laver',
    privateEntrance: 'Entrée Privée',
    
    // How it works
    howItWorks: 'Comment Fonctionne Fath',
    step1Title: 'Rechercher & Choisir',
    step1Description: 'Trouvez la propriété parfaite parmi des milliers d\'options disponibles',
    step2Title: 'Réserver en Sécurité',
    step2Description: 'Réservez votre propriété facilement et en sécurité via notre plateforme sécurisée',
    step3Title: 'Profitez de Votre Séjour',
    step3Description: 'Profitez d\'une expérience d\'hébergement unique avec les meilleurs services',
    
    // Features
    featuredProperties: 'Propriétés en Vedette',
    viewAll: 'Voir Tout',
    
    // Footer
    aboutUs: 'À Propos',
    contactUs: 'Contactez-nous',
    privacyPolicy: 'Politique de Confidentialité',
    termsOfService: 'Conditions de Service',
    
    // Property Details
    bedrooms: 'Chambres',
    bathrooms: 'Salles de Bain',
    area: 'Surface',
    sqm: 'm²',
    host: 'Hôte',
    verified: 'Vérifié',
    instantBook: 'Réservation Instantanée',
    
    // Booking
    totalPrice: 'Prix Total',
    serviceFee: 'Frais de Service',
    taxes: 'Taxes',
    total: 'Total'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('fath-language') as Language;
    if (savedLanguage && ['ar', 'en', 'fr'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('fath-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.className = language === 'ar' ? 'font-arabic' : 'font-latin';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};
