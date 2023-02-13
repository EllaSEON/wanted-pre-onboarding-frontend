import styled from "styled-components";
import { MainWrappCss, AllWrappCss } from "../../styles/Globalstyled";

export const ToDoListWrapper = styled.section`
  ${AllWrappCss}
`;

export const TitleHeader = styled.header`
  width: 100%;
  height: 20%;
  text-align: center;
  background: var(--main-color);
`;

export const TitleImg = styled.img`
  margin: 2rem;
`;

export const TodoListUl = styled.ul`
  ${MainWrappCss};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
`;
