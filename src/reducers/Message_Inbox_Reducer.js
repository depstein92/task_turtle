import action_name from '../actions/action_names'


const messages_inbox = {
  payload : [
    "Loading",
    "Loading",
    "Loading"
  ]
}



export default function Message_Inbox_Reducer(state=messages, messages_inbox){
  switch(data.type){
    case action_name.GET_USER_MESSAGES_SUCCESS:
     return {  payload: data.payload, error: false, loading: false };
    break;
    case action_name.GET_USER_MESSAGES_LOADING:
      return { loading: true, error: false, data: {} };
    break;
    case action_name.GET_USER_MESSAGES_ERROR:
     return { loading: false, error: true, data: {} };
    default:
     return state;
  }
}
