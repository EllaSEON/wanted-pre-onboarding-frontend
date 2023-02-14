import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/context";
import ToDoItem from "../../components/ToDoItem/ToDoItem";
import ToDoAPI from "../../api/ToDoAPI";
import * as S from "./ToDo.style";
import ToDoListTitle from "../../assets/Todolist-title.svg";
import Button from "../../components/Button/Button";

const ToDo = () => {
  const { user } = useContext(AuthContext);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleData = (event) => {
    if (event.target.id === "todo") {
      setTodo(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await ToDoAPI.createTodo(todo, user.access_token);
    window.location.reload();
    return data;
  };

  useEffect(() => {
    const setToDoList = async () => {
      const data = await ToDoAPI.getTodo(user.access_token);
      setTodoList(data.data);
      console.log(data.data);
    };
    setToDoList();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <S.ToDoListWrapper>
      <S.TitleHeader>
        <S.TitleImg src={ToDoListTitle} />
        <S.LogOutBtn
          type="button"
          btncolor="gray"
          size="s"
          children="로그아웃"
          onClick={handleLogout}
        />
      </S.TitleHeader>
      <S.TodoListMain>
        <S.InpWrapper>
          <S.TodoInput
            type="text"
            data-testid="new-todo-input"
            placeholder="내용을 입력해주세요"
            value={todo}
            onChange={handleData}
            id="todo"
          />
          <Button
            type="button"
            data-testid="new-todo-add-button"
            btncolor="ocher"
            children="추가"
            size="s"
            onClick={handleSubmit}
          />
        </S.InpWrapper>
        <S.TodoUl>
          {todoList.map((item) => {
            return (
              <ToDoItem
                key={item.id}
                content={item.todo}
                id={item.id}
                setTodoList={setTodoList}
              />
            );
          })}
        </S.TodoUl>
      </S.TodoListMain>
    </S.ToDoListWrapper>
  );
};

export default ToDo;
