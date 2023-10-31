import LoginForm from "./components/Login-Form";
import Container from "./components/Container";
import styled from "@emotion/styled";

const CustomText = styled.p`
  font-weight: bold;
  color: #2d9cdb;
  cursor: pointer;
`;

const UnauthenticatedApp = () => {
  return (
    <Container>
      <h1>Welcome to Github Stats</h1>
      <LoginForm />
    </Container>
  );
};

export default UnauthenticatedApp;
