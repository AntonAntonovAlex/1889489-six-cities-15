import { INITIAL_CITY, TypesOfSorting } from '../../const';
import { changeCity, changeSortingType, sixCitiesProcess } from './six-cities-process';

describe('SixCitiesProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { sortingType: TypesOfSorting.Popular, city: INITIAL_CITY };

    const result = sixCitiesProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = { sortingType: TypesOfSorting.Popular, city: INITIAL_CITY };

    const result = sixCitiesProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change sorting type with "changeSortingType" action', () => {
    const initialState = { sortingType: TypesOfSorting.Popular, city: INITIAL_CITY };
    const expectedSortingType = TypesOfSorting.PriceHighToLow;

    const result = sixCitiesProcess.reducer(initialState, changeSortingType(TypesOfSorting.PriceHighToLow));

    expect(result.sortingType).toBe(expectedSortingType);
  });

  it('should change city with "changeCity" action', () => {
    const initialState = { sortingType: TypesOfSorting.Popular, city: INITIAL_CITY };
    const expectedCity = 'Cologne';

    const result = sixCitiesProcess.reducer(initialState, changeCity('Cologne'));

    expect(result.city).toBe(expectedCity);
  });

});
