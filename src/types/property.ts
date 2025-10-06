
export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  type: PropertyType;
  beds: number;
  baths: number;
  area: number;
  amenities: string[];
  images: string[];
  isFavorite: boolean;
  featured: boolean;
  host: {
    name: string;
    avatar: string;
    isVerified: boolean;
  };
  availability: {
    startDate: Date;
    endDate: Date;
    minimumStay: number;
  };
  instantBook: boolean;
}

export type PropertyType = 'apartment' | 'villa' | 'chalet' | 'country-house' | 'hotel-apartment';

export interface SearchFilters {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  priceRange: [number, number];
  propertyType: PropertyType | '';
  amenities: string[];
}

export interface BookingData {
  propertyId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  serviceFee: number;
  taxes: number;
}
