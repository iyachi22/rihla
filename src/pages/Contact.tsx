
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'العنوان',
      details: 'الجزائر العاصمة، الجزائر\nشارع الاستقلال، حي المركز',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Phone,
      title: 'الهاتف',
      details: '+213 552 95 70 47',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: 'moulaybouabdallah2004@gmail.com',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      details: 'الأحد - الخميس: 9:00 - 18:00\nالجمعة - السبت: 10:00 - 16:00',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            تواصل معنا
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            نحن هنا لمساعدتك! تواصل معنا في أي وقت وسنكون سعداء للإجابة على جميع استفساراتك
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${info.bgColor} ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line">{info.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  أرسل لنا رسالة
                </CardTitle>
                <p className="text-gray-600">
                  املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم الكامل
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="أدخل اسمك الكامل"
                        required
                        className={isRTL ? 'text-right' : ''}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        البريد الإلكتروني
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="أدخل بريدك الإلكتروني"
                        required
                        className={isRTL ? 'text-right' : ''}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        رقم الهاتف
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="أدخل رقم هاتفك"
                        className={isRTL ? 'text-right' : ''}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        موضوع الرسالة
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="أدخل موضوع رسالتك"
                        required
                        className={isRTL ? 'text-right' : ''}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الرسالة
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="اكتب رسالتك هنا..."
                      rows={6}
                      required
                      className={isRTL ? 'text-right' : ''}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    لماذا تختار رحلة؟
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">دعم على مدار الساعة</h4>
                      <p className="text-gray-600 text-sm">فريق الدعم متاح 24/7 لمساعدتك</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">استجابة سريعة</h4>
                      <p className="text-gray-600 text-sm">نرد على جميع الاستفسارات خلال 24 ساعة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">خدمة محلية</h4>
                      <p className="text-gray-600 text-sm">نفهم السوق المحلي ونقدم حلول مناسبة</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    الأسئلة الشائعة
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">كيف يمكنني إضافة عقاري؟</h4>
                    <p className="text-gray-600 text-sm">انقر على "أضف عقار" واتبع الخطوات البسيطة لنشر عقارك</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">هل المنصة آمنة؟</h4>
                    <p className="text-gray-600 text-sm">نعم، نستخدم أحدث تقنيات الأمان لحماية بياناتك ومعاملاتك</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">كم تبلغ العمولة؟</h4>
                    <p className="text-gray-600 text-sm">عمولتنا تنافسية وشفافة، تواصل معنا لمعرفة التفاصيل</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/uploads/827bcbc0-fa3f-47b7-b300-f95964d7a013.png" 
                  alt="رحلة" 
                  className="w-10 h-10 rounded-lg"
                />
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
                <p>البريد الإلكتروني: moulaybouabdallah2004@gmail.com</p>
                <p>الهاتف: +213 552 95 70 47</p>
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

export default Contact;
