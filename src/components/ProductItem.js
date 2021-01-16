import React from 'react';
import styled from 'styled-components';


const ProductItem = (props) => {
  const { item, addToCart, removeFromCart, cart } = props;

  const inCart = cart.find( cartItem => cartItem.id === item.id );
  let itemTotal = null;
  if ( inCart ) {
    itemTotal = inCart.quantity * parseInt(inCart.price);
  }

  return (
    <div>
      <ProductInfoContainer>
        <Card>
          <CardItem style={{ textAlign: "center" }}>
            <Image src={item.image} />
            <Text style={{ marginTop: 20, color: "#F91212" }}> Offer: {item.offer} OFF</Text>
          </CardItem>
          <CardItem>
            <Note style={{ marginBottom: 10 }}>{item.brandName}</Note>
            <Title>{item.productName}</Title>
            <Note style={{ marginTop: 20, color: "#5C5B5B" }}>{item.description}</Note>
            <Note >Quantity: {item.quantity}</Note>
            <Note >M.R.P: ₹{item.mrp}</Note>
            <Note>Price: ₹{item.price} { itemTotal ? `[ ₹${itemTotal} ]` : '' }</Note>
            <CardButton>
              <AddCart onClick={ () => { addToCart(item) } }>Add To Cart</AddCart>
              <Button>
                <QuantityButton onClick={ () => { removeFromCart(item) } }>-</QuantityButton>
                <Text style={{ marginTop: 10, paddingLeft: 10, paddingRight: 10 }}>{ inCart ? inCart.quantity : '0' }</Text>
                <QuantityButton onClick={ () => { addToCart(item) } }>+</QuantityButton>
              </Button>
            </CardButton>
          </CardItem>
        </Card>
      </ProductInfoContainer>
    </div>

  )

}

export default ProductItem;


const ProductInfoContainer = styled.div`
  border-radius: 10px;
  /* display: flex; */
  padding: 20px;
  margin-bottom: 20px;
  transition: all 0.3s ease 0s;
  /* background-image: linear-gradient(89.9deg,rgb(251 238 238) 0.1%,rgb(255 253 203) 47.9%,rgb(239 235 155) 100.2%); */
   /* border: 0.1px solid #000; */
   background-color: #fff;
   border-width: thin;
   /* border-bottom: 0.1px solid #000; */
    
`;
const Card = styled.div`
  /* border: 1px solid #000; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 30px;
  padding: 0px 30px;
  margin-bottom: 10px;  

  @media (max-width: 900px){
    grid-template-columns: 1fr ;
    padding: 0px 0px;
  }
  
`;
const CardItem = styled.div`
  display: flex;
  flex-direction: column;

`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-top: 40px;

  @media (max-width: 900px){
    width: 200px;
    height: 200px;
    margin: 0 auto;
    margin-top: 40px;

  }
`;
const Text = styled.p`
  font-size: 15px;
  line-height: 15px;
  margin-top: 20px;

`;
const Title = styled.h1`
 font-size: 20px;
 font-weight: bold;

`;
const Note = styled.p`
  font-size: 15px;
  margin-top: 10px;
  line-height: 20px;
 
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

`;
const CardButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 30px;
  margin-top: 20px;

`;

const QuantityButton = styled.button`
  background-color: #2b9212;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  outline: 0;
  cursor: pointer;
  border: 0px;

  &:hover {
    background: #236114;
  }
`;

const AddCart = styled.button`
  background-color: #2b9212;
  color: #fff;
  border-radius: 20px;
  outline: 0;
  border: 0px;
  cursor: pointer;

  &:hover {
    background: #236114;
  }

  @media (max-width: 900px){
    padding: 10px 10px;
    width: 100%;
  }
    
`;
