import { NameSpace, TypesOfSorting } from '../../const';
import { SixCities } from '../../types/sixCities';
import { State } from '../../types/state';

export const getCity = (state: Pick<State, NameSpace.Sixities>): SixCities => state[NameSpace.Sixities].city;
export const getSortingType = (state: Pick<State, NameSpace.Sixities>): TypesOfSorting => state[NameSpace.Sixities].sortingType;
