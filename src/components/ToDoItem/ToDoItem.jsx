import { useContext, useState } from "react";
import { AuthContext } from "../../context/context";
import ToDoAPI from "../../api/ToDoApi";
import * as S from "./ToDoItem.style";

const ToDoItem = ({ content, id, setTodoList, isCompleted }) => {
  const { user } = useContext(AuthContext);

  const [isEdit, setIsEdit] = useState(false);
  const [updatedToDo, setUpdatedToDo] = useState(content);

  // 수정 버튼 클릭
  const changeInput = () => {
    setIsEdit(true);
  };

  // 수정 취소
  const handleCancel = () => {
    setIsEdit(false);
    setUpdatedToDo(content);
  };

  // 수정된 내용 제출
  const handleModify = async () => {
    const res = await ToDoAPI.updateTodo(id, user.access_token, updatedToDo);
    console.log(res);
    // setUpdatedToDo({ ...res.data.todo });
    setIsEdit(false);
  };

  // 삭제 버튼 클릭
  const handleRemove = async () => {
    const isConfirm = await ToDoAPI.deleteTodo(id, user.access_token);
    if (isConfirm) {
      setTodoList((prevList) => {
        return prevList.filter((list) => list.id !== id);
      });
    }
  };

  return (
    <S.ToDoItemWrapper>
      <S.CheckBoxLabel htmlfor="toDoItem">
        {isEdit ? (
          <>
            <S.CheckBox id="toDoItem" type="checkbox" />
            <S.ModifyInput
              data-testid="modify-input"
              type="text"
              value={updatedToDo}
              onChange={(e) => {
                setUpdatedToDo(e.target.value);
              }}
            />
          </>
        ) : (
          <>
            {" "}
            <S.CheckBox id="toDoItem" type="checkbox" />
            <S.ToDoText>{content}</S.ToDoText>
          </>
        )}
      </S.CheckBoxLabel>
      <S.BtnWrapper>
        {isEdit ? (
          <>
            <S.ToDoBtn
              type="button"
              data-testid="submit-button"
              size="s"
              children="제출"
              onClick={handleModify}
              btncolor="purple"
            />
            <S.ToDoBtn
              type="button"
              data-testid="cancel-button"
              size="s"
              children="취소"
              btncolor="gray"
              onClick={handleCancel}
            />
          </>
        ) : (
          <>
            <S.ToDoBtn
              type="button"
              data-testid="modify-button"
              size="s"
              children="수정"
              onClick={changeInput}
            />
            <S.ToDoBtn
              type="button"
              data-testid="delete-button"
              size="s"
              children="삭제"
              btncolor="gray"
              onClick={handleRemove}
            />
          </>
        )}
      </S.BtnWrapper>
    </S.ToDoItemWrapper>
  );
};

export default ToDoItem;
