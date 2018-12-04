import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import addImageReducer from './AddImageReducer';
import addImagesToFeedReducer from './AddImagesToFeedReducer';

const rootReducer = combineReducers({
  addImageReducer,
  addImagesToFeedReducer,
  form: formReducer
});

export default rootReducer;
