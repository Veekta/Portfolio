import React from "react";
import styled from "styled-components";
import { RiMenu5Line } from "react-icons/ri";

const Header = () => {
  return (
    <Container>
      <LogoDiv>
        Victor <br /> Sunday
      </LogoDiv>
      <Navigator>
        <Nav>Home</Nav>
        <Nav>Home</Nav>
        <Nav>Home</Nav>
        <Nav>Home</Nav>
        <Nav>Home</Nav>
        <Btn> download cv</Btn>
      </Navigator>
      <Btn2>
        <Menu />
      </Btn2>
    </Container>
  );
};

export default Header;

const Menu = styled(RiMenu5Line)`
  font-size: 40px;
  color: var(--color1);
`;
const Btn2 = styled.button`
  margin-right: px;
  background: var(--color2);
  border: 2px solid var(--color1);
  width: 72px;
  height: 72px;
  border-radius: 100%;
  @media (min-width: 767px) {
    display: none;
  }
`;
const Btn = styled.button`
  text-transform: uppercase;
  background: var(--color2);
  border: 1px solid var(--color1);
  padding: 23px 28px;
  color: var(--color1);
  border-radius: 60px;
  font-weight: 600;
  font-family: var(--pop);
  font-size: 12px;
`;
const Nav = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-family: var(--pop);
  color: white;
  font-size: 12px;
  :hover {
    color: var(--color1);
  }
`;
const Navigator = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const LogoDiv = styled.div`
  position: relative;
  float: left;
  width: 200px;
  height: 80px;
  line-height: 1.2;
  font-weight: 800;
  align-items: center;
  color: white;
  font-size: 18px;
  display: flex;
  font-family: var(--pop);
`;
const Container = styled.div`
  padding: 0 7px 0 50px;
  position: fixed;
  left: 50px;
  right: 50px;
  top: 40px;
  height: 80px;
  z-index: 100;
  background: var(--color2);
  border-radius: 80px;
  transition: all 0.7s cubic-bezier(0.165, 0.85, 0.45, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
