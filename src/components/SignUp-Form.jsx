import { useState } from "react";
import Input from "./Input";
import styled from "@emotion/styled";
import { useAuth } from "../context/Auth-Context";
import { Link } from "react-router-dom";
import Container from "./Container";

const CustomButton = styled.button`
  background: #2d9cdb;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5em 1em;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: black;
  }
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const { signup } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container>
      <h1>Welcome to Github Stats</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@mail.com"
          label="Email"
        />
        <Input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="******"
          label="Password"
        />
        <Input
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="******"
          label="First Name"
        />
        <Input
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="******"
          label="Last Name"
        />
        <CustomButton type="submit">Create Account</CustomButton>
        <br />
        <Link to="/">Login</Link>
      </form>
    </Container>
  );
};

export default SignUpForm;
