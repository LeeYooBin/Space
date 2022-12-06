import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonStyle = styled.button`
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

const Button = ({ text, action }) => (
  <ButtonStyle type="button" onClick={action}>
    {text}
  </ButtonStyle>
);

Button.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
};

export default Button;
