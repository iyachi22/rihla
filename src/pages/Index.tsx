
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SearchFilters } from '@/types/property';
import { sampleProperties } from '@/data/sampleProperties';
import Header from '@/components/Header';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, User, Calendar, CheckCircle, Shield, Star, MapPin } from 'lucide-react';

const Index = () => {
  const { t, isRTL } = useLanguage();
  const [searchResults, setSearchResults] = useState(sampleProperties);

  const featuredProperties = sampleProperties.filter(property => property.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              {t('heroSubtitle')}
            </p>
            
            {/* More information about the service */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-white" />
                  <h3 className="text-lg font-semibold mb-2">حماية شاملة</h3>
                  <p className="text-sm opacity-90">نظام حماية متقدم يضمن أمان جميع المعاملات وحقوق الطرفين</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Star className="w-12 h-12 mx-auto mb-4 text-white" />
                  <h3 className="text-lg font-semibold mb-2">تقييمات موثقة</h3>
                  <p className="text-sm opacity-90">نظام تقييم شفاف يساعدك في اتخاذ القرار المناسب</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-white" />
                  <h3 className="text-lg font-semibold mb-2">تغطية شاملة</h3>
                  <p className="text-sm opacity-90">عقارات متنوعة في جميع أنحاء الجزائر مع خيارات متعددة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000"></div>
      </section>

      {/* About Service Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              منصة رحلة للإيجار قصير المدى
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              رحلة هي منصة رائدة تربط بين المؤجرين والمستأجرين في الجزائر، توفر تجربة آمنة وموثوقة لتأجير الشقق والفيلات والمنازل لفترات قصيرة. نحن نضمن الشفافية والأمان لجميع الأطراف من خلال نظام تقييم متقدم ودعم عملاء على مدار الساعة.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">500+</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">عقار متاح</h3>
              <p className="text-gray-600 text-sm">في جميع أنحاء الجزائر</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">1000+</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">عميل راضٍ</h3>
              <p className="text-gray-600 text-sm">تجربة إيجابية مؤكدة</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">24/7</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">دعم العملاء</h3>
              <p className="text-gray-600 text-sm">مساعدة على مدار الساعة</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">100%</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">أمان مضمون</h3>
              <p className="text-gray-600 text-sm">معاملات آمنة ومحمية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            أنواع العقارات
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { type: 'apartments', icon: '🏠', color: 'from-blue-500 to-blue-600' },
              { type: 'villas', icon: '🏖️', color: 'from-teal-500 to-teal-600' },
              { type: 'chalets', icon: '🏔️', color: 'from-green-500 to-green-600' },
              { type: 'countryHouses', icon: '🌳', color: 'from-amber-500 to-amber-600' },
              { type: 'hotelApartments', icon: '🏨', color: 'from-purple-500 to-purple-600' },
            ].map((item, index) => (
              <Card key={item.type} className="hover:shadow-lg transition-all duration-300 animate-scale-in cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{t(item.type)}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('howItWorks')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: t('step1Title'),
                description: t('step1Description'),
                icon: Search,
                color: 'text-blue-600',
                bgColor: 'bg-blue-100'
              },
              {
                step: '2',
                title: t('step2Title'),
                description: t('step2Description'),
                icon: Calendar,
                color: 'text-teal-600',
                bgColor: 'bg-teal-100'
              },
              {
                step: '3',
                title: t('step3Title'),
                description: t('step3Description'),
                icon: CheckCircle,
                color: 'text-green-600',
                bgColor: 'bg-green-100'
              }
            ].map((step, index) => (
              <div key={step.step} className="text-center animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className={`w-16 h-16 ${step.bgColor} ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {t('featuredProperties')}
            </h2>
            <Button variant="outline" size="lg">
              {t('viewAll')}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <div key={property.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-primary to-secondary text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
                  ف
                </div>
                <span className="text-2xl font-bold">رحلة</span>
              </div>
              <p className="text-gray-400">
                منصة رحلة الرائدة لتأجير أماكن الإقامة في الجزائر
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">روابط مهمة</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">{t('aboutUs')}</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">{t('contactUs')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('privacyPolicy')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('termsOfService')}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">خدماتنا</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('rentals')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('addProperty')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">دعم العملاء</a></li>
                <li><a href="#" className="hover:text-white transition-colors">شراكات</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">تواصل معنا</h3>
              <div className="space-y-2 text-gray-400">
                <p>البريد الإلكتروني: info@fath.dz</p>
                <p>الهاتف: +213 123 456 789</p>
                <p>العنوان: الجزائر العاصمة، الجزائر</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 رحلة. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
