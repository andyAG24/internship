import { combineReducers } from 'redux';
import { favoriteCountriesReducer } from './favoriteCountries/reducers';

export default combineReducers({
  favoriteCountries: favoriteCountriesReducer,
});
