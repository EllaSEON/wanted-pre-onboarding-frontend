import ToDoItem from "../../components/ToDoItem/ToDoItem";
import * as S from "./ToDo.style";

const ToDo = () => {
  return (
    <S.ToDoListWrapper>
      <S.TodoListUl>
        <ToDoItem />
      </S.TodoListUl>
    </S.ToDoListWrapper>
  );
};

export default ToDo;
