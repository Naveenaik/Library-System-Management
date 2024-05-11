import axios from "axios";

const baseUrl = "http://localhost:5000";

const loginHandle = async (userName, userPassword,setIsLoggedIn) => {
  try {
    await axios
      .post(`${baseUrl}/admin/login`, {
        userName: userName,
        Password: userPassword,
      })
      .then((res) => {
        alert(res.data.message);
        sessionStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(false);
        window.location.pathname = "/";
      });
  } catch (err) {
    console.log("Error while login........");
    alert(err.response.data.message);
  }
};

const updateHandle = async (userName, userPassword) => {
  try {
    await axios
      .put(`${baseUrl}/admin/update`, {
        userName: userName,
        Password: userPassword,
      })
      .then((res) => {
        alert(res.data.message);
        
      });
  } catch (err) {
    console.log("Error while login........");
    alert(err.response.data.message);
  }
};

export {loginHandle,updateHandle};
