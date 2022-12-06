import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Content = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  width: 90%;
  margin-left: 15px;
  position: relative;
  z-index: 0;

  ::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 10px;
    z-index: -1;
    border: 2px solid transparent;
    background: linear-gradient(to right, #c98cf1, #7b78e5) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  @media screen and (min-width: 720px) {
    width: 33%;
    margin-left: 0;
  }
`;

const Input = styled.input`
  width: 92%;
  height: 30px;
  color: #d9d9d9;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  outline: 0;
  font-family: "GandhiSansRegular";

  ::placeholder {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background: transparent;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;

const SearchInput = ({
  placeholder,
  value,
  ref,
  onChange,
  onClick,
  onFocus,
  Image,
  ImageDescription,
}) => (
  <Content>
    <Input
      type="text"
      value={value}
      ref={ref}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
    />
    <Button onClick={onClick}>
      <img src={Image} alt={ImageDescription} />
    </Button>
  </Content>
);

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  ref: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  Image: PropTypes.string,
  ImageDescription: PropTypes.string,
};

export default SearchInput;
