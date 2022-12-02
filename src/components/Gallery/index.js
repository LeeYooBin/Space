import React from "react";
import styled from "styled-components";
import Tags from "../Tags";
import Photo from "../Photo";
import Images from "../../utils/Images";

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 5vh 0 0 15%;
  font-family: "GandhiSansRegular";
`;

const H2 = styled.h2`
  color: #7b78e5;
  font-size: 24px;
  margin-bottom: 4vh;
`;

const Cards = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 5vh;
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
