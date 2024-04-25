import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { AppThunkDispatch, extractActionsTypes, makeFakeComments, makeFakeOffer } from '../utils/mocks';
import { State } from '../types/state';
import { checkAuthAction, fetchCommentsAction, fetchFavoriteOffersAction, fetchNearbyOfferAction, fetchOffersAction, loginAction, logoutAction } from './api-actions';
import { APIRoute } from '../const';
import { redirectToRoute } from './action';
import { AuthData } from '../types/auth-data';
import * as tokenStorage from '../services/token';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ DATA: { offers: [] }});
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200, 'email');

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async() => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('fetchOffersAction', () => {
    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.fulfilled", when server response 200', async() => {
      const mockOffer = [makeFakeOffer()];
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffer);

      await store.dispatch(fetchOffersAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload)
        .toEqual(mockOffer);
    });

    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

      await store.dispatch(fetchOffersAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.rejected.type,
      ]);
    });
  });

  describe('fetchFavoriteOffersAction', () => {
    it('should dispatch "fetchFavoriteOffersAction.pending", "fetchFavoriteOffersAction.fulfilled", when server response 200', async() => {
      const mockOffer = [makeFakeOffer()];
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockOffer);

      await store.dispatch(fetchFavoriteOffersAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoriteOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoriteOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteOffersAction.pending.type,
        fetchFavoriteOffersAction.fulfilled.type,
      ]);

      expect(fetchFavoriteOffersActionFulfilled.payload)
        .toEqual(mockOffer);
    });

    it('should dispatch "fetchFavoriteOffersAction.pending", "fetchFavoriteOffersAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(400, []);

      await store.dispatch(fetchFavoriteOffersAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoriteOffersAction.pending.type,
        fetchFavoriteOffersAction.rejected.type,
      ]);
    });
  });

  describe('fetchNearbyOfferAction', () => {
    it('should dispatch "fetchNearbyOfferAction.pending", "fetchNearbyOfferAction.fulfilled", when server response 200', async() => {
      const mockOffer = [makeFakeOffer()];
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/1/nearby`).reply(200, mockOffer);

      await store.dispatch(fetchNearbyOfferAction('1'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchNearbyOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchNearbyOfferAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchNearbyOfferAction.pending.type,
        fetchNearbyOfferAction.fulfilled.type,
      ]);

      expect(fetchNearbyOfferActionFulfilled.payload)
        .toEqual(mockOffer);
    });

    it('should dispatch "fetchNearbyOfferAction.pending", "fetchNearbyOfferAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/1/nearby`).reply(400, []);

      await store.dispatch(fetchNearbyOfferAction('1'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearbyOfferAction.pending.type,
        fetchNearbyOfferAction.rejected.type,
      ]);
    });
  });

  describe('fetchCommentsAction', () => {
    it('should dispatch "fetchCommentsAction.pending", "fetchCommentsAction.fulfilled", when server response 200', async() => {
      const mockComments = [makeFakeComments()];
      mockAxiosAdapter.onGet(`${APIRoute.Comments}1`).reply(200, mockComments);

      await store.dispatch(fetchCommentsAction('1'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchCommentsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCommentsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchCommentsAction.pending.type,
        fetchCommentsAction.fulfilled.type,
      ]);

      expect(fetchCommentsActionFulfilled.payload)
        .toEqual(mockComments);
    });

    it('should dispatch "fetchCommentsAction.pending", "fetchCommentsAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Comments}1`).reply(400, []);

      await store.dispatch(fetchCommentsAction('1'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchCommentsAction.pending.type,
        fetchCommentsAction.rejected.type,
      ]);
    });
  });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending", "redirectToRoute", "loginAction.fulfilled" when server response 200', async() => {
      const fakeUser: AuthData = { login: 'test@test.ru', password: '123456' };
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type,
      ]);
    });

    it('should call "saveToken" once with the received token', async () => {
      const fakeUser: AuthData = { login: 'test@test.ru', password: '123456' };
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeUser));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });

  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async() => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should one call "dropToken" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });
});
