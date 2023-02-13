import axios from "axios";
import BASE_URL from "./baseUrl";

const ToDoApi = {
  async createTodo(todo, access_token) {
    const Data = await axios.post(
      `${BASE_URL}todos`,
      { todo },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    return Data;
  },
  async getTodo(access_token) {
    const Data = await axios.get(`${BASE_URL}todos`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return Data;
  },
};

export default ToDoApi;
