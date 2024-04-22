import { Comments, Offer, OfferId } from '../types/offer';
import {lorem, datatype, image, address} from 'faker';

export const makeFakeOffer = (): Offer => ({
  id: datatype.string(),
  title: lorem.text(),
  type: lorem.word(),
  price: datatype.number(),
  city: {
    name: address.cityName(),
    location: {
      latitude: +address.latitude(),
      longitude: +address.longitude(),
      zoom: datatype.number(),
    }
  },
  location: {
    latitude: +address.latitude(),
    longitude: +address.longitude(),
    zoom: datatype.number(),
  },
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  rating: datatype.number(),
  previewImage: image.imageUrl(),
} as Offer);

export const makeFakeOfferId = (): OfferId => ({
  id: datatype.string(),
  title: lorem.text(),
  type: lorem.word(),
  price: datatype.number(),
  city: {
    name: address.cityName(),
    location: {
      latitude: +address.latitude(),
      longitude: +address.longitude(),
      zoom: datatype.number(),
    }
  },
  location: {
    latitude: +address.latitude(),
    longitude: +address.longitude(),
    zoom: datatype.number(),
  },
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  rating: datatype.number(),
  description: lorem.text(),
  bedrooms: datatype.number(),
  goods: [lorem.word()],
  host: {
    name: lorem.word(),
    avatarUrl: image.imageUrl(),
    isPro: datatype.boolean(),
  },
  images: [lorem.word()],
  maxAdults: datatype.number(),
} as OfferId);

export const makeFakeComments = (): Comments => ({
  id: datatype.string(),
  date: datatype.string(),
  user: {
    name: lorem.word(),
    avatarUrl: image.imageUrl(),
    isPro: datatype.boolean(),
  },
  comment: lorem.text(),
  rating: datatype.number(),
} as Comments);
