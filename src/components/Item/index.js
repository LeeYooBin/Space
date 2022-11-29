import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Content = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  :first-child {
    a {
      font-weight: 700;
      color: #7b78e5;
      font-family: "GandhiSansRegular";
    }
  }
`;

const Image = styled.img`
  margin-right: 0.5rem;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 1.125rem;
  color: #d9d9d9;
  font-family: "GandhiSansRegular";
`;

const Item = ({ src, alt, text, href }) => (
  <Content>
    <Image src={src} alt={alt} />
    <Link href={href}>{text}</Link>
  </Content>
);

Item.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
};

export default Item;
