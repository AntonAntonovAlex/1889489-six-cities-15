import { NameSpace, SIX_CITIES, TypesOfSorting } from '../../const';
import { getSortingType, getCity } from './selectors';

describe('SixCitiesProcess selectors', () => {
  const state = {
    [NameSpace.Sixities]: {
      city: SIX_CITIES[1],
      sortingType: TypesOfSorting.PriceHighToLow,
    }
  };

  it('should return city from state', () => {
    const { city } = state[NameSpace.Sixities];
    const result = getCity(state);
    expect(result).toBe(city);
  });

  it('should return sortingType from state', () => {
    const { sortingType } = state[NameSpace.Sixities];
    const result = getSortingType(state);
    expect(result).toBe(sortingType);
  });
});
