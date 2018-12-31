import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import Landing_Reducer from './Landing_Reducer';
import Landing_Reducer_User_Data from './Landing_Reducer_User_Data';
import Message_Inbox_Reducer from './Message_Inbox_Reducer';

const rootReducer = combineReducers({
  loggedIn: Landing_Reducer,
  userData: Landing_Reducer_User_Data,
  messages_inbox: Message_Inbox_Reducer
});

export default rootReducer;
