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

const registerUser = async (userName, password, isClient) => {

    registerUserLoading();

    const response = await axios.post('http://127.0.0.1:5000/register', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            username: userName,
            password,
            isClient
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

const getUserProfileLoading = () => {
  return {
    type: "GET_USER_DATA_LOADING",
    payload: { loading: true }
  };
};

//get user profile info and send Login Request

const sendLoginRequest = async (username, password) => {

    sendLoginRequestLoading();
    getUserProfileLoading();

    const loginData = await axios.post('http://127.0.0.1:5000/login', {
        username,
        password
    });

    const userData = await axios.get(`http://127.0.0.1:5000/user_data/${loginData.data.username}`)
                                .catch(error => console.log(error));

    if (!loginData) {
        return {
            type: actionNames['SEND_LOGIN_INFORMATION_ERROR'],
            payload: error
        };
    };

    const { jobs, skills, user_data } = userData.data;

    return {
        type: actionNames['SEND_LOGIN_INFORMATION_SUCCESS'],
        payload: Object.assign({}, loginData, { jobs, skills, user_data })
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

  const data = axios.post('http://127.0.0.1:5000/job_posts', {
    client: params[0],
    title: params[1],
    description: params[2],
    location: params[3],
    date: params[4]
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

/**********EDIT PROFILE PICTURE***********/

const editProfilePictureError = error => {
  return {
    type: actionNames['EDIT_PROFILE_PICTURE_FAILURE'],
    payload: Object.assign({}, error, { message: 'Error in Editing Profile' })
  }
};

const editProfilePictureLoading = () => {
  return {
    type: actionNames['EDIT_PROFILE_PICTURE_LOADING'],
    payload: Object.assign({}, { loading: true },{message: 'Loading...'} )
  }
};

const editProfilePictureSuccess = async (username, picture) => {

    editProfilePictureLoading();

    const data = await axios.put('http://127.0.0.1:5000/user_data/${username}',{
      username,
      profile_picture: picture
    })
    .catch(error => {
      console.log(error);
      editProfilePictureError(error);
    });

    if(!data){
      return;
    } else{
      return {
        type: actionNames['EDIT_PROFILE_PICTURE_SUCCESS'],
        payload: Object.assign({}, data, { message: 'Profile edited successfully'})
      }
   }
};


/**********EDIT PROFILE DESCRIPTION***********/


const editProfileDescriptionError = error => {
  return {
    type: actionNames['EDIT_PROFILE_DESCRIPTION_FAILURE'],
    payload: Object.assign({}, error, { message: 'Profile could not be edited' })
  }
};

const editProfileDescriptionLoading = () => {
  return {
    type: actionNames['EDIT_PROFILE_DESCRIPTION_LOADING'],
    payload: Object.assign({}, { loading: true }, { message: 'Loading...' })
  }
};

const editProfileDescriptionSuccess = async (username, description) => {
  editProfileDescriptionLoading();
  debugger;
  const data = await axios.put('http://127.0.0.1:5000/user_description/${username}',{
    username,
    description
  })
  .catch(error => {
    console.log(error);
    editProfileDescriptionError(error);
  });

  debugger;

  if(!data){
    return;
  } else{
    return {
      type: actionNames['EDIT_PROFILE_DESCRIPTION_SUCCESS'],
      payload: Object.assign({}, data, { message: 'Profile Edited Successfully' })
    }
  }
};


/*************REQUEST JOB*****************/




/**********MESSAGING APP INBOX***********/

//date, time, client, title
const sendUsersJobRequestSuccess = () => {
};

const sendUsersJobRequestFailure = () => {

};

const sendUsersJobRequestLoading = () => {

};


export default {
  getAllPostsSuccess,
  getUsersMessages,
  logOutUser,
  sendLoginRequest,
  registerUser,
  postJobsToFeedSuccess,
  editProfilePictureSuccess,
  editProfileDescriptionSuccess,
  sendUsersJobRequestSuccess
};
