
 const sendLoginDataSuccess = () => {

  const data = {
    userName: "Frank Hershel",
    password: "love_beam123",
    contact: "516-756-0712",
    address: "123 Address of the Gods St."
  }

  return {
    type: "SEND_LOGIN_INFORMATION_SUCCESS",
    payload: data
  }

};

export default {
  sendLoginDataSuccess
};
