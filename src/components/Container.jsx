import styled from "@emotion/styled";

const ContainerDiv = styled.div`
  max-width: 760px;
  margin: auto;
  text-align: center;
`;

export default function Container({ children }) {
  return <ContainerDiv>{children}</ContainerDiv>;
}
