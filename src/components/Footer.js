import React from 'react';
import styled from 'styled-components';


const Footer = (props) => {

    const { cart, displayPopup } = props;
    let total = 0;

    if ( cart.length > 0 ) {
      total = cart.reduce((a, {price,quantity}) => a + (parseInt(quantity) * parseInt(price)), 0);
    }

  return (
    <FooterWrapper>
      <CheckoutContainer>
      <Card>
        <CardItem>
          <Text>Items: {cart.length}</Text>
          <Text>Total Price: ₹{total}</Text>
        </CardItem>
        <CheckoutButton onClick={() => {displayPopup({ visible: true, total: total })}} disabled={ cart.length > 0 ? false : true }>Checkout</CheckoutButton>

      </Card>
      </CheckoutContainer>
  
      <Logo>Shopping Cart</Logo>
    </FooterWrapper>
  )
}

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 25px;

  @media (max-width: 900px) {
    padding: 0;
  }

`;

const Logo = styled.p`
  /* font-size: 30px; */
  line-height: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  text-decoration-line: underline;

  @media (max-width: 900px) {
    display: none;
  }

`;

const CheckoutContainer = styled.div`
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  transition: all 0.3s ease 0s;
  margin-left: 20%;
  margin-right: 20%;

  background-color: #fff;
  border-width: thin;
  border: 1px solid #000;

  @media (max-width: 900px) {
    margin: 20px;
  }


`;
const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 10px;  
  
  background-color: "#000";

    @media (max-width: 900px){
    grid-template-columns: 1fr ;
    padding: 0px 0px;

    }
  
`;
const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: "#000";


`;
const Text = styled.p`
  font-size: 18px;
  line-height: 20px;
  margin-top: 10px;
  /* font-weight: bold */
`;


const CheckoutButton = styled.button`
 background-color: #2b9212;
 color: #fff;
 border-radius: 20px;
 outline: 0;
 border: 0px;
 font-size: 20px;
 cursor: pointer;
 &:hover {
   background: #236114;
 }

 &:disabled {
  background: #dddddd;
}

  @media (max-width: 900px){
    padding: 10px 10px;
    width: 100%;
    }
   
`;
