import BASE_URL from "./baseUrl";
import axios from "axios";

const AuthAPI = {
  async getSignIn(email, password) {
    const data = await axios.post(`${BASE_URL}auth/signin`, {
      email,
      password,
    });
    return data;
  },
};

export default AuthAPI;
