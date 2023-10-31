import { useState } from "react";
import getGithubUser from "../services/githubapi-service";
import ResultData from "../components/Result-Data";
import Container from "../components/Container";
import styled from "@emotion/styled";
import { StatusPage } from "../components/Status";
import Footer from "../components/Footer";
import { useAuth } from "../context/Auth-Context";
import { Navigate } from "react-router-dom";

const FormDiv = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  & input {
    text-align: center;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 5px;
    outline: none;
    box-shadow: 2px 2px 0px rgb(203, 199, 199);
  }
`;

const SearchPage = () => {
  const { user } = useAuth();
  // console.log(user);
  const [query, setQuery] = useState("");
  const [state, setState] = useState({
    status: "idle",
    error: null,
    data: null,
  });
  const { status, data: userData, error } = state;

  function handleSubmit(event) {
    event.preventDefault();
    if (query.length === 0) return;
    setState({ status: "pending", data: null, error: null });
    getGithubUser(query)
      .then((data) => {
        setState({ status: "success", data: data, error: null });
      })
      .catch((error) => {
        setState({
          status: "error",
          data: null,
          error: "Username dosen't exist! Try again",
        });
      });
  }

  if (!user) return <Navigate to="/" />;

  // getGithubUser("marlonsalazarg").then((data) => console.log(data));
  return (
    <Container>
      <FormDiv onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          placeholder="username"
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button>Search</button> */}
      </FormDiv>
      {status === "idle" && <StatusPage text="No users..." />}
      {status === "pending" && <StatusPage text="Retrieving user..." />}
      {status === "success" && <ResultData dataUser={userData} />}
      {status === "error" && <p>{error}</p>}
      <Footer />
    </Container>
  );
};

export default SearchPage;
