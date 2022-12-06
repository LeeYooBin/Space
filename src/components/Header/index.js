import React from "react";
import styled from "styled-components";
import SearchInput from "../SearchInput";
import Logo from "../../assets/logo.png";
import Search from "../../assets/search.png";

const Content = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 24px;
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
    <SearchInput
      placeholder={
        window.screen.width <= 720
          ? "Searching for?"
          : "What are u searching for?"
      }
      Image={Search}
      ImageDescription="Lupa"
    />
  </Content>
);

export default Header;
