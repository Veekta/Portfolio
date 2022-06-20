import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <ImageDiv></ImageDiv>
      <WriteUp></WriteUp>
      <Side></Side>
    </Container>
  );
};

export default Hero;

const Side = styled.div`
  width: 10%;
`;
const WriteUp = styled.div`
  width: 50%;
`;
const ImageDiv = styled.div`
  width: 40%;
  height: 100%;
  background-image: url("/gllery/portback.jpg");
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
`;
