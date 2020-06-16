import { combineReducers } from 'redux';
import { reducer as formsReducer } from 'redux-form';

import auth from './auth';
import counter from './counter';
import jsonPlaceholder from './jsonPlaceholder';
import cat from './cat'

export default combineReducers({
  auth,
  counter,
  jsonPlaceholder,
  cat,
  form: formsReducer,
});
