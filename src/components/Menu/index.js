import React from "react";
import styled from "styled-components";
import Item from "../Item";
import MenuItems from "../../utils/MenuItems";

const Content = styled.nav`
  width: 100%;

  @media screen and (min-width: 1000px) {
    width: 18%;
  }
`;

const List = styled.ul`
  padding: 0 0.5rem;
  margin: 0;
  height: 5vh;
  list-style: none;
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: flex-start;
  overflow-x: scroll;

  @media screen and (min-width: 500px) {
    justify-content: space-around;
  }

  @media screen and (min-width: 1000px) {
    padding-left: 0.5rem;
    gap: 0;
    height: 276px;
    flex-direction: column;
    overflow: hidden;
  }
`;

const Menu = () => (
  <Content>
    <List>
      {Object.values(MenuItems).map((item) => (
        <Item src={item.src} alt={item.alt} text={item.text} href={item.href} />
      ))}
    </List>
  </Content>
);

export default Menu;
