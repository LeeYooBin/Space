import React from "react";
import styled from "styled-components";
import PopsImages from "../../utils/PopsImages";

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

const Button = styled.button`
  margin-top: 1.5rem;
  background: transparent;
  border: none;
  color: #d9d9d9;
  font-family: "GandhiSansRegular";
  font-size: 16px;
  width: 100%;
  padding: 12px 16px;
  position: relative;
  z-index: 0;
  cursor: pointer;

  :hover {
    border-radius: 10px;
    background: linear-gradient(to right, #c98cf1, #7b78e5) border-box;
    color: #041833;
    transition: 0.1s;
  }

  ::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 10px;
    z-index: -1;
    border: 2px solid transparent;
    background: linear-gradient(to right, #c98cf1, #154580) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    background: linear-gradient(to right, #c98cf1, #7b78e5) border-box;
    color: #041833;
    transition: 0.1s;
  }
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
    <Button type="button">Load more photos</Button>
  </Content>
);

export default Pops;
