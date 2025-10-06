
import { Property } from '@/types/property';

export const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'فيلا فاخرة على البحر في الجزائر العاصمة',
    description: 'تتميز هذه الفيلا الرائعة بإطلالة بانورامية على البحر الأبيض المتوسط، وتوفر تجربة إقامة فريدة تجمع بين الرفاهية والخصوصية. تقع في حي راقٍ على بعد خطوات من الشاطئ، وتتميز بتصميم عصري وديكور أنيق.',
    location: 'الجزائر العاصمة، الجزائر',
    price: 25000,
    rating: 4.8,
    reviews: 42,
    type: 'villa',
    beds: 4,
    baths: 3,
    area: 280,
    amenities: ['wifi', 'airConditioning', 'parking', 'pool', 'kitchen', 'tv'],
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    isFavorite: false,
    featured: true,
    host: {
      name: 'أحمد بن محمد',
      avatar: '/placeholder.svg',
      isVerified: true
    },
    availability: {
      startDate: new Date(),
      endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      minimumStay: 2
    },
    instantBook: true
  },
  {
    id: '2',
    title: 'شقة عصرية في وسط مدينة وهران',
    description: 'شقة جميلة ومريحة في قلب مدينة وهران، تتميز بموقع استراتيجي قريب من جميع المرافق والخدمات. مجهزة بالكامل لضمان إقامة مريحة وممتعة.',
    location: 'وهران، الجزائر',
    price: 12000,
    rating: 4.6,
    reviews: 28,
    type: 'apartment',
    beds: 2,
    baths: 1,
    area: 85,
    amenities: ['wifi', 'airConditioning', 'parking', 'kitchen', 'tv'],
    images: ['/placeholder.svg', '/placeholder.svg'],
    isFavorite: true,
    featured: false,
    host: {
      name: 'فاطمة الزهراء',
      avatar: '/placeholder.svg',
      isVerified: true
    },
    availability: {
      startDate: new Date(),
      endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      minimumStay: 1
    },
    instantBook: false
  },
  {
    id: '3',
    title: 'شاليه جبلي في تيزي وزو',
    description: 'شاليه رائع في أحضان الطبيعة الخلابة لمنطقة تيزي وزو، مثالي للعائلات والأصدقاء الذين يبحثون عن الهدوء والاستجمام بعيداً عن صخب المدينة.',
    location: 'تيزي وزو، الجزائر',
    price: 18000,
    rating: 4.9,
    reviews: 15,
    type: 'chalet',
    beds: 3,
    baths: 2,
    area: 120,
    amenities: ['wifi', 'heating', 'parking', 'kitchen', 'tv', 'privateEntrance'],
    images: ['/placeholder.svg', '/placeholder.svg'],
    isFavorite: false,
    featured: true,
    host: {
      name: 'يوسف كريم',
      avatar: '/placeholder.svg',
      isVerified: true
    },
    availability: {
      startDate: new Date(),
      endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      minimumStay: 2
    },
    instantBook: true
  },
  {
    id: '4',
    title: 'منزل ريفي في باتنة',
    description: 'منزل ريفي تقليدي في منطقة باتنة، يوفر تجربة أصيلة للضيوف الذين يرغبون في اكتشاف الثقافة المحلية والاستمتاع بالضيافة الجزائرية الأصيلة.',
    location: 'باتنة، الجزائر',
    price: 8000,
    rating: 4.4,
    reviews: 22,
    type: 'country-house',
    beds: 3,
    baths: 2,
    area: 150,
    amenities: ['wifi', 'heating', 'parking', 'kitchen', 'tv', 'washingMachine'],
    images: ['/placeholder.svg'],
    isFavorite: false,
    featured: false,
    host: {
      name: 'محمد الطاهر',
      avatar: '/placeholder.svg',
      isVerified: false
    },
    availability: {
      startDate: new Date(),
      endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      minimumStay: 3
    },
    instantBook: false
  },
  {
    id: '5',
    title: 'شقة فندقية فاخرة في قسنطينة',
    description: 'شقة فندقية راقية في مدينة قسنطينة العريقة، تجمع بين الراحة الحديثة والطابع التاريخي للمدينة. موقع مثالي لاستكشاف معالم المدينة السياحية.',
    location: 'قسنطينة، الجزائر',
    price: 15000,
    rating: 4.7,
    reviews: 35,
    type: 'hotel-apartment',
    beds: 1,
    baths: 1,
    area: 60,
    amenities: ['wifi', 'airConditioning', 'tv', 'kitchen', 'washingMachine'],
    images: ['/placeholder.svg', '/placeholder.svg'],
    isFavorite: true,
    featured: false,
    host: {
      name: 'ليلى بن علي',
      avatar: '/placeholder.svg',
      isVerified: true
    },
    availability: {
      startDate: new Date(),
      endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      minimumStay: 1
    },
    instantBook: true
  },
  {
    id: '6',
    title: 'فيلا مع مسبح في عنابة',
    description: 'فيلا حديثة مع مسبح خاص في مدينة عنابة الساحلية، تتميز بتصميم معاصر ومرافق عصرية. مثالية للعطلات العائلية والمناسبات الخاصة.',
    location: 'عنابة، الجزائر',
    price: 30000,
    rating: 4.9,
    reviews: 18,
    type: 'villa',
    beds: 5,
    baths: 4,
    area: 320,
    amenities: ['wifi', 'airConditioning', 'parking', 'pool', 'kitchen', 'tv', 'washingMachine', 'privateEntrance'],
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    isFavorite: false,
    featured: true,
    host: {
      name: 'سمير حداد',
      avatar: '/placeholder.svg',
      isVerified: true
    },
    availability: {
      startDate: new Date(),
      endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      minimumStay: 3
    },
    instantBook: true
  }
];
