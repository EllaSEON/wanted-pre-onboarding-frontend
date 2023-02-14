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
  async deleteTodo(id, access_token) {
    if (window.confirm(`${id}번 째 리스트를 삭제하시겠습니까?`)) {
      await axios.delete(`${BASE_URL}todos/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    }
  },
};

export default ToDoApi;
