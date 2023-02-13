import styled from "styled-components";
import { MainWrappCss, AllWrappCss } from "../../styles/Globalstyled";

export const ToDoListWrapper = styled.section`
  ${AllWrappCss}
`;

export const TodoListUl = styled.ul`
  ${MainWrappCss};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
