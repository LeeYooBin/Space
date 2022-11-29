import React from "react";
import styled from "styled-components";
import Menu from "../Menu";
import Banner from "../Banner";

const Content = styled.main`
  padding: 0 24px;
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Main = () => (
  <Content>
    <Wrapper>
      <Menu />
      <Banner />
    </Wrapper>
  </Content>
);

export default Main;
