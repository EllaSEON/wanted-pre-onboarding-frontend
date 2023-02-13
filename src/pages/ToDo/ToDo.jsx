import ToDoItem from "../../components/ToDoItem/ToDoItem";
import * as S from "./ToDo.style";
import TodolistTitle from "../../assets/Todolist-title.svg";
import Button from "../../components/Button/Button";

const ToDo = () => {
  return (
    <S.ToDoListWrapper>
      <S.TitleHeader>
        <S.TitleImg src={TodolistTitle} />
      </S.TitleHeader>
      <S.TodoListMain>
        <S.InpWrapper>
          <S.TodoInput type="text" placeholder="내용을 입력해주세요" />
          <Button type="button" btncolor="ocher" children="추가" size="s" />
        </S.InpWrapper>
        <S.TodoUl>
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
        </S.TodoUl>
      </S.TodoListMain>
    </S.ToDoListWrapper>
  );
};

export default ToDo;
