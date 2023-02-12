import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginWrapper = styled.div`
  margin: 20rem auto;
  text-align: center;
`;

export const LogoImg = styled.img`
  width: 222px;
  height: 222px;
  margin-bottom: 6rem;
`;

export const TitleImg = styled.img`
  width: 296px;
  height: 166px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const JoinLink = styled(Link)`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--sub-text-color);
  & + a::before {
    content: "";
    display: inline-block;
    width: 3px;
    height: 2rem;
    margin: 0 12px;
    vertical-align: -1px;
    background-color: #c4c4c4;
  }
`;
