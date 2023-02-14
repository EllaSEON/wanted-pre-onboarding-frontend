import axios from "axios";
import BASE_URL from "./baseUrl";

const ToDoApi = {
  async createTodo(todo, access_token) {
    await axios.post(
      `${BASE_URL}todos`,
      { todo },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
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
    const isConfirm = window.confirm(`${id}번 째 리스트를 삭제하시겠습니까?`);
    if (isConfirm) {
      await axios.delete(`${BASE_URL}todos/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    }
    return isConfirm;
  },
  async updateTodo(id, access_token, updatedToDo) {
    const data = await axios.put(
      `${BASE_URL}todos/${id}`,
      { todo: updatedToDo, isCompleted: true },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    return data;
    // if (window.confirm(`${id}번 째 리스트를 수정하시겠습니까?`)) {
    //   await axios.put(
    //     `${BASE_URL}todos/${id}`,
    //     { todo: updatedToDo, isCompleted: true },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${access_token}`,
    //       },
    //     }
    //   );
    // }
  },
};

export default ToDoApi;
