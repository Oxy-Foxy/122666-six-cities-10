import { User } from './user';

type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}

export type City = {
  location: Location
  name: string
}

export type Offer = {
  id: number,
  isPremium: boolean,
  price: number,
  isFavorite: boolean,
  rating: number,
  title: string,
  type: string
  previewImage: string,
  maxAdults: number,
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: User,
  images: string[],
  location: Location,
}

export type Offers = Offer[];
