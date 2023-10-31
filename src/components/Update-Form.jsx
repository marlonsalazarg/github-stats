import { useState } from "react";
import Input from "./Input";
import styled from "@emotion/styled";
import { useAuth } from "../context/Auth-Context";
import { Navigate } from "react-router-dom";

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

const UpdateForm = () => {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const { update } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await update(formData);
    setFormData({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  if (!user) return <Navigate to="/" />;

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={user.email}
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
        placeholder={user.first_name}
        label="First Name"
      />
      <Input
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        placeholder={user.last_name}
        label="Last Name"
      />
      <CustomButton type="submit">Update</CustomButton>
    </form>
  );
};

export default UpdateForm;
