import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Content = styled.div`
  width: 65vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #d9d9d9;
  font-family: "GandhiSansRegular";
  font-size: 16px;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;

const P = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2.5vh;

  @media screen and (min-width: 1000px) {
    margin: 0;
  }
`;

const List = styled.ul`
  list-style: none;
  width: 380px;
  padding: 0;
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 1000px) {
    justify-content: space-between;
  }
`;

const Item = styled.li`
  background-color: rgba(148, 163, 184, 0.3);
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
`;

const Tags = ({ tags, action }) => (
  <Content>
    <P>Filter by tags</P>
    <List>
      {tags.map((tag) => (
        <Item key={tag} onClick={() => action(tag)}>
          {tag}
        </Item>
      ))}
    </List>
  </Content>
);

Tags.propTypes = {
  tags: PropTypes.string,
  action: PropTypes.func,
};

export default Tags;
