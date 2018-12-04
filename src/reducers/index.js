import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import addImageReducer from './AddImageReducer';
import addImagesToFeedReducer from './AddImagesToFeed';

const rootReducer = combineReducers({
  addImageReducer,
  addImagesToFeedReducer,
  form: formReducer
});

export default rootReducer;
