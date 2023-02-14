import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/context";
import ToDoItem from "../../components/ToDoItem/ToDoItem";
import TodoAPI from "../../api/TodoAPI";
import * as S from "./ToDo.style";
import ToDoListTitle from "../../assets/Todolist-title.svg";
import Button from "../../components/Button/Button";

const ToDo = () => {
  const navigate = useNavigate();
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
    await TodoAPI.createTodo(todo, user.access_token);
    const { data } = await TodoAPI.getTodo(user.access_token);
    setTodoList(data);
    console.log(data);
    setTodo("");
  };

  useEffect(() => {
    const setToDoList = async () => {
      const { data } = await TodoAPI.getTodo(user.access_token);
      setTodoList(data);
    };
    setToDoList();
  }, [user.access_token]);

  const handleLogout = () => {
    localStorage.clear();
    window.location = "/";
  };

  // 로컬스토리지에 토큰 없는 상태라면  signin 경로로 이동
  useEffect(() => {
    if (user.access_token === null) {
      navigate("/signin");
    }
  });

  return (
    <S.ToDoListWrapper>
      <S.TitleHeader>
        <S.TitleImg src={ToDoListTitle} alt="오늘의 할일 제목" />
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
              <ToDoItem key={item.id} item={item} setTodoList={setTodoList} />
            );
          })}
        </S.TodoUl>
      </S.TodoListMain>
    </S.ToDoListWrapper>
  );
};

export default ToDo;
