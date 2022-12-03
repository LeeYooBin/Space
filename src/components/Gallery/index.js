import React from "react";
import styled from "styled-components";
import Tags from "../Tags";
import Photo from "../Photo";
import Images from "../../utils/Images";

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // align-items: flex-start;
  // margin: 5vh 0 0 15%;
  margin: 5vh 0 0 0;
  font-family: "GandhiSansRegular";

  @media screen and (min-width: 1000px) {
    align-items: flex-start;
    margin: 5vh 0 0 15%;
  }
`;

const H2 = styled.h2`
  color: #7b78e5;
  font-size: 24px;
  margin-bottom: 4vh;
  text-align: center;
`;

const Cards = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 5vh;

  @media screen and (min-width: 1000px) {
    justify-content: normal;
  }
`;

const Gallery = () => (
  <Content>
    <H2>Browse the gallery</H2>
    <Tags />
    <Cards>
      {Images.map((item) => (
        <Photo
          key={item.id}
          image={item.image}
          title={item.title}
          credits={item.credits}
        />
      ))}
    </Cards>
  </Content>
);

export default Gallery;
