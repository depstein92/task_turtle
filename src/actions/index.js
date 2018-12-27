
const sendLoginDataSuccess = (userName, password) => {

  const data = {
    userName: `${userName}`,
    password: `${password}`,
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
