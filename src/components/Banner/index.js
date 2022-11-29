import React from "react";
import styled from "styled-components";
import MainImage from "../../assets/banner.png";

const Content = styled.div`
  width: 88%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 288px;
`;

const Title = styled.h1`
  position: absolute;
  z-index: 1;
  color: #d9d9d9;
  font-size: 2.5rem;
  width: 401px;
  height: 144px;
  top: 75px;
  left: 44px;
`;

const Banner = () => (
  <Content>
    <Title>Most complete gallery in space</Title>
    <Image src={MainImage} alt="banner" />
  </Content>
);

export default Banner;
