import React from "react";
import styled from "styled-components";
import Item from "../Item";
import MenuItems from "../../utils/MenuItems";

const Content = styled.nav`
  width: 18%;
`;

const List = styled.ul`
  padding-left: 0.5rem;
  margin: 0;
  height: 276px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
