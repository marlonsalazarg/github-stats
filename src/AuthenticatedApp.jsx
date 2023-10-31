import { Navigate } from "react-router-dom";
import Container from "./components/Container";

const AuthenticatedApp = () => {
  return (
    <Container>
      <Navigate to="/search" />
    </Container>
  );
};

export default AuthenticatedApp;
