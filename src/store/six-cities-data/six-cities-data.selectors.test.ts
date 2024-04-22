import { NameSpace } from '../../const';
import { makeFakeComments, makeFakeOffer, makeFakeOfferId } from '../../utils/mocks';
import { getComments, getErrorStatus, getFavoriteOffers, getNearbyOffer, getOffer, getOffers, getOffersDataLoadingStatus } from './selectors';

describe('GameData selectors', () => {
  const mockOffer = makeFakeOffer();
  const mockOfferId = makeFakeOfferId();
  const mockComments = makeFakeComments();
  const state = {
    [NameSpace.Data]: {
      offers: [mockOffer],
      offer: mockOfferId,
      nearbyOffer: [mockOffer],
      favoriteOffer: [mockOffer],
      comments: [mockComments],
      isOffersDataLoading: true,
      hasError: false,
    }
  };

  it('should return offers from state', () => {
    const { offers } = state[NameSpace.Data];
    const result = getOffers(state);
    expect(result).toEqual(offers);
  });

  it('should return offer from state', () => {
    const { offer } = state[NameSpace.Data];
    const result = getOffer(state);
    expect(result).toEqual(offer);
  });

  it('should return nearby offer from state', () => {
    const { nearbyOffer } = state[NameSpace.Data];
    const result = getNearbyOffer(state);
    expect(result).toEqual(nearbyOffer);
  });

  it('should return comments from state', () => {
    const { comments } = state[NameSpace.Data];
    const result = getComments(state);
    expect(result).toEqual(comments);
  });

  it('should return favorite offer from state', () => {
    const { favoriteOffer } = state[NameSpace.Data];
    const result = getFavoriteOffers(state);
    expect(result).toEqual(favoriteOffer);
  });

  it('should return offers data loading status', () => {
    const { isOffersDataLoading } = state[NameSpace.Data];
    const result = getOffersDataLoadingStatus(state);
    expect(result).toBe(isOffersDataLoading);
  });

  it('should return error status from state', () => {
    const { hasError } = state[NameSpace.Data];
    const result = getErrorStatus(state);
    expect(result).toBe(hasError);
  });
});
