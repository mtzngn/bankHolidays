import {combineReducers} from 'redux';
import bankHolidaysReducer from './bankHolidaysReducer';

export default combineReducers({
  bankHolidays: bankHolidaysReducer,
});
