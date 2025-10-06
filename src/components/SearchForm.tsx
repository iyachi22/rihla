
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, User, Calendar } from 'lucide-react';
import { SearchFilters } from '@/types/property';

interface SearchFormProps {
  onSearch: (filters: SearchFilters) => void;
  className?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, className = '' }) => {
  const { t, isRTL } = useLanguage();
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filters: SearchFilters = {
      location: searchData.location,
      checkIn: searchData.checkIn ? new Date(searchData.checkIn) : null,
      checkOut: searchData.checkOut ? new Date(searchData.checkOut) : null,
      guests: searchData.guests,
      priceRange: [0, 10000],
      propertyType: '',
      amenities: []
    };
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Location */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('location')}
          </label>
          <div className="relative">
            <Search className={`absolute top-3 w-5 h-5 text-gray-400 ${isRTL ? 'right-3' : 'left-3'}`} />
            <Input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchData.location}
              onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
              className={`${isRTL ? 'pr-10 text-right' : 'pl-10'} h-12`}
            />
          </div>
        </div>

        {/* Check-in */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('checkIn')}
          </label>
          <div className="relative">
            <Calendar className={`absolute top-3 w-5 h-5 text-gray-400 ${isRTL ? 'right-3' : 'left-3'}`} />
            <Input
              type="date"
              value={searchData.checkIn}
              onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
              className={`${isRTL ? 'pr-10 text-right' : 'pl-10'} h-12`}
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('checkOut')}
          </label>
          <div className="relative">
            <Calendar className={`absolute top-3 w-5 h-5 text-gray-400 ${isRTL ? 'right-3' : 'left-3'}`} />
            <Input
              type="date"
              value={searchData.checkOut}
              onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
              className={`${isRTL ? 'pr-10 text-right' : 'pl-10'} h-12`}
            />
          </div>
        </div>

        {/* Guests */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('guests')}
          </label>
          <div className="relative">
            <User className={`absolute top-3 w-5 h-5 text-gray-400 ${isRTL ? 'right-3' : 'left-3'}`} />
            <Input
              type="number"
              min="1"
              max="20"
              value={searchData.guests}
              onChange={(e) => setSearchData({ ...searchData, guests: parseInt(e.target.value) || 1 })}
              className={`${isRTL ? 'pr-10 text-right' : 'pl-10'} h-12`}
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-blue-600 hover:to-teal-600">
          <Search className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
          {t('searchButton')}
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
