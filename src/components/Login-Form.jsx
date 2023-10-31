import { useState } from "react";
import Input from "./Input";
import styled from "@emotion/styled";
import { useAuth } from "../context/Auth-Context";
import { Link } from "react-router-dom";

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  align-items: center;
`;

const CustomButton = styled.button`
  max-width: fit-content;
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

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    login(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <CustomForm onSubmit={handleSubmit}>
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
      <CustomButton type="submit">Login</CustomButton>
      <Link to="/signup">Create Account</Link>
    </CustomForm>
  );
};

export default LoginForm;
