import { combineReducers } from 'redux';
import fragment from './fragment';
import route from './route';
import style from './style';
import config from './config';

const rootReducer = combineReducers({
  fragment,
  route,
  style,
  config
});

export default rootReducer;
