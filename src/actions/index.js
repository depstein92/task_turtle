import axios from 'axios';
import actionNames from './action_names';

/***********SEND REGISTER REQUEST*********/

const registerUserLoading = () => {
    return {
        type: actionNames.REGISTER_USER_LOADING,
        payload: {
            loading: true
        }
    }
}

const registerUser = async (userName, password) => {

    registerUserLoading();

    const response = await axios.post('http://127.0.0.1:5000/register', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            username: userName,
            password
        })
        .catch(function(error) {
            console.log(`Error in Register User ${error}`);
            return {
                type: actionNames.REGISTER_USER_ERROR,
                payload: err
            }
        });
    return {
        type: actionNames.REGISTER_USER_SUCCESS,
        payload: response
    }
}


/**********SEND LOGIN REQUEST***********/

const sendLoginRequestLoading = () => {
    return {
        type: actionNames['SEND_LOGIN_INFORMATION_LOADING'],
        payload: {
            loading: true
        }
    }
}

const sendLoginRequest = async (username, password) => {

    sendLoginRequestLoading();

    const data = await axios.post('http://127.0.0.1:5000/login', {
        username,
        password
    });

    if (!data) {
        return {
            type: actionNames['SEND_LOGIN_INFORMATION_ERROR'],
            payload: error
        };
    };

    return {
        type: actionNames['SEND_LOGIN_INFORMATION_SUCCESS'],
        payload: data
    };
};

/**********GET USER PROFILE***********/

const getUserProfileError = error => {
  return {
    type: "GET_USER_DATA_ERROR",
    payload: error
  };
};

const getUserProfileLoading = () => {
  return {
    type: "GET_USER_DATA_LOADING",
    payload: { loading: true }
  };
};

const getUserProfileInfo = async (username) => { // TODO pass username ??

    getUserProfileLoading();

    const userData = await axios.get("http://127.0.0.1:5000/user_data/dimpt")
                                .catch(error => console.log(error));
    if (!userData) {
        getUserProfileError();
    } else {
        return {
            type: "GET_USER_DATA_SUCCESS",
            payload: userData
        };
    };
};

/************GET JOB POST FEED**************/

const getAllPostsLoading = () => {
  return {
    type: actionNames['GET_ALL_POSTS_LOADING'],
    payload: { loading: true }
  };
};

const getAllPostsError = error => {
  console.log(error);
  return {
    type: actionNames['GET_ALL_POSTS_ERROR'],
    payload: error
  };
};

const getAllPostsSuccess = async () => {

  const postsData = await axios.get("http://127.0.0.1:5000/job_posts")
                               .catch(error => getAllPostsError(error));

  return {
      type: actionNames['GET_ALL_POSTS_SUCCESS'],
      payload: postsData
  };
};


/************SEND LOGOUT REQUEST************/

const logOutUser = () => {

  const data = {
    isAuthenticated: false
  };
  return{
    type: "SEND_LOGOUT_SUCCESS",
    payload: data
  }
}

/***************POST JOBS***************/

const postJobsToFeedFailure = error => {
  return {
    type: actionNames.POST_JOB_TO_FEED_FAILURE,
    payload: error
  }
}

const postJobsToFeedLoading = () => {
  return{
    type: actionNames.POST_JOB_TO_FEED_LOADING,
    payload: { loading: true }
  }
}

const postJobsToFeedSuccess = (...params) => {

  postJobsToFeedLoading();

  const data = axios.post('http://127.0.0.1:5000/jobs', {
    client: params[0],
    title: params[1],
    description: params[2],
    location: params[3],
    data: params[4]
  })
  .catch(error => {
    console.log(error);
    postJobsToFeedFailure(error);
  });

  return{
    type: actionNames.POST_JOB_TO_FEED_SUCCESS,
    payload: data
  }
}

/**********MESSAGING APP INBOX***********/

const getUsersMessages = () => {

   const messagesInfoTitle = [
     "Hey I was just hopeing to talk to you...",
     "Hey I was hopeing to get to know you...",
     "Dear yee king of yeee, all that is yee to me"
   ];

   const messages = () => setTimeout(messagesInfoTitle, 1000);

  return {
    type: "GET_USER_MESSAGES_SUCCESS",
    payload: messagesInfoTitle
  }

}

export default {
  getUserProfileInfo,
  getAllPostsSuccess,
  getUsersMessages,
  logOutUser,
  sendLoginRequest,
  registerUser,
  postJobsToFeedSuccess
};
