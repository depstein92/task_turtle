import actionName from '../actions/action_names';

export default function Request_Job_Reducer(state={}, data){
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
