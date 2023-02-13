import ToDoItem from "../../components/ToDoItem/ToDoItem";
import * as S from "./ToDo.style";
import TodolistTitle from "../../assets/Todolist-title.svg";

const ToDo = () => {
  return (
    <S.ToDoListWrapper>
      <S.TitleHeader>
        <S.TitleImg src={TodolistTitle} />
      </S.TitleHeader>
      <S.TodoListUl>
        <ToDoItem />
      </S.TodoListUl>
    </S.ToDoListWrapper>
  );
};

export default ToDo;
