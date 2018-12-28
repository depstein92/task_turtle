
const initialValue = {
  loading: false,
  data: {},
  error: false,
  payload: { isAuthenticated: false }
};

export default function Landing_Reducer(state=initialValue, data){
  switch(data.type){
    case 'SEND_LOGIN_INFORMATION_SUCCESS':
     return {  payload: data.payload, error: false, loading: false };
    break;
    case 'SEND_LOGIN_INFORMATION_LOADING':
      return { loading: true, error: false, data: {} };
    break;
    case 'SEND_LOGIN_INFORMATION_ERROR':
     return { loading: false, error: true, data: {} };
    break;
    default:
     return state;
  }
}
