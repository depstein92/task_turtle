import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import Landing_Reducer from './Landing_Reducer';
import Landing_Reducer_User_Data from './Landing_Reducer_User_Data';

const rootReducer = combineReducers({
  loggedIn: Landing_Reducer,
  userData: Landing_Reducer_User_Data
});

export default rootReducer;
