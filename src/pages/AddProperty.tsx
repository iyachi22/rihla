
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const AddProperty = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    price: '',
    type: '',
    beds: '',
    baths: '',
    area: '',
    amenities: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Property data:', formData);
    // Here you would typically send the data to your backend
  };

  const amenitiesList = [
    { key: 'wifi', label: t('wifi') },
    { key: 'airConditioning', label: t('airConditioning') },
    { key: 'parking', label: t('parking') },
    { key: 'pool', label: t('pool') },
    { key: 'kitchen', label: t('kitchen') },
    { key: 'tv', label: t('tv') },
    { key: 'heating', label: t('heating') },
    { key: 'washingMachine', label: t('washingMachine') },
    { key: 'privateEntrance', label: t('privateEntrance') }
  ];

  const propertyTypes = [
    { key: 'apartment', label: t('apartments') },
    { key: 'villa', label: t('villas') },
    { key: 'chalet', label: t('chalets') },
    { key: 'country-house', label: t('countryHouses') },
    { key: 'hotel-apartment', label: t('hotelApartments') }
  ];

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    let newAmenities = [...formData.amenities];
    if (checked) {
      newAmenities.push(amenity);
    } else {
      newAmenities = newAmenities.filter(a => a !== amenity);
    }
    setFormData({ ...formData, amenities: newAmenities });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('addProperty')}
          </h1>
          <p className="text-gray-600">
            أضف عقارك واربح دخلاً إضافياً من خلال تأجيره للضيوف
          </p>
        </div>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>تفاصيل العقار</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    عنوان العقار
                  </label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="مثال: فيلا فاخرة على البحر"
                    className={isRTL ? 'text-right' : ''}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('location')}
                  </label>
                  <Input
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="مثال: الجزائر العاصمة، الجزائر"
                    className={isRTL ? 'text-right' : ''}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  وصف العقار
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="اكتب وصفاً مفصلاً عن عقارك..."
                  rows={4}
                  className={isRTL ? 'text-right' : ''}
                  required
                />
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نوع العقار
                  </label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر النوع" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {propertyTypes.map(type => (
                        <SelectItem key={type.key} value={type.key}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('bedrooms')}
                  </label>
                  <Input
                    type="number"
                    min="1"
                    value={formData.beds}
                    onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                    placeholder="عدد الغرف"
                    className={isRTL ? 'text-right' : ''}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('bathrooms')}
                  </label>
                  <Input
                    type="number"
                    min="1"
                    value={formData.baths}
                    onChange={(e) => setFormData({ ...formData, baths: e.target.value })}
                    placeholder="عدد الحمامات"
                    className={isRTL ? 'text-right' : ''}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('area')} ({t('sqm')})
                  </label>
                  <Input
                    type="number"
                    min="1"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    placeholder="المساحة"
                    className={isRTL ? 'text-right' : ''}
                    required
                  />
                </div>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  السعر لليلة الواحدة (دج)
                </label>
                <Input
                  type="number"
                  min="1"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="مثال: 15000"
                  className={isRTL ? 'text-right' : ''}
                  required
                />
              </div>

              {/* Amenities */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  {t('amenities')}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenitiesList.map(amenity => (
                    <div key={amenity.key} className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Checkbox
                        id={amenity.key}
                        checked={formData.amenities.includes(amenity.key)}
                        onCheckedChange={(checked) => handleAmenityChange(amenity.key, checked as boolean)}
                      />
                      <label htmlFor={amenity.key} className="text-sm text-gray-700 cursor-pointer">
                        {amenity.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary hover:from-blue-600 hover:to-teal-600"
                >
                  إضافة العقار
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddProperty;
