import React from "react";
import styled from "styled-components";
import MainImage from "../../assets/banner.png";

const Content = styled.div`
  width: 100%;
  position: relative;
`;

const Image = styled.img`
  // width: 100%;
  width: 100%;
  // height: 288px;
  height: 150px;

  @media screen and (min-width: 500px) {
    width: 100%;
    height: 288px;
  }
`;

const Title = styled.h1`
  position: absolute;
  z-index: 1;
  color: #d9d9d9;
  // font-size: 2.5rem;
  font-size: 1.2rem;
  // width: 401px;
  width: 200px;
  height: 144px;
  // top: 75px;
  // left: 44px;
  top: 25%;
  left: 5%;

  @media screen and (min-width: 500px) {
    font-size: 2rem;
    width: 320px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 2.5rem;
    width: 401px;
    top: 75px;
    left: 44px;
  }
`;

const Banner = () => (
  <Content>
    <Title>Most complete gallery in space</Title>
    <Image src={MainImage} alt="banner" />
  </Content>
);

export default Banner;
