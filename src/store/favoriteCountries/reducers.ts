import { ADD_FAVORITE_COUNTRY, REMOVE_FAVORITE_COUNTRY } from './actions';

const defaultState = {
};

// eslint-disable-next-line import/prefer-default-export
export const favoriteCountriesReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    default: return state;
    case ADD_FAVORITE_COUNTRY:
      return {
        ...state,
        [action.payload.alpha3Code]: true,
      };

    case REMOVE_FAVORITE_COUNTRY:
      return {
        ...state,
        [action.payload.alpha3Code]: false,
      };
  }
};
