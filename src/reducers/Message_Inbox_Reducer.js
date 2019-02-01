import actionName from '../actions/action_names';

const initialValue = {
  payload: {
    data: {
      message: 'Messages Loading',
      messages: [
        {
          client: "Loading...",
          content: "Loading...",
          date: "Loading...",
          description: "Loading...",
          location: "Loading...",
          time: "Loading...",
          title: "Loading...",
          username: "Loading..."
        },
        {
          client: "Loading...",
          content: "Loading...",
          date: "Loading...",
          description: "Loading...",
          location: "Loading...",
          time: "Loading...",
          title: "Loading...",
          username: "Loading..."
        },
        {
          client: "Loading...",
          content: "Loading...",
          date: "Loading...",
          description: "Loading...",
          location: "Loading...",
          time: "Loading...",
          title: "Loading...",
          username: "Loading..."
        }
      ]
    }
  }
};

export default function Messaging_Inbox_Reducer(state=initialValue, data){
  switch(data.type){
    case actionName['GET_USER_MESSAGES_SUCCESS']:
     return {  payload: data.payload, error: false, loading: false };
    break;
    case actionName['GET_ALL_USERS_MESSAGES_LOADING']:
      return { loading: true, error: false, data: {} };
    break;
    case actionName['GET_USER_MESSAGES_ERROR']:
     return { loading: false, error: true, data: {} };
    break;
    default:
     return state;
  }
};
