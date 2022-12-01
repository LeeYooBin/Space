import React from "react";
import styled from "styled-components";

const Content = styled.div`
  width: 65vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #d9d9d9;
  font-family: "GandhiSansRegular";
  font-size: 16px;
`;

const P = styled.p`
  font-size: 1.25rem;
`;

const List = styled.ul`
  list-style: none;
  width: 380px;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.li`
  background-color: rgba(148, 163, 184, 0.3);
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
`;

const Tags = () => (
  <Content>
    <P>Filter by tags</P>
    <List>
      <Item>Stars</Item>
      <Item>Galaxies</Item>
      <Item>Moons</Item>
      <Item>Planets</Item>
    </List>
  </Content>
);

export default Tags;
