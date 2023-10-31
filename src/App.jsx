import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import { useAuth } from "./context/Auth-Context";

function App() {
  const { user } = useAuth();
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
