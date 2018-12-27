
const sendLoginRequest = (userName, password) => {

  const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb){
      this.isAuthenticated = true;
      setTimeout(cb, 100); //fake async
    },
    signout(cb){
      this.isAuthenticated = false;
      setTimeout(cb, 100); //fake async
    }
  }

  const data = {
    isAuthenticated: fakeAuth.isAuthenticated
  };

  return {
    type: "SEND_LOGIN_INFORMATION_SUCCESS",
    payload: data
  }

};

export default {
sendLoginRequest
};
