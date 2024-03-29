import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";
import { AllWrappCss, MainWrappCss } from "../../styles/Globalstyled";

export const InputFormWrapper = styled.section`
  ${AllWrappCss};
`;
export const MainWrapper = styled.section`
  ${MainWrappCss};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h1`
  margin: 30px 0 40px;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3rem;
`;

export const SubmitBtn = styled(Button)`
  margin: 30px 0 20px;
`;

export const JoinEmailLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  line-height: 1.5rem;
  color: #767676;
`;
