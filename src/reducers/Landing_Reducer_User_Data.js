import action_name from '../actions/action_names';

const initialValue = {
  loading: false,
  data: {},
  error: false,
};

export default function Landing_Reducer_User_Data(state=initialValue, data){
  const x = action_name.GET_USER_DATA_SUCCESS
  switch(data.type){
    case action_name.GET_USER_DATA_SUCCESS:
     return {  payload: data.payload, error: false, loading: false };
    break;
    case action_name.GET_USER_DATA_LOADING:
      return { loading: true, error: false, data: {} };
    break;
    case action_name.GET_USER_DATA_ERROR:
     return { loading: false, error: true, data: {} };
    break;
    default:
     return state;
  }
}
