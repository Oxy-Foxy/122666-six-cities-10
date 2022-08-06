import { Offers } from '../types/offers';


const offers: Offers = [
  {
    id:1,
    isPremium: true,
    price: 120,
    isFavorite: false,
    rating: 4.8,
    title: 'Beautiful & luxurious apartment at great location',
    type:'studio',
    previewImage: 'img/apartment-01.jpg',
    maxAdults: 2,
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 12
      },
      name: 'Amsterdam'
    },
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 25,
      isPro: true,
      name: 'Angelina'
    },
    images: ['https://10.react.pages.academy/static/hotel/8.jpg',
      'https://10.react.pages.academy/static/hotel/6.jpg',
      'https://10.react.pages.academy/static/hotel/5.jpg',
      'https://10.react.pages.academy/static/hotel/14.jpg',
      'https://10.react.pages.academy/static/hotel/1.jpg',
      'https://10.react.pages.academy/static/hotel/4.jpg',
      'https://10.react.pages.academy/static/hotel/7.jpg',
      'https://10.react.pages.academy/static/hotel/12.jpg',
      'https://10.react.pages.academy/static/hotel/13.jpg',
      'https://10.react.pages.academy/static/hotel/10.jpg',
      'https://10.react.pages.academy/static/hotel/3.jpg',
      'https://10.react.pages.academy/static/hotel/20.jpg',
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/19.jpg'
    ],
    location: {
      latitude: 52.3600,
      longitude: 4.8852,
      zoom: 12
    },
  },
  {
    id:2,
    isPremium: false,
    price: 80,
    isFavorite: true,
    rating: 4,
    title: 'Wood and stone place',
    type:'private room',
    previewImage:'img/apartment-01.jpg',
    maxAdults: 2,
    bedrooms: 2,
    city: {
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
        zoom: 12
      },
      name: 'Cologne'
    },
    description: '',
    goods: ['good1', 'good2'],
    host: {
      avatarUrl: '',
      id: 1,
      isPro: true,
      name: ''
    },
    images: ['img/apartment-01.jpg'],
    location: {
      latitude: 50.9413,
      longitude: 6.9583,
      zoom: 12
    },
  },
  {
    id:3,
    isPremium: false,
    price: 132,
    isFavorite: true,
    rating: 4,
    title: 'Canal View Prinsengracht',
    type:'apartment',
    previewImage: 'img/apartment-02.jpg',
    maxAdults: 2,
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 12
      },
      name: 'Amsterdam'
    },
    description: '',
    goods: ['good1', 'good2'],
    host: {
      avatarUrl: '',
      id: 1,
      isPro: true,
      name: ''
    },
    images: ['img/apartment-01.jpg'],
    location: {
      latitude: 52.3584,
      longitude: 4.8811,
      zoom: 12
    },
  },
  {
    id:4,
    isPremium: true,
    price: 180,
    isFavorite: false,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type:'apartment',
    previewImage: 'img/apartment-03.jpg',
    maxAdults: 2,
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 12
      },
      name: 'Amsterdam'
    },
    description: '',
    goods: ['good1', 'good2'],
    host: {
      avatarUrl: '',
      id: 1,
      isPro: true,
      name: ''
    },
    images: ['img/apartment-01.jpg'],
    location: {
      latitude: 52.3752,
      longitude: 4.8840,
      zoom: 12
    },
  },
  {
    id:5,
    isPremium: true,
    price: 80,
    isFavorite: true,
    rating: 4,
    title: 'Wood and stone place',
    type:'private room',
    previewImage: 'img/room.jpg',
    maxAdults: 2,
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 12
      },
      name: 'Amsterdam'
    },
    description: '',
    goods: ['good1', 'good2'],
    host: {
      avatarUrl: '',
      id: 1,
      isPro: true,
      name: ''
    },
    images: ['img/apartment-01.jpg'],
    location: {
      latitude: 52.3580,
      longitude: 4.8686,
      zoom: 12
    },
  },
  {
    id:4,
    isPremium: true,
    price: 180,
    isFavorite: false,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type:'apartment',
    previewImage: 'img/apartment-03.jpg',
    maxAdults: 2,
    bedrooms: 2,
    city: {
      location: {
        latitude: 48.864716,
        longitude: 2.349014,
        zoom: 12
      },
      name: 'Paris'
    },
    description: '',
    goods: ['good1', 'good2'],
    host: {
      avatarUrl: '',
      id: 1,
      isPro: true,
      name: ''
    },
    images: ['img/apartment-01.jpg'],
    location: {
      latitude: 48.858093,
      longitude: 2.294694,
      zoom: 12
    },
  },
  {
    id:5,
    isPremium: true,
    price: 80,
    isFavorite: true,
    rating: 4,
    title: 'Wood and stone place',
    type:'private room',
    previewImage: 'img/room.jpg',
    maxAdults: 2,
    bedrooms: 2,
    city: {
      location: {
        latitude: 50.85045,
        longitude: 4.34878,
        zoom: 12
      },
      name: 'Brussels'
    },
    description: '',
    goods: ['good1', 'good2'],
    host: {
      avatarUrl: '',
      id: 1,
      isPro: true,
      name: ''
    },
    images: ['img/apartment-01.jpg'],
    location: {
      latitude: 50.8468,
      longitude: 4.3524,
      zoom: 12
    },
  },
  {
    id:5,
    isPremium: true,
    price: 80,
    isFavorite: true,
    rating: 4,
    title: 'Wood and stone place',
    type:'private room',
    previewImage: 'img/room.jpg',
    maxAdults: 2,
    bedrooms: 2,
    city: {
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 12
      },
      name: 'Hamburg'
    },
    description: '',
    goods: ['good1', 'good2'],
    host: {
      avatarUrl: '',
      id: 1,
      isPro: true,
      name: ''
    },
    images: ['img/apartment-01.jpg'],
    location: {
      latitude: 53.5450,
      longitude: 9.9968,
      zoom: 12
    },
  },
  {
    id:5,
    isPremium: true,
    price: 80,
    isFavorite: true,
    rating: 4,
    title: 'Wood and stone place',
    type:'private room',
    previewImage: 'img/room.jpg',
    maxAdults: 2,
    bedrooms: 2,
    city: {
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 12
      },
      name: 'Dusseldorf'
    },
    description: '',
    goods: ['good1', 'good2'],
    host: {
      avatarUrl: '',
      id: 1,
      isPro: true,
      name: ''
    },
    images: ['img/apartment-01.jpg'],
    location: {
      latitude: 51.2179,
      longitude: 6.7617,
      zoom: 12
    },
  },
];

export default offers;
