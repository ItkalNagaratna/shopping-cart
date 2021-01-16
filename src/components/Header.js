import React from 'react';
import styled from 'styled-components';


const Header = () => {
    return (
        <HeaderWrapper>
            <Logo style={{ fontSize: 25 }}>Shopping Cart</Logo>
        </HeaderWrapper>
    )
}

export default Header;

const HeaderWrapper = styled.div`
  padding: 25px;
  background-color: #fd9c0c;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 2px 9px 19px 0px #afa79c;

`;
const Logo = styled.p`
  /* font-size: 30px; */
  line-height: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;

`;