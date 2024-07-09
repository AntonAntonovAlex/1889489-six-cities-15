import { makeFakeComments, makeFakeOffer, makeFakeOfferId } from '../../utils/mocks';
import { fetchAddNewCommentAction, fetchCommentsAction, fetchFavoriteOffersAction, fetchNearbyOfferAction, fetchOfferIdAction, fetchOffersAction } from '../api-actions';
import { sixCitiesData } from './six-cities-data';

describe('SixCitiesData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      offer: null,
      nearbyOffer: [],
      favoriteOffer: [],
      comments: [],
      isOffersDataLoading: false,
      hasError: false
    };

    const result = sixCitiesData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      offer: null,
      nearbyOffer: [],
      favoriteOffer: [],
      comments: [],
      isOffersDataLoading: false,
      hasError: false
    };

    const result = sixCitiesData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isOffersDataLoading" to "true", "hasError" to "false" with "fetchOffersAction.pending"', () => {
    const expectedState = {
      offers: [],
      offer: null,
      nearbyOffer: [],
      favoriteOffer: [],
      comments: [],
      isOffersDataLoading: true,
      hasError: false
    };

    const result = sixCitiesData.reducer(undefined, fetchOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array with offer, "isOffersDataLoading" to "false" with "fetchOffersAction.fulfilled"', () => {
    const mockOffers = makeFakeOffer();
    const expectedState = {
      offers: [mockOffers],
      offer: null,
      nearbyOffer: [],
      favoriteOffer: [],
      comments: [],
      isOffersDataLoading: false,
      hasError: false
    };

    const result = sixCitiesData.reducer(
      undefined,
      fetchOffersAction.fulfilled(
        [mockOffers], '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isOffersDataLoading" to "false", "hasError" to "true" with "fetchOffersAction.rejected', () => {
    const expectedState = {
      offers: [],
      offer: null,
      nearbyOffer: [],
      favoriteOffer: [],
      comments: [],
      isOffersDataLoading: false,
      hasError: true
    };

    const result = sixCitiesData.reducer(
      undefined,
      fetchOffersAction.rejected
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "OfferId" to array with OfferId, with "fetchOfferIdAction.fulfilled"', () => {
    const mockOfferId = makeFakeOfferId();
    const expectedState = {
      offers: [],
      offer: mockOfferId,
      nearbyOffer: [],
      favoriteOffer: [],
      comments: [],
      isOffersDataLoading: false,
      hasError: false
    };

    const result = sixCitiesData.reducer(
      undefined,
      fetchOfferIdAction.fulfilled(
        mockOfferId, '', '')
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "NearbyOffer" to array with NearbyOffer, with "fetchNearbyOfferAction.fulfilled"', () => {
    const mockOffers = makeFakeOffer();
    const expectedState = {
      offers: [],
      offer: null,
      nearbyOffer: [mockOffers],
      favoriteOffer: [],
      comments: [],
      isOffersDataLoading: false,
      hasError: false
    };

    const result = sixCitiesData.reducer(
      undefined,
      fetchNearbyOfferAction.fulfilled(
        [mockOffers], '', '')
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "comments" to array with comments, with "fetchCommentsAction.fulfilled"', () => {
    const mockComments = makeFakeComments();
    const expectedState = {
      offers: [],
      offer: null,
      nearbyOffer: [],
      favoriteOffer: [],
      comments: [mockComments],
      isOffersDataLoading: false,
      hasError: false
    };

    const result = sixCitiesData.reducer(
      undefined,
      fetchCommentsAction.fulfilled(
        [mockComments], '', '')
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "favoriteOffer" to array with favoriteOffer, with "fetchFavoriteOffersAction.fulfilled"', () => {
    const mockOffers = makeFakeOffer();
    const expectedState = {
      offers: [],
      offer: null,
      nearbyOffer: [],
      favoriteOffer: [mockOffers],
      comments: [],
      isOffersDataLoading: false,
      hasError: false
    };

    const result = sixCitiesData.reducer(
      undefined,
      fetchFavoriteOffersAction.fulfilled(
        [mockOffers], '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "comments" to array with comments, with "fetchAddNewCommentAction.fulfilled"', () => {
    const mockComments = makeFakeComments();
    const expectedState = {
      offers: [],
      offer: null,
      nearbyOffer: [],
      favoriteOffer: [],
      comments: [mockComments],
      isOffersDataLoading: false,
      hasError: false
    };

    const result = sixCitiesData.reducer(
      undefined,
      fetchAddNewCommentAction.fulfilled(
        [mockComments], '', {
          offerId: '',
          comment: '',
          rating: 5,
        })
    );

    expect(result).toEqual(expectedState);
  });

});
