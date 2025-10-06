
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SearchFilters, PropertyType } from '@/types/property';
import { sampleProperties } from '@/data/sampleProperties';
import Header from '@/components/Header';
import SearchForm from '@/components/SearchForm';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Rentals = () => {
  const { t, isRTL } = useLanguage();
  const [properties, setProperties] = useState(sampleProperties);
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    checkIn: null,
    checkOut: null,
    guests: 1,
    priceRange: [0, 50000],
    propertyType: '',
    amenities: []
  });
  const [sortBy, setSortBy] = useState('featured');

  const handleSearch = (newFilters: SearchFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters: SearchFilters) => {
    let filtered = sampleProperties;
    
    if (currentFilters.location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(currentFilters.location.toLowerCase()) ||
        property.title.toLowerCase().includes(currentFilters.location.toLowerCase())
      );
    }
    
    if (currentFilters.propertyType) {
      filtered = filtered.filter(property => property.type === currentFilters.propertyType);
    }
    
    filtered = filtered.filter(property => 
      property.price >= currentFilters.priceRange[0] && property.price <= currentFilters.priceRange[1]
    );
    
    if (currentFilters.amenities.length > 0) {
      filtered = filtered.filter(property =>
        currentFilters.amenities.every(amenity => property.amenities.includes(amenity))
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setProperties(filtered);
  };

  const handlePriceRangeChange = (newRange: number[]) => {
    const newFilters = { ...filters, priceRange: [newRange[0], newRange[1]] as [number, number] };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handlePropertyTypeChange = (type: PropertyType | '') => {
    const newFilters = { ...filters, propertyType: type };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    let newAmenities = [...filters.amenities];
    if (checked) {
      newAmenities.push(amenity);
    } else {
      newAmenities = newAmenities.filter(a => a !== amenity);
    }
    const newFilters = { ...filters, amenities: newAmenities };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const amenitiesList = [
    { key: 'wifi', label: t('wifi') },
    { key: 'airConditioning', label: t('airConditioning') },
    { key: 'parking', label: t('parking') },
    { key: 'pool', label: t('pool') },
    { key: 'kitchen', label: t('kitchen') },
    { key: 'tv', label: t('tv') }
  ];

  const propertyTypes = [
    { key: 'all', label: 'جميع الأنواع' },
    { key: 'apartment', label: t('apartments') },
    { key: 'villa', label: t('villas') },
    { key: 'chalet', label: t('chalets') },
    { key: 'country-house', label: t('countryHouses') },
    { key: 'hotel-apartment', label: t('hotelApartments') }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Search Bar */}
      <section className="bg-white border-b py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchForm onSearch={handleSearch} />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-6">تصفية النتائج</h3>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">{t('price')}</h4>
                  <Slider
                    value={filters.priceRange}
                    onValueChange={handlePriceRangeChange}
                    max={50000}
                    min={0}
                    step={1000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{filters.priceRange[0].toLocaleString()} دج</span>
                    <span>{filters.priceRange[1].toLocaleString()} دج</span>
                  </div>
                </div>

                {/* Property Type */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">نوع العقار</h4>
                  <Select 
                    value={filters.propertyType || 'all'} 
                    onValueChange={(value) => handlePropertyTypeChange(value === 'all' ? '' : value as PropertyType)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="اختر نوع العقار" />
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

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">{t('amenities')}</h4>
                  <div className="space-y-3">
                    {amenitiesList.map(amenity => (
                      <div key={amenity.key} className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Checkbox
                          id={amenity.key}
                          checked={filters.amenities.includes(amenity.key)}
                          onCheckedChange={(checked) => handleAmenityChange(amenity.key, checked as boolean)}
                        />
                        <label htmlFor={amenity.key} className="text-sm text-gray-700 cursor-pointer">
                          {amenity.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    const resetFilters: SearchFilters = {
                      location: '',
                      checkIn: null,
                      checkOut: null,
                      guests: 1,
                      priceRange: [0, 50000],
                      propertyType: '',
                      amenities: []
                    };
                    setFilters(resetFilters);
                    applyFilters(resetFilters);
                  }}
                >
                  إعادة تعيين الفلاتر
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Properties List */}
          <div className="lg:col-span-3">
            {/* Sort and Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {properties.length} عقار متاح
              </p>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="featured">العقارات المميزة</SelectItem>
                  <SelectItem value="price-low">السعر: من الأقل للأعلى</SelectItem>
                  <SelectItem value="price-high">السعر: من الأعلى للأقل</SelectItem>
                  <SelectItem value="rating">الأعلى تقييماً</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Properties Grid */}
            {properties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {properties.map((property, index) => (
                  <div key={property.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <PropertyCard property={property} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.175-5.497-2.926L6.5 12 5 10.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">لا توجد عقارات متاحة</h3>
                <p className="text-gray-600">جرب تعديل معايير البحث للعثور على المزيد من الخيارات</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rentals;
