import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import Landing_Reducer from './Landing_Reducer';
import Landing_Reducer_User_Data from './Landing_Reducer_User_Data';
import Message_Inbox_Reducer from './Message_Inbox_Reducer';
import Landing_Register_User_Reducer from './Landing_Register_User_Reducer';

const rootReducer = combineReducers({
  isAuthenticated: Landing_Reducer,
  userData: Landing_Reducer_User_Data,
  messages_inbox: Message_Inbox_Reducer,
  register_message: Landing_Register_User_Reducer
});

export default rootReducer;
