
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, MapPin, Star, CheckCircle, Heart } from 'lucide-react';

const About = () => {
  const { t, isRTL } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: 'الأمان والثقة',
      description: 'نضمن أمان جميع المعاملات وحماية بيانات المستخدمين بأعلى معايير الحماية',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Users,
      title: 'خدمة العملاء',
      description: 'فريق دعم متخصص متاح على مدار الساعة لمساعدة جميع المستخدمين',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Star,
      title: 'الجودة والتميز',
      description: 'نسعى دائماً لتقديم أفضل الخدمات وأعلى معايير الجودة في كل تفاصيل عملنا',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    }
  ];

  const stats = [
    { number: '500+', label: 'عقار متاح' },
    { number: '1000+', label: 'عميل راضٍ' },
    { number: '50+', label: 'مدينة مغطاة' },
    { number: '99%', label: 'معدل الرضا' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            من نحن
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            نحن فريق شغوف بتطوير الحلول التقنية التي تسهل حياة الناس وتربط بين المجتمعات
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">رسالتنا</h2>
              <p className="text-lg text-gray-600 mb-6">
                تأسست منصة فتح بهدف تسهيل عملية تأجير العقارات قصيرة المدى في الجزائر، وربط المؤجرين والمستأجرين في بيئة آمنة وموثوقة. نؤمن بأن كل شخص يستحق تجربة إقامة مميزة ومريحة.
              </p>
              <p className="text-lg text-gray-600">
                نسعى لأن نكون الخيار الأول للأشخاص الذين يبحثون عن أماكن إقامة مؤقتة، سواء كانوا مسافرين للعمل أو السياحة أو لأي غرض آخر. كما نهدف إلى مساعدة أصحاب العقارات على تحقيق دخل إضافي من خلال تأجير عقاراتهم بطريقة آمنة ومربحة.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg p-8 text-white">
              <Heart className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
              <p className="text-lg">
                أن نصبح المنصة الرائدة في الجزائر لتأجير العقارات قصيرة المدى، ونساهم في تطوير قطاع السياحة المحلية وخلق فرص اقتصادية جديدة للمجتمع.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">قيمنا</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نؤمن بمجموعة من القيم الأساسية التي توجه عملنا وتشكل أساس تفاعلنا مع عملائنا وشركائنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${value.bgColor} ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">إنجازاتنا</h2>
            <p className="text-lg text-gray-600">أرقام تعكس ثقة عملائنا ونجاح منصتنا</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">فريقنا</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              فريق متنوع من الخبراء والمتخصصين يعملون بشغف لتقديم أفضل الخدمات
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-12 text-center text-white">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">نحن نبني المستقبل معاً</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              فريقنا يضم مطورين ومصممين ومتخصصين في خدمة العملاء، جميعهم يشتركون في رؤية واحدة: جعل تجربة تأجير العقارات أسهل وأكثر أماناً للجميع. نحن ملتزمون بالابتكار المستمر وتطوير حلول تلبي احتياجات السوق المحلي.
            </p>
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
                <span className="text-2xl font-bold">فتح</span>
              </div>
              <p className="text-gray-400">
                منصة فتح الرائدة لتأجير أماكن الإقامة في الجزائر
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
            <p>&copy; 2024 فتح. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
