import action_name from '../actions/action_names';

  const initialValue = {
      payload: {
        data: {
          user_data: [
            {
              username: 'loading',
              description: 'Place description here',
              profile_picture: 'https://react.semantic-ui.com/images/avatar/large/patrick.png'
            }
          ]
        }
      }
    }

  const skillList = {
    skills: [
      "Trombone",
      "Yeezy Album",
      "Getting a Divorce",
      "Eating Doritos"
   ]
  }

export default function Landing_Reducer_User_Data(userData=initialValue, data){
  switch(data.type){
    case action_name.GET_USER_DATA_SUCCESS:
     return { payload: Object.assign({}, skillList, data.payload), error: false, loading: false };
    break;
    case action_name.GET_USER_DATA_LOADING:
      return { loading: true, error: false, data: {} };
    break;
    case action_name.GET_USER_DATA_ERROR:
     return { loading: false, error: true, data: {} };
    break;
    default:
     return initialValue;
  }
}
