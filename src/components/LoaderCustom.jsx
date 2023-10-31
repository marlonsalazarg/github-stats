import { Waveform } from "@uiball/loaders";
import Container from "./Container";
import styled from "@emotion/styled";

const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  & p {
    margin-left: 1em;
  }
`;

export const LoaderCustom = () => {
  return (
    <Container>
      <LoaderDiv>
        <Waveform />
        <p>Loading...</p>
      </LoaderDiv>
    </Container>
  );
};
