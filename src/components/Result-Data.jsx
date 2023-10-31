import styled from "@emotion/styled";
import { FaUsers } from "react-icons/fa";
import { RiUserHeartFill, RiBookMarkFill } from "react-icons/ri";
import { PiCodeFill } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";

const UserImage = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-bottom: 13px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 26px;
  text-align: center;
`;

const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 13px;
`;

const NameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 13px;

  & svg {
    margin-left: 5px;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 2px 2px 0px rgb(203, 199, 199);
  & p:first-of-type {
    font-size: 28px;
    font-weight: 400;
  }
  & p:last-of-type {
    font-size: 16px;
    font-weight: 400;
  }
`;

export default function ResultData({ dataUser }) {
  return (
    <Content key={dataUser.id}>
      <UserImage src={dataUser.avatar_url} alt="" />
      <NameDiv>
        {dataUser.name ? dataUser.name : dataUser.login}
        <AiFillStar />
      </NameDiv>
      <p>{dataUser.bio}</p>
      <GridContent>
        <GridItem>
          <FaUsers size="60px" color="skyblue" />
          <p>
            {dataUser.followers > 1000
              ? `${Math.floor(dataUser.followers / 1000)}K`
              : dataUser.followers}
          </p>
          <p>followers</p>
        </GridItem>
        <GridItem>
          <RiUserHeartFill size="60px" color="orange" />
          <p>
            {dataUser.following > 1000
              ? `${Math.floor(dataUser.following / 1000)}K`
              : dataUser.following}
          </p>
          <p>followings</p>
        </GridItem>
        <GridItem>
          <RiBookMarkFill size="60px" color="green" />
          <p>{dataUser.public_repos}</p>
          <p>public repos</p>
        </GridItem>
        <GridItem>
          <PiCodeFill size="60px" color="gray" />
          <p>{dataUser.public_gists}</p>
          <p>public gists</p>
        </GridItem>
      </GridContent>
    </Content>
  );
}
