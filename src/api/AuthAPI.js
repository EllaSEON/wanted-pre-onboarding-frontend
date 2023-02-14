import BASE_URL from "./baseUrl";
import axios from "axios";

const AuthAPI = {
  async getSignIn(email, password) {
    const signInData = await axios.post(`${BASE_URL}auth/signin`, {
      email,
      password,
    });
    return signInData;
  },
  async getSignUp(email, password) {
    const signUpData = await axios.post(`${BASE_URL}auth/signup`, {
      email,
      password,
    });
    return signUpData;
  },
};

export default AuthAPI;
