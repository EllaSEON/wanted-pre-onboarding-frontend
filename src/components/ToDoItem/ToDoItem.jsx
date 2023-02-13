import * as S from "./ToDoItem.style";

const ToDoItem = () => {
  return (
    <S.ToDoItemWrapper>
      <S.CheckBoxLabel htmlfor="toDoItem">
        <S.CheckBox id="toDoItem" type="checkbox" />
        <S.ToDoText>오늘의 할일이 너무너무 많아 어쩌면 좋아</S.ToDoText>
      </S.CheckBoxLabel>
      <S.BtnWrapper>
        <S.ToDoBtn type="button" size="s" children="수정" />
        <S.ToDoBtn type="button" size="s" children="삭제" btncolor="gray" />
      </S.BtnWrapper>
    </S.ToDoItemWrapper>
  );
};

export default ToDoItem;
