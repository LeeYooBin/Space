import React, { useState } from "react";
import styled from "styled-components";
import Tags from "../Tags";
import Photo from "../Photo";
import Images from "../../utils/Images";

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Gallery = () => {
  const [items, setItems] = useState(Images);
  const tags = ["All", ...new Set(Images.map((item) => item.tag))];

  const filterImages = (tag) => {
    const newImages =
      tag === "All" ? Images : Images.filter((image) => image.tag === tag);
    setItems(newImages);
  };

  return (
    <Content>
      <H2>Browse the gallery</H2>
      <Tags tags={tags} action={filterImages} />
      <Cards>
        {items.map((item) => (
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
};

export default Gallery;
