import React from 'react';
import { useHistory } from "react-router-dom";
// import styled from "styled-components";




const ShopItem = (props) => {
    const history = useHistory();
    const { item } = props;

    const MoreDetailsClick = e => {
        e.preventDefault();
        history.push(`/item/${item.id}`);
    }




    return (
        <div className='ShopItem'>
            <h2>{item.name}</h2>
            <img src={item.image_url} alt='item' />
            <p>{item.description}</p>
            <div>
                <button onClick={MoreDetailsClick}>More Details</button>
            </div>
        </div>
    )
}

// const StyledButton = styled.button`
//     border-radius: 25px;
//     color: white;
//     background-color: #4267B2;
//     width: 50%;
//     margin-top: 25px;
//     padding: 4%;
//     font-size: 1rem;
//     margin-bottom: 2%;
// `


export default ShopItem;

