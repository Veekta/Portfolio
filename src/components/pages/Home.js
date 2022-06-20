import React from "react";
import styled from "styled-components";
import Hero from "../pages/Hero";
import Header from "../Header/Header";
const Home = () => {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
