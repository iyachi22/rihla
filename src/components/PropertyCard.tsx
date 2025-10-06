
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Property } from '@/types/property';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User, User as UsersIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { t, isRTL } = useLanguage();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-scale-in">
      <div className="relative">
        <img
          src={property.images[0] || '/placeholder.svg'}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        {property.featured && (
          <div className="absolute top-3 left-3 rtl:right-3 rtl:left-auto bg-accent text-white px-2 py-1 rounded-md text-xs font-medium">
            مميز
          </div>
        )}
        <div className="absolute top-3 right-3 rtl:left-3 rtl:right-auto">
          <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
            ♡
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
            {property.title}
          </h3>
          <div className="flex items-center text-sm text-gray-600">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{property.rating}</span>
            <span className="mx-1">({property.reviews})</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-2">{property.location}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <span>{property.beds} {t('bedrooms')}</span>
            <span>{property.baths} {t('bathrooms')}</span>
            <span>{property.area} {t('sqm')}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              {property.price.toLocaleString()} دج
            </span>
            <span className="text-gray-500 text-sm"> / {t('perNight')}</span>
          </div>
          
          <Link to={`/property/${property.id}`}>
            <Button size="sm" className="bg-primary hover:bg-blue-600">
              {t('details')}
            </Button>
          </Link>
        </div>
        
        <div className="flex items-center justify-between mt-3 pt-3 border-t">
          <div className="flex items-center">
            <img
              src={property.host.avatar || '/placeholder.svg'}
              alt={property.host.name}
              className="w-6 h-6 rounded-full mr-2 rtl:ml-2 rtl:mr-0"
            />
            <span className="text-sm text-gray-600">{property.host.name}</span>
            {property.host.isVerified && (
              <span className="text-green-500 text-xs mr-1 rtl:ml-1 rtl:mr-0">✓</span>
            )}
          </div>
          
          {property.instantBook && (
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
              {t('instantBook')}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
