import styled from "styled-components";
import { MainWrappCss, AllWrappCss } from "../../styles/Globalstyled";
import Button from "../../components/Button/Button";

export const ToDoListWrapper = styled.div`
  ${AllWrappCss}
`;

export const TitleHeader = styled.header`
  width: 390px;
  height: 20%;
  background: var(--main-color);
`;

export const TitleImg = styled.img`
  margin: 2rem 0 2rem 10rem;
`;

export const LogOutBtn = styled(Button)`
  float: right;
  margin: 2rem;
`;

export const TodoListMain = styled.main`
  ${MainWrappCss};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
`;

export const InpWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
`;

export const TodoInput = styled.input`
  width: 27rem;
  height: 3.5rem;
  font-size: 15px;
  border: 0;
  border-radius: 20px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  ::placeholder {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const TodoUl = styled.ul`
  margin-left: auto;
  margin-right: auto;
`;
