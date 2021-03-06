import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import Message_Inbox_Reducer from './Message_Inbox_Reducer';
import Request_Job_Reducer from './Request_Job_Reducer';
import Landing_Register_User_Reducer from './Landing_Register_User_Reducer';
import Edit_Profile_Reducer from './Edit_Profile_Reducer';
import Landing_Reducer from './Landing_Reducer';
import Feed_Reducer from './Feed_Reducer';
import Message_Delete_Reducer from './Message_Delete_Reducer';

const rootReducer = combineReducers({
  isAuthenticated: Landing_Reducer,
  messages_inbox: Message_Inbox_Reducer,
  register_message: Landing_Register_User_Reducer,
  request_job: Request_Job_Reducer,
  jobPosts: Feed_Reducer,
  editProfileMessage: Edit_Profile_Reducer,
  deleteMessage: Message_Delete_Reducer
});

export default rootReducer;
