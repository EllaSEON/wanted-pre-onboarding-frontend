import * as S from "./ToDoItem.style";

const ToDoItem = ({ content }) => {
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
        />
      </S.BtnWrapper>
    </S.ToDoItemWrapper>
  );
};

export default ToDoItem;
