import React from 'react';
import { Link, Switch, Route } from "react-router-dom";
import TechViewpage from '../Tech-view/TechViewPage';




const ShopItem = (props) => {
   const { item } = props;
   const id = item.id;

   const MoreDetailsClick = e => {
    e.preventDefault();
    }

    const RequestRentalClick = e => {
    e.preventDefault();
    }

    console.log('item', item)

    
 
    
    return (
        <div className='ShopItem' to={`/shop/item/${id}`}>
            <h2>{item.name}</h2>
            <img src={item.image_url} alt='item' />
            <p>{item.description}</p>
            <div>
                {/* <Link to={`/shop/item/${id}`} style={{ textDecoration: 'none' }} > <button >More Details</button></Link> */}
                <button>Request Rental</button>
            </div>
        </div>
    )
}

export default ShopItem;