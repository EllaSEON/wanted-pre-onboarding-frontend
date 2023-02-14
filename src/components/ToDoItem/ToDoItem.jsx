import { useContext, useState } from "react";
import { AuthContext } from "../../context/context";
import ToDoAPI from "../../api/TodoAPI";
import * as S from "./ToDoItem.style";

const ToDoItem = ({ item, setTodoList }) => {
  const { user } = useContext(AuthContext);
  const [todoData, setTodoData] = useState(item);
  const [isEdit, setIsEdit] = useState(false);
  const [updatedToDo, setUpdatedToDo] = useState(todoData.todo);

  // 수정 버튼 클릭
  const changeInput = () => {
    setIsEdit(true);
  };

  // 수정 취소
  const handleCancel = () => {
    setIsEdit(false);
    setUpdatedToDo(todoData.todo);
  };

  // 체크 버튼 수정
  const handleChangeCheck = async () => {
    const res = await ToDoAPI.updateTodo(
      todoData.id,
      user.access_token,
      updatedToDo,
      !todoData.isCompleted
    );
    setTodoData({ ...res.data });
  };

  // 수정된 텍스트 제출
  const handleChangeText = async () => {
    const res = await ToDoAPI.updateTodo(
      todoData.id,
      user.access_token,
      updatedToDo,
      todoData.isCompleted
    );
    // console.log(res);
    // setUpdatedToDo({ ...res.data.todo });
    setTodoData({ ...res.data });
    setIsEdit(false);
  };

  // 삭제 버튼 클릭
  const handleRemove = async () => {
    const isConfirm = await ToDoAPI.deleteTodo(todoData.id, user.access_token);
    if (isConfirm) {
      setTodoList((prevList) => {
        return prevList.filter((list) => list.id !== todoData.id);
      });
    }
  };

  return (
    <S.ToDoItemWrapper>
      <S.CheckBoxLabel htmlfor="toDoItem">
        <S.CheckBox
          id="toDoItem"
          type="checkbox"
          checked={todoData.isCompleted}
          onChange={handleChangeCheck}
        />
        {isEdit ? (
          <>
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
            <S.ToDoText>{todoData.todo}</S.ToDoText>
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
              onClick={handleChangeText}
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
