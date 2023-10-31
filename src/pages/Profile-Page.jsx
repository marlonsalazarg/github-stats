import Container from "../components/Container";
import UpdateForm from "../components/Update-Form";
import { useAuth } from "../context/Auth-Context";
import Footer from "../components/Footer";
const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <>
      <Container>
        <h1>Profile</h1>
        <UpdateForm />
        <Footer />
      </Container>
    </>
  );
};

export default ProfilePage;
