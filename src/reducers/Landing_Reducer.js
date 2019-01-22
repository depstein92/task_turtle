import action_name from '../actions/action_names';

const initialValue = {
  loading: false,
  isLoggedIn: {
    data:{
      message:' ',
      logged_in: false,
      username: 'loading'
    }
  },
  payload: {
    name: {
      title: 'Loading...',
      first: 'Loading...',
      last: 'Loading... '
    },
    picture: {
      large: 'https://react.semantic-ui.com/images/avatar/large/patrick.png',
      medium: 'https://react.semantic-ui.com/images/avatar/large/patrick.png',
      thumbnail: 'https://react.semantic-ui.com/images/avatar/large/patrick.png'
    },
    description: {

    }
  },
  error: false,
};

export default function Landing_Reducer(userData = initialValue, data) {
    switch (data.type) {
        case action_name['SEND_LOGIN_INFORMATION_SUCCESS']:
            return {
                isLoggedIn: data.payload,
                error: false,
                loading: false
            };
            break;
        case action_name['SEND_LOGIN_INFORMATION_LOADING']:
            return {
                loading: true,
                error: false,
                data: {}
            };
            break;
        case action_name['SEND_LOGIN_INFORMATION_ERROR']:
            return {
                loading: false,
                error: true,
                data: {}
            };
        case action_name.SEND_LOGOUT_SUCCESS:
            return {
                loading: false,
                error: false,
                payload: data.payload
            }
            break;
        default:
            return userData;
    }
}
