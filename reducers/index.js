import { combineReducers } from 'redux';
import { list } from './list';
import filterReducer from './filter/filterReducer';

export default combineReducers({
  list: list,
  filter: filterReducer
});