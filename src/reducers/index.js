import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import addImageReducer from './AddImageReducer';

const rootReducer = combineReducers({
  addImageReducer,
  form: formReducer 
});

export default rootReducer;
