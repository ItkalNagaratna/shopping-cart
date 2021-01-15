import React from 'react';
import styled from 'styled-components';

const data = [
  {
    id: "1",
    brandName: "Pillsbury",
    productName: "Pillsbury Multi Grain Atta",
    description: "Unique mix of 7 natural grains : wheat, soy, maize, ragi, chana dal, oats and barley in the right proportion",
    quantity: "5 kg",
    price: "₹ 219.00 ",
    mrp: "₹ 310.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/71yUVdf6t9L._SL1500_.jpg",
    offer: "29%",
  },
  {
    id: "2",
    brandName: "Sunfeast",
    productName: "Sunfeast Dark Fantasy Choco Fills",
    description: "Epitomizes the brand promise of pure indulgence, Enrobed within a perfectly baked rich cookie outer.    ",
    quantity: "600 g",
    price: "19",
    mrp: "22",
    image: "https://images-na.ssl-images-amazon.com/images/I/71yR4SYp3iL._SL1500_.jpg",
    offer: "18%",
  },
  {
    id: "3",
    brandName: "Roxo",
    productName: "ROXO P30 Wireless Bluetooth Headphone",
    description: "ROXO P30 Wireless Bluetooth Headphone Memory Card and AUX Support (Blue), AMAZING SOUND AND BUILT TO STAY COMFORTABLE",
    quantity: "1",
    price: "₹ 869.00 ",
    mrp: "₹ 1,499.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/71X-bX3ozYL._SL1500_.jpg",
    offer: "(42%)",
  },
  {
    id: "4",
    brandName: "Loreal Paris",
    productName: "Loreal Paris Total Repair 5 Shampoo",
    description: "Helps fight against the five visible signs of damaged hair - hair fall, dryness, roughness, dullness, and split ends",
    quantity: "1 L",
    price: "₹ 799.00 ",
    mrp: "₹ 399.00 ",
    image: "https://images-na.ssl-images-amazon.com/images/I/61YKD5x27CL._SL1000_.jpg",
    offer: "(50%)",
  },
  {
    id: "5",
    brandName: "Fortune",
    productName: "Fortune Xpert Pro Immunity",
    description: "100+ Natural antioxidants to help strengthen your immune system, Vitamin A,D, E to improve your immune responses and help against bacterial and viral infections  ",
    quantity: "5 L",
    price: "₹ 675.00 ",
    mrp: "₹ 750.00 ",
    image: "https://images-na.ssl-images-amazon.com/images/I/81vUJK698YL._SL1500_.jpg",
    offer: "(60%)",
  },
  {
    id: "6",
    brandName: "Dabur",
    productName: "Dabur Honey",
    description: "Dabur Honey 100% Pure World's No.1 Honey Brand with No Sugar Adulteration , Squeezy Pack - 225g (Buy 1 Get 1 Free)",
    quantity: "100 g",
    price: "₹ 99.00 ",
    mrp: "₹ 140.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/81I32cy20JL._SL1500_.jpg",
    offer: "(29%)",
  },
  {
    id: "7",
    brandName: "Maggi",
    productName: "Maggi Pazzta Masala Penne",
    description: "Lip-smacking pasta in a saucy mix, Made from 100% suji/ rawa, Ready in just 5-minutes for instant snacking",
    quantity: "65 g",
    price: "₹ 21.00",
    mrp: "₹ 25.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/81xadE2ZfXL._SL1500_.jpg",
    offer: "(16%)",
  },
  {
    id: "8",
    brandName: "Solimo",
    productName: " Solimo 4 Piece Storage Basket Set, Brown",
    description: "Made sturdy from high-quality virgin PP plastic, Dimensions- Large: LWH: 380 x 320 x 140 mm, Weight: 420 gm; Medium: LWH: 240 x 200 x 100 mm, Weight: 160 gm; Small: LWH: 200 x 140 x 60 mm, Weight: 90 gm",
    quantity: "1 ",
    price: "₹ 469.00",
    mrp: "₹ 1,000.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/91%2BD1HoOX9L._SL1500_.jpg",
    offer: "(53%)",
  },
  {
    id: "9",
    brandName: "Solimo",
    productName: "Solimo Microfiber Reversible Comforter",
    description: "Amazon Brand - Solimo Microfiber Reversible Comforter, Single (Aqua Blue & Olive Green, 200 GSM)",
    quantity: "1 ",
    price: "₹ 1,199.00",
    mrp: "₹ 2,000.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/91JNmgQStIL._SL1500_.jpg",
    offer: "(50%)",
  },
  {
    id: "10",
    brandName: "Solimo",
    productName: "Solimo Wi-Fi Smart Light",
    description: "Solimo Wi-Fi Smart Light, 12W, B22 Holder, Alexa Enabled (Yellow/Light Yellow/White)",
    quantity: "1 ",
    price: "₹ 499.00",
    mrp: "₹ 1,000.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/71bltWjd65L._SL1500_.jpg",
    offer: "(50%)",
  }
]




