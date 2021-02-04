import React from 'react';
import styled from 'styled-components';

const ShopItem = (props) => {
   const { item } = props;
//    const id = item.id;

//    const MoreDetailsClick = e => {
//     e.preventDefault();
//     }

//     const RequestRentalClick = e => {
//     e.preventDefault();
//     }

    
    return (
        <div className='ShopItem'>
            <h2>{item.name}</h2>
            <img src={item.image_url} alt='item' />
            <p>{item.description}</p>
            <a href={`mailto:${item.email}`} target="_blank">
                <StyledButton> Request Rental</StyledButton> 
            </a>
        </div>
    )
}

const StyledButton = styled.button`
    border-radius: 25px;
    color: white;
    background-color: #4267B2;
    width: 50%;
    margin-top: 25px;
    padding: 4%;
    font-size: 1rem;
    margin-bottom: 2%;
`


export default ShopItem;

