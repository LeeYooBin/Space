import React from "react";
import styled from "styled-components";
import Menu from "../Menu";
import Banner from "../Banner";
import Gallery from "../Gallery";

const Content = styled.main`
  max-width: 100vw;
  // padding: 0 24px;
  padding: 0 10px;

  @media screen and (min-width: 1000px) {
    padding: 0 24px;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
  justify-content: space-between;
  margin-top: 2rem;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Main = () => (
  <Content>
    <Wrapper>
      <Menu />
      <Banner />
    </Wrapper>
    <Gallery />
  </Content>
);

export default Main;