const App = () => {
  return (
    <Container>
      <Header>
        <Logo style={{fontSize: 25}}>Shopping Cart</Logo>
      </Header>
      <Content >
        {data && data.map((item, index) => {
          return (
              <Row key={index}>
                <Card>
                  <CardItem style={{ textAlign: "center" }}>
                    <Image src={item.image} />
                    <Text style={{ marginTop: 20, color: "#F91212" }}> Offer: {item.offer} OFF</Text>
                  </CardItem>
                  <CardItem>
                  <Note style={{ marginBottom: 10 }}>{item.brandName}</Note>
                    <Title>{item.productName}</Title>
                    <Note style={{ marginTop: 20, color: "gray" }}>{item.description}</Note>
                    <Note >Quantity: {item.quantity}</Note>
                    <Note >M.R.P: {item.mrp}</Note>
                    <Note>Price: {item.price}</Note>
                    <CardButton>
                      <AddCart style={{ color: "#fff" }}>Add To Cart</AddCart>
                      <Button>
                        <QuantityButton><Text style={{ color: "#fff" }}>+</Text></QuantityButton>
                        <Text style={{ marginTop: 10, paddingLeft: 10, paddingRight: 10 }}>0</Text>
                        <QuantityButton><Text style={{ color: "#fff", }}>-</Text></QuantityButton>
                      </Button>
                    </CardButton>
                  </CardItem>
                </Card>
              </Row>

          )
        })}

      </Content>
      <Footer>
        <Logo>Shopping Cart</Logo>
      </Footer>
    </Container>
  );
}

export default App;



const Container = styled.div`
  background-color: #F4F4F1;

`;
const Header = styled.div`
  padding: 25px;
  background-color: #fd9c0c;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 2px 9px 19px 0px #afa79c;

`;
const Logo = styled.text`
  /* font-size: 30px; */
  line-height: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;

`;
const Content = styled.div`
  margin-left: 25%;
  margin-right: 25%;
  background-color: #F4F4F1;
  padding-bottom: 150px;
  padding-top: 150px;
  @media (max-width: 900px){
    margin: 5% 5%;

  }
 
`;
const Row = styled.div`
  border-radius: 10px;
  display: flex;
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
margin-top: 40px;

  @media (max-width: 900px){
    width: 200px;
    height: 200px;
    margin: 0 auto;
    margin-top: 40px;

      }
`;
const Text = styled.text`
  font-size: 15px;
  line-height: 15px;
  margin-top: 20px;

`;
const Title = styled.h1`
 font-size: 20px;
 font-weight: bold;

`;
const Note = styled.text`
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
 /* padding: 10px 20px; */
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
    @media (max-width: 1200px){
    padding: 10px 10px;
    width: 100%;
    }
`;
const Divder = styled.div`
  border-bottom: 0.5px solid black;
  width: 100%;
`;
const Footer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  padding: 25px;

`;
