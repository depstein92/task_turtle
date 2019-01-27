import actionName from '../actions/action_names';

 const messages = {

}

export default function Message_Inbox_Reducer(state=messages, data){
  switch(data.type){
    case actionName['REQUEST_JOB_USER_MESSAGES_SUCCESS']:
     return {  payload: data.payload, error: false, loading: false };
    break;
    case actionName['REQUEST_JOB_USER_MESSAGES_LOADING']:
      return { loading: true, error: false, data: {} };
    break;
    case actionName['REQUEST_JOB_USER_MESSAGES_ERROR']:
     return { loading: false, error: true, data: {} };
    default:
     return state;
  }
}
