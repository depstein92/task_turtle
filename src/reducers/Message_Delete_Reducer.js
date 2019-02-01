import actionName from '../actions/action_names';

const initialValue = {
  payload: {
    message: 'Deleted'
  }
};

export default function Message_Delete_Reducer(state=initialValue, data){
  switch(data.type){
    case actionName['DELETE_USER_MESSAGE_SUCCESS']:
     return { payload: data.payload, error: false, loading: false };
    break;
    case actionName['DELETE_USER_MESSAGE_LOADING']:
      return { loading: true, error: false, data: {} };
    break;
    case actionName['DELETE_USER_MESSAGE_FAILURE']:
     return { loading: false, error: true, data: {} };
    break;
    default:
     return state;
  }
};
