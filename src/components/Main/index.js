import React from "react";
import styled from "styled-components";
import Menu from "../Menu";
import Banner from "../Banner";
import Gallery from "../Gallery";
import Pops from "../Pops";

const Content = styled.main`
  max-width: 100vw;
  padding: 0 10px;

  @media screen and (min-width: 1000px) {
    padding: 0 24px;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2rem;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    align-items: center;
  }
`;

const GalleryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 1rem;
`;

const Main = () => (
  <Content>
    <Wrapper>
      <Menu />
      <Banner />
    </Wrapper>
    <GalleryWrapper>
      <Gallery />
      <Pops />
    </GalleryWrapper>
  </Content>
);

export default Main;
