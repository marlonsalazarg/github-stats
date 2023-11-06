import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth-Context";
import { BiSolidSearch, BiSolidUser } from "react-icons/bi";
import styled from "@emotion/styled";

const FooterDiv = styled.div`
  @media (max-width: 760px) {
    width: 100%;
  }
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  width: 760px;
  border-top: 2px solid #bdbdbd;
  & a {
    margin-top: 1em;
    color: #bdbdbd;
    &:hover {
      color: #2d9cdb;
    }
  }
  button {
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
  }
`;

const Footer = () => {
  const { logout } = useAuth();

  return (
    <FooterDiv>
      <Link to="/profile">
        <BiSolidUser size="50" />
      </Link>
      <Link to="/search">
        <BiSolidSearch size="50" />
      </Link>
      <button onClick={logout}>Log out</button>
    </FooterDiv>
  );
};

export default Footer;
