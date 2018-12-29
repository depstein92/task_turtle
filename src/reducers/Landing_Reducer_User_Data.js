import action_name from '../actions/action_names';

const initialValue = {
  loading: false,
  payload: {
    name: {
      title: 'Mr',
      first: 'First Name',
      last: 'Last Name '
    },
    picture: {
      large: 'https://react.semantic-ui.com/images/avatar/large/patrick.png',
      medium: 'https://react.semantic-ui.com/images/avatar/large/patrick.png',
      thumbnail: 'https://react.semantic-ui.com/images/avatar/large/patrick.png'
    }
  },
  error: false,
};

export default function Landing_Reducer_User_Data(userData=initialValue, data){
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
     return userData;
  }
}
