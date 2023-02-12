import styled from "styled-components";

export const LabelInputWrap = styled.div`
  & + div {
    margin-top: 16px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #767676;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 8px;
  ::placeholder {
    font-family: "NanumSquareNeo-Variable";
    font-size: 1.4rem;
    line-height: 1.4rem;
    font-weight: 400;
    color: #dbdbdb;
  }
  &:focus {
    border-bottom: 1px solid #ffb6b0;
    outline: none;
  }
`;
