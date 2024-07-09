import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_CITY, NameSpace, TypesOfSorting } from '../../const';
import { SixCities } from '../../types/sixCities';
import { SixCitiesProcess } from '../../types/state';

const initialState: SixCitiesProcess = {
  sortingType: TypesOfSorting.Popular,
  city: INITIAL_CITY,
};

export const sixCitiesProcess = createSlice({
  name: NameSpace.Sixities,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<SixCities>) => {
      state.city = action.payload;
    },
    changeSortingType: (state, action: PayloadAction<TypesOfSorting>) => {
      state.sortingType = action.payload;
    },
  },
});

export const {changeCity, changeSortingType} = sixCitiesProcess.actions;
