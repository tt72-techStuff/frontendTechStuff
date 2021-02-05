import React from 'react';
import { useHistory } from "react-router-dom";




const ShopItem = (props) => {
    const history = useHistory();
    const { item } = props;
    const id = item.itemId;

    const MoreDetailsClick = e => {
        e.preventDefault();
        history.push(`/item/${item.id}`);
    }

    const RequestRentalClick = e => {
        e.preventDefault();

    }



    return (
        <div className='ShopItem'>
            <h2>{item.name}</h2>
            <img src={item.image_url} alt='item' />
            <p>{item.description}</p>
            <div>
                <button onClick={MoreDetailsClick}>More Details</button>
                <button>Request Rental</button>
            </div>
        </div>
    )
}

export default ShopItem;