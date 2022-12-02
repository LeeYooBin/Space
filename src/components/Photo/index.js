import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Fav from "../../assets/favorito.png";
import Open from "../../assets/open.png";

const Content = styled.li`
  background-color: #041833;
  border-radius: 20px;
  height: 280px;
  width: 285px;
  margin-right: 1rem;
  margin-bottom: 1.35rem;
  cursor: pointer;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.025);
    transition: 0.18s;
  }
`;

const Image = styled.img`
  height: 75%;
  width: 100%;
`;

const Description = styled.p`
  margin: 0;
  padding: 0 16px;
  font-size: 1.25rem;
  color: #d9d9d9;
  font-family: "GandhiSansBold";
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  width: 100%;
`;

const Credits = styled.p`
  margin: 0;
  margin-top: 0.5rem;
  color: #154580;
`;

const Span = styled.span`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.img`
  cursor: pointer;
`;

const Photo = ({ key, image, title, credits }) => (
  <Content key={key}>
    <Image src={image} alt={title} />
    <Description>{title}</Description>
    <Wrapper>
      <Credits>{credits}</Credits>
      <Span>
        <Icon src={Fav} alt="Favorite" />
        <Icon src={Open} alt="Open" />
      </Span>
    </Wrapper>
  </Content>
);

Photo.propTypes = {
  key: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  credits: PropTypes.string,
};

export default Photo;
