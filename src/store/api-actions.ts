import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Comments, Offer, OfferId } from '../types/offer';
import { redirectToRoute } from './action';
import { APIRoute, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { CommentData } from '../types/comment-data';
import { CheckAuthData } from '../types/check-auth-data';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    //dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    //dispatch(setOffersDataLoadingStatus(false));
    //dispatch(loadOffers(data));
    return data;
  },
);

export const fetchOfferIdAction = createAsyncThunk<OfferId | undefined, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<OfferId>(`${APIRoute.Offers}/${id}`);
      //dispatch(loadOffer(data));
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFoundScreen));
    }
  },
);

export const fetchNearbyOfferAction = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
    //dispatch(loadNearbyOffer(data));
  },
);

export const fetchCommentsAction = createAsyncThunk<Comments[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Comments[]>(`${APIRoute.Comments}${offerId}`);
    return data;
    //dispatch(loadComments(data));
  },
);

export const fetchAddNewCommentAction = createAsyncThunk<Comments[], CommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchAddNewComment',
  async ({offerId, comment, rating}, {extra: api}) => {
    await api.post<UserData>(`${APIRoute.Comments}${offerId}`, {comment, rating});
    //dispatch(fetchCommentsAction(offerId));
    const {data} = await api.get<Comments[]>(`${APIRoute.Comments}${offerId}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<string, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    // try {
    const {data: {email}} = await api.get<CheckAuthData>(APIRoute.Login);
    return email;
    // dispatch(requireAuthorization(AuthorizationStatus.Auth));
    // dispatch(setUserName(email));
    /* } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }*/
  },
);

export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    // dispatch(requireAuthorization(AuthorizationStatus.Auth));
    // dispatch(setUserName(email));
    dispatch(redirectToRoute(AppRoute.Main));
    return email;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    // dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
