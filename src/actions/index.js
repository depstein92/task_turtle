import axios from 'axios';


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

export default {
sendLoginRequest,
getUserProfileInfo
};
