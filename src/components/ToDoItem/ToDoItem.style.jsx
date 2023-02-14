import styled from "styled-components";
import Button from "../Button/Button";

export const ToDoItemWrapper = styled.li`
  width: 39rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px dashed var(--border-color);
`;

export const CheckBoxLabel = styled.label`
  display: flex;
`;

export const CheckBox = styled.input`
  width: 2.2rem;
  height: 2.2rem;
  margin: 1rem;
`;

export const ModifyInput = styled.input`
  padding-left: 1rem;
  border-radius: 10px;
  outline: none;
  font-size: 1.5rem;
`;

export const ToDoText = styled.span`
  display: block;
  padding: 1rem;
  width: 200px;
  font-size: 1.5rem;
  line-height: 1.5rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
`;

export const ToDoBtn = styled(Button)`
  margin-left: 0.5rem;
`;
