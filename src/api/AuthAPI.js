import BASE_URL from "./baseUrl";
import axios from "axios";

const AuthAPI = {
  async getSignIn(email, password) {
    const Data = await axios.post(`${BASE_URL}auth/signin`, {
      email,
      password,
    });
    return Data;
  },
  async getSignUp(email, password) {
    const data = await axios.post(`${BASE_URL}auth/signup`, {
      email,
      password,
    });
    return data;
  },
};

export default AuthAPI;
