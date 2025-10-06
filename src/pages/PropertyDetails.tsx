
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { sampleProperties } from '@/data/sampleProperties';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calendar, User, CheckCircle, Star, Wifi, Car, Waves, Utensils, Tv, Wind } from 'lucide-react';

interface PricingCalculation {
  nights: number;
  basePrice: number;
  serviceFee: number;
  taxes: number;
  total: number;
}

const PropertyDetails = () => {
  const { id } = useParams();
  const { t, isRTL } = useLanguage();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  
  const property = sampleProperties.find(p => p.id === id);
  
  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900">العقار غير موجود</h1>
          <p className="text-gray-600 mt-2">العقار المطلوب غير متوفر أو تم حذفه</p>
        </div>
      </div>
    );
  }

  const amenityIcons: { [key: string]: React.ComponentType<any> } = {
    wifi: Wifi,
    airConditioning: Wind,
    parking: Car,
    pool: Waves,
    kitchen: Utensils,
    tv: Tv
  };

  const calculateTotalPrice = (): PricingCalculation | null => {
    if (!checkIn || !checkOut) return null;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    
    if (nights <= 0) return null;
    
    const basePrice = property.price * nights;
    const serviceFee = basePrice * 0.1;
    const taxes = basePrice * 0.05;
    return {
      nights,
      basePrice,
      serviceFee,
      taxes,
      total: basePrice + serviceFee + taxes
    };
  };

  const pricing = calculateTotalPrice();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span>{property.rating}</span>
                <span className="mr-1">({property.reviews} {t('reviews')})</span>
              </div>
              <span>•</span>
              <span>{property.location}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Button variant="ghost" size="sm">♡</Button>
              <Button variant="ghost" size="sm">↗</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="col-span-2 md:col-span-1">
                <img
                  src={property.images[0] || '/placeholder.svg'}
                  alt={property.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>
              <div className="hidden md:grid grid-cols-1 gap-4">
                {property.images.slice(1, 3).map((image, index) => (
                  <img
                    key={index}
                    src={image || '/placeholder.svg'}
                    alt={`${property.title} ${index + 2}`}
                    className="w-full h-44 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Property Info */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">
                  {property.type === 'villa' ? 'فيلا' : 
                   property.type === 'apartment' ? 'شقة' :
                   property.type === 'chalet' ? 'شاليه' :
                   property.type === 'country-house' ? 'منزل ريفي' : 'شقة فندقية'}
                  {' '}{property.beds} {t('bedrooms')} • {property.baths} {t('bathrooms')}
                </h2>
                <div className="flex items-center">
                  <img
                    src={property.host.avatar || '/placeholder.svg'}
                    alt={property.host.name}
                    className="w-10 h-10 rounded-full mr-3 rtl:ml-3 rtl:mr-0"
                  />
                  <div>
                    <p className="font-medium">{property.host.name}</p>
                    {property.host.isVerified && (
                      <p className="text-sm text-green-600 flex items-center">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {t('verified')}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 rtl:space-x-reverse text-gray-600 mb-6">
                <span>{property.beds} {t('bedrooms')}</span>
                <span>{property.baths} {t('bathrooms')}</span>
                <span>{property.area} {t('sqm')}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">عن هذا العقار</h3>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{t('amenities')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity) => {
                  const IconComponent = amenityIcons[amenity] || CheckCircle;
                  return (
                    <div key={amenity} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <IconComponent className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{t(amenity)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{property.price.toLocaleString()} دج</span>
                    <span className="text-gray-600 mr-2"> / {t('perNight')}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="font-medium">{property.rating}</span>
                    <span className="text-gray-600 mr-1">({property.reviews} {t('reviews')})</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('checkIn')}
                      </label>
                      <div className="relative">
                        <Calendar className={`absolute top-3 w-4 h-4 text-gray-400 ${isRTL ? 'right-3' : 'left-3'}`} />
                        <Input
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className={`${isRTL ? 'pr-10 text-right' : 'pl-10'}`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('checkOut')}
                      </label>
                      <div className="relative">
                        <Calendar className={`absolute top-3 w-4 h-4 text-gray-400 ${isRTL ? 'right-3' : 'left-3'}`} />
                        <Input
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className={`${isRTL ? 'pr-10 text-right' : 'pl-10'}`}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('guests')}
                    </label>
                    <div className="relative">
                      <User className={`absolute top-3 w-4 h-4 text-gray-400 ${isRTL ? 'right-3' : 'left-3'}`} />
                      <Input
                        type="number"
                        min="1"
                        max="20"
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                        className={`${isRTL ? 'pr-10 text-right' : 'pl-10'}`}
                      />
                    </div>
                  </div>
                </div>

                {pricing && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>{property.price.toLocaleString()} دج × {pricing.nights} ليالي</span>
                        <span>{pricing.basePrice.toLocaleString()} دج</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t('serviceFee')}</span>
                        <span>{pricing.serviceFee.toLocaleString()} دج</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t('taxes')}</span>
                        <span>{pricing.taxes.toLocaleString()} دج</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-semibold">
                        <span>{t('total')}</span>
                        <span>{pricing.total.toLocaleString()} دج</span>
                      </div>
                    </div>
                  </div>
                )}

                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-blue-600 hover:to-teal-600">
                  {property.instantBook ? 'احجز فوراً' : t('book')}
                </Button>

                <p className="text-center text-sm text-gray-600 mt-4">
                  لن يتم خصم أي مبلغ حتى الآن
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
