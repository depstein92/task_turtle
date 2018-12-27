
const initialValue = {
  loading: false,
  data: {},
  error: false
};

export default Landing_Reducer(state=initialValue, data){
  switch(data.type){
    case 'SEND_LOGIN_INFORMATION_SUCCESS':
     return { ...state, payload: data.payload };
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
