import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import Message_Inbox_Reducer from './Message_Inbox_Reducer';
import Landing_Register_User_Reducer from './Landing_Register_User_Reducer';
import Edit_Profile_Reducer from './Edit_Profile_Reducer';
import Landing_Reducer from './Landing_Reducer';
import Feed_Reducer from './Feed_Reducer';


const rootReducer = combineReducers({
  isAuthenticated: Landing_Reducer,
  messages_inbox: Message_Inbox_Reducer,
  register_message: Landing_Register_User_Reducer,
  jobPosts: Feed_Reducer,
  editProfileMessage: Edit_Profile_Reducer
});

export default rootReducer;
