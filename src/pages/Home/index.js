import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Main from "../../components/Main";

const Content = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Home = () => (
  <Content>
    <Header />
    <Main />
  </Content>
);

export default Home;
