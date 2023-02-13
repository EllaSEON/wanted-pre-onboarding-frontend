import { useContext } from "react";
import { AuthContext } from "../../context/context";
import ToDoAPI from "../../api/ToDoAPI";
import * as S from "./ToDoItem.style";

const ToDoItem = ({ content, id, setTodoList }) => {
  const { user } = useContext(AuthContext);

  const handleRemove = async () => {
    await ToDoAPI.deleteTodo(id, user.access_token).then(() => {
      setTodoList((prevList) => {
        return prevList.filter((list) => list.id !== id);
      });
    });
  };

  return (
    <S.ToDoItemWrapper>
      <S.CheckBoxLabel htmlfor="toDoItem">
        <S.CheckBox id="toDoItem" type="checkbox" />
        <S.ToDoText>{content}</S.ToDoText>
      </S.CheckBoxLabel>
      <S.BtnWrapper>
        <S.ToDoBtn
          type="button"
          data-testid="modify-button"
          size="s"
          children="수정"
        />
        <S.ToDoBtn
          type="button"
          data-testid="delete-button"
          size="s"
          children="삭제"
          btncolor="gray"
          onClick={handleRemove}
        />
      </S.BtnWrapper>
    </S.ToDoItemWrapper>
  );
};

export default ToDoItem;
