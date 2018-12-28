import axios from 'axios';


/**********GET USER PROFILE***********/

const getUserProfileSuccess = data => {
  return {
    type: "GET_USER_DATA_SUCCESS",
    payload: data
  };
};

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
  const mockData =  await axios.get("https://randomuser.me/api/")
                               .then(data => getUserProfileSuccess(data))
                               .catch(err => getUserProfileError(err));
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

export default {
sendLoginRequest,
getUserProfileInfo
};
