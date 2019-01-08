import axios from 'axios';
import actionNames from './action_names';

/***********SEND REGISTER REQUEST*********/

const registerUserSuccess = data => {
  return {
    type: actionNames.REGISTER_USER_SUCCESS,
    payload: data
  }
}

const registerUserLoading = () => {
  return {
    type: actionNames.REGISTER_USER_LOADING,
    payload: { loading: true }
  }
}

const registerUserError = err => {
  return {
    type: actionNames.REGISTER_USER_ERROR,
    payload: err
  }
}

const registerUser = async (userName, password) => {

    registerUserLoading();
     
    await axios.post('http://127.0.0.1:5000/register', {
        headers: { 'Access-Control-Allow-Origin': '*' },
        username: userName,
        password
    })
    .then(function(response) {
        console.log('repsonse from register', response);
        registerUserSuccess(response);
    })
    .catch(function(error) {
        console.log('Error from register', error);
        registerUserError(error);
    });
}

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


const getUserProfileInfo = async () => {
  getUserProfileLoading();
  const fetchData =  await axios.get("https://randomuser.me/api/");
  const data = JSON.parse(fetchData.request.response);

  if(!data){
    getUserProfileError();
  } else{
  return {
    type: "GET_USER_DATA_SUCCESS",
    payload: data.results[0]
  };
}
 };

/**********SEND LOGIN REQUEST***********/

const sendLoginRequest = (userName, password) => {

  const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb){
      setTimeout(cb, 100); //fake async
      this.isAuthenticated = true;
    },
    signout(cb){
      this.isAuthenticated = false;
      setTimeout(cb, 100); //fake async
    }
  };

  const data = {
    isAuthenticated: fakeAuth.isAuthenticated
  };

  return {
    type: "SEND_LOGIN_INFORMATION_SUCCESS",
    payload: data
  };

};

/**********MESSAGING APP INBOX***********/

const getUsersMessages = () => {

   const messagesInfoTitle = [
     "Hey I was just hopeing to talk to you...",
     "Hey I was hopeing to get to know you...",
     "Dear yee king of yeee, all that is yee to me"
   ];

   const messages = () => setTimeout(messagesInfoTitle, 1000);
   debugger;

  return {
    type: "GET_USER_MESSAGES_SUCCESS",
    payload: messagesInfoTitle
  }

}

export default {
  sendLoginRequest,
  getUserProfileInfo,
  logOutUser,
  getUsersMessages,
  registerUser
};
