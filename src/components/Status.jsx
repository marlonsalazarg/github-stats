import styled from "@emotion/styled";
import { AiFillGithub } from "react-icons/ai";

const StatusDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: bold;
  font-size: 20px;
  & svg {
    font-size: 120px;
  }
`;
export const StatusPage = ({ text }) => {
  return (
    <StatusDiv>
      <AiFillGithub />
      {text}
    </StatusDiv>
  );
};
