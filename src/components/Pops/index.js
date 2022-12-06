import React from "react";
import styled from "styled-components";
import PopsImages from "../../utils/PopsImages";
import Button from "../Button";

const Content = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 800px;
  color: #7b78e5;
  font-family: "GandhiSansRegular";
  font-size: 16px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const H2 = styled.h2`
  margin-top: 5.67rem;
  margin-bottom: 2.128rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 77%;
  padding: 0;
  list-style: none;
`;

const Item = styled.li``;

const Image = styled.img`
  width: 150px;
  height: 100px;
`;

const Pops = () => (
  <Content>
    <H2>Popular</H2>
    <List>
      {PopsImages.map((item) => (
        <Item key={item.id}>
          <Image src={item.image} alt={item.alt} />
        </Item>
      ))}
    </List>
    <Button text="Load more photos" />
  </Content>
);

export default Pops;
