import styled from "styled-components";
import Button from "../Button/Button";

export const ToDoItemWrapper = styled.li`
  width: 90%;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px dashed var(--border-color);
`;

export const CheckBoxLabel = styled.label`
  white-space: nowrap;
  overflow-x: auto;
`;

export const CheckBox = styled.input`
  position: fixed;
`;

export const ToDoText = styled.span`
  padding-left: 2.5rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
`;

export const ToDoBtn = styled(Button)`
  margin-left: 0.5rem;
`;
