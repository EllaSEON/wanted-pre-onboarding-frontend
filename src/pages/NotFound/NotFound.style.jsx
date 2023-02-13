import styled from "styled-components";

export const LayOut = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const NotFoundMessage = styled.span`
  margin-top: 3rem;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.4rem;
  color: #767676;
`;
