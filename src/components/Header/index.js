import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import Search from "../../assets/search.png";

const Content = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 24px;
`;

const InputWrapper = styled.label`
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

const Header = () => (
  <Content>
    <Button>
      <img src={Logo} alt="Logo" />
    </Button>
    <InputWrapper>
      <Input
        type="text"
        placeholder={
          window.screen.width <= 720
            ? "Searching for?"
            : "What are u searching for?"
        }
      />
      <Button>
        <img src={Search} alt="Lupa" />
      </Button>
    </InputWrapper>
  </Content>
);

export default Header;
