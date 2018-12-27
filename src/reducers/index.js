import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import Landing_Reducer from './Landing_Reducer';

const rootReducer = combineReducers({
  reducer_data: Landing_Reducer
});

export default rootReducer;
