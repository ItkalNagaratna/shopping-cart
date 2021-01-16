import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductItem from './components/ProductItem';
import Modal from './components/Modal';




async function loadData() {
    return new Promise( async (resolve, reject) => {
        try {
            const data = await fetch('./products.json');
            const response = await data.json();
            resolve(response);
        } catch (e) {
            console.log("error", e);
            reject(e);
        }
    });
}


const App = (props) => {

    const [ data, setData ] = useState([]);
    const [ cart, setCart ] = useState([]);
    const [ popup, setPopup ] = useState({ visible: false, total: 0 });

    
    useEffect( () => {
        ( async function load() {
            const response = await loadData();
            setData(response)
        })();
    }, []);

    const addToCart = ( item={} ) => {
        let cartItems = [...cart];
        if ( cartItems && cartItems.length > 0 ) {
            let existing = cartItems.findIndex( ci => ci.id === item.id );
            if ( existing !== -1 ) {
                cartItems[existing].quantity = cartItems[existing].quantity + 1;
                setCart(cartItems);
            } else {
                setCart([...cartItems, {
                    id: item.id,
                    quantity: 1,
                    price: item.price,
                }]);
            }
        } else {
            setCart([{ id: item.id, quantity: 1, price: item.price }]);
        }
    }

    const removeFromCart = (item={}) => {
        let cartItems = [...cart];
        if ( cartItems && cartItems.length > 0 ) {
            let existing = cartItems.findIndex( ci => ci.id === item.id );
            if ( existing !== -1 ) {
                if ( cartItems[existing].quantity === 1 ) {
                    const cartItemsWithoutCurrent = cartItems.filter( ci => ci.id !== item.id );
                    setCart(cartItemsWithoutCurrent);    
                } else {
                    cartItems[existing].quantity = cartItems[existing].quantity - 1;
                    setCart(cartItems);    
                }
            }
        }
    }

    const displayPopup = (data) => {
        setPopup(data);

        // auto close popup after few seconds.
        setTimeout( () => {
            setPopup({ ...popup, visible: false });
        }, 5000 );

    }


    return (
    <Container>
        <Header/>

        <Content>
            {data && data.map((item, index) => {
                return <ProductItem key={index} item={item} cart={ cart } addToCart={addToCart} removeFromCart={removeFromCart} />
            })}
        </Content>

        <Footer cart={cart} displayPopup={displayPopup} />
        
        { popup.visible &&
            <Modal popup={popup} />
        }
    
    </Container>
  );
}

export default App;



const Container = styled.div`
  background-color: #F4F4F1;
`;
const Content = styled.div`
  margin-left: 25%;
  margin-right: 25%;
  background-color: #F4F4F1;
  padding-bottom: 250px;
  padding-top: 150px;
  
    @media (max-width: 900px){
        margin: 5%;
    }
 
`;

