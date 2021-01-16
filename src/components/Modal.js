import React from 'react';
import styled from 'styled-components';


const ModalComponent = (props) => {

    return (
        <Modal>
        <ModalInner>
            <SuccessMessage>Your Transaction of <span>₹{props.popup.total}</span> Was Successful!</SuccessMessage>
            <SuccessMessage style={{ marginTop: 30, color: "#fd9c0c" }}>Thank you.</SuccessMessage>
        </ModalInner>
        </Modal>
    )

}

export default ModalComponent;



const Modal = styled.div`
    width: 100%;
    max-height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.5);
`;

const ModalInner = styled.div`
    width: 400px;
    background-color: #fff;
    padding: 100px 50px;
    margin: 0 auto;
    margin-top: 100px;
    border-radius: 5px;

    @media (max-width: 900px) {
        max-width: 60%;
    }

`;

const SuccessMessage = styled.h1`
    font-size: 26px;
    text-align: center;

    @media (max-width: 900px) {
        font-size: 26px;
    }

    span { color: #fd9c0c; }
`;
