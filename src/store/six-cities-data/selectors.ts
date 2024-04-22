import { NameSpace } from '../../const';
import { Comments, Offer, OfferId } from '../../types/offer';
import { State } from '../../types/state';

export const getOffers = (state: Pick<State, NameSpace.Data>): Offer[] => state[NameSpace.Data].offers;
export const getOffer = (state: Pick<State, NameSpace.Data>): OfferId | null => state[NameSpace.Data].offer;
export const getNearbyOffer = (state: Pick<State, NameSpace.Data>): Offer[] => state[NameSpace.Data].nearbyOffer;
export const getComments = (state: Pick<State, NameSpace.Data>): Comments[] => state[NameSpace.Data].comments;
export const getOffersDataLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getErrorStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].hasError;
export const getFavoriteOffers = (state: Pick<State, NameSpace.Data>): Offer[] => state[NameSpace.Data].favoriteOffer;
