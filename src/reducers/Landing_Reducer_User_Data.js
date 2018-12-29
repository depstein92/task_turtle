import action_name from '../actions/action_names';

const initialValue = {
  loading: false,
  payload: {
    name: {
      title: 'Loading...',
      first: 'Loading...',
      last: 'Loading... '
    },
    milesWillingToTravel: '50 miles',
    picture: {
      large: 'https://react.semantic-ui.com/images/avatar/large/patrick.png',
      medium: 'https://react.semantic-ui.com/images/avatar/large/patrick.png',
      thumbnail: 'https://react.semantic-ui.com/images/avatar/large/patrick.png'
    },
  },
  error: false,
};

const jobsCompleted = {
  jobs: {
      job1: {
        job_description: 'Cut Grass',
        customer: 'Manuel Noreiga',
        time: new Date(+(new Date()) - Math.floor(Math.random()*10000000000)),
        location: 'Cary, NC',
        rating: '5 stars'
      },
      job2: {
        job_description: 'Played the Drums',
        customer: 'Rob Reiner',
        time: new Date(+(new Date()) - Math.floor(Math.random()*10000000000)),
        location: 'Raleigh, NC',
        rating: '5 stars'
      },
      job3: {
        job_description: 'Cleaned Shower',
        customer: 'Bill Clinton',
        time: new Date(+(new Date()) - Math.floor(Math.random()*10000000000)),
        location: 'Washington, DC',
        rating: '5 stars'
      }
    }
  };


export default function Landing_Reducer_User_Data(userData=initialValue, data){
  switch(data.type){
    case action_name.GET_USER_DATA_SUCCESS:
     return { payload: Object.assign({}, jobsCompleted, data.payload), error: false, loading: false };
    break;
    case action_name.GET_USER_DATA_LOADING:
      return { loading: true, error: false, data: {} };
    break;
    case action_name.GET_USER_DATA_ERROR:
     return { loading: false, error: true, data: {} };
    break;
    default:
     return Object.assign({}, jobsCompleted, userData);
  }
}
